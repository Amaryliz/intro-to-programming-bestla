// copyright section
let today = new Date('July 28, 2022');
let thisYear = today.getFullYear();
let footer = document.querySelector('footer');
let copyright = document.createElement('p');
copyright.innerHTML = `Amaryliz Figueroa ${thisYear}`
footer.appendChild(copyright);

//skills section
const skills = ['JavaScript', 'HTML', 'CSS'];
let skillsSection = document.getElementById('skills');
let skillsList = skillsSection.querySelector('ul');
for(let i = 0; i < skills.length; i++){
    let skill = document.createElement('li');
    skill.innerText = skills[i];
    skillsList.appendChild(skill);
}

//message form section

const messageForm = document.getElementsByName('leave_message')[0];
messageForm.addEventListener('submit', (e) =>{
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const message = e.target.message.value;
    console.log(name, email, message);
    const messageSection = document.getElementById('message_list');
    const messageList = messageSection.querySelector('ul');
    const newMessage = document.createElement('li');
    newMessage.innerHTML = `<a href="mailto:${email}"> ${name} wrote </a>`;
    newMessage.innerHTML += `<span> ${message}</span>`;
    const removeButton = document.createElement('button');
    removeButton.innerText = 'Remove';
    removeButton.setAttribute('type', 'button');
    removeButton.addEventListener('click', () => {
        const entry = removeButton.parentNode;
        entry.remove();
    })
    newMessage.appendChild(removeButton);
    messageList.appendChild(newMessage);
    messageForm.reset();
});