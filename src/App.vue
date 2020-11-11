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
  // .container {
  //   margin: 0 auto;
  //   max-width: 1300px;
  // }
  // .header {
  //   display: flex;
  //   position: absolute;
  //   top: 0;
  //   left: 0;
  //   right: 0;
  //   justify-content: center;
  //   align-items: center;
  //   width: 100%;
  //   height: 100px;
  //   background-color: #f0f1f4;
  //   &__title {
  //     color: #353d54;
  //     font-weight: 500;
  //     font-size: 30px;
  //     line-height: 34px;
  //   }
  //   @media (max-width: 900px) {
  //     &__title {
  //       font-size: 28px;
  //       line-height: 30px;
  //     }
  //   }
  // }
  // .footer {
  //   display: flex;
  //   position: absolute;
  //   bottom: 0;
  //   left: 0;
  //   right: 0;
  //   width: 100%;
  //   height: 60px;
  //   padding: 0 20px;
  //   color: #fff;
  //   background-color: rgba($color: #353d54, $alpha: 0.85);
  //   &__name {
  //     width: 220px;
  //     font-size: 15px;
  //   }
  //   &__social {
  //     display: flex;
  //     justify-content: space-between;
  //     align-items: center;
  //     width: 320px;
  //     .buttons {
  //       display: flex;
  //       justify-content: space-between;
  //       width: 70px;
  //       .inst,
  //       .vk {
  //         border-radius: 50%;
  //         height: 30px;
  //         width: 30px;
  //         background-color: #fff;
  //         background-repeat: no-repeat;
  //         background-position: center;
  //         &:hover {
  //           background-color: rgb(192, 214, 238);
  //         }
  //       }
  //       .inst {
  //         background-image: url(./images/Inst.svg);
  //       }
  //       .vk {
  //         background-image: url(./images/VK.svg);
  //       }
  //     }
  //   }
  // }
}
</style>
