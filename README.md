<h1>School Grade</h1>
<h3>It's an Angular app to filter students grades based in their CPF.</h3>

********************************************************************************************************************************************************************
(pt-br)

Ao efetuar o download da dos diretórios da aplicação, vá no /backend e execute "npm install ou /yarn install" (a depender do seu gerenciador de dependencias instalado na máquina). Faça o mesmo no diretório /frontend.

Após instalar todas as dependencias necessárias: 
- na pasta /backend execute o comando "npm start ou yarn start", assim o backend estará operante.
- na pasta /frontend execute o comando "ng serve" inicializando a aplicação, vá ao navegador no endereço "localhost:4200/myGrade" assim, poderá acessar a aplicação e buscar os CPF's pré-cadastrados no teste.

********************************************************************************************************************************************************************
O banco de dados foi construido utilizando PostgresSQL, o backup se encontra na pasta raiz do projeto "/backend/src/database", após restaurar o backup o sistema estará disponível para ser executado.
CPF's cadastrados para teste 999.999.999-99, 888.888.888-88. 
(Obs.: Outra possibilidade seria utilizar o número de matrícula do aluno em vez do CPF).

O backup do banco "school" se encontra no diretório backend/src/database, lá também será possível encontrar os Txt's referentes a criação das tables
********************************************************************************************************************************************************************
