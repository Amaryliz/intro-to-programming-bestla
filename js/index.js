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