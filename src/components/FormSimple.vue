<template>
  <form>
    <h1>表单组件</h1>
    <dx-form>
      <dx-simple-item :editor-options="{value:true,width:80,hoverStateEnabled:false}" editor-type="dxCheckBox" data-field="Check">
           <dx-label text="jason" />
      </dx-simple-item>
    </dx-form>

      <h1>原始组件</h1>
    <dx-check-box :value="true" :width="80" v-model="checkValue" text="Check" :hover-state-enabled="false"/>
  </form>
</template>

<script>
import DxForm, {
  DxGroupItem,
  DxSimpleItem,
  DxButtonItem,
  DxLabel,
  DxRequiredRule,
  DxCompareRule,
  DxRangeRule,
  DxStringLengthRule,
  DxPatternRule,
  DxEmailRule,
  DxItem
} from "devextreme-vue/form";
import DxButton from "devextreme-vue/button";
import { DxCheckBox } from "devextreme-vue/check-box";

export default {
  name: "FormSimple",
  components: {
    DxGroupItem,
    DxSimpleItem,
    DxButtonItem,
    DxLabel,
    DxRequiredRule,
    DxCompareRule,
    DxRangeRule,
    DxStringLengthRule,
    DxPatternRule,
    DxEmailRule,
    DxItem,
    DxForm,
    DxButton,
    DxCheckBox
  },
  data() {
    return {
      text: "jason button",
      checkValue:false
    };
  },
  watch: {
    checkValue:function(newValue,oldValue){//不能使用箭头函数，取不到this实例；理由是箭头函数绑定了父级作用域的上下文，所以 this 将不会按照期望指向 Vue 实例，this.checkValue 将是 undefined。
      console.log(this.checkValue);
    }
  },
  computed: {},
  created() {},
  mounted() {},
  methods: {}
};
</script>

<style scoped>
</style>

