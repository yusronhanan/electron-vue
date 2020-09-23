
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'




Vue.config.productionTip = false


function nextFactory(context, middleware, index){
  const subseqMiddleware = middleware[index]

  if(!subseqMiddleware) return context.next

  return(...parameters) =>{
    context.next(...parameters)
    const nextMiddleware = nextFactory(context, middleware, index+1)
    subseqMiddleware({...context, next:nextMiddleware})
  }
}

router.beforeEach((to, from, next) =>{
  // console.log('access middlewre')
  if(to.meta.middleware){
    const middleware = Array.isArray(to.meta.middleware) ? to.meta.middleware : [to.meta.middleware]
    const context = {from, next, router, to}
    const nextMiddleware = nextFactory(context, middleware, 1)

    return middleware[0]({...context, next:nextMiddleware})
  }
  return next()
})

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
