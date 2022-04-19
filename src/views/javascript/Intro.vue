<template>
  <!--begin::FAQ-->
  <div class="card">
    <!--begin::Card body-->
    <div class="card-body p-lg-20">
      <!--begin::Intro-->
      <div class="mb-20">
        <!--begin::Title-->
        <h1 class="fs-2x text-gray-800 w-bolder mb-6">جاوا اسکریپت</h1>
        <!--end::Title-->

        <!--begin::Text-->
        <p class="fw-bold fs-4 text-gray-600 mb-2"></p>
        <div class="d-flex flex-column">
          <li class="d-flex align-items-center py-2">
            <span class="bullet bullet-dot me-5"></span>
            یک زبان برنامه نویسی سمت کاربر است.
          </li>
          <li class="d-flex align-items-center py-2">
            <span class="bullet bullet-dot bg-danger me-5"></span>
            کدهای نوشته شده با این زبان روی سیستم کاربر یعنی مرورگر اجرا می
            شوند.
          </li>
          <li class="d-flex align-items-center py-2">
            <span class="bullet bullet-dot bg-success me-5"></span>
            این کد ها توسط کاربر قابل مشاهده و دستکاری هستند.
          </li>
          <li class="d-flex align-items-center py-2">
            <span class="bullet bullet-dot bg-info me-5"></span>
            اعتبار سنجی اولیه داده ها قبل از ارسال با جاوا اسکریپت انجام می شود.
          </li>
          <li class="d-flex align-items-center py-2">
            <span class="bullet bullet-dot bg-primary me-5"></span>
            به علت اینکه کاربر می تواند کدها را دستکاری کند اعتبار سنجی صورت
            گرفته با آن معتبر نیست.
          </li>
          <li class="d-flex align-items-center py-2">
            <span class="bullet bullet-dot me-5"></span>
            هر جا مرورگر وجود داشته باشد این کدها به راحتی قابل اجرا هستند.
          </li>
          <li class="d-flex align-items-center py-2">
            <span class="bullet bullet-dot bg-danger me-5"></span>
            از آنجا که روی اکثر سیستم عامل ها مرورگر وجود دارد در نتیجه روی
            ویندوز، اندروید و IOS قابل اجرا است.
          </li>
          <li class="d-flex align-items-center py-2">
            <span class="bullet bullet-dot bg-success me-5"></span>
            فریم ورک های Cordova و Capacitor برای تولید خروجی تلفن همراه برای آن
            وجود دارند.
          </li>
          <li class="d-flex align-items-center py-2">
            <span class="bullet bullet-dot bg-info me-5"></span>
          </li>
          <li class="d-flex align-items-center py-2">
            <span class="bullet bullet-dot bg-info me-5"></span>
          </li>
          <li class="d-flex align-items-center py-2">
            <span class="bullet bullet-dot bg-info me-5"></span>
          </li>
        </div>
        <!--end::Text-->
      </div>
      <!--end::Intro-->
    </div>
    <!--end::Card body-->
  </div>
  <!--end::FAQ-->
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import { setCurrentPageBreadcrumbs } from "@/core/helpers/breadcrumb";
import CodeHighlighter from "@/components/highlighters/CodeHighlighter.vue";

export default defineComponent({
  name: "kt-",
  components: {},
  setup() {
    onMounted(() => {
      setCurrentPageBreadcrumbs("مقدمه", ["جاوا اسکریپت", "معرفی"]);
    });
  },
});
</script>
<style></style>
