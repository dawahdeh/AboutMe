
 

function My_Function(){


let name =prompt("Kindly, what is your name ? ");
alert ("welcom to our website "+name);


let choose1=prompt("Do you think I am a female ? y/n");
choo1="n";

if (choo1.localeCompare(choose1.toLowerCase())==0)
alert("you are smart");
else
alert("you are not lucky this time")



let choose2=prompt("Do you think  I am engineer ? y/n");
choo2="y";
if (choo2.localeCompare(choose2.toLowerCase())==0)

alert("you are very smart ");
else
alert("you are not lucky this time");


let choose3=prompt("Do you think  I am civil engineer ? y/n");
choo3="n";
if (choo3.localeCompare(choose3.toLowerCase())==0)

alert("you are very very smart,I am telecom engineer ");
else
alert("you are not lucky this time, I am telecom engineer");



let choose4=prompt("Do you think  7 is my fav number ?");
choo4="y";
if (choo4.localeCompare(choose4.toLowerCase())==0)

alert("you are very smart ");
else
alert("you are not lucky this time");



let choose5=prompt("Do you think I am living in Amman ? y/n");
choo5="n";
if (choo5.localeCompare(choose5.toLowerCase())==0)
alert("you are very very smart, i am living in irbid ");
else
alert("you are not lucky this time");


alert("Thanks for visiting our website "+name)





}
 

My_Function();