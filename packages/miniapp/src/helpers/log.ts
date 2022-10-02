export function error(errorFunction: string, errorContent: any) {
  console.error(
    `Authing Miniapp SDK error in "${errorFunction}": `,
    errorContent
  )
}
