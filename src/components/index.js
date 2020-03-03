
import TheHeader from './the-header'
import Goods from './goods'

export default {
  install(Vue){
    Vue.component('the-header',TheHeader),
    Vue.component('goods',Goods)
  }
}