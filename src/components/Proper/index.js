import React from 'react'
import styles from './Proper.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);
export default function Proper({ children}) {
  return (
    <div className={cx('wrapper')} id="wrapper-acount">{ children }</div>
  )
}
