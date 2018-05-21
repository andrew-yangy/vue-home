<template>
  <div class="app-wrapper">
    <sidebar class="sidebar-container"></sidebar>
    <div class="main-container">
      <!-- <navbar></navbar>
      <tags-view></tags-view>
      <app-main></app-main> -->
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import Sidebar from "@/pages/layout/components/Sidebar/Sidebar.vue";

@Component({
  components: {
    Sidebar
  }
})
export default class Layout extends Vue {}
</script>

<style lang="scss" scoped>
</style>
