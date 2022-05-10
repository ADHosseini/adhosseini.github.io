const data = {
    pageTitle: 'نکته ها',
    breadcrumbs: ['PHP','نکته های مهم']
}
const InputArray = [
    {
        title: 'استفاده از کتابخانه ها',
        text: [
            {
                title: `روش اول: دانلود فایلهای کتابخانه کنار فایل های پروژه به صورت دستی`,
                code: ``,
            },
            {
                title: `روش دوم: دانلود و بروز رسانی فایلهای کتابخانه کنار فایل های پروژه به صورت خودکار با استفاده از Composer`,
                code: `composer require morilog/jalali:3.*`,
            },
            {
                title: 'با هر یک از دو روش که کتابخانه را کنار پروژه قرار دادیم در نهایت باید فایل اصلی آن را داخل پروژه include کنیم',
                code: `<?php
            require_once 'path/to/source/jdatetime.class.php';
        ?>`
            }
        ],
    },
    {
        title: 'تبدیل رشته به آرایه و بلعکس',
        text: [
            {
                title: `تبدیل رشته به آرایه`,
                code: `<?php
print_r(explode('@','ALi@Reza@Ahmad'));                
?>`,
            },
            {
                title: `تبدیل آرایه به رشته`,
                code: `<?php
echo implode('@',['ALi', 'Reza', 'Ahmad']);                
?>`,
            },
        ],
    },
    {
        title: 'خواندن و نوشتن اطلاعات در فایل',
        text: [
            {
                title: `خواندن کل اطلاعات فایل mydata.txt داخل متغیر x`,
                code: `<?php
$x = file_get_contents('mydata.txt');
echo $x;`,
            },
            {
                title: `نوشتن مقدار متغیر x داخل فایل mydata.txt`,
                code: `<?php
$x = 'ali';
file_put_contents('mydata.txt',$x);`,
            },
        ],
    },
    {
        title: 'JSON',
        text: [
            {
                title: `تبدیل آرایه یا آبجکت پی اچ پی به رشته ای با فرمت جیسون`,
                code: `<?php
$age = array("Peter"=>35, "Ben"=>37, "Joe"=>43);
echo json_encode($age);
?>
<?php
$cars = array("Volvo", "BMW", "Toyota");
echo json_encode($cars);
?>`,
            },
            {
                title: `تبدیل رشته ای با فرمت جیسون به یک آرایه یا آبجکت پی اچ پی`,
                code: `<?php
$jsonobj = '{"Peter":35,"Ben":37,"Joe":43}';
//JSON data into a PHP object
var_dump($obj = json_decode($jsonobj));
echo $obj->Peter;
?>

<?php
$jsonobj = '{"Peter":35,"Ben":37,"Joe":43}';
//JSON data into a PHP associative array
var_dump($arr=json_decode($jsonobj, true));
echo $arr["Peter"];
?>

<?php
$jsonobj = '{"Peter":35,"Ben":37,"Joe":43}';
$obj = json_decode($jsonobj);
foreach($obj as $key => $value) {
  echo $key . " => " . $value . "<br>";
}
?>
`,
            },
        ],
    },
    {
        title: 'کنترل خطاها',
        text: [
            {
                title: `catch`,
                code: `<?php
try {
  echo 5/0;
} catch(Exception $e) {
  echo "Unable to divide.";
}
?>
`,
            },
            {
                title: `catch & finally`,
                code: `<?php
try {
  echo 5/0;
} catch(Exception $e) {
  echo "Unable to divide. ";
} finally {
  echo "Process complete.";
}
?>`,
            },
            {
                title: `finally`,
                code: `<?php
try {
  echo 5/0;
} finally {
  echo "Process complete.";
}
?>`,
            },
        ],
    },
];
const out={data,InputArray};

export default out;
