import {data} from '../../../data/projectInfo';


export default function handler(req,res){
    res.status(200).json(data);
}
