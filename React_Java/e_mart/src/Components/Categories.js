import { useState, useEffect } from "react";
import './Categories.css'
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";

export function Categories(props) {
    const [Category, setCategories] = useState([]);
    useEffect(() => {
        fetch("http://localhost:8080/api/category/" + 'null')
            .then(res => res.json())
            .then((result) => { setCategories(result); }
            );
    }, []);

    return (
        <div>
            <div className='catcontainer'>
                    {Category.map((cat) => (
                            <Link to={"/SubCategories/" + cat.cat_Id}>
                                <Card className="catcard">
                                    <Card.Body>
                                        <Card.Img className="catimg" src={cat.catImgPath}></Card.Img>
                                        <br/><br/>
                                        <label className="title">{cat.categoryName}</label>
                                    </Card.Body>
                                    
                                </Card>
                            </Link>
                            
                    ))}
            </div>
        </div>
    );
}