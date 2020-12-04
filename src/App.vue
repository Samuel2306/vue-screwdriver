<template>
  <div id="app" style="height: 100%;">
    <button @click="onOpenModal">按钮</button>
    <div class="modal" v-if="opened">
      <button @click="onCloseModal">X</button>
      <div class="modal-content" v-scroll-lock="opened">
        <p>A bunch of scrollable modal content</p>
      </div>
    </div>
    <div style="max-height: 100%; overflow: auto;">
      <img src="./assets/logo.png">
      <h1>{{ msg }}</h1>
      <h1>{{ test | swdFormatterEmptyData('----') }}</h1>
      <h1>{{ test1 | swdFormatterMoney(formatterBefore, formatterAfter) }}</h1>
      <h2>Essential Links</h2>
      <div
        id="sss"
        style="width: 30%"
        v-clipboard:copy="test1"
        v-clipboard:success="copy"
        v-clipboard:error="onError">
        很抱歉！没有搜索到相关模板很抱歉！没有搜索到相关模板很抱歉！没有搜索到相关模板很抱歉！没有搜索到相关模板word name
        很抱歉！没有搜索到相关模板很抱歉！没有搜索到相关模板很抱歉！没有搜索到相关模板很抱歉！没有搜索到相关模板word name

        很抱歉！没有搜索到相关模板很抱歉！没有搜索到相关模板很抱歉！没有搜索到相关模板很抱歉！没有搜索到相关模板word name

        很抱歉！没有搜索到相关模板很抱歉！没有搜索到相关模板很抱歉！没有搜索到相关模板很抱歉！没有搜索到相关模板word name

        很抱歉！没有搜索到相关模板很抱歉！没有搜索到相关模板很抱歉！没有搜索到相关模板很抱歉！没有搜索到相关模板word name

        很抱歉！没有搜索到相关模板很抱歉！没有搜索到相关模板很抱歉！没有搜索到相关模板很抱歉！没有搜索到相关模板word name

        很抱歉！没有搜索到相关模板很抱歉！没有搜索到相关模板很抱歉！没有搜索到相关模板很抱歉！没有搜索到相关模板word name

      </div>
      <ul>
        <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
        <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
        <li><a href="https://chat.vuejs.org" target="_blank">Community Chat</a></li>
        <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
      </ul>
      <h2>Ecosystem</h2>
      <ul>
        <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
        <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
        <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
        <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      test: 0,
      test1: 100.111,
      opened: false
    }
  },
  methods: {
    formatterBefore(value){
      return parseInt(value)
    },
    formatterAfter(value){
      return value + '万'
    },
    copy(e){
      console.log(e.text)
    },
    onError(e){
      console.log(e)
    },

    onOpenModal () {
      this.opened = true
    },

    onCloseModal () {
      this.opened = false
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
  position: relative;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
  .modal{
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
  }
</style>
