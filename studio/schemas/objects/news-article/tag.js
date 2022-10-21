import React from 'react';

const LinkRender = ({ children }) => <span>{children} 🌍</span>;

export default {
  title: 'Tagg',
  name: 'oneTag',
  type: 'object',
  fields: [
    {
      title: 'Tagg',
      name: 'tag',
      type: 'string',
    //   validation: Rule =>
    //     Rule.uri({
    //       allowRelative: true,
    //       scheme: ['Marknadsnyheter', 'Förklarande artiklar', 'Aktieanalyser'],
    //     }),
    },
  ],
  blockEditor: {
    icon: () => '🌍',
    render: LinkRender,
  },
};
