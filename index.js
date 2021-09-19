var mainpre = document.getElementById("mainpreference");
mainpre.style.display = "none";


function eprivacy() {
    var eprivacy = document.getElementById("eprivacypreview");
    var gdprvar = document.getElementById("gdprpreview");
    eprivacy.style.display = "block";
    gdprvar.style.display = "none";

    var okbtnclick = document.getElementById("eprivacycookiesid");
    var agreebtnclick = document.getElementById("gdprcookiesid");
    var declinebtnclick = document.getElementById("gdprcookiesid");
    okbtnclick.style.display = "block";
    agreebtnclick.style.display = "block";
    declinebtnclick.style.display = "block";
}

function gdprbtn() {
    var eprivacy = document.getElementById("eprivacypreview");
    var gdprvar = document.getElementById("gdprpreview");
    eprivacy.style.display = "none";
    gdprvar.style.display = "block";

    var okbtnclick = document.getElementById("eprivacycookiesid");
    var agreebtnclick = document.getElementById("gdprcookiesid");
    var declinebtnclick = document.getElementById("gdprcookiesid");
    okbtnclick.style.display = "block";
    agreebtnclick.style.display = "block";
    declinebtnclick.style.display = "block";
}


function lightTheme() {
    var theme = document.getElementById("eprivacycookiesid");
    var theme1 = document.getElementById("gdprcookiesid");
    var greenbtn = document.getElementsByClassName("greenbtn");
    var textcookieheader = document.getElementsByClassName("textcookieheader");
    theme.style.backgroundColor = "#e6e6ff";
    theme1.style.backgroundColor = "#e6e6ff";
    textcookieheader[0].style.color = "black";
    textcookieheader[1].style.color = "black";
    theme.style.color = "black";
    theme1.style.color = "black";
    greenbtn[0].style.backgroundColor = "green";
    greenbtn[1].style.backgroundColor = "green";
    greenbtn[2].style.backgroundColor = "green";
    greenbtn[0].style.color = "white";
    greenbtn[1].style.color = "white";
    greenbtn[2].style.color = "white";

    var eprivacy = document.getElementById("eprivacypreview");
    eprivacy.style.backgroundColor = "grey";

    var gdpr = document.getElementById("gdprpreview");
    gdpr.style.backgroundColor = "white";

    //-----------------------Privacy Part After Change my Preference--------------------------
    var mainpre= document.getElementById("mainpreference");
    mainpre.style.backgroundColor = "white";

        var mainDiv1 = document.getElementById('myDiv1');
        mainDiv1.addEventListener('mouseover', function () {
            mainDiv1.style.backgroundColor = 'green';
        });
        mainDiv1.addEventListener('mouseleave', function () {
            mainDiv1.style.backgroundColor = '#e7e5e5';
        });

        var mainDiv2 = document.getElementById('myDiv2');
        mainDiv2.addEventListener('mouseover', function () {
            mainDiv2.style.backgroundColor = 'green';
        });
        mainDiv2.addEventListener('mouseleave', function () {
            mainDiv2.style.backgroundColor = '#e7e5e5';
        });

        var mainDiv3 = document.getElementById('myDiv3');
        mainDiv3.addEventListener('mouseover', function () {
            mainDiv3.style.backgroundColor = 'green';
        });
        mainDiv3.addEventListener('mouseleave', function () {
            mainDiv3.style.backgroundColor = '#e7e5e5';
        });

        var mainDiv4= document.getElementById('myDiv4');
        mainDiv4.addEventListener('mouseover', function () {
            mainDiv4.style.backgroundColor = 'green';
        });
        mainDiv4.addEventListener('mouseleave', function () {
            mainDiv4.style.backgroundColor = '#e7e5e5';
        });

        var mainDiv5 = document.getElementById('myDiv5');
        mainDiv5.addEventListener('mouseover', function () {
            mainDiv5.style.backgroundColor = 'green';
        });
        mainDiv5.addEventListener('mouseleave', function () {
            mainDiv5.style.backgroundColor = '#e7e5e5';
        });

        var mainDiv6 = document.getElementById('myDiv6');
        mainDiv6.addEventListener('mouseover', function () {
            mainDiv6.style.backgroundColor = 'green';
        });
        mainDiv6.addEventListener('mouseleave', function () {
            mainDiv6.style.backgroundColor = '#e7e5e5';
        });

        var pis= document.getElementById("pi");
        pis.style.color="black";

        var cb = document.getElementById('closebtn');
        cb.classList.add("btn-close-black");
        cb.classList.remove("btn-close-white");

        var smpb=document.getElementsByClassName("savemypreferencebtn");
        smpb[0].style.backgroundColor="green";
        smpb[0].style.color="white";


    display();

}

function darkTheme() {
    var theme = document.getElementById("eprivacycookiesid");
    var theme1 = document.getElementById("gdprcookiesid");
    var greenbtn = document.getElementsByClassName("greenbtn");
    var textcookieheader = document.getElementsByClassName("textcookieheader");
    theme.style.backgroundColor = "black";
    theme1.style.backgroundColor = "black";
    textcookieheader[0].style.color = "white";
    textcookieheader[1].style.color = "white";
    greenbtn[1].style.backgroundColor = "yellow";
    greenbtn[0].style.backgroundColor = "yellow";
    greenbtn[2].style.backgroundColor = "yellow";
    greenbtn[0].style.color = "black";
    greenbtn[1].style.color = "black";
    greenbtn[2].style.color = "black";

    var eprivacy = document.getElementById("eprivacypreview");

    //--------------------------------Privacy Part After Change my Preference-----------------------------
    var mainpre= document.getElementById("mainpreference");
    mainpre.style.backgroundColor = "rgb(48, 47, 47)";
    
        var mainDiv1 = document.getElementById('myDiv1');
        mainDiv1.addEventListener('mouseover', function () {
            mainDiv1.style.backgroundColor = 'yellow';
        });
        mainDiv1.addEventListener('mouseleave', function () {
            mainDiv1.style.backgroundColor = '#e7e5e5';
        });

        var mainDiv2 = document.getElementById('myDiv2');
        mainDiv2.addEventListener('mouseover', function () {
            mainDiv2.style.backgroundColor = 'yellow';
        });
        mainDiv2.addEventListener('mouseleave', function () {
            mainDiv2.style.backgroundColor = '#e7e5e5';
        });

        var mainDiv3 = document.getElementById('myDiv3');
        mainDiv3.addEventListener('mouseover', function () {
            mainDiv3.style.backgroundColor = 'yellow';
        });
        mainDiv3.addEventListener('mouseleave', function () {
            mainDiv3.style.backgroundColor = '#e7e5e5';
        });

        var mainDiv4= document.getElementById('myDiv4');
        mainDiv4.addEventListener('mouseover', function () {
            mainDiv4.style.backgroundColor = 'yellow';
        });
        mainDiv4.addEventListener('mouseleave', function () {
            mainDiv4.style.backgroundColor = '#e7e5e5';
        });

        var mainDiv5 = document.getElementById('myDiv5');
        mainDiv5.addEventListener('mouseover', function () {
            mainDiv5.style.backgroundColor = 'yellow';
        });
        mainDiv5.addEventListener('mouseleave', function () {
            mainDiv5.style.backgroundColor = '#e7e5e5';
        });

        var mainDiv6 = document.getElementById('myDiv6');
        mainDiv6.addEventListener('mouseover', function () {
            mainDiv6.style.backgroundColor = 'yellow';
        });
        mainDiv6.addEventListener('mouseleave', function () {
            mainDiv6.style.backgroundColor = '#e7e5e5';
        });
        var pis= document.getElementById("pi");
        pis.style.color="white";

        var cb = document.getElementById('closebtn');
        cb.classList.add("btn-close-white");
        cb.classList.remove("btn-close-black");

        var smpb=document.getElementsByClassName("savemypreferencebtn");
        smpb[0].style.backgroundColor="yellow";
        smpb[0].style.color="black";
        
    display();
}

function okbtn() {
    var okbtnclick = document.getElementById("eprivacycookiesid");
    var agreebtnclick = document.getElementById("gdprcookiesid");
    var declinebtnclick = document.getElementById("gdprcookiesid");
    okbtnclick.style.display = "none";
    agreebtnclick.style.display = "none";
    declinebtnclick.style.display = "none";

    var interstitialdialog2 = document.getElementsByClassName("previewpage");
    interstitialdialog2[0].style.display = "block";
    interstitialdialog2[1].style.display = "block";

    var eprivacy = document.getElementById("eprivacypreview");
    eprivacy.style.backgroundColor = "white";

    var gdpr = document.getElementById("gdprpreview");
    gdpr.style.backgroundColor = "white";
}

function display() {
    var sdialog = document.getElementById("simpledialog");
    var hdialog = document.getElementById("headingdialog");
    var idialog = document.getElementById("intrestitialdialog");
    var istandlone = document.getElementById("intrestitialstandlone");

    // ---------------------------------- interstitialdialog-----------------------------------------------------

    if (idialog.checked) {

        var interstitialdialog1 = document.getElementById("eprivacycookiesid");
        var interstitialdialog2 = document.getElementsByClassName("previewpage");
        var interstitialdialog3 = document.getElementById("gdprcookiesid");

        interstitialdialog1.style.position = "static";
        interstitialdialog2[0].style.position = "static";
        interstitialdialog2[1].style.position = "static";
        interstitialdialog3.style.position = "static";

        interstitialdialog1.style.display = "block";
        interstitialdialog2[0].style.display = "none";
        interstitialdialog2[1].style.display = "none";
        interstitialdialog3.style.display = "block";

        var eprivacy = document.getElementById("eprivacypreview");
        eprivacy.style.padding = "1%";
        eprivacy.style.backgroundColor = "grey";

        var gdpr = document.getElementById("gdprpreview");
        gdpr.style.padding = "1%";
        gdpr.style.backgroundColor = "grey";
    }

    // ---------------------------------- Heading-----------------------------------------------------
    else if (hdialog.checked) {
        var interstitialdialog1 = document.getElementById("eprivacycookiesid");
        var interstitialdialog2 = document.getElementsByClassName("previewpage");
        var interstitialdialog3 = document.getElementById("gdprcookiesid");

        interstitialdialog1.style.position = "static";
        interstitialdialog2[0].style.position = "static";
        interstitialdialog2[1].style.position = "static";
        interstitialdialog3.style.position = "static";

        interstitialdialog1.style.display = "block";
        interstitialdialog2[0].style.display = "block";
        interstitialdialog2[1].style.display = "block";
        interstitialdialog3.style.display = "block";

        var eprivacy = document.getElementById("eprivacypreview");
        eprivacy.style.padding = "0%";

        var gdpr = document.getElementById("gdprpreview");
        gdpr.style.padding = "0%";
    }


    // ---------------------------------- Stand alone-----------------------------------------------------
    else if (istandlone.checked) {
        var interstitialdialog1 = document.getElementById("eprivacycookiesid");
        var interstitialdialog2 = document.getElementsByClassName("previewpage");
        var interstitialdialog3 = document.getElementById("gdprcookiesid");
        var lightTheme = document.getElementById("light");
        var darkTheme = document.getElementById("dark");
        var mainpreview = document.getElementsByClassName("mainpreview");

        mainpreview[0].style.backgroundColor = "black";
        mainpreview[1].style.backgroundColor = "black";

        interstitialdialog1.style.position = "static";
        interstitialdialog2[0].style.position = "static";
        interstitialdialog2[1].style.position = "static";
        interstitialdialog3.style.position = "static";

        interstitialdialog1.style.display = "block";
        interstitialdialog2[0].style.display = "none";
        interstitialdialog2[1].style.display = "none";
        interstitialdialog3.style.display = "block";

        var eprivacy = document.getElementById("eprivacypreview");
        eprivacy.style.padding = "0%";
        eprivacy.style.backgroundColor = "black";

        if (lightTheme.checked) {
            eprivacy.style.backgroundColor = "rgb(230, 230, 255)";
            mainpreview[0].style.backgroundColor = "rgb(230, 230, 255)";
        }
        if (darkTheme.checked) {
            interstitialdialog2.style.backgroundColor = "white";
            eprivacy.style.backgroundColor = "black";
        }
        var gdpr = document.getElementById("gdprpreview");
        gdpr.style.padding = "0%";
        gdpr.style.backgroundColor = "black";

        if (lightTheme.checked) {
            gdpr.style.backgroundColor = "rgb(230, 230, 255)";
            mainpreview[1].style.backgroundColor = "rgb(230, 230, 255)";
        }
        if (darkTheme.checked) {
            gdpr.style.backgroundColor = "black";
            interstitialdialog2.style.backgroundColor = "white";

        }
    }

    // -----------------------------------------------Simple Dialog-----------------------------------
    else if (sdialog.checked) {

        var sdialog1 = document.getElementById("eprivacycookiesid");
        var sdialog2 = document.getElementsByClassName("previewpage");
        var sdialog3 = document.getElementById("gdprcookiesid");
        var lightTheme = document.getElementById("light");
        var darkTheme = document.getElementById("dark");
        var mainpreview = document.getElementsByClassName("mainpreview");

        sdialog2[0].style.display = "block";
        sdialog2[1].style.display = "block";
        sdialog1.style.display = "block";
        sdialog3.style.display = "block";

        sdialog2[0].style.position = "absolute";
        sdialog2[0].style.left = "0px";
        sdialog2[0].style.top = "0px";
        sdialog2[0].style.zIndex = "-1";

        sdialog2[1].style.position = "absolute";
        sdialog2[1].style.left = "0px";
        sdialog2[1].style.top = "0px";
        sdialog2[1].style.zIndex = "-1";

        sdialog1.style.position = "absolute";
        sdialog1.style.zIndex = "1";
        sdialog1.style.right = "0px";
        sdialog1.style.bottom = "0px";
        sdialog1.style.top = "25%";
        sdialog1.style.left = "20%";

        sdialog3.style.position = "absolute";
        sdialog3.style.zIndex = "1";
        sdialog3.style.right = "0px";
        sdialog3.style.bottom = "0px";
        sdialog3.style.top = "25%";
        sdialog3.style.left = "20%";

        var eprivacy = document.getElementById("eprivacypreview");
        eprivacy.style.backgroundColor = "white";
        eprivacy.style.padding = "0%";

        var gdpr = document.getElementById("gdprpreview");
        gdpr.style.backgroundColor = "white";
        gdpr.style.padding = "0%";


        if (lightTheme.checked) {
            eprivacy.style.backgroundColor = "white";
            sdialog2[0].style.backgroundColor = "white";
        }
        if (darkTheme.checked) {
            eprivacy.style.backgroundColor = "white";
            sdialog2[0].style.backgroundColor = "white";
        }
        var gdpr = document.getElementById("gdprpreview");

        if (lightTheme.checked) {
            gdpr.style.backgroundColor = "white";
            sdialog2[1].style.backgroundColor = "white";
        }
        if (darkTheme.checked) {
            gdpr.style.backgroundColor = "white";
            sdialog2[1].style.backgroundColor = "white";
        }

        display();
    }

}

function preferencebtn() {
    var mainpre = document.getElementById("mainpreference");
    mainpre.style.display = "block";

}

//-------------------------------- Privacy Information Buttons--------------------

function privacyinformationbtn1(){
    var pibtn= document.getElementsByClassName("privacyinformation");
    for(i=0;i<6; i++){
        pibtn[i].style.display="none";
    }
    pibtn[0].style.display="block";
}

function privacyinformationbtn2(){
    var pibtn= document.getElementsByClassName("privacyinformation");
    for(i=0;i<6; i++){
        pibtn[i].style.display="none";
    }
    pibtn[1].style.display="block";
}

function privacyinformationbtn3(){
    var pibtn= document.getElementsByClassName("privacyinformation");
    for(i=0;i<6; i++){
        pibtn[i].style.display="none";
    }
    pibtn[2].style.display="block";
}

function privacyinformationbtn4(){
    var pibtn= document.getElementsByClassName("privacyinformation");
    for(i=0;i<6; i++){
        pibtn[i].style.display="none";
    }
    pibtn[3].style.display="block";
}

function privacyinformationbtn5(){
    var pibtn= document.getElementsByClassName("privacyinformation");
    for(i=0;i<6; i++){
        pibtn[i].style.display="none";
    }
    pibtn[4].style.display="block";
}

function privacyinformationbtn6(){
    var pibtn= document.getElementsByClassName("privacyinformation");
    for(i=0;i<6; i++){
        pibtn[i].style.display="none";
    }
    pibtn[5].style.display="block";
}

function prefbtn(){
    var mainpre= document.getElementById("mainpreference");
    mainpre.style.display="none";
}

function closebtn(){
    var mainpre = document.getElementById("mainpreference");
    mainpre.style.display="none";
}