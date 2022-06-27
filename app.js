const listen = require("listen");


var app = Vue({
    el: "#app",
    data:{
        API_URL: "https://fakestoreapi.com",
        list:[]
    },

    created: async function() {
        let response = await fetch(API_URL + "/products");
        let data = await response.json();
        this.list = data
    }
});