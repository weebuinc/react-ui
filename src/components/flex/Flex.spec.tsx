import '@testing-library/jest-dom';
import { render, waitFor } from '@testing-library/react';
import path from 'path';
import React, { CSSProperties } from 'react';
import { applyScss } from 'tests';

describe('Flex unit tests', () => {
  it('render column', async () => {
    const { Flex } = await import('./Flex');
    const { container, debug } = render(<Flex direction={'column'} />);

    await applyScss(container, 'flex.module.scss', [path.resolve(__dirname)]);

    await waitFor(async () => {
      const { firstElementChild } = container;

      debug(firstElementChild);

      expect(firstElementChild).toHaveClass('flex');
      expect(firstElementChild).toHaveStyle({ display: 'flex' } satisfies CSSProperties);
    });
  });
  it('xxx', async () => {});
  it('xxx', async () => {});
  it('xxx', async () => {});
  it('xxx', async () => {});
});
