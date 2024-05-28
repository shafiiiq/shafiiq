// for service section 

// services item hover animation 
document.getElementById('hover-1').addEventListener('mouseenter', function () {
    document.querySelector('.focuser').style.transform = "translateY(0)";
})

document.getElementById('hover-2').addEventListener('mouseenter', function () {
    document.querySelector('.focuser').style.transform = "translateY(8rem)";
})

document.getElementById('hover-3').addEventListener('mouseenter', function () {
    document.querySelector('.focuser').style.transform = "translateY(16rem)";
    document.querySelector('.sl').style.color = "var(--white-clr)";
})

document.getElementById('hover-4').addEventListener('mouseenter', function () {
    document.querySelector('.focuser').style.transform = "translateY(24rem)";
    document.querySelector('.sl').style.color = "var(--white-clr)";
})
// end of the service section 

// ----------------------------------------------------------------------------------------------------------------------------------------------

// scroll detection for  animation 

window.addEventListener('scroll', function () {
    var scrollY = window.scrollY || window.pageYOffset;

    // log 
    // console.log(scrollY);

    // custom circle scrollbat animation 
    if (scrollY >= 910) {
        document.querySelector('.circle-wrapper').classList.add('circle-bar-anim-comes');
        document.querySelector('.circle-wrapper').classList.remove('circle-bar-anim-goes');
    } else {
        document.querySelector('.circle-wrapper').classList.remove('circle-bar-anim-comes');
        document.querySelector('.circle-wrapper').classList.add('circle-bar-anim-goes');
    }

    // -----------------------------------------------------------------------------------------------------------------------------------------

    // animated header animation 
    if (scrollY >= 910) {
        document.querySelector('.animated-header').classList.remove('headerOut');
        document.querySelector('.animated-header').classList.add('headerIn');
    } else {
        document.querySelector('.animated-header').classList.add('headerOut');
        document.querySelector('.animated-header').classList.remove('headerIn');
    }

    // -------------------------------------------------------------------------------------------------------------------------------------- 

    // service section starts  

    // servie h1 animation 
    if (scrollY >= 520) {
        document.querySelector('.service-h1').classList.remove('downOut');
        document.querySelector('.service-h1').classList.add('downIn');
    } else {
        document.querySelector('.service-h1').classList.remove('downIn');
        document.querySelector('.service-h1').classList.add('downOut');
    }

    // servie p animation 
    if (scrollY >= 580) {
        document.querySelector('.service-p').classList.remove('downOut');
        document.querySelector('.service-p').classList.add('downIn');
    } else {
        document.querySelector('.service-p').classList.remove('downIn');
        document.querySelector('.service-p').classList.add('downOut');
    }

    // service item one by one animation 

    // item 1 
    if (scrollY >= 780) {
        document.getElementById('hover-1').classList.remove('downOut');
        document.getElementById('hover-1').classList.add('downIn');

        // intialy focuser on item one so animated that initialy 
        // if (scrollY == 620) {
        //     document.querySelector('.focuser').classList.remove('downOut');
        //     document.querySelector('.focuser').classList.add('downIn');
        // } else if (scrollY < 620){
        //     document.querySelector('.focuser').classList.remove('downIn')
        //     document.querySelector('.focuser').classList.add('downOut')
        // } else if (scrollY > 630) {
        //     document.querySelector('.focuser').classList.remove('downIn')
        //     document.querySelector('.focuser').classList.remove('downOut')
        // }

    } else {
        document.getElementById('hover-1').classList.remove('downIn')
        document.getElementById('hover-1').classList.add('downOut')
    }

    // item 2 
    if (scrollY >= 840) {
        document.getElementById('hover-2').classList.remove('downOut');
        document.getElementById('hover-2').classList.add('downIn');
    } else {
        document.getElementById('hover-2').classList.remove('downIn')
        document.getElementById('hover-2').classList.add('downOut')
    }

    // item 3 
    if (scrollY >= 890) {
        document.getElementById('hover-3').classList.remove('downOut');
        document.getElementById('hover-3').classList.add('downIn');
    } else {
        document.getElementById('hover-3').classList.remove('downIn')
        document.getElementById('hover-3').classList.add('downOut')
    }

    // item 4 
    if (scrollY >= 930) {
        document.getElementById('hover-4').classList.remove('downOut');
        document.getElementById('hover-4').classList.add('downIn');
    } else {
        document.getElementById('hover-4').classList.remove('downIn')
        document.getElementById('hover-4').classList.add('downOut')
    }
    // ends of items animation 

    // servie body focuser animation 
    let focuser = document.querySelector('.focuser');

    if (scrollY < 787 || scrollY > 1500) {
        focuser.style.transform = "translateY(0)";
    } else if (scrollY > 877 && scrollY < 1000) {
        focuser.style.transform = "translateY(8rem)";
    } else if (scrollY > 1000 && scrollY < 1400) {
        focuser.style.transform = "translateY(16rem)";
    } else if (scrollY > 1400) {
        focuser.style.transform = "translateY(24rem)";
    }

    // end of the service section 

    // -----------------------------------------------------------------------------------------------------------------------------------------

    // starts the my works section 

    // animation for h1 
    if (scrollY >= 1600) {
        document.getElementById('works-h1').classList.remove('downOut');
        document.getElementById('works-h1').classList.add('downIn');
    } else {
        document.getElementById('works-h1').classList.remove('downIn')
        document.getElementById('works-h1').classList.add('downOut')
    }

    // animation for p 
    if (scrollY >= 1610) {
        document.getElementById('works-p').classList.remove('downOut');
        document.getElementById('works-p').classList.add('downIn');
    } else {
        document.getElementById('works-p').classList.remove('downIn')
        document.getElementById('works-p').classList.add('downOut')
    }

    // animation for ul navigation 
    if (scrollY >= 1720) {
        document.getElementById('works-ul').classList.remove('downOut');
        document.getElementById('works-ul').classList.add('downIn');
    } else {
        document.getElementById('works-ul').classList.remove('downIn')
        document.getElementById('works-ul').classList.add('downOut')
    }

    // animation for items 
    if (scrollY >= 1860) {
        document.querySelectorAll('.recent-works .item').forEach(function (element) {
            element.classList.add('recent-anim');
        });
    } else if (scrollY <= 1660) {
        document.querySelectorAll('.recent-works .item').forEach(function (element) {
            element.classList.remove('recent-anim');
        });
    }
    // end of the recent works section 

    // ----------------------------------------------------------------

    // start of the resume section 

    // animation for resume h1 
    if (scrollY >= 3440) {
        document.querySelectorAll('.resume-h1').forEach(function (element) {
            element.classList.remove('downOut');
            element.classList.add('downIn');
        });
    } else {
        document.querySelectorAll('.resume-h1').forEach(function (element) {
            element.classList.remove('downIn');
            element.classList.add('downOut');
        });
    }

    if (scrollY >= 3580) {
        document.querySelectorAll('.resume-left').forEach(function (element) {
            element.classList.remove('leftOut');
            element.classList.add('leftIn');
        });
        document.querySelectorAll('.resume-right').forEach(function (element) {
            element.classList.remove('rightOut');
            element.classList.add('rightIn');
        });
    } else {
        document.querySelectorAll('.resume-left').forEach(function (element) {
            element.classList.remove('leftIn');
            element.classList.add('leftOut');
        });
        document.querySelectorAll('.resume-right').forEach(function (element) {
            element.classList.remove('rightIn');
            element.classList.add('rightOut');
        });
    }

    // next two sets 
    if (scrollY >= 3780) {
        document.querySelectorAll('.resume-left-1').forEach(function (element) {
            element.classList.remove('leftOut');
            element.classList.add('leftIn');
        });
        document.querySelectorAll('.resume-right-1').forEach(function (element) {
            element.classList.remove('rightOut');
            element.classList.add('rightIn');
        });
    } else {
        document.querySelectorAll('.resume-left-1').forEach(function (element) {
            element.classList.remove('leftIn');
            element.classList.add('leftOut');
        });
        document.querySelectorAll('.resume-right-1').forEach(function (element) {
            element.classList.remove('rightIn');
            element.classList.add('rightOut');
        });
    }

});
// end of the window scroll detection for animation 

// -------------------------------------------------------------------------------------------------------------------------------------------

// resume section navigtion animation and navigation click listening changes 
document.addEventListener('DOMContentLoaded', function () {
    var recentFocuser = document.querySelector('.recent-focuser');
    var all = document.querySelector('.all');
    var uiUx = document.querySelector('.ux-ui');
    var branding = document.querySelector('.branding');
    var apps = document.querySelector('.apps');

    document.getElementById('all').addEventListener('click', function () {
        recentFocuser.style.transform = "translateX(0)";
        uiUx.style.display = "none";
        branding.style.display = "none";
        apps.style.display = "none";
        all.style.display = "grid";
    });

    document.getElementById('ux-ui').addEventListener('click', function () {
        recentFocuser.style.transform = "translateX(7rem)";
        all.style.display = "none";
        branding.style.display = "none";
        apps.style.display = "none";
        uiUx.style.display = "grid";

        var items = document.querySelectorAll('.ux-ui .item');
        items.forEach(function (item) {
            item.classList.add('recent-anim');
        });
    });

    document.getElementById('branding').addEventListener('click', function () {
        recentFocuser.style.transform = "translateX(14rem)";
        all.style.display = "none";
        uiUx.style.display = "none";
        apps.style.display = "none";
        branding.style.display = "grid";

        var items = document.querySelectorAll('.branding .item');
        items.forEach(function (item) {
            item.classList.add('recent-anim');
        });
    });

    document.getElementById('apps').addEventListener('click', function () {
        recentFocuser.style.transform = "translateX(21rem)";
        all.style.display = "none";
        uiUx.style.display = "none";
        branding.style.display = "none";
        apps.style.display = "grid";

        var items = document.querySelectorAll('.apps .item');
        items.forEach(function (item) {
            item.classList.add('recent-anim');
        });
    });
});

// --------------------------------------------------------------------------------------------------------------------------------------------

// custom circle scroll bar 
document.addEventListener('scroll', function () {
    const scrollTop = window.scrollY;
    const docHeight = document.body.scrollHeight - window.innerHeight;
    const scrollFraction = scrollTop / docHeight;
    const strokeDashoffsetValue = 219.9 - (219.9 * scrollFraction);

    document.querySelector('.path').style.strokeDashoffset = strokeDashoffsetValue;
});


// -----------------------------------------  ended the shafiiq portfolio js succesfully ------------------------------------------- 


// All window scroll animation
const windowObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {

        // Move up animation 
        if (entry.target.classList.contains('moveUp')) {
            if (entry.isIntersecting) {
                entry.target.classList.remove('downOut');
                entry.target.classList.add('downIn');
            } else {
                entry.target.classList.remove('downIn');
                entry.target.classList.add('downOut');
            }
        } 

        // Move down animation 
        else if (entry.target.classList.contains('moveDown')) {
            if (entry.isIntersecting) {
                entry.target.classList.remove('upOut');
                entry.target.classList.add('upIn');
            } else {
                entry.target.classList.remove('upIn');
                entry.target.classList.add('upOut');
            }
        }

        // Move right animation 
        else if (entry.target.classList.contains('moveRight')) {
            if (entry.isIntersecting) {
                entry.target.classList.remove('leftOut');
                entry.target.classList.add('leftIn');
            } else {
                entry.target.classList.remove('leftIn');
                entry.target.classList.add('leftOut');
            }
        }

        // Move left animation 
        else if (entry.target.classList.contains('moveLeft')) {
            if (entry.isIntersecting) {
                entry.target.classList.remove('rightOut');
                entry.target.classList.add('rightIn');
            } else {
                entry.target.classList.remove('rightIn');
                entry.target.classList.add('rightOut');
            }
        }
    });
});

// Observe elements with animation classes
const moveUp = document.querySelectorAll('.moveUp');
moveUp.forEach(element => {
    windowObserver.observe(element);
});

const moveDown = document.querySelectorAll('.moveDown');
moveDown.forEach(element => {
    windowObserver.observe(element);
});

const moveLeft = document.querySelectorAll('.moveLeft');
moveLeft.forEach(element => {
    windowObserver.observe(element);
});

const moveRight = document.querySelectorAll('.moveRight');
moveRight.forEach(element => {
    windowObserver.observe(element);
});

