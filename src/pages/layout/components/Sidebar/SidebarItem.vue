<template>
  <div class="menu-wrapper">
    <template v-for="(item,index) in routes">
      <router-link
        :key="index"
        :to="{name:item.name}">
        <el-menu-item :index="item.name">
          <svgicon 
            v-if="item.meta&&item.meta.icon" 
            :icon="item.meta.icon" 
            width="36" 
            height="36" 
            :fill="false"/>
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