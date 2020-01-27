'use strict';

const DataModel = require('../memory-data-model.js');

class Products extends DataModel {
  constructor() {
    super();
    this.schema = {
        products_id: { required: true },
        tybe: { required: true },
        price: { required: true }
    };
  }
}

module.exports = Products;