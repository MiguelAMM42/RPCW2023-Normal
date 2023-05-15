const { MongoClient } = require('mongodb');

async function listDistinctFieldValues() {
  const uri = 'mongodb://127.0.0.1'; 
  const client = new MongoClient(uri);

  try {
    await client.connect();
    const database = client.db('scienceJobs');
    const collection = database.collection('contracts'); 

    const fieldName = 'AreaCNAEF'; 

    const distinctValues = await collection.distinct(fieldName);
    const sortedValues = distinctValues.sort();

    sortedValues.forEach(value => {
      console.log(value);
    });
  } catch (error) {
    console.error('Error:', error);
  } finally {
    await client.close();
  }
}

async function getContractDistributionByYear() {
    const uri = 'mongodb://127.0.0.1'; 
    const client = new MongoClient(uri);
  
    try {
      await client.connect();
      const database = client.db('scienceJobs'); 
      const collection = database.collection('contracts'); 
  
      const pipeline = [
        {
          $project: {
            year: { $year: { $dateFromString: { dateString: "$DataInicioContrato", format: "%d/%m/%Y" } } },
          },
        },
        {
          $group: {
            _id: "$year",
            count: { $sum: 1 },
          },
        },
        {
          $sort: { _id: 1 },
        },
      ];
  
      const cursor = collection.aggregate(pipeline);
  
      await cursor.forEach(result => {
        console.log(`Ano: ${result._id}, Contratos: ${result.count}`);
      });
    } catch (error) {
      console.error('Error:', error);
    } finally {
      await client.close();
    }
  }



  async function getContractDistributionByInstitution() {
    const uri = 'mongodb://127.0.0.1'; 
    const client = new MongoClient(uri);
  
    try {
      await client.connect();
      const database = client.db('scienceJobs'); 
      const collection = database.collection('contracts'); 
  
      const pipeline = [
        {
          $group: {
            _id: "$InstituicaoEnsino",
            count: { $sum: 1 },
          },
        },
        {
          $sort: { _id: 1 },
        },
      ];
  
      const cursor = collection.aggregate(pipeline);
  
      await cursor.forEach(result => {
        console.log(`Instituição: ${result._id}, Contratos: ${result.count}`);
      });
    } catch (error) {
      console.error('Error:', error);
    } finally {
      await client.close();
    }
  }
  

// listDistinctFieldValues();
//getContractDistributionByYear();
getContractDistributionByInstitution();