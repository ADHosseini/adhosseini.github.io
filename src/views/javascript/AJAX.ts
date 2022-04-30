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
];

export default AJAX;
