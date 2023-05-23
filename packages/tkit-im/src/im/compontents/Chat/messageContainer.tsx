import React from 'react'
import {prefixClassNames} from '../../utils/prefixCls'
import MessageItem from './messageItem'

const rootCls = 'chat-message-container'
const MessageContainer = () => {
  return <div className={prefixClassNames(rootCls, 'flex-1 border-y border-slate-200 border-solid')}>
      <div className={prefixClassNames(`${rootCls}-list`)}>
          <MessageItem />
          <MessageItem isRight />
      </div>
  </div>
}

export default React.memo(MessageContainer)
