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

## Initialize Storybook (Only for initial setup)

npx sb init

### Generate stories for components in a library

npx ng generate @nrwl/angular:stories --name={library-project-name} --dry-run

### Run storybook within an app or library

nx storybook {app-project-name | library-project-name}

## Run main storybook site

npm run storybook
