import React, { useState } from "react";
import useGetRequest from "./useGetRequest";

const Article = ({ id }) => {
	

	const {
		data: article,
		
	} = useGetRequest("http://localhost:7000/articles/" + id);

	return (
		
		<article class="article">
			
			<img src={article.image} alt="" />
			<span className={`topic ${article.topic}`}>{article.topic}</span>
			<h3>
				<a href="">{article.headline}</a>
			</h3>
			<p>{article.subtext}</p>
		</article>
	);
};

export default Article;
