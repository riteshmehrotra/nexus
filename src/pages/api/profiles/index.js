const dataProfie = require('../../../data/profiles.json');

export default function handler (req,res){
    res.status(200).send(dataProfie);
}