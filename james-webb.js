const btn = document.querySelector('btn-menu');

btn.addEventListener('click', ()=>{
nav.classList.toggle('open-nav');
btn.innerHTML = 'test';

    if(btn.innerHTML == "Menu"){
        nav.classList.add('open-nav');
        btn.innerHTML = "close";
    }else if(btn.innerHTML == "close"){
        nav.classList.remove("open-nav");
        btn.innerHTML = "Menu";
    }
}
);