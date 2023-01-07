const body = document.querySelector('body')
const skills = ['Javascript', 'Ruby', 'Rails', 'Api', 'Shortcuts ios', 'git', 'github', 'cli', 'postman', 'mvc pattern']
let content = '';
skills.forEach(skill =>{
  content += `<div class="card"> ${skill} </div>\n`;
})
body.innerHTML = content + `<a href = "./index.html" class="card link-card">&#128072; Back to Profile </a>\n`
