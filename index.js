function toggleMenu() {

document
.getElementById("navMenu")
.classList.toggle("active");

}

function scrollProjects() {

document
.getElementById("projects")
.scrollIntoView({
behavior:"smooth"
});

}

function downloadResume() {
    window.location.href = "./Resume.pdf";
}
function sendMail() {

window.open(
"https://mail.google.com/mail/?view=cm&fs=1&to=dharikashanmugam@gmail.com",
"_blank"
);

}

function openGithub(){

window.open(
"https://github.com/dharika-28",
"_blank"
);

}

window.onscroll = function(){

let btn =
document.getElementById("topBtn");

if(
document.documentElement.scrollTop > 300
){

btn.style.display = "block";

}
else{

btn.style.display = "none";

}

};

function goTop(){

window.scrollTo({
top:0,
behavior:"smooth"
});

}
