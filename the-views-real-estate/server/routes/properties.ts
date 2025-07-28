import { Router } from 'express';

const router = Router();

router.get('/properties', (_req, res) => {
  res.json([{ id: 1, title: "Sample Property" }]);
});

export default router;
