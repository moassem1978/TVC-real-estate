import { Router } from 'express';

const router = Router();

router.get('/properties', (_req, res) => {
  res.json([
    { id: 1, title: "Katameya Coast Villa", price: 35000000, listingType: "Primary" },
    { id: 2, title: "Lake View Villa", price: 25000000, listingType: "Resale" }
  ]);
});

export default router;
