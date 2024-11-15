const person = {
    firstName: "John",
    lastName: "Doe",
    age:45,
    city:"Bhopal", 
}
let{firstName,lastName,age,city,country="India"}=person;
console.log(firstName+" "+lastName+" "+age+" "+city+" "+country);

const cars=["BMW","Ford","Mercedes","Honda"];
const [car1,car2,car3]=cars;
console.log(car1+" "+car2+" "+car3);
// spread operator
const num1=[1,2,3,4,5];
const num2=[6,7,8,9,10];
const num3=[11,12,13,14,15];
const num4=[16,17,18,19,20];
const combined = [...num1,...num2,...num3,...num4];
console.log(combined);
// rest operator 
// example pof sprread operator with destructuring
const numb1=[1,2,3,4,5,100,200,300,400];
const[a,b,c,...rest]=numb1;
console.log(a+" "+b+" "+c);
console.log(rest);