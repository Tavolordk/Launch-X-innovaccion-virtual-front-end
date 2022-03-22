<template>

 <nav class="navbar navbar-expand-sm bg-change mb-5">
        <div class="container-fluid">
          <a class="navbar-brand">
              <img style="width: 40px" class="rounded-pill" src="https://tavolordk.github.io/Launch-X-innovaccion-virtual-front-end/semana-cuatro/assets/img/sooper.ico" alt="logo">
          </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="collapsibleNavbar">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link text-white" href="#">Contact</a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-white" href="#">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-white" href="#">About me</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

</template>

<script>

export default {
  name: 'InDex'
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.bg-change {
  background-image: linear-gradient(#5c2fff, #070bf7);
}

.navbar-toggler-icon {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%28255, 255, 255, 0.55%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
}
</style>
