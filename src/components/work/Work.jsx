import React from 'react';
import './work.css';
import { data } from '../../data/data.js';
import Project from '../project/Project';

const WorkSection = () => {
    return (
        <section className="work-section">
            <Project name={data.project[0].name} role={data.project[0].role} image={data.project[0].image} />
            <Project name={data.project[1].name} role={data.project[1].role} image={data.project[1].image} />
            <Project name={data.project[2].name} role={data.project[2].role} image={data.project[2].image} />
        </section >
    );
}


export default WorkSection;