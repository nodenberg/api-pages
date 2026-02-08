import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docsSidebar: [
    'intro',
    'authentication',
    'endpoints',
    'usage-notes',
    {
      type: 'category',
      label: 'Reference',
      items: ['reference/API'],
    },
  ],
};

export default sidebars;
