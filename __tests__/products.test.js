'use strict';


const Products = require('../models/products.js');

describe('Products Model', () => {


  let products;

  beforeEach(() => {
    products = new Products();
  });

  it('can post() a new product', () => {

    let obj = { tybe: 'PS4', price: 299 };
    return products.create(obj)
      .then(record => {
        Object.keys(obj).forEach(key => {
          expect(record[key]).toEqual(obj[key]);
        });
      })
      .catch(e => console.error('ERR', e));
  });
  it('can get() a products', () => {

    let obj = { tybe: 'XBOX-ONE', price: 249 };
    return products.create(obj)
      .then(record => {
        return products.get(record._id)
          .then(prod => {
            Object.keys(obj).forEach(key => {
              expect(prod[0][key]).toEqual(obj[key]);
            });
          });
      });
  });
  it('can update() a products', () => {

    let obj = { tybe: 'PS4', price: 299 };
    return products.create(obj)
      .then(record => {
        record.price = 499;
        record.tybe = 'PS5';
        return products.update(record._id, record)
          .then(category => {
            return products.get(category._id)
              .then(category => {
                Object.keys(obj).forEach(key => {
                  expect(category[0][key]).toEqual(obj[key]);
                });
              });
          });
      });
  });
  it('can delete() a products', () => {

    let obj = { tybe: 'XBOX-ONE', price: 259 };
    return products.create(obj)
      .then(record => {
        return products.get(record._id)
          .then(prod => {
            return products.delete(prod._id)
              .then(record => {
                expect(record).toEqual(undefined);
              });
          });
      });
  });
});