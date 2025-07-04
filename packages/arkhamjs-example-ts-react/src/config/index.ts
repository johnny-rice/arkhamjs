import {get} from '@nlabs/utils/objects/get';
import {merge} from '@nlabs/utils/objects/merge';

import {EnvConfig} from './config.types';

const {NODE_ENV} = process.env;

export class Config {
  static values: EnvConfig = {
    default: {
      appId: 'arkhamjs-skeleton',
      env: NODE_ENV
    },
    development: {
      appName: 'Arkham Skeleton Development'
    },
    preprod: {
      appName: 'Arkham Skeleton Pre-Production'
    },
    production: {
      appName: 'Arkham Skeleton Production'
    },
    test: {
      appName: 'Arkham Skeleton Test'
    }
  };

  static get(path: string | string[]): any {
    const environment: string = NODE_ENV || 'development';
    const configValues: object = merge(this.values.default, this.values[environment], {environment});
    return get(configValues, path);
  }
}
