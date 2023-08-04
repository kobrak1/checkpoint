//declare and initialize buttons
const addBtn = document.getElementById("add");
const deleteBtn = document.getElementById("delete");

//add button (evet listener)
addBtn.addEventListener('click', () => {
    const nameInput = document.getElementById("name").value;
    const ageInput = document.getElementById("age").value;

    if (nameInput && ageInput) {
        const dataSet = {name: nameInput, age: ageInput};
        addData(dataSet)
    };
});
//delete button (event listener)
deleteBtn.addEventListener('click', () => {
    //a function that deletes the data in local storage
    deleteData();
});

//function to add data to local storage
function addData(data) {
    let storedData = localStorage.getItem("userData");

    if (storedData) {
        storedData = JSON.parse(storedData);
        storedData.push(data);
    } else {
        storedData = [data]
    };
    //add back the data to local storage
    localStorage.setItem("userData", JSON.stringify(storedData)) 
};

//function to delete data in local storage
function deleteData() {
    const storedData = JSON.parse(storedData);
    storedData.forEach(element => {
        if (element.name === nameInput && element.age ===ageInput ){
            
        }
    });
}
let myDataSet = [];
console.log(typeof myDataSet)