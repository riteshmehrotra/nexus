const data = require('../../../data/rewards.json');

export default function handler (req,res){
    res.status(200).send(data);
}