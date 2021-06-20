const data = require('../../../data/communities.json');

export default function handler (req,res){
    res.status(200).send(data);
}