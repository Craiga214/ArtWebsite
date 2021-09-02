function parallax(){
    console.log("Hello");
    let stars = document.getElementById('stars');
    let sun = document.getElementById('sun');
    let nav = document.getElementById('nav');
    window.addEventListener('scroll', function(){
        let value = window.scrollY;
        nav.style.top = value + 'px';
        stars.style.transform = 'rotate(' + 0.25*value + 'deg)';
        sun.style.top = value + 'px';
    })
}
function toHome(){
    window.scrollTo(0,0);
};

function toAbout(){
    window.scrollTo(0,2500);
};

function toProjects(){
    window.location.href = "projects.html";
};

function toContact(){
    window.scrollTo(0,document.body.scrollHeight);
};

function notDone(){
    alert("This page is under construction.");
}