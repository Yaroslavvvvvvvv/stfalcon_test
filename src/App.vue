<template>
  <MyHeader/>
  <router-view></router-view>
  <MyFooter/>
</template>

<script>


import MyHeader from "@/components/MyHeader.vue";
import MyFooter from "@/components/MyFooter.vue";

export default {
  name: 'App',
  components: {
    MyFooter,
    MyHeader
  }
}
</script>

<style>
</style>
