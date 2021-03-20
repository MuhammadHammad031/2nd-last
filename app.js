// alert("Hello world")


// var resultOfComputation = (2 * 4) * 4 + 2;
// alert(resultOfComputation)


// var a = 5;
// var b = 5;
// var c = 2;
// alert((a+b)*c)



// var a = "5";
// var b = "10";

// alert(a+b)




// var Hammad = 16;
// var Zeeshan = 45;
// alert(Hammad)


var firstname = "Hammad";
var lastname = "shahid"
alert(firstname + " "+ lastname)




// var a = 5;
// var b =  a + a++ + a + ++a + a + ++a;
//          alert(b)




        




// var a = 5;
// var b = a + ++a + a + --a + a-- + a + ++a + a
//         alert(b)












// var resultOfComputation = 2 * 4 * 4 + 2;
// alert(resultOfComputation)


// var a = prompt();
// var b = 5;
// alert (a+b)


// var a = +prompt();
// var b = 5;
// alert (a+b)







// var x = prompt("enter your age");
//  if (x === "21") {
//  alert("true");
//  }


// var x = prompt("how to line break in HTML")
//  var correctAnswer = "br";
//  if (x === correctAnswer) {
//  alert("Correct!");
//  }

// var x = prompt("enter your age")
//  if (x > "17") {
//      alert("you are allow to ride");
//      } 
//      else {
//      alert("you are no more with less age");
//      }






// var weight = prompt("enter weight")
// var time = prompt("enter time")
// if (weight > 300 && time < 6) {
//      alert("well done");
//      }
//      else {
//      alert("or mehnat karo");
//      }
    
    
// var SAT = prompt("enter AVJ");
// var GPA = prompt("enter your GPA");
// var sport = prompt("Enter your fav sport");

// if (SAT > 1.2 || GPA > 2.5 || sport === "football") {
//      alert("Welcome to Bubba State!");
//      }
//      else {
//      alert("Have you looked into appliance repair?");
//      }
    






// var percent = +prompt("Enter your percent")
//  if(percent >= 80 && percent <=100){
//    alert("A+")

//  }

// else if(percent>= 70 && percent <=80){
//   alert("A")
// }
// else if(percent>= 60 && percent <=70){
//   alert("B")
//  }
// else if(percent>= 50 && percent <=60){
//    alert("C")
//  }
//  else if(percent>= 40 && percent <=50){
//    alert("D")
//  }
// else if(percent < 40){
//       alert("Fail")
//   }
// else{
//    alert("you didnot write corect percentage")
//  }






























// var city0 = "Karachi";
// var city1 = "Lahore";
// var city2 = "Faislabad";
// var city3 = "Islamabad";


// alert(city1)




// var city = ["Karachi" , "Lahore" , "Islamabad" , "Faislabad"]

// console.log(city)


// var city=[]


// city[0] = "Karachi";
// city[1] = "Faislabad"

// console.log(city)




// var city = ["Karachi" , "Lahore" , "Islamabad" , "Faislabad"]
// city.pop()
// console.log(city)




// var city = ["Karachi" , "Lahore" , "Islamabad" , "Faislabad"]
// city.push("Kashmir")
// console.log(city)





// var city = ["Karachi" , "Lahore" , "Islamabad" , "Faislabad"]

// console.log(city)


// city.shift()
// console.log(city)





// var city = ["Karachi" , "Lahore" , "Islamabad" , "Faislabad"]

// console.log(city)


// city.unshift("kashmir")
// console.log(city)






// var city = ["Karachi" , "Lahore" , "Islamabad" , "Faislabad"]

// console.log(city)


// city.splice(2,3  , "kashmir") 
// console.log(city)




// var arry = ["Karachi" , "Lahore" , "Islamabad" , "Faislabad"]

// console.log(city)


// var a = city.slice(0,4)
// console.log(a)










// for lop























// for(var i = 0; i < 10; i++){
 
//     console.log("Hello")
// }

// var a = "European Institute";
// var b = a.length;
// alert(b)


// var cities = ["Lahor" , "Islamabad" , "Faislabad" , "Karachi" , "Karachi"];
// for(var i = 0; i < cities.length; i++){
//     if(cities[i] === "Karachi"){
//         alert(cities[i] + "is a cleanest city!")
//    break
//     }
// }





// for(var i = 0; i < 10; i++){
//     for (var j = 0; j < 10; j++){
//         document.write(j+"Pakistan Zindabad" + "<br>")
//     }
// }


for( var i = 1; i <= 10; i++){
    for (var j = 0; j < i; j++){
        document.write(  "*")
    }
    document.write("<br>")
}

// var firstnames = ["Hammad" , "Arif" , "Farhan" ]
// var lastnames = ["Shahid" , "Khan" , "zeeshan" ]

// for(var i = 0; i < firstnames.length; i++){
//     for(var x = 0; x <lastnames.length; x++){
//         console.log(firstnames[i] + " " + lastnames[x])
//     }
// }




// var name = "arif";

// name = name.toUpperCase();
// console.log(name)



// var names = "Hammad Shahid";

// console.log(names.indexOf("S"))


// var val1 = prompt('Enter your first value');
// var sign = prompt('enter your Operator')
// var val2 = prompt('enter your secound value');

// console.log(val1+sign+val2)
// if(sign === '+'){
//     alert((+val1)+(+val2))
// }
// else if(sign === '-'){
//     alert(val1-val2)
// }

//     else if (sign === '*'){
//         alert(val1*val2)}
//         else if(sign === '/'){
//             alert(val1/val2)
//         }
    

// for(var a = 1 ; a<=100 ; a = a+10){
//   for(var b = a ; b < a+10 ; b++){
//       document.write(b + " " )
//   }
//   document.write(" <br>")
// }


// var City = prompt('Enter Your City Name');

// var firstChar = City.slice(0,1);
// firstChar = firstChar.toUpperCase()
// var otherChar=City.slice(1)
// otherChar = otherChar.toLowerCase()
// var City = firstChar+otherChar;
// console.log(City)

// var arr = ['Karachi' , 'Islamabad' , 'Peshawar']
// for (var i=0; i < arr.length; i++){
//     if(arr[i] === City){
//         alert('City Has Found')
//     }
//     else{
//         alert('City not Found')
//     }
// }

// var str = prompt('Enter some text');
// var numChars = str.length;
// for (var i = 0; i < numChars; i++){
//     if (str.slice(i, i + 2) === "  "){
//         alert('Double spaces Found');
        
//     }
//  }


// var text = 'On the           Insert tab, the galleries include items that are designed to coordinate Hammad Shahid with the overall look of your document. You can use these galleries to insert tables, headers, footers, lists, cover pages, and other document building blocks. When you create pictures, charts, or diagrams, they also coordinate with your current document look.'

// var indexNum = text.indexOf('Hammad Shahid');
// console.log(indexNum)


// var text = 'On the Insert tab, the galleries include items that are designed to coordinate Hammad Shahid with the overall look of your document. You can use these galleries to insert tables, headers, footers, lists, cover pages, and other document building blocks. When you create pictures, charts, or diagrams, they also coordinate with your current document look.';
// var indexNum= text.indexOf('Hammad Shahid');
// var firstText = text.slice(0,indexNum);
// var replacingText = 'Arif Khan ';
// var thirdText = text.slice(indexNum+13)
// console.log(firstText + replacingText + thirdText)









