var express = require('express');
var router = express.Router();

var Contract = require('../controllers/contract');


/* GET home page. */
router.get('/', function(req, res, next) {
  var data = new Date().toISOString().slice(0, 19).replace('T', ' ');
  Contract.list()
    .then(contracts => {
      res.render('index', { slist: contracts, d: data })
    })
    .catch(erro => {
      res.render('error', { error: erro })
    })
});

/*GET contract page.*/ 
router.get('/:idContract', function(req, res, next) {
  var data = new Date().toISOString().slice(0, 19).replace('T', ' ');
  Contract.getContract(req.params.idContract)
    .then(contract => {
      res.render('contract', { c: contract, d: data })
    })
    .catch(erro => {
      res.render('error', { error: erro })
    })
});



/*GET contracts by institution.*/
router.get('/inst/:NIPCInstituicao', function(req, res, next) {
  var data = new Date().toISOString().slice(0, 19).replace('T', ' ');
  Contract.getContractsByInstitution(req.params.NIPCInstituicao)
    .then(contracts => {
      res.render('inst', { nipcName: contracts[0].NomeInstituicao, slist: contracts, d: data })
    })
    .catch(erro => {
      res.render('error', { error: erro })
    })
});


module.exports = router;