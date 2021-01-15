<template>
  <div v-show="showLoading" class="loading" ref="loading">
    <div class="mask commonMask"></div>
    <div class="loading">
      <div class="mask loading-mask" :class="{hasText: text}"></div>
      <div class="v-spinner" :class="{hasText: text}">
        <div class="v-dot"
             style="height: 35px; width: 35px; border-color: rgb(0, 190, 190) rgb(0, 190, 190) transparent; border-radius: 100%;"></div>
        <div class="text" v-if="text">{{text}}</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "loading",
    data () {
      return {
        showLoading: false,
        text:  ''
      }
    },
    mounted () {
      this.$refs.loading.addEventListener('touchmove', (e) => {
        e.preventDefault();
      })
    },
    beforeDestroy () {
      this.setText('');
      this.$refs.loading.removeEventListener('touchmove', (e) => {
        e.preventDefault();
      })
    },
    methods: {
      setText(str){
        this.text = str;
      }
    }
  }
</script>

<style lang="scss" scoped>
  @keyframes left-dot {
    from{
      -webkit-transform: translateX(0);
      transform: translateX(0);
    }
    50%{
      -webkit-transform: translateX(25px);
      transform: translateX(25px);
    }
    to{
      -webkit-transform: translateX(0px);
      transform: translateX(0px);
    }
  }
  @keyframes right-dot {
    from{
      -webkit-transform: translateX(0);
      transform: translateX(0);
    }
    50%{
      -webkit-transform: translateX(-25px);
      transform: translateX(-25px);
    }
    to{
      -webkit-transform: translateX(0px);
      transform: translateX(0px);
    }
  }
  .loading{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 10001;
  }
  .mask {
    position: fixed;
    left: 0;
    bottom: 0;
    right: 0;
    top: 0;
    z-index: 1001;
    &.hasText{
      background: rgba(0, 0, 0, 0.3);
    }
  }
  .v-spinner {
    text-align: center;
    position: fixed;
    left: 50%;
    top: 50%;
    -webkit-transform: translate(-50%,-50%);
    transform: translate(-50%,-50%);
    z-index: 1002;
    &.hasText{
      background-color: #fff;
      padding: 25px;
      border-radius:8px;
    }
    .text {
      font-size:14px;
      font-family:PingFangSC-Regular,PingFang SC;
      font-weight:400;
      color:rgba(105,109,127,1);
      line-height:20px;
    }
  }
  .v-dot {
    position: relative;
    height: 35px;
    width: 35px;
    border-color: rgb(0, 190, 190) rgb(0, 190, 190) transparent;
    border-radius: 100%;
    margin: 0 auto;
  }
  .v-dot:before, .v-dot:after {
    content: '';
    display: block;
    position: absolute;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    top: 50%;
    margin-top: -5px;
  }
  .v-dot:before {
    background: #00dada;
    -webkit-animation: left-dot 1.2s infinite both;
    animation: left-dot 1.2s infinite both;
    left: 0;
  }
  .v-dot:after {
    background: #00bebe;
    -webkit-animation: right-dot 1.2s infinite both;
    animation: right-dot 1.2s infinite both;
    right: 0;
  }
</style>
