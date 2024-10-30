"use client";

import { useChat } from "ai/react";

export default function HomePage() {
  const { messages, setMessages, setInput, handleSubmit, append } = useChat();
  console.log(messages);

  const handleButtonSubmit = (mood: string) => {
    console.log(mood);
    setMessages([
      ...messages,
      {
        id: messages.length,
        role: "user",
        content: "give me a qoute :" + mood,
      },
    ]);
    append({
      id: messages.length + 1,
      role: "assistant",
      content: "I am thinking...",
    });
  };
  return (
    <>
      <div className="flex flex-col justify-center items-center w-[90vw] mx-auto h-screen">
        <h1 className="text-5xl font-semibold">Choose the mood</h1>
        <div className="flex flex-row gap-4 mt-5">
          <button
            onClick={() => handleButtonSubmit("Inspirational")}
            className="bg-slate-800 px-4 py-2 rounded-md border-2 border-slate-500"
          >
            Inspirational
          </button>
          <button
            onClick={() => handleButtonSubmit("Funny")}
            className="bg-slate-800 px-4 py-2 rounded-md border-2 border-slate-500"
          >
            Funny
          </button>
          <button
            onClick={() => handleButtonSubmit("Thought-provoking")}
            className="bg-slate-800 px-4 py-2 rounded-md border-2 border-slate-500"
          >
            Thought-provoking
          </button>
          <button
            onClick={() => handleButtonSubmit("Random")}
            className="bg-slate-800 px-4 py-2 rounded-md border-2 border-slate-500"
          >
            Random
          </button>
        </div>
        <div className="flex flex-col w-full my-5">
          {messages.map((m) => (
            <div key={m.id} className="whitespace-pre-wrap mb-5">
              {m.role === "assistant" && <p>{m.content}</p>}
            </div>
          ))}

          {/* <form onSubmit={handleSubmit}>
          <input
            className=" fixed bottom-0 w-full max-w-md p-2 mb-8 border border-gray-300 rounded shadow-xl bg-black"
            value={input}
            placeholder="Say something..."
            onChange={handleInputChange}
          />
        </form> */}
        </div>
        <button
          onClick={setMessages.bind(null, [])}
          className="bg-red-700 px-4 py-2 rounded-md font-semibold "
        >
          clear
        </button>
      </div>
    </>
  );
}
