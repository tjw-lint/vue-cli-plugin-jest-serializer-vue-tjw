const fs = require('fs');
const execSync = require('child_process').execSync;

module.exports = (api, options) => {
  api.extendPackage({
    devDependencies: {
      'jest-serializer-vue-tjw': '^3.14.0'
    }
  });

  if (options.preset !== 'default') {
    const {
      verbose,
      removeServerRendered,
      removeIdTest,
      removeDataVId,
      removeDataQa,
      removeDataTestId,
      removeDataTestid,
      removeDataTest,
      removeComments,
      removeClassTest,
      experimentalFeatures
    } = options;

    api.extendPackage({
      vue: {
        pluginOptions: {
          jestSerializer: {
            verbose,
            removeServerRendered,
            removeIdTest,
            removeDataVId,
            removeDataQa,
            removeDataTestId,
            removeDataTestid,
            removeDataTest,
            removeComments,
            removeClassTest,
            stringifyObjects: experimentalFeatures.includes('stringifyObjects'),
            addInputValues: experimentalFeatures.includes('addInputValues')
          }
        }
      }
    });
  }

  const jestSerializerConfig = [
    '<rootDir>/node_modules/jest-serializer-vue-tjw'
  ];

  api.onCreateComplete(() => {
    let packageData = fs.readFileSync('./package.json');

    if (!api.hasPlugin('unit-jest')) {
      console.info('Jest plugin not found.');
      console.info('Installing Jest...');
      execSync('vue add jest');
    }

    if (packageData.includes('"jest-serializer-vue"')) {
      console.info('Uninstalling jest-serializer-vue...');
      execSync('npm uninstall jest-serializer-vue');
    }

    if (packageData.includes('"jest":')) {
      console.info('\nUpdating Jest config info in package.json...');

      api.extendPackage({
        jest: {
          snapshotSerializers: jestSerializerConfig
        }
      });
    }

    if (fs.existsSync('./jest.config.js')) {
      console.info('\nUpdating Jest config file...');

      const jestConfigPath = api.resolve('./jest.config.js');
      const jestConfig = require(jestConfigPath);

      jestConfig.snapshotSerializers = jestSerializerConfig;

      fs.writeFileSync(jestConfigPath, api.genJSConfig(jestConfig));
    }
  });

  // create the sample test file
  api.render('./template');
};
