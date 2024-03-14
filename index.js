function saveToLocalStorage(event){
    event.preventDefault(event);
    const Name = event.target.username.value;
    const Email = event.target.email.value;
    const Phone = event.target.phone.value;
    localStorage.setItem('Username',Name);
    localStorage.setItem('Email',Email);
    localStorage.setItem('Phone',Phone);

}