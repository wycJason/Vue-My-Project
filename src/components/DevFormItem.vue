<template>
  <form>
    <div id="test">jquery已生效</div>
    <br><br>
    <a href="https://cdn3.devexpress.com/jslib/19.1.7/js/dx.all.js">dx.all.js</a>
    <dx-form>
      <dx-simple-item
        :editor-options="buildGridDropDownBoxOptions()"
        editor-type="dxDropDownBox"
        data-field="下拉网格"
      ></dx-simple-item>
    </dx-form>
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
//import DxDataGrid from 'devextreme-vue/data-grid';
import DxAutocomplete from "devextreme-vue/autocomplete";
import "devextreme-vue/text-area";
import tableData from "../lib/data.js";




export default {
  name: "LayoutForm",
  components: {
    DxGroupItem,
    DxSimpleItem,
    DxButtonItem,
    DxLabel,
    DxRequiredRule,
    DxCompareRule,
    DxPatternRule,
    DxRangeRule,
    DxEmailRule,
    DxStringLengthRule,
    DxForm,
    DxAutocomplete,
    DxItem,
    //DxDataGrid
  },
  data() {
    return {
      gridDataSource: null,
      grid_BoxValue: 3,
      grid_SelectedRowKeys: [3]
    };
  },
  computed: {
    gridBoxValue: {
      get: function() {
        return this.grid_BoxValue;
      },
      set: function(value) {
        this.grid_SelectedRowKeys = (value && [value]) || [];
        this.grid_BoxValue = value;
      }
    }
  },
  created() {
    this.gridDataSource = tableData.customers();   
  },
  mounted() {
      console.log($("#test").text());
  },
  methods: {
    buildGridDropDownBoxOptions() {
      return {
        value: this.gridBoxValue,
        deferRendering: false,
        displayExpr: this.gridBox_displayExpr,
        showClearButton: true,
        dataSource: this.gridDataSource,
        valueExpr: "ID",
        placeholder: "Select a value...",
        columns: ["CompanyName", "City", "Phone"],
        contentTemplate: function(e) {
          var value = e.component.option("value");
          var $dataGrid = $("<div>").dxDataGrid({
            dataSource: e.component.option("dataSource"),
            columns: ["CompanyName", "City", "Phone"],
            hoverStateEnabled: true,
            paging: { enabled: true, pageSize: 10 },
            filterRow: { visible: true },
            scrolling: { mode: "infinite" },
            selection: { mode: "single" },
            selectedRowKeys: [value],
            height: "100%",
            onSelectionChanged: function(selectedItems) {
              var keys = selectedItems.selectedRowKeys;
              var hasSelection = keys.length;
              e.component.option("value", hasSelection ? keys[0] : null);
            }
          });

          var dataGrid = $dataGrid.dxDataGrid("instance");

          e.component.on("valueChanged", function(args) {
            dataGrid.selectRows(args.value, false);
          });
          return $dataGrid;
        }
      };
    },
    gridBox_displayExpr(item) {
      return item && `${item.CompanyName} <${item.Phone}>`;
    }
  }
};
</script>

<style scoped>
</style>

