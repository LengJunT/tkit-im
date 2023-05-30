import React from 'react'
import {prefixClassNames} from '../../utils/prefixCls'
import {EllipsisOutlined} from '@ant-design/icons'
import MessageContainer from './messageContainer'


const Chat = () => {
  return <div className={prefixClassNames('chat', 'flex flex-col flex-1 h-full')}>
      <div className={prefixClassNames('chat-header', 'flex justify-between py-2.5 px-5')}>
          <div>用户1</div>
          <div className={prefixClassNames('chat-header-other', 'items-center flex cursor-pointer')}>
              <EllipsisOutlined />
          </div>
      </div>
      <MessageContainer />
      <div className={prefixClassNames('chat-edit-container', 'h-[200px]')}>
          <div className={prefixClassNames('chat-edit-box', 'h-full px-4 py-3 outline-0')} contentEditable={true}></div>
      </div>
  </div>
}

export default React.memo(Chat)
