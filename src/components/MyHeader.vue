<template>
  <header>
    <div class="container">
      <nav class="navbar navbar-expand-lg ">
        <div class="container-fluid">
          <a class="navbar-brand my_brand" href="#">LOGO</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mb-2 mb-lg-0 m-auto">
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
            </ul>
            <form class="d-flex">
              <div class="dropdown">
                <button class="btn header_btn dropdown-toggle" type="button" id="dropdownMenuButton1"
                        data-bs-toggle="dropdown" aria-expanded="false">
                  Download
                </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                  <li><a class="dropdown-item btn_item" href="#">App Store</a></li>
                  <li><a class="dropdown-item" href="#">Google Play</a></li>
                </ul>
              </div>
              <div class="dropdown">
                <a class="btn btn-secondary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown link
                </a>

                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">Action</a></li>
                  <li><a class="dropdown-item" href="#">Another action</a></li>
                  <li><a class="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </div>
            </form>
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