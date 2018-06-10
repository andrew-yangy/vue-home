<template>
  <div>
    <el-menu :default-active="$route.params.roomId" :collapse="true" class="room-list">
      <el-menu-item 
        class="room-item"
        v-for="(room,index) in rooms" 
        :key="index"
        :index="room.id"
        @click="clickRoom">
        <svgicon 
          v-if="room.icon" 
          :icon="room.icon" 
          width="36" 
          height="36" 
          :original="true"/>
        <div>{{ room.name }}</div>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch } from "vue-property-decorator";
import { Rooms } from "@/store/vuex-decorators";

@Component({
  components: {}
})
export default class Home extends Vue {
  @Rooms.State("rooms") rooms;

  @Rooms.Action fetchRooms;

  @Watch("$route.params")
  onRouteChange(val) {
    if (!val.roomId) {
      this.updateParams();
    }
  }

  created() {
    this.fetchRooms();
    if (!this.$route.params.roomId) {
      this.updateParams();
    }
  }

  updateParams() {
    const defalutID = this.rooms[0].id;
    this.$router.push({ params: { roomId: defalutID } });
  }

  clickRoom({ index }) {
    this.$router.push({ params: { roomId: index } });
  }
}
</script>

<style lang="scss" scoped>
.el-menu--collapse {
  width: 100px;
}
.room-list {
  text-align: center;
  .room-item {
    height: auto;
    line-height: inherit;
    padding: 1rem 0 !important;
  }
}
</style>


