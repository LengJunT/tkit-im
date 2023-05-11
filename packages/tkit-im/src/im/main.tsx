import { usePrefixCls } from './utils/prefixCls'
import { Panel } from './compontents'
import './main.less'
import { useWindowStore } from './store'
import React from 'react'

const WindowBox = (props: {
  children: React.ReactNode
}) => {
  const openState = useWindowStore(state => state.openState)

  const rootCls = usePrefixCls('window', {
    'minimize': openState === 'minimize',
    'full-screen': openState === 'fullScreen'
  })

  if (openState === 'closed') return  null

  return <div className={rootCls}>
    {props.children}
  </div>
}

const ImWindow = () => {
  return <WindowBox>
    <Panel/>
  </WindowBox>
}

export default ImWindow
