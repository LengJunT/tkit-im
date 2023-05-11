import { add } from 'lodash-es'
import Sdk from './sdk'

class ImCore {
  constructor() {
    this.data = 123
  }

  data: number

  getData = (): number => {
    console.log(add(1, 2), Sdk.getDate())
    return this.data + add(1,2)
  }
}

// export function getPageData (data: {
//   isT: boolean
// }) {
//   if (data.isT) return 1
//   return history.state
// }

export default ImCore
