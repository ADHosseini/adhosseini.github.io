<template>
  <div class="card mb-2">
    <!--begin::Card Body-->
    <div class="card-body fs-6 py-15 px-10 py-lg-15 px-lg-15 text-gray-700">
      <!--begin::Section-->
      <div class="px-md-10 pt-md-10 pb-md-5">
        <!--begin::Block-->
        <!--        <div class="text-center mb-20">-->
        <!--          <h1 class="fs-2tx fw-bolder mb-8">-->
        <!--            Rapidly build modern web apps with-->
        <!--            <span class="d-inline-block position-relative ms-2">-->
        <!--              <span class="d-inline-block mb-2">{{ appFullName }}</span>-->
        <!--              <span-->
        <!--                class="-->
        <!--                  d-inline-block-->
        <!--                  position-absolute-->
        <!--                  h-8px-->
        <!--                  bottom-0-->
        <!--                  end-0-->
        <!--                  start-0-->
        <!--                  bg-success-->
        <!--                  translate-->
        <!--                  rounded-->
        <!--                "-->
        <!--              ></span>-->
        <!--            </span>-->
        <!--          </h1>-->
        <!--          <div class="fw-bold fs-2 text-gray-500 mb-10">-->
        <!--            The most advanced-->
        <!--            <span class="fw-bolder text-gray-900">Vue 3 Bootstrap 5</span-->
        <!--            >&nbsp;foundation with a solid design system, <br />extensive-->
        <!--            utility classes and custom made-->
        <!--            <span class="fw-bolder text-gray-900">in-house</span-->
        <!--            >&nbsp;components.-->
        <!--          </div>-->
        <!--        </div>-->
        <!--end::Block-->
        <!--begin::Row-->
        <div class="row g-0">
          <!--begin::Col-->
          <div class="col-md-6 mb-10">
            <div class="bg-light bg-opacity-50 rounded-3 p-10 mx-md-5 h-md-100">
              <div
                class="
                  d-flex
                  flex-center
                  w-60px
                  h-60px
                  rounded-3
                  bg-light-info bg-opacity-90
                  mb-10
                "
              >
                <span class="svg-icon svg-icon-info svg-icon-3x">
                  <inline-svg :src="require('@/assets/media/icons/cod001.svg')" />
                </span>
              </div>
              <h1 class="mb-5">توسعه سمت سرور</h1>
              <div class="fs-4 text-gray-600 py-3">
                کدهای این بخش روی سرور اجرا می شوند به این علت از دید کاربر مخفی
                هستن و فقط کاربر می تواند داده هایی که ارسال و دریافت کرده را
                مشاهده کند.
              </div>
              <router-link
                to="/"
                class="btn btn-lg btn-flex btn-link btn-color-info"
                >اطلاعات بیشتر
                <span class="svg-icon ms-2 svg-icon-3">
                  <inline-svg :src="require('@/assets/media/icons/arr064.svg')" />
                </span>
              </router-link>
            </div>
          </div>
          <!--end::Col-->
          <!--begin::Col-->
          <div class="col-md-6 mb-10">
            <div class="bg-light bg-opacity-50 rounded-3 p-10 mx-md-5 h-md-100">
              <div
                class="
                  d-flex
                  flex-center
                  w-60px
                  h-60px
                  rounded-3
                  bg-light-success bg-opacity-90
                  mb-10
                "
              >
                <span class="svg-icon svg-icon-success svg-icon-3x">
                  <inline-svg :src="require('@/assets/media/icons/art006.svg')" />
                </span>
              </div>
              <h1 class="mb-5">توسعه سمت کاربر</h1>
              <div class="fs-4 text-gray-600 py-3">
                کد هایی این بخش روی سیستم کاربر اجرا می شوند به این علت کاربر می
                تواند به کدها دسترسی داشته باشد. آنها را ذخیره کند و تغییر دهد.
              </div>
              <el-tooltip
                content="Available in Pro version"
                placement="top"
                effect="light"
              >
                <div class="btn btn-lg btn-flex btn-link btn-color-success">
                  اطلاعات بیشتر
                  <span class="svg-icon ms-2 svg-icon-3">
                    <inline-svg :src="require('@/assets/media/icons/arr064.svg')" />
                  </span>
                </div>
              </el-tooltip>
            </div>
          </div>
          <!--end::Col-->
          <!--begin::Col-->
          <div class="col-md-6 mb-10">
            <div class="bg-light bg-opacity-50 rounded-3 p-10 mx-md-5 h-md-100">
              <div
                class="
                  d-flex
                  flex-center
                  w-60px
                  h-60px
                  rounded-3
                  bg-light-danger bg-opacity-90
                  mb-10
                "
              >
                <span class="svg-icon svg-icon-danger svg-icon-3x">
                  <inline-svg :src="require('@/assets/media/icons/abs027.svg')" />
                </span>
              </div>
              <h1 class="mb-5">معرفی PHP به عنوان زبان سمت سرور</h1>
              <div class="fs-4 text-gray-600 py-3">
                قابلیت اجرا روی سیستم عامل های ویندوز و لینوکس را دارد کنترل پنل
                Cpanel و DirectAdmin معروف ترین کنترل پنل برای استفاده از آن روی
                سرور هستن.
              </div>
              <router-link
                to="/"
                class="btn btn-lg btn-flex btn-link btn-color-danger"
                >اطلاعات بیشتر
                <span class="svg-icon ms-2 svg-icon-3">
                  <inline-svg :src="require('@/assets/media/icons/arr064.svg')" />
                </span>
              </router-link>
            </div>
          </div>
          <!--end::Col-->
          <!--begin::Col-->
          <div class="col-md-6 mb-10">
            <div class="bg-light bg-opacity-50 rounded-3 p-10 mx-md-5 h-md-100">
              <div
                class="
                  d-flex
                  flex-center
                  w-60px
                  h-60px
                  rounded-3
                  bg-light-warning bg-opacity-90
                  mb-10
                "
              >
                <span class="svg-icon svg-icon-warning svg-icon-3x">
                  <inline-svg :src="require('@/assets/media/icons/art006.svg')" />
                </span>
              </div>
              <h1 class="mb-5">توسعه صفحات پویا با JavaScript</h1>
              <div class="fs-4 text-gray-600 py-3">
                کاربر امکان مشاهده و دستکاری این کد ها را دارد داده های ذخیره
                شده با این زبان فقط روی سیستم کاربر قرار دارند و امکان اشتراک
                گذاری بین سایر کاربر ها به شکل مستقیم وجود ندارد.
              </div>
              <router-link
                to="/"
                class="btn btn-lg btn-flex btn-link btn-color-warning"
                >اطلاعات بیشتر
                <span class="svg-icon ms-2 svg-icon-3">
                  <inline-svg :src="require('@/assets/media/icons/arr064.svg')" />
                </span>
              </router-link>
            </div>
          </div>
          <!--end::Col-->
          <!--begin::Col-->
          <div style="display: none" class="col-md-6 mb-10">
            <div class="bg-light bg-opacity-50 rounded-3 p-10 mx-md-5 h-md-100">
              <div
                class="
                  d-flex
                  flex-center
                  w-60px
                  h-60px
                  rounded-3
                  bg-light-success bg-opacity-90
                  mb-10
                "
              >
                <span class="svg-icon svg-icon-success svg-icon-3x">
                  <inline-svg :src="require('@/assets/media/icons/arr064.svg')" />
                </span>
              </div>
              <h1 class="mb-5">3rd Party Plugins</h1>
              <div class="fs-4 text-gray-600 py-3">
                All popular Vue3 3rd-party plugins are available to use, such as
                Vue-i18n, Vee-validate, Vue-fullcalendar.
              </div>
              <router-link
                to="/internationalization"
                class="btn btn-lg btn-flex btn-link btn-color-success"
                >Learn more
                <span class="svg-icon ms-2 svg-icon-3">
                  <inline-svg :src="require('@/assets/media/icons/arr064.svg')" />
                </span>
              </router-link>
            </div>
          </div>
          <!--end::Col-->
          <!--begin::Col-->
          <div style="display: none" class="col-md-6 mb-10">
            <div class="bg-light bg-opacity-50 rounded-3 p-10 mx-md-5 h-md-100">
              <div
                class="
                  d-flex
                  flex-center
                  w-60px
                  h-60px
                  rounded-3
                  bg-light-primary bg-opacity-90
                  mb-10
                "
              >
                <span class="svg-icon svg-icon-primary svg-icon-3x">
                  <inline-svg :src="`${publicPath}media/icons/duotune/abstract/abs027.svg`" />
                </span>
              </div>
              <h1 class="mb-5">SVG &amp; Font Icons</h1>
              <div class="fs-4 text-gray-600 py-3">
                Fulfill your icon needs with over 5000 available icons from SVG
                Duotune, Bootstrap Icons, Font Awesome, and Line Awesome sets.
              </div>
              <router-link
                to="/icons/duotone"
                class="btn btn-lg btn-flex btn-link btn-color-primary"
                >Browse icons
                <span class="svg-icon ms-2 svg-icon-3">
                  <inline-svg :src="require('@/assets/media/icons/arr064.svg')" />
                </span>
              </router-link>
            </div>
          </div>
          <!--end::Col-->
        </div>
        <!--end::Row-->

      </div>
      <!--end::Section-->
    </div>
    <!--end::Card Body-->
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import { setCurrentPageBreadcrumbs } from "@/core/helpers/breadcrumb";

export default defineComponent({
  name: "overview",
  setup() {
    onMounted(() => {
      setCurrentPageBreadcrumbs("سر فصل مطالب", ["شروع"]);
    });

  },
});
</script>
