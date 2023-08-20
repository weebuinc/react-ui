import type { CSSProperties, PropsWithChildren } from 'react';
import { AlignProp, DirectionProp, HtmlProps, JustifyProp, SizeProp, StyleProps } from '../../types';

export interface Props extends PropsWithChildren, StyleProps {
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

export type ColumnProps = Omit<Props, 'direction'>;
export type RowProps = Omit<Props, 'direction'>;
