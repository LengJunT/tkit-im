import React from 'react'
import {
  CloseOutlined, ExpandAltOutlined,
  ExpandOutlined,
  MinusOutlined
} from '@ant-design/icons'
import { prefixClassNames } from '../../utils/prefixCls'
import classNames from 'classnames'
import './index.less'
import { useWindowStore } from '../../store'
const WindowSwitch = () => {
  const openState = useWindowStore((state) => state.openState)
  const setOpenState = useWindowStore(state => state.setOpenState)
  const rootCls = prefixClassNames('window-switch', 'flex justify-between w-16 p-1.5')
  const btnCls = prefixClassNames('window-switch-btn', 'flex text-center justify-center items-center w-3 h-3 rounded-full')

  const onClose = () => {
    setOpenState('closed')
  }
  const onMin = () => {
    setOpenState('minimize')
  }
  const onWindow = () => {
    setOpenState('window')
  }
  const onFullScreen = () => {
    setOpenState('fullScreen')
  }

  const isFull = openState === 'fullScreen'
  return <div className={rootCls}>
    <div onClick={onClose} className={classNames(btnCls, 'close')}>
      <CloseOutlined />
    </div>
    <div onClick={onMin} className={classNames(btnCls, 'min')}>
      <MinusOutlined />
    </div>
    <div onClick={isFull ? onWindow : onFullScreen} className={classNames(btnCls, 'full')}>
      { !isFull ? <ExpandAltOutlined /> : <ExpandOutlined /> }
    </div>
  </div>
}

export default WindowSwitch
