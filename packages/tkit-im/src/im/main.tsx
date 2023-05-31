import { prefixClassNames } from './utils/prefixCls'
import {Chat, Contacts, Panel} from './compontents'
import './main.less'
import {useUserStore, useWindowStore} from './store'
import React, {useEffect} from 'react'
import { io } from "socket.io-client";
import Login from './compontents/login'
import WindowSwitch from './compontents/WindowSwitch'

let socket: any
const WindowBox = (props: {
  children: React.ReactNode
}) => {
  const openState = useWindowStore(state => state.openState)
  const userInfo = useUserStore(state => state.userInfo)

  useEffect(() => {
    if (!socket) {
      socket = io('//localhost:3000/')
      // server-side
      socket.on("connection", (s: any) => {
        console.log(s.id); // x8WIv7-mJelg7on_ALbx
      });

  // client-side
      socket.on("connect", () => {
        console.log(socket.id); // x8WIv7-mJelg7on_ALbx
      });

      socket.on("disconnect", () => {
        console.log(socket.id); // undefined
      });

      socket.emit('events', {
        name: 'test',
        string: 'hhhhhhhhhsmmmmm'
      }, (e: any) => {
        console.log('events -c', e)
      })
    }
  }, [])

  const rootCls = prefixClassNames('window', {
    'minimize': openState === 'minimize',
    'full-screen': openState === 'fullScreen'
  })

  if (openState === 'closed') return  null

  return <div className={rootCls}>
    <div className={prefixClassNames('window-content', 'flex h-full')}>
      <WindowSwitch />
      {
        !userInfo ? <Login /> : props.children
      }
    </div>
  </div>
}

const ImWindow = () => {
  return <WindowBox>
    <Panel/>
    <Contacts />
    <Chat />
  </WindowBox>
}

export default ImWindow
