const API_URL = "https://fakestoreapi.com";

Vue.component("product", {
  template: `
    <div>
        <div>
        {{ item.title}}
        <img v-v-bind:src="item.image" v-bind:style="{width : 100px}">
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
      this.products = data;
      console.log("data", data);
    },
  },
});
