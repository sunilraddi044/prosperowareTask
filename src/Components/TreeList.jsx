import React from "react";
import Details from "./Details";
import Tree from "./Tree";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const treeData = [
  {
    key: "0",
    label: "Documents",
    icon: <i className="bi text-primary bi-folder-fill"></i>,
    title: "Documents Folder",
    children: [
      {
        key: "0-1",
        label: "Document 1-1",
        icon: <i className="bi text-primary bi-folder-fill"></i>,
        title: "Documents Folder",
        children: [
          {
            key: "0-1-1",
            id: "001",
            label: "Document-0-1.doc",
            icon: (
              <i className="bi text-primary bi-file-earmark-richtext-fill"></i>
            ),
            title: "Documents Folder",
          },
          {
            key: "0-1-2",
            id: "002",
            label: "Document-0-2.doc",
            icon: (
              <i className="bi text-primary bi-file-earmark-richtext-fill"></i>
            ),
            title: "Documents Folder",
          },
          {
            key: "0-1-3",
            id: "003",
            label: "Document-0-3.doc",
            icon: (
              <i className="bi text-primary bi-file-earmark-richtext-fill"></i>
            ),
            title: "Documents Folder",
          },
          {
            key: "0-1-4",
            id: "004",
            label: "Document-0-4.doc",
            icon: (
              <i className="bi text-primary bi-file-earmark-richtext-fill"></i>
            ),
            title: "Documents Folder",
          },
        ],
      },
    ],
  },
  {
    key: "1",
    label: "Desktop",
    icon: <i className="bi text-primary bi-folder-fill"></i>,
    title: "Desktop Folder",
    children: [
      {
        key: "1-0",
        id: "005",
        label: "document1.doc",
        icon: <i className="bi text-primary bi-file-earmark-richtext-fill"></i>,
        title: "Documents Folder",
      },
      {
        key: "1-1",
        id: "006",
        label: "documennt-2.doc",
        icon: <i className="bi text-primary bi-file-earmark-richtext-fill"></i>,
        title: "Documents Folder",
      },
    ],
  },
  {
    key: "2",
    label: "Downloads",
    icon: <i className="bi text-primary bi-folder-fill"></i>,
    title: "Downloads Folder",
    children: [],
  },
];

const TreeList = () => {
  return (
    <Router>
      <div className="container-fluid">
        <div className="row mt-3 d-flex flex-row justify-content-start">
          <div className="col-md-3 border-end " style={{ height: "100vh" }}>
            <Tree data={treeData} />
          </div>
          <div className="col-md-5">
            <Switch>
              <Route exact path="/document/:documentId">
                <Details />
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default TreeList;
