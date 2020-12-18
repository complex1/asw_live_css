var live_css = null
if (window && window.LiveCss) {
  live_css = window.LiveCss
} else {
  live_css = require('./live-css')
}
export default  live_css