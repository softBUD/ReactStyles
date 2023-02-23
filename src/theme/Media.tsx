import {CSSProp, css} from 'styled-components'

type DeviceSizeProps = {
  [key: string]: number
}

/**
 * mobile, pc 등이 오브젝트 키 값으로 들어갈 경우
 * 미디어 쿼리 생성시 헷갈릴 수 있어서 숫자로 넣었습니다.
 */
const DeviceSize: DeviceSizeProps = {
  min_401: 401, // 401~600
  min_601: 601, // 601~1000~
  min_1001: 1001, // 1001~max
  min_1301: 1301,
}

const Media = Object.keys(DeviceSize).reduce((acc, label) => {
  acc[label] = (literals: TemplateStringsArray, ...placeholders: any[]) =>
    css`
      @media only screen and (min-width: ${DeviceSize[label]}px) {
        ${css(literals, ...placeholders)};
      }
    `
  return acc
}, {} as Record<keyof typeof DeviceSize, (l: TemplateStringsArray, ...p: any[]) => CSSProp>)

export default Media
