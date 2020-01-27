'use strict';


const Categories = require('../models/categories.js');

describe('Categories Model', () => {

  let categories;

  beforeEach(() => {
    categories = new Categories();
  });

  it('can post() a new category', () => {

    let obj = { name: 'Test Category' };
    return categories.create(obj)
      .then(record => {
        Object.keys(obj).forEach(key => {
          expect(record[key]).toEqual(obj[key]);
        });
      })
      .catch(e => console.error('ERR', e));
  });

  it('can get() a category', () => {

    let obj = { name: 'Test Category' };
    return categories.create(obj)
      .then(record => {
        return categories.get(record._id)
          .then(category => {
            Object.keys(obj).forEach(key => {
              expect(category[0][key]).toEqual(obj[key]);
            });
          });
      });
  });

  it('can delete() a category', () => {

    let obj = { name: 'Test Category' };
    return categories.create(obj)
      .then(record => {
        return categories.delete(record._id)
          .then(category => {
            Object.keys(obj).forEach(key => {
              expect(category).toBeUndefined();
            });
          });
      });
  });

  it('can update() a category', () => {

    let obj = { name: 'Test Category' };
    return categories.create(obj)
      .then(record => {
        record.name = 'update category';
        return categories.update(record._id, record)
          .then(category => {
            return categories.get(category._id)
              .then(category => {
                Object.keys(obj).forEach(key => {
                  expect(category[0][key]).toEqual(obj[key]);
                });
              });
          });
      });
  });

});