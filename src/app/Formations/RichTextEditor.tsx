'use client';

import React, { useEffect, useRef, forwardRef, useImperativeHandle } from 'react';
import 'quill/dist/quill.snow.css';
import type QuillType from 'quill'; // ✅ import type only

export type RichTextEditorHandle = {
  getContent: () => string;
};

interface RichTextEditorProps {
  initialValue?: string;
}

const RichTextEditor = forwardRef<RichTextEditorHandle, RichTextEditorProps>(
  ({ initialValue = '' }, ref) => {
    const editorRef = useRef<HTMLDivElement>(null);
    const quillRef = useRef<QuillType | null>(null); // ✅ use QuillType instead of any

    useEffect(() => {
      import('quill').then((QuillModule) => {
        const Quill = QuillModule.default;
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

          quillRef.current.root.innerHTML = initialValue;
        }
      });

      return () => {
        quillRef.current = null;
      };
    }, [initialValue]);

    useImperativeHandle(ref, () => ({
      getContent: () => quillRef.current?.root.innerHTML || '',
    }));

    return <div ref={editorRef} style={{ height: '300px' }} />;
  }
);

RichTextEditor.displayName = 'RichTextEditor';
export default RichTextEditor;
