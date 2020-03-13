let elem = document.querySelector('p');
elem.addEventListener('click', updateName);

function updateName(){
    let name = prompt('Please enter the new text');
    if(name !== '' && name !== null){
        elem.textContent = name;        
    }
}

let nextBtn = document.querySelector('.next-button');

nextBtn.onmousedown = () => {
    nextBtn.style.color = 'lightblue';
}

nextBtn.onmouseup = () => {
    nextBtn.style.color = 'black';
}

nextBtn.onclick = () => {
    console.log('onclick called!')
    window.scroll({
        left: 0,
        top: window.innerHeight,
        behavior: "smooth"
    })
}

moveOn = document.querySelector('#scn-move-on');
moveOn.onclick = () => {
    window.scroll({
        left: 0,
        top: window.innerHeight * 2,
        behavior: "smooth",
    })
}