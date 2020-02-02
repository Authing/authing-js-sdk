export default function checkPreflight() {
  let service = Promise.resolve('ok')
  let cdn = Promise.resolve('ok')
  if (this.opts.preflight) {
    service = this.preflightFun().catch(this.opts.onInitError)
  }

  if (this.opts.cdnPreflight) {
    cdn = this.cdnPreflightFun().catch(this.opts.onInitError)
  }
  return [service, cdn]
}
