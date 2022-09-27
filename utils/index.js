/**
 *
 * @param {*} key 关键字
 * @param {*} code 代码片段
 * @param {*} desc 描述
 * @returns
 */
export const transform = (key, code, desc = '') => ({
  prefix: key,
  body: code,
  description: desc || key
})

export const transformCode = ([str]) => {
  return str
    .replaceAll(/%.*?%/g, item => {
      const rest = item.split('%')[1]
      return `\${${rest}}`
    })
    .split('\n')
    .slice(1)
}
