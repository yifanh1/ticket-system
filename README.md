# Ticket System
This is the tutorial 3 submission for IT5007.  
### How to start?
Please use node **version >= 14** to compile. 
```
git clone https://github.com/yifanh1/ticket-system.git
cd ticket-system
```
- Front end(react): port 3000
```
nvm use 14
npm install
npm start
```
- Back end: Express and graphql: port 5000
```
node server/server.js
```
- Make sure both front-end and back-end is running before testing the webpage:  
  - Check the page: http://localhost:3000  
  - Check graphql(backend running on 5000): http://localhost:5000/graphql  

### Notice
- If you don't need to use graphql playground, no need to expose port 5000 since it's proxied by react (see package.json).
