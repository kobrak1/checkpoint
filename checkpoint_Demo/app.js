/*
const add = document.getElementById("add");
const del = document.getElementById("delete");
const update = document.getElementById("update");
*/

function saveData() {
    //declare the variables
    const nameInput = document.getElementById("name");
    const ageInput  = document.getElementById("age");

    //get the values from input fields
    const name = nameInput.value;
    const age = ageInput.value;

    // control if both attributes provided
    if (name.trim() === '' || age.trim() === '') {
        alert('Please enter both name and age.');
        return;
    }

    const data = {
        name: name,
        age: age
    };

    let existingData = JSON.parse(localStorage.getItem('userData')) || [];
    existingData.push(data);
    localStorage.setItem('userData', JSON.stringify(existingData));

    alert('Data saved to Local Storage!');
};

// function to delete the data
function deleteData() {

    let existingData = JSON.parse(localStorage.getItem('userData')) || [];
    localStorage.removeItem('userData');


    alert('Data deleted from Local Storage!');
}

  
  
  
  
  