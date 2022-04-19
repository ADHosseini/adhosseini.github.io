<template>
  <!--begin::FAQ-->
  <div class="card">
    <!--begin::Card body-->
    <div class="card-body p-lg-20">
      <!--begin::Intro-->
      <div class="mb-20">
        <!--begin::Title-->
        <h1 class="fs-2x text-gray-800 w-bolder mb-6">کجا باید نوشته شود؟</h1>
        <!--end::Title-->

        <!--begin::Text-->
        <p class="fw-bold fs-4 text-gray-600 mb-2">
          در این بخش محل هایی که ما مجاز به نوشتن کد جاوا اسکریپت هستم معرفی می
          شود بدیهی است اگر در مکانی غیر از موارد یاد شد ما کد جاوا اسکریپتی
          بنویسم به عنوان متن در نظر گرفته می شود مستقیم به کاربر نمایشد داده می
          شود و اجرا نخواهد شد
        </p>
        <!--end::Text-->
      </div>
      <!--end::Intro-->

      <!--begin::Row-->
      <div class="row mb-20">
        <!--begin::Col-->
        <div class="col-md-12 pe-md-10 mb-10 mb-md-0">
          <!--begin::Title-->
          <h1 class="text-gray-800 fw-bolder mb-4">اجرای جاوا اسکریپت</h1>
          <!--end::Title-->

          <!--begin::Accordion-->

          <!--begin::Section-->
          <div class="m-0">
            <!--begin::Heading-->
            <div
              class="
                d-flex
                align-items-center
                collapsible
                py-3
                toggle
                mb-0
                collapsed
              "
              data-bs-toggle="collapse"
              data-bs-target="#kt_run_1"
              aria-expanded="true"
            >
              <!--begin::Icon-->
              <div
                class="
                  btn btn-sm btn-icon
                  mw-20px
                  btn-active-color-primary
                  me-5
                "
              >
                <span class="svg-icon toggle-on svg-icon-primary svg-icon-1">
                  <inline-svg :src="require('@/assets/media/icons/gen036.svg')" />
                </span>
                <span class="svg-icon toggle-off svg-icon-1">
                  <inline-svg :src="require('@/assets/media/icons/gen035.svg')" />
                </span>
              </div>
              <!--end::Icon-->

              <!--begin::Title-->
              <h4 class="text-gray-700 fw-bolder cursor-pointer mb-0">
                داخل تگ script
              </h4>
              <!--end::Title-->
            </div>
            <!--end::Heading-->

            <!--begin::Body-->
            <div id="kt_run_1" class="fs-6 ms-1 collapse">
              <!--begin::Text-->
              <div class="mb-4 text-gray-600 fw-bold fs-6 ps-10">
                تک اسکریپت یک تک اچ تی ام ال است. می تواند داخل هر تک HTML دیگه
                ای نوشته شود. این تک داری خصوصیتی به نام type است که اگه مقدار
                دهی نشوید مقدار پیش فرض آن javascript در نظر گرفته می شود.
                <div class="pb-5">
                  <CodeHighlighter lang="html"
                    >{{ `
                    <script type="text/javascript">
                      alert("Your Message");
                    </script>
                    ` }}
                  </CodeHighlighter>
                </div>
              </div>
              <!--end::Text-->
            </div>
            <!--end::Content-->

            <!--begin::Separator-->
            <div class="separator separator-dashed"></div>
            <!--end::Separator-->
          </div>
          <!--end::Section-->

          <!--begin::Section-->
          <div class="m-0">
            <!--begin::Heading-->
            <div
              class="
                d-flex
                align-items-center
                collapsible
                py-3
                toggle
                mb-0
                collapsed
              "
              data-bs-toggle="collapse"
              data-bs-target="#kt_run_2"
              aria-expanded="true"
            >
              <!--begin::Icon-->
              <div
                class="
                  btn btn-sm btn-icon
                  mw-20px
                  btn-active-color-primary
                  me-5
                "
              >
                <span class="svg-icon toggle-on svg-icon-primary svg-icon-1">
                  <inline-svg :src="require('@/assets/media/icons/gen036.svg')" />
                </span>
                <span class="svg-icon toggle-off svg-icon-1">
                  <inline-svg :src="require('@/assets/media/icons/gen035.svg')" />
                </span>
              </div>
              <!--end::Icon-->

              <!--begin::Title-->
              <h4 class="text-gray-700 fw-bolder cursor-pointer mb-0">
                داخل یک فایل مجزا
              </h4>
              <!--end::Title-->
            </div>
            <!--end::Heading-->

            <!--begin::Body-->
            <div id="kt_run_2" class="fs-6 ms-1 collapse">
              <!--begin::Text-->
              <div class="mb-4 text-gray-600 fw-bold fs-6 ps-10">
                <div class="pb-5">
                  <CodeHighlighter lang="javascript"
                    >{{ `
                    <script src="filename.js"></script>
                    ` }}
                  </CodeHighlighter>
                </div>
              </div>
              <!--end::Text-->
            </div>
            <!--end::Content-->

            <!--begin::Separator-->
            <div class="separator separator-dashed"></div>
            <!--end::Separator-->
          </div>
          <!--end::Section-->

          <!--begin::Section-->
          <div class="m-0">
            <!--begin::Heading-->
            <div
              class="
                d-flex
                align-items-center
                collapsible
                py-3
                toggle
                mb-0
                collapsed
              "
              data-bs-toggle="collapse"
              data-bs-target="#kt_run_3"
              aria-expanded="false"
            >
              <!--begin::Icon-->
              <div
                class="
                  btn btn-sm btn-icon
                  mw-20px
                  btn-active-color-primary
                  me-5
                "
              >
                <span class="svg-icon toggle-on svg-icon-primary svg-icon-1">
                  <inline-svg :src="require('@/assets/media/icons/gen036.svg')" />
                </span>
                <span class="svg-icon toggle-off svg-icon-1">
                  <inline-svg :src="require('@/assets/media/icons/gen035.svg')" />
                </span>
              </div>
              <!--end::Icon-->

              <!--begin::Title-->
              <h4 class="text-gray-700 fw-bolder cursor-pointer mb-0">
                داخل خصوصیات تگ های HTML
              </h4>
              <!--end::Title-->
            </div>
            <!--end::Heading-->

            <!--begin::Body-->
            <div id="kt_run_3" class="fs-6 ms-1 collapse">
              <!--begin::Text-->
              <div class="mb-4 text-gray-600 fw-bold fs-6 ps-10">
                اون دسته خصوصیات تگ های HTML که با on شروع می شوند به رخداد های
                صفحه اشاره می کنند و ما می توانیم این خصوصیات را با کدهای جاوا
                اسکریپت مقدار دهی کنیم تا در صورت اتفاق افتادن آن رخداد کد مد
                نظر ما اجرا شود.
                <div class="pb-5">
                  <CodeHighlighter lang="javascript"
                    >{{ `<input
                      type="submit"
                      onclick="alert('Your Message')"
                    />` }}
                  </CodeHighlighter>
                </div>
              </div>
              <!--end::Text-->
            </div>
            <!--end::Content-->

            <!--begin::Separator-->
            <div class="separator separator-dashed"></div>
            <!--end::Separator-->
          </div>
          <!--end::Section-->

          <!--begin::Section-->
          <div class="m-0">
            <!--begin::Heading-->
            <div
              class="
                d-flex
                align-items-center
                collapsible
                py-3
                toggle
                mb-0
                collapsed
              "
              data-bs-toggle="collapse"
              data-bs-target="#kt_run_4"
              aria-expanded="false"
            >
              <!--begin::Icon-->
              <div
                class="
                  btn btn-sm btn-icon
                  mw-20px
                  btn-active-color-primary
                  me-5
                "
              >
                <span class="svg-icon toggle-on svg-icon-primary svg-icon-1">
                  <inline-svg :src="require('@/assets/media/icons/gen036.svg')" />
                </span>
                <span class="svg-icon toggle-off svg-icon-1">
                  <inline-svg :src="require('@/assets/media/icons/gen035.svg')" />
                </span>
              </div>
              <!--end::Icon-->

              <!--begin::Title-->
              <h4 class="text-gray-700 fw-bolder cursor-pointer mb-0">
                داخل Console مرورگر
              </h4>
              <!--end::Title-->
            </div>
            <!--end::Heading-->

            <!--begin::Body-->
            <div id="kt_run_4" class="fs-6 ms-1 collapse">
              <!--begin::Text-->
              <div class="mb-4 text-gray-600 fw-bold fs-6 ps-10">
                با زدن دکمه F12 روی صفحه مرورگر کروم شما وارد بخش Developer
                tools خواهید شد با کلیک کردن روی تب Console می توانید در خط
                فرمان این بخش کد های جاوا اسکریپت را اجرا کنید
                <div class="pb-5">
                  <CodeHighlighter lang="javascript"
                    >{{ `> alert('Your Message')` }}
                  </CodeHighlighter>
                </div>
              </div>
              <!--end::Text-->
            </div>
            <!--end::Content-->

            <!--begin::Separator-->
            <div class="separator separator-dashed"></div>
            <!--end::Separator-->
          </div>
          <!--end::Section-->

          <!--end::Accordion-->
        </div>
        <!--end::Col-->
      </div>
      <!--end::Row-->
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
  components: {
    CodeHighlighter,
  },
  setup() {
    onMounted(() => {
      setCurrentPageBreadcrumbs("جاهایی که ما مجاز به نوشتن کد هستیم", [
        "جاوا اسکریپت",
        "محل اجرا",
      ]);
    });
    return {publicPath: process.env.BASE_URL};
  },
});
</script>
<style></style>
