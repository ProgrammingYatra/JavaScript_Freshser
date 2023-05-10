const form = document.querySelector('#add-form');
const playerList = document.querySelector('#player-list');

let players = [];

function addPlayer(event) {
  event.preventDefault();

  const firstName = document.querySelector('#first-name').value;
  const lastName = document.querySelector('#last-name').value;
  const country = document.querySelector('#country').value;
  const score = document.querySelector('#score').value;

  if (!firstName || !lastName || !country || !score) {
    alert('All fields are required!');
    return;
  }

  const now = new Date();
  const date = now.toLocaleDateString();
  const time = now.toLocaleTimeString();

  players.push({ firstName, lastName, country, score, date, time });

  renderPlayerList();
}

function deletePlayer(index) {
  players.splice(index, 1);
  renderPlayerList();
}

function modifyScore(index, delta) {
  players[index].score += delta;
  renderPlayerList();
}

function renderPlayerList() {
  playerList.innerHTML = '';

  players.forEach((player, index) => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${player.firstName}</td>
      <td>${player.lastName}</td>
      <td>${player.country}</td>
      <td>${player.score}</td>
      <td>${player.date}</td>
      <td>${player.time}</td>
      <td>
        <button onclick="deletePlayer(${index})">Delete</button>
        <button onclick="modifyScore(${index}, 5)">+5</button>
        <button onclick="modifyScore(${index}, -5)">-5</button>
      </td>
    `;
    playerList.appendChild(row);
  });
}

// form.addEventListener('submit', addPlayer);
