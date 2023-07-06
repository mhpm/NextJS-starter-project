import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Modal from './modal';
import Button from '../button/button';

const meta: Meta<typeof Modal> = {
  title: 'Organisms/Modal',
  component: Modal,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div
        style={{
          margin: '0',
          height: '50vh',
          width: '100%',
          position: 'relative',
        }}
      >
        {/* 👇 Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  */}
        <Story />
      </div>
    ),
  ],
  // argTypes: {
  //   handlerCancel: { action: 'handlerCancel clicked' },
  //   handlerAccept: { action: 'handlerAccept clicked' },
  // },
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const modal: Story = {
  args: {
    show: true,
    content:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab pariatur necessitatibus blanditiis impedit accusantium ipsam, amet odio similique eligendi tempora iure laborum praesentium laudantium officia beatae? Iste qui dolores nisi.',
  },
};

export const withTitle: Story = {
  args: {
    show: true,
    title: 'Title',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab pariatur necessitatibus blanditiis impedit accusantium ipsam, amet odio similique eligendi tempora iure laborum praesentium laudantium officia beatae? Iste qui dolores nisi.',
  },
};

export const withFooter: Story = {
  args: {
    show: true,
    footer: 'My Footer',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab pariatur necessitatibus blanditiis impedit accusantium ipsam, amet odio similique eligendi tempora iure laborum praesentium laudantium officia beatae? Iste qui dolores nisi.',
  },
};

export const custom: Story = {
  args: {
    show: true,
    title: 'Image Preview',
    content: (
      <div>
        <img
          src="https://images.unsplash.com/photo-1506729623306-b5a934d88b53?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
          alt=""
        />
      </div>
    ),
    footer: 'some',
  },
  render: ({ title, content, footer }) => (
    <div className="relative h-[90vh]">
      <Modal
        show
        title={title}
        content={content}
        footer={
          <div>
            <Button
              label="Cancel"
              variation="secondary"
              className="mr-2"
              onClick={action('handlerClose')}
            />
            <Button label="Accept" onClick={action('handlerAccept')} />
          </div>
        }
        onClose={action('handlerClose')}
      />
    </div>
  ),
};
