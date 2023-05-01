import React from "react";

import FroalaEditor from "react-froala-wysiwyg";

import "froala-editor/css/froala_editor.pkgd.min.css";
import "froala-editor/css/froala_style.css";

const Editor = () => {
  return (
    <div>
      <FroalaEditor
        tag="textarea"
        config={{ pluginsEnabled: ["align", "link"] }}
      />
    </div>
  );
};

export default Editor;
