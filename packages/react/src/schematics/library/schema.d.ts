import { UnitTestRunner } from '../../utils/test-runners';

export interface Schema {
  name: string;
  directory?: string;
  style?: string;
  skipTsConfig: boolean;
  skipFormat: boolean;
  tags?: string;
  simpleModuleName: boolean;
  pascalCaseFiles?: boolean;
  unitTestRunner: UnitTestRunner;
}
