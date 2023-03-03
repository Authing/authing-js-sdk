export { }

declare global {
  interface Window {
    readonly crossOriginIsolated: boolean;
  }
}
