import React from "react";
import { Await, defer, useLoaderData } from "react-router-dom";
import Card from "./Card";
import CardSkeleton from "./CardSkeleton";
import getData from "./api";

export function loader() {
    return defer({ data: getData() })
}

export default function SkeletonPage() {
    const { data } = useLoaderData();

    return (
        <>
            <div className="container mt-5">
                <div className="row">
                    <div className="col">
                        <h1>Skeleton Page</h1>
                        <React.Suspense fallback={<CardSkeleton /> }>
                            <Await resolve={data} errorElement={<p>Error!</p>}>
                                {
                                    (data) => <Card {...data} />
                                }
                            </Await>
                        </React.Suspense>
                    </div>
                </div>
            </div>
        </>
    );
}