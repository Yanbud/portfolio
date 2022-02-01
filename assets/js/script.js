const mod1 = document.querySelector('#modal1')
const close1 = document.querySelector('#close1')
const mod2 = document.querySelector('#modal2')
const close2 = document.querySelector('#close2')
const display1 = () => {
    mod1.setAttribute('style', 'display:block');
}

const closeMod1 = () => {
    mod1.setAttribute('style', 'display:none');
}
const display2 = () => {
    mod2.setAttribute('style', 'display:block');
}

const closeMod2 = () => {
    mod2.setAttribute('style', 'display:none');
}