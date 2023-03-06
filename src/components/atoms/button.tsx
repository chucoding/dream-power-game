"use client";

export default function Button({ text, page, setPage }: any) {
  return (
    <button
      className="mt-3 min-h-14 rounded-lg border w-full h-full p-2"
      onClick={() => setPage(page + 1)}
    >
      {text}
    </button>
  );
}
