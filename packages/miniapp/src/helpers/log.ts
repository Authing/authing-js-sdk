export function error(errorFunction: string, errorContent: unknown) {
  console.error(
    `Authing miniapp sdk error in "${errorFunction}": `,
    errorContent
  )
}
