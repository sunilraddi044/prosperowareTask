import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./Tree.css";

const Tree = ({ data = [] }) => {
  return (
    <div className="d-tree">
      <ul className="d-flex d-tree-container flex-column">
        {data.map((tree) => (
          <TreeNode node={tree} />
        ))}
      </ul>
    </div>
  );
};

const TreeNode = ({ node }) => {
  const [childVisible, setChildVisiblity] = useState(false);
  const [activeFolder, setActiveFolder] = useState("");

  const hasChild = node.children ? true : false;

  const chilVisibilityHandler = (e) => {
    setActiveFolder(e.target.id);
    setChildVisiblity((prev) => !prev);
  };

  console.log(activeFolder);

  return (
    <li key={node.key}>
      <div className="d-flex " onClick={chilVisibilityHandler}>
        {hasChild ? (
          <div>
            <i className="bi bi-arrow-down-short text-primary"></i>
          </div>
        ) : (
          <div>
            <i
              className="bi bi-arrow-right-short text-primary"
              style={{ color: "#555" }}
            ></i>
          </div>
        )}

        <div
          className={`col `}
          id={node.key}
          key={node.key}
          style={{ color: "#555", cursor: "pointer" }}
        >
          {node.icon}
          {hasChild && node.label}
          {!hasChild && (
            <Link
              className={`links `}
              id={node.key}
              to={`/document/${node.id}`}
            >
              {node.label}
            </Link>
          )}
        </div>
      </div>

      {hasChild && childVisible && (
        <ul>
          <Tree key={node.key} data={node.children} />
        </ul>
      )}
    </li>
  );
};

export default Tree;
