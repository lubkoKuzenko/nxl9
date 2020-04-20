module.exports = {
  name: 'speed-deviations',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/speed-deviations',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
