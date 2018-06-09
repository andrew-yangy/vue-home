<template>
  <div>
    <el-row :gutter="30">
      <el-col 
        :md="6" 
        :sm="12" 
        v-for="sw in switches"
        :key="sw.name">
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

@Component({
  components: {
    Sidebar,
    Navbar,
    Tabs,
    AppMain
  }
})
export default class States extends Vue {
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
}
</script>

<style lang="scss" scoped>
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

