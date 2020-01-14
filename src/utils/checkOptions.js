export default function checkOptions(options, reqirements) {
  /*
 
  */
  if (!reqirements) {
    return
  }
  for (let i = 0; i <= reqirements.length - 1; i++) {
    let item = reqirements[i];
    if (item instanceof Object) {
      let { name, type } = item;
      if (!options[name]) {
        throw Error(`options.${name} is not provided.`);
      }
      if (type) {
        if (!options[name] instanceof type) {
          throw Error(`options.${name} must be type ${type}`);
        }
      }
    }
  }
}