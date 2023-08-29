<template>
  <FirstSection/>
  <SecondSection/>
  <ThirdSection/>
  <FourthSection/>
</template>

<script>
import FirstSection from "@/components/FirstSection.vue";
import SecondSection from "@/components/SecondSection.vue";
import ThirdSection from "@/components/ThirdSection.vue";
import FourthSection from "@/components/FourthSection.vue";

export default {
  name: "MyHome",
  components: {FourthSection, ThirdSection, SecondSection, FirstSection}
}
</script>

<style scoped>

</style>