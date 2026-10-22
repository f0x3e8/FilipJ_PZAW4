import "./App.css";
import { useState } from "react";

import clockworkOrange from './assets/clockwork_orange.jpg';
import lighthouse from './assets/lighthouse.jpg';
import apocalypseNow from './assets/apocalypse_now.jpg';

import stranger from './assets/stranger.jpg';
import harryPotter from './assets/harry_potter.jpg';
import devils from './assets/devils.jpg';

import abbeyRoad from './assets/abbey_road.jpg';
import revolver from './assets/revolver.jpg';
import theDoors from './assets/the_doors.jpg';

interface MovieProps {
  poster: string;
  name: string;
  year: number;
  rating: number;
}

interface BookProps {
  cover: string;
  title: string;
  release: number;
  pages: number;
}

interface MusicProps {
  album_cover: string;
  album_name: string;
  band: string;
  genre: string;
  album_year: number;
  song_list: { song_title: string }[];
}

const Movies: MovieProps[] = [
  {
    poster: clockworkOrange,
    name: "Clockwork Orange",
    year: 1971,
    rating: 5,
  },
  {
    poster: apocalypseNow,
    name: "Apocalypse Now",
    year: 1979,
    rating: 9,
  },
  {
    poster: lighthouse,
    name: "The Lighthouse",
    year: 2019,
    rating: 3,
  },
]

const Books: BookProps[] = [
  {
    cover: stranger,
    title: "The Stranger",
    release: 1944,
    pages: 200,
  },
    {
    cover: harryPotter,
    title: "Harry Potter",
    release: 2000,
    pages: 300,
  },
  {
    cover: devils,
    title: "Devils",
    release: 1880,
    pages: 400,
  },
]

const Albums: MusicProps[] = [
  {
    album_cover: revolver,
    album_name: "Revolver",
    band: "The Beatles",
    genre: "Rock",
    album_year: 1966,
    song_list: [
      { song_title: "Taxman 2:36 min" },
      { song_title: "Eleanor Rigby 2:11 min" },
      { song_title: "I'm Only Sleeping 3:02 min" },
      { song_title: "Love You To 3:00 min" },
      { song_title: "Here, There and Everywhere 2:29 min" },
    ]},
  {
    album_cover: theDoors,
    album_name: "The Doors",
    band: "The Doors",
    genre: "Rock",
    album_year: 1967,
    song_list: [
      { song_title: "Break on Through (To the Other Side) 2:25 min" },
      { song_title: "Soul Kitchen 3:30 min" },
      { song_title: "The Crystal Ship 2:30 min" },
      { song_title: "Light My Fire 7:07 min" },
      { song_title: "The End 11:35 min" },
    ]},
  {
    album_cover: abbeyRoad,
    album_name: "Abbey Road",
    band: "The Beatles",
    genre: "Rock",
    album_year: 1969,
    song_list: [
      { song_title: "Come Together 4:19 min" },
      { song_title: "Something 3:02 min" },
      { song_title: "Maxwell's Silver Hammer 3:27 min" },
      { song_title: "Oh! Darling 3:27 min" },
      { song_title: "Octopus's Garden 2:51 min" },
      { song_title: "I Want You (She's So Heavy) 7:47 min" },
    ]}];

function Movie({poster, name, year, rating} : MovieProps) {
    return (
      <div>
        <img src={poster} alt={name} height="200" width="150" />
        <p>{name}</p>
        <p>{year}</p>
        <p>{rating}</p>
        {rating > 8 && <p>Polecany</p>}
      </div>
    );
}
function Book({cover, title, release, pages} : BookProps) {
  return (
    <div>
      <img src={cover} alt={title} height="200" width="150"/>
      <p>{title}</p>
      <p>{release}</p>
      <p>{pages}</p>
      {release < 2000 && <p>Klasyka</p>}
    </div>
  );
}
function Music({album_cover, album_name, band, genre, album_year, song_list} : MusicProps) {
  return (
    <div>
      <img src={album_cover} alt={album_name} height="200" width="200" />
      <p>{album_name}</p>
      <p>{band}</p>
      <p>{genre}</p>
      <p>{album_year}</p>
      <ol>
          {song_list.map(({song_title}) => (
            <li key={song_title}>{song_title}</li>
          ))}
      </ol>
      {song_list.length == 0 && <p>Brak Utworów</p>}
    </div>
  );
}

function App() {
  const [isMoviesOpen, setIsMoviesOpen] = useState(true);
  const [isBooksOpen, setIsBooksOpen] = useState(true);
  const [isMusicOpen, setIsMusicOpen] = useState(true);

  return (
    <div>
        <div>
            <h2 onClick={() => setIsMoviesOpen(!isMoviesOpen)}>
                {isMoviesOpen ? "▾" : "▸"} Movies
            </h2>

          {isMoviesOpen && Movies.sort((a, b) => a.name.localeCompare(b.name)).map((movie) => (
            <Movie
              poster={movie.poster}
              name={movie.name}
              year={movie.year}
              rating={movie.rating}
            />
          ))}
        </div>

        <div>
            <h2 onClick={() => setIsBooksOpen(!isBooksOpen)}>
                {isBooksOpen ? "▾" : "▸"} Books
            </h2>

          {isBooksOpen && Books.sort((a, b) => b.release - a.release).map((book) => (
            <Book
              cover={book.cover}
              title={book.title}
              release={book.release}
              pages={book.pages}
            />
          ))}
        </div>

        <div>
          <h2 onClick={() => setIsMusicOpen(!isMusicOpen)}>
                {isMusicOpen ? "▾" : "▸"} Music
          </h2>

          { isMusicOpen && Albums.map((album) => (
            <Music
              key={album.album_name}
              album_cover={album.album_cover}
              album_name={album.album_name}
              band={album.band}
              genre={album.genre}
              album_year={album.album_year}
              song_list={album.song_list}
            />
          ))}
        </div>

        <div>
          {Movies.filter((movie) => movie.year > 2010).map((movie) => (
            <Movie
              key={movie.name}
              poster={movie.poster}
              name={movie.name}
              year={movie.year}
              rating={movie.rating}
            />
          ))}
        </div>

        <div>
          {Albums.sort((a, b) => b.song_list.length - a.song_list.length).slice(0, 1).map((album) => (
            <Music
              key={album.album_name}
              album_cover={album.album_cover}
              album_name={album.album_name}
              band={album.band}
              genre={album.genre}
              album_year={album.album_year}
              song_list={album.song_list}
            />
            ))}
        </div>
    </div>
  );
}

export default App