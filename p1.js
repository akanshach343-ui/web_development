//var variable

// var num=12*64;
// //to make constant things
// console.log(num);

// var num=12*5;
// console.log(num);

// var sum=num+2;
// console.log(sum);



// const a = 12;
// console.log(a);

// //name didnt worked coz it is a global property
// let myname="Akansha";
// console.log(myname);

// //temporal dead zone
// console.log(c);

// var c=12;
//thus 23 to 25 is temporal dead zone area

//template literals
let one= 5;

let two= 10;
console.log(`Your pay ${one+two} rupees`);
//used when u need to add or perform an expression and then write inside a string and calculate it. 


let age=19;
if(age>=18){
    console.log("eligible to vote");

}else{
    console.log("not eligbile to vote");

}

console.log(5==5);

console.log(5!=5);

//
n=5
if(1>n>0){
    console.log("no is greater than 0");
}
else if(n>2){
    console.log("no is greater than 2");
}
else{
    console.log("yo baby");
}

let myname = "akansh";
if(myname=="akansha")
    console.log("my name is "+ myname);

else
   console.log(`invalid username`);

//create a traffic light system that shows what to do based on color

// let color= prompt("Enter traffic light color: ");
// if(color=="red")
//     console.log(`STOP HERE! The signal is ${color}`);
// else if(color="yellow")
//     console.log("PLEASE WAIT!");
// else
//     console.log("YOU CAN GO NOW!");

// //to calculate price of popcorn

// let size = prompt("Please choose a suitable size of popcorn: ");
// if(size=="xl" || size =="XL")
//     console.log(`Price of popcorn of size ${size} is Rs.200`);
// else if(size=="l" || size =="L")
//     console.log(`Price of popcorn of size ${size} is Rs.250`);
// else if(size=="m" || size =="M")
//     console.log(`Price of popcorn of size ${size} is Rs.100`);
// else (size=="s" || size =="S")
//     console.log(`Price of popcorn of size ${size} is Rs.50`);


/*let marks = 45;
if(marks>=35){
    console.log("Pass");
    if(marks>=80)
        console.log("Grade is: o");
    else
        console.log("Grade is: A")

}else{
    console.log("Better luck next time");
}
*/

//good string

let  a = "apple";
if(a[0] ==="a" && a[1]===" " && a.length>3)
    console.log("The given string is a good string");
else
    console.log("bad string");

//use switch to print day 1 to 7

/*let day = parseInt(prompt("Enter number of day: "));
switch(day){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        //console.log("Wrong day!");
        alert("You not entering value between 1-7");
        break;

}*/

//assignment
console.log("Ques 1");
let num =7;
if( num%10==0)
    console.log("Good");
else
    console.log("bad");

//ques 2
/*console.log("Ques 2");
let yourname = prompt("Entet your name");
let yourage = parseInt(prompt("Enter your age"));
alert(`${yourname} is ${yourage} years old.`);*/

//ques 3
console.log("Ques3");
/*let number=2;
switch(number){
    case 1:
        console.log("Months in quarter 1: January, February, March ");
        break;
    case 2:
        console.log("Month in Quarter 2: April, May, June");
        break;
    case 3:
        console.log("Month in quarter 3: July, August, September");
        break;
    case 4:
        console.log("Month in Quarter 4: October, November, December");
        break;
    default:
        alert("Please enter a value between range 1 to 4");
}
*/

//Question 4
/*console.log("Ques 4");
let str="Apple";
if(str[0]=="A" || str[0]=="a" && str.length>5)
    console.log("Golden string");
else
    console.log("Not a golden string");
*/

//Question 5
console.log("ques5");

/*let arr=[23, 43, 51];
if((arr[0]>arr[1]) && (arr[0]>arr[2])){
    console.log(`${arr[0]} is the greatest!`);
    else
        console.log(`${arr[2]} is the greatest`)
}else
    console.log(`${arr[1]} is the greatest`);*/

//question 6
console.log("ques 6");

let num1= 32;
let num2 = 47852;

if((num1%10==2) && (num2%10==2))
    console.log("Both the numbers have same last digit");
else
    console.log("No, both the numbers have different last digit");

//string
let msg="help!";
console.log(msg.trim().toUpperCase());

let str2 ="ApnaCollege";
console.log(str2.slice(4,9));
console.log(str2.indexOf("na"));
console.log(str2.replace("Apna", "Our"));