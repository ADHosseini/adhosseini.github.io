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

                          $_SESSION

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
                مقدار دهی اولیه
              </h4>
              <!--end::Title-->
            </div>
            <!--end::Heading-->

            <!--begin::Body-->
            <div id="kt_run_1" class="fs-6 ms-1 collapse">
              <!--begin::Text-->
              <div class="mb-4 text-gray-600 fw-bold fs-6 ps-10">

                <div class="pb-5">
متد session_start باید قبل از هر تگ HTML و یا هر دستور چاپی در PHP  باشد.
                  <CodeHighlighter lang="javascript"
                    >{{ `
&lt;?php
// Start the session
session_start();
?>
<!DOCTYPE html>
<html>
<body>

&lt;?php
// Set session variables
$_SESSION["favcolor"] = "green";
$_SESSION["favanimal"] = "cat";
echo "Session variables are set.";
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
                خواندن
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
&lt;?php
session_start();
?>
<!DOCTYPE html>
<html>
<body>

&lt;?php
// Echo session variables that were set on previous page
echo "Favorite color is " . $_SESSION["favcolor"] . ".<br>";
echo "Favorite animal is " . $_SESSION["favanimal"] . ".";
?>

</body>
</html>
` }}
                  </CodeHighlighter>
                  <CodeHighlighter lang="javascript"
                    >{{ `
&lt;?php
session_start();
?>
<!DOCTYPE html>
<html>
<body>

&lt;?php
print_r($_SESSION);
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
session_start();
?>
<!DOCTYPE html>
<html>
<body>

&lt;?php
// to change a session variable, just overwrite it
$_SESSION["favcolor"] = "yellow";
print_r($_SESSION);
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
session_start();
?>
<!DOCTYPE html>
<html>
<body>

&lt;?php
// remove all session variables
session_unset();

// destroy the session
session_destroy();
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
