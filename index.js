function handleFormSubmit(event) {
    event.preventDefault(); // Prevent the default form submission
    
    // Get form input values
    let username = event.target.username.value;
    let email = event.target.email.value;
    let phone = event.target.phone.value;
    
    // Create user object
    let user = {
      username: username,
      email: email,
      phone: phone
    };
  
    // Store user object in local storage
    localStorage.setItem('User Details', JSON.stringify(user));
  
    // Optionally, you can provide feedback to the user
    // alert('User details submitted successfully!');
  }
  
  // Exporting the function for testing purposes
  module.exports = handleFormSubmit;
  