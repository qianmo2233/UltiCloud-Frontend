const md5 = require('md5');

function Get(username, time) {
    const secret = 'aFEAfae3%^AF!#HRFHwerwasdf#%^&ASFerys$24GS4'
    return md5(username + time + secret)
}

export default {Get}