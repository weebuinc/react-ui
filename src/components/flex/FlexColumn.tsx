import React, { FC } from 'react';
import { ColumnProps } from './types';

import Flex from './Flex';
export const FlexColumn: FC<ColumnProps> = (props) => (
  <Flex
    {...props}
    direction={'column'}
  />
);

export default FlexColumn;
