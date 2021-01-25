import {data} from '../../../data/forumInfo';

export default function handler (req,res){
    res.status(200).send(data);
}