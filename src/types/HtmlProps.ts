import type { DetailedHTMLProps, HTMLAttributes } from 'react';

export type HtmlProps<E extends HTMLElement = HTMLElement, O extends string = ''> = Omit<
  DetailedHTMLProps<HTMLAttributes<E>, E>,
  'children' | 'className' | 'id' | 'style' | O
>;
