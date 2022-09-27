import { writeFile } from 'fsany'

import jsCode from './snippets/javascript.js'
import vueCode from './snippets/vue.js'

const build = async (fileName, code) =>
  writeFile(`./build/${fileName}.json`, JSON.stringify(code))

await build('js', jsCode)
await build('vue', vueCode)
