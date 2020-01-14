import $ from 'jquery'
import ScrollSpy from "@/modules/ScrollSpy";
import AssignClass from "@/modules/AssignClass";
import setUpLightBoxes from "@/modules/lightbox";
// window.$ = $

$(document).ready(function() {
    const $circuit = $('#circuit')
    const circuitOffsetTop = $circuit.offset().top
    function checkStickyCircuit () {
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
})
//test
