const getAllPriceUrl = "https://panel.ultikits.com:4433/price/all"

function getAllPrice(that, success, error) {
    that.$http.get(getAllPriceUrl).then(function (result) {
        success(that, result.data)
    }, function (result) {
        error(that, result.data)
    })
}

export default {getAllPrice}