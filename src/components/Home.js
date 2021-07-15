import  React from "react";
import { Breakfast } from "./Breakfast";
import { Appetizer } from "./Appetizer";
import { Lunch } from "./Lunch";

export const Home = ({ tags }) => {
    return (
        <>
        <Appetizer tags={tags.appetizer} limit={3}/>
        {/* <Breakfast tags={tags.breakfast} limit={3} />
        <Lunch tags={tags.lunch} limit={3}/> */}
        </>
    )
}