import React from 'react';
import { Label } from 'semantic-ui-react';

const ListLabels = ({ children }) => {
    
    if (children) {
        let interests = children.map((item) => <Label key={item}>{item}</Label>)
        return interests;
    }
    return <div></div>
}

export default ListLabels;