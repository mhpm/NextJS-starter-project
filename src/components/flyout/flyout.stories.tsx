import type { Meta, StoryObj } from '@storybook/react';

import FlyOut from '../modal/modal.skeleton';

const meta: Meta<typeof FlyOut> = {
  title: 'Organisms/FlyOut',
  component: FlyOut,
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof FlyOut>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Skeleton: Story = {
  render: () => (
    <FlyOut>
      <FlyOut.Header>Title Contetn</FlyOut.Header>
      <FlyOut.Body>Body Content</FlyOut.Body>
      <FlyOut.Footer>Footer Content</FlyOut.Footer>
    </FlyOut>
  ),
};

export const Customized: Story = {
  render: () => (
    <FlyOut>
      <FlyOut.Header className="bg-neutral-700 text-xl p-2">
        Title Contetn
      </FlyOut.Header>
      <FlyOut.Body className="p-6">
        {' '}
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, maiores
        inventore? Officiis iure pariatur fuga dolorum nemo perferendis
        corrupti, suscipit, repellendus debitis ut eum deleniti laborum atque in
        qui sint!
      </FlyOut.Body>
      <FlyOut.Footer className="p-2 bg-neutral-800">
        Footer Content
      </FlyOut.Footer>
    </FlyOut>
  ),
};
