import $ from 'jquery'
import ScrollSpy from "@/modules/ScrollSpy";
import AssignClass from "@/modules/AssignClass";
// window.$ = $

$(document).ready(function() {
    const $circuit = $('#circuit')
    const circuitOffsetTop = $circuit.offset().top
    $(document).scroll(function() {
        if (window.scrollY >= circuitOffsetTop) {
            $circuit.addClass('sticky')
        } else {
            $circuit.removeClass('sticky')
        }
    })

    const spy = new ScrollSpy($('.slide'))
    const circuitClass = new AssignClass($circuit, 'scroll-')
    spy.on('scrollChange', (element) =>  {
        if (element.dataset.anim) {
            circuitClass.assign(element.dataset.anim)
        }
    })

})
//test
