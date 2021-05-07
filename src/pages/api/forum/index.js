const data = require('../../../data/forumInfo');

export default function handler (req,res){
    res.status(200).send(data);
}