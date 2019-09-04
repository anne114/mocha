<template>
  <div class="content">
    <h3>{{ msg }}</h3>
    <router-view></router-view>
  </div>
</template>
<script>
import config from 'config';
export default {
  data() {
    return {
      msg: 'welcome to webpack-vue'
    };
  },
  mounted() {
    // console.log(toast(1));
    toast();
    console.log('::config', config);
  }
};
</script>

<style lang="scss" scoped>
.content {
  text-align: center;
  padding-top: 120px;
}
</style>
