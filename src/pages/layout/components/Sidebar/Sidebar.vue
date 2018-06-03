<template>
  <el-scrollbar wrap-class="scrollbar-wrapper">
    <el-menu
      mode="vertical"
      :show-timeout="200"
      :default-active="$route.path"
      class="el-menu-vertical-demo"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <sidebar-item :routes="routes"/>
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