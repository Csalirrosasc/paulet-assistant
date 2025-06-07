import ChatMessage from './ChatMessage';

export default function ChatMessages({ messages }) {
  return (
    <div className="h-64 overflow-y-auto p-4 space-y-2">
      {messages.map((msg, idx) => (
        <ChatMessage key={idx} message={msg} />
      ))}
    </div>
  );
}
