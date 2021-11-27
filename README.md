## DeMo-CaFi

### Deployment

UI: https://jstamatelos.github.io/demo-cafi/

NodeJS / Postgres DB: https://demo-cafi.herokuapp.com/

### Stack
- Front end: HTML / CSS / JS
- Back end: Node.js
- Database: Postgresql hosted on Heroku

### Test Data
- I took a few liberties with the test data but kept the same formatting
- Two test accounts are available:
```
Card Number: 5141000000009844
PIN: 4321
```
```
Card Number: 5141000000009082
PIN: 1234
```

### Model
- The user model contains two columns with an autoincremented primary key
- The userInfo column and the account column are both JSON columns containing the respective user / account information

### But why?
Most of the decisions were based on time, I tried to keep development time to 4 hours as reqested in the provided document.
Total development time came in at ~5 hours, the extra hour or so was due to some fun cors issues with heroku that I have not dealt with in a while.

- UI: I wanted to keep the front end as basic as possible, the fetch api was competent enough to handle the simple GET requests needed.
- API: NodeJs / Express / Postgres
  - Node / Express: It is very quick to set up and deploy / locally test with these tools.
  - Postgres: I know the given test data was as it would appear in a MongoDB set up, but I am not too familiar with Mongo and the set up seemed like it would have taken most of the development time. So, I stuck with familiar territory and used Postgres.

  
  
