const form = document.querySelector('.login-form');
const emailForm = document.querySelector('[type = email]');
const passwordForm = document.querySelector('[type = password]');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  const email = event.currentTarget.elements.email.value;
  const password = event.currentTarget.elements.password.value;
  const formData = {
    email,
    password,
  };

  event.preventDefault();

  if (emailForm.value === '' || passwordForm.value === '') {
    return alert('Всі поля повинні бути заповнені');
  }

  console.log(formData);
  form.reset();
}
