const broadCastConnection = new BroadcastChannel("channel_communication");

function sendMessage() {
  const message = document.getElementById("textMessage").value;
  const toWho = document.querySelector('input[name="messageTo"]:checked').value;
  broadCastConnection.postMessage({ [toWho]: message });
}

function closeConnection() {
  broadCastConnection.close();
  document.getElementById("connectionClosed").classList.add("show");
}

broadCastConnection.onmessage = (response) => {
  const getPage = window.location.pathname.split('.')[0].replace('/', '')

  if (response.data[getPage] || response.data.both) {
    const message = response.data[getPage]
      ? response.data[getPage]
      : response.data.both;
    document.getElementById("messageText").innerHTML += `${message} <br />`;
    console.log(message);
  }

  if (getPage === 'tab1' && response.data.tab1to2) {
    broadCastConnection.postMessage({ tab2: response.data.tab1to2 });
    document.getElementById("redirectedMessage").classList.add("show");
    setInterval(() => {
      document.getElementById("redirectedMessage").classList.remove("show");
    }, 3000);
  }
};
