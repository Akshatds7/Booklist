import React from "react";

const KebabMenu = ({ onEdit, onAdd, onDelete }) => {
  return (
    <div className="kebab-menu">
      <div className="kebab-menu__icon">⋮</div>
      <div className="kebab-menu__dropdown">
        <div className="kebab-menu__dropdown-item" onClick={onEdit}>
          Edit
        </div>
        <div className="kebab-menu__dropdown-item" onClick={onAdd}>
          Add
        </div>
        <div className="kebab-menu__dropdown-item" onClick={onDelete}>
          Delete
        </div>
      </div>
    </div>
  );
};

export default KebabMenu;