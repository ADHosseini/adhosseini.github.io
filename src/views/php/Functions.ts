const data = {
    pageTitle: 'تابع',
    breadcrumbs: ['PHP','تابع']
}
const InputArray = [
    {
        title: 'تعریف',
        text: [
            {
                title: `روش اول تعریف`,
                code: `<?php
function myFn1(){
    echo 'Salam';
}
?>`,
            },
            {
                title: `فراخوانی روش اول تعریف`,
                code: `<?php
myFn1();
?>`,
            },
            {
                title: `روش دوم تعریف`,
                code: `<?php
$myFn1 = function (){
    echo 'Salam';
};
?>`,
            },
            {
                title: `فراخوانی روش دوم تعریف`,
                code: `<?php
$myFn1();
?>`,
            },
        ],
    },
    {
        title: 'پارامترها',
        text: [
            {
                title: `با مقدار`,
                code: `<?php
function myFn3($a, $b){
    return sprintf('%d+%d=%d<br>', $a, $b, $a + $b);
}
echo myFn3(5, 10);
?>`,
            },
            {
                title: `با مقدار پیش فرض`,
                code: `<?php
function myFn4($a, $b = 99){
    return sprintf('%d+%d=%d<br>', $a, $b, $a + $b);
}
echo myFn4(5, 10);
echo myFn4(5);
?>`,
            },
            {
                title: `با ارجراع`,
                code: `<?php
function myFn5(&$a, $b){
    $a = $a + $b;
}
$x = 5;
$y = 6;
myFn5($x, $y);
echo "x=$x y=$y <br>";
?>`,
            },
        ],
    },
    {
        title: 'متغییر های سراسری',
        text: [
            {
                title: ``,
                code: `<?php
$a = 5;
function myFn7($b) {
    global $a;
    return sprintf('%d+%d=%d<br>', $a, $b, $a + $b);
};
echo myFn7(6);
?>`,
            },
        ],
    },
    {
        title: 'ارث بری از ناحیه بالاتر',
        text: [
            {
                title: ``,
                code: `<?php
$a = 5;
$myFn6 = function ($b) use ($a) {
    return sprintf('%d+%d=%d<br>', $a, $b, $a + $b);
};
echo $myFn6(6);
?>`,
            },
        ],
    },
    {
        title: 'تابع به عنوان پارامتر ورودی یک تابع دیگر(callback)',
        text: [
            {
                title: ``,
                code: `<?php
$myFn8 = function ($a) {
    return strlen($a);
};
$names = ['Ali', 'Reza', 'Ahmad'];
$out = array_map($myFn8, $names);
print_r($names);
echo '<br>';
print_r($out);
?>`,
            },
        ],
    },
    {
        title: 'تابع بی نام(anonymous) به عنوان پارامتر ورودی یک تابع دیگر(callback)',
        text: [
            {
                title: ``,
                code: `<?php
$names = ['Ali', 'Reza', 'Ahmad'];
$out = array_map(function ($a) {return strlen($a);}, $names);
print_r($names);
echo '<br>';
print_r($out);
?>`,
            },
        ],
    },
];
const out={data,InputArray};

export default out;
