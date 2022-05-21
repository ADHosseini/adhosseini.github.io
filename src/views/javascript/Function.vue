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
          <h1 class="text-gray-800 fw-bolder mb-4">تابع</h1>
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
                تعریف و فراخوانی
              </h4>
              <!--end::Title-->
            </div>
            <!--end::Heading-->

            <!--begin::Body-->
            <div id="kt_run_1" class="fs-6 ms-1 collapse">
              <!--begin::Text-->
              <div class="mb-4 text-gray-600 fw-bold fs-6 ps-10">

                <div class="pb-5">
                  <CodeHighlighter lang="javascript"
                    >{{ `
                      function sum(a,b){
                        return a+b;
                      }
                      let s = sum(2,4);
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
                متغیرهای محلی
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
                    var myname="Ahmad"; // global

                    function test(){
                     var mysite="Rayan"; // local
                     document.write(mysite);
                     document.write(myname);
                    }

                    document.write(mysite);
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
                تعریف درون متغیر
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
                      let sum = function (a,b){
                        return a+b;
                      }
                      let s = sum(2,4);
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
                تعریف توابع تودرتو
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
function ShowMessage(name , family){
   function show(){
     document.write(name + family);
   }
   return show();
}
ShowMessage("Ali " , "Reza");
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
                data-bs-target="#kt_run_5"
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
                تعریف توابع به عنوان یک شی
              </h4>
              <!--end::Title-->
            </div>
            <!--end::Heading-->

            <!--begin::Body-->
            <div id="kt_run_5" class="fs-6 ms-1 collapse">
              <!--begin::Text-->
              <div class="mb-4 text-gray-600 fw-bold fs-6 ps-10">
                <div class="pb-5">
                  <CodeHighlighter lang="javascript"
                  >{{ `
function daneshjoo(Name, Family, Age, Code) {
 this.name = Name;
 this.family = Family;
 this.age = Age;
 this.code = Code;
}

var MyDaneshjoo = new daneshjoo("Ali", "Akbari", 26, 4455);
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
                data-bs-target="#kt_run_6"
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
                تعریف توابع درون یک شی
              </h4>
              <!--end::Title-->
            </div>
            <!--end::Heading-->

            <!--begin::Body-->
            <div id="kt_run_6" class="fs-6 ms-1 collapse">
              <!--begin::Text-->
              <div class="mb-4 text-gray-600 fw-bold fs-6 ps-10">
                <div class="pb-5">
                  <CodeHighlighter lang="javascript"
                  >{{ `
var daneshjoo = {
 Name:"Ali",
 Family:"Akbari",
 Age:26 ,
 Code:4455 ,
 FullName : function() {
   return this.Name + " " + this.Family;
 }
};

var a = daneshjoo.FullName();
document.write( a );
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
                data-bs-target="#kt_run_7"
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
                تابع به عنوان پارامتر ورودی یک تابع دیگر(callback)
              </h4>
              <!--end::Title-->
            </div>
            <!--end::Heading-->

            <!--begin::Body-->
            <div id="kt_run_7" class="fs-6 ms-1 collapse">
              <!--begin::Text-->
              <div class="mb-4 text-gray-600 fw-bold fs-6 ps-10">
                مثال 1
                <div class="pb-5">
                  <CodeHighlighter lang="javascript"
                  >{{ `
$myFn8 = function ($a) {
    return $a.length;
};
$names = ['Ali', 'Reza', 'Ahmad'];
$out = $names.map($myFn8);
console.log($names);
console.log($out);
` }}
                  </CodeHighlighter>
                </div>
              </div>
              <!--end::Text-->
              <!--begin::Text-->
              <div class="mb-4 text-gray-600 fw-bold fs-6 ps-10">
                <div class="pb-5">
                  مثال 2
                  <CodeHighlighter lang="javascript"
                  >{{ `
function myFunction(){
    console.log('Salam');
}
setInterval(myFunction,5000);
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
                data-bs-target="#kt_run_8"
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
                تابع بی نام(anonymous) به عنوان پارامتر ورودی یک تابع دیگر(callback)
              </h4>
              <!--end::Title-->
            </div>
            <!--end::Heading-->

            <!--begin::Body-->
            <div id="kt_run_8" class="fs-6 ms-1 collapse">
              <!--begin::Text-->
              <div class="mb-4 text-gray-600 fw-bold fs-6 ps-10">
                <div class="pb-5">
                  با استفاده از توابع بی نام لامبدا
                  <CodeHighlighter lang="javascript"
                  >{{ `
$names = ['Ali', 'Reza', 'Ahmad'];
$out = $names.map(($a) => {
    return $a.length;
});
console.log($names);
console.log($out);
` }}
                  </CodeHighlighter>
                </div>
              </div>
              <!--end::Text-->

              <!--begin::Text-->
              <div class="mb-4 text-gray-600 fw-bold fs-6 ps-10">
                <div class="pb-5">
                  با استفاده توابع بی نام معمولی
                  <CodeHighlighter lang="javascript"
                  >{{ `
setInterval(function(){
    console.log('Salam');
},5000);
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
                data-bs-target="#kt_run_9"
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
                تابع بی نام(anonymous) با لامبدا یا Arrow function
              </h4>
              <!--end::Title-->
            </div>
            <!--end::Heading-->

            <!--begin::Body-->
            <div id="kt_run_9" class="fs-6 ms-1 collapse">
              <!--begin::Text-->
              <div class="mb-4 text-gray-600 fw-bold fs-6 ps-10">
                <div class="pb-5">
                  ساختار کلی
                  <CodeHighlighter lang="javascript"
                  >{{ `
param => expression
(param1, paramN) => expression
` }}
                  </CodeHighlighter>
                </div>
              </div>
              <!--end::Text-->

              <!--begin::Text-->
              <div class="mb-4 text-gray-600 fw-bold fs-6 ps-10">
                <div class="pb-5">
مثال 1
                  <CodeHighlighter lang="javascript"
                  >{{ `// Traditional Anonymous Function
function (a){
  return a + 100;
}

// Arrow Function Break Down

// 1. Remove the word "function" and place arrow between the argument and opening body bracket
(a) => {
  return a + 100;
}

// 2. Remove the body braces and word "return" -- the return is implied.
(a) => a + 100;

// 3. Remove the argument parentheses
a => a + 100;
` }}
                  </CodeHighlighter>
                </div>
              </div>
              <!--end::Text-->

              <!--begin::Text-->
              <div class="mb-4 text-gray-600 fw-bold fs-6 ps-10">
                <div class="pb-5">
                  مثال 2
                  <CodeHighlighter lang="javascript"
                  >{{ `// Traditional Anonymous Function
function (a, b){
  return a + b + 100;
}

// Arrow Function
(a, b) => a + b + 100;

// Traditional Anonymous Function (no arguments)
let a = 4;
let b = 2;
function (){
  return a + b + 100;
}

// Arrow Function (no arguments)
let a = 4;
let b = 2;
() => a + b + 100;
` }}
                  </CodeHighlighter>
                </div>
              </div>
              <!--end::Text-->


              <!--begin::Text-->
              <div class="mb-4 text-gray-600 fw-bold fs-6 ps-10">
                <div class="pb-5">
                  مثال 3
                  <CodeHighlighter lang="javascript"
                  >{{ `// Traditional Anonymous Function
function (a, b){
  let chuck = 42;
  return a + b + chuck;
}

// Arrow Function
(a, b) => {
  let chuck = 42;
  return a + b + chuck;
}
` }}
                  </CodeHighlighter>
                </div>
              </div>
              <!--end::Text-->

              <!--begin::Text-->
              <div class="mb-4 text-gray-600 fw-bold fs-6 ps-10">
                <div class="pb-5">
                  مثال 4
                  <CodeHighlighter lang="javascript"
                  >{{ `// Traditional Function
function bob (a){
  return a + 100;
}

// Arrow Function
let bob = a => a + 100;
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
      setCurrentPageBreadcrumbs("مهم ترین نکات درباره تابع", [
        "جاوا اسکریپت",
        "تابع",
      ]);
    });
    return {publicPath: process.env.BASE_URL};
  },
});
</script>
<style></style>
