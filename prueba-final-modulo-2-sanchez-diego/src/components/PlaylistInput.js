import React from "react";

const PlaylistInput = (props) => {
  return (
    <input
      onChange={props.handleInputChange}
      placeholder="Buscar"
      onKeyPress={props.handleInputKeyPress}
      value={props.inputValue}
    />
  );
};

export default PlaylistInput;
