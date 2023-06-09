const card =  document.querySelectorAll('.card')
const button = document.querySelectorAll('.my-btn')

let x;
button.forEach(btn => {
    btn.addEventListener('click', e => {
        x = e.target.dataset.index
        localStorage.setItem('uniqueId', x)
    })
})



  if (window.netlifyIdentity) {
    window.netlifyIdentity.on("init", user => {
      if (!user) {
        window.netlifyIdentity.on("login", () => {
          document.location.href = "/admin/";
        });
      }
    });
  }
