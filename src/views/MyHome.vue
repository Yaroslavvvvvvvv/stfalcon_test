<template>
  <FirstSection/>
  <SecondSection/>
</template>

<script>
import FirstSection from "@/components/FirstSection.vue";
import SecondSection from "@/components/SecondSection.vue";

export default {
  name: "MyHome",
  components: {SecondSection, FirstSection}
}
</script>

<style scoped>

</style>