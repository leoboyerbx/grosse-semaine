import { $$, getDistanceFromTop, multipleDistancesFromTop } from './utilis'
import css from './css'

const menu = {
  elementsWidth: 50,
  currentPageIndex: 0,
  scrolledState: false,
  responsive: false,
  items: [],
  open: false,
  hidingHeight: function () {
    if (this.responsive) {
      return this.items[0].element.offsetHeight
    }
    return this.element.offsetHeight
  }
}
const api = {
  setScrolledState: function (newStatus) {
    setScrolledState(newStatus)
  },
  getScrolledState: function () {
    return menu.scrolledState
  },
  updateDistances: function () {
    updateItemsDistanceFromTop()
  },
  updateResponsive: function () {
    updateResponsive()
  },
  isOpen: function () {
    return menu.open
  },
  open: function () {
    openMenu()
  },
  close: function () {
    closeMenu()
  },
  toggle: function () {
    toggleMenu()
  }
}

function scrollTo (item) {
  window.scroll({
    top: (item.distanceFromTop - menu.hidingHeight()),
    left: 0,
    behavior: 'smooth'
  })
  if (menu.responsive) {
    closeMenu()
  }
}

async function createElements (sources) {
  menu.button = document.createElement('div')
  menu.button.id = 'menubutton'
  menu.button.innerHTML = `<div class="menubar"></div><div class="menubar"></div><div class="menubar"></div>`
  menu.button.addEventListener('click', toggleMenu)

  menu.itemsWrapper = document.createElement('ul')
  menu.element.appendChild(menu.itemsWrapper)
  // menu.elementsWidth = window.getComputedStyle(menu.itemsWrapper).getPropertyValue('padding-left')
  menu.elementsWidth += parseFloat(css(menu.itemsWrapper, 'padding-left').replace(/px/gi, ''))

  sources.forEach(source => {
    const item = {
      source: source,
      element: document.createElement('li'),
      distanceFromTop: getDistanceFromTop(source)
    }
    item.element.innerText = source.dataset.menu
    menu.items.push(item)

    menu.itemsWrapper.appendChild(item.element)
    menu.elementsWidth += item.element.getBoundingClientRect().width

    item.element.addEventListener('mouseover', () => {
      underlineItem(item)
    })
    item.element.addEventListener('mouseout', ev => {
      underlineItem(menu.currentPageIndex)
    })
  })

  menu.underline = document.createElement('div')
  menu.underline.classList.add('underline')
  menu.underline.id = 'underline'

  menu.element.appendChild(menu.button)
  menu.element.appendChild(menu.underline)
}

function setScrolledState (scrolled) {
  if (scrolled) {
    menu.element.classList.add('scrolled')
  } else {
    menu.element.classList.remove('scrolled')
  }
  menu.scrolledState = scrolled
}

function moveUnderline (left, width) {
  menu.underline.style.left = left + 'px'
  menu.underline.style.width = width + 'px'
}

function parseItem (item) {
  if (typeof item === 'number') {
    return {
      item: menu.items[item],
      index: item
    }
  } else {
    return {
      item: item,
      index: menu.items.findIndex(i => i === item)
    }
  }
}

function underlineItem (item) {
  const rect = parseItem(item).item.element.getBoundingClientRect()
  moveUnderline(rect.left, rect.width)
}

function moveWrapper (item) {
  const parsed = parseItem(item)
  const rect = parsed.item.element.getBoundingClientRect()
  css(menu.itemsWrapper, 'transform', 'translate3d(0, -' + parsed.index * rect.height + 'px, 0)')
}

function updatePage (item) {
  if (menu.responsive) {
    if (!menu.open) {
      moveWrapper(item)
    }
  } else {
    underlineItem(item)
  }
}

function openMenu () {
  menu.button.classList.add('open')
  setScrolledState(true)
  css(menu.itemsWrapper, 'transform', 'translate3d(0, 0, 0)')
  css(menu.element, 'height', css(menu.itemsWrapper, 'height'))
  menu.open = true
}

function closeMenu () {
  menu.button.classList.remove('open')
  if (!window.scrollY) setScrolledState(true)
  moveWrapper(menu.currentPageIndex)
  css(menu.element, 'height', css(menu.items[0].element,'height'))
  menu.open = false
}

function toggleMenu () {
  if (menu.open) {
    closeMenu()
  } else {
    openMenu()
  }
}

function matchScroll (offset = 0) {
  const scroll = window.scrollY
  for (let i = menu.items.length - 1; i >= 0; i--) {
    const item = menu.items[i]
    if (scroll >= (item.distanceFromTop - item.source.offsetHeight) - offset) {
      return item
    }
  }
  return menu.items[0]
}

function updateItemsDistanceFromTop () {
  menu.itemsDistanceFromTop = multipleDistancesFromTop(menu.items)
}

function updateResponsive () {
  const pageWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0)
  if (pageWidth <= menu.elementsWidth) {
    menu.element.classList.add('responsive')
    menu.responsive = true
  } else {
    menu.element.classList.remove('responsive')
    menu.responsive = false
    moveUnderline(menu.currentPageIndex)
    moveWrapper(0)
  }
}

export default function (element, selector, currentPage = 0) {
  menu.element = element
  menu.currentPageIndex = currentPage
  createElements($$(selector)).then(() => {
    const initRect = menu.items[menu.currentPageIndex].element.getBoundingClientRect()
    moveUnderline(initRect.left, initRect.width)
    window.addEventListener('resize', updateResponsive)
    updateResponsive()
  })
  return api
}
