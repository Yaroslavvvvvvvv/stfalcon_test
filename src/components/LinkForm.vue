<template>
  <section class="link_form">
    <div class="container">
      <div class="position-relative link_block mw-100">
        <div class="position-absolute">
          <svg xmlns="http://www.w3.org/2000/svg" class="svg_line">
            <path class="svg_path"
                  d="M0,40
                     Q100,25 175,75
             T 325,75 T475, 110 T 625,135 T 775,160 T 925,185 T1075,210 T1225,235 T1375,160
                     M0,120
                     Q100,50 175,100
             T 325,125 T 475,160 T 625, 185 T 775, 210 T 925, 235 T1075, 260
                     M0, 200
                     Q100,75 175, 170
             T 325, 175 T 475, 225 T 625,240 T775, 265
                     M0,20
                     Q100, 5 175, 50
             T325,25 T475,50 T625,75 T775,110 T925,135 T1075,160 T1225, 185 T1375, 210"/>
          </svg>
        </div>
        <div class="position-absolute small_form mw-100">
          <h2>Send your data</h2>
          <button type="button" class="btn button_form">Go to form</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "LinkForm"
}
</script>

<style scoped lang="scss">
@import "./src/assets/styles/link_form";
</style>