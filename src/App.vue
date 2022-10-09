<script setup>
import NavBar from "./components/NavBar.vue";
import Footer from "./components/FooterComp.vue";
</script>

<template>
  <NavBar />
  <main>
    <RouterView />
  </main>
  <footer>
    <Footer />
  </footer>
</template>

<style>
* {
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
}
* p {
  font-size: 20px;
}
* a {
  text-decoration: none;
  text-transform: none;
  color: yellow;
  transform: none;
}
* a :hover {
  color: none;
  transform: none;
  text-transform: none;
  text-decoration-color: none;
  text-decoration: none;
}
body {
  background-color: black;
  color: white;
}
footer {
  bottom: 0px;
}
</style>
