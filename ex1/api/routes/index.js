var express = require('express');
var router = express.Router();
var Contract = require('../controllers/contract');


// GET /contracts/courses: 

router.get('/contracts/courses', function(req, res, next) {
  Contract.listDistinctFieldValues("Curso")
    .then(courses => {
      res.status(200).json(courses);
    })
    .catch(erro => {
      res.status(520).json({error: erro, message: "Erro na obtenção dos cursos"})
    })
});

// GET /contracts/institutions

router.get('/contracts/institutions', function(req, res, next) {
  Contract.listDistinctFieldValues("InstituicaoEnsino")
    .then(institutions => {
      res.status(200).json(institutions);
    })
    .catch(erro => {
      res.status(520).json({error: erro, message: "Erro na obtenção das instituições"})
    })
});






// GET /contracts/:id 
router.get('/contracts/:idContract', function(req, res, next) {
  console.log("ID: " + req.params.idContract)
  Contract.getContract(req.params.idContract)
    .then(contract => {
      res.status(200).json(contract);
    }).catch(erro => {
      res.status(520).json({error: erro, message: "Erro na obtenção do contrato"})
    })
});


// GET /contracts?year=YYYY
router.get('/contracts', function(req, res, next) {
  const year = req.query.year;
  console.log(year);
  if(year){
    Contract.getContractsByYear(year)
      .then(contracts => {
        res.status(200).json(contracts);
      })
      .catch(erro => {
        res.status(520).json({error: erro, message: "Erro na obtenção dos casamentos por ano"})
      })
  }else{
    next();
  }
});

// GET /contracts?inst=AAA

router.get('/contracts', function(req, res, next) {
  const inst = req.query.inst;
  console.log(inst);
  if(inst){
    Contract.getContractsByInstitutionName(inst)
      .then(contracts => {
        res.status(200).json(contracts);
      })
      .catch(erro => {
        res.status(520).json({error: erro, message: "Erro na obtenção dos casamentos por ano"})
      })
  }else{
    next();
  }
});


// GET /contracts?nipc=NNNNNNNNN

router.get('/contracts', function(req, res, next) {
  const nipc = req.query.nipc;
  console.log(nipc);
  if(nipc){
    Contract.getContractsByInstitutionNIPC(nipc)
      .then(contracts => {
        res.status(200).json(contracts);
      })
      .catch(erro => {
        res.status(520).json({error: erro, message: "Erro na obtenção dos casamentos por ano"})
      })
  }else{
    next();
  }
});




// GET /contracts 
router.get('/contracts', function(req, res, next) {
  Contract.list()
    .then(contracts => {
      //res.render('index', { slist: atletes, d: data });
      res.status(200).json(contracts)
    })
    .catch(erro => {
      res.status(520).json({error: erro, message: "Erro na obtenção da lista de contratos"})
    })
});


// POST /contracts

router.post('/contracts', function(req, res, next) {
  Contract.addContract(req.body)
    .then(contract => {
      res.status(200).json(contract)
    })
    .catch(erro => {
      res.status(520).json({error: erro, message: "Erro na inserção do contrato"})
    })
});


// DELETE /contracts/:id

router.delete('/contracts/:idContract', function(req, res, next) {
  Contract.deleteContract(req.params.idContract)
    .then(contract => {
      res.status(200).json(contract)
    })
    .catch(erro => {
      res.status(520).json({error: erro, message: "Erro na remoção do contrato"})
    })
});




module.exports = router;
