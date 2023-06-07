import { prefixClassNames } from './utils/prefixCls'
import {Chat, Contacts, Panel} from './compontents'
import './main.less'
import {useUserStore, useWindowStore} from './store'
import React, {useEffect, useState} from 'react'
import { io } from "socket.io-client";
import Login from './compontents/login'
import WindowSwitch from './compontents/WindowSwitch'
import {checkLogin} from './service'
import { LoadingOutlined } from '@ant-design/icons'

let socket: any
const WindowBox = (props: {
  children: React.ReactNode
}) => {
  const openState = useWindowStore(state => state.openState)
  const userInfo = useUserStore(state => state.userInfo)

  const setUserInfo = useUserStore(state => state.setUserInfo)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    checkLogin().then((res) => {
      if (res.data.data) {
        setUserInfo(res.data.data)
      }
    }).finally(() => {
      setLoading(false)
    })
  }, [])

  useEffect(() => {
    if (!socket) {
      socket = io('//localhost:3001/')
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
        loading ? <div className={'w-full h-full flex items-center justify-center text-4xl'}>
          <LoadingOutlined style={{color: 'var(--primary)'}} />
        </div> : !userInfo ? <Login /> : props.children
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
