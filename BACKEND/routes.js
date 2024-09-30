import express from 'express';
const router = express.Router();

router.post('/', (req, res) => {
  if (Object.keys(req.body).length > 1) {
    console.log("Request body:", req.body);
  }
  res.status(200).send('Data processed');
});

export default router;