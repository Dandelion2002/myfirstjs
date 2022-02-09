//alert("Hello to JS");

//var table = "Normal Table";
var table = "Normal table";
let chair = "One chair";
let testBoolean = true;
let testNumber = 10;
let testString = 'text';
let testString2 = '"text"';
let testString3 = "'test'";
let testBooleanObject = new Boolean(true);
let testNumberObject = new Number(10);
let testStringObject = new String('test');
console.log(table);
console.log(testBoolean);
console.log(chair);
console.log(testNumber);
console.log(testString);
console.log(testString2);
console.log(testString3);
console.log(testBooleanObject);
console.log(testNumberObject);
console.log(testStringObject);

//Concatenate variables
let nameOK = "John";
let surname = "Doe";
let question = "How are you "+nameOK+" "+surname+"?";
console.log(question);

//To ES6 we can use backtick to create interpolated strings
let nameOK2 = "John";
let surname2 = "Doe";
let age = 23;
let question2 = `How old is ${nameOK} ${surname}?`;
let answer = "He is "+age+" years old";
console.log(question2);
console.log(answer);

//COncatenate using method string.concat(String)
let nameOK3 = "John";
let surname3 = "Doe";
let question3 = "How are you ".concat(nameOK3)+" ".concat(surname3)+"?";
console.log(question3);

//Arithmetic operations
//Sum, Rest, Multiplication or Division
let operator_a = 12;
let operator_b = 6;
let sum = operator_a + operator_b;
let rest = operator_a - operator_b;
let mult = operator_a * operator_b;
let division = operator_a / operator_b;
let expo = operator_a ** operator_b;
let incr = operator_a++;//cuidado porque no tira del valor inicial
let decr = operator_a--;
console.log(sum);
console.log(rest);
console.log(mult);
console.log(division);
console.log(expo);
console.log(incr);
console.log(decr);

//Assignment Operators
let x = 5;
let y = 6;
console.log(x+=5);
console.log(x-=5);
console.log(x*=3);
console.log(y/=2);

//typeof, null, undifinded
let testBoolean2 = true;
let testNumber2 = 12;
let testString4 = "Hello!"
let testBooleanObject2 = new Boolean(true);
let testNull = null;
let testUndefined;
console.log(typeof(testBoolean2));
console.log(typeof(testNumber2));
console.log(typeof(testString4));
console.log(typeof(testBooleanObject2));
console.log(typeof(testNull));
console.log(typeof(testUndefined));

//Array Definition
var first_array = [];
var second_array = new Array(3);
var third_array = new Array(3,5);
var fourth_array = new Array(3,5,"Seville",true,third_array);
console.log(first_array);
console.log(second_array);
console.log(third_array);
console.log(fourth_array);
console.log(third_array[1]);
console.log(fourth_array[4][0]);

//Array length
console.log(fourth_array[4].length);

//Array push (adds at the end)
fourth_array.push("Spain");
console.log(fourth_array);

//Array unshift (adds at the top)
fourth_array.unshift(1);
console.log(fourth_array)

//For / For each
//for(var i = 0; i<fourth_array.length; i++){
//    console.log("Entramos en la iteración de "+fourth_array[i]);
//};

//for(var i = fourth_array.length; i>=0; i--){
//    console.log("Entramos en la iteración de "+fourth_array[i]);
//};

//var i = fourth_array.length
//for(;i>=0;i--){ //faster
//    console.log("Entramos en la iteración de "+fourth_array[i]);
//}

fourth_array.forEach(function(element){
    console.log("Fourth iteration "+element);
});

//Date Object 
let today = new Date();
let first_october = new Date(2019,10,1);
console.log(today);
console.log(first_october);
console.log(today.getDay());

//Eventos

