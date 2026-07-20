/*function balCheck(amount){
    let bal=amount;
    if(bal>=1000){
      //console.log("Payment successful"); we should use return statemnt instead of console for functions
      return "Payment success";
    }
    else if(bal>1){
    //console.log("Unsuccessful payment.Insufficient bank balance.");
    return "Insufficient bank balance"
    }
    return "Need Amount"
}

let result=balCheck(500);//function call
console.log(result);

let r2=balCheck(1500);
console.log(r2);

let r3=balCheck();
console.log(r3);*/

/*let bal2=function(){
   return "This is a variable function";
}
bal2()

let bal3 =( )=>{
 return "Arrow function";
}
bal3()*/

//array
/*let array=[1,2,3,4,5];
console.log(array)//print array
console.log(array[2])//to print 3rd element by index position
console.log(array.length)//no.of elements
console.log(array[array.length-1])//array[index]->array[5-1]->array[4]

array.push(6)//add an element to array at end
console.log(array)//print after adding element

array.pop()//removes last element
console.log(array)

array.shift()//removes first element
console.log(array)

array.unshift("a")//remmoves first elent and adds new element given
console.log(array)

array.splice(1,2,"b","c","d")//deleting the element by index position and adding new elements also->index,delete,insert
console.log(array)

//change array to string and string to array
let str=array.join("")//changing array to string by using join
console.log(str)

let str2="a,b,c,de,fgh"//changing string to array by using split fn by specifying comma or space 
console.log(str2.split(","))//i.e split wherever comma/space is present
*/

//object
let student1={
    name:"Siva",
    id:"2435678900siva",
    dept:"EEE"
}
console.log(student1)

//method 1(DOT Notation)
console.log(student1.name)
console.log(student1.id)

//method 2 (Bracket notation)
console.log(student1["dept"])
console.log(student1["id"])

student1.dept="ECE";//changing dept
student1.age="22";//adding new key->age 
console.log(student1)