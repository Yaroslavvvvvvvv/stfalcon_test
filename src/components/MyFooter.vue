<template>
  <footer>
    <div class="container">
      <div class="container-fluid">
        <div class="d-flex justify-content-between">
          <a href="#" class="footer_logo">LOGO</a>
          <ul>
            <li><a class="footer_link" href="#">About Us</a></li>
            <li><a class="footer_link" href="#">Blog</a></li>
            <li><a class="footer_link" href="#">Support</a></li>
          </ul>
          <ul>
            <li><a class="footer_link" href="#">Terms & Conditions</a></li>
            <li><a class="footer_link" href="#">Privacy Policy</a></li>
            <li><a class="footer_link" href="#">Cookies</a></li>
          </ul>
          <div class="d-flex align-content-between">
            <div>
              <a href="#"><img src="../assets/img/footer/facebook.svg" alt="logo" class="mw-100 footer_logo"></a>
            </div>
            <div>
              <a href="#"><img src="../assets/img/footer/instagram.svg" alt="logo" class="mw-100 footer_logo"></a>
            </div>
            <div>
              <a href="#"><img src="../assets/img/footer/youtube.svg" alt="logo" class="mw-100 footer_logo"></a>
            </div>
            <div>
              <a href="#"><img src="../assets/img/footer/pinterest.svg" alt="logo" class="mw-100 footer_logo"></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "MyFooter"
}
</script>

<style scoped lang="scss">
@import "./src/assets/styles/myfooter.scss";
</style>