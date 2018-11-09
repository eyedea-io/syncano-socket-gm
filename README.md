# Syncano Socket for Graphics Magick library

[![Syncano Socket](https://img.shields.io/badge/syncano-socket-blue.svg)](https://syncano.io)
[![CircleCI branch](https://img.shields.io/circleci/project/github/eyedea-io/syncano-socket-gm/master.svg)](https://circleci.com/gh/eyedea-io/syncano-socket-gm/tree/master)
[![Codecov branch](https://img.shields.io/codecov/c/github/eyedea-io/syncano-socket-gm/master.svg)](https://codecov.io/github/eyedea-io/syncano-socket-gm/)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![npm](https://img.shields.io/npm/dw/@eyedea-sockets/gm.svg)](https://www.npmjs.com/package/@eyedea-sockets/gm)
![license](https://img.shields.io/github/license/eyedea-io/syncano-socket-gm.svg)

Main Socket features:

* **resize** — Resize image by width and height keeping original aspect ratio
* **sepia** — Apply sepia filter to an image
* **monochrome** — Apply monochromatic filter to an image

## Getting Started

Install package in your project:

```sh
cd my_project
npm install @syncano/cli --save-dev
npm install @eyedea-sockets/graphics-magic --save
npx s deploy
```

Use it:

```js
import Syncano from '@syncano/client'

const s = new Syncano('instance_name')
const image  = require('./img')
const params = {
  width: 200,
  height: 300
}
const resizeImage = await s.post('graphics-magic/resize',image, params)

```

## Endpoints

### graphics-magic/resize

#### Input:

| Parameter  | Type   | Description | Example                                 |
|------------|--------|-------------|-----------------------------------------|
| image      | file   | ---         | test.png                                |
| width      | number | pixels      | 200                                     |
| height     | number | pixels      | 500                                     |

### graphics-magic/resize

| Parameter  | Type   | Description | Example                                 |
|------------|--------|-------------|-----------------------------------------|
| image      | file   | ---         | test.png                                |

### graphics-magic/resize

| Parameter  | Type   | Description | Example                                 |
|------------|--------|-------------|-----------------------------------------|
| image      | file   | ---         | test.png                                |

