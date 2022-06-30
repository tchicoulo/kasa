import React from "react";

const Tag = (tagname) => {
  console.log(tagname);
  return (
    <div className="tag">
      <span>{tagname.tag}</span>
    </div>
  );
};

export default Tag;
