export default class AssignClass {
    constructor (element, prefix) {
       this.element = element
        this.prefix = prefix
    }

    assign (className) {
        this.element.removeClass (function (index, className) {
            const regex = new RegExp('(^|\\s)' + this.prefix + '\\S+',"g")
            return (className.match (regex) || []).join(' ');
        })
        this.element.addClass(prefix + className)
    }

}
