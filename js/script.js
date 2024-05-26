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

window.addEventListener('scroll', function () {
    var scrollY = window.scrollY || window.pageYOffset;

    // console.log(scrollY);

    // animated header animation 
    if (scrollY >= 910) {
        document.querySelector('.animated-header').classList.remove('headerOut');
        document.querySelector('.animated-header').classList.add('headerIn');
    } else {
        document.querySelector('.animated-header').classList.add('headerOut');
        document.querySelector('.animated-header').classList.remove('headerIn');
    }

    // servie h1 animation 
    if (scrollY >= 500) {
        document.querySelector('.service-h1').classList.remove('service-h1-animDown');
        document.querySelector('.service-h1').classList.add('service-h1-animUp');
    } else {
        document.querySelector('.service-h1').classList.remove('service-h1-animUp');
        document.querySelector('.service-h1').classList.add('service-h1-animDown');
    }

    // servie p animation 
    if (scrollY >= 570) {
        document.querySelector('.service-p').classList.remove('service-p-animDown');
        document.querySelector('.service-p').classList.add('service-p-animUp');
    } else {
        document.querySelector('.service-p').classList.remove('service-p-animUp');
        document.querySelector('.service-p').classList.add('service-p-animDown');
    }

    // service item one by one animation 

    // item 1 
    if (scrollY >= 600) {
        document.getElementById('hover-1').classList.remove('animDown1');
        document.getElementById('hover-1').classList.add('animUp1');
    } else {
        document.getElementById('hover-1').classList.remove('animUp1')
        document.getElementById('hover-1').classList.add('animDown1')
    }

    // item 2 
    if (scrollY >= 680) {
        document.getElementById('hover-2').classList.remove('animDown2');
        document.getElementById('hover-2').classList.add('animUp2');
    } else {
        document.getElementById('hover-2').classList.remove('animUp2')
        document.getElementById('hover-2').classList.add('animDown2')
    }

    // item 3 
    if (scrollY >= 820) {
        document.getElementById('hover-3').classList.remove('animDown3');
        document.getElementById('hover-3').classList.add('animUp3');
    } else {
        document.getElementById('hover-3').classList.remove('animUp3')
        document.getElementById('hover-3').classList.add('animDown3')
    }

    // item 4 
    if (scrollY >= 920) {
        document.getElementById('hover-4').classList.remove('animDown4');
        document.getElementById('hover-4').classList.add('animUp4');
    } else {
        document.getElementById('hover-4').classList.remove('animUp4')
        document.getElementById('hover-4').classList.add('animDown4')
    }
    // ends of items animation 

    // servie body focuser animation 
    let focuser = document.querySelector('.focuser');

    if (scrollY < 777 || scrollY > 1500) {
        focuser.style.transform = "translateY(0)";
    } else if (scrollY > 777 && scrollY < 1000) {
        focuser.style.transform = "translateY(8rem)";
    } else if (scrollY > 1000 && scrollY < 1400) {
        focuser.style.transform = "translateY(16rem)";
    } else if (scrollY > 1400) {
        focuser.style.transform = "translateY(24rem)";
    }


});


document.addEventListener('DOMContentLoaded', function() {
    var recentFocuser = document.querySelector('.recent-focuser');
    var all = document.querySelector('.all');
    var uiUx = document.querySelector('.ux-ui');
    var branding = document.querySelector('.branding');
    var apps = document.querySelector('.apps');
    
    document.getElementById('all').addEventListener('click', function() {
        recentFocuser.style.transform = "translateX(0)";
        uiUx.style.display = "none";
        branding.style.display = "none";
        apps.style.display = "none";
        all.style.display = "grid";
    });

    document.getElementById('ux-ui').addEventListener('click', function() {
        recentFocuser.style.transform = "translateX(7rem)";
        all.style.display = "none";
        branding.style.display = "none";
        apps.style.display = "none";
        uiUx.style.display = "grid";

        var items = document.querySelectorAll('.ux-ui .item');
        items.forEach(function(item) {
            item.classList.add('recent-anim');
        });
    });

    document.getElementById('branding').addEventListener('click', function() {
        recentFocuser.style.transform = "translateX(14rem)";
        all.style.display = "none";
        uiUx.style.display = "none";
        apps.style.display = "none";
        branding.style.display = "grid";

        var items = document.querySelectorAll('.branding .item');
        items.forEach(function(item) {
            item.classList.add('recent-anim');
        });
    });

    document.getElementById('apps').addEventListener('click', function() {
        recentFocuser.style.transform = "translateX(21rem)";
        all.style.display = "none";
        uiUx.style.display = "none";
        branding.style.display = "none";
        apps.style.display = "grid";

        var items = document.querySelectorAll('.apps .item');
        items.forEach(function(item) {
            item.classList.add('recent-anim');
        });
    });
});
