import React, { useState, useRef, useEffect } from "react";
import EditorJS from "@editorjs/editorjs";

const Editor = () => {
  const [editorInstance, setEditorInstance] = useState(null);
  const editorRef = useRef(null);

  useEffect(() => {
    const editor = new EditorJS({
      holder: editorRef.current,
      placeholder: "Start typing...",
      tools: {
        // define your desired tools here, e.g.:
        // header: {
        //   class: Header,
        //   inlineToolbar: true
        // },
        // list: {
        //   class: List,
        //   inlineToolbar: true
        // }
      },
      onChange: () => {
        // handle changes to the editor content here, if desired
      },
    });

    setEditorInstance(editor);

    return () => {
      if (editorInstance) {
        editorInstance.destroy();
      }
    };
  }, []);

  return <div ref={editorRef}></div>;
};

export default Editor;
