const data = require('../../../data/profiles.json');


export default function handlerById({ query: { empID } }, res) {
    let filtered = data.find((item) => item.empID === empID)
    filtered ?
        res.status(200).send(filtered)
        : res.status(400).send("Object not found");
}