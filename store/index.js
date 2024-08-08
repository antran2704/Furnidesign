import { defineStore, acceptHMRUpdate } from "pinia";

export const useStore = defineStore("store", {
  state: () => {
    return {
      listCarts: [],
      categories: [],
      totalCart: 0,
      totalPrice: 0,
      listItemsFilter: [],
      filterLoading: true,
      filters: {
        rooms: [],
        styles: [],
        budget: [],
      },
    };
  },
  actions: {
    getListCart() {
      const listCarts = JSON.parse(localStorage.getItem("listCart") || "[]");
      const totalCart = listCarts.reduce((total, item) => {
        return (total += item.quantity);
      }, 0);
      const totalPrice = listCarts.reduce((total, item) => {
        return (total += item.quantity * item.price);
      }, 0);
      this.listCarts = listCarts;
      this.totalCart = totalCart;
      this.totalPrice = totalPrice;
    },
    clearCart() {
      const newListCarts = [];
      localStorage.setItem("listCart", JSON.stringify(newListCarts));
      this.listCarts = newListCarts;
      this.totalCart = 0;
      this.totalPrice = 0;
    },
    deleteProductInCart(index) {
      let currentListCarts = [...this.listCarts];
      if (currentListCarts.length > 1) {
        currentListCarts.splice(index, 1);
      } else {
        currentListCarts = [];
      }
      localStorage.setItem("listCart", JSON.stringify(currentListCarts));
    },
    // filter
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
      data = await $fetch(`${url}`, {cache: "force-cache"});

      if (this.filters.rooms.length > 0) {
        data = data.filter((item) => {
          const isExit = item.rooms.some((s) => {
            return this.filters.rooms.includes(s.name);
          });

          if (isExit) {
            return item;
          }
        });
      }

      if (this.filters.styles.length > 0) {
        data = data.filter((item) => {
          const isExit = item.styles.some((s) => {
            return this.filters.styles.includes(s.name);
          });

          if (isExit) {
            return item;
          }
        });
      }

      if (this.filters.budget.length > 0) {
        data = data.filter((item) => {
          const isExit = this.filters.budget.some((value) => {
            switch (value) {
              case "1":
                return item.budget < 2500;

              case "2":
                return item.budget >= 2500 && item.budget <= 5000;

              case "3":
                return item.budget >= 5000 && item.budget <= 10000;

              case "4":
                return item.budget >= 10000 && item.budget <= 20000;

              case "5":
                return item.budget > 20000;

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
  import.meta.hot.accept(acceptHMRUpdate(useStore, import.meta.hot));
}
