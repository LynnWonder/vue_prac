# vue_prac

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


## 项目结构
```
├── README.md
├── aliases.config.js
├── babel.config.js
├── firebase.json
├── jsconfig.json
├── package-lock.json
├── package.json
├── public
│   ├── favicon.ico
│   └── index.html
├── src
│   ├── App.vue
│   ├── assets
│   │   └── logo.png
│   ├── components
│   │   ├── Ellipsis.vue
│   │   ├── HelloWorld.vue
│   │   ├── Markdown.vue
│   │   ├── guide
│   │   │   ├── Guide.vue
│   │   │   ├── Layer.vue
│   │   │   ├── Runner.vue
│   │   │   ├── steps
│   │   │   │   ├── StepMain.vue
│   │   │   │   └── index.js
│   │   │   ├── sub-components
│   │   │   │   ├── hand-point-up.svg
│   │   │   │   ├── hand.vue
│   │   │   │   ├── helperTip.vue
│   │   │   │   ├── helperWindow.vue
│   │   │   │   └── step-hint.vue
│   │   │   └── utils
│   │   │       ├── mixin.js
│   │   │       ├── selector.js
│   │   │       └── utils.js
│   │   └── subComponents
│   │       └── Ellipsis.vue
│   ├── design
│   │   └── index.less
│   ├── main.js
│   ├── router
│   │   ├── index.js
│   │   └── routes.js
│   ├── services
│   │   ├── cloudFn.js
│   │   └── guide.js
│   ├── state
│   │   ├── modules
│   │   │   ├── cloudFn.js
│   │   │   ├── guide.js
│   │   │   └── index.js
│   │   └── store.js
│   └── utils
│       ├── dispatch-action-for-all-modules.js
│       ├── firebase.js
│       ├── marked.js
│       └── request.js
├── svgo-config.json
├── tree.text
├── vue.config.js
└── yarn.lock
```
### 注
1. 项目已托管在 firebase 站点： https://vue-prac-1b976.web.app/ 
2. 服务端项目放在 https://github.com/LynnWonder/fastify_prac