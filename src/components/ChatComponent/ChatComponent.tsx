import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface ChatComponentProps {
  messages?: Message[];
}

interface Message {
  text: string;
  type: 'user' | 'received';
}

const renderers = {
  ul: ({ children }: any) => <ul className="list-disc ml-4">{children}</ul>,
  ol: ({ children }: any) => <ol className="list-decimal ml-4">{children}</ol>,
};

const ChatComponent: React.FC<ChatComponentProps> = (props) => {
  const [messages, setMessages] = useState<Message[]>(props.messages || []);
  const [inputValue, setInputValue] = useState<string>('');

  useEffect(() => {
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim()) {
      setMessages([...messages, { text: inputValue, type: 'user' }]);
      setMessages(prevMessages => [...prevMessages, { text: "Hello, this is a demo bot.", type: 'received' }]);
      setInputValue('');
    }
  };

  const today = new Date();
  const date = today.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' });

  return (
    <div className="flex flex-col h-screen bg-gray-100 p-4 rounded-md w-96">
      <div className="text-center py-2 text-gray-500 text-sm">{date}</div>
      <div className="flex-1 overflow-y-auto p-4">
        <div className="space-y-2">
          {messages && messages.map((message, index) => (
            <div
              key={index}
              className={`rounded-xl p-2 max-w-xs break-words ${
                message.type === 'user' ? 'bg-gray-50 ml-auto' : 'bg-blue-500 text-white mr-auto'
              }`}
            >
              <ReactMarkdown remarkPlugins={[remarkGfm]} components={renderers}>{message.text}</ReactMarkdown>
            </div>
          ))}
        </div>
      </div>
      <form onSubmit={handleSubmit} className="flex p-4 bg-gray-200 rounded-md">
        <textarea
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Type a message..."
          className="flex-1 p-2 rounded-md border-none shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button type="submit" className="ml-2 p-2 rounded-md bg-blue-500 text-white font-semibold shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
          Send
        </button>
      </form>
    </div>
  );
};

export default ChatComponent;
