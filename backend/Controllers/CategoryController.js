// controllers/CategoryController.js
const { Category } = require('../Models/CategoryModel.');

const CategoryController = {
  getAllCategories: async (req, res) => {
    try {
      const categories = await Category.findAll();
      res.json(categories);
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  },

  getCategoryById: async (req, res) => {
    const categoryId = req.params.id;
    try {
      const category = await Category.findByPk(categoryId);
      if (!category) {
        return res.status(404).send('Category not found');
      }
      res.json(category);
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  },

  // Add other category-related controller methods...
};

module.exports = CategoryController;
