const path = require('path');
const fs = require('fs-extra');

module.exports = async (on, config) => {
  const getConfigurationByFile = async (env) => {
    const pathToConfigFile = path.resolve('cypress/config', `${env}.json`);

    const envConfig = await fs.readJson(pathToConfigFile);

    console.log(`Cypress configuration: ${JSON.stringify(envConfig)}`);

    return envConfig;
  };

  const env = process.env.NODE_ENV || 'development';

  console.log(`Environment used for Cypress configuration: ${env}`);

  return await getConfigurationByFile(env);
};
