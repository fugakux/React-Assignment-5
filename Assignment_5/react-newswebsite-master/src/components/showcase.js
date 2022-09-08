import React, { useState } from "react";
import useGetRequest from "./useGetRequest";

const Showcase = ({ id }) => {
	

	const {
		data: article,
		isLoading,
		errorMessage,
	} = useGetRequest("http://localhost:7000/articles/" + id);

	return (
		
		<section className="showcase">
            <span className="topic-showcase">Art</span>
            <h1>An article about Art</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
              recusandae consequatur similique doloribus. Corporis, et a ullam
              praesentium facere veritatis veniam? Aperiam ipsa totam veniam,
              atque illo sed suscipit accusamus.
            </p>
            <button className="button">Learn More</button>
          </section>
	);
};

export default Showcase;
