<template>
  <div class="employee">
    <div class="col">
      <div class="col-value">{{ employee.total }}</div>
      <div class="col-title">Сотрудников в штате</div>
    </div>
    <div class="col">
      <div class="col-value">{{ employee.males }}</div>
      <div class="col-title">Мужчин</div>
    </div>
    <div class="col">
      <div class="col-value">{{ employee.females }}</div>
      <div class="col-title">Женщин</div>
    </div>
    <div class="col">
      <div class="col-value">{{ employee.couples }}</div>
      <div class="col-title">Пар</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Employee",
  computed: {
    employee() {
      return this.$store.state.data;
    }
  }
};
</script>

<style lang="scss" scoped>
.employee {
  display: flex;
  padding: 0 20px;
  max-height: 8vh;
  height: 100%;
  justify-content: space-between;
  align-items: center;
  max-width: 1100px;
  width: 100%;
  margin: 0 auto;
  .col {
    &-value {
      color: #2b78fe;
      font-size: 8vmin;
      font-weight: 900;
      line-height: 9vmin;
      text-align: center;
    }
    &-title {
      color: #353d54;
      font-size: 2.5vmin;
      line-height: 3vmin;
      text-align: center;
    }
    @media (max-width: 900px) {
      &-title {
        font-size: 3vmin;
        line-height: 20px;
      }
    }
  }
}
</style>
