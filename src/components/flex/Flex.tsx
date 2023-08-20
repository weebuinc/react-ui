import './scss';
import React, { FC } from 'react';
import cx from 'classnames';
import { Props, ColumnProps, RowProps } from './types';

import Column from './FlexColumn';
import Row from './FlexRow';

import styles from './flex.module.scss';

export const Flex: FC<Props> & { Column: FC<ColumnProps>; Row: FC<RowProps> } = ({
  align = 'top',
  children,
  className,
  direction,
  divProps = {},
  fullHeight,
  fullWidth,
  grow,
  id,
  justify = 'left',
  padding,
  margin,
  reverse = false,
  spacing,
  style = {},
  wrap
}) => {
  const cls = new Array<string>();
  cls.push('flex');
  className && cls.push(className);
  cls.push(styles.root);
  cls.push(direction === 'row' ? styles.row : styles.column);

  if (fullHeight) {
    cls.push(styles.fullHeight);
  }

  if (fullWidth) {
    cls.push(styles.fullWidth);
  }

  if (grow) {
    cls.push(styles.grow);
  }

  if (wrap) {
    cls.push(styles.wrap);
  } else if (typeof wrap === 'boolean') {
    cls.push(styles.noWrap);
  }

  if (margin) {
    cls.push(styles[`margin-${margin}`]);
  }

  if (padding) {
    cls.push(styles[`padding-${padding}`]);
  }

  if (reverse) {
    cls.push(styles.reverse);
  }

  if (spacing) {
    cls.push(styles[`spacing-${spacing}`]);
  }

  switch (align) {
    case 'around':
      cls.push(styles.alignAround);
      break;
    case 'between':
      cls.push(styles.alignBetween);
      break;
    case 'bottom':
      cls.push(styles.alignBottom);
      break;
    case 'evenly':
      cls.push(styles.alignEvenly);
      break;
    case 'middle':
      cls.push(styles.alignMiddle);
      break;
    case 'top':
      cls.push(styles.alignTop);
      break;
  }

  switch (justify) {
    case 'around':
      cls.push(styles.justifyAround);
      break;
    case 'between':
      cls.push(styles.justifyBetween);
      break;
    case 'center':
      cls.push(styles.justifyCenter);
      break;
    case 'evenly':
      cls.push(styles.justifyEvenly);
      break;
    case 'left':
      cls.push(styles.justifyLeft);
      break;
    case 'right':
      cls.push(styles.justifyRight);
      break;
  }
  return (
    <div
      {...divProps}
      id={id}
      className={cx(cls)}
      style={style}>
      {children}
    </div>
  );
};

Flex.Column = Column;
Flex.Row = Row;

export default Flex;
