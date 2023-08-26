<template>
  <header>
    <div class="container">
      <nav class="navbar navbar-expand-lg ">
        <div class="container-fluid">
          <a class="navbar-brand my_brand" href="#">LOGO</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse my_menu" id="navbarSupportedContent">
            <ul class="navbar-nav mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link my_nav" aria-current="page" href="#">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link my_nav" href="#">About</a>
              </li>
              <li class="nav-item">
                <a class="nav-link my_nav" href="#">Pricing
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link my_nav" href="#">Facts
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link my_nav" href="#">Blog</a>
              </li>
              <li class="nav-item">
                <a class="nav-link my_nav" href="#">Support</a>
              </li>
                <li class="dropdown">
                  <button class="btn header_btn dropdown-toggle" type="button" id="dropdownMenuButton1"
                          data-bs-toggle="dropdown" aria-expanded="false">
                    Download
                  </button>
                  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    <li><a class="dropdown-item btn_item" href="#">App Store</a></li>
                    <li><a class="dropdown-item btn_item" href="#">Google Play</a></li>
                  </ul>
                </li>
                <li class="dropdown">
                  <a class="nav-link my_nav d-flex align-items-center" href="#" role="button" data-bs-toggle="dropdown"
                     aria-expanded="false">
                    Eng
                    <img src="../assets/img/header/arrow-down.svg" alt="logo" class="mw-100">
                  </a>
                  <ul class="dropdown-menu">
                    <li class="d-flex align-items-center">
                      <img src="../assets/img/header/sweden.svg" alt="logo" class="mw-100 m-2">
                      <a class="dropdown-item btn_item p-lg-0 p-md-1 p-sm-1" href="#">Sverige</a>
                    </li>
                    <li class="d-flex align-items-center">
                      <img src="../assets/img/header/united-kingdom.svg" alt="logo" class="mw-100 m-2">
                      <a class="dropdown-item btn_item p-lg-0 p-md-1 p-sm-1" href="#">English</a>
                    </li>
                  </ul>
                </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: "MyHeader"
}
</script>

<style scoped lang="scss">
@import "./src/assets/styles/myheader.scss";
</style>