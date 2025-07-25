




let icone = document.querySelector('#icone')
let hiddenElement = document.querySelector('#hiden-element')

icone.addEventListener('click', () => {
    console.log(icone, 'un message')
    if (hiddenElement.style.opacity === '0') {
        hiddenElement.style.opacity = '1'
        hiddenElement.style.translate = '0px 20px 0px'
       
    } else {
        hiddenElement.style.opacity = '0'
}})


