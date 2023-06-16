const developer = "https://api.ultikits.com/developer/"
const registerDeveloperUrl = "https://api.ultikits.com/developer/register";

function checkDeveloper(that, success, error) {
  that.$http.get(
    developer + that.$store.state.user.profile.id,
    {},
    {headers: {Authorization: 'Bearer ' + that.$store.state.user.auth.token.access}}
  ).then(function (result) {
    success(result.data)
  }, function (result) {
    error(that, result.data)
  })
}

function registerDeveloper(domainName, that, success, error) {
  that.$http.post(
    registerDeveloperUrl + "?userId=" + that.$store.state.user.profile.id + "&domainName=" + domainName
  ).then(function () {
    success(that)
  }, function (result) {
    error(that, result.data)
  })
}

export default {
  checkDeveloper,
  registerDeveloper
}
