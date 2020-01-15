import $ from 'jquery'
import ScrollSpy from "@/modules/ScrollSpy";
import AssignClass from "@/modules/AssignClass";
import setUpLightBoxes from "@/modules/lightbox";
import createMenu from "@/modules/menu";
// window.$ = $

$(document).ready(function() {
    if (document.body.dataset.page === '1') {
        // Si on est sur la page geii
        const $circuit = $('#circuit')
        const circuitOffsetTop = $circuit.offset().top
        const checkStickyCircuit = function () {
            if (window.scrollY >= circuitOffsetTop) {
                $circuit.addClass('sticky')
            } else {
                $circuit.removeClass('sticky')
            }
        }
        $(document).scroll(checkStickyCircuit)

        const spy = new ScrollSpy($('.slide'), 0.7)
        const circuitClass = new AssignClass($circuit, 'scroll-')
        spy.on('scrollChange', (element) =>  {
            if (element.dataset.anim) {
                circuitClass.assign(element.dataset.anim)
            }
        })

        setUpLightBoxes('.lightbox-img')
        //Onload:
        checkStickyCircuit()
    }

    // gestion du menu
    const menu = createMenu($('#main-nav').get(0), 'li:not(.not-menuitem)', parseInt(document.body.dataset.page || 0))
    function autoMenu () {
        if (window.scrollY && !menu.getScrolledState()) {
            menu.setScrolledState(true)
        } else if (!window.scrollY && menu.getScrolledState() && !menu.isOpen()) {
            menu.setScrolledState(false)
        }
    }
    window.addEventListener('scroll', autoMenu)
    autoMenu()

})
//test
