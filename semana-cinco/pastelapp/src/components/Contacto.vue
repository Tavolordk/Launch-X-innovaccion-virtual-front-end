<template>
    <form>
      <div class="contenido container mb-5 mt-5 row w-50">
        <div class="pt-5 col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
    <label for="exampleInputName" class="form-label">Nombre</label>
    <input type="text" class="form-control" id="exampleInputName" aria-describedby="nameHelp">
    <div id="nameHelp" class="form-text text-white">No compartiremos tus datos con nadie más.</div>
  </div>
    <div class="pt-3 col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
    <label for="exampleInputSurname" class="form-label">Apellidos</label>
    <input type="text" class="form-control" id="exampleInputSurname" aria-describedby="surnameHelp">
    <div id="surnameHelp" class="form-text text-white">No compartiremos tus datos con nadie más.</div>
  </div>
  <div class="pt-3 col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
    <label for="exampleInputEmail1" class="form-label">Correo</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
    <div id="emailHelp" class="form-text text-white">No compartiremos tu email con nadie más.</div>
  </div>
<div class="pt-3 col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
  <label for="exampleFormControlTextarea1" class="form-label">Mensaje</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
</div>
  <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 mt-5 mb-5">
    <button type="submit" class="btn btn-primary">Enviar</button>
  </div>
</div>
    </form>

</template>

<script>

export default {
    name:'contac-to'
}
</script>

<style scoped>
.contenido{
background-color: #5596eb;
border-radius: 10px;
padding: 0;
margin: 0 auto;
}
</style>