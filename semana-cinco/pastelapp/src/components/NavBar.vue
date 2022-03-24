<template>

 <nav class="navbar navbar-expand-sm bg-change">
        <div class="container-fluid">
          <a class="navbar-brand">
              <img style="width: 40px" class="rounded-pill" src="https://img.myloview.es/vinilos/rocket-icon-in-flat-style-spaceship-launch-vector-illustration-on-white-isolated-background-sputnik-business-concept-400-196138148.jpg" alt="logo">
          </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="collapsibleNavbar">
            <ul class="navbar-nav">
              <li class="nav-item">
              <router-link to="/contacto" class="nav-link text-white letra">Contacto</router-link> 
              </li>
              <li class="nav-item">
               <router-link to="/" class="nav-link text-white letra">Home</router-link> 
              </li>
              <li class="nav-item">
                <router-link to="/about" class="nav-link text-white letra">Sobre mí</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/productos" class="nav-link text-white letra">Productos</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/login" class="nav-link text-white letra">Login</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/compra" class="nav-link text-white letra">Compra</router-link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
</template>

<script>

export default {
  name: 'nav-bar'
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Fuzzy+Bubbles&family=Merienda:wght@700&display=swap');
.bg-change {
  background-image: linear-gradient(#5c2fff, #070bf7);
}

.navbar-toggler-icon {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%28255, 255, 255, 0.55%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
}

.letra{
  font-family: 'Fuzzy Bubbles';
  font-size: 15px;
}
router-link:hover{
  background-color: #7683f7;
  border-radius: 5px;
}
</style>
