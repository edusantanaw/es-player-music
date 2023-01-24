export const makeSongsStorage = () => {
    let songs = localStorage.getItem("@App:like");
    if (songs) {
      const parseSongs = JSON.parse(songs) as string[];
      return parseSongs;
    }
    return null;
  };