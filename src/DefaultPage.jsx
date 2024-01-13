import { useLoaderData } from "react-router-dom";
import Card from "./Card";
import getData from "./api";

export async function loader() {
    return await getData();
}

export default function DefaultPage() {
    const data = useLoaderData();

    return (
        <>
            <div className="container mt-5">
                <div className="row">
                    <div className="col">
                        <h1>Default Page</h1>
                        <Card {...data} />
                    </div>
                </div>
            </div>
        </>
    );
}