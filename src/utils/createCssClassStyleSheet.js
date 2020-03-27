export default function createCssClassStyleSheet(className, styleSheet){
  let styleTag = document.createElement('style')
  let styleText = `
    .${className} {
      ${styleSheet}
    }
  `
  let textNode = document.createTextNode(styleText)
  styleTag.appendChild(textNode)
  document.head.appendChild(styleTag)
}