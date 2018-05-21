<template>
  <el-scrollbar wrapClass="scrollbar-wrapper">
    <el-menu
      mode="vertical"
      :show-timeout="200"
      :default-active="$route.path"
      background-color="#304156"
      text-color="#bfcbd9"
      active-text-color="#409EFF"
    >
      <sidebar-item :routes="routes"></sidebar-item>
    </el-menu>
  </el-scrollbar>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import SidebarItem from "./SidebarItem.vue";
import { Permission } from "@/store/vuex-decorators";

@Component({
  components: { SidebarItem }
})
export default class Sidebar extends Vue {
  @Permission.State("routes") routes;
}
</script>

<style lang="scss" scoped>
</style>