// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './vuex'

Vue.config.productionTip = false


//导入 muse-ui 的库
import 'muse-components/styles/base.less' // 加载基础的样式
import Paper from 'muse-components/paper/paper'
import BottomNav from 'muse-components/bottomNav/bottomNav'
import BottomNavItem from 'muse-components/bottomNav/BottomNavItem'
import appBar from 'muse-components/appBar/appBar'
import textField from 'muse-components/textField/textField'
import flatButton from 'muse-components/flatButton/flatButton'
import iconButton from 'muse-components/iconButton/iconButton'
import flexbox from 'muse-components/flexbox/flexbox'
import infiniteScroll from 'muse-components/infiniteScroll/infiniteScroll'
import list from 'muse-components/list/list'
import divider from 'muse-components/divider/divider'
import item from 'muse-components/item/item'

Vue.component(Paper.name, Paper)
Vue.component(BottomNav.name, BottomNav)
Vue.component(BottomNavItem.name, BottomNavItem)
Vue.component(appBar.name, appBar)
Vue.component(textField.name, textField)
Vue.component(flatButton.name, flatButton)
Vue.component(iconButton.name, iconButton)
Vue.component(flexbox.name, flexbox)
Vue.component(infiniteScroll.name, infiniteScroll)
Vue.component(list.name, list)
Vue.component(divider.name, divider)
Vue.component(item.name, item)



//导入 mint-ui 的库
import { Swipe, SwipeItem } from 'mint-ui';
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);




/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
