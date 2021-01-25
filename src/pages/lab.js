import React from 'react'
import ProjectCard from './components/ProjectCard';
import { Card } from 'semantic-ui-react';
import useSWR from 'swr'


const fetcher = (url) => fetch(url).then((res) => res.json());
export default function Projects() {
    const {data, error} = useSWR('/api/projects', fetcher)
    if (error) return <div>Failed to load</div>
    if(!data) return <div>Loading...</div>
    let projectCardMap = data.map((item) => <ProjectCard key={item.title} {...item}></ProjectCard>)
    return <Card.Group>{projectCardMap}</Card.Group>
}

// export default Projects;