import React from "react";

type TagProps = {
  children: React.ReactNode;
};

const Tag = (props: TagProps) => {
  return (
    <div className="tag p-1 gap-1 border-spacing-1">
      <a
        href={"/tags/" + props.children}
        className="inline-block px-3 py-1 rounded-full bg-gray-200 text-gray-800 hover:bg-gray-300 transition duration-300"
      >
        {props.children}
      </a>
    </div>
  );
};

export default Tag;
