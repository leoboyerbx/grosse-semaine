import $ from 'jquery'
import data from './equipmentsData'

export default function equipmentSearch () {
    const $wrapper = $('#pro__equipments-list')
    generateList($wrapper)

    $('#search-field').focus().keyup(function (ev) {
        const $input = $(this)
        let val = $input.val()

        if (val === '') {
            $('.pro__equipment-item').show()
            $wrapper.find('.pro__equipment-item').each(function () {
                unHighlightNext($(this))
            })
        }

        let regEx = `(.*)(${val})(.*)`

        $('.pro__equipment-item').show()

        $wrapper.find('.pro__equipment-item').each(function () {
            const $item = $(this)
            closeHiddenParagraphs($item)
            unHighlightNext($item)
            let foundResult = false;
            $item.find('p.equipment__description, h3, .tag').each(function () {
                const $span = $(this)
                const cleaned = $span.text()
                $span.empty().append(cleaned)
                let resultats = $span.text().match(new RegExp(regEx, 'i'))
                if (resultats) {
                    var string = '';
                    for (let i in resultats) {
                        if (i > 0) {
                            if (i%2 === 0) {
                                string += `<span class="highlighted">${resultats[i]}</span>`
                            } else {
                                string += resultats[i]
                            }
                        }
                    }
                    $span.empty().append(string) // SURLIGNAGE
                    if ($span.hasClass('hidden-paragraph')) highlightNext($item)
                    foundResult = true
                }
            })
            if(!foundResult) {
                $item.hide()
            }
        })
    })
}

function openHiddenParagraphs ($item) {
    $item.data('open', 'true')
    $item.find('.hidden-paragraph').show()
    $item.find('.readmore-link').text('Moins')
}
function closeHiddenParagraphs ($item) {
    $item.data('open', 'false')
    $item.find('.hidden-paragraph').hide()
    $item.find('.readmore-link').text('Lire la suite')
}
function toggleHiddenParagraphs ($item) {
    if ($item.data('open') === 'true') {
        closeHiddenParagraphs($item)
    } else {
        openHiddenParagraphs($item)
    }
}
function highlightNext ($item) {
    console.log('highlight')
    $item.find('.readmore-link').addClass('highlighted')
}
function unHighlightNext ($item) {
    console.log('hey')
    $item.find('.readmore-link').removeClass('highlighted')
}

function sortByTag(array, index = 0) {
    return array.sort( (a, b) => a.tags[index].name <= b.tags[index].name ? -1 : 1)
}

function autoParagraphs (string, className = '', hiddenClassName = '') {
    let classCode = className ? ` class="${className}"` : ''
    let hiddenClassCode = hiddenClassName ? ` class="${className} ${hiddenClassName}"` : classCode
    return `<p${classCode}>` + string.split('\n').join(`</p><p${hiddenClassCode}>`).split('\t').join(`</p><p${hiddenClassCode}>`) + '</p>'
}

function generateList ($wrapper) {
    let generatedData = []
    const sortedData = sortByTag(data)
    for (const equipmentItem of sortedData) {
        let tags = '';
        for (const tag of equipmentItem.tags) {
            tags += ` <div class="tag ${tag.class}">${tag.name}</div>`
        }

        let parsedDesc = autoParagraphs(equipmentItem.description, 'equipment__description', 'hidden-paragraph')

        const element = document.createElement('div')
        element.className = 'pro__equipment-item'
        element.innerHTML = `<div class="col col-left">
                    <h3>${equipmentItem.name}</h3>
                    ${parsedDesc}

                </div>
                <div class="col col-right">
                    <a href="${equipmentItem.url}" class="download-icon"></a>
                    <p>Fiche technique</p>
                </div>
                <div class="pro__equipment-item__tags">
                    ${tags}
                </div>
`
        if (element.querySelector('.hidden-paragraph')) {
            // si il existe un paragraphe caché
            const readNext = document.createElement('a')
            readNext.href = '#'
            readNext.className = 'readmore-link'
            readNext.innerText = 'Lire la suite'
            readNext.addEventListener('click', ev => {
                ev.preventDefault()
                toggleHiddenParagraphs($(element))
            })
            element.querySelector('.equipment__description').after(readNext)
        }
        $wrapper.get(0).appendChild(element)
        equipmentItem.element = element
        closeHiddenParagraphs($(equipmentItem.element))
        generatedData.push(equipmentItem)
    }
    return generatedData
}

