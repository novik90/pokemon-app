import { useTypeSelector } from "../hooks/useTypeSelector";

const ComparePage = () => {

    const {data} = useTypeSelector(state => state.compare)

    console.log(data)

    return (
        <div>
            <h1>Compare Page</h1>
        </div>
    );
};

export default ComparePage;
