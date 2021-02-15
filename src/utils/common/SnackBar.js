function Launch(that, text, timeout = 3000) {
    that.$store.dispatch('layout/setSnackbarText', text)
    that.$store.dispatch('layout/setSnackbarTimeout', timeout)
    that.$store.dispatch('layout/setSnackbarStatus', true)
}

export default {Launch}