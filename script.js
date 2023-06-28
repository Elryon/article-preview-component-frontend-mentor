let shareIcon = document.querySelector('.shareIcon')


let block = document.getElementById('section')

shareIcon.addEventListener('click', () =>{
    let activePopUp= document.getElementById('activePopUp')
    let sharePopUp = document.getElementById('sharePopUp')

    if (activePopUp.classList.contains('active')){
        activePopUp.classList.remove('active')
        sharePopUp.classList.remove('active')
    }else{
        activePopUp.classList.add('active')
        sharePopUp.classList.add('active')
    }
})