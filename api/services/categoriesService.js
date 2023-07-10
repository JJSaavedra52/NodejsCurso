const { faker } = require('@faker-js/faker');

class CategoriesService {

  constructor() {
    this.category = [];
    this.generate();
    // this.findOne();
  }

  generate() {
    const limit = 10;

    for (let i = 0; i < limit; i++) {
      this.category.push({
        id: faker.datatype.uuid(),
        name: faker.commerce.product()
      })
    }
  }


  find() {
    return this.category;
  }

  findOne(categoryId, productId) {
    return this.category.find(item =>
      item.categoryId === categoryId
      &&
      item.productId === productId);
  }


}


module.exports = CategoriesService;
