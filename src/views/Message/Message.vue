<template>
  <div class="custom_message pos_fixed" @touchmove.prevent="touchmove">
    <div class="modal"></div>
    <div class="tip pos_center">
      <div class="title" v-if="title">{{title}}</div>
      <div
        class="content"
        :style="{textAlign: align}"
        v-if="content"
        v-html="content"
        @click="clickContentHandler" />
      <div class="footer flex_space-between" v-if="confirmButtonShow || cancelButtonShow">
        <button class="button text-button" v-if="cancelButtonShow" @click="close('cancel')">{{cancelButtonText}}</button>
        <button class="button text-button confirmButton" v-if="confirmButtonShow" @click="close('confirm')">{{confirmButtonText}}</button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Message",
    props: {
      title: {
        type: String
      },
      content: {
        type: String
      },
      confirmButtonShow: {
        type: Boolean,
        default: true
      },
      confirmButtonText: {
        type: String,
        default: "确定"
      },
      confirmFunc: {
        type: Function
      },
      cancelButtonShow: {
        type: Boolean,
        default: false
      },
      cancelButtonText: {
        type: String,
        default: "取消"
      },
      cancelFunc: {
        type: Function
      },
      clickContent: {
        type: Function
      },
      align: {
        type: String,
        default: 'left'
      }
    },
    methods: {
      close(type){
        if(this[type + 'Func']){
          this[type + 'Func'].call(this.$parent.vueComponentCaller)
        }
        this.$destroy()
      },
      touchmove(){
        return false
      },
      clickContentHandler(e){
        if(this.clickContent){
          this.clickContent.call(this.$parent.vueComponentCaller, e)
        }
      }
    },
    destroyed() {
      document.body.removeChild(this.$el)
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../assets/scss/base";
  .custom_message{
    .modal{
      background: rgba(0,0,0,0.3);
    }
    .tip{
      width:300px;
      height: auto;
      background:rgba(255,255,255,1);
      box-shadow:0px 1px 5px 0px rgba(101,101,101,0.08);
      border-radius:6px;
      overflow: hidden !important;
      .content{
        padding: 30px;
        font-size:16px;
        font-family:PingFangSC-Regular,PingFang SC;
        font-weight:400;
        color: #363C54;
        line-height:24px;
      }
      .footer{
        position: static !important;
        border-top: 1px solid rgba(240,241,242,1) !important;
        padding: 0 !important;
        .button{
          flex: 1 !important;
          padding: 12px 0 !important;
          font-size:16px !important;
          font-family:PingFangSC-Regular,PingFang SC;
          font-weight:400 !important;
          line-height:22px !important;
          & + .button{
            border-left: 1px solid rgba(240,241,242,1) !important;
          }
          &.cancelButton{
            color: #363C54 !important;
          }
          &.confirmButton{
            color: #00bebe !important;
          }
        }
      }
    }
  }
</style>
