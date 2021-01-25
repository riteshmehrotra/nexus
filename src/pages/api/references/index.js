import {data} from '../../../data/referencesInfo';


export default function handler(req,res){
    res.status(200).json(data);
}
