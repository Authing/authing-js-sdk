export function checkPreflight() {
  if (this.opts.preflight) {
    return this.preflightFun();
  }

  if (this.opts.cdnPreflight) {
    return this.cdnPreflightFun();
  }
}
