function isCustom (answers) {
  return answers.preset === 'configure';
}

module.exports = [
  {
    name: 'preset',
    message: 'Choose a preset:',
    type: 'list',
    choices: [
      { name: 'Use defaults (STRONGLY recommended)', value: 'default' },
      { name: 'Manual configuration (advanced)', value: 'configure' }
    ],
    default: 'default'
  },
  {
    name: 'verbose',
    type: 'confirm',
    message: 'Show helpful error messages?',
    default: true,
    when: isCustom
  },
  {
    name: 'removeDataTest',
    type: 'confirm',
    message: 'data-test Attributes?',
    default: true,
    prefix: 'Remove the following from your snapshots:',
    when: isCustom
  },
  {
    name: 'removeDataTestid',
    type: 'confirm',
    message: 'data-testid Attributes?',
    default: true,
    prefix: 'Remove the following from your snapshots:',
    when: isCustom
  },
  {
    name: 'removeDataTestId',
    type: 'confirm',
    message: 'data-test-id Attributes?',
    default: true,
    prefix: 'Remove the following from your snapshots:',
    when: isCustom
  },
  {
    name: 'removeDataQa',
    type: 'confirm',
    message: 'data-qa Attributes?',
    default: false,
    prefix: 'Remove the following from your snapshots:',
    when: isCustom
  },
  {
    name: 'removeDataVId',
    type: 'confirm',
    message: 'data-v-ID\'s from scoped styles?',
    default: true,
    prefix: 'Remove the following from your snapshots:',
    when: isCustom
  },
  {
    name: 'removeServerRendered',
    type: 'confirm',
    message: 'Server Rendered attributes?',
    default: true,
    prefix: 'Remove the following from your snapshots:',
    when: isCustom
  },
  {
    name: 'removeClassTest',
    type: 'confirm',
    message: 'Classes that start with test?',
    default: false,
    prefix: 'Remove the following from your snapshots:',
    when: isCustom
  },
  {
    name: 'removeIdTest',
    type: 'confirm',
    message: 'ID attributes that start with test?',
    default: false,
    prefix: 'Remove the following from your snapshots:',
    when: isCustom
  },
  {
    name: 'removeComments',
    type: 'confirm',
    message: 'HTML comments?',
    default: false,
    prefix: 'Remove the following from your snapshots:',
    when: isCustom
  },
  {
    name: 'experimentalFeatures',
    type: 'checkbox',
    message: 'Select experimental snapshot features (not recommended):',
    choices: [
      { name: 'Add input values?', value: 'addInputValues' },
      { name: 'Stringify objects?', value: 'stringifyObjects' }
    ],
    when: isCustom
  }
];
