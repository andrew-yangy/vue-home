<template>
  <el-scrollbar wrap-class="scrollbar-wrapper">
    <el-menu
      mode="vertical"
      :show-timeout="200"
      :default-active="$route.path"
      :collapse="!sidebar.opened"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <sidebar-item :routes="routes"/>
    </el-menu>
  </el-scrollbar>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import SidebarItem from "./SidebarItem.vue";

@Component({
  components: { SidebarItem }
})
export default class Sidebar extends Vue {
  @Prop() routes;

  @Prop() sidebar;
}
</script>

<style lang="scss" scoped>
</style>