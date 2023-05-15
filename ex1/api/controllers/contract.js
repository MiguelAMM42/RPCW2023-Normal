var axios = require('axios')
var Contract = require('../models/contract')


module.exports.listDistinctFieldValues = (fieldName) => {
    return Contract.distinct(fieldName)
        .then(values => {
            return values.sort();
        })
        .catch(err => {
            return err
        })
}


module.exports.addContract = c => {
    return Contract.create(c)
        .then(resposta => {
            return resposta
        })
        .catch(err => {
            return err
        })
}



module.exports.deleteContract = id => {
    return Contract.deleteOne({_id: id})
    .then(resposta => {
        //console.dir(resposta)
        return resposta
    })
    .catch(err => {
        return err
    })
}



// Lista de contratos
module.exports.list = () => {
    return Contract.find()
        .then(docs => {
            return docs
        })
        .catch(err => {
            return err
        }
)
}


// contrato por id
module.exports.getContract = id => {
    return Contract.findOne({_id: id}) // findOne dá um objeto, find dá um array
        .then(contract => {
            return contract
        })
        .catch(err => {
            return err
        }
)
}

module.exports.getContractsByYear = (ano) => {
    return Contract.find({DataInicioContrato: { $regex: ano }})
        .then(docs => {
            return docs
        })
        .catch(err => {
            return err
        }
)
}


module.exports.getContractsByInstitutionName = (inst) => {
    return Contract.find({NomeInstituicao: { $regex: inst }})
        .then(docs => {
            return docs
        })
        .catch(err => {
            return err
        }
)
}


module.exports.getContractsByInstitutionNIPC = (nipc) => {
    return Contract.find({NIPCInstituicao: nipc })
        .then(docs => {
            return docs
        })
        .catch(err => {
            return err
        }
)
}



/*
module.exports.getCasamentosPorNome = nome => {
    nomeSpaced = " " + nome + " ";
    return Casamento.find({ title: { $regex: nomeSpaced} })
    .then(casamentos => {
        return casamentos;
    })
    .catch(err => {
        return err;
    });
}

module.exports.getCasamentosPorAno = ano => {
    return Casamento.find({ date: { $regex: ano } })
    .then(casamentos => {
        return casamentos;
    })
    .catch(err => {
        return err;
    });
}


module.exports.getCasamentosByAno = () => {
    return Casamento.aggregate([
        {
          $group: {
            _id: "$date",
            casamentos: {
              $push: {
                title: "$title",
                href: "$href"
              }
            }
          }
        }
      ]).sort({ _id: 1 })
    .then(casamentos => {
        return casamentos;
    })
    .catch(err => {
        return err;
    });
}


module.exports.getNoivos = () => {
    console.log("getNoivos");
    return Casamento.find({},{title: 1})
    .then(casamentos => {
        let casamentosTreated = [];
        for (let i = 0; i < casamentos.length; i++) {
            let pessoas = casamentos[i].title.split(":")[1].split("c.c.");
            casamentosTreated.push({nome: pessoas[0].trim(), _id: casamentos[i]._id});
            casamentosTreated.push({nome: pessoas[1].trim(), _id: casamentos[i]._id});
        }
        casamentosTreated.sort((a,b) => {
            return a.nome.localeCompare(b.nome);
        });
        return casamentosTreated;
    }
    )
    .catch(err => {
        return err;
    }
    );
}

/*
module.exports.addAtlete = a => {
    return Atlete.create(a)
        .then(resposta => {
            return resposta
        })
        .catch(err => {
            return err
        })
}

module.exports.updateAtlete = (id,a) => {
    return Atlete.updateOne({_id: id}, a) // updateOne
        .then(resposta => {
            //console.dir(resposta)
            return resposta
        })
        .catch(err => {
            return err
        })
}

module.exports.deleteAtlete = id => {
    return Atlete.deleteOne({_id: id})
    .then(resposta => {
        //console.dir(resposta)
        return resposta
    })
    .catch(err => {
        return err
    })
}*/