/**
 * 窗口相关数据状态
 */

import { create } from 'zustand'
import { PanelTabsEnum } from '../utils/enum'

export interface WindowStore {
  /**
   * 窗口打开状态
   */
  openState: 'closed' | 'minimize' | 'fullScreen' | 'window'
  setOpenState: (openState: WindowStore['openState']) => void
  /**
   * panelTab的选中状态
   */
  panelTabActive: PanelTabsEnum
  setPanelTabActive: (panelTabActive: WindowStore['panelTabActive']) => void
}

const useWindowStore = create<WindowStore>((set) => ({
  openState: 'window',
  setOpenState: (openState) => set({openState}),
  panelTabActive: PanelTabsEnum.MESSAGE,
  setPanelTabActive: (panelTabActive) => set({panelTabActive})
}))

export default useWindowStore

