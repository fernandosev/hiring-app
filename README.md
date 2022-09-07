<h1 align="center">Hiring app</h1>

## Content Table

- [About this project](#-about-this-project)
- [Layout](#-layout)
- [Running the project](#running-the-project)
- [Running the tests](#running-the-tests)
- [Author](#-author)

## 📄 About this project

Uma corretora de ações está desenvolvendo um sistema para permitir que pequenos investidores possam tomar decisões melhores sobre seu portfólio. Uma das funcionalidades importantes é a de verificar o desempenho de uma ação nos seguintes cenários:

- Preço atual;
- Preço histórico;
- Preço atual em comparação a outras ações;
- Projeção de ganhos com compra em data específica.

A ideia é implementar um app, sem preocupações com dividendos, taxas administrativas ou outras incumbências que afetariam o montante total. Sendo assim, pressuponha que a compradora deseja saber o quanto teria ganhado ou perdido se tivesse investido seu dinheiro numa determinada quantidade de ações de uma empresa em alguma data no passado.

## 🎨 Layout

Designed with Figma, available in:

- [Hiring App](https://www.figma.com/file/wTU6yZKJw50FQxecQQyhVg/Hiring---AdGrowth?node-id=0%3A1).

## Running the project

```bash
# 1. Clone thie repo
git clone https://github.com/fernandosev/hiring-app.git

# 2. Access the project folder
cd hiring-app

# 3. Install the dependencies
yarn # or $ npm install

# 4. Install Pod for ios
npx pod-install

# 5. Create a .env file on root project folder

# 6. Add the following environment variables
# API_BASE_URL=''

# 7. Run the application on android
yarn android

# 8. Run the application on iOS
yarn ios

```

## Running the tests

```bash
yarn test

```

## 👨‍💻 Author

- [Fernando Severino Almeida](https://github.com/fernandosev)
