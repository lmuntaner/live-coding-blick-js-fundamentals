class Restaurant {
  constructor(name) {
    this.name = name;
    this.orders = [];
  }

  check(currentCustomer) {
    // const customerOrders = this.orders.filter((order) => {
    //   return order.customer.id === currentCustomer.id;
    // });
    const total = this.orders
      .filter((order) => {
        return order.customer.id === currentCustomer.id;
      })
      .reduce((partialTotal, order) => {
        return partialTotal + order.dish.price;
      }, 0);
    console.log(`The check is ${total}`);
  }

  order(c, d) {
    const customerOrder = {
      customer: c,
      dish: d,
    };
    this.orders.push(customerOrder);
  }
}

const buk = {
  id: '1',
  name: 'Henry',
};

const fante = {
  id: '2',
  name: 'Arturo',
};

const ramen = {
  price: 20,
  name: 'Ramen',
  ingredients: [
    { name: 'soup', cost: 3 },
    { name: 'noodles', cost: 2 }
  ]
};

// with an object literal we cannot do this: `ramen.cost();`

const edamame = {
  price: 8,
  name: 'Edamame'
};

const miki = new Restaurant('Miki Ramen');
miki.order(buk, ramen);
miki.order(buk, edamame);

miki.order(fante, ramen);
// console.log(miki.orders);

miki.check(buk); // `The total is 28`