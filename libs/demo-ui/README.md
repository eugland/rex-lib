# REX Demo UI

This library was generated with [Nx](https://nx.dev).

## Running unit tests

Run `nx test demo-ui` to execute the unit tests.

## To create a new component
nx g component {component_name} --project=demo-ui --export --dry-run


## ---------
## Storybook

### Generate storybook configuration and cypress e2e tests for the library
npx ng generate @nrwl/angular:storybook-configuration --name=demo-ui --no-interactive --dry-run

### Generate stories for components in the library
npx ng generate @nrwl/angular:stories --name=demo-ui --dry-run

### Run storybook within an app or library
nx storybook demo-ui


## ----------------------
## Jest Unit Test and e2e

### Run jest unit test
nx test demo-ui --verbose

### Execute e2e test (Screenshot and video of failed tests can be found inside dist/cypress folder)
nx run demo-ui-e2e:e2e

### Run e2e test for development purpose
nx run demo-ui-e2e:e2e --watch
