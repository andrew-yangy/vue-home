<template>
  <el-tabs 
    :value="$route.name" 
    type="card"
    closable 
    @tab-click="clickTab"
    @tab-remove="removeTab">
    <el-tab-pane
      v-for="item in visitedTabs"
      :key="item.name"
      :label="item.title"
      :name="item.name"
    />
  </el-tabs>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { Tabs } from "@/store/vuex-decorators";

@Component
export default class Layout extends Vue {
  @Tabs.State("visitedTabs") visitedTabs;

  @Tabs.Action delTab;

  clickTab({ name }) {
    this.$router.push({ name });
  }

  removeTab(tabName) {
    const tabIndex = this.visitedTabs.findIndex(tab => tab.name === tabName);
    this.delTab(tabName);
    if (tabName === this.$route.name) {
      const length = this.visitedTabs.length;
      const nextIndex = tabIndex < length ? tabIndex : tabIndex - 1;
      const nextPath = this.visitedTabs[nextIndex]
        ? this.visitedTabs[nextIndex].path
        : "/";
      this.$router.push(nextPath);
    }
  }
}
</script>
<style lang="scss">
</style>

