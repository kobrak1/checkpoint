const addBtn = document.getElementById("add");
const deleteBtn = document.getElementById("delete");

const dataObject = {
    name: nameInput.value,
    age: ageInput.value
};

//add function
addBtn.addEventListener("click", () => {
    const nameInput = document.getElementById("name").value;
    const ageInput = document.getElementById("age").value;
});

function addData() {
    const storedData = localStorage.getItem("fuckData");

    if (storedData) {
        storedData = JSON.parse(storedData);
        storedData.push(dataObject);
    } else {
        storedData = [dataObject];
    };
    
};