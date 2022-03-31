const chat = document.querySelector('#chat');
const message = document.querySelector('#message');
const baseUrl = 'http://pemweb.id/chat';

function readChat() {
  fetch(`${baseUrl}/chat.txt`)
    .then(res => res.text())
    .then(res => {
        chat.value =res;
    });
	setTimeout(readChat,500);
};
readChat();

message.addEventListener('keyup', e=> {
  if (e.keyCode === 13) {
    fetch(`${baseUrl}/chatwrite.php`,{
      method:'post',
      headers:{
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body : `text=${message.value}`
    });

    message.value='';
  }
});
