<template>
  <div class="employee">
    <div class="container">
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
  flex-direction: row;
  margin-top: 120px;
  padding: 0 20px 0;
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1000px;
    width: 100%;
    height: 100%;
    margin: 0 auto;
  }
  .col {
    &-value {
      color: #2b78fe;
      font-size: 80px;
      font-weight: 900;
      line-height: 93.75px;
      text-align: center;
    }
    @media (max-width: 900px) {
      &-value {
        font-size: 42px;
        font-weight: 500;
        line-height: 50px;
      }
      &-title {
        font-size: 20px;
        line-height: 20px;
      }
    }
    &-title {
      color: #353d54;
      font-size: 24px;
      line-height: 30px;
      text-align: center;
    }
  }
}
</style>
