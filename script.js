const buttons = document.querySelectorAll('.button')
const body = document.querySelector('body')
buttons.forEach((button)=>{
    return button.addEventListener('click',function(e){
        const id = e.target.id;
        switch(id){
            case 'grey':
                body.style.backgroundColor = id;
                break;
            case 'white':
                body.style.backgroundColor = id;
                break;
            case 'blue':
                body.style.backgroundColor = id;
                break;
            case 'yellow':
                body.style.backgroundColor = id;
                break;
            default:
                body.style.backgroundColor = 'white';
                break;
        }
    })
})