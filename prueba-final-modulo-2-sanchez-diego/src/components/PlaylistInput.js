import React from "react";

const PlaylistInput = (props) => {
  return (
    <input
      onChange={props.onChange}
      placeholder="Buscar"
      onKeyPress={props.handleInputKeyPress}
      value={props.inputValue}
    />
  );
};

export default PlaylistInput;
