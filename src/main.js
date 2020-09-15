import Vue from 'vue';
import App from './App.vue';
import router from './router';

// Vuesax setup
import Vuesax from 'vuesax';
import 'vuesax/dist/vuesax.css'; //Vuesax styles
import 'material-icons/iconfont/material-icons.css';

// custom css
import './assets/font/Aeonik/style.css';
import 'line-awesome/dist/line-awesome/css/line-awesome.min.css';
import './assets/styles/main.css';

Vue.config.productionTip = false;

Vue.use(Vuesax, {
  theme: {
    colors: {
      primary: 'rgb(0, 138, 251)',
      success: 'rgb(23, 201, 100)',
      danger: 'rgb(242, 19, 93)',
      warning: 'rgb(255, 130, 0)',
      dark: 'rgb(36, 33, 69)',
    },
  },
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
