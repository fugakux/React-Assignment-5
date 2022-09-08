import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Article from "./components/article";
import ArticleList from "./components/articleList";
import useGetRequest from "./components/useGetRequest";
import Showcase from "./components/showcase";
import Footer from "./components/foooter";

function App() {
	const {
		data: articles,
		isLoading,
		errorMessage,
	} = useGetRequest("http://localhost:7000/articles/");

	return (
		<div className="App">
			<Router>
				<NavBar />
				<Showcase/>
				<ArticleList articles={articles} />
				<Footer/>
			</Router>
		</div>
	);
}

export default App;
