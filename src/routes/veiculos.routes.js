import express from 'express';
import veiculosServices from '../services/veiculos.service.js';

const veiculosRouter = express.Router();

veiculosRouter.get('/', async (req, res) => {
  const veiculos = await veiculosServices.getAll();
  res.json(veiculos);
});
veiculosRouter.post('/', async (req, res) => {
  const veiculo = await veiculosServices.create(req.body);
  return res.status(201).json(veiculos);
});

export default veiculosRouter;