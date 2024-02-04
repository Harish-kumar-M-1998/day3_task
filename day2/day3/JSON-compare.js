let obj1={name:"harish",age:25}
let obj2={age:25,name:"harish"}


let objKeys=Object.keys(obj1)
let isCorrect = true;
for (let key of objKeys) 
{
let value1=obj1[key]
let value2=obj2[key]
if (value1 !== value2){
  isCorrect = false;
}

}

console.log(isCorrect);
/*console.log(obj_keys)
if (obj1.name == obj2.name && obj1.age == obj2.age ){
    console.log(true)
}
else{
    console.log(false)

}*/
