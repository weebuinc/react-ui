import type { PropsWithChildren } from 'react';
import { ColorProp, HtmlProps, SizeProp, StyleProps } from '../../types';

export interface TextProps extends PropsWithChildren, StyleProps {
  color?: ColorProp;
  size?: SizeProp;
  spanProps?: HtmlProps<HTMLSpanElement>;
}
