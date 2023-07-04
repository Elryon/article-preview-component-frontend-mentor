let shareIcon = document.querySelector('.shareIcon')
let shareImg = document.querySelector('.popUpButton')

let block = document.getElementById('section')

block.addEventListener('click', (event) =>{
    let target=event.target
    let activePopUp= document.getElementById('activePopUp')
    let sharePopUp = document.getElementById('sharePopUp')

    
    if (target==shareIcon || target ==shareImg ){

        if (activePopUp.classList.contains('active')){
            activePopUp.classList.remove('active')
            sharePopUp.classList.remove('active')
            console.log('change')
        }else{
            activePopUp.classList.add('active')
            sharePopUp.classList.add('active')
        }

    }else{

        activePopUp.classList.remove('active')
        sharePopUp.classList.remove('active')

    }

    
})