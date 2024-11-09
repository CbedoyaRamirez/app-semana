// src/components/TagsFilter.js
import React from 'react';

const TagsFilter = ({ tags, onFilter }) => {
  return (
    <div>
      <h3>Filter by Tags</h3>
      {tags.map((tag, index) => (
        <button key={index} onClick={() => onFilter(tag)}>
          {tag}
        </button>
      ))}
    </div>
  );
};

export default TagsFilter;
