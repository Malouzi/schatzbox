// svgo.config.js

module.exports = {
    plugins: [
      { name: 'removeDoctype', active: true },
      { name: 'removeComments', active: true },
      { name: 'convertPathData', active: true },
      { name: 'mergePaths', active: true },
      { name: 'collapseGroups', active: true },
    ],
  };
  