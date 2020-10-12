export const createCssClassStyleSheet = (
  className: string,
  styleSheet: any
) => {
  let styleTag = document.createElement('style');
  let styleText = `
    .${className} {
      ${styleSheet}
    }
  `;
  let textNode = document.createTextNode(styleText);
  styleTag.appendChild(textNode);
  document.head.appendChild(styleTag);
};
