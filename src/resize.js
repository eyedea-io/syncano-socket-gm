import gm from 'gm'
import fs from 'fs'
import Syncano from '@syncano/core'

export default (ctx) => {
  const {response} = new Syncano(ctx)

  const myGm = gm.subClass({appPath: '/env/node_modules/.bin/'})

  fs.writeFileSync('test.png', ctx.args.file)

  const startDate = new Date()
  myGm('test.png')
    .resize(50, 50)
    .noProfile()
    .write('resize.png', function (err) {
      if (!err) {
        console.log('done')
        console.log(new Date() - startDate)
        response(fs.readFileSync('resize.png'), 200, 'image/png')
      } else {
        console.log(err)
      }
    })
}
