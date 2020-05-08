export function paseGroupMetadata(list) {
  list = list.map(item => {
    let value = item.value

    try {
      value = JSON.parse(value)
    } catch (error) {

    }
    item.value = value
    return item
  })
  return list
}