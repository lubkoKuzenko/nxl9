module.exports = {
  name: 'lime-routes',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/lime-routes',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
