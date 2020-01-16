export default function checkInput(input, reqirements) {
  /*
 
  */
  if (!reqirements) {
    return
  }
  for (let i = 0; i <= reqirements.length - 1; i++) {
    let item = reqirements[i];
    if (item instanceof Object) {
      let { name, type } = item;
      if (!input[name]) {
        throw Error(`input.${name} is not provided.`);
      }
      if (type) {
        if (!input[name] instanceof type) {
          throw Error(`input.${name} must be type ${type}`);
        }
      }
    }
  }
}