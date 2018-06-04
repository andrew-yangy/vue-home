<template>
  <el-breadcrumb class="app-breadcrumb" separator="/">
    <transition-group name="breadcrumb">
      <el-breadcrumb-item v-for="(item,index) in crumbs" :key="item.path" v-if='item.meta.title'>
        <span v-if='item.redirect==="noredirect"||index==crumbs.length-1' class="no-redirect">{{ item.meta.title }}</span>
        <router-link v-else :to="item.redirect||item.path">{{ item.meta.title }}</router-link>
      </el-breadcrumb-item>
    </transition-group>
  </el-breadcrumb>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component
export default class Breadcrumb extends Vue {
  get crumbs() {
    return this.$route.matched.filter(item => item.name);
  }
}
</script>

<style lang="scss" scoped>
.app-breadcrumb.el-breadcrumb {
  display: inline-block;
  font-size: 14px;
  line-height: 50px;
  margin-left: 10px;
  .no-redirect {
    color: #97a8be;
    cursor: text;
  }
}
</style>
