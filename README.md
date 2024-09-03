# sctp-ce6-mod3.7-serverless-app-assigment-tsanghan

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

There are 3 functions in the `serverless.yml` definition file.
1) function `hello` has `httpApi`, `s3:ObjectCreated:*` & `s3:ObjectRemoved:*` events.
2) function `hello2` has `httpApi` and `sqs` events.
3) function `hello3` has `httpApi` and `sns` events.