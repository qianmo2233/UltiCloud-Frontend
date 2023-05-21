const getAllPriceUrl = "https://api.ultikits.com/price/all"

function getAllPrice(that, success, error) {
    that.$http.get(getAllPriceUrl).then(function (result) {
        success(that, result.data)
    }, function (result) {
        error(that, result.data)
    })
}

export default {getAllPrice}
