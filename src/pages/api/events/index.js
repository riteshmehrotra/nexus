import {data} from '../../../data/eventInfo';

export default function handler (req,res){
    res.status(200).send(data);
}