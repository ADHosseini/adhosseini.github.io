const DocArray = [
    {
        title: 'تعریف',
        text: [
            {
                title: 'روش اول',
                code: `<?php
$array = array();
?>`,
            },
            {
                title: 'روش دوم از نسخه 5.4 PHP به بعد',
                code:`<?php
$array = [];
?>`,
            },
        ],
    },
    {
        title: 'مقدار دهی اولیه',
        text: [
            {
                title: 'روش اول',
                code: `<?php
$array = array('One', 'Two', 'Three');
?>`,
            },
            {
                title: 'روش دوم',
                code:`<?php
$array = ['One', 'Two', 'Three'];
?>`,
            },
            {
                title: 'روش سوم',
                code:`<?php
$array = array();
$array[] = 'One';
$array[] = 'Two';
$array[] = 'Three';
?>`,
            },
            {
                title: 'روش چهارم',
                code:`<?php
$array = [];
$array[] = 'One';
$array[] = 'Two';
$array[] = 'Three';
?>`,
            },
        ],
    },
    {
        title: 'دسترسی به عناصر',
        text: [
            {
                title: 'خواندن مقدار',
                code: `<?php
$array = ['One', 'Two', 'Three'];
// get the first element
echo $array[0];
// get the third element
echo $array[2];
?>`,
            },
            {
                title: 'نوشتن مقدار',
                code:`<?php
$array = ['One', 'Two', 'Three'];
// set the third element
$array[2]= 3;
// get the third element
echo $array[2];
?>`,
            },
            {
                title: 'دسترسی به همه عناصر به کمک for ',
                code:`<?php
$array = ['One', 'Two', 'Three'];
for ($i = 0; $i < count($array); ++$i) {
  echo $array[$i];
}
?>`,
            },
            {
                title: 'دسترسی به همه عناصر به کمک foreach',
                code:`<?php
$array = ['One', 'Two', 'Three'];
foreach ($array as $element) {
  echo $element;
}
?>`,
            },
        ],
    },
    {
        title: 'انواع ',
        text: [
            {
                title: 'آرایه‌های با اندیس عددی',
                code: `<?php
$array = ['One', 'Two', 'Three'];
// or
$array = [];
$array[0] = 'One';
$array[1] = 'Two';
$array[2] = 'Three';
?>`,
            },
            {
                title: 'آرایه‌های انجمنی (Associative)',
                code:`<?php
$employee = [
  'name' => 'John',
  'email' => 'john@example.com',
  'phone' => '1234567890',
];
// or
$employee = [];
$employee['name'] = 'John';
$employee['email'] = 'john@example.com';
$employee['phone'] = '1234567890';

// get the value of employee name
echo $employee['name'];
 
// get all values
foreach ($employee as $key => $value) {
  echo $key . ':' . $value;
  echo '<br>';
}

?>`,
            },
            {
                title: 'آرایه‌های چندبعدی',
                code:`<?php
$employee = [
  'name' => 'John',
  'email' => 'john@example.com',
  'phone' => '1234567890',
  'hobbies' => ['Football', 'Tennis'],
  'profiles' => ['facebook' => 'johnfb', 'twitter' => 'johntw']
];
 
// access hobbies
echo $employee['hobbies'][0];
// Football
 
echo $employee['hobbies'][1];
// Tennis
 
// access profiles
echo $employee['profiles']['facebook'];
// johnfb
 
echo $employee['profiles']['twitter'];
// johntw
?>`,
            },
        ],
    },
    {
        title: 'توابع مفید',
        text: [
            {
                title: '1. تابع محاسبه تعداد عناصر آرایه',
                code: `<?php
$array = ['One', 'Two', 'Three'];
// print the number of elements in the array
echo count($array);
// the above code should output
3
?>`,
            },
            {
                title: '2. تابع مشخص کردن آرایه بودن یا نبودن یه متغییر',
                code:`<?php
$array = ['One', 'Two', 'Three'];
// check if the variable is an array
if (is_array($array))
{
  // perform some array operation
}
?>`,
            },
            {
                title: '3. تابع مشخص کردن وجود یک عنصر در آرایه',
                code:`<?php
$array = ['One', 'Two', 'Three'];
// check if a variable is an array
if (in_array('One', $array))
{
  echo 'Yes';
}
else
{
  echo 'No';
}
?>`,
            },
            {
                title: '4. تابع تبدیل یک رشته به آرایه با استفاده از جدا کننده',
                code:`<?php
$string = "One,Two,Three";
// explode a string by comma
$array = explode(",", $string);
// output should be an array
echo '<pre>';
print_r($array);
echo '</pre>';
// output
/*Array
(
    [0] => One
    [1] => Two
    [2] => Three
)*/
?>`,
            },
            {
                title: '5. تابع اتصال عناصر آرایه به هم با استفاده از یک جدا کننده',
                code:`<?php
$array = ['One', 'Two', 'Three'];
$string = implode(",", $array);
// output should be a string
echo $string;
// output: One,Two,Three
?>`,
            },
            {
                title: '6. تابع افزودن یک عنصر به انتهای آرایه',
                code:`<?php
$array = ['One', 'Two', 'Three'];
array_push($array, 'Four');
echo '<pre>';
print_r($array);
echo '</pre>';
// output
/*Array
(
    [0] => One
    [1] => Two
    [2] => Three
    [3] => Four
)*/
?>`,
            },
            {
                title: '7. تابع حذف عنصر از انتهای آرایه',
                code:`<?php
$array = ['One', 'Two', 'Three'];
$element = array_pop($array); 
echo '<pre>';
print_r($array); 
echo '</pre>';
// output
/*Array
(
    [0] => One
    [1] => Two
)*/
?>`,
            },
            {
                title: '8. تابع حذف عنصر از آرایه',
                code:`<?php
$array = ['One', 'Two', 'Three'];
unset($array[1]);
echo '<pre>';
print_r($array);
echo '</pre>';
// output
/*Array
(
    [0] => One
    [2] => Three
)*/
?>`,
            },
            {
                title: '9. تابع چاپ آرایه',
                code:`<?php
$array = ['One', 'Two', 'Three'];
echo '<pre>';
print_r($array);
echo '</pre>';
// output
/*Array
(
    [0] => One
    [1] => Two
    [2] => Three
)*/

echo '<pre>';
var_dump($array);
echo '</pre>';
// output
/*
array(3){
    [0] => string(3) "One"
    [1] => string(3) "Two"
    [2] => string(4) "Three"
}*/
?>`,
            },
        ],
    },
];

export default DocArray;
