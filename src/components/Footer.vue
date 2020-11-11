<template>
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
</template>

<script>
export default {};
</script>

<style style lang="scss" scoped>
.footer {
  display: flex;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 8vh;
  padding: 0 20px;
  color: #fff;
  background-color: rgba($color: #353d54, $alpha: 0.85);
  .container {
    max-width: 1300px;
    width: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &__name {
    font-size: 1rem;
    width: 220px;
    margin-right: 30px;
  }
  @media (max-width: 768px) {
    &__name {
      font-size: 0.8rem;
    }
  }
  &__social {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 350px;
    width: 100%;
    .title {
      font-size: 1rem;
      padding-right: 10px;
    }
    .buttons {
      display: flex;
      justify-content: space-between;
      width: 120px;
      .inst,
      .vk {
        border-radius: 50%;
        height: 45px;
        width: 45px;
        background-color: #fff;
        background-repeat: no-repeat;
        background-position: center;
        margin: 5px;
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
  @media (max-width: 768px) {
    &__social {
      max-width: 300px;
      .title {
        font-size: 0.8rem;
      }
      .buttons {
        width: 100px;
        .inst,
        .vk {
          height: 30px;
          width: 30px;
        }
      }
    }
  }
}
</style>
