import PokemonList from "./PokemonList";
import classes from "./Home.module.css";

const Home = () => {
    return (
        <div className={classes.container}>
            <PokemonList />
        </div>
    );
};

export default Home;
