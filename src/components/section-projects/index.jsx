import React from 'react';

import Section from '../section';
import SummaryItem from '../summary-item';
import formatDescription from '../../utils/format';

const SectionProjects = ({ projects }) => {
  if (!projects.length) return null;

  return (
    <Section title="Projects">
      {projects.map((project) => (
        <SummaryItem
          key={project.name}
          name={project.name}
          description={formatDescription(project.description)}
          link={project.link}
        />
      ))}
    </Section>
  );
};

export default SectionProjects;