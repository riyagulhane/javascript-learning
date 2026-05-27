// An array is a special object used to store multiple values in a single variable.
// It is ordered (elements have indexes starting at 0).
// It is dynamic (size can grow or shrink).
// It can hold mixed data types (numbers, strings, objects, even other arrays).

const fruit=["mango","kiwi","orange","apple","banana"]
console.log(fruit[1]);
console.log(fruit.length);

// array operations

// push -> add element at the end
// pop -> remove elemet from end
// shift-> remove the element from start
// unshift -> add element frm start
// map  -> transform each element
// filter->select element bases on condition
// reduce->combine all element into one value

// find the largets in array

const numbers=[10,23,12,34,32]
let max=numbers[0];

for(let i=1;i<numbers.length;i++){
if(numbers[i]>max){
    max=numbers[i]
}
}
console.log("largest number is",max);


