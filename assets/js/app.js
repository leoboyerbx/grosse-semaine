import $ from 'jquery'
import ScrollSpy from "@/modules/ScrollSpy";
// window.$ = $

$(document).ready(function() {
    const spy = new ScrollSpy($('.slide'))

    spy.on('scrollChange', (element) =>  {
        console.log(element.innerText)
    })
})
