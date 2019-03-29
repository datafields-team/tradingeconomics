let installationLi = document.getElementById('installationLi');
let loginLi = document.getElementById('loginLi');
let methodsLi = document.getElementById('methodsLi');
let indicatorsLi = document.getElementById('indicatorsLi');
let historicalLi = document.getElementById('historicalLi');
let calendarLi = document.getElementById('calendarLi');
let marketsLi = document.getElementById('marketsLi');
let forecastsLi = document.getElementById('forecastsLi');
let refreshLi = document.getElementById('refreshLi');
let searchLi = document.getElementById('searchLi');

//Go to the Categorie Selected in Web Page
installationLi.onclick = () => { window.location = 'index.html#installation'; }
loginLi.onclick = () => { window.location = 'index.html#login'; }
methodsLi.onclick = () => { window.location = 'index.html#methods'; }
indicatorsLi.onclick = () => { window.location = 'index.html#indicators'; }
historicalLi.onclick = () => { window.location = 'index.html#historical'; }
calendarLi.onclick = () => { window.location = 'index.html#calendar'; }
marketsLi.onclick = () => { window.location = 'index.html#markets'; }
forecastsLi.onclick = () => { window.location = 'index.html#forecasts'; }
refreshLi.onclick = () => { window.location = 'index.html#refresh'; }
searchLi.onclick = () => { window.location = 'index.html#search'; }

let colorBlue = '#185aa9';
    
function clearAllLiColors() {
    installationLi.style.backgroundColor = 'transparent';
    loginLi.style.backgroundColor = 'transparent';
    methodsLi.style.backgroundColor = 'transparent';
    indicatorsLi.style.backgroundColor = 'transparent';
    historicalLi.style.backgroundColor = 'transparent';
    calendarLi.style.backgroundColor = 'transparent';
    marketsLi.style.backgroundColor = 'transparent';
    forecastsLi.style.backgroundColor = 'transparent';
    refreshLi.style.backgroundColor = 'transparent';
    searchLi.style.backgroundColor = 'transparent';
}

let insideMethods = false;

//On scroll checks which categorie should be highlighted in the #mainMenu
$('#contentContainer').scroll(() => { 
    clearAllLiColors()
    if($('#installation').position().top <= 0) {
        clearAllLiColors()
        installationLi.style.backgroundColor = colorBlue;
    }
    if($('#login').position().top <= 0) {
        clearAllLiColors()
        loginLi.style.backgroundColor = colorBlue;
    }
    if($('#methods').position().top <= 0) {
        clearAllLiColors()
        methodsLi.style.backgroundColor = colorBlue;
    }
    if($('#indicators').position().top <= 0) {
        clearAllLiColors()
        indicatorsLi.style.backgroundColor = colorBlue;
    }
    if($('#historical').position().top <= 0) {
        clearAllLiColors()
        historicalLi.style.backgroundColor = colorBlue;
    }
    if($('#calendar').position().top <= 0) {
        clearAllLiColors()
        calendarLi.style.backgroundColor = colorBlue;
    }
    if($('#markets').position().top <= 0) {
        clearAllLiColors()
        marketsLi.style.backgroundColor = colorBlue;
    }
    if($('#forecasts').position().top <= 0) {
        clearAllLiColors()
        forecastsLi.style.backgroundColor = colorBlue;
    }
    if($('#refresh').position().top <= 0) {
        clearAllLiColors()
        refreshLi.style.backgroundColor = colorBlue;
    }
    if($('#search').position().top <= 0) {
        clearAllLiColors()
        searchLi.style.backgroundColor = colorBlue;
    }
    //Setting sub categories of #methods visibility
    if($('#methods').position().top <= 0 && $('#refresh').position().top >= 0) {
        insideMethods = true;
        $('#mainMenu ul ul').css('height','142px');
    }
    else {
        $('#mainMenu ul ul').css('height','0px');
        insideMethods = false;
    }
})
/*
setInterval(function() {
    if (insideMethods == false) {
        console.log('if')
        setInterval(function() {
            $('#mainMenu ul ul').css('display','none');
        }, 200)
    }
    else {
        console.log('else')
        $('#mainMenu ul ul').css('display','block');
    }
}, 1000);
*/
//Sub categories of #methods are hidden by default
$('#mainMenu ul ul').css('height','0px');

//Setting #mainMenu visibility for mobile devices; Click the burger to show the menu, click back to hide
$('#burger').click(() => {
    if ($('#mainMenu').css('visibility') == 'hidden' ) { 
        $('#mainMenu').css('visibility','visible');
    }
    else {
        $('#mainMenu').css('visibility','hidden');
    }
})

//Hide #mainMenu on click on outside de #mainMenu area (only on "mobile")
$('#contentContainer').click(() => {
    if(window.innerWidth < 790) {
        $('#mainMenu').css('visibility','hidden');
    }
})

//When user arrives on the web page if he is on a small screen hide #mainMenu
if(window.innerWidth < 790) { $('#mainMenu').css('visibility','hidden'); }

//On resize to "mobile" hide #mainMenu; On resize to "desktop" show #mainMenu
window.onresize = () => {
    if(window.innerWidth > 790) {
        $('#mainMenu').css('visibility','visible');
    }
    if(window.innerWidth <= 790) {
        $('#mainMenu').css('visibility','hidden');
    }
}

//Google Analytics to track from where the user got to TE Excel Add In v1 download
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

$('downloadLink').click(() => {
    ga('send', 'event', 'Data Request', 'Excel-Download');
    window.location = 'https://github.com/ieconomics/open-api/raw/master/Excel/All_Releases/ExcelAddInDeploy_latest.msi';
    return;
});