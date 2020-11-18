<template>
  <div>
    <h1>插槽内容</h1>
    <slot-com>
       <template slot="header" slot-scope="{user}">
            <h1>header</h1>
            {{user}}
        </template>
          <p slot-scope="slotProps">
            如果你希望更明确一些，仍然可以在一个 template 中包裹默认插槽的内容<br>
             {{slotProps}}
            </p>
        <template slot="footer" slot-scope="{info}">
            <h1>footer</h1>
             {{info}}
        </template>
    </slot-com>
  <hr>

    <br><br>
    <dx-button :text="text" @click="sayHelloWorld" />

    <dx-text-box :value.sync="bindingProperty" />
    <dx-text-box v-model="bindingPropertyValue" />

    <!-- 
      https://js.devexpress.com/Documentation/ApiReference/UI_Widgets/dxTooltip/ 

      属性：close-on-outside-click 对应API文档  closeOnOutsideClick	
      事件：shown事件对应文档shown事件
      方法：this.$refs["tips"].instance.show(); 对应文档  show()  方法
    -->
    <h1 id="product1" @mouseenter="toggleDefault" @mouseleave="toggleDefault">鼠标移上去显示product的提示</h1>
    <dx-tooltip
      ref="tips"
      @shown="notifyInfo"
      :visible.sync="defaultVisible"
      :close-on-outside-click="true"
      target="#product1"
    >product</dx-tooltip>
  </div>
</template>
<script>
/*组件方式引用*/
import DxButton from "devextreme-vue/button";
import notify from "devextreme/ui/notify";
import DxTextBox from "devextreme-vue/text-box";
import DxTooltip from "devextreme-vue/ui/tooltip";
import SlotCom from "./SlotCom"
export default {
  name: "DevExtreme",
  components: {
    DxButton,
    DxTextBox,
    DxTooltip,
    SlotCom
  },
  data() {
    return {
      text: "Click me!",
      bindingProperty: "Some value",
      bindingPropertyValue: "Some value",
      defaultVisible: false
    };
  },
  methods: {
    sayHelloWorld() {
      this.$refs["tips"].instance.show();
    },
    toggleDefault() {
      this.defaultVisible = !this.defaultVisible;
    },
    notifyInfo(){
      notify(this.bindingProperty+','+this.bindingPropertyValue);
    }
  }
};
</script>

<style scoped>
</style>