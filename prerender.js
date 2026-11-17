// Runs after `react-scripts build`: renders the app to HTML and writes it into
// build/index.html, so the page content is readable without JavaScript
// (link previews, LLM tools, crawlers). The browser then hydrates it as usual.
process.env.BABEL_ENV = 'production';
process.env.NODE_ENV = 'production';

const fs = require('fs');
const path = require('path');
const babel = require('@babel/core');

const srcDir = path.join(__dirname, 'src') + path.sep;
const loadJs = require.extensions['.js'];

// Compile JSX/ESM for files under src/, and skip stylesheet imports.
require.extensions['.js'] = (module, filename) => {
  if (!filename.startsWith(srcDir)) return loadJs(module, filename);
  const { code } = babel.transformFileSync(filename, {
    babelrc: false,
    configFile: false,
    presets: [[require.resolve('babel-preset-react-app'), { runtime: 'automatic' }]],
    // Node needs CommonJS; the preset keeps ES modules in production.
    plugins: [require.resolve('@babel/plugin-transform-modules-commonjs')],
  });
  module._compile(code, filename);
};
require.extensions['.css'] = () => {};

const React = require('react');
const { renderToString } = require('react-dom/server');
const App = require('./src/App').default;

const htmlPath = path.join(__dirname, 'build', 'index.html');
const emptyRoot = '<div id="root"></div>';
const html = fs.readFileSync(htmlPath, 'utf8');

if (!html.includes(emptyRoot)) {
  throw new Error(`prerender: ${emptyRoot} not found in build/index.html`);
}

const markup = renderToString(
  React.createElement(React.StrictMode, null, React.createElement(App))
);
fs.writeFileSync(htmlPath, html.replace(emptyRoot, `<div id="root">${markup}</div>`));
console.log(`prerender: wrote ${markup.length} characters of HTML into build/index.html`);
