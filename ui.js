module.exports = function (api) {
  api.describeConfig({
    id: 'jest-serializer-vue-tjw',
    name: 'Jest Serializer Vue TJW',
    description: 'Jest Vue snapshot serializer',
    link: 'https://github.com/tjw-lint/jest-serializer-vue-tjw',
    onRead: function () {
      return {
        tabs: [
          {
            id: 'general',
            label: 'jest-serializer-vue-tjw.general'
          },
          {
            id: 'experimental',
            label: 'jest-serializer-vue-tjw.experimental'
          }
        ]
      };
    },
    onWrite: function () {
    }
  });
};
