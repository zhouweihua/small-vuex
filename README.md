# small-vuex
this just the vuex with 10 line

 简化vuex 如果不需要那么多复杂的功能 一个10句话的mini vuex是你最佳的选择

使用
// main中 先引入
import store from './store';

// 设定全局方法
Vue.prototype.store = store;

// .vue文件里 mapGetters 替换成最原始的使用
computed: {
  // ...mapGetters(["a"]),
  a: function() {
    return this.store.state.a;
  }
},
