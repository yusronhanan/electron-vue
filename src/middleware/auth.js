import store from '@/store'

export default function auth({next,router}){
    console.log('hit middleware here', router)
    store.commit('account_sign_out')
                    // start here
                   
    return next()
}