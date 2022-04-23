const InputArray = [
    {
        title: '$_GET',
        text: [
            {
                title: `
1. داده ها از طریق URL ارسال می شوند.
                <br />
2. کاراکتر علامت سوال ؟ تفکیک کننده داده ها از مسیر و آدرس سرور در URL است.                
                <br />
3. هر داده به کمک کاراکتر & از داده قبلی خود تفکیک می شود.                
                <br />
                4. هر داده شامل دو بخش نام و مقدار است که با کاراکتر =  از هم تفکیک می شوند.
                <br />
5. ابتدا نام داده قرار می گیرد و بعد از کاراکتر = مقدار داده قرار می گیرد.                
                <br />
6. محدودیت 1024 کاراکتر برای طول URL  وجود دارد در نتیجه طول داده ها باید کمتر از این مقدار باشد.                
                `,
                code: ``,
            },
            {
                title: `ارسال با استفاده از لینک`,
                code: `http://localhost:1234/test_get.php?fname=ali&age=30`,
            },
            {
                title: `ارسال با استفاده از لینک HTML`,
                code: `<html>
    <body>
        <a href="test_get.php?fname=ali&age=30">Test $_GET</a>
    </body>
</html>`,
            },
            {
                title: `ارسال با استفاده از فرم HTML`,
                code: `<html>
    <body>
        <form method="get" action="test_get.php" >
          Name: <input type="text" name="fname">
          <br>
          Age: <input type="text" name="age">
          <input type="submit">
        </form>
    </body>
</html>`,
            },
            {
                title: `اگر ما متد تگ form را مشخص نکنیم  به طور پیش فرض get در نظر گرفته می شود.`,
                code: `<html>
    <body>
        <form action="test_get.php" >
          Name: <input type="text" name="fname">
          <br>
          Last Name: <input type="text" name="lname">
          <input type="submit">
        </form>
    </body>
</html>`,
            },
            {
                title: `دریافت داده در فایل test_get.php به شکل زیر صورت می گیرد.`,
                code: `<?php
   if( $_GET["fname"] || $_GET["age"] ) {
      echo "Welcome ". $_GET['fname']. "<br />";
      echo "You are ". $_GET['age']. " years old.";      
      exit();
   }
?>`,
            },
        ],
    },
    {
        title: '$_POST',
        text: [
            {
                title: `ارسال با استفاده از فرم HTML`,
                code: `<html>
    <body>
        <form method="post" action="test_get.php" >
          Name: <input type="text" name="fname">
          <br>
          Age: <input type="text" name="age">
          <input type="submit">
        </form>
    </body>
</html>`,
            },
            {
                title: `دریافت داده در فایل test_get.php به شکل زیر صورت می گیرد.`,
                code: `<?php
   if( $_POST["fname"] || $_POST["age"] ) {
      echo "Welcome ". $_POST['fname']. "<br />";
      echo "You are ". $_POST['age']. " years old.";      
      exit();
   }
?>`,
            },
        ],
    },
    {
        title: '$_REQUEST',
        text: [
            {
                title: `ارسال با استفاده از لینک HTML`,
                code: `<html>
    <body>
        <a href="test_get.php?fname=ali&age=30">Test $_GET</a>
    </body>
</html>`,
            },
            {
                title: `ارسال با استفاده از فرم HTML`,
                code: `<html>
    <body>
        <form method="post" action="test_get.php" >
          Name: <input type="text" name="fname">
          <br>
          Age: <input type="text" name="age">
          <input type="submit">
        </form>
    </body>
</html>`,
            },
            {
                title: `دریافت داده در فایل test_get.php به شکل زیر صورت می گیرد.`,
                code: `<?php
   if( $_REQUEST["fname"] || $_REQUEST["age"] ) {
      echo "Welcome ". $_REQUEST['fname']. "<br />";
      echo "You are ". $_REQUEST['age']. " years old.";      
      exit();
   }
?>`,
            },
        ],
    },
    {
        title: '$_FILES',
        text: [
            {
                title: 'ارسال فایل به سرور',
                code: `<html>
<body>
    <form action="upload_file.php" method="post" enctype="multipart/form-data">
        <label for="file">Filename:</label>
        <input type="file" name="file" id="file" /> 
        <br />
        <input type="submit" name="submit" value="Submit" />
    </form>
</body>
</html>`,
            },
            {
                title: 'نمایش اطلاعات فایل دریافتی روی سرور',
                code: `
<?php
if ($_FILES["file"]["error"] > 0)
{
  echo "Error: " . $_FILES["file"]["error"] . "<br />";
}
else
{
  echo "Upload: " . $_FILES["file"]["name"] . "<br />";
  echo "Type: " . $_FILES["file"]["type"] . "<br />";
  echo "Size: " . ($_FILES["file"]["size"] / 1024) . " Kb<br />";
  echo "Stored in: " . $_FILES["file"]["tmp_name"];
}
?>`,
            },
            {
                title: 'اعتبار سنجی فایل دریافتی روی سرور',
                code: `<?php
if ((($_FILES["file"]["type"] == "image/gif")
|| ($_FILES["file"]["type"] == "image/jpeg")
|| ($_FILES["file"]["type"] == "image/pjpeg"))
&& ($_FILES["file"]["size"] < 20000))
{
    if ($_FILES["file"]["error"] > 0)
    {
        echo "Error: " . $_FILES["file"]["error"] . "<br />";
    }
    else
    {
        echo "Upload: " . $_FILES["file"]["name"] . "<br />";
        echo "Type: " . $_FILES["file"]["type"] . "<br />";
        echo "Size: " . ($_FILES["file"]["size"] / 1024) . " Kb<br />";
        echo "Stored in: " . $_FILES["file"]["tmp_name"];
    }
}
else
{
    echo "Invalid file";
}
?>`,
            },
            {
                title: 'ذخیره فایل دریافتی روی سرور',
                code: `<?php
if ((($_FILES["file"]["type"] == "image/gif")
|| ($_FILES["file"]["type"] == "image/jpeg")
|| ($_FILES["file"]["type"] == "image/pjpeg"))
&& ($_FILES["file"]["size"] < 20000))
{
    if ($_FILES["file"]["error"] > 0)
    {
        echo "Return Code: " . $_FILES["file"]["error"] . "<br />";
    }
    else
    {
        echo "Upload: " . $_FILES["file"]["name"] . "<br />";
        echo "Type: " . $_FILES["file"]["type"] . "<br />";
        echo "Size: " . ($_FILES["file"]["size"] / 1024) . " Kb<br />";
        echo "Temp file: " . $_FILES["file"]["tmp_name"] . "<br />";
        if (file_exists("upload/" . $_FILES["file"]["name"]))
        {
          echo $_FILES["file"]["name"] . " already exists. ";
        }
        else
        {
          move_uploaded_file($_FILES["file"]["tmp_name"],
          "upload/" . $_FILES["file"]["name"]);
          echo "Stored in: " . "upload/" . $_FILES["file"]["name"];
        }
    }
}
else
{
    echo "Invalid file";
}
?>`,
            },
        ],
    },
];

export default InputArray;
