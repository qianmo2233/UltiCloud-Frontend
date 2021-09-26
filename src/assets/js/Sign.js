const secret = 'aFEAfae3%^AF!#HRFHwerwasdf#%^&ASFerys$24GS4'
const md5 = require('md5');

function getSignString(username, time) {
    return md5(username + time + secret)
}

export default {getSignString}