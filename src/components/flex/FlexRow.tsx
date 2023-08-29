import React, { FC } from 'react';
import { FlexRowProps } from './types';

import Flex from './Flex';
export const FlexRow: FC<FlexRowProps> = (props) => (
  <Flex
    {...props}
    direction={'row'}
  />
);

export default FlexRow;
