Vue.createApp({
    data(){
        return {
            menu: [
                {
                  id: 1,
                  image: "pizza-1.png",
                  name: "BISMARCK",
                  price: 300,
                  calories: "800 kcal",
                  squirrels: "30 g",
                  fats: "50 g",
                },
                {
                  id: 2,
                  image: "pizza-2.png",
                  name: "FIORI DI ZUCCA",
                  price: 500,
                  calories: "800 kcal",
                  squirrels: "30 g",
                  fats: "50 g",
                },
                {
                  id: 3,
                  image: "pizza-3.png",
                  name: "VALDOSTANA",
                  price: 550,
                  calories: "800 kcal",
                  squirrels: "30 g",
                  fats: "50 g",
                },
                {
                  id: 4,
                  image: "pizza-4.png",
                  name: "TARTUFATA",
                  price: 450,
                  calories: "800 kcal",
                  squirrels: "30 g",
                  fats: "50 g",
                },
                {
                  id: 5,
                  image: "pizza-5.png",
                  name: "FRANCESCANA",
                  price: 250,
                  calories: "800 kcal",
                  squirrels: "30 g",
                  fats: "50 g",
                },
                {
                  id: 6,
                  image: "pizza-6.png",
                  name: "BOSCAIOLA",
                  price: 850,
                  calories: "800 kcal",
                  squirrels: "30 g",
                  fats: "50 g",
                },
                {
                  id: 7,
                  image: "pizza-7.png",
                  name: "MARE E MONTI",
                  price: 650,
                  calories: "800 kcal",
                  squirrels: "30 g",
                  fats: "50 g",
                },
                {
                  id: 8,
                  image: "pizza-8.png",
                  name: "MARE E MONTI",
                  price: 950,
                  calories: "800 kcal",
                  squirrels: "30 g",
                  fats: "50 g",
                },
              ],
            cart: [
                // {
                //     id: 1,
                //     image: "pizza-1.png",
                //     name: "BISMARCK",
                //     price: 300,
                //     calories: "800 kcal",
                //     squirrels: "30 g",
                //     fats: "50 g",
                // },
            ]
        }
    },

    methods: {
        addPizza(id){
            const pizza = this.menu.find((pizza) => pizza.id == id)
            //console.log(pizza);
            const index = this.cart.findIndex((pizza) => pizza.id == id)

            if(index != -1) {
                this.cart[index].quantity++

            }else {
                this.cart.push({...pizza, quantity: 1})
            }
        },

        getTotalPrice() {
          var total = 0;
          this.cart.forEach(pizza => {
            total += pizza.price * pizza.quantity;
          });
          return total;
        },

        reducePizzaItem(id) {
          var item = this.cart.find((pizza) => pizza.id == id);
          if(item.quantity > 1) {
            item.quantity--;
          }else {
            this.cart = this.cart.filter((pizza) => pizza.id != id);
          }
        },

        addPizzaItem(id){
          var item = this.cart.find((pizza) => pizza.id == id);
          item.quantity++;
        },

        removePizza(id){
          this.cart = this.cart.filter((pizza) => pizza.id != id);
        }
    }
}).mount("#pizza-restaurant")