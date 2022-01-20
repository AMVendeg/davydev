// SOME() function on arrays

// megnézem van-e a tömbben olyan elem ami maradék nélkül osztható kettővel: element % 2 === 0
// evetually egy function
// some: boolean értéket ad vissza

const array: number[] = [3, 37, 68, 94, 23];
const eventually = (element: number) => element % 2 === 0;
console.log(array.some(eventually));
// output: true


// 3féle módon használhatom a SOME()-t:
// ELSŐ: arrow function: 
// some((element) => valamilyen logika, vagy matek operátor

// MÁSODIK: callback function:
// some(callbackfgv)
// some(callbackfgv, thisArg)

// HARMADIK: inline callback function:
// some(function(element)valamilyenlogika)


// EXAMPLE isBiggerThan20 - with arrow function
const myNumList: number[] = [3, 37, 68, 94, 23];
const isBiggerThan20 = (element: number) => element > 20;
console.log(myNumList.some(isBiggerThan20));
// output true


// smaller than 300 with arrow function
const myNumList2: number[] = [33, 201, 346, 5623, 5685];
console.log(myNumList2.some((element:number) => element > 300));
// output: true


// function isThereAny check
const myNameList: string[] = ['Jonas', 'Kevin', 'Masni', 'Ármin', 'Ágota'];

function isThereAny(arrayName: string[], value: string) {
  return arrayName.some((element: string) => element === value);
}
isThereAny(myNameList, 'Masni');
console.log(`There is ${myNameList[2]}`);
// true


// 