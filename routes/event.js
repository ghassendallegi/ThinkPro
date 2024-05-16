import express from'express';
const router = express.Router();
import {
  getAllEvents,
  addEvent,
  getEvent,
  updateEvent,
  deleteEvent
} from '../controllers/event.js';

router
  .route('/')
  .get(getAllEvents)
  .post(addEvent);

router
  .route('/:eventId')
  .get(getEvent)
  .put(updateEvent)
  .patch(updateEvent)
  .delete(deleteEvent);

export default router;
