//Changes the colour of the buttons depending on where you are. 
//Need this because you can't see black on black
$(window).scroll(function() {
    let buttons = document.getElementsByClassName('buttons');
    if ($(this).scrollTop() >= screen.height*0.75) {
        for (let i = 0; i < buttons.length; i++){
            buttons[i].style.color = 'rgb(255,255,255)';
            buttons[i].style.color = 'rgb(255,255,255)';
        }
    }
    else {
        for (let i = 0; i < buttons.length; i++){
            buttons[i].style.color = '#343038';
        }
    }
});

//Parallax function. This handles all of them
function parallax(){
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

//On startup, disable scrolling
function startUp(){
    $('body').css({'overflow':'hidden'});
    $(document).bind('scroll',function () { 
         window.scrollTo(0,0); 
    });
    let invis = document.getElementsByClassName('invisible');
    for (let i = 0; i < invis.length; i++){
        invis[i].style.opacity = "0";
    }
}

//Enable scrolling and animate to home screen
function welcome(){
    let stuff = document.getElementsByClassName('invisible');
    
    //Fade in and other animations
    for (let i = 0; i < stuff.length; i++){
        stuff[i].style.visibility = "visible";
        opacity = 0;
        intervalID = setInterval(function() {
            if (opacity < 1) {
                opacity = opacity + 0.001
                stuff[i].style.opacity = opacity;
            } else {
                clearInterval(intervalID);
            }
        }, 10);
    }
    //Hide the original button
    let stuff2 = document.getElementById('start');
    stuff2.style.visibility = "hidden";
    stuff2.style.opacity = '0';

    $(document).unbind('scroll'); 
    $('body').css({'overflow-y':'visible'});
}

//Multiple scrolling functions
function toHome(){
    window.scrollTo(0,0);
};

function toAbout(){
    window.scrollTo(0,screen.height);
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