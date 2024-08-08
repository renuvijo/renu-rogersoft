const empId = 100;
const empName = "John";
let isActive = true;

const getType = (a) => {
  return typeof a == "number";
};

function mainFunction(p1, p2, p3) {
  let result =  {
   }

  if (getType(p1)) {
    console.log("Is a Number");
    result.p1 = 'Is a Number';
} else {
    console.log("Is NOT a Number");
    result.p1 = 'Is NOT a Number';
}
  if (getType(p2)) { 
    console.log("Is a Number");
  result.p2 = 'Is a Number';
} else  {
    console.log("Is NOT a Number");
    result.p2 = 'Is NOT a Number';
}
  if (getType(p3)) { 
    console.log("Is a Number");
  result.p3 = 'Is a Number';
} else  {
    console.log("Is NOT a Number");
    result.p3 = 'Is NOT a Number';
}
return result;
}
finalResult = mainFunction(empId, empName, isActive);
console.log(finalResult);
