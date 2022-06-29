const API_URL = "https://fakestoreapi.com";

Vue.component("product", {
  template: `
  <div>
      <div class="product_container>
        <div class="img_container>
          <img class="product_img" v-bind:src="item.image">
        </div>
        <div class="product_description">
          {{ item.title }}
          {{ item.price }}
        </div>
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
    page: "welcome"
  },

  methods: {
    getProducts: async function () {
      let response = await fetch(`${API_URL}/products`);
      let data = await response.json();
      this.products = data
  },
    setPage: function(new_page) {
      this.page = new_page;
      console.log(`go to ${this.page}`);
    }
  },
  created: function (){
    this.getProducts()
  }
});