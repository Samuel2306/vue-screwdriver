<template>
  <div class="custom_notification pos_fixed" @touchmove.prevent="touchmove">
    <div class="modal" v-if="false"></div>
    <div class="tip pos_center">{{content}}</div>
  </div>
</template>

<script>
  export default {
    name: "Notification",
    props: {
      content: {
        type: String,
        required: true
      },
    },
    methods: {
      close(){
        this.$destroy()
      },
    },
    destroyed() {
      document.body.removeChild(this.$el)
    },
    mounted(){
      setTimeout(() => {
        this.close()
      }, 1500)
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../assets/scss/base";
  .custom_notification{
    .modal{
      background: rgba(0,0,0,0.3);
    }
    .tip{
      background:#040B29;
      border-radius:6px;
      opacity:0.8;

      font-size:16px;
      font-family:PingFangSC-Regular,PingFang SC;
      font-weight:400;
      color:#fff;
      line-height:22px;
      padding: 9px 15px;
    }
  }
</style>
