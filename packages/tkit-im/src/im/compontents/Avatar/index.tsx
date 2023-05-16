import React from 'react'
import { Avatar as AntAvatar, AvatarProps as AntAvatarProps } from 'antd'
import { UserOutlined } from '@ant-design/icons'
import { prefixClassNames } from '../../utils/prefixCls'

interface AvatarProps extends Pick<AntAvatarProps, 'size' | 'src' | 'alt'> {
  className?: string
}

const Avatar = (props: AvatarProps) => {
  const {
    size, src, alt,
    className
  } = props
  return <div className={prefixClassNames('avatar', className)}>
    <AntAvatar
      className={'flex justify-center items-center'}
      draggable={false}
      size={size}
      src={src}
      alt={alt}
      shape={'square'}
      icon={<UserOutlined />}
    />
  </div>
}

export default Avatar
