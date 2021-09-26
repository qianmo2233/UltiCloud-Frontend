function Launch(that, text, timeout = 3000) {
    that.$store.dispatch('setSnackbarText', text).then()
    that.$store.dispatch('setSnackbarTimeout', timeout).then()
    that.$store.dispatch('setSnackbarStatus', true).then()
}

export default {Launch}