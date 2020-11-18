<template>
  <dx-form :form-data="formData">
    <!--第一分组 分为4列 -->
    <dx-group-item :col-count="4" css-class="first-group">
      <dx-group-item :col-span="1">
        <dx-simple-item :template="avatar" />
      </dx-group-item>
      <dx-group-item :col-span="3">
        <dx-simple-item data-field="FirstName" />
        <dx-simple-item data-field="LastName" />
        <dx-simple-item
          data-field="BirthDate"
          editor-type="dxDateBox"
          :editor-options="birthDateOptions"
        />
      </dx-group-item>
    </dx-group-item>

    <!--第二分组 分为2列  -->
    <dx-group-item :col-count="2" css-class="second-group">
      <!-- 第一列 -->
      <dx-group-item>
        <dx-simple-item data-field="Address" />
        <dx-simple-item data-field="City" />
        <dx-simple-item
          :editor-options="positionOptions"
          data-field="Position"
          editor-type="dxSelectBox"
        />
      </dx-group-item>

      <!--第二列  -->
      <dx-group-item>
        <dx-simple-item
          :editor-options="stateOptions"
          data-field="State"
          editor-type="dxSelectBox"
        />
        <dx-simple-item data-field="ZipCode" :label="zipOptions" />
        <dx-simple-item :editor-options="phoneOptions" data-field="Mobile">
          <dx-label text="Phone" />
        </dx-simple-item>
      </dx-group-item>

      <!-- 另起一行合并2列为1列 -->
      <dx-simple-item
        :col-span="2"
        editor-type="dxTextArea"
        :editor-options="notesOptions"
        data-field="Notes"
      />
    </dx-group-item>
  </dx-form>
</template>
<script>
//官方示例 https://js.devexpress.com/Demos/WidgetsGallery/Demo/Common/FormsAndMultiPurposeOverview/Vue/Light/
import {
  DxForm,
  DxSimpleItem,
  DxGroupItem,
  DxLabel
} from "devextreme-vue/form";
import { DxTextArea } from "devextreme-vue/text-area";
import { employee, positions, states } from "../data/data.js";

export default {
  components: {
    DxForm,
    DxTextArea,
    DxGroupItem,
    DxSimpleItem,
    DxLabel
  },
  data: function() {
    return {
      formData: employee,
      birthDateOptions: { width: "100%" },
      positionOptions: {
        items: positions,
        value: ""
      },
      stateOptions: {
        items: states,
        value: ""
      },
      zipOptions: {
        text: "Post Code"
      },
      phoneOptions: { mask: "+1 (000) 000-0000" },
      notesOptions: { height: 140 }
    };
  },
  methods: {
    avatar(params) {
      //Return Value: String | DOM Node | jQuery
      /*
        component: inheritor {_events: {…}, _eventsStrategy: inheritor, callBase: ƒ, _$element: initRender(1), _synchronizableOptionsForCreateComponent: Array(3), …}
        dataField: undefined
        editorOptions: {value: null, inputAttr: {…}}
        editorType: undefined
        name: undefined
      */
      let domNode = document.createElement("div");
      domNode.classList.add("form-avatar"); //domNode.classList.remove("form-avatar");
      return domNode;
    }
  },
  watch: {
     // 该回调会在任何被侦听的对象的 property 改变时被调用，不论其被嵌套多深
    formData: {
      handler: function (val, oldVal) { 
         console.log(JSON.parse(JSON.stringify(val)));
      },
      deep: true
    }
  },
};
</script>
<style>
.first-group,
.second-group {
  padding: 20px;
}
.second-group {
  background-color: rgba(191, 191, 191, 0.15);
}
.form-avatar {
  height: 128px;
  width: 128px;
  margin-right: 10px;
  border: 1px solid #d2d3d5;
  border-radius: 50%;
  background-image: url("../assets/images/logo.png");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
}
</style>
