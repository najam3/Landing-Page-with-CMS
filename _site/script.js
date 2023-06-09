const card =  document.querySelectorAll('.card')
const button = document.querySelectorAll('.my-btn')

let x;
button.forEach(btn => {
    btn.addEventListener('click', e => {
        x = e.target.dataset.index
        localStorage.setItem('uniqueId', x)
    })
})



