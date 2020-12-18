const LiveCss = function (selector, state = {}) {
  this.state = JSON.parse(JSON.stringify(state)) || {}

  const id = 'live-css-' + 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8)
    return v.toString(16)
  })

  this.selector = selector

  this.render = function () {
    let css = ''
    if (typeof(this.selector) === 'string') {
      css += this.selector
      css += '{'
      for (let prop in this.state) {
        let property = prop
        let value = this.state[prop]
        try {
          property = property.replace(/[A-Z]/g, "-$&").toLowerCase()
          css += `${property}: ${value};`
        } catch (e) {
          throw e
        }
      }
      css += '}'
    } else {
      throw new Error(`${this.selector} is invalid selector`)
    }
    let element = document.getElementById(id)
    if (element === null) {
      element = document.createElement('style')
      element.setAttribute('id', id)
      document.getElementsByTagName('body')[0].append(element)
    }
    element.innerText = css
  }

  this.setState = function (state) {
    this.state = JSON.parse(JSON.stringify(state)) || this.state
    this.render()
  }

  this.updateState = function (property, value) {
    if(property && typeof(property) === 'string') {
      state[property] = value
    } else {
      throw new Error(`${property} you are trying to set as state is invalid`)
    }
    this.render()
    return value
  }

  this.removeState = function (property) {
    try {
      delete state[property]
      this.render()
    } catch(e) {
      throw e
    }
  }

  this.getState = function () {
      return state
  }

  this.getProperty = function (property) {
    return state[property]
  }
}

if ( typeof noGlobal === "undefined" ) {
	window.LiveCss = LiveCss;
}
