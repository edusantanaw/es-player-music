import React from "react";
import { MenuContainer } from "./menu.syles";
import { Link } from "react-router-dom";
import { TbPlaylist } from "react-icons/tb";
import { BsFillMusicPlayerFill } from "react-icons/bs";
import { RiAlbumFill } from "react-icons/ri";

const Menu = () => {
  return (
    <MenuContainer>
      <span>Menu</span>
      <ul>
        <li>
          <Link to="/">
            <BsFillMusicPlayerFill />
            <span> Explore</span>
          </Link>
        </li>
        <li>
          <Link to="/playlist">
            <TbPlaylist /> <span>Playlists</span>
          </Link>
        </li>
        <li>
          <Link to="/albums">
            <RiAlbumFill /> <span>Albums</span>
          </Link>
        </li>
      </ul>
    </MenuContainer>
  );
};

export default Menu;
