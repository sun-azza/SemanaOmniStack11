const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();


app.use(cors( /**{
  origin: 'http://meuapp.com'
}*/));
app.use(express.json());
/**abaixo do json */
app.use(routes);

app.listen(3333);



/**BANCO DE DADOS */

/**ENTIDADES- Tudo aquilo que representa algo que vai ser salvo no DB*/

/**ENTIDADES:
 * ong -pode ter varios casos
 * caso (incident)
 */

 /**FUNCIONALIDADES:
  * login da ong
  * logout da ong
  * cadastrar da ong
  * cadastrar novos casos
  * deletar casos
  * listar casos específicos de uma ONG
  * listar todos os casos
  * entrar em contato com a ONG -via WhatsApp e E-mail
  */

  /**Migrations- Forma da gente conseguir  criar tabelas e manter
   * um historico das tabelas que foram criadas, campos alterados etc
   * bom para novos desenvolvedores entender*/



/**DICAS */

/** get('/') tudo depois da barra é o recurso que estamos querendo 
 * acessar, quase sempre vai ser uma tabela, uma entidade do banco.
 * Já a rota é o caminho por inteiro, todo o 'link' do site
 */

 /**Métodos HTTP 
  * 
  * GET: Buscar/listar uma informação do back-end, uma rota que o back-end
  * vai retornar alguma informação (uma listagem, um dado de algum usuário)
  * POST: Criar uma informação no back-end, uma rota que vai criar um 
  * novo usuário por exemplo (recebe os dados e cria ele).
  * PUT: Alterar uma informação no back-end.
  * DELETE: Deletar uma informação no back-end.
  */

/**Tipos de parâmetros
 *  
 * Query Params: Parâmetros nomeados enviados na rota após "?" (Filtros, paginação)
 * Route Params: Parâmetros utilizados para identificar um único recurso.
 * Request Body: Corpo da requisição utilizado para criar ou alterar usuário
 */ 



/**./ => para não achar que é um pacote como o express, referenciar a mesma pasta do arquivo index
 * ../ => volta uma pasta
*/
