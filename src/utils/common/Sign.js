const md5 = require('md5');

function get(that ,username, time) {
    return md5(username + time + that.$store.state.api.key)
}

export default {get}