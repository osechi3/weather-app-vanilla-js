export class Component {
  constructor (parentElement, shouldRender = true) {
    this.parentElement = parentElement
    if (shouldRender) this.render()
  }

  render () {}

  createBaseElement (tag, className, id) {
    const element = document.createElement(tag)
    if (className) element.className = className
    if (id) element.id = id
    this.parentElement.append(element)
    return element
  }
}
