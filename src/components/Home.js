import  React from "react";
import { Breakfast } from "./Breakfast";
import { Appetizes } from "./Appetizes";
import { Lunch } from "./Lunch";

export const Home = ({ tags }) => {
    return (
        <>
        <Appetizes tags={tags.appetizes} limit={3}/>
        {/* <Breakfast tags={tags.breakfast} limit={3} />
        <Lunch tags={tags.lunch} limit={3}/> */}
        </>
    )
}