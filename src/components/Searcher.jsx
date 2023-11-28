import { Input } from "antd";
import { useDispatch } from "react-redux";
import { setFilter } from "../slices/dataSlice";

const Searcher = () => {

    const dispatch = useDispatch();

    const handleSearch = (e) => {
        dispatch(setFilter(e.target.value));
    };

    return <Input.Search
        placeholder="Buscar..."
        style={{margin:'1rem'}}
        onChange={handleSearch}
    />
};

export default Searcher;