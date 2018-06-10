<template>
  <el-card :body-style="{ padding: '0' }" class="card">
    <div class="device-content">
      <div class="icon" :class="device.color">
        <svgicon 
          class=""
          :icon="device.icon" 
          width="50" 
          height="50" 
          color="#fff"/>
      </div>
      <div class="details">
        {{ device.name }}
        {{ device.states }}
      </div>
    </div>
  </el-card>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component
export default class DeviceSwitch extends Vue {
  @Prop() device;
}
</script>

<style lang="scss" scoped>
@import "@/styles/themes/default.scss";
@import "@/styles/mixins/button.scss";
.card {
  margin-bottom: 20px;
}
.device-content {
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
    &.primary {
      @include btn-hero-primary-gradient();
      @include btn-hero-primary-bevel-glow-shadow();
    }
    &.success {
      @include btn-hero-success-gradient();
      @include btn-hero-success-bevel-glow-shadow();
    }
    &.info {
      @include btn-hero-info-gradient();
      @include btn-hero-info-bevel-glow-shadow();
    }
    &.warning {
      @include btn-hero-warning-gradient();
      @include btn-hero-warning-bevel-glow-shadow();
    }
  }
  &:hover {
    background: lighten($card-bg, 5%);

    .icon {
      &.primary {
        background-image: btn-hero-primary-light-gradient();
      }
      &.success {
        background-image: btn-hero-success-light-gradient();
      }
      &.info {
        background-image: btn-hero-info-light-gradient();
      }
      &.warning {
        background-image: btn-hero-warning-light-gradient();
      }
    }
  }

  &.off {
    color: $card-fg;

    .icon {
      color: $card-fg;

      &.primary,
      &.success,
      &.info,
      &.warning {
        box-shadow: none;
        background-image: linear-gradient(to right, transparent, transparent);
      }
    }
    .title {
      color: $card-fg;
    }
  }
  .details {
    align-self: center;
  }
}
</style>
