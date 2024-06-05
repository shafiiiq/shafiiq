function observeMediaQuery(comes) {
    console.log(comes);
    if (comes.matches) {
        console.log("yes");
        // for service section 

        // services item hover animation 
        document.getElementById('hover-1').addEventListener('mouseenter', function () {
            document.querySelector('.focuser').style.transform = "translateY(0)";
        })

        document.getElementById('hover-2').addEventListener('mouseenter', function () {
            document.querySelector('.focuser').style.transform = "translateY(13rem)";
        })

        document.getElementById('hover-3').addEventListener('mouseenter', function () {
            document.querySelector('.focuser').style.transform = "translateY(26rem)";
            document.querySelector('.sl').style.color = "var(--white-clr)";
        })

        document.getElementById('hover-4').addEventListener('mouseenter', function () {
            document.querySelector('.focuser').style.transform = "translateY(39rem)";
            document.querySelector('.sl').style.color = "var(--white-clr)";
        })


    } else {
        console.log("no");
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

    }
}

var comes = window.matchMedia("(max-width: 700px)")


observeMediaQuery(comes);
comes.addEventListener("change", function () {
    observeMediaQuery(comes)
})
// end of the service section 

// ----------------------------------------------------------------------------------------------------------------------------------------------

// scroll detection for  animation 

window.addEventListener('scroll', function () {
    var scrollY = window.scrollY || window.pageYOffset;

    if (scrollY >= 890 || scrollY < 70) {
        document.querySelectorAll('.countSlow').forEach(function (element) {
            element.classList.remove('countAnimSlow');
        });
        document.querySelectorAll('.countFast').forEach(function (element) {
            element.classList.remove('countAnimFast');
        });
    }


    // custom circle scrollbae animation 
    if (scrollY >= 910) {
        document.querySelector('.circle-wrapper').classList.add('circle-bar-anim-comes');
        document.querySelector('.circle-wrapper').classList.remove('circle-bar-anim-goes');
    } else {
        document.querySelector('.circle-wrapper').classList.remove('circle-bar-anim-comes');
        document.querySelector('.circle-wrapper').classList.add('circle-bar-anim-goes');
    }

    // -----------------------------------------------------------------------------------------------------------------------------------------

    // animated header animation 
    if (scrollY >= 890) {
        document.querySelector('.animated-header').classList.remove('headerOut');
        document.querySelector('.animated-header').classList.add('headerIn');
    } else {
        document.querySelector('.animated-header').classList.add('headerOut');
        document.querySelector('.animated-header').classList.remove('headerIn');
    }

    // -------------------------------------------------------------------------------------------------------------------------------------- 

    // servie body focuser animation 
    let focuser = document.querySelector('.focuser');

    function observeChange(changes) {
        if (changes.matches) {
            if (scrollY < 787 || scrollY > 1300) {
                focuser.style.transform = "translateY(0)";
            } else if (scrollY > 877 && scrollY < 1000) {
                focuser.style.transform = "translateY(13rem)";
            } else if (scrollY > 1000 && scrollY < 1100) {
                focuser.style.transform = "translateY(26rem)";
            } else if (scrollY > 1100) {
                focuser.style.transform = "translateY(39rem)";
            }
        } else {
            if (scrollY < 787 || scrollY > 1500) {
                focuser.style.transform = "translateY(0)";
            } else if (scrollY > 877 && scrollY < 1000) {
                focuser.style.transform = "translateY(8rem)";
            } else if (scrollY > 1000 && scrollY < 1400) {
                focuser.style.transform = "translateY(16rem)";
            } else if (scrollY > 1400) {
                focuser.style.transform = "translateY(24rem)";
            }
        }
    }

    var changes = window.matchMedia("(max-width: 700px)")
    observeChange(changes);

    changes.addEventListener("change", function() {
        observeChange(changes)
    })


    // end of the service section 

    // -----------------------------------------------------------------------------------------------------------------------------------------

    // starts the my works section 

    // animation for recent works items 
    function observeMedia(entry) {
        if (entry.matches) {
            if (scrollY >= 1380) {
                document.querySelectorAll('.recent-works .item').forEach(function (element) {
                    element.classList.add('recent-anim');
                });
            } else if (scrollY <= 1760) {
                document.querySelectorAll('.recent-works .item').forEach(function (element) {
                    element.classList.remove('recent-anim');
                });
            }
        } else {
            if (scrollY >= 1780) {
                document.querySelectorAll('.recent-works .item').forEach(function (element) {
                    element.classList.add('recent-anim');
                });
            } else if (scrollY <= 1660) {
                document.querySelectorAll('.recent-works .item').forEach(function (element) {
                    element.classList.remove('recent-anim');
                });
            }
        }
    }

    var entry = window.matchMedia("(max-width: 900px)")


    observeMedia(entry);
    entry.addEventListener("change", function () {
        observeMedia(entry)
    })
    // end of the recent works section 
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

        // counter animation slow 
        else if (entry.target.classList.contains('countSlow')) {
            if (entry.isIntersecting) {
                entry.target.classList.add('countAnimSlow');
            }
        }

        // counter animation slow 
        else if (entry.target.classList.contains('countFast')) {
            if (entry.isIntersecting) {
                entry.target.classList.add('countAnimFast');
            }
        }

        // zoom in animation 
        else if (entry.target.classList.contains('zoomIn')) {
            if (entry.isIntersecting) {
                // entry.target.classList.remove('comeOut');
                entry.target.classList.add('comeIn');
            } else {
                entry.target.classList.remove('comeIn');
                // entry.target.classList.add('comeOut');
            }
        }

        // zoom in animation 
        else if (entry.target.classList.contains('zoomOut')) {
            if (entry.isIntersecting) {
                // entry.target.classList.remove('comeOut');
                entry.target.classList.add('goIn');
            } else {
                entry.target.classList.remove('goIn');
                // entry.target.classList.add('comeOut');
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

// counter animation 
const counterSlow = document.querySelectorAll('.countSlow');
counterSlow.forEach(element => {
    windowObserver.observe(element);
});

const counterFast = document.querySelectorAll('.countFast');
counterFast.forEach(element => {
    windowObserver.observe(element);
});

const zoomIn = document.querySelectorAll('.zoomIn');
zoomIn.forEach(element => {
    windowObserver.observe(element);
});

const zoomOut = document.querySelectorAll('.zoomOut');
zoomOut.forEach(element => {
    windowObserver.observe(element);
});


// --------------------------------------------------------------------------------------------------------

// recent works section all corousle item prev and next action listner function

// for all 
const slider = document.querySelector('.slider');
const sliderItems = document.querySelectorAll('.slider-item');
let currentIndex = 0;
const gap = 3 * 16; // 3rem gap in pixels (1rem = 16px)

function allPrev() {
    const sliderItemWidth = sliderItems[0].offsetWidth + gap; // Include the gap
    currentIndex = (currentIndex - 1 + sliderItems.length) % sliderItems.length;
    const offset = -currentIndex * sliderItemWidth;
    slider.style.transition = 'transform 0.5s ease-in-out';
    slider.style.transform = `translateX(${offset}px)`;
}

function allNext() {
    const sliderItemWidth = sliderItems[0].offsetWidth + gap; // Include the gap
    currentIndex = (currentIndex + 1) % sliderItems.length;
    const offset = -currentIndex * sliderItemWidth;
    slider.style.transition = 'transform 0.5s ease-in-out';
    slider.style.transform = `translateX(${offset}px)`;
}

// for ui ux 
const uiSlider = document.querySelector('.ui-slider');
const uiSliderItems = document.querySelectorAll('.ui-slider-item');
let uiCurrentIndex = 0;
const uiGap = 3 * 16; // 3rem gap in pixels (1rem = 16px)

function uiPrev() {
    const sliderItemWidth = uiSliderItems[0].offsetWidth + uiGap; // Include the gap
    uiCurrentIndex = (uiCurrentIndex - 1 + uiSliderItems.length) % uiSliderItems.length;
    const offset = -uiCurrentIndex * sliderItemWidth;
    uiSlider.style.transition = 'transform 0.5s ease-in-out';
    uiSlider.style.transform = `translateX(${offset}px)`;
}

function uiNext() {
    const sliderItemWidth = uiSliderItems[0].offsetWidth + uiGap; // Include the gap
    uiCurrentIndex = (uiCurrentIndex + 1) % uiSliderItems.length;
    const offset = -uiCurrentIndex * sliderItemWidth;
    uiSlider.style.transition = 'transform 0.5s ease-in-out';
    uiSlider.style.transform = `translateX(${offset}px)`;
}

// for branding 
const brandingSlider = document.querySelector('.branding-slider');
const brandingSliderItems = document.querySelectorAll('.branding-slider-item');
let brandingCurrentIndex = 0;
const brandingGap = 3 * 16; // 3rem gap in pixels (1rem = 16px)

function brandingPrev() {
    const sliderItemWidth = brandingSliderItems[0].offsetWidth + brandingGap;
    brandingCurrentIndex = (brandingCurrentIndex - 1 + brandingSliderItems.length) % brandingSliderItems.length;
    const offset = -brandingCurrentIndex * sliderItemWidth;
    brandingSlider.style.transition = 'transform 0.5s ease-in-out';
    brandingSlider.style.transform = `translateX(${offset}px)`;
}

function brandingNext() {
    const sliderItemWidth = brandingSliderItems[0].offsetWidth + brandingGap;
    brandingCurrentIndex = (brandingCurrentIndex + 1) % brandingSliderItems.length;
    const offset = -brandingCurrentIndex * sliderItemWidth;
    brandingSlider.style.transition = 'transform 0.5s ease-in-out';
    brandingSlider.style.transform = `translateX(${offset}px)`;
}

// recent works section all corousle item prev and next action listner function ends

// -----------------------------------------------------------------------------------------------------------------------------------------

// header ul li focuser animation while click  
document.querySelector('.nav-home').addEventListener('click', function () {
    document.querySelector('.home-focuser').style.opacity = '1';
    document.querySelector('.service-focuser').style.opacity = '0';
    document.querySelector('.works-focuser').style.opacity = '0';
    document.querySelector('.resume-focuser').style.opacity = '0';
    document.querySelector('.skills-focuser').style.opacity = '0';
    document.querySelector('.contact-focuser').style.opacity = '0';
});


document.querySelector('.nav-service').addEventListener('click', function () {
    document.querySelector('.service-focuser').style.opacity = '1';
    document.querySelector('.home-focuser').style.opacity = '0';
    document.querySelector('.works-focuser').style.opacity = '0';
    document.querySelector('.resume-focuser').style.opacity = '0';
    document.querySelector('.skills-focuser').style.opacity = '0';
    document.querySelector('.contact-focuser').style.opacity = '0';
});

document.querySelector('.nav-works').addEventListener('click', function () {
    document.querySelector('.works-focuser').style.opacity = '1';
    document.querySelector('.service-focuser').style.opacity = '0';
    document.querySelector('.home-focuser').style.opacity = '0';
    document.querySelector('.resume-focuser').style.opacity = '0';
    document.querySelector('.skills-focuser').style.opacity = '0';
    document.querySelector('.contact-focuser').style.opacity = '0';
});


document.querySelector('.nav-resume').addEventListener('click', function () {
    document.querySelector('.resume-focuser').style.opacity = '1';
    document.querySelector('.skills-focuser').style.opacity = '0';
    document.querySelector('.service-focuser').style.opacity = '0';
    document.querySelector('.home-focuser').style.opacity = '0';
    document.querySelector('.works-focuser').style.opacity = '0';
    document.querySelector('.contact-focuser').style.opacity = '0';
});

document.querySelector('.nav-skills').addEventListener('click', function () {
    document.querySelector('.skills-focuser').style.opacity = '1';
    document.querySelector('.service-focuser').style.opacity = '0';
    document.querySelector('.home-focuser').style.opacity = '0';
    document.querySelector('.works-focuser').style.opacity = '0';
    document.querySelector('.resume-focuser').style.opacity = '0';
    document.querySelector('.contact-focuser').style.opacity = '0';
});


document.querySelector('.nav-contact').addEventListener('click', function () {
    document.querySelector('.contact-focuser').style.opacity = '1';
    document.querySelector('.service-focuser').style.opacity = '0';
    document.querySelector('.home-focuser').style.opacity = '0';
    document.querySelector('.works-focuser').style.opacity = '0';
    document.querySelector('.resume-focuser').style.opacity = '0';
    document.querySelector('.skills-focuser').style.opacity = '0';
});
// header ul li focuser animation while click  ends 

// -----------------------------------------------------------------------------------------------------------------------------------------

// nav ul focuser aniamtion while scrolling
document.addEventListener('DOMContentLoaded', function () {
    const homeSection = document.getElementById('home');
    const workSection = document.getElementById('recent-works');
    const resumeSection = document.getElementById('resume');
    const skillsSection = document.getElementById('skills');
    const serviceSection = document.getElementById('service');
    const contactSection = document.getElementById('contact');

    function handleIntersection(entries, observer, focuserSelector) {
        const entry = entries[0];
        if (entry.isIntersecting) {
            document.querySelector(focuserSelector).style.opacity = '1';
            document.querySelector('.home-focuser').style.display = 'none';
        } else {
            document.querySelector(focuserSelector).style.opacity = '0';
        }
    }

    const remToPixels = parseFloat(getComputedStyle(document.documentElement).fontSize);
    const remRootMargin = -11 * remToPixels;

    const options = {
        rootMargin: `${remRootMargin}px`
    };

    const serviceObserver = new IntersectionObserver(entries => handleIntersection(entries, serviceObserver, '.service-focuser'), options);
    serviceObserver.observe(serviceSection);

    const workObserver = new IntersectionObserver(entries => handleIntersection(entries, workObserver, '.works-focuser'), options);
    workObserver.observe(workSection);

    const resumeObserver = new IntersectionObserver(entries => handleIntersection(entries, resumeObserver, '.resume-focuser'), options);
    resumeObserver.observe(resumeSection);

    const skillsObserver = new IntersectionObserver(entries => handleIntersection(entries, skillsObserver, '.skills-focuser'), options);
    skillsObserver.observe(skillsSection);

    const contactObserver = new IntersectionObserver(entries => handleIntersection(entries, contactObserver, '.contact-focuser'), options);
    contactObserver.observe(contactSection);
});
// nav ul focuser aniamtion while scrolling ends









// ----------------------------------------------------------  ended the shafiiq portfolio js succesfully ----------------------------------------------------------- 