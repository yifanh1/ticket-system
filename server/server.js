const fs = require('fs');
const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const { GraphQLScalarType } = require('graphql');
const { Kind } = require('graphql/language');

const maxNumberOfTickets = 25;
const ticketDB = [
    {
      id: 1, name: 'HuangYifan', phoneNumber: '123456', 
      created: new Date('2018-08-15 18:40:33'),
    },
    {
      id: 2, name: 'Ada', phoneNumber: '654321', 
      created: new Date('2018-08-16 18:40:33'), 
    },
  ];
const GraphQLDate = new GraphQLScalarType({
    name: 'GraphQLDate',
    description: 'A Date() type in GraphQL as a scalar',
    serialize(value) {
      return value.toISOString();
    },
    parseValue(value) {
      return new Date(value);
    },
    parseLiteral(ast) {
      return (ast.kind == Kind.STRING) ? new Date(ast.value) : undefined;
    },
  });

  const resolvers = {
    Query: {
        ticketList
    },
    Mutation: {
        ticketAdd,
        ticketDelete,
    },
    GraphQLDate,
  };

  function ticketList() {
      return ticketDB;
  }
  function ticketAdd(_, { ticket }) {
    ticket.created = new Date();
    ticket.id = ticketDB.length + 1;
    ticketDB.push(ticket);
    return ticket;
  }
  function ticketDelete(_, { ticket }) {
      let flag = false;
      for (i = 0; i<ticketDB.length; i++) {
          if (ticketDB[i].name == ticket.name && ticketDB[i].phoneNumber == ticket.phoneNumber) {
            ticketDB.splice(i, 1);
            flag = true;
          }
      }
      return flag;
  }
  const server = new ApolloServer({
    typeDefs: fs.readFileSync('./server/schema.graphql', 'utf-8'),
    resolvers,
  });
  
const app = express();

app.use(express.static('public'));

server.applyMiddleware({ app, path: '/graphql' });

app.listen(5000, function () {
  console.log('App started on port 5000');
});