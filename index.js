// Write your code below:
// index.js

function handleFormSubmit(event) {
    event.preventDefault();
    const name = event.target.username.value;
    const email = event.target.email.value;
    const phonenumber = event.target.phone.value;

    const userDetails = {
        name,
        email,
        phonenumber
    };

    let users = JSON.parse(localStorage.getItem('users')) || [];
    users.push(userDetails);
    localStorage.setItem('users', JSON.stringify(users));

    showUserScreen(userDetails);
}

function showUserScreen(userDetails) {
    const parentElem = document.getElementById('listOfitems');
    const listItem = document.createElement('li');

    // Creating delete button
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', function() {
        removeUser(userDetails);
        listItem.remove();
    });

    // Adding user details and delete button to list item
    listItem.textContent = `${userDetails.name} - ${userDetails.email} - ${userDetails.phonenumber}`;
    listItem.appendChild(deleteButton);

    parentElem.appendChild(listItem);
}

function removeUser(userDetails) {
    let users = JSON.parse(localStorage.getItem('users')) || [];
    users = users.filter(user => user.email !== userDetails.email);
    localStorage.setItem('users', JSON.stringify(users));
}

// module.exports = handleFormSubmit;
