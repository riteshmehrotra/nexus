const data = require('../../../data/profiles.json');


export default function handlerById({ query: { empID } }, res) {
    let filtered = data.find((item) => item.empID === empID)
    if (!filtered)
        res.status(404).send("Object not found");
    let matchingProfiles = getMatchingProfiles(empID,filtered.interests);
    res.send(matchingProfiles);
}

function getMatchingProfiles(empID, interests) {
    return data.filter((item) =>
        item.interests.find((interestToMatch) =>
            interests.includes(interestToMatch)
        ) && item.empID !== empID
    )
}