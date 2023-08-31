<template>
  <FirstSection/>
  <SecondSection/>
  <ThirdSection/>
  <FourthSection/>
  <LinkForm/>
</template>

<script>
import FirstSection from "@/components/FirstSection.vue";
import SecondSection from "@/components/SecondSection.vue";
import ThirdSection from "@/components/ThirdSection.vue";
import FourthSection from "@/components/FourthSection.vue";
import LinkForm from "@/components/LinkForm.vue";
import 'fontsource-montserrat';

export default {
  name: "MyHome",
  components: {LinkForm, FourthSection, ThirdSection, SecondSection, FirstSection}
}
</script>


<style lang="scss">

</style>