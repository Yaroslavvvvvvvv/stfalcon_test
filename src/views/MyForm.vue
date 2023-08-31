<template>
  <section class="last_section">
    <div class="container">
      <div class="position-relative my_form">
        <div class="position-absolute">
          <svg xmlns="http://www.w3.org/2000/svg" class="svg_line">
            <path class="svg_path"
                  d="
                     M0,40
                     Q100,25 175,75
             T 325,75 T475, 110 T 625,135 T 775,160 T 925,185 T1075,210 T1225,235 T1375,160
                     M0,80
                     Q100,50 175 150
             T 325,150 T475, 175 T 625,200 T 775,225 T 925,250 T1075,275 T1225,300 T1375,325
                     M0,120
                     Q100, 80 175 200
             T 325,250 T475, 275 T 625,300 T 775,325 T 925,350 T1075,375 T1225,400 T1375,425
                     M0,180
                     Q100, 100 175 250
             T 325,350 T475, 375 T 625,400 T 775,425 T 925,450 T1075,475 T1225,500 T1375,525"/>
          </svg>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "MyForm"
}
</script>

<style scoped lang="scss">
@import "./src/assets/styles/MyForm";

</style>