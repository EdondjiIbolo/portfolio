const toggleicon = document.getElementById("toggle-icon");
const toggletext = document.getElementById("toggle-text");
const togglecolors = document.getElementById("toogle-colors");
const rootstyles = document.documentElement.style;
const toggletheme = document.getElementById("toggle-theme");

const flagsElements = document.getElementById('flags')
const textsToChange = document.querySelectorAll('[data-section]')
flagsElements.addEventListener('click', (e)=>{

    const lang =e.target.parentElement.dataset.language
    console.log(lang)
    changeLanguages(e.target.parentElement.dataset.language)
})
const changeLanguages = async language =>{
    const requestJson = await fetch(`./lang/${language}.json`)
    const texts = await requestJson.json()

    

    for( const textToChange of textsToChange){
        const section = textToChange.dataset.section
        const value = textToChange.dataset.value

        textToChange.innerHTML = texts[section][value]
    }
}
toggletheme.addEventListener('click', ()=> {
    document.body.classList.toggle('dark');
    
    if(toggleicon.src.includes('moon.svg')){
        toggleicon.src = 'assets/icons/sun.svg';
        toggletext.textContent = 'Modo Claro';
    }else{
        toggleicon.src = 'assets/icons/moon.svg';
        toggletext.textContent = 'Modo Oscuro';
        
    }
});


togglecolors.addEventListener('click', (e) =>{
    rootstyles.setProperty('--primary-color', e.target.dataset.color);
});