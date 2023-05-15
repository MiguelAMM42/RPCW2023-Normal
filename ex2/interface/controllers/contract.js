var axios = require('axios')

module.exports.list = () => {
    return axios.get('http://localhost:15015/contracts')
        .then((resposta) =>{
            return resposta.data
        })
        .catch((erro) =>{
            return erro
        })
}

module.exports.getContract = id => {
    console.log(id)
    return axios.get('http://localhost:15015/contracts/' + id)
        .then((resposta) =>{
            return resposta.data
        })
        .catch((erro) =>{
            return erro
        })
}


module.exports.getContractsByInstitution = nipc => {
    return axios.get('http://localhost:15015/contracts?nipc=' + nipc)
        .then((resposta) =>{
            return resposta.data
        })
        .catch((erro) =>{
            return erro
        })
}



