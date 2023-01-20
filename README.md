# Algotrasoft Community

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.0.2.

On the homepage, users can find a wealth of information about the community and its activities. Users can access the scanner page by registering from the sign up page. On the scanner page, users can view the results of the Ross Hook strategy backtest for over 1000 symbols. These results include the stock name and the yearly annual percentage yield (APY). If users want to see more detailed information about the results, such as the sector, market capitalization, and backtest results for 1, 3, and 6 months, they can click on the result card. To achieve this, mock data for the backtest results was created and deployed on Firebase. This allowed the development of an API to retrieve the results of the algorithm strategy. The live project was deployed using Firebase.

LiveURL: https://algotrasoft-community-angular.web.app/

<hr>
<div align="center">
This app is also developed on React JS with typescript and tailwind. Click the link below to view.

<b>React Version:</b> https://github.com/ahmetcankaratas/algotrasoft-community
</div>
<hr>

## **🔎 Technologies**

- Angular
- Tailwind CSS

## 📷 Screenshots
<b>Homepage</b>
<img width="1440" alt="Screen Shot 2023-01-20 at 16 07 20" src="https://user-images.githubusercontent.com/53529387/213702150-6b7839c2-ca11-4dbb-827e-b486ce4a24d9.png">

<img width="1440" alt="Screen Shot 2022-12-28 at 23 32 19" src="https://user-images.githubusercontent.com/53529387/209869267-e8b3d104-7ede-4eb4-96cc-253dbd2b81c1.png">

<b>Scanner</b>
<img width="1440" alt="Screen Shot 2022-12-28 at 23 33 10" src="https://user-images.githubusercontent.com/53529387/209869386-5f2a2c6c-b267-4a82-b059-1c26304b6a64.png">

<img width="1438" alt="Screen Shot 2022-12-28 at 23 33 31" src="https://user-images.githubusercontent.com/53529387/209869403-c0fc9db0-8419-4393-b37e-e0dd5579d997.png">

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Installation

A step by step guide that will tell you how to get the development environment up and running.

- Clone the repository

```
git clone https://github.com/ahmetcankaratas/algotrasoft-community-angular
```

- Install dependencies

```
cd algotrasoft-community-angular
npm install
```


- create .env.ts file like .env.test.ts in src/environments folder. secret_key variable is a firebase Web API Key which can taken from [firebase web site](https://console.firebase.google.com/) in project settings.

```env
export default {
  secret_key: '',
};
```


- Build and run the project

```

ng serve

```

Navigate to `http://localhost:4200`

