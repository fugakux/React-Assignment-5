import Article from "./article";

const ArticleList = ({ articles }) => {
	return (
		<section className="articles">
			{articles.map((article) => (
				<Article id={article.id} />
			))}
		</section>
	);
};

export default ArticleList;
