

import {pool} from '../config/db.js'

class veiculosServices {

    async getAll() {
        const resultado = await pool.query(
            'SELECT * FROM veiculos');

        return resultado.rows;
    } 

    async create(id, modelo, marca, ano, placa) {
        const resultado = await pool.query(
            `INSERT INTO veiculos
            ( modelo, marca, ano, placa) 
            VALUES ($1, $2, $3, $4, $5) 
            RETURNING* `,
         [modelo, marca, ano, placa]
        );

        return resultado.rows;
    }
}
    export default new veiculosServices();
