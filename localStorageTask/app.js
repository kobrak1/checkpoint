

let myArray = [{name:"burak", age:35}, {name:"hasan", age:23}];
myArray = JSON.stringify(myArray)
me = JSON.parse(myArray)


let pf = document.getElementById("print").innerHTML = myArray[3] +"<br>" + me[1].name
                                                   


