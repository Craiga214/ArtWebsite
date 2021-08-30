function parallax(){
    console.log("Hello");
    let stars = document.getElementById('stars');
    let sun = document.getElementById('sun');
    let nav = document.getElementById('nav');
    window.addEventListener('scroll', function(){
        let value = window.scrollY;
        nav.style.top = value + 'px'
        stars.style.left = value + 'px';
        sun.style.top = value * 0.5 + 'px';
    })
}
function toHome(){
    window.location.href = "index.html";
};

function toAboutMe(){
    window.location.href = "about_me.html";
};

function toProjects(){
    window.location.href = "projects.html";
};

function toContact(){
    window.location.href = "contact.html";
};

function notDone(){
    alert("This page is under construction.");
}