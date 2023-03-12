import React, { memo } from 'react'
import styles from './Proper.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);
function Proper({ children }) {
  return (
    <div id="proper" className={cx('wrapper')} >{children}</div>
  )
}
export default memo(Proper)