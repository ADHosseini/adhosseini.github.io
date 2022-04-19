<template>
  <!--begin::FAQ-->
  <div class="card">
    <!--begin::Card body-->
    <div class="card-body p-lg-20">
      <!--begin::Intro-->
      <div class="mb-20" style="display: none">
        <!--begin::Title-->
        <h1 class="fs-2x text-gray-800 w-bolder mb-6">کجا؟</h1>
        <!--end::Title-->

        <!--begin::Text-->
        <p class="fw-bold fs-4 text-gray-600 mb-2">
          اجرا نخواهد شد
        </p>
        <!--end::Text-->
      </div>
      <!--end::Intro-->

      <!--begin::Row-->
      <div class="row mb-20">
        <!--begin::Col-->
        <div class="col-md-12 pe-md-10 mb-10 mb-md-0">
          <!--begin::Title-->
          <h1 class="text-gray-800 fw-bolder mb-4" style="direction: ltr !important;">

                          $_COOKIE

          </h1>
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
                ایجاد و بازیابی
              </h4>
              <!--end::Title-->
            </div>
            <!--end::Heading-->

            <!--begin::Body-->
            <div id="kt_run_1" class="fs-6 ms-1 collapse">
              <!--begin::Text-->
              <div class="mb-4 text-gray-600 fw-bold fs-6 ps-10">

                <div class="pb-5">
متد setcookie باید قبل از هر تگ HTML و یا هر دستور چاپی در PHP  باشد.
                  <CodeHighlighter lang="javascript"
                    >{{ `
&lt;?php
$cookie_name = "user";
$cookie_value = "John Doe";
setcookie($cookie_name, $cookie_value, time() + (86400 * 30), "/"); // 86400 = 1 day
?>
<html>
<body>

&lt;?php
if(!isset($_COOKIE[$cookie_name])) {
echo "Cookie named '" . $cookie_name . "' is not set!";
} else {
echo "Cookie '" . $cookie_name . "' is set!<br>";
echo "Value is: " . $_COOKIE[$cookie_name];
}
?>

</body>
</html>
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
                تغییر
              </h4>
              <!--end::Title-->
            </div>
            <!--end::Heading-->

            <!--begin::Body-->
            <div id="kt_run_3" class="fs-6 ms-1 collapse">
              <!--begin::Text-->
              <div class="mb-4 text-gray-600 fw-bold fs-6 ps-10">
                <div class="pb-5">
                  <CodeHighlighter lang="javascript"
                    >{{ `
&lt;?php
$cookie_name = "user";
$cookie_value = "Alex Porter";
setcookie($cookie_name, $cookie_value, time() + (86400 * 30), "/");
?>
<html>
<body>

&lt;?php
if(!isset($_COOKIE[$cookie_name])) {
echo "Cookie named '" . $cookie_name . "' is not set!";
} else {
echo "Cookie '" . $cookie_name . "' is set!<br>";
echo "Value is: " . $_COOKIE[$cookie_name];
}
?>

</body>
</html>
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
                حذف
              </h4>
              <!--end::Title-->
            </div>
            <!--end::Heading-->

            <!--begin::Body-->
            <div id="kt_run_4" class="fs-6 ms-1 collapse">
              <!--begin::Text-->
              <div class="mb-4 text-gray-600 fw-bold fs-6 ps-10">
                <div class="pb-5">
                  <CodeHighlighter lang="javascript"
                    >{{ `
&lt;?php
// set the expiration date to one hour ago
setcookie("user", "", time() - 3600);
?>
<html>
<body>

&lt;?php
echo "Cookie 'user' is deleted.";
?>

</body>
</html>

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
      setCurrentPageBreadcrumbs("Sessions", [
        "PHP",
        "Sessions",
      ]);
    });
  },
});
</script>
<style></style>
