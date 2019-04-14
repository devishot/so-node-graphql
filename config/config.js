import {merge} from 'lodash';

class Config {
  constructor() {
    const config = require('./config.json'),
          defaultConfig = config.development,
          environment = process.env.NODE_ENV || 'development',
          environmentConfig = config[environment],
          finalConfig = merge(defaultConfig, environmentConfig);

    this.cfg = finalConfig;
  }

  read() {
    return this.cfg;
  }
}

const singleton = new Config();

export default singleton;