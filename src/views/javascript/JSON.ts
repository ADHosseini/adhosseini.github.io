const myJSON = [
    {
        title: 'قواعد',
        text: [
            {
                title: `
1. هر داده شامل یک نام و یک مقدار است.
                <br />
2. داده ها با کاراکتر کاما(,) از یک دیگر جدا می شوند.                
                <br />
3. دادها بین کاراکتر آکولاد({}) قرار می گیرند.                
                <br />
                4. از کاراکتر براکت([]) برای ایجاد آرایه استفاده می شود.
                `,
                code: `
                // JSON
                {"name":"Ali"}
                
                // JavaScript
                {name:"Ali"}
                
                // JavaScript Objects
                person = {name:"Ali", age:31, city:"Tehran"};
                
                // returns Ali
                person.name;
                person["name"];
                
                // modified 
                person.name = "Reza";
                person["name"] = "Reza";`,
            },
        ],
    },
    {
        title: 'انواع داده',
        text: [
            {
                title: `رشته ای`,
                code: `{"name":"John"}`,
            },
            {
                title: `عددی`,
                code: `{"age":30}`,
            },
            {
                title: `شی`,
                code: `{
"employee":{"name":"Ali", "age":30, "city":"New York"}
}`,
            },
            {
                title: `آرایه`,
                code: `{
"employees":["Ali", "Reza", "Ahmad"]
}`,
            },
            {
                title: `بولین `,
                code: `{"sale":true}`,
            },
            {
                title: `null `,
                code: `{"middlename":null}`,
            },
        ],
    },
    {
        title: 'تبدیل رشته به جیسون',
        text: [
            {
                title: `تبدیل رشته جیسون به شی جیسون`,
                code: `
                const text = '{"name":"Ali", "age":30, "city":"New York"}'
                const obj = JSON.parse(text);
                // returns Ali
                obj.name
                obj['name']`,
            },
            {
                title: `تبدیل رشته آرایه به آرایه`,
                code: `const text = '["Ali", "Reza", "Ahmad"]';
const myArr = JSON.parse(text);
// returns Ali
myArr[0]`,
            },
        ],
    },
    {
        title: 'تبدیل جیسون به رشته',
        text: [
            {
                title: `تبدیل جیسون به رشته`,
                code: `const obj = {name: "Ali", age: 30, city: "New York"};
const myJSON = JSON.stringify(obj);`,
            },
            {
                title: `تبدیل آرایه به رشته`,
                code: `const arr = ["Ali", "Reza", "Ahmad"];
const myJSON = JSON.stringify(arr);`,
            },
        ],
    },
    {
        title: 'یک نمونه کاربرد تبدیل جیسون به رشته و بالعکس',
        text: [
            {
                title: `ذخیره سازی اطلاعات`,
                code: `// Storing data:
const myObj = {name: "Ali", age: 31, city: "New York"};
const myJSON = JSON.stringify(myObj);
localStorage.setItem("testJSON", myJSON);

// Retrieving data:
let text = localStorage.getItem("testJSON");
let obj = JSON.parse(text);
document.getElementById("demo").innerHTML = obj.name;`,
            },
        ],
    },
];

export default myJSON;
