import React, { FC } from 'react';
import { RowProps } from './types';

import Flex from './Flex';
export const FlexRow: FC<RowProps> = (props) => (
  <Flex
    {...props}
    direction={'row'}
  />
);

export default FlexRow;
