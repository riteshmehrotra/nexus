const data = require('../../../data/activitiesInfo.json');

export default function handler (req,res){
    res.status(200).send(data);
}