//Array methods

let arr =[1,2,3,4,5,6,7,8,9,10]
arr.push("banna","orange")  //add one or more element from the end
console.log(arr)
arr.unshift(0,"apple")   //add one or more element from beginning
console.log(arr)
arr.shift()    //remove  elment from the beginning
console.log(arr)
arr.pop()     //remove element from the end
console.log(arr)
console.log(arr.indexOf("banna"))
console.log(arr[11])
let b=["banna","orange","lemon"]
console.log(b[2])
b[0]="jubair"
console.log(b)
b.shift()
console.log(b)

arr.sort()
console.log(arr)
arr.reverse()
console.log(arr)

let array =[1,6,2,4,3,5]
array.sort()
console.log(array)
console.log(array.reverse())

b.toString()
console.log(b)

const object ={
    name:"jubair",
    father:"kasim",
    mother:"vagitha banu"
}
console.table(object)     //table shows table formate data

let data =["a","b","c","d","e"]
let lengths =data.length    
console.log(lengths)
let x=data.at(2)                    //it return index of element
console.log(x)
let datas=data.toString()           //it convert array to string
console.log(datas.at[3])

let joins = data.join(" + ")
console.log(joins)

let y =["a","b"]
console.log(y.concat(["c","d"]))

let myArr = [[1,2],[3,4],[5,6]];  //separet this sub array with single array
let d= myArr.flat()
console.log(d)



