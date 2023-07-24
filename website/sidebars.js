/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docs: [
    'introduction',
    'quickstart',
    {
      type: 'category',
      label: 'Semantic Search',
      collapsed: false,
      link: {
        type: 'doc',
        id: 'semantic_search/semantic_search',
      },
      items: [
        'semantic_search/getting_started',
        'semantic_search/semantic_search_usage',
        'semantic_search/embedding_generators',
        'semantic_search/embedding_stores',
      ],
    },
    'community',
  ],
};

module.exports = sidebars;
