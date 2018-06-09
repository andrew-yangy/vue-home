<template>
  <div 
    class="app-wrapper" 
    :class="{hideSidebar: !sidebar.opened,
             withoutAnimation: sidebar.withoutAnimation}">
    <navbar class="navbar fixed"/>
    <sidebar class="sidebar-container" :routes="routes" :sidebar="sidebar"/>
    <div class="main-container">
      <app-main/>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import Sidebar from "@/pages/layout/components/Sidebar/Sidebar.vue";
import Navbar from "@/pages/layout/components/Navbar.vue";
import Tabs from "@/pages/layout/components/Tabs.vue";
import AppMain from "@/pages/layout/components/AppMain.vue";
import { Permission, Settings } from "@/store/vuex-decorators";

@Component({
  components: {
    Sidebar,
    Navbar,
    Tabs,
    AppMain
  }
})
export default class Layout extends Vue {
  @Permission.State("routes") routes;

  @Settings.State("sidebar") sidebar;
}
</script>

