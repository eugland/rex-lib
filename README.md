# Reusable Enterprise UI/UX

## Always add scripts as dry-run to avoid accidently running and creating unnecessary changes. Once a developer is comfortable, they can remove --dry-run option to execute.

## Documentation
[Nx Documentation](https://nx.dev/angular)

# To create an NX Workspace (Only for initial setup)
npm install -g nx

npx create-nx-workspace {workspace-name} --preset=angular
-> Application Name: {main-app-project-name}
-> Select SASS (SCSS)
-> Use Nx Cloud? No

## Generate an angular app
npx nx g @nrwl/angular:app {app-project-name} --routing=true --style=scss --dry-run

## Generate an angular library
### All components and business logics are to be implemented in libraries
npx nx g @nrwl/angular:lib {library-project-name} --dry-run

## For creating an angular buildable and publishable libraries
npx nx g @nrwl/angular:lib {library-project-name} --publishable --buildable --importPath="@rex-lib/{library-project-name}" --dry-run

## Generate storybook configuration and cypress e2e tests for a library
npx ng generate @nrwl/angular:storybook-configuration --name={library-project-name} --no-interactive --dry-run


## ---------
## Storybook

## Initialize Storybook (Only for initial setup)
npx sb init

### Generate stories for components in a library
npx ng generate @nrwl/angular:stories --name={library-project-name} --dry-run

### Run storybook within an app or library
nx storybook {app-project-name | library-project-name}

### Run main storybook site
npm run storybook


## ----------------------------------
## Jest Unit Test && e2e (End-to-End)

### Run jest unit test
nx test {app-project-name | library-project-name} --verbose

### Execute e2e test (Screenshot and video of failed tests can be found inside dist/cypress folder)
nx run {app-project-name | library-project-name}-e2e:e2e

### Run e2e test for development purpose
nx run {app-project-name | library-project-name}-e2e:e2e --watch


## -------------
## Run dep-graph

### To view overall dep-graph
nx dep-graph

### To view affected:dep-graph
nx affected:dep-graph

## NPM Audit to make sure there are no vulnerabilities
npm audit --production
