import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { DefaultProjectCard } from '../stories/ProjectCard.stories';

const original = console.error;

beforeEach(()=>{
    console.error = jest.fn()
});

afterEach(()=>{
    console.error=original;
})

xit('renders the Project in the default state', () => {
    console.error = jest.fn();
    render(<DefaultProjectCard {...DefaultProjectCard.args}/>);
    expect(console.error).not.toHaveBeenCalled();
});