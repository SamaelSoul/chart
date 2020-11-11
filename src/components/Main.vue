<template>
  <!-- <div class="main">
    <div class="header">
      <h3 class="header__title">
        В настоящий момент в министерстве магии работает
      </h3>
    </div>
    <Employee />
    <Chart />
    <div class="footer">
      <div class="container">
        <div class="footer__name">
          ООО “Нейрософт”, 2020 Медицинское оборудование
        </div>
        <div class="footer__social">
          <div class="title">
            Подписывайся в соц.сетях
          </div>
          <div class="buttons">
            <div class="inst"></div>
            <div class="vk"></div>
          </div>
        </div>
      </div>
    </div>
  </div> -->
  <div class="main">
    <div class="header">
      <h3 class="header__title">
        В настоящий момент в министерстве магии работает
      </h3>
    </div>
    <div class="container">
      <Employee />
      <!-- <Chart /> -->
      <div class="footer">
        <div class="footer__name">
          ООО “Нейрософт”, 2020 Медицинское оборудование
        </div>
        <div class="footer__social">
          <div class="title">
            Подписывайся в соц.сетях
          </div>
          <div class="buttons">
            <div class="inst"></div>
            <div class="vk"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Employee from "./Employee";
// import Chart from "./Chart";

export default {
  components: {
    Employee
    // Chart
  }
};
</script>

<style lang="scss" scoped>
.main {
  height: 100vh;
  position: relative;
  .container {
    margin: 0 auto;
    max-width: 1300px;
  }
  .header {
    display: flex;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100px;
    background-color: #f0f1f4;
    &__title {
      color: #353d54;
      font-weight: 500;
      font-size: 30px;
      line-height: 34px;
    }
    @media (max-width: 900px) {
      &__title {
        font-size: 28px;
        line-height: 30px;
      }
    }
  }
  .footer {
    display: flex;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 60px;
    padding: 0 20px;
    color: #fff;
    background-color: rgba($color: #353d54, $alpha: 0.85);
    &__name {
      width: 220px;
      font-size: 15px;
    }
    &__social {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 320px;
      .buttons {
        display: flex;
        justify-content: space-between;
        width: 70px;
        .inst,
        .vk {
          border-radius: 50%;
          height: 30px;
          width: 30px;
          background-color: #fff;
          background-repeat: no-repeat;
          background-position: center;
          &:hover {
            background-color: rgb(192, 214, 238);
          }
        }
        .inst {
          background-image: url(../images/Inst.svg);
        }
        .vk {
          background-image: url(../images/VK.svg);
        }
      }
    }
  }
}
</style>
