# didact-ui
Simple ui test program for @dbarone/didact. @dbarone/didact is a micro React clone, with the original source at https://github.com/pomber/didact. @dbarone/didact is a TypeScript version of this original package. Didact-ui is a simple UI which illustrates how to use the package. Key features include:
- Very similar syntax to React
- Function components
- JSX syntax
- Hooks

## JSX

JSX is not uniquely used in React. The article in the bibliography below (https://dev.to/ameerthehacker/build-your-own-react-in-90-lines-of-javascript-1je2) explains how JSX can be converted into vanilla Javascript calls using the @babel/plugin-transform-react-jsx package. Babel must be configured, as by default it hooks into a special `createElement` function which is by default in the React namespace. @dbarone/didact has its own version of this function.

## Packages

To install all the packages for this project:

```
npm install @babel/core @babel/preset-env babel-loader html-webpack-plugin webpack webpack-cli webpack-dev-server @babel/plugin-transform-react-jsx jest  --save-dev
```

## Create Symlink to @dbarone/didact

@dbarone/didact can be installed via:

```
npm install @dbarone/didact --save-dev
```

However, if the source for @dbarone/didact is on the local PC, a symlink can be created to it as follows:
- Open up the @dbarone/didact project locally, and in the package folder, run `npm link`
- Open the didact-ui project locally, and in the package folder, run `npm link @dbarone/didact`

The benefit of this approach, is that any changes to the @dbarone/didact project will be instantly available from the client ui project.

## Dependencies
This project has a number of dependencies. The purpose for them is described below:
- **@babel/core:** The babel compiler core. Allows down-transpilation to cross compatible JavaScript versions
- **@babel/preset-env:** Smart preset allowing latest JavaScript to be used. Correct Polyfills automatically added in for target browser environment running on.
- **@babel/plugin-transform-react-jsx:** Plugin which transforms JSX into plain JavaScript. Note that the `createElement` handler must be configured to use @dbarone/didact.createElement instead of React.createElement in the .babelrc configuration file.
- **babel-loader:** Loader plugin for WebPack. Allows transiling of Javascript files by WebPack to be included in the WebPack build process.
- **html-webpack-plugin:** Allows for simple html file to be created + published to serve the bundles built with WebPack.
- **jest:** JavaScript testing framework
- **webpack:** Module bundler
- **webpack-cli:** CLI for WebPack
- **webpack-dev-server:** Development web server for serving WebPack apps. Supports HMR (hot module replacement)

## Bibliography
- **Default setup with WebPack 5 and Bebel:** https://www.robinwieruch.de/webpack-babel-setup-tutorial
- **Another micro React clone with JSX:** https://dev.to/ameerthehacker/build-your-own-react-in-90-lines-of-javascript-1je2
- **In-depth WebPack 5 guide:** https://www.valentinog.com/blog/webpack/