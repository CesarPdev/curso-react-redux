import { useDispatch } from "react-redux";
import { Card } from "antd";
import Meta from "antd/es/card/Meta";
import StarButton from "./StarButton";
import { setFavorite } from "../slices/dataSlice";

const PokemonCard = ({ name, image, types, id, favorite }) => {

    const dispatch = useDispatch();

    const handleOnFav = () => {
        dispatch(setFavorite({ pokemonId: id }));
    }

    return (
        <Card
            title={name}
            cover={<img src={image} alt={name} />}
            extra={<StarButton isFavorite={favorite} onClick={handleOnFav}/>}
        >
            <Meta description={renderTypes(types)}/>
        </Card>
    )
};

const renderTypes = (types) => {
    return types.map(type => type.type.name).join(", ");
};

export default PokemonCard;