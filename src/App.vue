<template>
  <div id="app">
    <Header />
    <Main />
    <Footer />
  </div>
</template>

<script>
import Main from "./components/Main";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default {
  name: "App",
  components: {
    Header,
    Footer,
    Main
  }
};
</script>

<style lang="scss">
* {
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
}
#app {
  @import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;900&display=swap");
  font-family: Roboto, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  @media (max-width: 800px) {
    height: 130vh;
  }
}
</style>
