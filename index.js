const foregroundColor = '#eff0f6'
const backgroundColor = '#191b2a'
const red = '#ff476e'
const green = '#39ffba'
const yellow = '#ffee7a'
const blue = '#94bfff'
const magenta = '#f1b3f1'
const cyan = '#01f7f7'

exports.decorateConfig = config =>
  Object.assign({}, config, {
    backgroundColor,
    foregroundColor,
    borderColor: '#191b2a',
    cursorColor: '#eff0f6',
    colors: {
      black: backgroundColor,
      red,
      green,
      yellow,
      blue,
      magenta,
      cyan,
      white: '#eff0f6',
      lightBlack: '#2a2d46',
      lightRed: red,
      lightGreen: green,
      lightYellow: yellow,
      lightBlue: blue,
      lightMagenta: magenta,
      lightCyan: cyan,
      lightWhite: foregroundColor
    },
    css: `
    ${config.css}
  `
  })
