"use client";

import { useEffect } from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Link from "@tiptap/extension-link";

interface EditorProps {
  content: string;
  setContent: (value: string) => void;
}

export default function Editor({ content, setContent }: EditorProps) {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        heading: {
          levels: [1, 2, 3],
        },
      }),
      Link.configure({
        openOnClick: false,
      }),
    ],

    // Initialize empty (important for edit mode fix)
    content: "",

    immediatelyRender: false,

    onUpdate({ editor }) {
      const html = editor.getHTML();
      setContent(html);
    },
  });

  // ✅ Sync API content into editor (for edit page)
  useEffect(() => {
    if (!editor) return;

    if (content && content !== editor.getHTML()) {
      editor.commands.setContent(content);
    }
  }, [content, editor]);

  if (!editor) return null;

  const setLink = () => {
    const url = prompt("Enter URL");

    if (!url) return;

    editor.chain().focus().setLink({ href: url }).run();
  };

  return (
    <div className="mx-auto bg-white shadow-lg border border-gray-200 rounded-2xl p-8 space-y-6">

      {/* Toolbar */}
      <div className="flex gap-2 flex-wrap border-b pb-4">

        <button
          type="button"
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 1 }).run()
          }
          className={`px-3 py-1 rounded-md text-sm font-medium transition ${editor.isActive("heading", { level: 1 })
            ? "bg-black text-white"
            : "bg-gray-100 hover:bg-gray-200"
            }`}
        >
          H1
        </button>

        <button
          type="button"
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 2 }).run()
          }
          className={`px-3 py-1 rounded-md text-sm font-medium transition ${editor.isActive("heading", { level: 2 })
            ? "bg-black text-white"
            : "bg-gray-100 hover:bg-gray-200"
            }`}
        >
          H2
        </button>

        <button
          type="button"
          onClick={() => editor.chain().focus().toggleBold().run()}
          className={`px-3 py-1 rounded-md text-sm font-medium transition ${editor.isActive("bold")
            ? "bg-black text-white"
            : "bg-gray-100 hover:bg-gray-200"
            }`}
        >
          Bold
        </button>

        <button
          type="button"
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className={`px-3 py-1 rounded-md text-sm font-medium transition ${editor.isActive("italic")
            ? "bg-black text-white"
            : "bg-gray-100 hover:bg-gray-200"
            }`}
        >
          Italic
        </button>

        {/* ✅ Underline */}
        {/* <button
          type="button"
          onClick={() => editor.chain().focus().toggleUnderline().run()}
          className={`px-3 py-1 rounded-md text-sm font-medium transition ${editor.isActive("underline")
            ? "bg-black text-white"
            : "bg-gray-100 hover:bg-gray-200"
            }`}
        >
          Underline
        </button> */}

        {/* ✅ Bullet List */}
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={`px-3 py-1 rounded-md text-sm font-medium transition ${editor.isActive("bulletList")
            ? "bg-black text-white"
            : "bg-gray-100 hover:bg-gray-200"
            }`}
        >
          • List
        </button>
        {/* ✅ Numbered List */}
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          className={`px-3 py-1 rounded-md text-sm font-medium transition ${editor.isActive("orderedList")
            ? "bg-black text-white"
            : "bg-gray-100 hover:bg-gray-200"
            }`}
        >
          1. List
        </button>

        {/* ✅ Blockquote */}
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
          className={`px-3 py-1 rounded-md text-sm font-medium transition ${editor.isActive("blockquote")
            ? "bg-black text-white"
            : "bg-gray-100 hover:bg-gray-200"
            }`}
        >
          Quote
        </button>

        <button
          type="button"
          onClick={setLink}
          className="px-3 py-1 rounded-md text-sm font-medium bg-gray-100 hover:bg-gray-200"
        >
          Link
        </button>
      </div>

      {/* Editor Area */}
      <EditorContent
        editor={editor}
        className="min-h-[300px] text-lg leading-relaxed focus:outline-none"
      />
    </div>
  );
}