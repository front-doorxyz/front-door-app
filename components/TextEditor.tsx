import React, { useContext } from "react";
import Slite, { Editor, Toolbar } from "react-slite";

type Props = {
  initialValue?: string;
  title?: string;
  readOnly: boolean;
  handleInput?: any;
};

const TextEditor = ({ initialValue, title, readOnly, handleInput }: Props) => {
  return (
    <div>
      <Slite
        initialValue={initialValue}
        readOnly={readOnly}
        onChange={handleInput}>
        {title && (
          <div className="bg-white text-xl uppercase font-semibold">
            {title}
          </div>
        )}
        {!readOnly && <Toolbar />}
        <div className="w-full ">
          {/* editor text area */}
          <div className="">
            <Editor readOnly={readOnly} />
          </div>
        </div>
      </Slite>
    </div>
  );
};

export default TextEditor;
