import { useEffect } from "react";
import "./PokemonDetails.css";
import { useTypeSelector } from "../hooks/useTypeSelector";
import { useDispatch } from "react-redux";
import { fetchPokemonDetails } from "../store/action-creator/pokemon";
import { useParams } from "react-router-dom";
import AbilityTooltip from "../component/AbilityTooltip";

const PokemonDetails = () => {
    const params = useParams();
    const name = params.name || "not_found";
    const { data, error, loading } = useTypeSelector(
        (state) => state.pokemonDetails
    );
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPokemonDetails(name));
    }, [dispatch]);

    if (loading) {
        return <h1>Loading...</h1>;
    }

    if (error) {
        return <h1>{error}</h1>;
    }

    return (
        <>
            {!loading && (
                <div className="card">
                    <img
                        className="card-img"
                        src={data.sprites.front_default}
                        alt={data.name}
                    />

                    <div className="card-body">
                        <h2>{data.name}</h2>
                        <article className="desc">
                            <h3>Common</h3>
                            <div className="desc__common">
                                <span>Height</span>
                                <span>{data.height}</span>
                            </div>
                            <div className="desc__common">
                                <span>Weight</span>
                                <span>{data.weight}</span>
                            </div>
                        </article>
                        <article className="desc">
                            <h3>Stats</h3>
                            {data.stats.map((stat) => (
                                <div
                                    className="desc__stats"
                                    key={stat.stat.name}
                                >
                                    <span>{stat.stat.name}</span>
                                    <span>{stat.base_stat}</span>
                                </div>
                            ))}
                        </article>
                        <article className="desc">
                            <h3>Types</h3>
                            <div className="desc__types">
                                {data.types.map((type) => (
                                    <span key={type.type.name} className={"type-" + type.type.name}>
                                        {type.type.name}
                                    </span>
                                ))}
                            </div>
                        </article>
                        <article className="desc">
                            <h3>Abilities</h3>
                            {data.abilities.map((ability) => (
                                <AbilityTooltip name={ability.ability.name} url={ability.ability.url} key={ability.ability.name} />
                            ))}
                        </article>
                    </div>
                </div>
            )}
        </>
    );
};

export default PokemonDetails;
