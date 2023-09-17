// 按需导入element组件 并全局注册
import { Button } from 'element-ui'

import Vue from 'vue'

// element-ui 使用时分为三大类
// 1、组件 Vue.use(Xxx)
// 2、方法 将方法写入Vue的原型中 那么在组件中就可以使用this.$xxx访问了 Vue.prototype.$方法名 = 组件名
// 3、指令

// 1、组件 想要使用的组件和关联的组件都必须引入、注册
Vue.use(Button)
// Vue.use(Popconfirm)
// 引入Popover的原因 Popconfirm使用了Popover的样式
// Vue.use(Popover)


// 2、指令 组件的指令在此注册
// Vue.use(Loading)


// 3、方法 组件的功能在此注册
// Vue.prototype.$方法名 = 组件名
// 组件名需要引入 不用在组件那里注册
// Vue.prototype.$notify = Notification
// Vue.prototype.$message = Message