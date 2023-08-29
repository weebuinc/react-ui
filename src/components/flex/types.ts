import type { CSSProperties, PropsWithChildren } from 'react';
import { AlignProp, DirectionProp, HtmlProps, JustifyProp, SizeProp, StyleProps } from '../../types';

export interface FlexProps extends PropsWithChildren, StyleProps {
  align?: AlignProp;
  direction: DirectionProp;
  divProps?: HtmlProps<HTMLDivElement>;
  fullHeight?: boolean;
  fullWidth?: boolean;
  grow?: boolean;
  justify?: JustifyProp;
  margin?: SizeProp;
  padding?: SizeProp;
  reverse?: boolean;
  spacing?: SizeProp;
  wrap?: boolean | CSSProperties['flexWrap'];
}

export type FlexColumnProps = Omit<FlexProps, 'direction'>;
export type FlexRowProps = Omit<FlexProps, 'direction'>;
