const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const loginBtn = document.getElementById('loginBtn');
const warningDiv = document.getElementById('warning');
const statusDiv = document.getElementById('status');

usernameInput.addEventListener('input', function() {
  let value = usernameInput.value;
  let hasDigit = /\d/.test(value);
  
  if (hasDigit) {
    warningDiv.textContent = 'имя не может содержать цифры';
    warningDiv.style.color = 'black';
  } else {
    warningDiv.textContent = '';
  }
});

loginBtn.addEventListener('click', function() {
  let username = usernameInput.value.trim();
  let password = passwordInput.value.trim();
  let hasDigit = /\d/.test(username);
  
  if (hasDigit) {
    warningDiv.textContent = 'удалите цифры из имени!';
    warningDiv.style.color = 'black';
    statusDiv.textContent = '';
    return;
  }
  
  if (username === '') {
    warningDiv.textContent = 'Введите имя пользователя';
    warningDiv.style.color = 'black';
    statusDiv.textContent = '';
    return;
  }
  
  if (password === '') {
    statusDiv.textContent = 'Введите пароль';
    statusDiv.style.color = 'black';
    return;
  }
  
  warningDiv.textContent = '';
  statusDiv.textContent = 'Добро пожаловать, ' + username;
  statusDiv.style.color = 'green';
});