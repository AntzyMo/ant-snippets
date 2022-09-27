import { transform, transformCode } from '../utils/index.js'
import { computed, reactive, ref, watch } from './vue.js'
const fun = transformCode`
const %1:fun% = (%2%) => {
  %3% 
}`

const forin = transformCode`
for (const key in %1:object%) {
  %2%
}`

const arrowfun = transformCode`
(%1%) => {
  %2%
}`

export default {
  箭头函数: transform('fun', fun),
  Antforin: transform('forin', forin),
  arrowfun: transform('arrfun', arrowfun),
  Antref: transform('ref', ref),
  Antreactive: transform('reactive', reactive),
  Antwatch: transform('watch', watch),
  Antcomputed: transform('computed', computed)
}
