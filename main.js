/*Homework 6: jQuery
1. The DOM 
2. $ & $(document).ready(function(){});
3. Anonymous Functions
4. Callbacks
5. Cool things 
*/

// TOPIC 1: The DOM. Below is a description of the Document Object Model.

/*The DOM (Document Object Model) is made up of objects in the HTML. When the browser begins to read the HTML, CSS, and Javascript files, it will parse the HTML into different objects, preparing it so that it can communicate better with the Javascript file. */



// TOPIC 2: $ & $(document).ready(function(){});
/*The $ is a short, more efficient way to call on jQuery. Instead of typing out jQuery, you can type $ and the program will run exacty the same. 

$(docment).ready(function(){

});

This function above tells the browser to wait until the page has loaded before performing any functions. Below is an example of this function in use, first defined via the variable called myName.*/

/*var myName = ["Ashley", "Barbara", "Mann"]

$(document).ready(function(){
	console.log(alert(myName[0] + myName[1] + myName[2]));
});



// TOPIC 3: Anonymous Functions. Anonymous functions are great for having the browser perform a certain behavior instead of creating output. Below are some examples.

var myAge = function(){
	console.log(alert("I'm 29 years old."))
};*/

//This example will show a pop up that says "I'm 29 years old!"



//TOPIC 4: Callbacks. Callbacks allow a second function to perform only after a first function has finished. I'm not sure how to constuct any examples.



// TOPIC 5: Cool things 
$(document).ready(function(){

	$(".square8").fadeOut(1000),(function(){
		console.log(alert("Faded"));
	});

});

//This is an example of many things Javascript is capable of. In this example, the browser will slowing fade out square number 8.