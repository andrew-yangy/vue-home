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
import { TagsView } from "@/store/vuex-decorators";

@Component
export default class AppMain extends Vue {
  @TagsView.State("cachedViews") cachedViews;
}
</script>
