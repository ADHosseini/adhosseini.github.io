(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3942b513"],{"0a5b":function(e,t,n){"use strict";var a=n("7a23"),c={class:"py-5"},o={class:"highlight"},r=Object(a["createElementVNode"])("button",{class:"highlight-copy btn","data-bs-toggle":"tooltip",title:"","data-bs-original-title":"Copy code"}," copy ",-1),l={class:"highlight-code"},s=Object(a["createTextVNode"])("\n          "),i=Object(a["createTextVNode"])("\n        ");function d(e,t,n,d,p,b){return Object(a["openBlock"])(),Object(a["createElementBlock"])("div",c,[Object(a["createElementVNode"])("div",o,[r,Object(a["createElementVNode"])("div",l,[Object(a["createElementVNode"])("pre",{class:Object(a["normalizeClass"])("language-"+e.lang),style:Object(a["normalizeStyle"])({height:e.getHeightInPixesls})},[Object(a["createElementVNode"])("code",{class:Object(a["normalizeClass"])("language-"+e.lang)},[s,Object(a["renderSlot"])(e.$slots,"default"),i],2)],6)])])])}var p=n("23c1"),b=n("c197"),m=n.n(b),u=Object(a["defineComponent"])({name:"CodeHighlighter",props:{lang:String,fieldHeight:Number},setup:function(e){var t=Object(a["ref"])(e.fieldHeight),n=Object(p["c"])().init,c=Object(a["computed"])((function(){return t.value+"px"}));return Object(a["onMounted"])((function(){m.a.highlightAll(),n()})),{getHeightInPixesls:c}},components:{}}),g=n("6b0d"),h=n.n(g);const j=h()(u,[["render",d]]);t["a"]=j},1026:function(e,t,n){"use strict";n.r(t);var a=n("7a23"),c={class:"card"},o={class:"card-body p-lg-20"},r=Object(a["createElementVNode"])("div",{class:"mb-20",style:{display:"none"}},[Object(a["createElementVNode"])("h1",{class:"fs-2x text-gray-800 w-bolder mb-6"},"کجا؟"),Object(a["createElementVNode"])("p",{class:"fw-bold fs-4 text-gray-600 mb-2"}," اجرا نخواهد شد ")],-1),l={class:"row mb-20"},s={class:"col-md-12 pe-md-10 mb-10 mb-md-0"},i=Object(a["createElementVNode"])("h1",{class:"text-gray-800 fw-bolder mb-4"}," ارسال و دریافت اطلاعات به کمک جاوا اسکریپت ",-1),d=["data-bs-target"],p={class:"btn btn-sm btn-icon mw-20px btn-active-color-primary me-5"},b={class:"svg-icon toggle-on svg-icon-primary svg-icon-1"},m={class:"svg-icon toggle-off svg-icon-1"},u={class:"text-gray-700 fw-bolder cursor-pointer mb-0",style:{direction:"ltr!important"}},g=["id"],h={class:"mb-4 text-gray-600 fw-bold fs-6 ps-10"},j=["innerHTML"],O=Object(a["createElementVNode"])("div",{class:"separator separator-dashed"},null,-1);function x(e,t,x,f,v,E){var y=Object(a["resolveComponent"])("inline-svg"),N=Object(a["resolveComponent"])("CodeHighlighter");return Object(a["openBlock"])(),Object(a["createElementBlock"])("div",c,[Object(a["createElementVNode"])("div",o,[r,Object(a["createElementVNode"])("div",l,[Object(a["createElementVNode"])("div",s,[i,(Object(a["openBlock"])(!0),Object(a["createElementBlock"])(a["Fragment"],null,Object(a["renderList"])(e.AJAX,(function(t,c){return Object(a["openBlock"])(),Object(a["createElementBlock"])("div",{class:"m-0",key:c},[Object(a["createElementVNode"])("div",{class:Object(a["normalizeClass"])(["d-flex align-items-center collapsible py-3 toggle mb-0",e.$route.params.name==t.title?"":"collapsed"]),"data-bs-toggle":"collapse","data-bs-target":"#kt_run_"+c,"aria-expanded":"true"},[Object(a["createElementVNode"])("div",p,[Object(a["createElementVNode"])("span",b,[Object(a["createVNode"])(y,{src:n("4249")},null,8,["src"])]),Object(a["createElementVNode"])("span",m,[Object(a["createVNode"])(y,{src:n("2f9e")},null,8,["src"])])]),Object(a["createElementVNode"])("h4",u,Object(a["toDisplayString"])(t.title),1)],10,d),Object(a["createElementVNode"])("div",{id:"kt_run_"+c,class:Object(a["normalizeClass"])(["fs-6 ms-1",e.$route.params.name==t.title?"":"collapse"])},[Object(a["createElementVNode"])("div",h,[(Object(a["openBlock"])(!0),Object(a["createElementBlock"])(a["Fragment"],null,Object(a["renderList"])(t.text,(function(e,t){return Object(a["openBlock"])(),Object(a["createElementBlock"])("div",{class:"pb-5",key:t},[Object(a["createElementVNode"])("span",{innerHTML:e.title},null,8,j),e.code?(Object(a["openBlock"])(),Object(a["createBlock"])(N,{key:0,lang:"javascript"},{default:Object(a["withCtx"])((function(){return[Object(a["createTextVNode"])(Object(a["toDisplayString"])(e.code),1)]})),_:2},1024)):Object(a["createCommentVNode"])("",!0)])})),128))])],10,g),O])})),128))])])])])}var f=n("fd34"),v=n("0a5b"),E=[{title:"XMLHttpRequest",text:[{title:"",code:'\n  const xhttp = new XMLHttpRequest();\n  xhttp.onreadystatechange = function() {\n    if (this.readyState == 4 && this.status == 200) {\n      document.getElementById("demo").innerHTML =\n      this.responseText;\n    }\n  };\n  xhttp.open("GET", "ajax_info.txt");\n  xhttp.send();\n'}]},{title:"ارسال درخواست به سرور",text:[{title:"به صورت ناهمزمان",code:'xhttp.open("GET", "ajax_info.txt", true);\nxhttp.send();'},{title:"به صورت همزمان",code:'xhttp.open("GET", "ajax_info.txt", false);\nxhttp.send();'},{title:"ارسال با متد GET",code:'xhttp.open("GET", "demo_get2.php?fname=ali&lname=ahmadi");\nxhttp.send();'},{title:"ارسال با متد POST",code:'xhttp.open("POST", "ajax_test.asp");\nxhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");\nxhttp.send("fname=ali&lname=ahmadi");'}]},{title:"دریافت پاسخ از سرور",text:[{title:"",code:'xhttp.onload = function() {\n  document.getElementById("demo").innerHTML = this.responseText;\n}\nxhttp.open("GET", "ajax_info.txt");\nxhttp.send();'}]},{title:"ارسال و دریافت اطلاعات با فرمت جیسون",text:[{title:" با متد POST",code:'var xhr = new XMLHttpRequest();\nvar url = "url";\nxhr.open("POST", url, true);\nxhr.setRequestHeader("Content-Type", "application/json");\nxhr.onreadystatechange = function () {\n    if (xhr.readyState === 4 && xhr.status === 200) {\n        var json = JSON.parse(xhr.responseText);\n        console.log(json.email + ", " + json.password);\n    }\n};\nvar data = JSON.stringify({"email": "hey@mail.com", "password": "101010"});\nxhr.send(data);'},{title:" با متد GET",code:'var xhr = new XMLHttpRequest();\nvar url = "url?data=" + encodeURIComponent(JSON.stringify({"email": "hey@mail.com", "password": "101010"}));\nxhr.open("GET", url, true);\nxhr.setRequestHeader("Content-Type", "application/json");\nxhr.onreadystatechange = function () {\n    if (xhr.readyState === 4 && xhr.status === 200) {\n        var json = JSON.parse(xhr.responseText);\n        console.log(json.email + ", " + json.password);\n    }\n};\nxhr.send();'}]}],y=E,N=Object(a["defineComponent"])({name:"kt-",components:{CodeHighlighter:v["a"]},setup:function(){return Object(a["onMounted"])((function(){Object(f["a"])("AJAX",["جاوا اسکریپت","AJAX"])})),{AJAX:y}}}),T=n("6b0d"),V=n.n(T);const w=V()(N,[["render",x]]);t["default"]=w},"2f9e":function(e,t,n){e.exports=n.p+"img/gen035.1ef36866.svg"},4249:function(e,t,n){e.exports=n.p+"img/gen036.010fe781.svg"},fd34:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n("0613"),c=n("38e0"),o=function(e,t){a["a"].dispatch(c["a"].SET_BREADCRUMB_ACTION,{title:e,pageBreadcrumbPath:t})}}}]);