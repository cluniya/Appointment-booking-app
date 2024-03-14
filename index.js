function handleFormSubmit(event){
    event.preventDefault();
    const name = event.target.username.value;
    const email = event.target.email.value;
    const phonenumber = event.target.phone.value;

    const UserDetails = {
        name,
        email,
        phonenumber
    }
    localStorage.setItem(UserDetails.email,JSON.stringify(UserDetails))
    showUserScreen(UserDetails);
}
function showUserScreen(UserDetails){
    const parentELem = document.getElementById('listOfitems');
    parentELem.innerHTML = parentELem.innerHTML+`<li>${UserDetails.name} - ${UserDetails.email} - ${UserDetails.phonenumber}</li>`;


}
// module.exports = handleFormSubmit;