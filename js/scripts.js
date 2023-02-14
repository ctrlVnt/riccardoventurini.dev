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

// function for show dropdown language menu
function langueges() {
    document.getElementById("myDropdown").classList.toggle("show");
};

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-menu");
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






//show language text
function show(value) {
    document.querySelector(".text-box").value = value;

    if(value == 'EN'){

        document.getElementById("demo").innerHTML = "<h5>Welcome!</h5>\n\
        I'm Riccardo and I'm currently a computer science student at the faculty of\n\
        studies in Turin, the city where I come from.<br>\n\
        I decided to pursue my career in this area because I strongly believe\n\
        in the impact that virtual means are having in the daily life of all of us.\n\
        I often like to compare the figure of the programmer to that of a small inventor,\n\
        able to create something functional and have full control over it.<br>\n\
        On this platform I will publish projects that I work on during my free time and for university.<br><br>\n\
        My skill:";

        document.getElementById("proflife").innerHTML = "To find out more about my professional life:";

        document.getElementById("flashapp").innerHTML = "<b>FlashApp</b> is a learning aid application.<br>\n\
        The app allows you to create decks of cards (flashcards): each card has a space for the question and one for the answer.\n\
        It will be the user who creates the cards, in fact in order to play it is necessary to have created at least one card.<br>\n\
        The game consists in reading the question, turning the card and indicating whether or not you guessed right, using the appropriate buttons.<br>\n\
        <i>App available only for Android, below is the link to the Google Play Store.</i>";

        document.getElementById("cv").innerHTML = "My CV";
        document.getElementById("cv").href = "CV/EN/CV Riccardo Venturini.pdf";

    }else if(value == 'FR'){

        document.getElementById("demo").innerHTML = " <h5>Bienvenu !</h5>\n\
        Je m'appelle Riccardo et je suis actuellement étudiant en informatique à la Faculté de Turin, d'où je viens.<br>\n\
        J'ai décidé de poursuivre ma carrière dans ce domaine parce que je crois fermement à l'impact que les médias virtuels \n\
        ont sur notre vie quotidienne. J'aime souvent comparer la figure du programmeur à celle d'un petit inventeur, \n\
        capable de créer quelque chose de fonctionnel et d'en avoir le plein contrôle.<br>\n\
        Sur cette plateforme, je publierai des projets sur lesquels je travaille pendant mon temps libre et pour l'université.<br><br>\n\
        Mes compétences :";

        document.getElementById("proflife").innerHTML = "Pour en savoir plus sur ma vie professionnelle :";

        document.getElementById("flashapp").innerHTML = "<b>FlashApp</b> est une application d'aide à l'apprentissage.<br>\n\
        L'application permet de créer des jeux de cartes (flashcards) : chaque carte a un espace pour la question et un pour la réponse.\n\
        Ce sera l'utilisateur qui créera les cartes, en effet pour jouer il faut avoir créé au moins une carte.<br>\n\
        Le jeu consiste à lire la question, à tourner la carte et à indiquer si vous avez bien deviné ou non, à l'aide des boutons appropriés.<br>\n\
        <i>Application disponible uniquement pour Android, ci-dessous le lien vers le Google Play Store.</i>";

        document.getElementById("cv").innerHTML = "Mon CV";
        document.getElementById("cv").href = "CV/FR/CV Riccardo Venturini.pdf";

    }else if(value == 'IT'){

        document.getElementById("demo").innerHTML = "<h5>Benvenuti!</h5>\n\
        Sono Riccardo e attualmente sono studente di informatica alla facoltà degli \n\
        studi di Torino, città dalla quale provengo.<br>\n\
        Ho deciso di intraprendere la mia carriera in questo ambito perché credo fortemente\n\
        nell'impatto che i mezzi virtuali stanno avendo nella quotidianità di tutti noi.\n\
        Spesso mi piace paragonare la figura del programmatore a quella di un piccolo inventore,\n\
        capace di creare qualcosa di funzionale e averne pieno controllo.<br>\n\
        Su questa piattaforma pubblicherò progetti ai quali lavoro durante il tempo libero e per l'università.<br><br>\n\
        Le mie competenze:";

        document.getElementById("proflife").innerHTML = "Per scoprire di più sulla mia vita professionale:";

        document.getElementById("flashapp").innerHTML = "<b>FlashApp</b> è un applicazione per l'aiuto all'apprendimento.<br>\n\
        L'app permette di creare dei mazzi di carte (flashcard): ogni carta ha uno spazio per la domanda e uno per la risposta.\n\
        Sarà l'utente a creare le carte, infatti per poter giocare è necessario aver creato almeno una carta.<br>\n\
        Il gioco consiste nel leggere la domanda, ruotare la carta e indicare se si ha indovinato, o meno, usando gli appositi bottoni.<br>\n\
        <i>App disponibile solo per Android, di seguito il link al Google Play Store.</i>";

        document.getElementById("cv").innerHTML = "Il mio CV";
        document.getElementById("cv").href = "CV/IT/CV Riccardo Venturini.pdf";
    }
  }