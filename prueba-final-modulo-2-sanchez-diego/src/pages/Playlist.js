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
    <div className="playlist__box">
      <div>
          <NavBar />
      </div>
      <div className="playlist__component">
          <ProyectPlaylist />
      </div>
      <br/>
      <div className="playlist__component">
          <TablePlaylistCreated />
      </div>
      <br/>
    </div>
  );
};

export default Playlist;
