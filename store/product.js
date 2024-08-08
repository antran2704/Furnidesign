import { defineStore, acceptHMRUpdate } from "pinia";

export const useProductStore = defineStore("product", {
  state: () => {
    return {
      categories: [],
      listItemsFilter: [],
      filterLoading: true,
      filters: {
        categories: [],
        price: [],
      },
    };
  },
  actions: {
    addFilter(name, value) {
      this.filters[name].push(value);
    },
    deleteFilter(name, value) {
      const index = this.filters[name].findIndex((item) => item === value);
      this.filters[name].splice(index, 1);
    },
    async getItemInFilter(url) {
      let data = [];
      this.filterLoading = true;
      data = await $fetch(`${url}`);

      if (this.filters.categories.length > 0) {
        data = data.filter((item) => {
          const isExit = item.categories.some((s) => {
            const name = s.name
              .replaceAll(" & ", "-")
              .replaceAll(" ", "-")
              .toLowerCase();
            return this.filters.categories.includes(name);
          });

          if (isExit) {
            return item;
          }
        });
      }
      if (this.filters.price > 0) {
        data = data.filter((item) => {
          const isExit = this.filters.price.some((value) => {
            switch (value) {
              case "1":
                return item.price < 2500;

              case "2":
                return item.price >= 2500 && item.price <= 5000;

              case "3":
                return item.price >= 5000 && item.price <= 10000;

              case "4":
                return item.price >= 10000 && item.price <= 20000;

              case "5":
                return item.price > 20000;

              default:
                return false;
            }
          });

          if (isExit) {
            return item;
          }
        });
      }
      
      this.listItemsFilter = data;
      this.filterLoading = false;
    },
  },
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useProductStore, import.meta.hot));
}
