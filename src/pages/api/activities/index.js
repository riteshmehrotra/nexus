import {data} from '../../../data/activitiesInfo';

export default function handler (req,res){
    res.status(200).send(data);
}