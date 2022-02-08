/*
To pretty print a JavaScript object, the most common way is to use JSON.stringify method.

Let's assume you are using a browser which does not have this function, could you write a prettyPrint function that do the same? 
i.e., you need to implement JSON.stringify yourself.

Example 1:

Sample code:
const obj = {"one": 1, "two": 2};
console.log(prettyPrint(obj, 2))

Sample output:
{
  "one": 1,
  "two": 2
}

{
  "one": 1,
  "two": 2,
  "three": [1,2],
  "four":{
    "five": 5
  }
}

Example 2:

Sample code:
const obj = [1, 2, 3, {key: 4}];
console.log(prettyPrint(obj, 4))

Sample output:
[
    1,
    2,
    3,
    {
        "key": 4
    }
]

"one", 100, true, null, undefined

=>
"one"

Handle simple scenarios:
    null, undefined, string, boolean => output string of the input
    
let arr = ['a','b','c','d','e']
for(let key in arr){
    console.log(key, arr[key])
}
*/
const obj = {"one": 1, "two": 2};
console.log(prettyPrint(obj, 2))

function isNull(data) {
    //...
    //returns boolean
}

function createSpaces(n, depth){
  //returns a string of n spaces * depth
  console.log(n, depth)
  let str = '';
  for(let i = 0; i < n*depth; i++){
    str+=' ';
  }
  return str;
}

function prettyPrint(data, indent, depth = 1){
  // console.log(data, indent, depth)
    if(typeof data === 'string') return `"${data}"`;
    if(typeof data === 'boolean') return `${data}`;
    if(typeof data === 'number') return `${data}`;
    if(typeof data === 'undefined') return `${data}`;
    // if(isNull) return `${data}` 
    
    let finalStr = '';
    
    if(Array.isArray(data)){
        finalStr += `${createSpaces(indent, depth)}[`;
        data.forEach((ele) =>{
            finalStr += `\n${createSpaces(indent, depth)}${prettyPrint(ele, indent, depth+1)},`;
        })
        finalStr.slice(0,-1);
        finalStr += `${createSpaces(indent, depth)}\n]`;
    } else if(typeof data === 'object'){
        let strObj = `${createSpaces(indent, depth)}{`;
        for(let key in data){
            strObj += `\n${createSpaces(indent, depth)}"${key}": ${prettyPrint(data[key], indent, depth+1)},`;
        }
        strObj.slice(0,-1);
        strObj += `${createSpaces(indent, depth)}\n}`;
        finalStr+=strObj;
    }
    return finalStr;
}