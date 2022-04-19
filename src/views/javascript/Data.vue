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
          <h1 class="text-gray-800 fw-bolder mb-4"> داده ها</h1>
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
                اعلان یا تعریف داده
              </h4>
              <!--end::Title-->
            </div>
            <!--end::Heading-->

            <!--begin::Body-->
            <div id="kt_run_1" class="fs-6 ms-1 collapse">
              <!--begin::Text-->
              <div class="mb-4 text-gray-600 fw-bold fs-6 ps-10">
                می توانیم با مقدار دهی یک متغیر بدون اعلان آن را تعریف کنیم
                <div class="pb-5">
                  <CodeHighlighter lang="javascript"
                    >{{ `
                      a = "1";
                      var b;
                      let c = 3;
                      const d = 4;
                      c = '5'; // Ok
                      d = 6; // Error

                      b = 'ali,reza,ahmad ';
                      b = b.trim();
                      b.startsWith('ali');
                      b.endsWith('reza');
                      b.includes('a,a');
                      b.split(',');
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
                آرایه ها []
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
                    Daneshjoo = ["Sadegh", "Ali", "Maryam", "Elnaz"];
                    Daneshjoo = new Array("Sadegh", "Ali", "Maryam", "Elnaz");
                    x = Daneshjoo[Daneshjoo.length-1];
                    Daneshjoo.push("Mehran");
                    Daneshjoo.pop();
                    delete Daneshjoo[0];
                    for( i=0; i > Daneshjoo.length; i++ ){
                      Daneshjoo[i];
                    }
                    Daneshjoo.join('\\n');
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
                آبجکت ها {}
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
Object_Name = { Property1:Value1 , Property2:Value2 , ... PropertyN:ValueN }
Object_Name.Property1;
Object_Name[“Property1”];
delete Object_Name.Property1;

var Car = { Name:"BMW", Model:"M440i", Color:"Light Green" , Code:669077 };
var daneshjoo = { Name:"Ali", Family:"Akbari", Age:26 , Code:4455 };
daneshjoo.Age = 30;
delete daneshjoo.Name;
for( key in daneshjoo ){
  daneshjoo[key];
}
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
                ترکیب آبجک و آرایه
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
x = {
      name : 'ali',
      friends : ['reza','ahmad']
     };

y = [
      x,
      {
        name : 'ahmad',
        friends : ['reza','ali']
      }
    ];

z = JSON.stringify(y);
JSON.parse(z);

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
      setCurrentPageBreadcrumbs("مهم ترین نکات درباره داده ها", [
        "جاوا اسکریپت",
        "داده ها",
      ]);
    });
  },
});
</script>
<style></style>
