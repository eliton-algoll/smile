import axios from 'axios';

/* O axios é um cliente http usado para realizar requisições em Api's.
Para realizar as requisições, iniciamos o método create passando como atribudo o baseURL que basicamente 
é a URL da API a ser consumida.
*/
const api = axios.create({
  baseURL: 'https://geek-jokes.sameerkumar.website/api',
}); 

/* aqui exportamos a configuração para poder utilizar os métodos http nos demais componentes */
export default api;