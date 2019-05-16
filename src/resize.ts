import * as S from '@eyedea/syncano'
import * as fs from 'fs'
import gm from 'gm'

interface Args {
  file: File
  width: number
  heigh: number
}

class Endpoint extends S.Endpoint<Args> {
  async run(
    {response}: S.Core,
    {args}: S.Context<Args>
  ) {

  const myGm = gm.subClass({appPath: '/env/node_modules/.bin/'})
  fs.writeFileSync('test.png', args.file)

  myGm('test.png')
    .resize(args.width, args.heigh)
    .noProfile()
    .write('resize.png', function (err: Error) {
      if (!err) {
        response(fs.readFileSync('resize.png'), 200, 'image/png')
      } else {
        response.json({message: err.message}, 400)
      }
    })
}}

export default ctx => new Endpoint(ctx)