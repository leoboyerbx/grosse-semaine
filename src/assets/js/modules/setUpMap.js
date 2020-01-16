import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import $ from 'jquery'

class LeafletMap {
    constructor () {
        this.map = null
        this.bounds = []
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
        this.bounds.push(point)
        let marker = new LeafletMarker(point, text, this.map)
        return marker
    }
    center () {
        this.map.fitBounds(this.bounds, {padding: [100, 50]})
    }
}

class LeafletMarker {
    constructor (point, text, map) {
        this.map = map
        this.popup = L.popup({
            autoClose: false,
            closeOnEscapeKey: false,
            closeButton: false,
            className: 'marker'
        })
            .setLatLng(point)
            .setContent(text)
            .openOn(this.map)
    }

    setActive (set) {
        if (set) {
            this.popup.getElement().classList.add('is-active')
        } else {
            this.popup.getElement().classList.remove('is-active')
        }
    }
}

export default function setUpMap() {
    let myMap = new LeafletMap()
    myMap.load('leafmap')

    let markers = {}
    let hoverMarker = null
    $('#popups .popup').each(function () {
        const popup = this
        markers[this.dataset.id] = myMap.addMarker(popup.dataset.lat, popup.dataset.lng, popup.innerHTML)
    })
    $('.component-plateforme').mouseover(function () {
        if (hoverMarker !== null) {
            hoverMarker.setActive(false)
        }
        let marker = markers[$(this).data('rel')]
        marker.setActive(true)
        hoverMarker = marker
    })
    $('.list-plateformes').mouseleave(function () {
        if (hoverMarker) hoverMarker.setActive(false)
    })
    myMap.center()

}
