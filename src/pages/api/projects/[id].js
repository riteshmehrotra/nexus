const dataProjects = require('../../../data/projectInfo');


export default function handlerById({ query: { id } }, res) {
    let filtered = dataProjects.find((item) => item.id === parseInt(id))
    filtered ?
        res.status(200).send(filtered)
        : res.status(400).send("Object not found");
}   