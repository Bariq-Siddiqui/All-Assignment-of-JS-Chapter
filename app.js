//    *** *** *** Chapter # 01  (ALERTS ) *** *** *** 

//  TASK # 01
// Write a script to greet your website visitor using JS alert box.


//  SOLUTION:-

// window.alert("Welcome to My Website");

// ___________________________________//-*-\\________________________________________________

//  TASK # 02
// Write a script to display following message on your web page:


//  SOLUTION:-

// window.alert("Error! Please enter a valid password.");

// ___________________________________//-*-\\________________________________________________

//  TASK # 03
// Write a script to display following message on your web page: (Hint : Use line break)


//  SOLUTION:-

// window.alert("Welcome to JS Land... \n Happy Coding!");

// ___________________________________//-*-\\________________________________________________

//  TASK # 04
// Write a script to display following messages in sequence:`


//  SOLUTION:-

// alert("Welcome to JS Land...");
// alert("Happy Coding! \n Prevent this page from creating additional dialogs.")

// ___________________________________//-*-\\________________________________________________

//  TASK # 05
// Generate the following message through browser’s developer console:


//  SOLUTION:-

// alert("Hello... I can run JS through my web browser's console");
// console.log("Hello... I can run JS through my web browser's console");

// ___________________________________//-*-\\________________________________________________


//    *** *** *** Chapter # 02  (VARIABLES FOR STRINGS) *** *** *** 

//  TASK # 01
// Declare a variable called username.


//  SOLUTION:-

// var Username=prompt("Enter Username","Username is");
// alert(Username);

// ___________________________________//-*-\\________________________________________________

//  TASK # 02
// Declare a variable called myName & assign to it a string that represents your Full Name.


//  SOLUTION:-

// var myName=prompt("Enter myname","your Full Name");
// alert(myName);

// ___________________________________//-*-\\________________________________________________

//  TASK # 03
// Write script to
// a) Declare a JS variable, titled message.
// b) Assign “Hello World” to variable message
// c) Display the message in alert box.


//  SOLUTION:-

// var message=prompt("Message","Message is");
// alert(message);

// ___________________________________//-*-\\________________________________________________

//  TASK # 04
// Write a script to save student’s bio data in JS variables and show the data in alert boxes.


//  SOLUTION:-

// var stName="Jhone Doe";
// var age="15 years old" ;
// var course="Certified Mobile Application Development";

// alert(stName);
// alert(age);
// alert(course);

// ___________________________________//-*-\\________________________________________________

//  TASK # 05
// Write a script to display the following alert using one JS variable:


//  SOLUTION:-

// var piZza="PIZZA \n PIZZ \n PIZ \n PI \n P";
// alert(piZza);

// ___________________________________//-*-\\________________________________________________

//  TASK # 06
// Declare a variable called email and assign to it a string that
// represents your Email Address(e.g. example@example.com).
// Show the blow mentioned message in an alert box.(Hint: use
// string concatenation)


//  SOLUTION:-

// var message= "My email address is ";
// var egemail="example@example.com";
// var email= message + egemail;
// alert(email);

// ___________________________________//-*-\\________________________________________________

//  TASK # 07
//  Declare a variable called book & give it the value “A
// smarter way to learn JavaScript”. Display the following
// message in an alert box:


//  SOLUTION:-

// var book ="A smarter way to learn JavaScript";
// var a="I am trying to learn from the Book A Smarter way to learn JavaScript";
// alert(a);

// ___________________________________//-*-\\________________________________________________

//  TASK # 08
// Write a script to display this in browser through JS


//  SOLUTION:-

// var a="Yah! i can write HTML content through Javascript";
// document.write(a);

// ___________________________________//-*-\\________________________________________________

//  TASK # 09
// . Store following string in a variable and show in alert and browser through JS
// “▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬”


//  SOLUTION:-

// var a=("“▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬”");
// alert(a);

// ___________________________________//-*-\\________________________________________________


//    *** *** *** Chapter # 03  (VARIABLES FOR NUMBERS) *** *** *** 

//  TASK # 01
// Declare a variable called age & assign to it your age. Show your age in an alert box.


//  SOLUTION:-

// var age=15 ;
// alert("I am " + age + " years old");

// ___________________________________//-*-\\________________________________________________

//  TASK # 02
// Declare & initialize a variable to keep track of how many
// times a visitor has visited a web page. Show his/her
// number of visits on your web page. For example: “You
// have visited this site N times”.


//  SOLUTION:-

// var a="You have visited this site 14 times";
// alert(a);

// ___________________________________//-*-\\________________________________________________

//  TASK # 03
// Declare a variable called birthYear & assign to it your
// birth year. Show the following message in your browser:


//  SOLUTION:-

// var birthYear=1990;
// var b="Data type of my declared variable is number";
// document.write("My birth year is "+birthYear +"<br>"+b);

// ___________________________________//-*-\\________________________________________________

//  TASK # 04
// A visitor visits an online clothing store
// www.xyzClothing.com . Write a script to store in variables
// the following information:
// a. Visitor’s name
// b. Product title
// c. Quantity i.e. how many products a visitor wants to
// order
// Show the following message in your browser: “John
// Doe ordered 5 T-shirt(s) on XYZ Clothing store”.



//  SOLUTION:-

// var visitorName ="Jhone Doe";
// var productTitle ="T-shirt";
// var quantity ="5";
// document.write(visitorName+"  "+"ordered"+" "+quantity+" "+productTitle+"(s) on XYZ Clothing store");

// ___________________________________//-*-\\________________________________________________


//    *** *** *** Chapter # 04  (VARIABLE NAMES: LEGAL & ILLEGAL) *** *** *** 

//  TASK # 01
// Declare 3 variables in one statement.


//  SOLUTION:-

// var a="My Name";
// var b="is";
// var c="Muhammad Bariq Kamran Siddiqui"
// document.write(a+" " + b + "  " + c);

// ___________________________________//-*-\\________________________________________________

//  TASK # 02
// Declare 5 legal & 5 illegal variable names.


//  SOLUTION:-

// Legal Variable Names
// 1) var bariq
// 2) var baRiq
// 3) var bariq_kamram 
// 4) var bariq12
// 5) var $my_1stVariable

// Illegal Variable Names
// 1) var 12bariq
// 2) var &baRiq
// 3) var bariq kamram 
// 4) var @bariq
// 5) var $my-1stVariable

// ___________________________________//-*-\\________________________________________________

//  TASK # 03
// Display this in your browser
// a) A heading stating “Rules for naming JS variables”
// b) Variable names can only contain ______, ______,
// ______ and ______.
// For example $my_1stVariable
// c) Variables must begin with a ______, ______ or
// _____. For example $name, _name or name
// d) Variable names are case _________
// e) Variable names should not be JS _________


//  SOLUTION:-

// var a="Variable names can only contain numbers, $ and -.For example $my_1stVariable";
// var b="Variables must begin with a letter, $ or -. For example $name, _name or name";
// var c="Variable names are case sensitive";
// var d="Variable names should not be JS keywords.";
// document.write("<h1>Rules for naming JS variables</h1>");
// document.write(a + "<br>" + b + "<br>" + c + "<br>" + d);


// ___________________________________//-*-\\________________________________________________


//    *** *** *** Chapter # 05  (MATH EXPRESSIONS) *** *** *** 

//  TASK # 01
// Write a program that take two numbers & add them in a
// new variable. Show the result in your browser.


//  SOLUTION:-

// var a=3;
// var b=5;
// var c=a+b;

// document.write("Sum of "  ,  + a , "  and  "  ,b + "  is   " ,c);


// ___________________________________//-*-\\________________________________________________


//  TASK # 02
// Repeat task1 for subtraction, multiplication, division & modulus.


//  SOLUTION:-

// var a=3;
// var b=5;
// var c=a+b;
// var d=a-b;
// var e=a*b;
// var f=a/b;
// var g=a%b;

// document.write("Sum of         "  ,  + a , "  and  "  ,b + "  is   " ,c + "<br>");      
// document.write(" Differnce of         "  ,  + a , "  and  "  ,b + "  is   " ,d + "<br>");
// document.write("   Product of         "  ,  + a , "  and  "  ,b + "  is   " ,e + "<br>");
// document.write("  Division of         "  ,  + a , "  and  "  ,b + "  is   " ,f + "<br>");
// document.write("   modulus of         "  ,  + a , "  and  "  ,b + "  is   " ,g );


// ___________________________________//-*-\\________________________________________________


//  TASK # 03
// Do the following using JS Mathematic Expressions
// a. Declare a variable.
// b. Show the value of variable in your browser like “Value
// after variable declaration is: ??”.
// c. Initialize the variable with some number.
// d. Show the value of variable in your browser like “Initial
// value: 5”.
// e. Increment the variable.
// f. Show the value of variable in your browser like “Value
// after increment is: 6”.
// g. Add 7 to the variable.
// h. Show the value of variable in your browser like “Value after addition is: 13”.
// i. Decrement the variable.
// j. Show the value of variable in your browser like “Value
// after decrement is: 12”.
// k. Show the remainder after dividing the variable’s value
// by 3.
// l. Output : “The remainder is : 0”.


//  SOLUTION:-

// var value;
// document.write("Value after variable declaration is " + value+"<br>")
// var initialize=7;
// var initialValue=5;
// document.write("Initial Value: " + initialValue+"<br>")
// var increMent= ++initialValue;
// document.write("Value after increament is: " + increMent+"<br>")
// var add=initialize+increMent;
// document.write("Value after addition is: " + add+"<br>")
// var decreMent=--add;
// document.write("Value after decrement is: " + decreMent+"<br>")
// var reMainder=decreMent%3;
// document.write("The remainder is: " + reMainder)


// ___________________________________//-*-\\________________________________________________


//  TASK # 04
// . Cost of one movie ticket is 600 PKR. Write a script to
// store
// ticket price in a variable & calculate the cost of buying 5
// tickets
// to a movie. Example output:


//  SOLUTION:-

// var cost=600;
// var ticket=5;
// var total=cost*ticket;
// document.write("Total cost to buy        "  ,  + ticket , "  tickets to a movie is  "  ,total + "  PKR   "); 


// ___________________________________//-*-\\________________________________________________


//  TASK # 05
// Write a script to display multiplication table of any
// number in your browser. E.g


//  SOLUTION:-

// var tabLe=4;
// document.write("Table of  "+ tabLe + "<br>");
// document.write(tabLe + "x" + "1" + "=" +  tabLe * 1 + "<br>");
// document.write(tabLe + "x" + "2" + "=" +  tabLe * 2 + "<br>");
// document.write(tabLe + "x" + "3" + "=" +  tabLe * 3 + "<br>");
// document.write(tabLe + "x" + "4" + "=" +  tabLe * 4 + "<br>");
// document.write(tabLe + "x" + "5" + "=" +  tabLe * 5 + "<br>");
// document.write(tabLe + "x" + "6" + "=" +  tabLe * 6 + "<br>");
// document.write(tabLe + "x" + "7" + "=" +  tabLe * 7 + "<br>");
// document.write(tabLe + "x" + "8" + "=" +  tabLe * 8 + "<br>");
// document.write(tabLe + "x" + "9" + "=" +  tabLe * 9 + "<br>");
// document.write(tabLe + "x" + "10" + "=" + tabLe  * 10 );


// ___________________________________//-*-\\________________________________________________


//  TASK # 06
// The Temperature Converter: It’s hot out! Let’s make a
// converter based on the steps here.
// a. Store a Celsius temperature into a variable.
// b. Convert it to Fahrenheit & output “NNoC is NNoF”.
// c. Now store a Fahrenheit temperature into a variable.
// d. Convert it to Celsius & output “NNoF is NNoC”.


//  SOLUTION:-

// var celCius = 25;
// var fahrenHeit=70;
// var c=(fahrenHeit-32)*5/9;
// var f=(celCius*9/5)+32;
// document.write(celCius+"<sup>0</sup>C is "+f+"<sup>0</sup>F"+"<br>")
// document.write(fahrenHeit+"<sup>0</sup>F is "+c+"<sup>0</sup>C")


// ___________________________________//-*-\\________________________________________________


//  TASK # 07
// Write a program to implement checkout process of a
// shopping cart system for an e-commerce website. Store
// the following in variables
// a. Price of item 1
// b. Price of item 2
// c. Ordered quantity of item 1
// d. Ordered Quantity of item 2
// e. Shipping charges
// Compute the total cost & show the receipt in your browser.


//  SOLUTION:-

// var a=650;
// var b=3;
// var c=100;
// var d=7;
// var e=100;
// var f=a*b;
// var g=c*d;
// var h=e+f+g;
// document.write("<h1>Shopping Cart</h1><br><br>")
// document.write("Price of item 1 is  " + a + "<br>");
// document.write("Quantity of item 1 is  " + b + "<br>" );
// document.write("Price of item 2 is  " + c + "<br>" );
// document.write("Quantity of item 2 is  " + d + "<br>" );
// document.write("Shipping charges  " + e  + "<br><br><br>");
// document.write("Total cost of your order is  " + h);


// ___________________________________//-*-\\________________________________________________


//  TASK # 08
// Store total marks & marks obtained by a student in 2
// variables. Compute the percentage & show the result in
// your browser


//  SOLUTION:-

// var a=980;
// var b=804;
// var c=(b/a)*100;
// document.write("Total marks:  " + a + "<br>");
// document.write("Marks obtained:  " + b + "<br>" );
// document.write("Percentage  " + c + "%");


// ___________________________________//-*-\\________________________________________________


//  TASK # 09
// . Assume we have 10 US dollars & 25 Saudi Riyals. Write a
// script to convert the total currency to Pakistani Rupees.
// Perform all calculations in a single expression.
// (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee
// and 1 Saudi Riyal = 28 Pakistani Rupee)


//  SOLUTION:-

// var a=10;
// var b= 104.80;
// var c= 25;
// var d=28;
// var e=a*b;
// var f=c*d;
// var g=e+f;
// document.write("<h1>Currency in PKR</h1>");
// document.write("Total Currency in PKR   " + g);


// ___________________________________//-*-\\________________________________________________


//  TASK # 10
// Write a program to initialize a variable with some
// number and do arithmetic in following sequence:
// a. Add 5
// b. Multiply by 10
// c. Divide the result by 2
// Perform all calculations in a single expression


//  SOLUTION:-

// var a=+prompt("Enter a number");
// var b=(a+5)*10/2;
// document.write("Result is  " + b);


// ___________________________________//-*-\\________________________________________________


//  TASK # 11
// The Age Calculator: Forgot how old someone is?
// Calculate it!
// a. Store the current year in a variable.
// b. Store their birth year in a variable.
// c. Calculate their 2 possible ages based on the stored
// values.
// Output them to the screen like so: “They are either NN or NN
// // years old”.


//  SOLUTION:-

// var currentYear=+prompt("Enter Current Year");
// var birthYear=+prompt("Enter Birth Year");
// var age=currentYear-birthYear;
// document.write("<h1>Age Calculator</h1><br>");
// document.write("Current Year: "+currentYear +"<br>");
// document.write("Current Year: "+birthYear+"<br>");
// document.write("Your Age is: "+age);


// ___________________________________//-*-\\________________________________________________


//  TASK # 12
// The Geometrizer: Calculate properties of a circle.
// a. Store a radius into a variable.
// b. Calculate the circumference based on the radius, and
// output “The circumference is NN”.
// (Hint : Circumference of a circle = 2 π r , π = 3.142)
// Calculate the area based on the radius, and output “The
// area is NN”. (Hint : Area of a circle = π r2, π = 3.142)


//  SOLUTION:-

// var radIus=20;
// var pi=3.142;
// var circumFerence=2*pi*radIus;
// var arEa=pi*radIus*radIus;
// document.write("<h1>The Geometrizer</h1><br>");
// document.write("Radius of a circle: "+radIus +"<br>");
// document.write("The circumference is: "+circumFerence+"<br>");
// document.write("The area is: "+arEa);


// ___________________________________//-*-\\________________________________________________


//  TASK # 13
// The Lifetime Supply Calculator: Ever wonder how
// much a “lifetime supply” of your favorite snack is?
// Wonder no more.
// a. Store your favorite snack into a variable
// b. Store your current age into a variable.
// c. Store a maximum age into a variable.
// d. Store an estimated amount per day (as a number).
// e. Calculate how many would you eat total for the rest of
// your life.
// Output the result to the screen like so: “You will need
// NNNN to last you until the ripe old age of NN”.


//  SOLUTION:-

// var fSnack="chocolate chip";
// var currentAge=15;
// var maximumAge=65;
// var amountPerday=3;
// var total = (maximumAge -currentAge)*amountPerday;
// document.write("<h1>The Lifetime Supply Calculator</h1><br>");
// document.write("Favorite snack: "+fSnack +"<br>");
// document.write("Current age: "+currentAge+"<br>");
// document.write("Estimated Maximum Age: "+maximumAge+"<br>");
// document.write("Amount of snacks per day: "+amountPerday+"<br>");
// document.write("You will need "+total+" chocolate chip to last you until the ripe old age of "+maximumAge);


// ___________________________________//-*-\\________________________________________________



//    *** *** *** Chapter # 6-9  (MATH EXPRESSIONS) *** *** *** 

//  TASK # 01
// Write a program to take a number in a variable, do the
// required arithmetic to display the following result in your
// browser:


//  SOLUTION:-

// var a = 10;
// document.write(
//     "Result: <br/> The value of a is:" + a +
//     "<br/> ----------------"+

//     "<br/><br/> The value of ++ a is:"+ (++a) +
//          "<br/>  Now The value of a is:"+ a +

//     "<br/><br/> The value of a++ is:"+(a++)+
//          "<br/>  Now The value of a is:"+ a +

//     "<br/><br/> The value of  --a is:"+ (--a) +
//          "<br/>  Now The value of a is:"+ a +

//     "<br/><br/> The value of a-- is:"+(a--)+
//          "<br/>  Now The value of a is:"+ a +"</br> </br> </br>"
//         ) ;


// ___________________________________//-*-\\________________________________________________


//  TASK # 2
// What will be the output in variables a, b & result after
// execution of the following script:
// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;
// Explain the output at each stage:
// --a;
// --a - --b;
// --a - --b + ++b;
// --a - --b + ++b + b--;


//  SOLUTION:-

// var a = 2;
// document.write(" a is "+a);
// var b = 1;
// document.write("<br/> b is "+b);
// var result = --a - --b + ++b + b--;
// document.write("<br/> result is "+result);


// ___________________________________//-*-\\________________________________________________


//  TASK # 3
// Write a program that takes input a name from user & greet the user.


//  SOLUTION:-

// var userName = prompt("Enter your Name");
// alert("Welcome " +userName+" have a good day");


// ___________________________________//-*-\\________________________________________________


//  TASK # 5
// Write a program to take input a number from user &
// display it’s multiplication table on your browser. If user
// does not enter a new number, multiplication table of 5
// should be displayed by default.


//  SOLUTION:-

// var a= +prompt("Enter a number for Table","5")
// var num = 1
// document.write(
//     a+" x "+num+" = "+ (a*num++)+"<br/>"+
//     a+" x "+num+" = "+ (a*num++)+"<br/>"+
//     a+" x "+num+" = "+ (a*num++)+"<br/>"+
//     a+" x "+num+" = "+ (a*num++)+"<br/>"+
//     a+" x "+num+" = "+ (a*num++)+"<br/>"+
//     a+" x "+num+" = "+ (a*num++)+"<br/>"+
//     a+" x "+num+" = "+ (a*num++)+"<br/>"+
//     a+" x "+num+" = "+ (a*num++)+"<br/>"+
//     a+" x "+num+" = "+ (a*num++)+"<br/>"+
//     a+" x "+num+" = "+ (a*num++)+"<br/>"
// );


// ___________________________________//-*-\\________________________________________________


//  TASK # 6
// Take
// a) Take three subjects name from user and store them in 3
// different variables.
// b) Total marks for each subject is 100, store it in another
// variable.
// c) Take obtained marks for first subject from user and
// stored it in different variable.
// d) Take obtained marks for remaining 2 subjects from user
// and store them in variables.
// e) Now calculate total marks and percentage and show the
// result in browser like this.(Hint: user table)

// var sUb1= prompt("Enter first subject name","English");
// var sUb2= prompt("Enter second subject name","Math");
// var sUb3= prompt("Enter third subject name","Urdu");
// var maRks=100;
// var tmaRks=300;
// var sUb1m= +prompt("Enter first subject marks","54");
// var sUb2m= +prompt("Enter second subject marks","54");
// var sUb3m= +prompt("Enter third subject marks","48");
// var totalObtmarks=sUb1m+sUb2m+sUb3m;
// var perCentage=totalObtmarks*100/300;
// document.write(
//     "<table>"+
//     "<tr><th>Subject</th><th> Total Marks</th><th> Obtained Marks</th><th> Percentage</th></tr>"+
//     "<tr><td>"+sUb1+"</td><td>"+maRks+"</td><td>"+sUb1m+"</td><td>"+sUb1m+" %</td></tr>"+
//    "<tr><td>"+sUb2+"</td><td>"+maRks+"</td><td>"+sUb2m+"</td><td>"+sUb2m+" %</td></tr>"+
//     "<tr><td>"+sUb3+"</td><td>"+maRks+"</td><td>"+sUb3m+"</td><td>"+sUb3m+" %</td></tr>"+
//    "<tr><td></td><td>"+tmaRks+"</td><td>"+totalObtmarks+"</td><td>"+perCentage+" %</td></tr>"+
//    "</table>"
// )


// ___________________________________//-*-\\________________________________________________



//    *** *** *** Chapter # 9-11  (USER INPUT & CONDITIONAL STATEMENT) *** *** *** 

//  TASK # 01
// Write a program to take “city” name as input from user. If
// user enters “Karachi”, welcome the user like this:
// “Welcome to city of lights”


//  SOLUTION:-

// var cityName=prompt("Enter a city name");
// if(cityName=="karachi")
// {
//     document.write("Welcome to city of lights")
// }
// else
// {
//     document.write()
// }


// ___________________________________//-*-\\________________________________________________


//  TASK # 2
// Write a program to take “gender” as input from user. If the
// user is male, give the message: Good Morning Sir. If the
// user is female, give the message: Good Morning Ma’am.


//  SOLUTION:-

// var genDer=prompt("Enter Gender");
// if(genDer=="male")
// {
//     document.write(" Good Morning Sir")
// }
// else
// {
//     document.write("Good Morning Ma’am.")
// }


// ___________________________________//-*-\\________________________________________________


//  TASK # 3
// Write a program to take input color of road traffic signal
// from the user & show the message according to this table:


//  SOLUTION:-

// var a = prompt("Enter Road Traffic Signal Color");
// if(a === "red"){
//     alert("Signal Color "+ "        Message\n" + "Red" + "         Must Stop")
// }
// else if(a ==="yellow"){
//     alert("Signal Color "+ "        Message\n" + "Yellow" + "       Ready To Move")
// }
// else if (a === "green"){
//     alert("Signal Color "+ "        Message\n" + "Green" + "        Move Now")
// }
// else{
//     alert("Sorry! it's not Signal Color")
// }



// ___________________________________//-*-\\________________________________________________


//  TASK # 4
// Write a program to take input remaining fuel in car (in
// litres) from user. If the current fuel is less than 0.25litres,
// show the message “Please refill the fuel in your car”


//  SOLUTION:-

// var a=+prompt("Enter  fuel in litres");
// if(a<0.25)
// {
//     document.write(" “Please refill the fuel in your car”")
// }
// else
// {
//     document.write()
// }


// ___________________________________//-*-\\________________________________________________


//  TASK # 5
// Run this script, & check whether alert message would be
// displayed or not. Record the outputs.

// Task # 05(a)


//  SOLUTION:-

// var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }
// alert message is displayed

//      Task # 05(b)


//  SOLUTION:-

// var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }
// alert message is not displayed

//      Task # 05(c)


//  SOLUTION:-

// var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// if (c === 13){
// alert("condition 2 is true");
// }
// if (++c < 14){
// alert("condition 3 is true");
// }
// if(c === 14){
// alert("condition 4 is true");
// }

// alert message is displayed

//      Task # 05(d)


//  SOLUTION:-

// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }

// alert message is displayed


//      Task # 05(e)


//  SOLUTION:-

// if (true){
//     alert("True");
//     }
//     if (false){
//     alert("False");
//     }

// alert message is displayed


//      Task # 05(f)


//  SOLUTION:-

// if("car" < "cat"){
//     alert("car is smaller than cat");
//     }

// alert message is displayed


// ___________________________________//-*-\\________________________________________________


//  TASK # 6
// Write a program to take input the marks obtained in three
// subjects & total marks. Compute & show the resulting
// percentage on your page. Take percentage & compute
// grade as per following table:



//  SOLUTION:-

// var totalMarks = 300;
// var sub1 = prompt("Enter Your First Subject Marks",);
// var sub2 = prompt("Enter Your Second Subject Marks");
// var sub3 = prompt("Enter Your Third Subject Marks");
// var sub1Marks = Number(sub1);
// var sub2Marks = Number(sub2);
// var sub3Marks = Number(sub3);
// var markObtained = sub1Marks+sub2Marks+sub3Marks;
// var percentage = markObtained*100/totalMarks;

// if (percentage >= 80){
//     grade = "A-one";
//     remarks = "Excellent";
// }

// if (percentage >= 70 && percentage < 80){
//     grade = "A";
//     remarks = "Good";   
// }

// if (percentage >= 60 && percentage < 70){
//     grade = "B";
//     remarks = "You Need to improve";
// }
// if (percentage < 60){
//     grade = "Fail";
//     remarks = "Sorry";
// }

// document.write(
//     "<h1>Marks sheet</h1>"+
//     "<br/>Total Marks :"+totalMarks+
//     "<br/>Marks Obtained :"+markObtained+
//     "<br/>Percentage :"+percentage+"%"+
//     "<br/>Grade :"+grade+
//     "<br/>Remarks :"+remarks

// )


// ___________________________________//-*-\\________________________________________________


//  TASK # 7
// Guess game:
// Store a secret number (ranging from 1 to 10) in a variable.
// Prompt user to guess the secret number.
// a. If user guesses the same number, show “Bingo! Correct
// answer”.
// b. If the guessed number +1 is the secret number, show
// “Close enough to the correct answer”.


//  SOLUTION:-

// var number = 5
// var userInput = +prompt("Enter the number")
// if( userInput >= 1 && userInput <=10){
//     if (number==userInput){
//         alert("BINGO! Correct Answer")
//     }

//     else if (userInput+1==number){
//         alert("Close enough to the correct answer")
//     }

//     else{
//         alert("You lost!")
//     }
// }
// else{
//     alert("ranging from 1 to 10")
// }


// ___________________________________//-*-\\________________________________________________


//  TASK # 8
// Write a program to check whether the given number is
// divisible by 3. Show the message to the user if the number
// is divisible by 3.


//  SOLUTION:-

// var a=+prompt("Enter a number");
// var b=a%3;
// if(b==0)
// {
//     document.write("The number is divisible by 3")
// }
// else
// {
//     document.write("The number is not divisible by 3")
// }


// ___________________________________//-*-\\________________________________________________


//  TASK # 9
// Write a program that checks whether the given input is an
// even number or an odd number.



//  SOLUTION:-

// var a=+prompt("Enter a number");
// var b=a%2;
// if(b==0)
// {
//     document.write("The number is even")
// }
// else
// {
//     document.write("The number is odd")
// }


// ___________________________________//-*-\\________________________________________________


//  TASK # 10
// Write a program that takes temperature as input and
// shows a message based on following criteria
// a. T > 40 then “It is too hot outside.”
// b. T > 30 then “The Weather today is Normal.”
// c. T > 20 then “Today’s Weather is cool.”
// d. T > 10 then “OMG! Today’s weather is so Cool.”



//  SOLUTION:-

// var T=+prompt("Enter a Temperature");

// if(T>=40)
// {
//     document.write("It is too hot outside")
// }
// else if(T>=30)
// {
//     document.write("The Weather today is Normal")
// }
// else if(T>=20)
// {
//     document.write("Today’s Weather is cool")
// }
// else if(T>=10)
// {
//     document.write("OMG! Today’s weather is so Cool")
// }


// ___________________________________//-*-\\________________________________________________


//  TASK # 10
// Write a program to create a calculator for +,-,*, / & %
// using if statements. Take the following input:
// a. First number
// b. Second number
// c. Operation (+, -, *, /, %)
// Compute & show the calculated result to user



//  SOLUTION:-

// var a=+prompt("Enter the First number");
// var b=+prompt("Enter the Second number");
// var c;
// var d;
// var e;
// var f;
// var g;
// document.write("<h1>Calculator</h1>");
// if(c=a+b){
//     document.write("Sum of         "  ,  + a , "  and  "  ,b + "  is   " ,c + "<br>");      
// }
// if(d=a-b){
//     document.write(" Differnce of         "  ,  + a , "  and  "  ,b + "  is   " ,d + "<br>");
// }
// if(e=a*b){
//     document.write("   Product of         "  ,  + a , "  and  "  ,b + "  is   " ,e + "<br>");
// }
// if(f=a/b){
//     document.write("  Division of         "  ,  + a , "  and  "  ,b + "  is   " ,f + "<br>");
// }
// if(g=a%b){
//     document.write("   modulus of         "  ,  + a , "  and  "  ,b + "  is   " ,g + "<br>");
// }
// else{
//     document.write("Please give input number")
// }


// ___________________________________//-*-\\________________________________________________



//    *** *** *** Chapter # 12-13  (IF…ELSE & ELSE IF STATEMENT, TESTING SET OF CONDITIONS ) *** *** *** 

//  TASK # 01
// Write a program that takes a character (number or string)
// in a variable & checks whether the given input is a
// number, uppercase letter or lower case letter. (Hint: ASCII
// codes:- A=65, Z=90, a=97, z=122).


//  SOLUTION:-

// var userInput = prompt("Enter a Character ex: a-z,A-Z,0-9")
// var ascii = userInput.charCodeAt(0)
// if (ascii >= 65 && ascii <= 90){
//     alert("you input a Capital letter")
// } 
// else if (ascii >= 97 && ascii <=122){
//     alert("you input a Small letter")
// }
// else if (ascii >= 48 && ascii <=57){
//     alert("you input a number")
// }
// else{
//     alert ("you have done something wrong")
// }


// ___________________________________//-*-\\________________________________________________


//  TASK # 2
// Write a JavaScript program that accept two integers and
// display the larger. Also show if the two integers are equal.


//  SOLUTION:-

// var a=+prompt("Enter a First Integer");
// var b=+prompt("Enter a Second Integer");
// if(a===b)
// {
//     document.write("The two integers are equal")
// }
// else if(a>b)
// {
//     document.write("The first integer is larger")
// }
// else
// {
//     document.write("The Second integer is larger")
// }


// ___________________________________//-*-\\________________________________________________


//  TASK # 3
// Write a program that takes input a number from user &
// state whether the number is positive, negative or zero.



//  SOLUTION:-

// var number = +prompt("Enter a number");
// if (number > 0 ) {
//     alert("The given number is Positive")
// }
//  else if (number < 0 ) {
//     alert("The given number is Negative")
// }
// else{
//     alert( "The given number is zero");
// }


// ___________________________________//-*-\\________________________________________________


//  TASK # 4
// Write a program that takes a character (i.e. string of
// length 1) and returns true if it is a vowel, false otherwise



//  SOLUTION:-

// var a=prompt("Enter a Character");
// if(a==="a")
// {
//     document.write("It is a vowel")
// }
// else if(a==="e")
// {
//     document.write("It is a vowel")
// }
// else if(a==="i")
// {
//     document.write("It is a vowel")
// }
// else if(a==="o")
// {
//     document.write("It is a vowel")
// }
// else if(a==="u")
// {
//     document.write("It is a vowel")
// }
// else{
//     document.write("It is a consonent")
// }


// ___________________________________//-*-\\________________________________________________


//  TASK # 5
// Write a program that
// a. Store correct password in a JS variable.
// b. Asks user to enter his/her password
// c. Validate the two passwords:
// i. Check if user has entered password. If not, then
// give message “ Please enter your password”
// ii. Check if both passwords are same. If they are
// same, show message “Correct! The password you
// entered matches the original password”. Show
// “Incorrect password” otherwise.


//  SOLUTION:-

// var a=prompt("Store correct password in a JS variable");
// {
//     alert("Asks user to enter his/her password")
// }
// var b=prompt("Please enter your password");
// if(b===a){
//     alert("“Correct! The password you entered matches the original password")
// }
// else{
//     alert("Incorrect password")
// }


// ___________________________________//-*-\\________________________________________________


//  TASK # 6
// This if/else statement does not work. Try to fix it:
// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";
// else
// greeting = "Good evening";
// }


//  SOLUTION:-

// var hour = 13;
// if (hour < 18) {
// alert("Good day");
// }
// else{
// alert("Good evening");
// }


// ___________________________________//-*-\\________________________________________________


//  TASK # 7
// . Write a program that takes time as input from user in 24
// hours clock format like: 1900 = 7pm. Implement the
// following case using if, else & else if statements



//  SOLUTION:-

// var time = +prompt("what time is it?");
// if(time >= 0000 && time <=1200){
//     alert("Good morning");
// }
// else if(time > 1200 && time <= 1700){
//     alert("Good afternoon");
// }
// else if(time > 1700 && time <= 2100){
//     alert("Good evening");
// }
// else if(time > 2100 && time <= 2359){
//     alert("Good night");
// }
// else{
//     alert("It is not hour")
// }


// ___________________________________//-*-\\________________________________________________



//    *** *** *** Chapter # 14-16  (ARRAYS ) *** *** *** 

//  TASK # 01
// Declare an empty array using JS literal notation to store
// student names in future.


//  SOLUTION:-

// var studentName = new Array();
// document.write(studentName);


// ___________________________________//-*-\\________________________________________________


//  TASK # 2
// Declare an empty array using JS object notation to store
// student names in future.


//  SOLUTION:-

// var studentName = [];
// document.write(studentName);


// ___________________________________//-*-\\________________________________________________


//  TASK # 3
// Declare and initialize a strings array.


//  SOLUTION:-

// var stringArray = ["string1", "string2", "string3"];
// document.write(stringArray);


// ___________________________________//-*-\\________________________________________________


//  TASK # 4
// Declare and initialize a numbers array.


//  SOLUTION:-

// var numBer = [22, 33, 44];
// document.write(numBer);


// ___________________________________//-*-\\________________________________________________


//  TASK # 5
// . Declare and initialize a boolean array

//  SOLUTION:-


// var booLean=[true,false]
// document.write(booLean);


// ___________________________________//-*-\\________________________________________________


//  TASK # 6
// Declare and initialize a mixed array.


//  SOLUTION:-

// var mixedArray=[22,"bariq",true]
// document.write(mixedArray)


// ___________________________________//-*-\\________________________________________________


//  TASK # 7
// Declare and Initialize an array and store available
// education qualifications in Pakistan (e.g. SSC, HSC, BCS,
// BS, BCOM, MS, M. Phil., PhD). Show the listed
// qualifications in your browser like:


//  SOLUTION:-

// var a=[ "SSC", "HSC", "BCS","BS", "BCOM", "MS", "M. Phil", "PhD"];
// document.write("<h1>Qualifications:</h1>" + "<br>"+ "<br>");
// document.write("1) " + a[0] +"<br>" +"2) " + a[1] +"<br>" +"3) " + a[2] +"<br>" +"4) " + a[3] +"<br>" +"5) " + a[4] +"<br>"+"6) " + a[5] +"<br>" + "6) " + a[5] +"<br>" +"7) " + a[6] +"<br>" +"8) " + a[7] +"<br>");


// ___________________________________//-*-\\________________________________________________


//  TASK # 8
// Write a program to store 3 student names in an array.Take
// another array to store score of these three students.
// Assume that total marks are 500 for each student, display
// the scores & percentages of students like:


//  SOLUTION:-

// var studentName=["Michael","John","Tony"];
// var scOre=[320,230,480]
// var shahPer=320/5;
// var bariqPer=230/5;
// var kamPer=480/5;
// document.write("Score of "+ studentName[0] +" is "+scOre[0]+". Percentage: "+shahPer+"%"+"<br>"+"Score of "+ studentName[1] +" is "+scOre[1]+". Percentage: "+bariqPer+"%"+"<br>"+"Score of "+ studentName[2] +" is "+scOre[2]+". Percentage: "+kamPer+"%")


// ___________________________________//-*-\\________________________________________________


//  TASK # 9
// Initialize an array with color names. Display the array
// elements in your browser.
// a. Ask the user what color he/she wants to add to the
// beginning & add that color to the beginning of the array.
// Display the updated array in your browser.
// b. Ask the user what color he/she wants to add to the end
// & add that color to the end of the array. Display the
// updated array in your browser.
// c. Add two more color to the beginning of the array.
// Display the updated array in your browser.
// d. Delete the first color in the array. Display the updated
// array in your browser.
// e. Delete the last color in the array. Display the updated
// array in your browser.
// f. Ask the user at which index he/she wants to add a color
// & color name. Then add the color to desired
// position/index. . Display the updated array in your
// browser.
// g. Ask the user at which index he/she wants to delete
// color(s) & how many colors he/she wants to delete. Then
// remove the same number of color(s) from user-defined
// position/index. . Display the updated array in your
// browser.


//  SOLUTION:-

// var color = ["Red","Yellow","Green"]
// document.write(color+"<br/>");
// var beginning = prompt("Enter which color you want to add at the beginning of array")
// color.unshift(beginning)
// document.write(color+"<br/>");
// var ending = prompt("Enter which color you want to add at the ending of array")
// color.push(ending)
// document.write(color+"<br/>");
// color.shift()
// document.write(color+"<br/>");
// color.pop()
// document.write(color+"<br/>");
// var update =+prompt("At which index do you want to add color?")
// var newColor =+prompt(" which color do you want to add on that index?")
// color.splice(update,0,newColor)
// document.write(color+"<br/>");
// var dlete =+prompt("At which index do you want to delete color?")
// var colorDelete =+prompt(" which color do you want to delete on that index?")
// color.splice(dlete, colorDelete);
// document.write(color+"<br/>");


// ___________________________________//-*-\\________________________________________________


//  TASK # 10
// Write a program to store student scores in an array &
// sort the array in ascending order using Array’s sort
// method.


//  SOLUTION:-

// var score = [320,230,480,120]
// document.write("Score of students :" +score+"<br/>");
// score.sort()
// document.write(" Ordered Score of students :" +score);


// ___________________________________//-*-\\________________________________________________


//  TASK # 11
// Write a program to initialize an array with city names.
// Copy 3 array elements from cities array to selectedCities
// array.


//  SOLUTION:-

// var cities = ["Karachi","Lahore","Islamabad","Quetta","Peshawar"];
// document.write("cities list: <br/>"+cities+"<br/>")
// var selectedCities = cities.slice(2,4)
// document.write("selected cities list: <br/>"+selectedCities);


// ___________________________________//-*-\\________________________________________________


//  TASK # 12
// Write a program to create a single string from the
// below mentioned array:
// var arr = [“This ”, “ is ”, “ my ”, “ cat”];
// (Use array’s join method)


//  SOLUTION:-

// var arr = ["This","is","my","cat"]
// document.write("<h1>Array</h1>; <br/>"+arr+"<br/>")
// var join = arr.join(" ")
// document.write("<h1>String:</h1> <br/>"+join)


// ___________________________________//-*-\\________________________________________________


//  TASK # 13
// Create a new array. Store values one by one in such a way
// that you can access the values in the order in which they
// were stored. (FIFO-First In First Out)



//  SOLUTION:-

// var device = ["keyboard","mouse","printer","monitor"]
// document.write("devices : <br/>"+device+"<br/>")
// var firstDevice = device.shift()
// document.write("out : <br/>"+firstDevice+"<br/>")
// var secondDevice = device.shift()
// document.write("out : <br/>"+secondDevice+"<br/>")
// var thirdDevice = device.shift()
// document.write("out : <br/>"+thirdDevice+"<br/>")
// var fourthDevice = device.shift()
// document.write("out : <br/>"+fourthDevice+"<br/>")  


// ___________________________________//-*-\\________________________________________________


//  TASK # 14
// Create a new array. Store values one by one in such a way
// that you can access the values in reverse order. (Last InFirst Out)


//  SOLUTION:-

// var device = ["keyboard","mouse","printer","monitor"]
// document.write("devices : <br/>"+device+"<br/>")
// var firstDevice = device.pop()
// document.write("out : <br/>"+firstDevice+"<br/>")
// var secondDevice = device.pop()
// document.write("out : <br/>"+secondDevice+"<br/>")
// var thirdDevice = device.pop()
// document.write("out : <br/>"+thirdDevice+"<br/>")
// var fourthDevice = device.pop()
// document.write("out : <br/>"+fourthDevice+"<br/>")`


// ___________________________________//-*-\\________________________________________________


//  TASK # 15
// Write a program to store phone manufacturers (Apple,
//     Samsung, Motorola, Nokia, Sony & Haier) in an array.
//     Display the following dropdown/select menu in your
//     browser using document.write() method:

//  SOLUTION:-

// var arr = ["Apple","Samsung", "Motorola", "Nokia", "Sony", "Haier"];
// document.write("<select>");
// for(var i=0; i<arr.length;i++){
//     document.write("<option>" + arr[i] + "</option>");
// }

// document.write("</select>");

// ___________________________________//-*-\\________________________________________________

//    *** *** *** Chapter # 17-to-20  (ARRAYS AND LOOP) *** *** *** 

//  TASK # 01
// Declare and initialize an empty multidimensional array.
// (Array of arrays)

//  SOLUTION:

// var num = [[],[],[]]

// ___________________________________//-*-\\________________________________________________


//  TASK # 02
// Declare and initialize a multidimensional array
// representing the following matrix:

//  SOLUTION:


// var arr=["0 1 2 3"];
// var arr1=["1 0 1 2"];
// var arr2=["2 1 0 1"];
// document.write(arr + "<br>" + arr1 + "<br>" + arr2);


// ___________________________________//-*-\\________________________________________________


//  TASK # 03
// Write a program to print numeric counting from 1 to 10.


//  SOLUTION:


// var i;
// for(i=1; i<=10;i++){
//     document.write(i+"<br>")
// }


// ___________________________________//-*-\\________________________________________________


//  TASK # 04
// Write a program to print multiplication table of any
// number using for loop. Table number & length should be
// taken as an input from user.

//  SOLUTION:


// var i=+prompt("Enter a number to shows its multiplication table");
// var j=+prompt("Enter length multiplication table");
// var k;
// document.write("Multiplication Table of  " + i + "  Lenght  " + j + "<br>");
// for(k=1;k<=j;k++){
//     document.write(i+ " * " + k + " = " + (i*k) +"<br>")
// }


// ___________________________________//-*-\\________________________________________________


//  TASK # 05
// Write a program to print items of the following array
// using for loop:
// fruits = [“apple”, “banana”, “mango”, “orange”,“strawberry”]

//  SOLUTION:

// var fruits=["apple","banana","mango","orange","strawberry"];
// var i;
// for(i=0;i<fruits.length;i++){
//     document.write(fruits[i]+"<br>")
// }
// document.write("<br><br>")
// for(i=0;i<fruits.length;i++){
//     document.write( "Element at index "+i+" is "+fruits[i]+"<br>")
// }


// ___________________________________//-*-\\________________________________________________


//  TASK # 06


// Generate the following series in your browser. See
// example output.
// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k

//  SOLUTION:


// document.write("<h1>Counting:</h1>");
// for(var a=1; a<=15; a++)
// {
//     document.write(a +",")
// }
// document.write("<h1>Reverse counting: </h1>");
// for(var b=10; b>=1; b--)
// {
//     document.write(b +",")
// }

// document.write("<h1>Even:</h1>");
// for(var c=0; c<=20; c+=2)
// {
//     document.write(c +",")
// }

// document.write("<h1>Odd:</h1>");
// for(var d=1; d<=19; d+=2)
// {
//     document.write(d +",")
// }

// document.write("<h1>Series: </h1>");
// for(var d=2; d<=20; d+=2)
// {
//     document.write(d +"k"+",")
// }


// ___________________________________//-*-\\________________________________________________


//  TASK # 07

// You have an array
// A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an
// array.
// After searching, prompt the user whether the given item is
// found in the list or not. Example:


//  SOLUTION:

// var itEms=["cake","apple","pie","cookie","chips","patties"];
// var checkInp=prompt("Welcome to ABC Bakery.What do you want to order sir/ma'am?");
// checkInp.toLocaleLowerCase;
// var a=itEms.indexOf(checkInp);
// if(itEms.indexOf(checkInp) !== -1){
//     alert(checkInp + "  is available at index  " + a + "  in our bakery");
// }
// else{
//     alert("We are sorry.  " + checkInp + "  is not available in our bakery");
// }


// ___________________________________//-*-\\________________________________________________


//  TASK # 08

// Write a program to identify the largest number in the
// given array.
// A = [24, 53, 78, 91, 12].

//  SOLUTION:

// var arr= [24, 53, 78, 91, 12];
// var max = Math.max.apply(Math,arr)
// document.write("Array items: "+arr+"<br>"+"The largest number is "+max)


// ___________________________________//-*-\\________________________________________________


//  TASK # 09

// Write a program to identify the smallest number in the
// given array.
// A = [24, 53, 78, 91, 12]


//  SOLUTION:

// var arr= [24, 53, 78, 91, 12];
// var min = Math.min.apply(Math,arr)
// document.write("Array items: "+arr+"<br>"+"The smallest number is "+min)



// ___________________________________//-*-\\________________________________________________


//  TASK # 10

// Write a program to print multiples of 5 ranging 1 to
// 100.


//  SOLUTION:

// for(var i=5; i<=100; i+=5)
// {
//     document.write(i +",")
// }



//    *** *** *** Chapter # 21-to-25  (STRING METHODS) *** *** *** 



//  TASK # 01

// Write a program that takes two user inputs for first and
// last name using prompt and merge them in a new variable
// titled fullName. Greet the user using his full name.

//  SOLUTION:

// var firstName=prompt("Enter First Name");
// var lastName=prompt("Enter Last Name");
// var fullName=firstName+" "+lastName;
// document.write(fullName);


// ___________________________________//-*-\\________________________________________________


//  TASK # 2

// Write a program to take a user input about his favorite
// mobile phone model. Find and display the length of user
// input in your browser

//  SOLUTION:


// var phoneModel=prompt("Enter his favorite mobile model");
// var length = phoneModel.length;
// document.write("My favorite phone is:  " + phoneModel + "<br>" + "Length of string:  " + length );


// ___________________________________//-*-\\________________________________________________


//  TASK # 3

// Write a program to find the index of letter “n” in the word
// “Pakistani” and display the result in your browser .

//  SOLUTION:

// var string = "Pakistani";
// var letter = string.indexOf("n");
// document.write("String:  " + string + "<br>" + "Index of 'n':  " + letter);


// ___________________________________//-*-\\________________________________________________


//  TASK # 4

// Write a program to find the last index of letter “l” in the
// word “Hello World” and display the result in your browser.

//  SOLUTION:

// var string = "Hello World";
// var lastIndex = string.lastIndexOf("l");
// document.write("String:  " + string + "<br>" + "Last index of 'l':  " + lastIndex);


// ___________________________________//-*-\\________________________________________________


//  TASK # 5

// Write a program to find the character at 3rd index in the
// word “Pakistani” and display the result in your browser.

//  SOLUTION:

// var findIndex="Pakistani";
// var targetIndex=findIndex.charAt(3);
// document.write("String:  " + findIndex + "<br>" + "Character at index 3:  " + targetIndex)


// ___________________________________//-*-\\________________________________________________


//  TASK # 6

// Repeat Q1 using string concat() method.

//  SOLUTION:

// var firstName=prompt("Enter First Name");
// var lastName=prompt("Enter Last Name");
// var fullName=firstName.concat(" ",lastName);
// document.write(fullName);


// ___________________________________//-*-\\________________________________________________


//  TASK # 7

// Write a program to replace the “Hyder” to “Islam” in the
// word “Hyderabad” and display the result in your browser

//  SOLUTION:

// var city = "Hyderabad";
// var indexnum = city.indexOf("Hyder");
// var firsttext = city.slice(0,indexnum);
// var replacingtext ="Islam";
// var thirdtext = city.slice(indexnum+5);
// document.write("City:  " + city + "<br>" + "After replacement:  " + firsttext + replacingtext + thirdtext);

// ___________________________________//-*-\\________________________________________________


//  TASK # 8

// Write a program to replace all occurrences of “and” in the
// string with “&” and display the result in your browser.
// var message = “Ali and Sami are best friends. They play cricket and
// football together.”;

//  SOLUTION:

// var message="Ali and Sami are best friends. They play cricket and football together";
// var newMessage=message.replace(/and/g,"&")
// document.write(message+"<br><br>"+"<b>After replace message: </b>"  +newMessage);


// ___________________________________//-*-\\________________________________________________


//  TASK # 9

// Write a program that converts a string “472” to a number
// 472. Display the values & types in your browser.


//  SOLUTION:

// var string="472";
// var integer=parseInt(string);
// var type=typeof(string);
// var typeint=typeof(integer)
// document.write("Value: "+ string+"<br>"+"Type: "+type +"<br>"+"Value: "+ integer+"<br>"+"Type: "+typeint )


// ___________________________________//-*-\\________________________________________________


//  TASK # 10

// Write a program that takes user input. Convert and
// show the input in capital letters.


//  SOLUTION:

// var userInput=prompt("Enter input","peanuts");
// var uprCase=userInput.toUpperCase();
// document.write("User input: " +userInput+"<br>"+"Upper case:"+uprCase)


// ___________________________________//-*-\\________________________________________________


//  TASK # 11

// . Write a program that takes user input. Convert and
// show the input in title case.


//  SOLUTION:


// var input = "javascript";
// var firstchar = input.slice(0,1);
// var firstchar = firstchar.toUpperCase();
// var otherchar = input.slice(1);
// var otherchar = otherchar.toLowerCase();
// document.write("User input: " + input + "<br>" + "Title case:  " + firstchar + otherchar);


// ___________________________________//-*-\\________________________________________________


//  TASK # 12

// Write a program that converts the variable num to
// string.
// var num = 35.36 ;
// Remove the dot to display “3536” display in your browser

//  SOLUTION:

// var num=35.36;
// var string=num.toString();
// var replace=string.replace(".","");
// document.write("Number: "+ num+"<br>"+"Result: "+replace)


// ___________________________________//-*-\\________________________________________________


//  TASK # 13

// Write a program to take user input and store username
// in a variable. If the username contains any special symbol
// among [@ . , !], prompt the user to enter a valid username.
// For character codes of [@ .
// Note:
// ASCII code of ! is 33
// ASCII code of , is 44
// ASCII code of . is 46
// ASCII code of @ is 64

//  SOLUTION:

// var userInput = prompt("Enter Username");
// var ascii = userInput.charCodeAt(userInput);
// if (ascii == 33 || ascii == 44 || ascii == 46 || ascii == 64){
//     alert("Please enter a valid username");
// }
// document.write(ascii);


// ___________________________________//-*-\\________________________________________________


//  TASK # 14

// You have an array
// A = [cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an
// array. After searching, prompt the user whether the given
// item is found in the list or not.
// Note: Perform case insensitive search. Whether the user
// enters cookie, Cookie, COOKIE or coOkIE, program
// should inform about its availability. Example:

//  SOLUTION:

// var itEms=["cake","apple","pie","cookie","chips","patties"];
// var checkInp=prompt("Welcome to ABC Bakery.What do you want to order sir/ma'am?");
// var bar=checkInp.toLowerCase();
// var a=itEms.indexOf(bar);
// if(itEms.indexOf(bar) !== -1){
//     alert(bar+ "  is available at index  " + a + "  in our bakery");
// }
// else{
//     alert("We are sorry.  " + bar + "  is not available in our bakery");
// }


// ___________________________________//-*-\\________________________________________________

//    *** *** *** Chapter # 26-to-30  ( MATH METHODS ) *** *** *** 

//  TASK # 01
// 1. Write a program that takes a positive integer from user &
// display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number

//  SOLUTION:

// var num=+prompt("Enter the positive number",3.45214);
// if(num < 0){
//     alert("Please enter a positive integer")
// }
// else{
//     var round= Math.round(num);
//     var floor= Math.floor(num);
//     var ceil= Math.ceil(num);
//     document.write("Number:  " + num + "<br>" + "Round off value:  " + round + "<br>" + "Floor value:  " + floor + "<br>" + "Ceil value:  " + ceil);
// }

// ___________________________________//-*-\\________________________________________________


//  TASK # 02
// Write a program that takes a negative floating point
// number from user & display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number

//  SOLUTION:

// var num=+prompt("Enter the positive number",-2.673);
// if(num > 0){
//     alert("Please enter a negative integer")
// }
// else{
//     var round= Math.round(num);
//     var floor= Math.floor(num);
//     var ceil= Math.ceil(num);
//     document.write("Number:  " + num + "<br>" + "Round off value:  " + round + "<br>" + "Floor value:  " + floor + "<br>" + "Ceil value:  " + ceil);
// }


// ___________________________________//-*-\\________________________________________________


//  TASK # 03

// Write a program that displays the absolute value of a
// number.
// E.g. absolute value of -4 is 4 & absolute value of 5 is 5

//  SOLUTION:


// var value =+prompt("Enter a number");
// var num = Math.abs(value);
// document.write("The absolute value of  " + value + "  is  " + num);


// ___________________________________//-*-\\________________________________________________


//  TASK # 04

// Write a program that simulates a dice using random()
// method of JS Math class. Display the value of dice in your
// browser.:

//  SOLUTION:

// var random = Math.floor(Math.random() * 4);
// var random1 = Math.floor(Math.random() * 6);
// document.write("random dice value:  " + random + "<br>" + "random dice value:  " + random1);

// ___________________________________//-*-\\________________________________________________


//  TASK # 05

// Write a program that simulates a coin toss using random()
// method of JS Math class. Display the value of coin in your
// browser

//  SOLUTION:

// var input =+prompt("Enter heads username");
// var loor = Math.floor(Math.random() * 2);
// if(loor === 0){
//     alert(input+ "\n" + "random coin value:  " + "Head")
// }
// else{
//     alert(input+ "\n" +"random coin value:  " + "Tail")
// }


// ___________________________________//-*-\\________________________________________________



//  TASK # 06

// Write a program that shows a random number between 1
// and 100 in your browser.

//  SOLUTION:

// var value=Math.floor((Math.random() * 100) + 1);
// document.write(" random number between 1 and 100:  " + value);

// ___________________________________//-*-\\________________________________________________


//  TASK # 07

// Write a program that asks the user about his weight. Parse
// the user input and display his weight in your browser.
// Possible user inputs can be:
// a. 50
// b. 50kgs
// c. 50.2kgs
// d. 50.2kilograms

//  SOLUTION:

// var user=prompt("Enter your weight in kilograms");
// document.write("The weight of user is  " + user + "  kilograms");

// ___________________________________//-*-\\________________________________________________


//  TASK # 08

// Write a program that stores a random secret number from
// 1 to 10 in a variable. Ask the user to input a number
// between 1 and 10. If the user input equals the secret
// number, congratulate the user.

//  SOLUTION:

// var user=+prompt("Enter a number between 1 to 10");
// var random = (Math.random()*10)+1;
// if(user === random){
//     alert("Congratulate the user");
// }else{
//     alert("Try again.")
// }


// ___________________________________//-*-\\________________________________________________


//    *** *** *** Chapter # 31-to-34  ( DATE METHODS ) *** *** *** 


//  TASK # 01

// Write a program that displays current date and time in
// your browser.

//  SOLUTION:

// var nowDate = new Date();
// document.write(nowDate)


// ___________________________________//-*-\\________________________________________________


//  TASK # 02

// Write a program that alerts the current month in words.
// For example December.

//  SOLUTION:

// var d =new Date();
// var monthName =["January","February","March","April","May","June","July","August","September","October","November","December"]
// var nowMonth =d.getMonth();
// document.write("Current month: "+monthName[nowMonth])

// ___________________________________//-*-\\________________________________________________


//  TASK # 03

// Write a program that alerts the first 3 letters of the current
// day, for example if today is Sunday then alert will show
// Sun.

//  SOLUTION:

// var d = new Date();
// var b = d.toString();
// var n = b.slice(0,3);
// document.write(n);

// ___________________________________//-*-\\________________________________________________


//  TASK # 04

// . Write a program that displays a message “It’s Fun day” if
// its Saturday or Sunday today.


//  SOLUTION:


// var a = new Date();
// var b =["Sunday","Monday","Tuesday","Wednessday","Thursday","Friday","Saturday"]
// var c = a.getDay();
// var d = b[c];
// if(d=== "Saturday" || d=== "Sunday"){
//     alert("It’s Fun day")
// }else{
// alert("Today is  " + n);
// }

// ___________________________________//-*-\\________________________________________________

//  TASK # 05

// Write a program that shows the message “First fifteen
// days of the month” if the date is less than 16th of the month
// else shows “Last days of the month”.

//  SOLUTION:

// var a = new Date();
// var b =a.getDate();
// if( b >=1 && b<=15){
//     alert("First fifteen days of the month");
// }else{
//     alert("Last days of the month");
// }

// ___________________________________//-*-\\________________________________________________


//  TASK # 06

// Write a program that determines the minutes since
// midnight, Jan. 1, 1970 and assigns it to a variable that
// hasn't been declared beforehand. Use any variable you like
// to represent the Date object.

//  SOLUTION:

// var d = new Date();
// var t = d.getTime();
// var m = t/(1000*60);
// document.write("Current Date:  " + d + "<br>" + "Elapsed milliseconds since january 1, 1970:  " + t + "<br>" + "Elapsed minutes since january 1, 1970:  " + m);


// ___________________________________//-*-\\________________________________________________

//  TASK # 07

// Write a program that tests whether it's before noon and
// alert “Its AM” else “its PM”.

//  SOLUTION:

// var d = new Date();
// var a = d.getHours();
// if(a >=0 && a <= 11 ){
//     alert("It's AM")
// }
// else{
//     alert("It's PM")
// }

// ___________________________________//-*-\\________________________________________________


//  TASK # 08

// Write a program that creates a Date object for the last day
// of the last month of 2020 and assigns it to variable named
// laterDate.


//  SOLUTION:

// var d = new Date(2020, 11, 31);
// document.write("Later Date:  " + d);

// ___________________________________//-*-\\________________________________________________

//  TASK # 09

// Create a date object of the starting date of this Ramadan
// and alert the number of days past since 1st Ramadan?
// Note: 1st Ramadan was on June 18, 2015

//  SOLUTION:

// var dob = new Date(2015, 05, 18);
// var dobmili=dob.getTime();
// var today = new Date();
// var todaymili = today.getTime();
// var diff = todaymili-dobmili;
// var day=(diff/(1000*60*60*24))
// var day=Math.floor(day);
// document.write(day + "  day have passed since 1st Ramdan, 2015");

// ___________________________________//-*-\\________________________________________________


//  TASK # 10

// Write a program that displays in your browser the
// seconds that elapsed between the reference date and the
// beginning of 2015.

//  SOLUTION:

// var dob = new Date(2015);
// var dobmili=dob.getTime();
// var today = new Date();
// var todaymili = today.getTime();
// var diff = todaymili-dobmili;
// var day=(diff/1000)
// var day=Math.floor(day);
// document.write("On reference date  " + today + "<br>" + day + "  seconds had passed since begining of 2015");

// ___________________________________//-*-\\________________________________________________

//  TASK # 11

// Create a Date object for the current date and time.
// Extract the hours, reset the date object an hour ahead and
// finally display the date object in your browser.

//  SOLUTION:

// var d = new Date();
// var a = new Date(86400000*18432);
// document.write("Current date:  " + d  + "<br>" + "1 hour ago,it was  " + a);

// ___________________________________//-*-\\________________________________________________


//  TASK # 12

// Write a program that creates a date object and show the
// date in an alert box that is reset to 100 years back?

//  SOLUTION:

// ___________________________________//-*-\\________________________________________________

//  TASK # 13

// Write a program to ask the user about his age. Calculate
// and show his birth year in your browser.

//  SOLUTION:

// var dob = new Date(prompt("Enter your birthday","Apr 4, 2000"));
// var dobmili=dob.getTime();
// var a = dob.toString();
// var d = a.slice(10,15);
// var today = new Date();
// var todaymili = today.getTime();
// var diff = todaymili-dobmili;
// var day=(diff/(1000*60*60*24*30*12))
// var age=Math.floor(day);
// document.write("Your age is  " + age + "<br>" + "Your birth Year is  " + d);


// ___________________________________//-*-\\________________________________________________


//  TASK # 14

// Write a program to generate your K-Electric bill in your
// browser. All the amounts should be rounded off to 2
// decimal places. Display the following fields:
// a. Customer Name
// b. Current Month
// c. Number of units
// d. Charges per unit
// e. Net Amount Payable (within Due Date)
// f. Late Payment Surcharge
// g. Gross Amount Payable (after Due Date)
// Where,
// Net Amount Payable (within Due Date) = Number of units * Charges per unit
// & Gross Amount Payable (after Due Date) = Net Amount + Late Payment Surcharge

//  SOLUTION:

// var cname = prompt("Enter the customer name");
// var cmonth = prompt("Enter the current month");
// var units = +prompt("Enter the units");
// var Charges = 16;
// var amount = units*Charges;
// var latechrges = 350;
// var gamount =latechrges+amount;
// document.write("<h1>K-Electric Bill</h1>" + "<br>" + "Customer Name:  " + cname + "  Customer" + "<br>" + "Month:  " + cmonth + "<br>" + "Number of units:  " + units + "<br>" + "Charges per unit:  " + Charges + "<br>" +"<br>" + "Net Amount Payable (within Due Date):  " + amount + "<br>" + "late payment surcharge:  " + latechrges + "<br>" +"Gross Amount Payable (after Due Date):  " +gamount);



// ___________________________________//-*-\\________________________________________________



//    *** *** *** Chapter # 35-to-38  ( FUNCTION ) *** *** *** 


//  TASK # 01

// Write a function that displays current date & time in your
// browser.

//  SOLUTION:

// function date(){
//     var date = new Date();
//     document.write(date);
// }
// date();

// ___________________________________//-*-\\________________________________________________


//  TASK # 02

// Write a function that takes first & last name and then it
// greets the user using his full name.

//  SOLUTION:

// function fullName(){
//     var fName = prompt("Enter the first name");
//     var lName = prompt("Enter the last name");
//     var fulLname = fName.concat(" ", lName);
//     document.write(fulLname);
// }
// fullName();

// ___________________________________//-*-\\________________________________________________

//  TASK # 03

// Write a function that adds two numbers (input by user)
// and returns the sum of two numbers.

//  SOLUTION:


// function add(){
//     var a=+prompt("Enter a first number");
//     var b=+prompt("Enter a second number");
//     var z = a + b;
//     return z;
// }

// var g = add()
// alert(g);


// ___________________________________//-*-\\________________________________________________


//  TASK # 04

// Calculator:
// Write a function that takes three arguments num1, num2
// & operator & compute the desired operation. Return and
// show the desired result in your browser.


//  SOLUTION:

// function calc(){
//     var num1 =+prompt("Enter the first number");
//     var opr =prompt("Enter the operator");
//     var num2 =+prompt("Enter the second number");
//     if(opr === "+"){
//        return num1 + num2
//     }
//     else if(opr === "-"){
//        return num1 - num2
//     }
//     else  if(opr === "*"){
//       return num1 * num2
//     }
//     else  if(opr === "/"){
//        return num1 / num2
//     }
//     else  if(opr === "%"){
//        return num1 % num2
//     }
//     else{
//        return "Incorrect Operator!"
//     }
// }
// var result=calc();
// document.write("<h1>Calculator</h1>" + "<br>"+ result );


// ___________________________________//-*-\\________________________________________________


//  TASK # 05

// Write a function that squares its argument.

//  SOLUTION:

// function square(){
//     var a =prompt("Enter a number")
//     var b = a*a;
//     return b;  
//    }
//    var c =square();
//    alert(c);

// ___________________________________//-*-\\________________________________________________


//  TASK # 06

// Write a function that computes factorial of a number.

//  SOLUTION:

// function factorial(){
//     var num = +prompt("Enter the factorial of a number");
//     var fact = 1;
//     for(var i=num; i>=1;i--){
//         fact=fact*i;
//     }
//     return fact;
// }
// var result = factorial();
// alert(result);

// ___________________________________//-*-\\________________________________________________

//  TASK # 07

// Write a function that take start and end number as inputs
// & display counting in your browser.


//  SOLUTION:

// function counting(){
//     var sNum = +prompt("Enter the start number");
//     var lNum = +prompt("Enter the end number");
//     for(var i=sNum; i<=lNum;i++){
//         document.write(i+"<br>")
//     }
// }
// var result = counting();



// ___________________________________//-*-\\________________________________________________


//  TASK # 08

// Write a nested function that computes hypotenuse of a
// right angle triangle.
// Hypotenuse2 = Base2 + Perpendicular2
// Take base and perpendicular as inputs.
// Outer function : calculateHypotenuse()
// Inner function: calculateSquare()

//  SOLUTION:

// function calculateHypotenuse(){
//     function calculateSquare(){  
//     var b = +prompt("Enter the base");
//     var p = +prompt("Enter the perpendicular");
//         var base = b*b;
//         var per = p*p;
//         var h=base+per;
//         var hypotenuse =h*h;
//         return hypotenuse; 
//        }
//        var result=calculateSquare();
//        return result;
// }
// var result1=calculateHypotenuse();
// alert(result1);

// ___________________________________//-*-\\________________________________________________


//  TASK # 09

// Write a function that calculates the area of a rectangle.
//  A = width * height
//  Pass width and height in following manner:
// i. Arguments as value
// ii. Arguments as variables

//  SOLUTION:


// function area(){
//     var width =+prompt("Enter the width");
//     var height=+prompt("Enter the height");
//     a = width * height;
//     return a;
// }
// var result = area();
// alert(result);

// ___________________________________//-*-\\________________________________________________


//  TASK # 10

// Write a JavaScript function that checks whether a passed
// string is palindrome or not?
// A palindrome is word, phrase, or sequence that reads the same backward as
// forward, e.g., madam.

//  SOLUTION:

// function palindrome(){
//     var name =prompt("Enter the name");
//     var split = name.split("").reverse().join("");
//     if(name===split){
//         alert("It is palindrome");
//     }
// else{
//     alert("It is not palindrome");
// }
// }
// var result = palindrome();



// ___________________________________//-*-\\________________________________________________

//  TASK # 11

// Write a JavaScript function that accepts a string as a
// parameter and converts the first letter of each word of the
// string in upper case.
// EXAMPLE STRING : 'the quick brown fox'
// EXPECTED OUTPUT : 'The Quick Brown Fox'

//  SOLUTION:

// function uppercase(str) 
// {
//   var array1 = str.split(' ');
//   var newarray1 = [];
 
//   for(var x = 0; x < array1.length; x++){
//       newarray1.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1));
//   }
//   return newarray1.join(' ');
// }
// alert(uppercase("the quick brown fox"));

// ___________________________________//-*-\\________________________________________________


//  TASK # 12

// Write a JavaScript function that accepts a string as a
// parameter and find the longest word within the string.
// EXAMPLE STRING : 'Web Development Tutorial'
// EXPECTED OUTPUT : 'Development'


//  SOLUTION:



// function find_longest_word(str)
// {
//   var array1 = str.match(/\w[a-z]{0,}/gi);
//   var result = array1[0];

//   for(var x = 1 ; x < array1.length ; x++)
//   {
//     if(result.length < array1[x].length)
//     {
//     result = array1[x];
//     } 
//   }
//   return result;
// }
// alert(find_longest_word('Web Development Tutorial'));

// ___________________________________//-*-\\________________________________________________


//  TASK # 13

// Write a JavaScript function that accepts two arguments, a
// string and a letter and the function will count the number of 
// occurrences of the specified letter within the string.
// Sample arguments : 'JSResourceS.com', 'o'


//  SOLUTION:


// function char_count(str, letter) 
// {
//  var letter_Count = 0;
//  for (var position = 0; position < str.length; position++) 
//  {
//     if (str.charAt(position) == letter) 
//       {
//       letter_Count += 1;
//       }
//   }
//   return letter_Count;
// }

// alert(char_count('JSResourceS.com', 'o'));

// ___________________________________//-*-\\________________________________________________


//  TASK # 14

// The Geometrizer
// Create 2 functions that calculate properties of a circle, using
// the definitions here.
// Create a function called calcCircumference:
// • Pass the radius to the function.
// • Calculate the circumference based on the radius, and output
// "The circumference is NN".
// Create a function called calcArea:
// • Pass the radius to the function.
// • Calculate the area based on the radius, and output "The area
// is NN".
// Circumference of circle = 2πr
// Area of circle = πr2

//  SOLUTION:

// function Geometrizer(){
//     function calcCircumference(){
//         var pi = 3.14;
//         var r=prompt("Enter the radius");
//         var circum = 2*pi*r;
//         document.write("Circumference of circle  " + circum);
//     }
//     function calcArea(){
//         var rr = r*r;
//         a=pi*rr;
//         document.write("Area of circle  " + a);
//     }
//     return calcCircumference + calcArea;
//     }
//     var result=Geometrizer(); 

// ___________________________________//-*-\\________________________________________________


//    *** *** *** Chapter # 38-to-42  (FUNCTIONS, SWITCH STATEMENTS, WHILE… DOWHILE LOOPS  ) *** *** *** 


//  TASK # 01

// Write a custom function power ( a, b ), to calculate the value of
// a raised to b.

//  SOLUTION:

// function myFunction() {
//     var a =+prompt("Enter the base;");
//     var b=+prompt("Enter the power");
//     value=Math.pow(a, b); 
//     document.write("Power is"+" "+a +"<br>");
//     document.write("Base is"+" "+b+"<br>");
//     document.write("a raised to b :"+" "+value);
// }
// myFunction();


// ___________________________________//-*-\\________________________________________________


//  TASK # 02

// . Any year is entered through the keyboard. Write a function to
// determine whether the year is a leap year or not.
// Leap years ..., 2012, 2016, 2020, …

//  SOLUTION:


// var a =+prompt("Enter any year");
//     b=a%4;
// switch (b){

//     case 0:
//         document.write("This year is a Leap year:")
//         break;

//     default:
//         document.write("This year is not a Leap year:")

//     }

// ___________________________________//-*-\\________________________________________________


//  TASK # 03

// If the lengths of the sides of a triangle are denoted by a, b, and
// c, then area of triangle is given by
// area = S(S − a)(S − b)(S − c)
// where, S = ( a + b + c ) / 2
// Calculate area of triangle using 2 functions

//  SOLUTION:

// function firstFunction(){
//     var a =+prompt("Enter the first side of triangle");
//     var b =+prompt("Enter the second side of triangle");
//     var c =+prompt("Enter the third side of triangle");
//     var d = a+b+c;
//     var S= d/2;
//     var e =S-a;
//     var f=S-b;
//     var g=S-c;

//     function secondFunction(){
//         var area = S*e*f*g;
//     alert("The Area of Triangle is:   "+ area);
//     }
//     secondFunction();
//     }
//     firstFunction();


// ___________________________________//-*-\\________________________________________________


//  TASK # 04

// Write a function that receives marks received by a student in 3
// subjects and returns the average and percentage of these
// marks. there should be 3 functions one is the mainFunction
// and other are for average and percentage. Call those functions
// from mainFunction and display result in mainFunction.

//  SOLUTION:

// function mainFunction(){
//     var marks1 =+prompt("Enter the marks of first student");
//     var marks2 =+prompt("Enter the marks of second student");
//     var marks3  =+prompt("Enter the marks of third student");
//     function average(){
//         total=marks1+marks2+marks3;
//         avg=total/3;
//         document.write("The average of marks  " + avg+"<br>");
//     }
//     function percentage(){
//         per=total/3;
//         document.write("The percentage of marks  "+per+"%");
//     }
//     average();
//     percentage();
// }
// mainFunction();    


// ___________________________________//-*-\\________________________________________________

//  TASK # 05

// You have learned the function indexOf. Code your own custom
// function that will perform the same functionality. You can code
// for single character as of now.

//  SOLUTION:

// function myFunction() {
//     var str = "Hello world, welcome to the universe.";
//     var n = str.indexOf("welcome");
//     alert(n);
//   }
//   myFunction();


// ___________________________________//-*-\\________________________________________________


//  TASK # 08

// The distance between two cities (in km.) is input through the
// keyboard. Write four functions to convert and print this
// distance in meters, feet, inches and centimeters.

//  SOLUTION:

// function mainFunction() {
//     var km =+prompt("Enter distance between two cities in km");
//     function meTer(){
//        var meter = km *1000;
//        document.write("The distance between two cities in meters  :" + meter + "<br>");
//     }
//     function feEt(){
//         var feet = km *3280.8;
//         document.write("The distance between two cities in feets  :" + feet +"<br>");
//     }
//     function incHes(){
//         var inche = km *39370;
//         document.write("The distance between two cities in inches  :" + inche + "<br>");
//     }
//     function centiMeter(){
//         var centimeter = km /0.00001;
//         document.write("The distance between two cities in centimeters  :" + centimeter);
//     }
//     meTer();
//     feEt();
//     incHes()
//     centiMeter()
//   }
//   mainFunction();  



// ___________________________________//-*-\\________________________________________________

//  TASK # 09

// Write a program to calculate overtime pay of employees.
// Overtime is paid at the rate of Rs. 12.00 per hour for every hour
// worked above 40 hours. Assume that employees do not work
// for fractional part of an hour.

//  SOLUTION:

// function currEncy(){
//     var a =+prompt("Enter amount to withdraw:");
//     var b =Math.floor( a/100);
//     var c = b*100;
//     var d = a-c;
//     var e=Math.floor( d/50);
//     var f = e*50;
//     var g = c+f;
//     var h = a-g;
//     var i = Math.floor( h/10);
//     document.write("You will have  " + b + "  hundred notes  " + e + "  fifty notes  " + i + "  ten notes")

// }
// currEncy();

//    *** *** *** Chapter # 43-to-48  ( EVENTS ) *** *** *** 

//  TASK # 01

// Show an alert box on click on a link.

//  SOLUTION:

{/* 
<a href="JavaScript:void(0)" onClick="alert('Hi');">Click</a> 
*/}

// ___________________________________//-*-\\________________________________________________

//  TASK # 02

// Display some Mobile images in browser. On click on an
// image Show the message in alert to user.

//  SOLUTION:

// start html
    // <div>
    //     <img src="https://tse4.mm.bing.net/th?id=OIP.6HNGtNeUyujnn9EACMYwiQHaEK&pid=Api&P=0&w=349&h=197" alt="iphone" width="200" height="200"><button onclick="btn()">Iphone</button>
    //     <img src="https://tse3.mm.bing.net/th?id=OIP.UIPLNwNzKaUwX8BJgH2yIAHaD4&pid=Api&P=0&w=289&h=152" alt="oppo" width="200" height="200"><button onclick="btn()">Oppo</button>
    //     <img src="https://tse4.mm.bing.net/th?id=OIP.n0iqAYeUzJyiLOiIKoKN3wHaEK&pid=Api&P=0&w=276&h=156" alt="sumsung" width="200" height="200"><button onclick="btn()">Sumsung</button>
    //     <img src="data:image/jpeg;base64,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" alt="infinix" width="200" height="200"><button onclick="btn()">Infinix</button>
    // </div>
// end html

// start script
// function btn(){
//     alert("Thanks for purchasing a phone from us");
// }
// end script
// ___________________________________//-*-\\________________________________________________

//  TASK # 03

// Display 10 student records in table and each row should contain a delete
// button. If you click on a button to delete a record, entire row should be
// deleted. 

//  SOLUTION:

// start html
    
{/* <table border="1">
<tr>
    <td>First Student</td>
    <td><input type="text"  id="result1"></td>
    <td><button onclick="ddlt1()">Delete</button></td>
</tr>
<tr>
    <td>Second Student</td>
    <td><input type="text"  id="result2"></td>
    <td><button onclick="ddlt2()">Delete</button></td>
</tr>
<tr>
    <td>Third Student</td>
    <td><input type="text"  id="result3"></td>
    <td><button onclick="ddlt3()">Delete</button></td>
</tr>
<tr>
    <td>Fourth Student</td>
    <td><input type="text"  id="result4"></td>
    <td><button onclick="ddlt4()">Delete</button></td>
</tr>
<tr>
    <td>Fifth Student</td>
    <td><input type="text"  id="result5"></td>
    <td><button onclick="ddlt5()">Delete</button></td>
</tr>
<tr>
    <td>Sixth Student</td>
    <td><input type="text"  id="result6"></td>
    <td><button onclick="ddlt6()">Delete</button></td>
</tr>
<tr>
    <td>Seven Student</td>
    <td><input type="text"  id="result7"></td>
    <td><button onclick="ddlt7()">Delete</button></td>
</tr>
<tr>
    <td>Eight Student</td>
    <td><input type="text"  id="result8"></td>
    <td><button onclick="ddlt8()">Delete</button></td>
</tr>
<tr>
    <td>Nine Student</td>
    <td><input type="text"  id="result9"></td>
    <td><button onclick="ddlt9()">Delete</button></td>
</tr>
<tr>
    <td>Ten Student</td>
    <td><input type="text"  id="result10"></td>
    <td><button onclick="ddlt10()">Delete</button></td>
</tr>
</table>  */}

// end html


// start script

// function ddlt1(){
//     var dlt=document.getElementById("result1");
//     dlt.value = " ";
// }
// function ddlt2(){
//     var dlt=document.getElementById("result2");
//     dlt.value = " ";
// }
// function ddlt3(){
//     var dlt=document.getElementById("result3");
//     dlt.value = " ";
// }
// function ddlt4(){
//     var dlt=document.getElementById("result4");
//     dlt.value = " ";
// }
// function ddlt5(){
//     var dlt=document.getElementById("result5");
//     dlt.value = " ";
// }
// function ddlt6(){
//     var dlt=document.getElementById("result6");
//     dlt.value = " ";
// }
// function ddlt7(){
//     var dlt=document.getElementById("result7");
//     dlt.value = " ";
// }
// function ddlt8(){
//     var dlt=document.getElementById("result8");
//     dlt.value = " ";
// }
// function ddlt9(){
//     var dlt=document.getElementById("result9");
//     dlt.value = " ";
// }
// function ddlt10(){
//     var dlt=document.getElementById("result10");
//     dlt.value = " ";
// }

// end script

// ___________________________________//-*-\\________________________________________________

//  TASK # 04

// Display an image in browser. Change the picture on mouseover and set the
// first picture on mouseout.

//  SOLUTION:

    
{/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ722TbS-z3Yf3Eel0FVfa31C-IH6qBcIuI8w&usqp=CAU" onmouseover="src='https://arynews.tv/wp-content/uploads/2020/03/Quaid.jpg'" onmouseout="src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ722TbS-z3Yf3Eel0FVfa31C-IH6qBcIuI8w&usqp=CAU'" alt="">         */}


// ___________________________________//-*-\\________________________________________________

//  TASK # 05

// Show a counter in browser. Counter should increase on click on increase
// button and decrease on click on decrease button. And show updated counter
// value in browser.

//  SOLUTION:

// The Start Html
    // <div>
    //     <button onclick="increaseStart()">Increase</button>
    //     <button onclick="decreaseStart()">Decrease</button>
    //     <h1 id="nmbr">0</h1>
    // </div>
// The End Html

// var nmbr = 0;
// var number = document.getElementById("nmbr");
// function incRease(){
//     nmbr++
//     number.innerHTML=nmbr;
// }
// function increaseStart(){
//     interval= setInterval(incRease,1000) 
// }

// var number = document.getElementById("nmbr");
// function decRease(){
//     nmbr--
//     number.innerHTML=nmbr;
// }
// function decreaseStart(){
//     interval= setInterval(decRease,1000) 
// }


// ___________________________________//-*-\\________________________________________________


//    *** *** *** Chapter # 49-to-52  ( EVENTS ) *** *** *** 


//  TASK # 01

// Create a signup form and display form data in your web
// page on submission

//  SOLUTION:

// The Start HTML
    // <div>
    //     <p>Name:     <input type="text" id="name"></p>
    //     <p>Gmail:    <input type="email" id="gmail"></p>
    //     <p>Password: <input type="password" id="password"></p>
    //     <input type="submit" value="Submit" onclick="mainFunction()">
    // </div>
// The End Html

// function mainFunction(){
//     function getName(){
//         var getname =document.getElementById("name");
//         console.log(getname.value); 

//     }
//     function getGmail(){
//         var getgmail =document.getElementById("gmail");
//         console.log(getgmail.value);

//     }
//     function getPassword(){
//         var getpassword =document.getElementById("password");
//         console.log(getpassword.value);

//     }
//     getName();
//     getGmail();
//     getPassword();
// }


// ___________________________________//-*-\\________________________________________________

//  TASK # 02

// Suppose in your webpage there is content area in which
// you have entered your item details, but user can only see
// some details on first look. When user clicks on “Read
// more” button, full detail of that particular item will be
// displayed.

//  SOLUTION:

// The Start Html

// <div>
// <div><img src="https://tse2.mm.bing.net/th?id=OIP.bGPOZrUyKBjRYlqYBGqAPwHaEK&pid=Api&P=0&w=268&h=152" alt="infinx"></div>
// <div><p id="para">Infinix Note 7 6GB <a href="javascript:void(0)" onclick="readMore()">Read More</a></p></div>
// </div>

// The End Html


// function readMore(){
//     var text="Infinix Note 7 6GB Dimensions	173.4 x 79 x 8.8 mm Weight	206 Gram SIM	Dual Sim, Dual Standby (Nano-SIM) Color Shades	Forest Green, Aether Black, Bolivia Blue UI	XOS 6.0 Back Camera (Main)	Quad Camera: 48 MP, f/1.7, 25mm + 2 MP macro lens + 2 MP depth sensor + low light video camera, Quad LED Flash Selfie Camera (Front)	16 MP, LED Flash, Video ([email protected]) Camera Features	Phase Detection, Geo-tagging, Panorama, HDR, Video ([email protected]) Display Size	6.95 Inches Internal	128GB Built-in, 6GB RAM Battery	(Li-Po Non removable), 5000 mAh Prize Rs. 27,999";
//     var readmore=document.getElementById("para");
//     readmore.innerHTML=text;

// }

// ___________________________________//-*-\\________________________________________________


//  TASK # 03

// In previous assignment you have created a tabular data
// using javascript. Let’s modify that. Create a form which
// takes student’s details and show each student detail in
// table. Each row of table must contain a delete button and
// an edit button. On click on delete button entire row should
// be deleted. On click on edit button, a hidden form will
// appear with the values of that row

//  SOLUTION:

// start html
{/* <div>
<input type="text" placeholder="Do you wanna add user " id="todo">
<input type="button" value="Add-item" onclick="addItem()">
</div>
<div>
<ul id="list">
</ul>
</div> */}

// end html




// var list=document.getElementById("list");
// function addItem(){
//     var addtodo=document.getElementById("todo");
//     var li=document.createElement("li");
//     var liText=document.createTextNode(addtodo.value);
//     // create button
//     var dltBtn=document.createElement("button");
//     var dltText=document.createTextNode("Delete Item");
//     dltBtn.appendChild(dltText)
//     dltBtn.setAttribute("class","btn");
//     dltBtn.setAttribute("onclick","dltItem(this)");

//     var edtBtn=document.createElement("button");
//     var edtText=document.createTextNode("Edit Item");
//     edtBtn.appendChild(edtText)
//     edtBtn.setAttribute("class","btn1");
//     edtBtn.setAttribute("onclick","edtItem(this)");
//     li.appendChild(liText);
//     list.appendChild(li)
//     li.appendChild(dltBtn)
//     li.appendChild(edtBtn)


// }
// function dltItem(e){
//     e.parentNode.remove()
// }

// function edtItem(e){
//     var edtValue=prompt("Change the text",e.parentNode.firstChild.nodeValue);
//     e.parentNode.firstChild.nodeValue=edtValue;

// }


//        ***__//\\__***  Chapter # 53 to 57  *** __//\\__ ***


// html File

// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
//     <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">

// </head>
// <style>
//   .img{
//     width: 300px;
//     height: 200px;
//   }
//   .showimg{
//     width: 450px;
//   }
// </style>
// <body>
//     <div>
//         <img class="img" onclick="showImage(this)" data-toggle="modal" data-target="#exampleModal" src="https://tse1.mm.bing.net/th?id=OIP.3d9SOzDjp65mN168xSx3hAAAAA&pid=Api&P=0&w=404&h=171" alt="car1">
//         <img class="img" onclick="showImage(this)" data-toggle="modal" data-target="#exampleModal" src="https://tse4.mm.bing.net/th?id=OIP.Q5_dHFzCOUiA0Xon_ta4hQHaEK&pid=Api&P=0&w=307&h=174" alt="car2">
//         <img class="img" onclick="showImage(this)" data-toggle="modal" data-target="#exampleModal" src="https://tse1.mm.bing.net/th?id=OIP.jcsueIfIMC-Ct-hD15msQQHaEo&pid=Api&P=0&w=306&h=192" alt="car3">
//         <img class="img" onclick="showImage(this)" data-toggle="modal" data-target="#exampleModal" src="https://tse4.mm.bing.net/th?id=OIP.rEa51vpYwZhfWn39rkdbNgHaDk&pid=Api&P=0&w=356&h=172" alt="car4">
//     </div>

//   <!-- Modal -->
//   <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
//     <div class="modal-dialog" role="document">
//       <div class="modal-content">
//         <div class="modal-header">
//           <h5 class="modal-title" id="exampleModalLabel">Car Image</h5>
//           <button type="button" class="close" data-dismiss="modal" aria-label="Close">
//             <span aria-hidden="true">&times;</span>
//           </button>
//         </div>
//         <div class="modal-body">
//         <img class="showimg" src="" alt="" id="modalImage">
//         </div>
//         <div class="modal-footer">
//           <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
//           <button type="button" class="btn btn-primary">Save changes</button>
//         </div>
//       </div>
//     </div>
//   </div>




// <script src="app.js"></script>
//     <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
// <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
// <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
// </body>
// </html>

// function showImage(e){
//     console.log(e);
//     var modalImage=document.getElementById("modalImage");
//     modalImage.src=e.src;
// }



// ___________________________________//-*-\\________________________________________________

//    *** *** *** Chapter # 58-to-67  ( DOM ) *** *** *** 

//  TASK # 01
// i. Get element of id “main-content” and assign them in a variable.

//  SOLUTION:

// var main_content=document.getElementById("main-content");
// console.log(main_content)

// _________________________________________________________________________________

// ii. Display all child elements of “main-content” element.

//  SOLUTION:

// console.log(main_content.childNodes)

// _________________________________________________________________________________

// iii. Get all elements of class “render” and show their innerHTML in browser.

//  SOLUTION:

// var render=document.getElementsByClassName("render").innerHTML = "Paragraph changed!";
// document.write(render);

// _________________________________________________________________________________

// iv. Fill input value whose element id first-name using javascript

//  SOLUTION:

// var first_name = document.getElementById("first-name");
// var fname = document.createTextNode("Muhammad Bariq");
// first_name.appendChild(fname);
// console.log(first_name);

// _________________________________________________________________________________

// v. Repeat part iv for id ”last-name” and “email”.

//  SOLUTION:

// var last_name = document.getElementById("last-name");
// var lname = document.createTextNode("Kamran");
// last_name.appendChild(lname);
// console.log(last_name);
// var email = document.getElementById("email");
// var emai = document.createTextNode("bariqsiddiqui109@gmail.com");
// email.appendChild(emai);
// console.log(email);

// _________________________________________________________________________________

//  TASK # 02
// use HTML code of question 1 and show the result on browser.

// i. What is node type of element having id “form-content”.

//  SOLUTION:

// var form_content =document.getElementById("form-content");
// console.log(form_content.nodeType);

// _________________________________________________________________________________

// ii. Show node type of element having id “lastName” and its child node.

//  SOLUTION:

// var lastname =document.getElementById("last-name");
// console.log(lastname.nodeType);
// console.log(lastname.childNodes);

// _________________________________________________________________________________

// iii. Update child node of element having id “lastName”.

//  SOLUTION:

// var laname =document.getElementById("last-name");
// console.log(laname);

// _________________________________________________________________________________

// iv. Get First and last child of id “main-content”

//  SOLUTION:

// var maincontent =document.getElementById("main-content");
// console.log(maincontent.firstChild);
// console.log(maincontent.lastChild);

// _________________________________________________________________________________

// v. Get next and previous siblings of id “lastName”

//  SOLUTION:

// var lastname =document.getElementById("last-name");
// console.log(lastname.nextSibling);
// console.log(lastname.previousSibling);

// _________________________________________________________________________________

// vi. Get parent node and node type of element having id “email”`

//  SOLUTION:

// var email = document.getElementById("email");
// console.log(email.parentNode);
// console.log(email.nodeType);  

// ___________________________________//-*-\\________________________________________________

//    *** *** *** ( OBJECTS  ) *** *** *** 

//  TASK # 01

// Suppose You have an array of object
// var itemsArray = [
// {name:”juice”,price:”50”, quantity:”3”},
// {name:”cookie”,price:”30”, quantity:”9”},
// {name:”shirt”,price:”880”, quantity:”1”},
// {name:”pen”,price:”100”, quantity:”2”}];
// Calculate total price of each item and all items;

//  SOLUTION:

// var itemsArray = [
//     {name:"juice",price:"50", quantity:"3"},
//     {name:"cookie",price:"30", quantity:"9"},
//     {name:"shirt",price:"880", quantity:"1"},
//     {name:"pen",price:"100", quantity:"2"}
// ];
// var b=0;
// for(var i=0;i<itemsArray.length; i++){
//     var a=itemsArray[i].price * itemsArray[i].quantity ;
//     b +=a;
//     document.write("Total Price of "+itemsArray[i].name +" is " +a+"<br>")
// }

// document.write("Total Price of All Items are "+b);

// ___________________________________//-*-\\________________________________________________

//  TASK # 02

// Create an object with properties name, email, password, age,
// gender, city, country.
// Check if age and country properties exist in object or not.
// Also check firstName and lastName properties in object

//  SOLUTION:

// var bioData={
//     name:"Bariq",
//     email:"bariqsiddiqui109@gmail.com",
//     password:"12345678",
//     age:"21",
//     gender:"male",
//     city:"karachi",
//     country:"pakistan"
// }
// var checkAge="age" in bioData;
// document.write("Check Age in object is "+ checkAge+"<br>");
// var checkCountry="country" in bioData;
// document.write("Check Country in object is "+ checkCountry+"<br>");
// var checkfirstName="firstName" in bioData;
// document.write("Check firstName in object is "+ checkfirstName+"<br>");
// var checklastName="lastName" in bioData;
// document.write("Check lastName in object is "+ checklastName+"<br>");

// ___________________________________//-*-\\________________________________________________

//  TASK # 03

// Create a constructor function with some properties. Now
// create multiple records using the constructor

//  SOLUTION:

// function StdList(stdName,fatherName,roll,course){
//     this.stdName=stdName;
//     this.fatherName=fatherName;
//     this.roll=roll;
//     this.course=course;
// }
// var stdlist1=new StdList("Bariq","Shahid","1","web & hybrid mobile");
// var stdlist2=new StdList("Shaharyar","Shakeel","2","web & hybrid mobile");
// var stdlist3=new StdList("liaquat","Ali","3","web & hybrid mobile");
// console.log(stdlist1)
// console.log(stdlist2)
// console.log(stdlist3)

// ___________________________________//-*-\\________________________________________________

//  TASK # 04

// Suppose you want to check population of your area, their
// educations and professions.
// Create a constructor function which holds following
// properties:
// Name, gender, address, education, profession,
// Enter all records one by one.
// Hint:
//  use select box for education and profession,
//  use radio box for gender
// Bonus : use can use localStorage to save records.

//  SOLUTION:

// <-------------------"index.html"------------------------->
{/* <form name="record">
    <input type="text" name="name" placeholder="name"> <br> 
    <input type="radio" name="gender" value="male">Male</input>
    <input type="radio" name="gender" value="female">Female</input><br>
    <input type="text" name="address" placeholder="address"><br>
    <input type="checkbox" name="education" value="education">Education</input>
    <input type="checkbox" name="profession" value="profession">profession</input><br>
    <input type="button" value="Submit" onclick="reCord()">
</form> */}
// <-----------the end---------------->

// <---------------------"script"---------------------------->

// function reCord(){

//     function Checkopulation(name,gender,address,education,profession){
//         this.name=name;
//         this.gender=gender;
//         this.address=address;
//         this.education=education;
//         this.profession=profession;
//     }
//     var name1=document.record.name.value;
//     var gender=document.record.gender.value;
//     var address=document.record.address.value;
//     var education=document.record.education.value;
//     var profession=document.record.profession.value;
//     var checkopulation1=new Checkopulation(name1,gender,address,education,profession)
//     console.log(checkopulation1)
        
// }

// ___________________________________//-*-\\________________________________________________
