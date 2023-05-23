import React from 'react'
import {prefixClassNames} from '../../utils/prefixCls'
import Avatar from '../Avatar'

const rootCls = 'chat-message-item'


const MessageItem = (props: {
  isRight?: boolean
}) => {
  const { isRight } = props
  return <div className={prefixClassNames(rootCls, 'px-5 pt-3')}>
    <div className={prefixClassNames(`${rootCls}-msg-time`, 'text-center text-sm text-slate-400')}>
      2021-10-11
    </div>
    <div className={prefixClassNames(`${rootCls}-msg-container`, 'flex pt-1', {
      'flex-row-reverse': isRight
    })}>
      <div className={prefixClassNames(`${rootCls}-msg-header`)}>
        <Avatar size={'default'} shape={'circle'}/>
      </div>
      <div className={prefixClassNames('', 'mx-2.5 flex flex-col flex-1', {
        'items-end': isRight,
        'items-start': !isRight,
      })}>
        <div className={'text-sm text-slate-400'}>
          userName
        </div>
        <div className={prefixClassNames(`${rootCls}-msg-content`, 'px-1.5 py-1 rounded bg-zinc-200 max-w-[50%] break-all')}>
          123jsidfodfoweijfowefoij
        </div>
      </div>

    </div>
  </div>
}

export default React.memo(MessageItem)
