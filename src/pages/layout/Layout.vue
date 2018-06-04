<template>
  <div 
    class="app-wrapper" 
    :class="{hideSidebar: !sidebar.opened,
             withoutAnimation: sidebar.withoutAnimation}">
    <sidebar class="sidebar-container" :routes="routes" :sidebar="sidebar"/>
    <div class="main-container">
      <navbar/>
      <tags-view/>
      <!-- <app-main/> -->
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import Sidebar from "@/pages/layout/components/Sidebar/Sidebar.vue";
import Navbar from "@/pages/layout/components/Navbar.vue";
import TagsView from "@/pages/layout/components/TagsView.vue";
import AppMain from "@/pages/layout/components/AppMain.vue";
import { Permission, Settings } from "@/store/vuex-decorators";

@Component({
  components: {
    Sidebar,
    Navbar,
    TagsView,
    AppMain
  }
})
export default class Layout extends Vue {
  @Permission.State("routes") routes;

  @Settings.State("sidebar") sidebar;
}
</script>

<style lang="scss" scoped>
@import "src/styles/mixin.scss";
.app-wrapper {
  @include clearfix;
  position: relative;
  height: 100%;
  width: 100%;
}
.drawer-bg {
  background: #000;
  opacity: 0.3;
  width: 100%;
  top: 0;
  height: 100%;
  position: absolute;
  z-index: 999;
}
</style>
