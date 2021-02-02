import store from "@/store";

function data(data) {
    store.state.user.email = data.email
    store.state.user.emailValidated = data.emailValidated
    store.state.user.joinDate = data.joinDate
    store.state.user.pro = data.pro
    store.state.user.proExpiryDate = data.proExpiryDate
}

export default {data}