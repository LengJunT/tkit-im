import { prefixClassNames } from './utils/prefixCls'
import {Contacts, Panel} from './compontents'
import './main.less'
import { useWindowStore } from './store'
import React from 'react'

const WindowBox = (props: {
  children: React.ReactNode
}) => {
  const openState = useWindowStore(state => state.openState)

  const rootCls = prefixClassNames('window', {
    'minimize': openState === 'minimize',
    'full-screen': openState === 'fullScreen'
  })

  if (openState === 'closed') return  null

  return <div className={rootCls}>
    <div className={prefixClassNames('window-content', 'flex h-full')}>
      {props.children}
    </div>
  </div>
}

const ImWindow = () => {
  return <WindowBox>
    <Panel/>
    <Contacts />
  </WindowBox>
}

export default ImWindow
