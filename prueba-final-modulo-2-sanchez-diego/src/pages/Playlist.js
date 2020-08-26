// Esta sera la playlist
import React from "react";
import {} from "@material-ui/core";

// Components

import NavBar from '../components/NavBar';
import PlaylistInput from "../components/PlaylistInput";
import TablePlaylist from "../components/TablePlaylist";
import TablePlaylistCreated from '../components/TablePlaylistCreated';
import ProyectPlaylist from '../components/proyectPlaylist';

export const Playlist = () => {
  return (
    <div>
      <div>
          <NavBar />
      </div>
      <br/>
      <div>
        <ProyectPlaylist/>
      </div>
    </div>
  );
};

export default Playlist;
