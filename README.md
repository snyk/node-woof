## node-woof

An intentionally vulnerable application, to test
[Snyk's Runtime Monitoring](https://snyk.io/docs/runtime-protection/) offering.

[The docs](https://snyk.io/docs/runtime-protection/)
there explain what the tool achieves. You might want to read them before
continuing, to get a feel for what this demo is going to show. Once you've run the
demo, you definitely will want to read them to learn how to integrate the agent
into your application!

The [runtime monitoring tool is open source](https://github.com/snyk/nodejs-runtime-agent).
The documentation on how to get started with contributing to the agent is hosted
on that project.


### How?

Everything should drive from `npm`.

You just need `node` (`8` or above) and `npm`, installed and working.


#### First, check you can build:

```text
$ npm ci
npm WARN prepare removing existing node_modules/ before installation
added 132 packages in 1.084s
```

```text
$ npm run startWithAgent

You must specify a valid project ID.

Please run `snyk monitor`, collect the id from the results' settings page,
then re-run `start` using that ID.

For example (you *must* change the id!):

  npm run startWithAgent 4567901-2345-6789-0123-45678912345

...
```


#### Then, run [snyk cli](https://snyk.io/docs/using-snyk/):

```text
$ snyk monitor

Monitoring node-woof...

Explore this snapshot at https://app.snyk.io/org/yall/project/4567901-2345-6789-0123-45679012345
```


#### Now, you can start the app with the agent:

```text
$ npm run startWithAgent 4567901-2345-6789-0123-45678912345
...

Agent loaded successfully, your application is monitored.


,------------------------------------------------------------,
|                                                            |
|      The demo application has started successfully.        |
|                                                            |
|   You can visit the application, and trigger an exploit,   |
|                 by visiting this url:                      |
|                                                            |
|            http://localhost:3000/hello.txt                 |
|                                                            |
|        You can stop the application with ctrl+c.           |
|                                                            |
`------------------------------------------------------------'


...
```

This will `require('@snyk/nodejs-runtime-agent')` with your `projectId`,
  and then start the application. 


#### Exploit!

You can visit [the application](http://localhost:3000/hello.txt). Simply visiting
the application URL is sufficient evidence of an exploit!

If your application is protected, then you should
  shortly see the warning on [your Snyk dashboard](https://app.snyk.io/).
