const WS = new WebSocket('ws://localhost:3232');

WS.onmessage = (payload) => {
  console.log(payload.data);
  displayMessages(payload.data);

}

WS.onopen = () => {
  displayMessages('connection is open');
}

WS.onclose = () => {
  displayMessages('connection is closed');
}

document.forms[0].onsubmit = () => {
  let input = document.getElementById('message');
  console.log(input.value);

  WS.send(input.value)
}

function displayTitle(title){
  document.querySelector('h3').innerHTML = title;
}

function displayMessages(message){
  let h4 = document.createElement('h4');
  h4.innerHTML = message;
  document.querySelector('div.messages').appendChild(h4);
}
