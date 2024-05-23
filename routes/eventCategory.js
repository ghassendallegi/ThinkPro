import express from 'express';
const router = express.Router();
import {
  getAllCategories,
  addCategory,
  getCategory,
  updateCategory,
  deleteCategory
} from '../controllers/eventCategory.js';

router
  .route('/')
  .get(getAllCategories)
  .post(addCategory);

router
  .route('/:categoryId')
  .get(getCategory)
  .put(updateCategory)
  .patch(updateCategory)
  .delete(deleteCategory);

export default router;
