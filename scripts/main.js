require.config({
  deps: [],
  waitSeconds: 30,
  shim: {
    backbone: {
      deps: ['underscore', 'jquery'],
      exports: 'Backbone'
    },
    react: {
      exports: 'React'
    },
    bootstrap: {
      deps: ['jquery'],
      exports: 'jquery'
    },
    underscore: {
      exports: '_'
    },
    JSXTransformer: {
        exports: "JSXTransformer"
    }
  },
  paths: {
    'jquery': 'https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery',
    'underscore': 'https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.8.3/underscore-min',
    'backbone': 'https://cdnjs.cloudflare.com/ajax/libs/backbone.js/1.2.3/backbone-min',
    'backbone.wreqr': 'https://cdnjs.cloudflare.com/ajax/libs/backbone.wreqr/1.3.5/backbone.wreqr.min',
    'backbone.paginator': 'https://cdnjs.cloudflare.com/ajax/libs/backbone.paginator/0.8/backbone.paginator.min',
    'text': 'https://cdnjs.cloudflare.com/ajax/libs/require-text/2.0.12/text',
    'react':'https://fb.me/react-0.14.6',
    'react-dom': 'https://fb.me/react-dom-0.14.6',
    'JSXTransformer': '../libs/jsx/JSXTransformer',
    'jsx': "../libs/jsx/jsx"
  },
  jsx: {
    fileExtension: '.jsx',
  }
});

require([
  "jquery",
  "backbone",
  "react",
  "JSXTransformer",
  "router/Router",
  "react-dom"
  ], function($, Backbone, React, JSXTransform, Router, ReactDom) {
      window.React = React;
      window.ReactDOM = ReactDom;
      window.App = {};

      App.Header = document.getElementById('header');
      App.Container = document.getElementById('container');
      App.Footer = document.getElementById('footer');

      App.appRouter = new Router();
      Backbone.history.start();
});