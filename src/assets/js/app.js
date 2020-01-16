import $ from 'jquery'
import ScrollSpy from "@/modules/ScrollSpy";
import AssignClass from "@/modules/AssignClass";
import setUpLightBoxes from "@/modules/lightbox";
import createMenu from "@/modules/menu";
import equipmentSearch from "@/components/equipmentSearch";
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

class LeafletMap {

    constructor () {
        this.map = null
    }

    load(element) {
        this.map = L.map(element, {
            closePopupOnClick: false,
        }).setView(['45.199157', '5.775935'], 13)
        L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibGVvYm95ZXJieCIsImEiOiJjazVnOXhmbXIwMzdkM2ZtMmQ5dHBzdXk2In0.XRQFK6KKNZQFw3hMYNPdZg', {
            attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
            maxZoom: 18,
            id: 'mapbox/streets-v11',
            accessToken: 'pk.eyJ1IjoibGVvYm95ZXJieCIsImEiOiJjazVnOXhmbXIwMzdkM2ZtMmQ5dHBzdXk2In0.XRQFK6KKNZQFw3hMYNPdZg'
        }).addTo(this.map)
    }

    addMarker (lat, lng, text) {
        let point = [lat, lng]
        L.popup({
            autoClose: false,
            closeOnEscapeKey: false,
            closeButton: false,
            className: 'marker'
        })
            .setLatLng(point)
            .setContent(text)
            .openOn(this.map)
    }
}

function setUpMap() {
    let myMap = new LeafletMap()
    myMap.load('leafmap')

    $('#popups .popup').each(function () {
        const popup = this
        myMap.addMarker(popup.dataset.lat, popup.dataset.lng, popup.innerHTML)
    })

}

$(document).ready(function() {
    //config footer
    function footerHeight () {
        $('.page--content').css('margin-bottom', $('#main-footer').outerHeight())
    }
    footerHeight()
    window.onresize = footerHeight

    if (document.body.dataset.page === '1') {
        // Si on est sur la page geii
        const $circuit = $('#circuit')
        let circuitOffsetTop
        let circuitOffsetBottom
        const updateCircuitOffsetTop = function () {
            circuitOffsetTop = $('#intro').offset().top
        }
        const updateCircuitOffsetBottom = function () {
            circuitOffsetBottom = $('#plateforme__page-content').offset().top + $('#plateforme__page-content').innerHeight() - $circuit.outerHeight()
        }
        updateCircuitOffsetTop()
        updateCircuitOffsetBottom()
        console.log(circuitOffsetBottom)
        $circuit.css('top', circuitOffsetTop)

        const checkStickyCircuit = function () {
            if (window.scrollY >= circuitOffsetTop && window.scrollY < circuitOffsetBottom) {
                $circuit.addClass('sticky')
                $circuit.css('top', 0)
            } else if (window.scrollY >= circuitOffsetBottom) {
                $circuit.removeClass('sticky')
                $circuit.css('top', circuitOffsetBottom)
            } else {
                $circuit.removeClass('sticky')
                $circuit.css('top', circuitOffsetTop)
            }
        }
        $(document).scroll(checkStickyCircuit)
        $(window).resize(function () { updateCircuitOffsetBottom(); updateCircuitOffsetTop() })

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

    $('.discover-button').click(function (ev) {
        ev.preventDefault()
        $('#plateforme__page-content').get(0).scrollIntoView({behavior: 'smooth'})
    })

    // gestion du menu
    const menu = createMenu($('#main-nav').get(0), 'li:not(.not-menuitem)', parseInt(document.body.dataset.page || 0), $('#menu__cta').outerWidth() + 50)
    function autoMenu () {
        if (window.scrollY && !menu.getScrolledState()) {
            menu.setScrolledState(true)
        } else if (!window.scrollY && menu.getScrolledState() && !menu.isOpen()) {
            menu.setScrolledState(false)
        }
    }
    window.addEventListener('scroll', autoMenu)
    autoMenu()

    const $equipments_list = $('#pro__equipments-list')
    if ($equipments_list.length) {
        equipmentSearch()
    }
    if ($('#leafmap').length) {
        setUpMap()
    }

})
//test
