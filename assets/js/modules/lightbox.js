import css from './css'

function created () {
    if (document.querySelector('#lightbox-wrapper')) return true
    return false
}
let lightboxWrapper
let image

function lightbox (img) {
    img.addEventListener('click', function () {
        showLightBox(img)
    })
}

function createLightBox () {
    if (!created()) {
        lightboxWrapper = document.createElement('a')
        lightboxWrapper.id = 'lightbox-wrapper'
        css(lightboxWrapper, {
            position: 'fixed',
            width: '100%',
            height: '100%',
            top: '0',
            left: '0',
            'background-color': 'rgba(0, 0, 0, 0.7)',
            transition: 'all .4s',
            opacity: '0',
            'pointer-events': 'none',
            'z-index': '50'
        })
        lightboxWrapper.onclick = hideLightBox
        document.querySelector('body').appendChild(lightboxWrapper)

        image = document.createElement('img')
        css(image, {
            position: 'fixed',
            top: '5%',
            left: '5%',
            width: '90%',
            height: '90%',
            border: 'none',
            'object-fit': 'contain',
            transition: 'all .3s',
            transform: 'scale(.4)'
        })
        lightboxWrapper.appendChild(image)

        const close = document.createElement('div')
        css(image, {
            position: 'fixed',
            top: '10px',
            right: '10px',
            width: '',
            'object-fit': 'contain',
            transition: 'all .3s',
            transform: 'scale(.4)'
        })
        lightboxWrapper.appendChild(image)
    }
}

function showLightBox (img) {
    image.src = img.src
    css(lightboxWrapper, {
        opacity: '1',
        'pointer-events': 'all'
    })
    css(image, {
        transform: 'scale(1)'
    })
}

function hideLightBox () {
    css(lightboxWrapper, {
        opacity: '0',
        'pointer-events': 'none'
    })
    css(image, {
        transform: 'scale(.4)'
    })
}

export default function setUpLightBoxes (selector) {
    // window.customElements.define('lightbox-img', LightboxImg, {
    //     extends: 'img'
    // })
    createLightBox()
    document.querySelectorAll(selector).forEach(img => {
        lightbox(img)
    })
}
