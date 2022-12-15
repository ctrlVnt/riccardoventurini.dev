window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 72,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

function validateContactForm() {
	var valid = true;

	$(".info").html("");
	$(".input-field").css('border', '#e0dfdf 1px solid');
	var userName = $("#userName").val();
	var userEmail = $("#userEmail").val();
	var subject = $("#subject").val();
	var content = $("#content").val();

	if (userName == "") {
		$("#userName-info").html("Required.");
		$("#userName").css('border', '#e66262 1px solid');
		valid = false;
	}
	if (userEmail == "") {
		$("#userEmail-info").html("Required.");
		$("#userEmail").css('border', '#e66262 1px solid');
		valid = false;
	}
	if (!userEmail.match(/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/)) {
		$("#userEmail-info").html("Invalid Email Address.");
		$("#userEmail").css('border', '#e66262 1px solid');
		valid = false;
	}

	if (subject == "") {
		$("#subject-info").html("Required.");
		$("#subject").css('border', '#e66262 1px solid');
		valid = false;
	}
	if (content == "") {
		$("#userMessage-info").html("Required.");
		$("#content").css('border', '#e66262 1px solid');
		valid = false;
	}
	return valid;
}