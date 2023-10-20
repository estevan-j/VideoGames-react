import { categories } from "../../constants/CategoriesVideoGames"
import { useContext } from "react";
import { VideoGamesContext } from '../../context/VideoGamesContext';
import './styles/CategoryGames.css';

const CategoryVideoGames = () => {
    const { setGenreGames } = useContext(VideoGamesContext);
    const categoriesGames = categories;


    const handleClickCategory = (genreGames: string) => {
        setGenreGames(genreGames);
    }

    return (
        <div className="container-categories">
            <h3>Categorias</h3>
            <ul>
                {
                    categoriesGames.map((genre: string) =>
                        <li id={genre} onClick={() => handleClickCategory(genre)}
                            className="list-category">
                            <a>{genre}</a>
                        </li>)
                }
            </ul>
        </div>
    )
}

export default CategoryVideoGames
