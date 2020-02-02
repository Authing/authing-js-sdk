
export function randomEmail() {
  let rand = Math.random()
    .toString(36)
    .slice(2);
  let email = rand + "@test.com";
  return email;
}