<template>
  <div class="menu-wrapper">
    <template v-for="(item,index) in routes">
      <router-link
        :key="index"
        :to="item.path">
        <el-menu-item :index="item.path">
          <svgicon 
            v-if="item.meta&&item.meta.icon" 
            :icon="item.meta.icon" 
            width="36" 
            height="36"/>
          <span v-if="item.meta&&item.meta.title" slot="title">{{ item.meta.title }}</span>
        </el-menu-item>
      </router-link>
    </template>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component
export default class SidebarItem extends Vue {
  @Prop() routes;
}
</script>

<style lang="scss" scoped>
</style>