const username = document.getElementById('username')
const content = document.getElementById('content')
const send = document.getElementById('send')

send.addEventListener('click', e=>{
  e.preventDefault()
  discordIt()
  username.value = ''
  content.value = ''
  document.getElementById('sent').innerHTML = '<strong> sent</strong>'
  setTimeout(() => {
    document.getElementById('sent').style.display = 'none'
  }, 2000);
})

function discordIt() {
  fetch('https://discord.com/api/webhooks/1027741592683032677/ATWnt5El6lZBIQ1qZwzr1dN8gsH3Wcga4MlwcFbnK-KV0ztP1VTX8620MEdeewLyASUQ', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        "content": content.value,
        "embeds": null,
        "username": username.value,
        "attachments": []
      }
    )
  })
  .then(response => response.json())
  .then(response => console.log(JSON.stringify(response)))
}
