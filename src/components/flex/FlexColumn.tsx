import React, { FC } from 'react';
import { FlexColumnProps } from './types';

import Flex from './Flex';
export const FlexColumn: FC<FlexColumnProps> = (props) => (
  <Flex
    {...props}
    direction={'column'}
  />
);

export default FlexColumn;
