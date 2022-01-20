// BUBBLE SORT:
let numbers: number[] = [34, 12, 24, 9, 5];

function bubble(array:number[]):number[]{
    array = array.slice();                                                          // slice-al feldarabolom 
  
    for (let i = 0; i < array.length; i++) {                                        // ez a for ciklus végigmegy a tömbön
      for (let j = 0; j < array.length - 1; j++) {                                 // ez a for ciklus visszafelé lépked, 
        if (array[j] > array[j + 1]) {                                           // HA a tömb j eleme nagyon mint a j + 1, akkor
          [array[j], array[j + 1]] = [array[j + 1], array[j]];                // j, j+1 egy tömbben = j + 1, j-vel, vagyis felcseréli az elemeket
        }
      }
    }
  return array;                                                                   // visszatér a tömbbel
}

// console.log(bubble(numbers));                                                       // kiirom consolra a function-t a numbers tömbre

// ASCENDING ORDER SORT
let nums: number[] = [202, 34, 534, 231, 89, 76];
nums.sort((a, b) => a - b);

// DESCENDING ORDER SORT
nums.sort((a, b) => b - a);
console.log(nums);


// ARRAY incl objects SORT by value: overwrite the same array
let nameList: {name: string, value: number}[] = [
  { name: 'Edward', value: 21 },
  { name: 'Sharpe', value: 37 },
  { name: 'And', value: 45 },
  { name: 'The', value: -12 },
  { name: 'Magnetic', value: 13 },
  { name: 'Zeros', value: 37 }
]

nameList.sort((a, b) => a.value - b.value);
console.log(nameList);

// ARRAY incl objects SORT by keys length: sorts the earlier sorted namelist by value
let nameList2: {name: string, value: number}[] = nameList.sort((a, b) => a.name.length - b.name.length);
console.log(nameList2);

// ARRAY incl objects SORT by keys first letter by abc
let nameList3: {name: string, value: number}[] = nameList.sort(function(a, b) {
  let nameA: string = a.name;
  let nameB: string = b.name;
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }
  return 0;
});
console.log(nameList3);


