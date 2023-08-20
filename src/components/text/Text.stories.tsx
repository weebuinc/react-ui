import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import Component from './Text';

const meta: Meta<typeof Component> = {
  component: Component,
  title: 'components/typography/Text'
};

export default meta;

type Story = StoryObj<typeof Component>;

const args: Story['args'] = {};

export const xSmall: Story = { args: { ...args, size: 'xSmall', children: 'xSmall' } };
export const small: Story = { args: { ...args, size: 'small', children: 'small' } };
export const medium: Story = { args: { ...args, size: 'medium', children: 'medium' } };
export const large: Story = { args: { ...args, size: 'large', children: 'large' } };
export const xLarge: Story = { args: { ...args, size: 'xLarge', children: 'xLarge' } };
