// var num = +prompt("Enter the Number :")

//Q1
var num = 3.45214
document.write("Number:"+num)
document.write("<br>")
document.write("Round off value :"+Math.round(num))
document.write("<br>")

document.write("<br>")
document.write("Floor off value :"+Math.floor(num))
document.write("<br>")
document.write("Ceil off value :"+Math.ceil(num))
//Q2
var num2 = -2.673
document.write("<br>")
document.write("<br>")
document.write("Number:"+num2)
document.write("<br>")
document.write("Round off value :"+Math.round(num2))
document.write("<br>")
document.write("Floor off value :"+Math.floor(num2))
document.write("<br>")
document.write("Ceil off value :"+Math.ceil(num2))
document.write("<br>")
//Q3
var num3 = -4 
document.write("<br>")
document.write("The absolute value :"+"of :"+num3+"is :"+Math.abs(num3))
//Q4
var dice = Math.floor(Math.random()*6)
document.write("<br>")
document.write("Random Dice is "+dice)
document.write("<br>")
dice = Math.floor(Math.random()*6)
document.write("Random Dice is "+dice)
document.write("<br>")
//Q5
var coin = Math.floor(Math.random()*2)
if(coin == 1 ){
document.write("Its head ")
}
else{
document.write("Its tail ")
}
//Q6
var rnum = Math.floor(Math.random()*100)
document.write("<br>Random Number from 1 - 100 is : "+rnum)
//q8
var secretnumber = Math.floor(Math.random()*10)
var user = +prompt("Enter the Guessed Value :")
if(user ==secretnumber){
    alert("You won")

}
else{
    alert("You Lose")
}