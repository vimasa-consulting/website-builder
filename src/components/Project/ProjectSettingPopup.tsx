"use client";

import { Button, Modal, Label, TextInput, FileInput } from "flowbite-react";
import React, { useState } from "react";
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/ext-language_tools";

export default function DismissableModal(props: any) {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  function onChange(newValue: any) {
    console.log("change", newValue);
  }

  const onChange2 = (newValue2: any) => {
    console.log("change", newValue2);
  };
  console.log("change", input1);

  return (
    <>
      <Modal
        dismissible
        show={props.openModal === "dismissible"}
        onClose={() => props.setOpenModal(undefined)}
        size="4xl"
      >
        <Modal.Header>General Settings</Modal.Header>
        <Modal.Body>
          <div className="space-y-8">
            <div className="max-w-md">
              <div className="mb-2 block">
                <Label htmlFor="name" value="Your name" />
              </div>
              <TextInput
                id="name"
                placeholder="name@company.com"
                value={input1}
                onChange={(e) => setInput1(e.target.value)}
                required
              />
            </div>
            <div className="max-w-md">
              <div className="mb-2 block">
                <Label htmlFor="text" value="Your domain" />
              </div>
              <TextInput
                id="text"
                type="text"
                value={input2}
                onChange={(e) => setInput2(e.target.value)}
                required
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="logo" value="FavIcon" />
              </div>
              <input type="file" id="img" name="img" accept="image/*" />
            </div>
            {/* <div className="max-w-md" id="fileUpload">
              <div className="mb-2 block">
                <Label htmlFor="file" value="FavIcon" />
              </div>
              <FileInput
                // helperText="FavIcons"
                id="file"
              />
            </div> */}
            <h4 className="text-1xl text-gray-500 dark:text-gray-400">
              Add Custom HTML
            </h4>
            <div className="max-w-md" id="htmlHead">
              <div className="mb-2 block">
                <Label htmlFor="file" value="Header Code" />
              </div>
              <p className="mb-3 text-xs text-gray-500 dark:text-gray-400">
                Add's code at the end of head Tag
              </p>
              <AceEditor
                mode="javascript"
                theme="monokai"
                onChange={onChange2}
                name="UNIQUE_ID_OF_DIV"
                editorProps={{ $blockScrolling: true }}
                highlightActiveLine
                wrapEnabled
                setOptions={{
                  enableBasicAutocompletion: true,
                  showLineNumbers: true,
                  tabSize: 2,
                }}
              />
              {/* <ReactQuill
              // value={this.state.text}
              // onChange={this.handleChange}
              /> */}
              {/* <div dangerouslySetInnerHTML={{ __html: this.state.text }}></div> */}
            </div>
            <div className="max-w-md" id="htmlFooter">
              <div className="mb-2 block">
                <Label htmlFor="file" value="Footer Code" />
              </div>
              <p className="mb-3 text-xs text-gray-500 dark:text-gray-400">
                Add's code at the end of body Tag
              </p>
              <AceEditor
                mode="javascript"
                theme="monokai"
                onChange={onChange}
                name="UNIQUE_ID_OF_DIV"
                editorProps={{ $blockScrolling: true }}
                highlightActiveLine
                wrapEnabled
                setOptions={{
                  enableBasicAutocompletion: true,
                  showLineNumbers: true,
                  tabSize: 2,
                }}
              />
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => props.setOpenModal(undefined)}>Save</Button>
          <Button color="gray" onClick={() => props.setOpenModal(undefined)}>
            Decline
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
