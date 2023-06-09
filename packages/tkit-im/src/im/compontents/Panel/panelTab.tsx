import React from 'react'
import { prefixClassNames } from '../../utils/prefixCls'
import { PanelTabs } from '../../utils/const'
import classNames from 'classnames'
import { useWindowStore, WindowStore } from '../../store'

function PanelTab () {
  const panelTabActive = useWindowStore(state => state.panelTabActive)
  const set = useWindowStore(state => state.setPanelTabActive)
  const setActive = (active: WindowStore['panelTabActive']) => () => {
    set(active)
  }
  return <div className={prefixClassNames('panel-tab', 'flex flex-col')}>
    {
      PanelTabs.map(Item => {
        return <Item.icon onClick={setActive(Item.key)} className={classNames('cursor-pointer my-3 text-2xl text-black', {
          'text-blue-500': Item.key === panelTabActive
        })} />
      })
    }
  </div>
}

export default PanelTab
