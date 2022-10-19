const express = require('express');
const router = express.Router({ mergeParams: true });

/* line above allows us to pull the id from with the app.use in app.js, so we have access to the post id and can look up the post. */

/* GET reviews index /posts/:id/reviews */
router.get('/', (req, res, next) => {
  res.send('INDEX /posts/:id/reviews');
});

/* GET reviews new /posts/:id/reviews/new */
router.get('/new', (req, res, next) => {
  res.send('NEW /posts/:id/reviews/new');
});

/* POST reviews create /posts/:id/reviews */
router.post('/', (req, res, next) => {
  res.send('CREATE /posts/:id/reviews');
});

/* GET reviews show /posts/:id/reviews/:reviews_id */
router.get('/:review_id', (req, res, next) => {
  res.send('SHOW /posts/:id/reviews/:reviews_id');
});

/* GET reviews edit /posts/:id/reviews/:reviews_id/edit */
router.get('/:reviews_id/edit', (req, res, next) => {
  res.send('EDIT /posts/:id/reviews/:reviews_id/edit');
});

/* PUT reviews update /posts/:id/reviews/:reviews_id */
router.put('/:id', (req, res, next) => {
  res.send('UPDATE /posts/:id/reviews/:reviews_id' );
});

/* DELETE reviews destroy /posts/:id/reviews/:reviews_id */
router.delete('/:id', (req, res, next) => {
  res.send('DELETE /posts/:id/reviews/:reviews_id');
});

module.exports = router;