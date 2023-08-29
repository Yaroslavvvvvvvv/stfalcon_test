<template>
  <section class="fourth_section">
    <div class="container">
      <div class="text-center pb-4">
        <h2>Our blog posts</h2>
        <hr class="colored_line">
      </div>
      <div class="row">
        <div class="col-lg-6 col-md-6 col-sm-12">
          <div class="position-relative">
            <img src="../assets/img/fourth_section/rectangle_left.png" alt="rectangle" class="mw-100">
            <div class="position-absolute">
              <h4>Return to running after<br>
                pregnancy – Is your body strong<br>
                enough for running?</h4>
              <div class="d-flex small_logo">
                <img src="../assets/img/fourth_section/small_logo.svg" alt="logo">
                <span class="name_info">BY TILDA LOFTIN</span>
                <span class="date_info">JUNE 25, 2021</span>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-md-3 col-sm-6">
          <div class="position-relative small_first">
            <img src="../assets/img/fourth_section/stroller_walks.png" alt="stroller walks" class="mw-100">
            <div class="position-absolute">
              <h5 class="stroller">Stroller walks</h5>
              <span class="small_date">
                APRIL 21, 2021
              </span>
            </div>
          </div>
          <div class="position-relative next">
            <img src="../assets/img/fourth_section/fitness_gear.png" alt="fitness" class="mw-100">
            <div class="position-absolute">
              <h5 class="fitness_gear">Your Essential<br>
                Fitness Gear for<br>
                Each Trimester</h5>
              <span class="small_date">
                FEBRUARY 21, 2021
              </span>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-md-3 col-sm-6">
          <div class="position-relative small_first">
            <div class="position-absolute">
              <h5 class="workout">Playground<br>workout</h5>
              <span class="small_date">
                MARCH 17, 2020
              </span>
            </div>
            <img src="../assets/img/fourth_section/playground_workout.png" alt="workout" class="mw-100">
          </div>
          <div class="position-relative next">
            <div class="position-absolute">
              <h5 class="therapist">What YOU could<br>
                gain by working<br>
                with a Woman’s<br>
                Health Physical<br>
                Therapist</h5>
              <span class="small_date">
                JANUARY 23, 2020
              </span>
            </div>
            <img src="../assets/img/fourth_section/therapist.png" alt="therapist" class="mw-100">
          </div>
        </div>
      </div>
      <div class="text-center mt-4">
        <a href="#">
          Like what you see? View more
          <img src="../assets/img/fourth_section/button_right.svg" alt="button" class="mw-100 button_right">
        </a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "FourthSection"
}
</script>

<style scoped lang="scss">
@import "./src/assets/styles/fourth_section";
</style>