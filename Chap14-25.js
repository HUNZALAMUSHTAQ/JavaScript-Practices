// Arrays
//q1  to q7
var emptyArray = new Array()
var emptyArray2 = []
var strArray = ["abc", 'a' , 'b' , 'c ' ,'d']
var numArray = [1,2,3,4,5,6]
var boolArray = [true,false ,true]
var mixArray = [1,'a',false,1.2]
var qual = ["SSC" , 'HSC' , 'BCS' , 'BS' , 'BCOM' , 'MS' , 'Mphill' , 'Phd']
var student = ["Michael" , 'John ' , 'Tony']
var result = [320,230,480]
for(var i = 0 ; i<student.length; i++){
    document.write(`Score of ${student[i]} is ${result[i]} percentage is ${Math.round(((result[i]/500 )*100),2)}%<br> `)
}
//Q10
var Score2 = [320,230,480,120]; 
document.write(`Unsorted Array is = ${Score2} <br> Sorted is ${Score2.sort()}`)
//Q11
var cityName = ["khi" ,"loh" ,"Isl" ,"Quetta" , "Peshawar"]
var sCity = cityName.slice(2,4)
document.write(` <br>cityName  ${cityName} <br> Selected ones are ${sCity}`)
//q12
var pet= ["This" , "Is ", "My" , "Cat"]
var spet = pet.join(" ")
document.write("<br>"+spet+"<br>")
//q13
var FiFo = ["keyboard" , "mouse" , "printer", "monitor "]
document.write("<br>FIFO Devices are :"+  `${FiFo}`)
for(var i= 0 ; i < FiFo.length; i++){
    document.write(`<br>OUT : <br>${FiFo[i]}`)
} 
//q14
document.write("<br>LIFO Devices are :"+  `${FiFo}`)
for(var i= FiFo.length-1; i >= 0; i--){
    document.write(`<br>OUT : <br>${FiFo[i]}`)
} 
//q15
var company = ["Apple" ,'Samsung' , 'Motorolla ',"Nokia" , 'Sony' , 'Haier']
document.write(`<br><select name="cars" id="cars">`)
for(var i =0 ; i< company.length ; i++){
document.write(` <option value="${company[i].toString()}">${company[i].toString()}</option>`)
}
document.write(`</select>`)

// chap 17 -20 
//Arrays and Loop 
var matrix = [[0,1,2,3],[1,0,1,2],[2,1,0,1]]
document.write('<h1>Chap 16 -20 </h1><br>')
for(i=0; i <=10 ; i++){
    document.write(i+"<br>")
}

// var number = +prompt("Enter The table ")
// var len = +prompt("Enter length ")
// for(i=1 ; i<=len  ; i++){
//     document.write(`${number} x ${i} = ${number*len}<br>`)
// }
var fruits = ["apple", "banan", "mango", "orange", "strawberry"]
for(i=0 ; i < fruits.length ; i++ ){
    document.write(fruits[i]+'<br>')
}
for(i=0 ; i < fruits.length ; i++ ){
   
    document.write("Index element at Index" + i.toString() + "is " +fruits[i]+"<br>" )
}

for(i=1 ; i <= 15 ; i++ ){
    document.write(i+" ,")

}
document.write("<br>")

for(i=10 ; i >=1 ; i-- ){
    document.write(i+" ,")
}
document.write("<br>")

for(i=0 ; i <= 20 ; i++ ){
    if(i%2==0){
    document.write(i+" ,")}
    // else if(i%2!= 0){
    //     document.write(i+" ,")}
}

    document.write("<br>")

for(i=0 ; i <= 20 ; i++ ){    
if(i%2!= 0){
            document.write(i+" ,")}
}
for(i=2 ; i <= 20 ; i++ ){    
    if(i%2== 0){
                document.write(i+"k ,")}
    }

// var A =["Cake","Appple pie " , "cookie" , "Chips" , "patties"]
// var sItem = prompt("Enter the Item name ")
// var found = false 
// for(var i =0 ; i < sItem.length; i++){
//     if (A[i] == sItem){
//         found = true 
//         alert(A[i]+"is Availabe at " + i + "in our bakery")
//     } 
// } 
// if(found==false ){
//     alert("We are sorry it is not available "+sItem)
// }


var a = [24,53,76,54,91]
var big =a[0]
var small = a[0]
for(var i=0 ; i<a.length ; i++){
if(big<a[i]){
    big = a[i]
}
else if (small> a[i]){
    small = a[i]
}
}
document.write("<br>Biggest item is "+ big )
document.write("<br>Smallest item is "+ small )
document.write("<br>")

for(i=5 ; i <= 100 ; i+=5 ){    
document.write(i + " ,")
}
document.write("<br>")


//Chapter21  - 25 
//q1 
// var fname = prompt ("Enter the First name ")
// var lname = prompt("enter the last name :")
// alert("hi ," + fname + lname)
//q6
//alert("hi "+fname.concat(lname))
//q2
// var mphone =prompt ("Enter Mobile phone no ")
// document.write("Length of string is "+mphone.length)
//q3
var Country = "Pakistani "
for(var i=0 ; i<Country.length ; i++){
    if(Country[i]=="n"){
        document.write('Index of N is' + i)
    }
}

//Q5
document.write("<br>")

var country  = "Pakistani "
document.write("Chracter index at 3 is "+country.slice(3,4))
document.write("<br>")
//q7
var city="Hyderabad"
city =city.replace(city.slice(0,5),"Islam")
document.write(city)
//q8
var text =`Ali and Sami are best friends. They play cricket and 
football together`
for(var i = 0 ; i<text.length; i++){
    if(text.slice(i,i+3) == "and"){
        text = text.slice(0,i)+ "&"+ text.slice(i+3)
    }
}
document.write("<br>"+text)
//q9
var num ="92" 
document.write("<br> Value:"+num+"<br> Type :"+ typeof(num) )
num = Number(num)
document.write("<br> Value:"+num+"<br> Type :"+typeof(num) )
document.write("<br>peanuts".toUpperCase())
var input = "javascript"
input = input.replace(input.slice(0,1),input.slice(0,1).toUpperCase())
document.write("<br>"+input)

var input = 543.54
input= input.toString().split(".").join("")
document.write("<br>"+input)


//Q13 Dont know the Asccii codes 
//Q14
// var A =["cake","appple pie " , "cookie" , "chips" , "patties"]
// var sItem = prompt("Enter the Item name ").toLowerCase()
// var found = false 
// for(var i =0 ; i < sItem.length; i++){
//     if (A[i] == sItem){
//         found = true 
//         alert(A[i]+"is Availabe at " + i + "in our bakery")
//     } 
// } 
// if(found==false ){
//     alert("We are sorry it is not available "+sItem)
// }


//Q16
var university = "University of karachi "
var uni = university.split("")
for(var i= 0 ; i<uni.length ; i++){
    document.write("<br> "+ uni[i])
} 
var country = "Pakistani"
for(var i= country.length ; i>country.length -2; i--){
    document.write("<br> Last Char is :"+ country.slice(i))
} 

var text = "the quick brown  the fox jumps over the lazy dog"
var count= 0 
for(var i=0 ; i<text.length ; i++){
if (text.slice(i,i+3)== "the"){
    count+=1
    
}
}
document.write("<br> the ouccurs in text "+count + " times" )