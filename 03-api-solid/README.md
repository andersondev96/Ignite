# App - Módulo 03 Ignite Node.js

App Gympass style desenvolvido no módulo 3 do Ignite da trilha de Node.js da Rocketseat.

## 🧑‍💻 Tecnologias utilizadas
- [TypeScript](https://www.typescriptlang.org/)
- [Node.js](https://nodejs.org/en)
- [Fastify](https://fastify.dev/)
- [Eslint](https://eslint.org/)
- [Zod](https://zod.dev/)
- [Prisma](https://www.prisma.io/)
- [Bcrypt](https://www.npmjs.com/package/bcrypt)
- [Vitest](https://vitest.dev/)
- [Supertest](https://www.npmjs.com/package/supertest)

## ⚙ Requisitos funcionais (RFs)

- [x] Deve ser possível se cadastrar;
- [x] Deve ser possível se autenticar;
- [x] Deve ser possível obter o perfil de um usuário logado;
- [x] Deve ser possível obter o número de check-ins realizados pelo usuário logado;
- [x] Deve ser possível o usuário obter o seu histório de check-ins;
- [x] Deve ser possível o usuário buscar academias próximas (até 10Km);
- [x] Deve ser possível o usuário buscar academias pelo nome;
- [x] Deve ser possível o usuário realizar check-in em uma academia;
- [x] Deve ser possível validar o check-in de um usuário;
- [x] Deve ser possível cadastrar uma academia;

## ⚙ Regras de negócio (RNs)

- [x] O usuário não deve poder se cadastrar com um e-mail duplicado;
- [x] O usuário não pode fazer 2 check-ins no mesmo dia;
- [x] O usuário não pode fazer check-in se não estiver perto (100m) da academia;
- [x] O check-in só pode ser validado até 20 minutos após ser criado;
- [x] O check-in só pode ser validado por administradores;
- [x] A academia só pode ser cadastrada por administradores;

## ⚙ Requisitos não-funcionais (RNFs)

- [x] A senha do usuário precisa estar criptografada;
- [x] Os dados da aplicação precisam estar persistidos em um banco PostgreSQL;
- [x] Todas as listas de dados precisam estar paginadas com 20 itens por páginas;
- [x] O usuário precisa ser identificado por um JWT (Json Web Token)

## 🧪 Testes
### Testes Unitários
- Authenticate Use Case
    - It should be able to authenticate.
    
        O usuário se consegue se autenticar na aplicação.

    - It should not be able to authenticate with wrong email.

        O usuário não consegue se autenticar com um e-mail inválido.

    - It should not be able to authenticate with wrong password.

        O usuário não consegue se autenticar com uma senha inválida.

- Check-In Use Case

    - It should be able to check in.

        O usuário consegue realizar o check-in em uma academia.

    - It should not be able to check in twice the same day.

        Não deve ser possível realizar check-in duas vezes no mesmo dia.

    - It should be able to check in twice but in different days.

        Deve ser possível realizar o check-in em dias diferentes.

    - It should not be able to check in on distant gym.

        Não deve ser possível realizar o check-in em academias com mais de 100m de distância.

- Create Gym Use Case

    - It should be able to create gym

        Deve ser possível cadastrar uma academia.

- Fetch Nearby Gym Use Case

    - It should be able to fetch nearby gym

        Deve ser possível encontrar academias próximas.

- Get User Metrics Use Case

    - It should be able to get check-ins count from metrics

        Deve ser possível obter o número de check-ins realizados.

- Get User Profile Use Case

    - It should be able to get user profile

        Deve exibir os dados sobre o perfil do usuário.

    - It should not be able to get user profile with wrong id

        Não deve obter o usuário com o ID inválido.

- Register Use Case

    - It should be able to register

        Deve ser possível cadastrar um novo usuário.

    - It should hash user password upon registration

        Deve fazer o hash da senha do usuário no momento do registro.

    - It should not be able to register with same email twice

        Não deve ser possível se registrar com um e-mail que já está registrado.

- Search Gyms Use Case

    - It should be able to search for gyms

        Deve ser possível buscar por academias

    - It should be able to fetch paginated gym search

        Deve ser possível realizar uma busca paginada por academias

- Validate Check In Use Case

    - It should be able to validate the check-in

        Deve ser possível validar um check-in

    - It should not be able to validate an inexistent check-in

        Não deve ser possível validar um check-in que não existe

    - It should not be able to validate the check-in after 20 minutes of its creation

        Não deve ser possível validar um check-in após 20 minutos da sua criação.

    
    Para executar os testes unitários rode o comando:

    `npm run test ` ou  ` npm run test:watch`.

### Testes E2E

- Create Check-in

    - It should be able to create a check-in

        Deve ser possível criar um check-in.

- Check-in history

    - It should be able to list the history of check-ins

        Deve ser possível listar o histórico de check-ins.

- Check-in metrics

    - It should be able to get the total count of check-ins

        Deve ser possível ver o total de check-ins realizado pelo usuário.

- Validate check-in

    - It should be able to validate a check-in

        Deve ser possível validar um check-in.

- Create Gym

    - It should be able to create a gym

        Deve ser possível criar uma academia.

- Neraby Gyms

    - It should be able list nearby gyms

        Deve ser possível listar academias próximas.

- Search Gyms

    - It should be able search gyms by title

        Deve ser poossível buscar por academias.

- Authenticate

    - It should be able to authenticate

        Deve ser possível se autenticar na aplicação.

- Profile

    - It should be able to get user profile

        Deve ser possível visualizar o perfil do usuário.

- Refresh Token

    - It should be able to refresh a token

        Deve ser possível atualizar o token.

- Register

    - It should be able to register

        Deve ser possível se registrar na aplicação.


    Para executar os testes E2E rode o comando:

    `npm run test:e2e ` ou  ` npm run test:e2e:watch`.

## 🚀 Como executar a aplicação
Para executar a aplicação siga os seguintes passos:

- Clone e acesse o repositório:
```
git clone https://github.com/andersondev96/ignite-2022
```


```
cd ignite-2022/03-api-solid
```

- Instale as dependências do projeto:
```
npm install
```
- Execute o contâiner do projeto:
```
docker-compose up -d
```

- Copie o arquivo `.env.example` e renomeie para `.env`
```
cp .env.example .env
```

- Execute as migrations:
```
npx prisma migrate dev
```   
- Execute o projeto com o comando:
```
npm run start:dev
```
- O servidor irá rodar na porta `http://localhost:3333`

## 📝 Licença

Este projeto está sob a licença [MIT](LICENSE).

## 👥  Autor

<img src="https://avatars.githubusercontent.com/u/49786548?v=4" width="64" style="border: 2px solid blue; border-radius: 50px" />

**Anderson Fernandes Ferreira**