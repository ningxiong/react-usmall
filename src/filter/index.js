export const filterPrice = (price) => {
    return Number(price).toFixed(2)
}

export const filterTime = (time) => {
    let date = new Date(time)
    let year = date.getFullYear()
    let month = (date.getMonth() + 1 + '').padStart(2, '0')
    let date1 = (date.getDate() + '').padStart(2, '0')

    return `${year}-${month}-${date1}`
}