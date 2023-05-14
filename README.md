# API Bíblia

Uma API que fornece acesso a versículos, livros e outros recursos da Bíblia.

## Requisitos

- PHP 7.4 ou superior
- Laravel 8.x
- Banco de Dados (MySQL, PostgreSQL, etc.)

## Instalação

1. Clone o repositório:

git clone https://github.com/amoriminformatica01/api-biblia.git



2. Navegue até a pasta do projeto:

cd api-biblia



3. Instale as dependências usando o Composer:

composer install



4. Copie o arquivo de configuração de exemplo e configure suas variáveis de ambiente:

cp .env.example .env



5. Gere a chave de criptografia do Laravel:

php artisan key:generate


6. Execute as migrações do banco de dados:

php artisan migrate



7. Inicie o servidor de desenvolvimento:

php artisan serve


A API estará disponível em http://localhost:8000.

## Rotas

  `/`: Retorna o o estado da API.
- `/api/versiculos`: Retorna uma lista de versículos.
- `/api/versiculos/{id}`: Retorna um versículo específico.
- `/api/livros`: Retorna uma lista de livros da Bíblia.
- `/api/livros/{id}`: Retorna informações sobre um livro específico.
- `/api/capitulos/{livro_id}`: Retorna os capítulos de um livro específico.
- `/api/capitulos/{livro_id}/{capitulo}`: Retorna os versículos de um capítulo específico.

## Autenticação

A API Bíblia não requer autenticação para acessar as rotas públicas. No entanto, você pode adicionar autenticação conforme necessário, como tokens JWT ou OAuth, para proteger rotas específicas.

## Uso

Você pode interagir com a API usando qualquer cliente HTTP ou ferramentas como cURL, Postman ou Insomnia. Aqui está um exemplo de solicitação usando cURL:

curl -X GET http://localhost:8000/api/versiculos



## Documentação

Para obter uma documentação detalhada, consulte [Documentação da API Bíblia](link-para-documentacao).

## Contribuição

Contribuições são bem-vindas! Para contribuir com a API Bíblia, siga as instruções abaixo:

1. Faça um fork do repositório.
2. Crie uma branch para sua contribuição: `git checkout -b minha-contribuicao`.
3. Faça as alterações e commit.
4. Envie sua branch: `git push origin minha-contribuicao`.
5. Abra um pull request.

## Suporte

Se você tiver alguma dúvida ou precisar de suporte em relação à API Bíblia, entre em contato conosco pelo e-mail [pedro.amorim@artevitmidia.com.br](mailto:pedro.amorim@artevitmidia.com.br).

## Licença

Este projeto está licenciado sob a Licença [Licença MIT](https://mit-license.org).

## Agradecimentos

Gostaríamos de agradecer a todos os contribuidores e usuários da API Bíblia. Seu apoio e feedback.