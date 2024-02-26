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

document.addEventListener("DOMContentLoaded", function () {
    var headingElement = document.getElementById("typing-heading");

    var headingText = headingElement.innerText;
  
    headingElement.innerHTML = "";
  
    for (var i = 0; i < headingText.length; i++) {
      setTimeout(function (index) {
       // Rimuovi il trattino (_) precedente, se presente
       if(headingElement.querySelector('.blink') != null){
        headingElement.querySelector('.blink').remove();
       }

       // Aggiungi la lettera corrente
       headingElement.innerHTML += headingText[index];

       // Aggiungi il nuovo trattino (_) alla fine
       headingElement.innerHTML += '<span class="blink">_</span>';
      }, i * 200, i);
    }
  });

// function for show dropdown language menu
function langueges() {
    document.getElementById("myDropdown").classList.toggle("show");
};

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("menu-fade");
    var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
};

  //change language text
  function toggleText(lang_btn) {
    var el = document.getElementById(lang_btn);
    var btn = document.getElementById("lang_btn_gen");
    if (el.value === "IT"){
        btn.firstChild.data = "IT";
    }else if (el.value === "EN"){
        btn.firstChild.data = "EN";
    } else if (el.value === "FR"){
        btn.firstChild.data = "FR";
    }
}
  
//for show drop menu
let dropdown = document.querySelector(".dropdown")
dropdown.onclick = function() {
    dropdown.classList.toggle("active")
}

// Funzione per animare il div con il salto e la rotazione
function animateDiv() {
    const divElement = document.getElementById("cv");
    divElement.style.animation = "jumpAndRotate 1s ease-in-out";
    
    // Rimuovere la classe di animazione dopo che l'animazione è terminata
    setTimeout(() => {
      divElement.style.animation = "";
    }, 1000); // 1000ms = 1 secondo
  }
  
  // Impostare l'intervallo per l'animazione ogni 2 secondi
  setInterval(animateDiv, 3500); // 2000ms = 2 secondi

  function animateDonation(){
    const divElement = document.getElementById("dona");
    divElement.style.animation = "pulseAnimation 0.5s linear";
    
    setTimeout(() => {
      divElement.style.animation = "";
    }, 1000); // 1000ms = 1 secondo
  }

  setInterval(animateDonation, 2000);


function show(value) {
document.querySelector(".text-box").value = value;

const lang = value;

fetch('json/text.json')
.then(response => response.json())
.then(data => {
    document.getElementById('welcome').innerHTML = data[lang].welcome;
    document.getElementById('demo').innerHTML = data[lang].aboutMe;
    //document.getElementById('competencesTitle').innerHTML = data[lang].competencesTitle;
    document.getElementById('donations').innerHTML =  data[lang].donations;
    document.getElementById('flashapp').innerHTML = data[lang].flashApp;
    document.getElementById('proflife').innerHTML =  data[lang].profile;
    document.getElementById('cv').innerHTML =  data[lang].myCV;
    document.getElementById('cv').href = data[lang].cvLink;
    document.getElementById('javaemailprovider').innerHTML = data[lang].javaEmailProvider;
    document.getElementById('rytm').innerHTML = data[lang].RYTM;
    document.getElementById('emerge').innerHTML = data[lang].EmergeMobile;
})
.catch(error => console.error('Errore nel caricamento del file JSON:', error));
}

/* Istruzioni form */
document.getElementById("email").addEventListener("input", validateForm);
document.getElementById("message").addEventListener("input", validateForm);

// Funzione per abilitare/disabilitare il pulsante di invio
function validateForm() {
    var emailValue = document.getElementById("email").value;
    var messageValue = document.getElementById("message").value;
    var submitBtn = document.getElementById("submitBtn");

    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var isEmailValid = emailRegex.test(emailValue);

    // Abilita il pulsante solo se entrambi i campi sono stati compilati
    if (emailValue.trim() !== "" && messageValue.trim() !== "" && isEmailValid) {
        submitBtn.disabled = false;
    } else {
        submitBtn.disabled = true;
    }
}

  
/*window.addEventListener('scroll', function() {
    var background = document.getElementById("background");
    
    if (window.scrollY >= 0 && window.scrollY <= 700) {
      background.style.opacity = 0;
      background.classList.add("blink-out");
    } else if (window.scrollY > 700 && window.scrollY <= 1200) {
      background.classList.add("blink-in"); 
      background.classList.remove("blink-out");
      background.style.opacity = 1;
    } else if (window.scrollY > 1200 && window.scrollY <= 2000) {
      background.classList.remove("blink-in");
      background.classList.add("blink-out");
      background.style.opacity = 0;
    } else if (window.scrollY > 2000) {
      background.classList.add("blink-in");
      background.classList.remove("blink-out");
      background.style.opacity = 1;
    }
  });*/