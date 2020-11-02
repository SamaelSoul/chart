<template>
  <div class="chart">
    <div class="chart-circle">
      <span class="chart-title">По департаментам</span>
      <svg width="100%" height="100%" viewBox="0 0 42 42" class="donut">
        <circle
          class="donut-hole"
          cx="21"
          cy="21"
          r="15.91549430918954"
          fill="#fff"
        ></circle>
        <circle
          class="donut-ring"
          cx="21"
          cy="21"
          r="15.91549430918954"
          fill="transparent"
          stroke="#d2d3d4"
          stroke-width="7"
        ></circle>
        <circle
          class="donut-segment"
          cx="21"
          cy="21"
          r="15.91549430918954"
          fill="transparent"
          stroke="#2B78FE"
          stroke-width="7"
        ></circle>
        <circle
          class="donut-segment"
          cx="21"
          cy="21"
          r="15.91549430918954"
          fill="transparent"
          stroke="#8295FA"
          stroke-width="7"
        ></circle>
        <circle
          class="donut-segment"
          cx="21"
          cy="21"
          r="15.91549430918954"
          fill="transparent"
          stroke="#FFBB49"
          stroke-width="7"
        ></circle>
        <circle
          class="donut-segment"
          cx="21"
          cy="21"
          r="15.91549430918954"
          fill="transparent"
          stroke="#87D227"
          stroke-width="7"
        ></circle>
        <circle
          class="donut-segment"
          cx="21"
          cy="21"
          r="15.91549430918954"
          fill="transparent"
          stroke="#20CBAC"
          stroke-width="7"
        ></circle>
        <circle
          class="donut-segment"
          cx="21"
          cy="21"
          r="15.91549430918954"
          fill="transparent"
          stroke="#01B0D7"
          stroke-width="7"
        ></circle>
        <circle
          class="donut-segment"
          cx="21"
          cy="21"
          r="15.91549430918954"
          fill="transparent"
          stroke="#6235B0"
          stroke-width="7"
        ></circle>
        <circle
          class="donut-segment"
          cx="21"
          cy="21"
          r="15.91549430918954"
          fill="transparent"
          stroke="#9559FF"
          stroke-width="7"
        ></circle>
        <circle
          class="donut-segment"
          cx="21"
          cy="21"
          r="15.91549430918954"
          fill="transparent"
          stroke="#C055D1"
          stroke-width="7"
        ></circle>
        <circle
          class="donut-segment"
          cx="21"
          cy="21"
          r="15.91549430918954"
          fill="transparent"
          stroke="#FF7979"
          stroke-width="7"
        ></circle>
        <image
          xlink:href="../images/Icon.svg"
          width="31%"
          height="31%"
          x="34%"
          y="34%"
        />
      </svg>
    </div>
    <div class="chart-description">
      <ul class="key-list">
        <li><span class="shape-circle department1">1%</span> Администрация</li>
        <li>
          <span class="shape-circle department2">25%</span> Отдел обеспечения
          магического правопорядка
        </li>
        <li>
          <span class="shape-circle department3">6%</span> Отдел магических
          происшествий и катастроф
        </li>
        <li>
          <span class="shape-circle department4">10%</span> Отдел регулирования
          магических популяций
        </li>
        <li>
          <span class="shape-circle department5">32%</span> Отдел международного
          магического сотрудничества
        </li>
        <li>
          <span class="shape-circle department6">2%</span> Отдел магического
          транспорта
        </li>
        <li>
          <span class="shape-circle department7">8%</span> Отдел магических игр
          и спорта
        </li>
        <li><span class="shape-circle department8">1%</span> Отдел тайн</li>
        <li><span class="shape-circle department9">3%</span> Орден феникса</li>
        <li><span class="shape-circle department10">12%</span> Мракоборцы</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Chart",
  mounted() {
    this.setParams();
  },
  computed: {
    departments() {
      return this.$store.getters.magicDepartments;
    },
    total() {
      return Number(this.$store.state.data.total);
    }
  },
  methods: {
    setParams() {
      const segments = document.querySelectorAll(".donut-segment");
      let dashoffset = 0;
      let fullWidth = 0;
      [...segments].forEach((el, index) => {
        const width = (this.departments[index].employees * 100) / this.total;
        const emptySpace = 100 - width;
        const dasharray = `${width} ${emptySpace}`;
        const newDashoffset = 100 - fullWidth + 25;
        newDashoffset >= 100
          ? (dashoffset = newDashoffset - 100)
          : (dashoffset = newDashoffset);
        fullWidth += width;
        el.style.strokeDasharray = dasharray;
        el.style.strokeDashoffset = dashoffset;
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.chart {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1300px;
  width: 100%;
  height: 100%;
  margin: 44px auto 0px;
  .chart-circle {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 46%;
    .chart-title {
      text-align: center;
      padding-left: 6vmin;
      font-weight: 500;
      font-size: 3vmin;
      line-height: 22px;
    }
    .donut {
      margin: 10px 30px 0;
      .donut-hole {
        background-image: url(../images/Icon.svg);
        background-position: center;
      }
    }
  }
  .chart-description {
    width: 58vmin;
    margin-top: 40px;
    display: flex;
    align-items: center;
    height: 100%;
    border-left: 3px solid #c1c3c8;
    border-radius: 20px;
    position: relative;
    &::before {
      content: "";
      width: 4vmin;
      height: 3px;
      background-color: #c1c3c8;
      margin-left: -4vmin;
    }
    @media (max-width: 1200px) {
      .chart-description {
        width: 50vmin;
      }
    }
    @media (max-width: 985px) {
      .chart-description {
        width: 45vmin;
      }
    }
    .key-list {
      list-style: none;
      font-size: 22px;
      li {
        margin: 10px;
        color: #353d54;
        font-weight: 500;
        font-size: 2vmin;
        line-height: 22px;
      }
      .shape-circle {
        display: inline-block;
        vertical-align: middle;
        padding-top: 1vmin;
        text-align: center;
        width: 4vmin;
        height: 4vmin;
        border-radius: 50%;
        font-size: 1.8vmin;
        color: #fff;
      }
      .department1 {
        background-color: #2b78fe;
      }
      .department2 {
        background-color: #8295fa;
      }
      .department3 {
        background-color: #ffbb49;
      }
      .department4 {
        background-color: #87d227;
      }
      .department5 {
        background-color: #20cbac;
      }
      .department6 {
        background-color: #01b0d7;
      }
      .department7 {
        background-color: #6235b0;
      }
      .department8 {
        background-color: #9559ff;
      }
      .department9 {
        background-color: #c055d1;
      }
      .department10 {
        background-color: #ff7979;
      }
    }
  }
}
</style>
