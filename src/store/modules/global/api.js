export default {
    namespaced: true,
    state: {
        username: 'client',
        password: '112233',
        key: 'aFEAfae3%^AF!#HRFHwerwasdf#%^&ASFerys$24GS4',
        root: {
            auth: 'https://panel.ultikits.com:4432',
            app: 'https://panel.ultikits.com:4433',
        },
        path: {
            oauth: '/oauth/token',
            user: {
                register: '/user/adduser',
                profile: '/user/',
                server: '/allservers',
                update: '/user/updateuser/',
                cdk: '/active',
                access: '/user/getToken',
                refresh: '/user/refreshToken',
            },
            server: {
                add: '/server/addserver',
                get: '/server/',
                update: '/server/updateserver/',
                delete: '/server/delserver/',
            },
            payment: {
                create: '/payment/create',
                check: '/payment/check',
                recall: '/payment/recall',
                history: '/payment/history',
            }
        }
    }
}