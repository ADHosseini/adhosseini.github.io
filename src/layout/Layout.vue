<template>
  <KTLoader v-if="loaderEnabled" :logo="loaderLogo"></KTLoader>

  <!-- begin:: Body -->
  <div class="page d-flex flex-row flex-column-fluid">
    <!-- begin:: Aside Left -->
    <KTAside
      v-if="asideEnabled"
      :compact-logo="themeCompactLogo"
      :default-logo="themeDefaultLogo"
    ></KTAside>
    <!-- end:: Aside Left -->

    <div id="kt_wrapper" class="wrapper d-flex flex-column flex-row-fluid">
      <KTHeader></KTHeader>

      <!-- begin:: Content -->
      <div
        id="kt_content"
        class="content d-flex flex-column flex-column-fluid fs-6"
      >
        <!-- begin:: Content Body -->
        <div
          id="kt_content_container"
          :class="{
            'container-fluid': contentWidthFluid,
            container: !contentWidthFluid,
          }"
        >
          <router-view />
        </div>
        <!-- end:: Content Body -->
      </div>
      <!-- end:: Content -->
      <KTFooter></KTFooter>
    </div>
  </div>
  <!-- end:: Body -->
  <KTScrollTop></KTScrollTop>
  <KTUserMenu></KTUserMenu>
</template>

<script lang="ts">
import { defineComponent, onMounted, watch } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";
import KTAside from "@/layout/aside/Aside.vue";
import KTHeader from "@/layout/header/Header.vue";
import KTFooter from "@/layout/footer/Footer.vue";
import HtmlClass from "@/core/services/LayoutService";
import KTScrollTop from "@/layout/extras/ScrollTop.vue";
import KTUserMenu from "@/layout/header/partials/ActivityDrawer.vue";
import KTLoader from "@/components/Loader.vue";
import KTUpgradeToPro from "@/layout/extras/UpgradeToPro.vue";
import { Actions } from "@/store/enums/StoreEnums";
import {
  MenuComponent,
  DrawerComponent,
  ScrollComponent,
} from "@/assets/ts/components/index";
import { removeModalBackdrop } from "@/core/helpers/dom";
import {
  toolbarDisplay,
  loaderEnabled,
  contentWidthFluid,
  loaderLogo,
  asideEnabled,
  subheaderDisplay,
  themeDefaultLogo,
  themeCompactLogo,
} from "@/core/helpers/config";
import { isDocPage } from "@/core/helpers/documentation";

export default defineComponent({
  name: "Layout",
  components: {
    KTAside,
    KTHeader,
    KTFooter,
    KTScrollTop,
    KTUserMenu,
    KTLoader,
  },
  setup() {
    const store = useStore();
    const route = useRoute();

    // show page loading
    store.dispatch(Actions.ADD_BODY_CLASSNAME, "page-loading");

    // initialize html element classes
    HtmlClass.init();

    onMounted(() => {
      DrawerComponent.updateAll();
      ScrollComponent.updateAll();
      MenuComponent.createInstances('[data-kt-menu="true"]');

      // Simulate the delay page loading
      setTimeout(() => {
        // Remove page loader after some time
        store.dispatch(Actions.REMOVE_BODY_CLASSNAME, "page-loading");
      }, 500);
    });

    watch(
      () => route.path,
      () => {
        MenuComponent.updateDropdowns();

        setTimeout(() => {
          DrawerComponent.bootstrap();
          ScrollComponent.bootstrap();
          MenuComponent.createInstances('[data-kt-menu="true"]');
        }, 10);

        removeModalBackdrop();
      }
    );

    return {
      toolbarDisplay,
      loaderEnabled,
      contentWidthFluid,
      loaderLogo,
      asideEnabled,
      subheaderDisplay,
      isDocPage,
      themeDefaultLogo,
      themeCompactLogo,
    };
  },
});
</script>
