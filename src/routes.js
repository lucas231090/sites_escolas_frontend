const express = require('express')
const path = require('path');
const router = express.Router()

router.get('/server', (request, response)=>{
    response.json({message: "servidor on-line 💻"})
})

router.get('/dirce', (request, response) => {
  response.status(200).sendFile(path.join(__dirname + '/../public/dirce/index.html'));
});

router.get('/dirce/grupoa', (request, response) => {
  response.status(200).sendFile(path.join(__dirname + '/../public/dirce/grupoA.html'));
});

router.get('/dirce/grupob', (request, response) => {
  response.status(200).sendFile(path.join(__dirname + '/../public/dirce/grupoB.html'));
});

router.get('/ines', (request, response) => {
  response.status(200).sendFile(path.join(__dirname + '/../public/ines/index.html'));
});

//pagina dos alunos do ines
//fit task
router.get('/ines/fittask', (request, response) => {
  response.status(200).sendFile(path.join(__dirname + '/../public/ines/fitTask/index.html'));
});

router.get('/ines/fittask/aboutus', (request, response) => {
  response.status(200).sendFile(path.join(__dirname + '/../public/ines/fitTask/saibamais.html'));
});

//prox


//pagina dos alunos do dirce
//prox
router.get('/ines/grupob', (request, response) => {
  response.status(200).sendFile(path.join(__dirname + '/../public/ines/grupoB.html'));
});


module.exports = router
