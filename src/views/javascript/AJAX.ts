const AJAX = [
    {
        title: 'XMLHttpRequest',
        text: [
            {
                title: ``,
                code: `
  const xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("demo").innerHTML =
      this.responseText;
    }
  };
  xhttp.open("GET", "ajax_info.txt");
  xhttp.send();
`,
            },
        ],
    },
    {
        title: 'ارسال درخواست به سرور',
        text: [
            {
                title: `به صورت ناهمزمان`,
                code: `xhttp.open("GET", "ajax_info.txt", true);
xhttp.send();`,
            },
            {
                title: `به صورت همزمان`,
                code: `xhttp.open("GET", "ajax_info.txt", false);
xhttp.send();`,
            },
            {
                title: `ارسال با متد GET`,
                code: `xhttp.open("GET", "demo_get2.php?fname=ali&lname=ahmadi");
xhttp.send();`,
            },
            {
                title: `ارسال با متد POST`,
                code: `xhttp.open("POST", "ajax_test.asp");
xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
xhttp.send("fname=ali&lname=ahmadi");`,
            },
        ],
    },
    {
        title: 'دریافت پاسخ از سرور',
        text: [
            {
                title: ``,
                code: `xhttp.onload = function() {
  document.getElementById("demo").innerHTML = this.responseText;
}
xhttp.open("GET", "ajax_info.txt");
xhttp.send();`,
            },
        ],
    },
    {
        title: 'ارسال و دریافت اطلاعات با فرمت جیسون',
        text: [
            {
                title: ` با متد POST`,
                code: `var xhr = new XMLHttpRequest();
var url = "url";
xhr.open("POST", url, true);
xhr.setRequestHeader("Content-Type", "application/json");
xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
        var json = JSON.parse(xhr.responseText);
        console.log(json.email + ", " + json.password);
    }
};
var data = JSON.stringify({"email": "hey@mail.com", "password": "101010"});
xhr.send(data);`,
            },
            {
                title: ` با متد GET`,
                code: `var xhr = new XMLHttpRequest();
var url = "url?data=" + encodeURIComponent(JSON.stringify({"email": "hey@mail.com", "password": "101010"}));
xhr.open("GET", url, true);
xhr.setRequestHeader("Content-Type", "application/json");
xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
        var json = JSON.parse(xhr.responseText);
        console.log(json.email + ", " + json.password);
    }
};
xhr.send();`,
            },
        ],
    },
];

export default AJAX;
