import React from 'react'
import { MessageOutlined, TeamOutlined } from '@ant-design/icons'
import { PanelTabsEnum } from './enum'

export const PanelTabs = [
  {
    icon: MessageOutlined,
    key: PanelTabsEnum.MESSAGE,
    label: '消息'
  },{
    icon: TeamOutlined,
    key: PanelTabsEnum.ADDRESS_BOOK,
    label: '通讯录'
  },
]
