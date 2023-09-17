const panels = document.querySelectorAll('.panel')


panels.forEach((panel) => {
    panel.addEventListener('click', () =>{
   console.log(123);
    })
})

function removeActiveClasses() {
    panels.forEach(panel =>{
   panel.classList.remove('active')
    })
}