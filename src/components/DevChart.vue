<template>
  <dx-chart :data-source="data">
    <dx-tooltip :enabled="true" format="thousands" />
    <dx-argument-axis :tick-interval="10" />
    <dx-series type="bar" />
    <dx-legend :visible="true" />
  </dx-chart>
</template>
 
<script>
import DxChart, {
  DxTooltip,
  DxArgumentAxis,
  DxSeries,
  DxLegend
} from "devextreme-vue/chart";

const data = [
  {
    arg: 1990,
    val: 5320816667
  },
  {
    arg: 2000,
    val: 6127700428
  },
  {
    arg: 2010,
    val: 6916183482
  }
];

export default {
  components: {
    DxTooltip,
    DxChart,
    DxArgumentAxis,
    DxSeries,
    DxLegend
  },
  data() {
    return {
      data
    };
  }
};
</script>

<style scoped>
</style>