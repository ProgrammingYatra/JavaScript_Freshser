// JavaScript code
function addUser() {
  const firstName = document.getElementById('firstName').value;
  const lastName = document.getElementById('lastName').value;
  const country = document.getElementById('country').value;
  const score = document.getElementById('score').value;
  
  // Check if all fields are filled
  if (!firstName || !lastName || !country || !score) {
    alert('Please fill all fields');
    return;
  }
  
  // Add user to the table
  const table = document.getElementById('userTable').getElementsByTagName('tbody')[0];
  const row = table.insertRow();
  row.insertCell().innerHTML = firstName;
  row.insertCell().innerHTML = lastName;
  row.insertCell().innerHTML = country;
  row.insertCell().innerHTML = score;
  row.insertCell().innerHTML = new Date().toLocaleString();
  row.insertCell().innerHTML = '<button onclick="deleteUser(this)">Delete</button>';
  row.insertCell().innerHTML = '<button onclick="addScore(this)">+5</button>';
  row.insertCell().innerHTML = '<button onclick="subtractScore(this)">-5</button>';
}

function deleteUser(button) {
  const row = button.parentNode.parentNode;
  row.parentNode.removeChild(row);
}
function addScore(button) {
  const row = button.parentNode.parentNode;
  const scoreElement = row.querySelector('.score');
  let score = parseInt(scoreElement.textContent);
  score += 5;
  scoreElement.textContent = score;
}

function subtractScore(button) {
  const row = button.parentNode.parentNode;
  const scoreElement = row.querySelector('.score');
  let score = parseInt(scoreElement.textContent);
  score -= 5;
  scoreElement.textContent = score;
}
