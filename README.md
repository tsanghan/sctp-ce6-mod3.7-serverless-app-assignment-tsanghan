# sctp-ce6-mod3.6-serverless-app

Repository containing Serverless Node application deployment using `Serverless Framwork` (`serverless`/`sls` command).

Install Serverless (sls)
```
npm install serverless -g
```

Init Serverless Project
```
serverless
```

NPM Init
```
npm init
```

Install `serverless-offine`
```
npm install serverless-offline --save-dev
```

Add following to end of `serverless.yml`
```
plugins:
 - serverless-offline
```

For help
```
serverless --help
```