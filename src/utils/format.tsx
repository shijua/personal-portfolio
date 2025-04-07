import React from 'react';

const formatDescription = (desc) => {
    const formattedDesc = desc.replace(/(•)/g, '\n$1').trim();
    return (
      <div style={{ whiteSpace: 'pre-line' }}>
        {formattedDesc}
      </div>
    );
  };

export default formatDescription;