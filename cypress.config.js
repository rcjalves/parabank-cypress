const { defineConfig } = require('cypress');
const fs = require('fs');
const yaml = require('js-yaml');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://parabank.parasoft.com/parabank',
    supportFile: 'cypress/support/commands.js',
    setupNodeEvents(on, config) {
      on('task', {
        updateYaml(data) {
          const filePath = 'cypress/fixtures/user-data.yaml';
          try {
            const doc = yaml.load(fs.readFileSync(filePath, 'utf8'));
            Object.assign(doc, data);
            fs.writeFileSync(filePath, yaml.dump(doc));
            console.log('[YAML ATUALIZADO]:', data);
            return null;
          } catch (err) {
            console.error('Erro ao atualizar YAML:', err);
            throw err;
          }
        },
      });
    },
  },
});
