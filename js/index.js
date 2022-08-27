// copyright section
let today = new Date('July 28, 2022');
let thisYear = today.getFullYear();
let footer = document.querySelector('footer');
let copyright = document.createElement('p');
copyright.innerHTML = `Amaryliz Figueroa ${thisYear}`
footer.appendChild(copyright);

//skills section
const skills = ['JavaScript', 'HTML', 'CSS', 'Salesforce', 'Facets'];
let skillsSection = document.getElementById('skills');
let skillsList = skillsSection.querySelector('ul');
for(let i = 0; i < skills.length; i++){
    let skill = document.createElement('li');
    skill.innerText = skills[i];
    skillsList.appendChild(skill);
}
// style skills section
skillsSection.style.color = "#C6A944";
skillsList.style.color = "#ffffff";


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

    // style message section
    messageList.style.color = '#ffffff';
    messageList.style.letterSpacing = '1px';
    messageList.style.display = 'flex';
    messageList.style.flexDirection = 'column'
    
    // button style
    removeButton.style.background = '#8DAC69';
    removeButton.style.color = '#ffffff';
    removeButton.style.borderRadius = '5px';
    removeButton.style.borderColor = '#8DAC69';
    removeButton.style.marginLeft = '5px';
    removeButton.style.padding = '3px';


    messageForm.reset();
});