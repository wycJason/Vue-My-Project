<template>
  <div id="form-demo">
      <!--表单显示  -->
    <div class="widget-container">
      <div>Select company:</div>
      <dx-select-box
        :data-source="companies"
        v-model="company"
        display-expr="Name"
      />
      <dx-form
        id="form"
        :form-data="company"
        :read-only="readOnly"
        :show-colon-after-label="showColon"
        :label-location="labelLocation"
        :min-col-width="minColWidth"
        :col-count="colCount"
        :width="width"
      />
    </div>
      
        <!--表单配置项  -->
    <div class="options">
      <div class="caption">Options</div>
      <div class="option">
        <span>Label location:</span>
        <dx-select-box
          :items="['left', 'top']"
          v-model="labelLocation"
        />
      </div>
      <div class="option">
        <span>Columns count:</span>
        <dx-select-box
          :items="['auto', 1, 2, 3]"
          v-model="colCount"
        />
      </div>
      <div class="option">
        <span>Min column width:</span>
        <dx-select-box
          :items="[150, 200, 300]"
          v-model="minColWidth"
        />
      </div>
      <div class="option">
        <span>Form width:</span>
        <dx-number-box
          :max="550"
          v-model="width"
        />
      </div>            
      <div class="option">
        <dx-check-box
          v-model="readOnly"
          text="readOnly"
        />
      </div>
      <div class="option">
        <dx-check-box
          v-model="showColon"
          text="showColonAfterLabel"
        />
      </div>
    </div>
      
      
  </div>
</template>
<script>
//官方示例 https://js.devexpress.com/Demos/WidgetsGallery/Demo/Form/Overview/Vue/Light/
import { DxCheckBox, DxSelectBox, DxNumberBox, DxForm } from 'devextreme-vue';
import service from '../data/data.js';

export default {
  components: {
    DxCheckBox,
    DxSelectBox,
    DxNumberBox,
    DxForm
  },
  data() {
    const companies = service.getCompanies();
    return {
      labelLocation: 'left',
      readOnly: false,
      showColon: true,
      minColWidth: 300,
      colCount: 2,
      companies: companies,
      company: companies[0],
      width: null
    };
  },
  watch: {
      company:function(n,o){
          console.log(JSON.parse(JSON.stringify(n)));
      }
  },
};
</script>
<style scoped lang="less">
#form-demo{
    display: flex;
    .widget-container {
        padding: 20px;
        width: 800px;
        #form {
            margin-top: 25px;
        }
    }


    .options {
        padding: 20px;   
        width: 260px;    
        background-color: rgba(191, 191, 191, 0.15);
        .caption {
            font-size: 18px;
            font-weight: 500;
        }
        .option {
            margin-top: 10px;
        }
    }
}
</style>
