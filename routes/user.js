import express from'express';
var router = express.Router();
import {
  getOnce,
  putOnce,
  patchOnce,
  getAll,
  AddOnce,
  deleteOnce
} from '../controllers/user.js';

router
  .route('/')
  .get(getAll)
  .post(AddOnce);

  router
  .route('/:userName')
  .get(getOnce)
  .put(putOnce)
  .patch(patchOnce)
  .delete(deleteOnce);
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});





export default router;
