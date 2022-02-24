Test case for https://github.com/aws/aws-cdk/issues/18861

1. git clone
2. cdk deploy

* Expected behavior: deploy works
* Actual: it creates an `asset-output` sub-folder in `dbt-deployer` and errors out with:

```
...
Installing collected packages: pytz, certifi, asn1crypto, urllib3, six, setuptools, PyJWT, pycryptodomex, pycparser, oscrypto, idna, charset-normalizer, requests, cffi, cryptography, pyOpenSSL, snowflake-connector-python                                                                            zer, requests, cff
Successfully installed PyJWT-2.3.0 asn1crypto-1.4.0 certifi-2021.10.8 cffi-1.15.0 charset-normalizer-2.0.11 cryptography-36.0.1 idna-3.3 oscrypto-1.2.1 pyOpenSSL-21.0.0 pycparser-2.21 pycryptodomex-3.14.0 pytz-2021.3 requests-2.27.1 setuptools-60.9.3 six-1.16.0 snowflake-connector-python-2.7.4 u2.1 pyOpenSSL-21.0rllib3-1.26.8
cp: cannot copy a directory, ‘/asset-input/’, into itself, ‘asset-output’

C:\src\pscc\codecommit\aws-cdk-issues-18861\node_modules\aws-cdk-lib\core\lib\asset-staging.ts:477
      throw new Error(`Failed to bundle asset ${this.node.path}, bundle output is located at ${bundleErrorDir}: ${err}`);
            ^
Error: Failed to bundle asset AwsCdkIssues18861Stack/DBT Deployer Lambda/Code/Stage, bundle output is located at C:\src\pscc\codecommit\aws-cdk-issues-18861\cdk.out\aes-18861\cdk.out\asset.7b7eff00291eeee928017a0b0d278a3b24022d7c06078e92ffaabdaeaf2441f2-error: Error: docker exited with status 1
    at AssetStaging.bundle (C:\src\pscc\codecommit\aws-cdk-issues-18861\node_modules\aws-cdk-lib\core\lib\asset-staging.ts:477:13)
    at AssetStaging.stageByBundling (C:\src\pscc\codecommit\aws-cdk-issues-18861\node_modules\aws-cdk-lib\core\lib\asset-staging.ts:325:10)
    at stageThisAsset (C:\src\pscc\codecommit\aws-cdk-issues-18861\node_modules\aws-cdk-lib\core\lib\asset-staging.ts:191:35)
    at Cache.obtain (C:\src\pscc\codecommit\aws-cdk-issues-18861\node_modules\aws-cdk-lib\core\lib\private\cache.ts:24:13)
    at new AssetStaging (C:\src\pscc\codecommit\aws-cdk-issues-18861\node_modules\aws-cdk-lib\core\lib\asset-staging.ts:216:44)
    at new Asset (C:\src\pscc\codecommit\aws-cdk-issues-18861\node_modules\aws-cdk-lib\aws-s3-assets\lib\asset.ts:131:21)
    at AssetCode.bind (C:\src\pscc\codecommit\aws-cdk-issues-18861\node_modules\aws-cdk-lib\aws-lambda\lib\code.ts:282:20)
    at new Function (C:\src\pscc\codecommit\aws-cdk-issues-18861\node_modules\aws-cdk-lib\aws-lambda\lib\function.ts:669:29)
    at new PythonFunction (C:\src\pscc\codecommit\aws-cdk-issues-18861\node_modules\@aws-cdk\aws-lambda-python-alpha\lib\function.ts:72:5)
    at new AwsCdkIssues18861Stack (C:\src\pscc\codecommit\aws-cdk-issues-18861\lib\aws-cdk-issues-18861-stack.ts:10:31)
Subprocess exited with error 1
```