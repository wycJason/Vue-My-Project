<template>
  <AChild v-bind="parentData" />
</template>

<script>
import AChild from "./A-child";
export default {
  name: "parent",
  components: {
    AChild
  },
  data() {
    return {
      parentData: {
        article: {
          title: "标题",
          content: "正文内容"
        }
      }
    };
  }
};


var a={
  "label": {
    "attrName": "label",
    "control": "Input",
    "label": "文本",
    "property": {
      "props": {
        "showInput": true,
        "clearable": true,
        "size": "small",
        "value": ""
      }
    },
    "unit": "",
    "value": "按钮",
    "defaultValue": "按钮"
  },
  "size": {
    "attrName": "size",
    "label": "按钮大小",
    "control": "AttrSelect",
    "unit": "",
    "property": {
      "props": {
        "options": [
          {
            "text": "大",
            "value": "large"
          },
          {
            "text": "小",
            "value": "small"
          },
          {
            "text": "默认",
            "value": "default"
          }
        ]
      }
    },
    "value": "default",
    "defaultValue": "default"
  },
  "type": {
    "attrName": "type",
    "control": "AttrSelect",
    "label": "按钮类型",
    "property": {
      "props": {
        "options": [
          {
            "text": "default",
            "value": "default"
          },
          {
            "text": "primary",
            "value": "primary"
          },
          {
            "text": "dashed",
            "value": "dashed"
          },
          {
            "text": "text",
            "value": "text"
          },
          {
            "text": "info",
            "value": "info"
          },
          {
            "text": "success",
            "value": "success"
          },
          {
            "text": "warning",
            "value": "warning"
          },
          {
            "text": "error",
            "value": "error"
          }
        ]
      }
    },
    "unit": "",
    "value": "primary",
    "defaultValue": "primary"
  },
  "long": {
    "attrName": "long",
    "control": "Checkbox",
    "label": "长按钮",
    "property": {
      "props": {
        "size": "small",
        "value": true
      }
    },
    "unit": "",
    "value": false,
    "defaultValue": false
  }
}
</script>

<style scoped>
</style>