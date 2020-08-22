// Esta sera la playlist
import React from "react";
import {} from "@material-ui/core";

// Components

import NavBar from '../components/NavBar';
import PlaylistInput from "../components/PlaylistInput";
import TablePlaylist from "../components/TablePlaylist";
import TablePlaylistCreated from '../components/TablePlaylistCreated';

export const Playlist = () => {
  return (
    <div>
      <div>
          <NavBar />
      </div>
      <div>
        <center><PlaylistInput /></center>
      </div>
      <div>
        <TablePlaylist />
      </div>
      <br/>
      <div>
        <TablePlaylistCreated />
      </div>
    </div>
  );
};

export default Playlist;
