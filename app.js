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

app.listen(9000, () => {
  console.log('listening on *:9000');
});