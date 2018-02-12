import gm from 'gm'
import Syncano from '@syncano/core'

export default (ctx) => {
  const {response} = new Syncano(ctx)

  gm(ctx.file)
    .resize(240, 240)
    .noProfile()
    .write('/path/to/resize.png', function (err) {
      if (!err) {
        console.log('done')
      } else {
        console.log(err)
      }
    })
}
