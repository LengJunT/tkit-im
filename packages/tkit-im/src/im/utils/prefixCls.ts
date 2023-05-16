import classNames from 'classnames'
import React from 'react'

let prefixCls = 'tkit-im'

/**
 * 修改className前缀
 * @param {string} str
 */
export const setPrefixCls = (str: string) => {
  prefixCls = str
}

export const prefixClassNames = (cls: string, ...other: Parameters<typeof classNames>): React.HTMLAttributes<HTMLDivElement>['className'] => {
  return classNames(`${prefixCls}-${cls}`, ...other)
}

export default prefixCls
