import express from'express';
var router = express.Router();
import {
  getUser,
  putUser,
  patchUser,
  getAllUsers,
  AddUser,
  deleteUser,
  signin,
  signup
} from '../controllers/user.js';

router
  .route('/')
  .get(getAllUsers)
  .post(AddUser);

router.route('/signup')
  .post(signup);

router.route('/signin')
  .post(signin);

  router
  .route('/:userId')
  .get(getUser)
  .put(putUser)
  .patch(patchUser)
  .delete(deleteUser);

router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});





export default router;
