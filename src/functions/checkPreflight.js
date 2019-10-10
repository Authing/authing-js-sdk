export async function checkPreflight() {
  if (this.opts.preflight) {
    try {
      await this.preflightFun();
    } catch (error) {
      throw error;
    }
  }

  if (this.opts.cdnPreflight) {
    try {
      await this.cdnPreflightFun();
    } catch (error) {
      throw error;
    }
  }
}