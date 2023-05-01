import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const PostEditor = () => {
  const [value, setValue] = useState("");

  const modules = {
    toolbar: [
      [{ header: "1" }, { header: "2" }],
      ["bold", "italic", "underline"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image", "video"],
    ],
  };

  const formats = [
    "header",
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
    "video",
  ];

  const handleEditorChange = (content, delta, source, editor) => {
    setValue(content);
  };

  

  return (
    <div>
      <ReactQuill
        value={value}
        onChange={handleEditorChange}
        modules={modules}
        formats={formats}
      />
      <div className="messageSender__bottom">
        <button onClick={handleDiscardClick}>Discard</button>
        <button onClick={handlePostClick}>Post</button>
      </div>
    </div>
  );
};

export default PostEditor;
