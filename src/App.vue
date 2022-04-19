<template>
  <router-view />
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import { useStore } from "vuex";
import { Mutations } from "@/store/enums/StoreEnums";

export default defineComponent({
  name: "app",
  setup() {
    const store = useStore();

    onMounted(() => {
      /**
       * this is to override the layout config using saved data from localStorage
       * remove this to use config only from static config (@/core/config/DefaultLayoutConfig.ts)
       */
      store.commit(Mutations.OVERRIDE_LAYOUT_CONFIG);
    });
  },
});
</script>

<style lang="scss">
@import "~bootstrap-icons/font/bootstrap-icons.css";
@import "~@vueform/multiselect/themes/default.css";
@import "~prism-themes/themes/prism-shades-of-purple.css";
@import "~sweetalert2/dist/sweetalert2.css";
@import "~element-plus/lib/theme-chalk/index.css";
@import "~@fortawesome/fontawesome-free/css/all.min.css";

// Main demo style scss
@import "assets/sass/plugins";
@import "assets/sass/style";

@font-face {
  font-family: iransans;
  src: url("assets/fonts/IRANSansWebFaNum.woff") format("woff");
  font-weight: normal;
  font-style: normal;
  font-display: block;
}

@font-face {
  font-family: new;
  src: url("assets/fonts/Sarbaz-Regular.woff2") format("woff2");
  font-weight: normal;
  font-style: normal;
  font-display: block;
}

.me-5 {
  margin-left: 1.25rem !important;
  margin-right: 0rem !important;
}

.card {
  direction: rtl;
  font-family: iransans;
}

.myH1,
h1,
h4,
.fw-bolder {
  font-family: new;
  font-weight: 400 !important;
}

.breadcrumb .breadcrumb-item:after {
  font-family: new;
  content: "/";
  padding-left: 0.5rem;
  padding-right: 0.5rem;
}

.drawer.drawer-start {
  right: 0;
  transform: translateX(+100%);
}

.drawer.drawer-on {
  transform: none;
}

.menu-arrow-gray-500 .menu-item .menu-link .menu-arrow:after {
  transform: rotateZ(180deg);
}

.menu-item .menu-link .menu-bullet {
  margin-right: 0rem;
  margin-left: 0.5rem;
}
.menu-item .menu-link .menu-icon {
  margin-right: 0.5rem;
  margin-left: 0.5rem;
}
.aside-menu .menu .menu-sub .menu-item a a.menu-link {
  padding-left: 0rem;
  padding-right: 2rem;
}

.btn .svg-icon {
  transform: rotateZ(180deg);
}

@media (min-width: 992px) {
  .aside-fixed .wrapper {
    padding-right: 280px !important;
    padding-left: 0px !important;
  }
  .aside-fixed .aside {
    right: 0 !important;
  }
  .aside-fixed[data-kt-sticky-header="on"] .header {
    right: 280px;
    left: 0;
  }
}
.menu-title {
  font-family: iransans;
}
</style>
