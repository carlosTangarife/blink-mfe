# Microfrontends
## Nx + Angular + Monorepo + Module Federations

[![N|Solid](https://blinkfitness.atlassian.net/s/azc3hx/b/8/cb2080e9b57127c789a674277a9b7d61/_/jira-logo-scaled.png)]()

## Features
- Monorepo
- Micro frontends
- Ui library
## Nx
https://nrwl.io/
Optimize and modernize your development practices

## Environment
    Angular CLI: 13.3.5
    Node: 14.19.2
    Package Manager: npm 6.14.17
    OS: darwin x64

    @angular-devkit/architect    0.1303.5 (cli-only)
    @angular-devkit/core         13.3.5 (cli-only)
    @angular-devkit/schematics   13.3.5 (cli-only)
    @schematics/angular          13.3.5 (cli-only)
## Installation
```
We create an empty workspace
    npx create-nx-workspace blink-mfe --preset=empty

Install angular as a framework
    npm install --save-dev @nrwl/angular
      
Next, we generate the container application and the remote applications.
    nx g @nrwl/angular:host host --remotes=sign-in,sign-up

    After installing the apps, you will see the following folder structure
    >> apps>host
    >> apps>sign-in
    >> apps>sign-up

Now we can run the host container with static applications
    nx service host
    note that changes can only be seen for host applications only
    
whether you want to work together with hot and remote applications, we can run the following command
    nx serve host —devRemotes=sign-in,sign-up
```
## Build
```
    nx build hots
    nx build sign-in
    nx build sign-up
```

## Config webpack.prod.config
```
    const { withModuleFederation } = require('@nrwl/angular/module-federation');
    const config = require('./module-federation.config');
    module.exports = withModuleFederation({
      ...config,
      /*
       * Remote overrides for production.
       * Each entry is a pair of an unique name and the URL where it is deployed.
       *
       */
    
      remotes: [
        ['sign-in', 'http://127.0.0.1:8081'],
        ['sign-up', 'http://127.0.0.1:8082'],
      ]
    });
```
## Run Production
```
    http-server -p 8080 --cors -c-1 ./dist/apps/host
    http-server -p 8081 --cors -c-1 ./dist/apps/sign-in
    http-server -p 8082 --cors -c-1 ./dist/apps/sign-up
```

npm install -D @nrwl/nest

nx g @nrwl/nest:app api-buttons

nx dep-graph

nx affected:graph
