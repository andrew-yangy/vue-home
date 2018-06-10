<template>
  <div>
    <el-row :gutter="20">
      <el-col 
        :md="8" 
        :sm="24"
        v-for="(room,index) in rooms" 
        :key="index">
        <router-link :to="{ name: 'home', params: { roomId: room.id }}">
          <el-card :body-style="{ padding: '0px' }" class="room-card">
            <div class="image-container">
              <img :src="room.img" class="room-image">
            </div>
            <div class="room-details">
              <svgicon 
                v-if="room.icon" 
                :icon="room.icon" 
                width="36" 
                height="36" 
                :original="true"/>
              <div class="room-name">{{ room.name }}</div>
              <div class="room-info">3 devices</div>
            </div>
          </el-card>
        </router-link>
        
      </el-col>
    </el-row>
    <el-row :gutter="30">
      <el-col 
        :md="6" 
        :sm="12" 
        v-for="(sw,index) in switches"
        :key="index">
        <el-card :body-style="{ padding: '0' }" class="card">
          <div class="card-content">
            <div class="icon primary">
              <svgicon 
                class=""
                icon="google-maps" 
                width="50" 
                height="50" 
                color="#fff"
                :fill="false"/>
            </div>
            <div class="details">
              {{ sw.name }}
              {{ sw.states }}
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import Sidebar from "@/pages/layout/components/Sidebar/Sidebar.vue";
import Navbar from "@/pages/layout/components/Navbar.vue";
import Tabs from "@/pages/layout/components/Tabs.vue";
import AppMain from "@/pages/layout/components/AppMain.vue";
import { Permission, Settings } from "@/store/vuex-decorators";
import { Rooms } from "@/store/vuex-decorators";

@Component({
  components: {
    Sidebar,
    Navbar,
    Tabs,
    AppMain
  }
})
export default class Dashboard extends Vue {
  @Rooms.State("rooms") rooms;

  @Rooms.Action fetchRooms;

  switches = [
    {
      name: "Light",
      states: "ON",
      color: "primary"
    },
    {
      name: "Light",
      states: "ON",
      color: "primary"
    },
    {
      name: "Light",
      states: "ON",
      color: "primary"
    },
    {
      name: "Light",
      states: "ON",
      color: "primary"
    }
  ];

  created() {
    this.fetchRooms();
  }
}
</script>

<style lang="scss" scoped>
.room-card {
  border-radius: 0.375rem;
  margin-bottom: 2rem;
  cursor: pointer;
  .image-container {
    position: relative;
    width: 100%;
    padding-bottom: 50%;
    .room-image {
      width: 100%;
      height: 100%;
      position: absolute;
    }
  }
  .room-details {
    display: flex;
    padding: 1rem;
    align-items: center;
    .room-name {
      padding: 0 1.25rem;
      font-size: 1.25rem;
    }
    .room-info {
      margin-left: auto;
      color: #82858a;
    }
  }
}
.room-card:hover {
  box-shadow: 0 8px 12px 0 rgba(0, 0, 0, 0.4);
}
.card {
  margin-bottom: 20px;
}
.card-content {
  display: flex;
  .icon {
    height: 100%;
    margin: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 5.75rem;
    height: 4.75rem;
    font-size: 3.75rem;
    border-radius: 0.375rem;
    transition: width 0.4s ease;
  }
  .primary {
    background-image: linear-gradient(to right, #b57fff, #8a7fff);
    box-shadow: 0 0 0 0 #896ddb, 0 0 0 0 #9f7fff;
  }
  .details {
    align-self: center;
  }
}
</style>

