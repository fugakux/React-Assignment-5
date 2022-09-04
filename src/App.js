import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";

import Articles from "./articles.json";

function App() {
  const [articles, SetArticles] = useState();
  const [counter, SetCounter] = useState(3);
  useEffect(() => {
    let FilterArticles = [];
    for (let index = 0; index < 3; index++) {
      FilterArticles.push(Articles[index]);
    }
    SetArticles(FilterArticles);
  }, []);
  console.log(articles);

  const LoadMoreArticles = () => {
    if (counter < 9) {
      let FilterArticles = [];
      for (let index = 0; index < counter + 1; index++) {
        FilterArticles.push(Articles[index]);
      }
      SetCounter(counter + 1);
      SetArticles(FilterArticles);
    }
  };
  return (
    <div className="App">
      <div>
        <nav className="nav">
          <a href="index.html">
            <img className="logo" src="images/logo.png" alt="logo" />
          </a>
          <h1 id="logo_text">Apple news</h1>
          <ul>
            <li>
              <a href="#art">Art</a>
            </li>
            <li>
              <a href="#politics">Politics</a>
            </li>
            <li>
              <a href="#food">Food</a>
            </li>
            <li>
              <a href="#sports">Sports</a>
            </li>
            <li>
              <a href="#science">Science</a>
            </li>
            <li>
              <a href="#tech">Tech</a>
            </li>
          </ul>
        </nav>
        <hr style={{ margin: "auto" }} />
        <main>
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
          <section className="articles">
            {articles
              ? articles.map((item) => (
                  <article className="block">
                    <img src={"images/" + item.image} alt="art" id="art" />
                    <br />
                    <span className="topic-art">{item.category}</span>
                    <h3 id="texts">
                      <a href>{item.title}</a>
                    </h3>
                    <p id="texts">{item.desription}</p>
                  </article>
                ))
              : null}
          </section>
          <button onClick={LoadMoreArticles} className="load-btn">
            Add New Article
          </button>
        </main>
        <footer>
          <div className="row">
            <div
              className="column"
              style={{ backgroundColor: "rgb(51,51,51)" }}
            >
              <img
                className="first_image"
                style={{ width: "100px" }}
                src="images/download.png"
              />
              <h1 className="first_text">Apple News</h1>
              <img />
              <p className="first_text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et ea
                impedit libero, beatae animi provident nesciunt molestias ipsam
                nemo ad.
              </p>
            </div>
            <div
              className="column"
              style={{ backgroundColor: "rgb(51,51,51)" }}
            >
              <h2>Subscribe to our Newsletter</h2>
              <p className="news_sub_text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et ea
                impedit libero, beatae animi provident nesciunt molestias ipsam
                nemo ad. Lorem ipsum dolor sit amet, consectetur adipisicing
                elit. Et ea impedit libero, beatae animi provident nesciunt
                molestias ipsam nemo ad.
              </p>
              <form>
                <input type="textbox" placeholder="Enter your email address" />
                <button
                  className="sub_button"
                  style={{ backgroundColor: "red" }}
                >
                  Subscribe
                </button>
              </form>
            </div>
            <div
              className="column"
              style={{ backgroundColor: "rgb(51,51,51)" }}
            >
              <h2 className="contacts">Connect with us</h2>
              <ul>
                <li className="contacts">
                  <a className="footer-links" href="#">
                    Contact
                  </a>
                </li>
                <li className="contacts">
                  <a className="footer-links" href="#">
                    Careers
                  </a>
                </li>
                <li className="contacts">
                  <a className="footer-links" href="#">
                    Subscriptions
                  </a>
                </li>
                <li className="contacts">
                  <a className="footer-links" href="#">
                    Help
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
