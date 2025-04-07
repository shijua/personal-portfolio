import React from 'react';

import Section from '../section';
import SummaryItem from '../summary-item';
import formatDescription from '../../utils/format';

const SectionExperience = ({ experience }) => {
  if (!experience.length) return null;

  return (
    <Section title="Experience">
      {experience.map((item) => (
        <SummaryItem
          key={item.name}
          name={item.name}
          description={formatDescription(item.description)}
          link={item.link}
        />
      ))}
    </Section>
  );
};

export default SectionExperience;
