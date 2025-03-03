// server/src/resolvers.js

const mongoose = require('mongoose')
const Product = require('./models/Product.js')
const Category = require('./models/Category.js')
const User = require('./models/User.js')
  
  
  const resolvers = {
    Query: {
      appName: () => 'ProductHunt clone by vk',
  
      allProducts: async () => {
        return Product.find({})
      },

      productsByAuthor: (_, { authorName }) => {
        const user = usersData.find(user => user.userName === authorName)
        return productsData.filter(product => product.authorId === user.id)
      },

      productsByCategory: async (parent, { slug }) => {
        const category = await Category.findOne({ slug })
        return Product.find({ categoriesIds: category._id })
      },

      allCategories: () => {
        console.log('Query.allCategories')
        return categoriesData
      }
    },
    
    Product: {
        author: async (product) => {
            console.log(`Query.Product.author for "${product.name}"`)
            return await User.findById(product.authorId);
        },
        categories: async (product) => {
          const allIds = product.categoriesIds
          return await Category.find({ _id: { $in: allIds } });
        },
        publishedAt: (product) => {
          return product.publishedAt.toISOString()
        },
      },
    }
  
  module.exports = {
    resolvers,
  }