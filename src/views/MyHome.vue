<template>
  <FirstSection/>
  <SecondSection/>
  <ThirdSection/>
</template>

<script>
import FirstSection from "@/components/FirstSection.vue";
import SecondSection from "@/components/SecondSection.vue";
import ThirdSection from "@/components/ThirdSection.vue";

export default {
  name: "MyHome",
  components: {ThirdSection, SecondSection, FirstSection}
}
</script>

<style scoped>

</style>