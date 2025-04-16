import type { Meta, StoryObj } from '@storybook/react';
import ChatComponent from './ChatComponent';
import { useState } from 'react';
import { userEvent } from '@storybook/test';
import { within } from '@testing-library/react';

const meta: Meta<typeof ChatComponent> = {
  title: 'Components/ChatComponent',
  component: ChatComponent,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof ChatComponent>;

export const Empty: Story = {
  args: {},
};

export const WithPreloadedMessages: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByPlaceholderText('Type a message...');
    const button = canvas.getByText('Send');

    await userEvent.type(input, 'Hello, World!');
    await userEvent.click(button);
    
    await userEvent.type(input, 'This is a test message');
    await userEvent.click(button);
  }, 
};

export const LongConversation: Story = {
  args: {},
  render: () => {
    const [messages, setMessages] = useState([
      { text: 'Hi there!', type: 'received' as 'received' },
      { text: 'How are you?', type: 'received' as 'received' },
      { text: 'I am doing great!', type: 'user' as 'user' },
      { text: 'This is a long conversation example', type: 'received' as 'received' },
      { text: 'With multiple messages', type: 'user' as 'user' },
    ]);

    return <ChatComponent messages={messages} />;
  },
};
