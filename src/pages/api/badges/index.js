import {data} from '../../../data/badgesInfo'


export default function handler(req, res) {
    res.status(200).send(data);
}