
export type ICategoryGames = {
  genre: string;
};

export interface ICardVideoGame {
  id: string;
  title: string;
  thumbnail: string;
  genre: string;
  platform: string;
}


export type VideoGameContexType = {
  genreGames : string,
  setGenreGames : (value: string) => void
}

export type GameContexType = {
  titleGame : string,
  setTitleGame : (value: string) => void
}

export type IDetailVideoGame = {
  id: string,
  title: string,
  thumbnail: string,
  description: string,
  platform: string,
  publisher: string,
  developer: string,
  release_date: string,
  genre: string,
  status: string,
  game_url: string
}