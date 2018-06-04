<template>
  <div class="tags-view-container">
    <scroll-pane class='tags-view-wrapper' ref='scrollPane'>
      <router-link 
        ref="tag" 
        class="tags-view-item" 
        :class="isActive(tag)?'active':''" 
        v-for="tag in Array.from(visitedViews)"
        :to="tag.path" 
        :key="tag.path" 
        @contextmenu.prevent.native="openMenu(tag,$event)">
        {{ tag.title }}
        <span class='el-icon-close' @click.prevent.stop='closeSelectedTag(tag)'/>
      </router-link>
    </scroll-pane>
    <ul class='contextmenu' v-show="visible" :style="{left:left+'px',top:top+'px'}">
      <li @click="closeSelectedTag(selectedTag)">close</li>
      <li @click="closeOthersTags">closeOthers</li>
      <li @click="closeAllTags">closeAll</li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Watch } from "vue-property-decorator";
import ScrollPane from "@/components/ScrollPane/index.vue";
import { TagsView } from "@/store/vuex-decorators";

@Component({
  components: {
    ScrollPane
  }
})
export default class Layout extends Vue {
  @TagsView.State("visitedViews") visitedViews;

  @TagsView.Action addVisitedViews;

  @TagsView.Action delVisitedViews;

  @TagsView.Action delOthersViews;

  @TagsView.Action delAllViews;

  @Watch("$route")
  onRouteChange() {
    this.addViewTags();
  }

  visible = false;

  top = 0;

  left = 0;

  selectedTag = {};

  mounted() {
    this.addViewTags();
  }

  isActive(route) {
    return route.path === this.$route.path || route.name === this.$route.name;
  }

  addViewTags() {
    const route = this.$route.name && this.$route;
    this.addVisitedViews(route);
  }

  moveToCurrentTag() {
    const tags = this.$refs.tag;
    //   this.$nextTick(() => {
    //     for (const tag of tags) {
    //       if (tag.to === this.$route.path) {
    //         this.$refs.scrollPane.moveToTarget(tag.$el);
    //         break;
    //       }
    //     }
    //   });
  }

  closeSelectedTag(view) {
    this.delVisitedViews(view).then(views => {
      if (this.isActive(view)) {
        const latestView = views.slice(-1)[0];
        if (latestView) {
          this.$router.push(latestView.path);
        } else {
          this.$router.push("/");
        }
      }
    });
  }

  closeOthersTags() {
    this.$router.push(this.selectedTag["path"]);
    this.delOthersViews(this.selectedTag).then(() => {
      this.moveToCurrentTag();
    });
  }

  closeAllTags() {
    this.delAllViews();
    this.$router.push("/");
  }

  openMenu(tag, e) {
    this.visible = true;
    this.selectedTag = tag;
    this.left = e.clientX;
    this.top = e.clientY;
  }

  closeMenu() {
    this.visible = false;
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.tags-view-container {
  .tags-view-wrapper {
    background: #fff;
    height: 34px;
    border-bottom: 1px solid #d8dce5;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.12), 0 0 3px 0 rgba(0, 0, 0, 0.04);
    .tags-view-item {
      display: inline-block;
      position: relative;
      height: 26px;
      line-height: 26px;
      border: 1px solid #d8dce5;
      color: #495060;
      background: #fff;
      padding: 0 8px;
      font-size: 12px;
      margin-left: 5px;
      margin-top: 4px;
      &:first-of-type {
        margin-left: 15px;
      }
      &.active {
        background-color: #42b983;
        color: #fff;
        border-color: #42b983;
        &::before {
          content: "";
          background: #fff;
          display: inline-block;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          position: relative;
          margin-right: 2px;
        }
      }
    }
  }
  .contextmenu {
    margin: 0;
    background: #fff;
    z-index: 100;
    position: absolute;
    list-style-type: none;
    padding: 5px 0;
    border-radius: 4px;
    font-size: 12px;
    font-weight: 400;
    color: #333;
    box-shadow: 2px 2px 3px 0 rgba(0, 0, 0, 0.3);
    li {
      margin: 0;
      padding: 7px 16px;
      cursor: pointer;
      &:hover {
        background: #eee;
      }
    }
  }
}
</style>

<style rel="stylesheet/scss" lang="scss">
//reset element css of el-icon-close
.tags-view-wrapper {
  .tags-view-item {
    .el-icon-close {
      width: 16px;
      height: 16px;
      vertical-align: 2px;
      border-radius: 50%;
      text-align: center;
      transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
      transform-origin: 100% 50%;
      &:before {
        transform: scale(0.6);
        display: inline-block;
        vertical-align: -3px;
      }
      &:hover {
        background-color: #b4bccc;
        color: #fff;
      }
    }
  }
}
</style>
