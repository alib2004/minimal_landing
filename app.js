let ques = document.querySelectorAll('.faq-question')
let questions = ques.forEach((item)=>{
    item.addEventListener('click',(e)=>{
        item.nextElementSibling.classList.toggle('open')
        if (item.nextElementSibling.classList.contains('open')) {
            item.firstElementChild.src = '/img/minus.svg'    
        }
        else item.firstElementChild.src = '/img/plus.svg' 
        
    })
})
