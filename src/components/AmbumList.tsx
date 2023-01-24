import React from "react";
import { albumList } from "../utils/albumList";
import { AlbumlistContainer } from "./styles/albumlist.style";

const Albums = () => {
  return (
    <AlbumlistContainer>
      <h2>Albums</h2>
      <ul>
        {albumList.map((album, key) => (
          <li key={key}>
            <img src={album.image} alt={album.name} />
            <div className="infos">
              <span>{album.name}</span>
            </div>
          </li>
        ))}
      </ul>
    </AlbumlistContainer>
  );
};

export default Albums;
