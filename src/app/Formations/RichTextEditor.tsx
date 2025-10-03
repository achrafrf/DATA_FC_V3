'use client';

import React, { useEffect, useRef, forwardRef, useImperativeHandle } from 'react';
import Quill from 'quill';
import 'quill/dist/quill.snow.css';

export type RichTextEditorHandle = {
  getContent: () => string;
};

interface RichTextEditorProps {
  initialValue?: string;
}

const RichTextEditor = forwardRef<RichTextEditorHandle, RichTextEditorProps>(({ initialValue = "" }, ref) => {
  const editorRef = useRef<HTMLDivElement>(null);
  const quillRef = useRef<Quill | null>(null);

 useEffect(() => {
  if (editorRef.current) {
    quillRef.current = new Quill(editorRef.current, {
      theme: 'snow',
      modules: {
        toolbar: [
          [{ header: [1, 2, 3, false] }],
          ['bold', 'italic', 'underline', 'strike'],
          [{ list: 'ordered' }, { list: 'bullet' }],
          ['link', 'image'],
          ['clean'],
        ],
      },
      placeholder: 'Write something...',
    });

    // Set initial content
    if (initialValue) {
      quillRef.current.root.innerHTML = initialValue;
    }
  }

  return () => {
    quillRef.current = null;
  };
}, [initialValue]); // ✅ أضفنا initialValue هنا


  // تحديث المحتوى إذا تغير initialValue (عند Edit أو Add جديد)
  useEffect(() => {
    if (quillRef.current) {
      quillRef.current.root.innerHTML = initialValue;
    }
  }, [initialValue]);

  useImperativeHandle(ref, () => ({
    getContent: () => {
      return quillRef.current?.root.innerHTML || "";
    },
  }));

  return <div ref={editorRef} style={{ height: '300px' }} />;
});

RichTextEditor.displayName = 'RichTextEditor';
export default RichTextEditor;
