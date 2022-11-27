const toggleicon = document.getElementById("toggle-icon");
const toggletext = document.getElementById("toggle-text");
const togglecolors = document.getElementById("toogle-colors");
const rootstyles = document.documentElement.style;
const toggletheme = document.getElementById("toggle-theme");



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