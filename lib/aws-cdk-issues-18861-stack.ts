import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as lambdapython from '@aws-cdk/aws-lambda-python-alpha';

export class AwsCdkIssues18861Stack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const dbtDeployerLambda = new lambdapython.PythonFunction(this, 'DBT Deployer Lambda', {
      entry: 'dbt-deployer',
      runtime: lambda.Runtime.PYTHON_3_9,
      index: 'dbtDeployer.py',
      handler: 'on_event',
      timeout: cdk.Duration.minutes(15),    // I think this is enough - if not we can run it async
    });
  }
}
