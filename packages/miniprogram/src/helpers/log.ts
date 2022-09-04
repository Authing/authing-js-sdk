export function error(errorFunction: string, errorContent: unknown) {
  console.error(
    `Authing miniprogram sdk error in "${errorFunction}": `,
    errorContent
  )
}
