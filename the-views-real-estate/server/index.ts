import express from 'express';
import propertyRoutes from './routes/properties';

const app = express();
app.use(express.json());
app.use('/api', propertyRoutes);

app.get('/', (_req, res) => res.send('API running'));

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));

export default app;
