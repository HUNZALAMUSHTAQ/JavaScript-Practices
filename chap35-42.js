//Chap 35 - 38
//q1
function DATE(){
    console.log(Date)
}
DATE()
//q2
function Greet(){
    fname=prompt()
    lname = prompt()
    alert(fname + '  ' + lname)

}
//q3
addit=(n1,n2)=> n1+n2
console.log(addit(2,3))
//q4
function calculator(num1,num2,operator){
    var data = eval(num1.toString()+operator.toString()+num2.toString() )
    return data
}
calculator(19,10,"%")
//q5
function square(num1){
    return num1**2
}
console.log(square(4))
//q6
function factorial(num){
    var result = 1
    if(num ==0){
        return result
    }
    else{
        for(var i=1 ; i<=Number(num);i++){
            result = result * i
        }
    }
    return result 
}
console.log(factorial(5))
//q7
function display(start,end){
    for(var i = Number(start) ; i<=Number(end) ; i++){
        console.log(i)
    }
}
//q8
function hyp(base,perp){
    function square(num){
        return num**2
    }
    return square(base)+square(perp)
}
console.log(hyp(4,5))

//q9
function areaRect(h,w){
    return h*w
}
var height = 10
var width =10 
console.log(areaRect(height,width))
console.log(areaRect(4,3))

//q10

//q11
function upper(data){
    var data = data.split(" ")
    for(var i =0 ; i<data.length ; i++){
        data[i]=data[i][0].toUpperCase()+data[i].slice(1)
    }
    return data.join(" ")
}
console.log(upper("my Name is hunzala"))
//q12
function longestString(data){
    var data = data.split(" ")
    var max = 0
    var longest = ""
    for(var i=0 ; i<data.length ; i++){
        if(max < data[i].length){
            max = data[i].length
            longest  = data[i]
        }
    }
    return longest
}
console.log("Longest String is :"+longestString("Web Development Tutorial"))
//q13
counter = (data,letter)=> {
    var occurred = 0
    for(var i=0 ; i<data.length ; i++){
        if(data[i]==letter){
            occurred+=1
        }
    }
    console.log("This Occurred "+letter+" "+occurred)   
}
counter("What is your name ","a")
//q14
function calcCircum(radius){
    return 2*radius*Math.PI
}
function calcArea(radius){
    return Math.PI * radius**2
}
console.log("The Circumference is "+calcCircum(4))
console.log("The Area is "+calcArea(4))


//Chap 38 - 42

//q1
function power(a,b){
    return a**b 
}
console.log(power(2,5))
//q2
function leapyear(month){
    if (month % 4 == 0){
        console.log("Its a Leap Year ")
    }
}
console.log(leapyear(2012))
//q3
function triangle(a,b,c){
    var S =(a+b+c)/2
    var area = S(S-a)(S-b)(S-c)
    return area 
}
//q4
function average(s1,s2,s3){
    return (s1+s2+s3/3)
}
function perc(s1,s2,s3){
    return (average(s1,s2,s3)/100)*100
}
function mainfunction(s1,s2,s3){
    return `Percentage : ${perc(s1,s2,s3)}`
}
console.log(mainfunction(81,82,79))
//q5 using ES6
IndexOF =(data,val)=>{
    var flag = false
    for(var i=0 ; i<val.length; i++){
        if(data[i]===val){
            flag =true
            return i 
        }
    }
    if(flag==false){
        return -1
    }
} 
//q6
function noVowel(data){
    var data = data
    for(var i= 0 ; i<data.length ; i++){
        if(data[i]=="a" || data[i] =="e"|| data[i] =="i"|| data[i] =="o"|| data[i] =="u"){
            data =data.replace(data[i],"x")
        }
    }
    return data 
}
//q8
function toMeter(km){
    return km*1000
}
toFeet =(km)=> toMeter(km) * 3.280
toInche = (km) => toMeter(km)* 39.370 
//q9
pay =(overtime) => overtime*12 
//q10
function change(money){
    var money = money.toString().split("")
    var len = money.length 
    if(len==3){
        console.log(money[0]+" Hundred Notes") 
        money[1]=Number(money[1])-5
        console.log("1 Fifty note")
        console.log(money[1]+" Ten Notes")
        console.log(money[2]+" Coins")}
    else if (len>3){
        money = money.reverse()
        console.log(money.slice(2).reverse().join("")+" Hundred Notes") 
        money[1]=Number(money[1])-5
        console.log("1 Fifty note")
        console.log(money[1]+" Ten Notes")
        console.log(money[0]+" Coins")
    }
}   

class Car {
    constructor(name,year){
        this.name = name 
        this.year = year 
    }
    get cname(){
        return ` Name :${this.name} Year :  ${this.year} `
    }
}
class Car {
    constructor(brand) {
      this.carname = brand;
    }
    get cnam() {
      return this.carname;
    }
    set cnam(x) {
      this.carname = x;
    }
  }

  