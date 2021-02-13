const basic = require('basic-authorization-header')

function token(that) {
    return basic(that.$store.state.api.username, that.$store.state.api.password)
}
export default {token}