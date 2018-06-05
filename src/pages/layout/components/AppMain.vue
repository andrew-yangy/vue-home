<template>
  <section class="app-main" style="min-height: 100%">
    <transition name="fade" mode="out-in">
      <keep-alive :include="cachedViews">
        <router-view/>
      </keep-alive>
    </transition>
  </section>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { Tabs } from "@/store/vuex-decorators";

@Component
export default class AppMain extends Vue {
  @Tabs.State("cachedViews") cachedViews;
}
</script>
