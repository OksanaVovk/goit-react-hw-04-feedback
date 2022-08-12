import React from 'react';
const Section = ({ title, children }) => (
  <>
    <h1>{title}</h1>
    {children}
  </>
);
export default Section;
