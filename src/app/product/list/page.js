"use client"
import {useEffect} from "react";
import useListData from "@/hooks/useListData";
import {Card, CardBody, CardFooter, CardText, CardTitle} from "reactstrap";


export default function ProductList() {
    const {getData, data} = useListData("product/get-list");
//
    useEffect(() => {
        getData("product/get-list");
    }, []);
    console.log(data)
    return (
        <>
            <div className="d-flex flex-wrap justify-content-center">
                {data?.map((product) => (
                <Card
                     key={product.id}
                    className="m-2"
                    style={{
                        width: "18rem",
                    }}
                >
                    <img alt="Sample image" src="https://picsum.photos/300/200"/>
                    <CardBody>
                        <CardTitle tag="h2">name</CardTitle>
                        <CardText>
                            <span className="h5">Category:</span>
                            <br/>
                            category name
                        </CardText>
                    </CardBody>
                    <CardFooter>
                        <span className="h5">{product.name}</span>
                    </CardFooter>
                </Card>
                ))}
            </div>
        </>
    );
}

