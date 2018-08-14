const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

//created app
const app = express();

// BodyParser Middleware
app.use(bodyParser.json());

app.use(cors());

const linkedinLink = 'https://www.linkedin.com/in/muratkayaaksoy/';
const twitterLink = 'https://twitter.com/muratkayaaksoy';
const githubLink = 'https://github.com/mkayaaksoy';

const responseAbout = '<a href = "'
+linkedinLink+'" target="_blank" ><b> Linkedin </b> </a></br> <a href = "'
+twitterLink+'" target="_blank" ><b> Twitter </b> </a></br> <a href = "'
+githubLink+'" target="_blank" ><b> Github </b> </a>';

const jsonResult = {
	"name": "Murat Kaya Aksoy",
	"title": "Software Developer",
	"country":"Turkey",
	"time":new Date()
}

app.get('/',(req, res) => {
	res.send('If you want to bla bla bla please send get request to /api/about');
});

app.get('/api/about',(req, res) => {
	res.send(responseAbout);
});

app.get('/api/getjson', (req, res) =>{
	res.send(jsonResult);
});

const port = process.env.PORT || 4532;
app.listen(port, ()=>{
	console.log('Server started at port: '+port);
});