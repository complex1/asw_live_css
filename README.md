# Live CSS

Hi live css is js extention that helps to write css in runtime env.

## Get Start
```html
<div class="box"></div>
```
```javascript
import liveCss from 'live_css'

var style = {
  height: '20px',
  weight: '20px',
  background: '#777777'
}

// create style instence
var boxStyle = new liveCss('.box', style)

// update state 
var new_style = {
  height: '30px',
  weight: '30px',
  background: '#777777'
}
boxStyle.setState(new_style)

// update individual property
boxStyle.updateState('background', '#000000')

// remove property 
boxStyle.removeState('background')

// get the state
boxStyle.getState()

// get the individual state
boxStyle.getProperty('height')
```