var skills = document.querySelector("#skill");
var Experience = document.querySelector("#Experience");
var Education = document.querySelector("#Education");
var skill1 = document.querySelector(".skill1");
var skill2 = document.querySelector(".skill2");
var skill3 = document.querySelector(".skill3");

skill2.classList.add("need-skill-details");
skill3.classList.add("need-skill-details");
skill1.classList.add("need-skill1");

function skillsBtn(){
    skill1.classList.add("need-skill1");
    skill2.classList.remove("need-skill1");
    skill3.classList.remove("need-skill1");
}
function experienceBtn(){
    skill2.classList.add("need-skill1");
    skill1.classList.remove("need-skill1");
    skill3.classList.remove("need-skill1");
}
function educationBtn(){
    skill3.classList.add("need-skill1");
    skill2.classList.remove("need-skill1");
    skill1.classList.remove("need-skill1");
}