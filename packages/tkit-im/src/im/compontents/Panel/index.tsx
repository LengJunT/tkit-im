import React from 'react'
import { prefixClassNames } from '../../utils/prefixCls'
import WindowSwitch from '../WindowSwitch'
import Avatar from '../Avatar'
import PanelTab from './panelTab'
import './index.less'

const Panel = () => {
  return <div className={prefixClassNames('panel', 'w-16 h-full flex items-center flex-col')}>
    <WindowSwitch />
    <Avatar size={'large'} className={'my-2 mt-8'} />
    <PanelTab />
  </div>
}

export default React.memo(Panel)
