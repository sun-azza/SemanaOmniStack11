const connection = require('../database/connection');

module.exports = {
    async index(request, response){/**paginação de registros */
        const { page = 1 } = request.query;

        const [count] = await connection('incidents').count();

        console.log(count);

        const incidents = await connection('incidents')
        .join('ongs', 'ongs.id', '=', 'incidents.ong_id')
        .limit(5)
        .offset((page - 1) * 5)
        /**para pular os 5 primeiros registros de uma pagina e ir p outra
         * ex: page = 2; 2 - 1 = 1 * 5 que vai dar 5, ent vai começar a pegar 
         * os registros pelo número 5.
         */
        .select(['incidents.*',
        'ongs.name',
        'ongs.email',
        'ongs.whatsapp',
        'ongs.city',
        'ongs.uf'
    ]);

        response.header('X-Total-Count', count['count(*)']);
        /**listagem de todos os casos */

        return response.json(incidents);
    },

    async create(request, response) {
        const { title, description, value} = request.body;
        const ong_id = request.headers.authorization;
        /**headers para algo (no caso, uma autorização) */

        const [id] = await connection('incidents').insert({
            title,
            description,
            value,
            ong_id,
        });

        return response.json({ id });
    },

    async delete(request, response){
        const { id } = request.params;
        const ong_id = request.headers.authorization;
        /**deletar um id de uma ong */

        const incident = await connection('incidents')
        .where('id', id)
        .select('ong_id')
        .first();

        if(incident.ong_id != ong_id) {
            return response.status(401).json({ error: 'Operation not permitted.' })
        }

        await connection('incidents').where('id', id).delete();

        return response.status(204).send();
    }

};




/**headers -  guarda informações como dados da autenticação do usuario 
 * ou idiota etc dados que caracteriza o contexto da requisição */