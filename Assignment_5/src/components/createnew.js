import { useState } from "react";
import { useNavigate } from "react-router-dom";


const CreateNew = () => {
    const [headLine, setheadLine] = useState("");
    const [subText, setsubText] = useState("");
    const [Topic, setTopic] = useState("");
    const [Image_, setImage] = useState("");


    const createArticle = (e) => {
        e.preventDefault();
        
        const article = {headline: headLine, subtext: subText, topic: Topic, image: Image_};

        fetch("http://localhost:7000/articles", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(article)
        })
        .then(() => {
            window.location.reload();
        

        });

    }


    return (
        <div className="create">
            
            <h2>Create a new article</h2>
            <form>
                <label>Headline:</label>
                <input type="text" required=
                "true" value={headLine} 
                onChange={(e) => setheadLine(e.target.value)}></input>
                
                <label>Subtext:</label>
                <input type="text" required=
                "true" value={subText} 
                onChange={(e) => setsubText(e.target.value)}></input>

                <label>Topic</label>
                <select value={Topic}
                onChange={(e) => setTopic(e.target.value)}>
                    <option value=""> </option>
                    <option value="tech">Tech</option>
                    <option value="arts">Arts</option>
                    <option value="science">Science</option>
                    <option value="investing">Investing</option>
                    <option value="politics">Politics</option>
                    <option value="food">Food</option>
                    
                </select>
                <label>Image address/URL</label>
                <input type="text"  required=
                "true" value={Image_} 
                onChange={(e) => setImage(e.target.value)}></input>
                
                 <br></br>
                
                <button onClick={createArticle} style={{backgroundColor: "#6495ED"}}>Add Article</button> 
            </form>


        </div>

    );

}

export default CreateNew;