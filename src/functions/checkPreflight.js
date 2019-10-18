export function checkPreflight() {
  let p = Promise.resolve()
  if (this.opts.preflight) {
    p = p.then(() => this.preflightFun());
  }

  if (this.opts.cdnPreflight) {
    p = p.then(() => this.cdnPreflightFun())
  }
  return p
}
