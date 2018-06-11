<template>
  <div>
    <el-menu :default-active="selectedRoom" :collapse="true" class="room-list">
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
    <!-- <el-row :gutter="30">
      <el-col 
        :md="6" 
        :sm="12" 
        v-for="(device,index) in frequentDevices"
        :key="index">
        <device-switch :device="device" />
      </el-col>
    </el-row> -->
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

  created() {
    if (this.rooms.length === 0) this.fetchRooms();
  }

  get selectedRoom() {
    return typeof this.$route.params.roomId === "undefined"
      ? this.rooms[0].id
      : this.$route.params.roomId;
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


