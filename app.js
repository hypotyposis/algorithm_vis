var express = require('express');
var app = express();

app.use(express.static('./'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + 'index.html');

});

app.get('/graph/', (req, res) => {
  res.sendFile(__dirname + '/' +'graph.html');
})

app.get('/tree/', (req, res) => {
  res.sendFile(__dirname + '/' +'tree.html')
})

app.get('/gif/', (req, res) => {
  res.sendFile(__dirname + '/' +'gif.html')
})

app.get('/force/', (req, res) => {
  res.sendFile(__dirname + '/' +'force.html')
})

app.listen(80, () => {
  console.log('listening on *:80');
});