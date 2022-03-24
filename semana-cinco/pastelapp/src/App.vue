<template>
<Navbar/>
 <router-view />
 <Footer/>
</template>

<script>
import Navbar from './components/NavBar.vue';
import Footer from './components/FooTer.vue';
export default {
  name: 'App',
  components:{
    Navbar,
    Footer
  }
}
</script>

<style>

</style>
