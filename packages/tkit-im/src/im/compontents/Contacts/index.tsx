import {prefixClassNames} from '../../utils/prefixCls'
import React from 'react'
import './index.less'
import {Avatar, List} from 'antd'

const data = [
    {
        id: 0,
        avatar: 'https://randomuser.me/api/portraits/women/42.jpg',
        label: '用户2444545',
        lastMsg: '哈哈哈',
        time: '下午2:15',
    }
]

for (let i = 1; i < 20; i++) {
    data.push({
        id: i,
        avatar: i % 2 == 0 ? 'https://randomuser.me/api/portraits/women/42.jpg' : 'https://randomuser.me/api/portraits/women/40.jpg',
        label: '用户用户用户' + i,
        lastMsg: '哈哈哈',
        time: '昨天',
    })
}


const Contacts = () => {

  return <div className={prefixClassNames('contacts', 'bg-white overflow-auto')}
    style={{ width: '200px'}}
  >
      <List
          dataSource={data}
          renderItem={(item) => {
              return <List.Item key={item.id}>
                  <List.Item.Meta
                      avatar={<Avatar size="large" src={item.avatar} />}
                      title={<>
                        <span className={'msg-user-name'}>{item.label}</span>
                        <span className={'msg-time pl-1'}>{item.time}</span>
                      </>}
                      description={item.lastMsg}
                  />
              </List.Item>
          }}
      />
  </div>
}

export default React.memo(Contacts)
