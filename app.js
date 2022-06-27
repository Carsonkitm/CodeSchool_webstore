const API_URL = "https://fakestoreapi.com";

Vue.component("product", {
  template: `
    <div>
        <div>
        <img v-bind:src="item.image">
        {{ item.price }}
        </div>
    </div>
    `,
    props: {
        "item": Object
    }
});

var app = new Vue({
  el: "#app",
  data: {
    products: [],
    page: "store",
  },
  methods: {
    getProducts: async function () {
      let response = await fetch(`${API_URL}/products`);
      let data = await response.json();
      this.list = data;
      console.log("data", data);
    },
  },
});
