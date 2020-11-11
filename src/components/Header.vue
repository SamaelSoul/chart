<template>
  <div class="header">
    <h3 class="header__title">
      В настоящий момент в министерстве магии работает
    </h3>
  </div>
</template>

<script>
export default {};
</script>

<style style lang="scss" scoped>
.header {
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 10vh;
  padding: 0 20px;
  justify-content: center;
  align-items: center;
  background-color: #f0f1f4;
  &__title {
    color: #353d54;
    font-weight: 500;
    font-size: 1.8vmax;
    line-height: 34px;
    text-align: center;
  }
}
</style>
