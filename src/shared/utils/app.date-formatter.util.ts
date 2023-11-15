export function AppFormatDate (unformattedDate: string): string {
  const date = new Date(unformattedDate)
  const formattedDate = `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}`

  return formattedDate
}

/**
 *
 * @param {String} unformattedDate - Ejemplo de lo que se espera => '2022-05-27' => 'yyyy-mm-dd'
 * @returns Un String con el formado adecuado para "subscriptionListDto" => '27 - 05 - 2022' => 'dd - mm - yyyy'
 */
export function AppFormatDateDynamiReAPI (unformattedDate: string): string {
  const date = unformattedDate.split('-')
  const formattedDate = `${date[2]} - ${date[1]} - ${date[0]}`

  return formattedDate
}
