<template>
  <div class="main">
    <Employee />
    <!-- <Chart /> -->
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
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 75vh;
  margin-top: 15vh;
  // position: relative;
}
</style>
