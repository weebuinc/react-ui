import './scss';
import React, { FC } from 'react';
import cx from 'classnames';

import { Props } from './types';

import styles from './text.module.scss';

export const Text: FC<Props> = ({ children, className, color, id, size = 'medium', spanProps, style = {} }) => {
  const cls = new Array<string>();
  cls.push('text');
  cls.push(styles.root);
  className && cls.push(className);

  cls.push(styles[`size-${size}`]);
  color && cls.push(styles[`color-${color}`]);

  return (
    <span
      {...spanProps}
      className={cx(cls)}
      id={id}
      style={style}>
      {children}
    </span>
  );
};

export default Text;
