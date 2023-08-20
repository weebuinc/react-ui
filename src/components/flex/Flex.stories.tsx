import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import Component from './Flex';

const meta: Meta<typeof Component> = {
  component: Component,
  title: 'components/layout/Flex'
};

export default meta;

type Story = StoryObj<typeof Component>;

const args: Story['args'] = {
  fullHeight: true,
  fullWidth: true,
  style: { minHeight: 400 },
  children: (
    <>
      {[
        { color: 'red', name: 'A' },
        { color: 'blue', name: 'B' },
        { color: 'orange', name: 'C' }
      ].map(({ name, color }) => (
        <div
          key={name}
          style={{ width: 100, height: 100, backgroundColor: color, textAlign: 'center', lineHeight: 6 }}>
          {name}
        </div>
      ))}
    </>
  )
};

export const Column: Story = { args: { ...args, direction: 'column' } };
export const Row: Story = { args: { ...args, direction: 'row' } };

export const Wrap: Story = {
  args: {
    direction: 'row',
    wrap: true,
    style: { maxHeight: 400 },
    children: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').map((name) => (
      <div
        key={name}
        style={{
          minWidth: 100,
          minHeight: 100,
          backgroundColor: '#88cb3c',
          textAlign: 'center',
          lineHeight: 6,
          border: '1px solid black'
        }}>
        {name}
      </div>
    ))
  }
};
