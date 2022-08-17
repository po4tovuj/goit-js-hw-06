const form = document.querySelector('.login-form');

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;
  // ** i dont see here needs for {} its just 1 line
  //** and it could be returned without {} but i agree that its needed to have 'return' */
  if (email.value === '' || password.value === '')
    return alert('all fields should be filled');
  console.log({
    email: email.value,
    password: password.value,
  });
  event.currentTarget.reset();
}
