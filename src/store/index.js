import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    data: {
      id: 1,
      total: "217",
      males: "118",
      females: "99",
      couples: "9",
      date: "11.09.2020",
      departments: [
        {
          title: "Администрация",
          employees: 3
        },
        {
          title: "Отдел обеспечения магического правопорядка",
          employees: 54
        },
        {
          title: "Отдел магических происшествий и катастроф",
          employees: 13
        },
        {
          title: "Отдел регулирования магических популяций",
          employees: 22
        },
        {
          title: "Отдел международного магического сотрудничества",
          employees: 69
        },
        {
          title: "Отдел магического транспорта",
          employees: 5
        },
        {
          title: "Отдел магических игр и спорта",
          employees: 18
        },
        {
          title: "Отдел тайн",
          employees: 1
        },
        {
          title: "Орден Феникса",
          employees: 7
        },
        {
          title: "Мракоборцы",
          employees: 25
        }
      ]
    }
  },
  getters: {
    magicDepartments: ({ data }) => data.departments
  },
  mutations: {},
  actions: {},
  modules: {}
});
