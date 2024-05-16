import express from'express';
var router = express.Router();
import {
  getAllClass,
  addClass,
  getClass,
  updateClass,
  deleteClass

} from '../controllers/class.js';

router
  .route('/')
  .get(getAllClass)
  .post(addClass);




  router
  .route('/:classId')
  .get(getClass)
  .put(updateClass)
  .delete(deleteClass);

router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});





export default router;