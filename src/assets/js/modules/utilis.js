export const $$ = document.querySelectorAll.bind(document)
export function getDistanceFromTop (element) {
  let yPos = 0

  while (element) {
    yPos += (element.offsetTop)
    element = element.offsetParent
  }

  return yPos
}
export function multipleDistancesFromTop (items) {
  const res = []
  items.forEach(item => {
    res.push(getDistanceFromTop(item.source))
  })
  return res
}
