import express from 'express';
import veiculosServices from '../services/veiculo.service.js';

const veiculosRouter = express.Router();

veiculosRouter.get('/', async (req, res) => {
  const veiculos = await veiculoServices.getAll();
  res.json(veiculos);
});
veiculosRouter.post('/', async (req, res) => {
  const veiculo = await veiculosServices.create(req.body);
  return res.status(201).json(veiculo);
});

export default veiculosRouter;