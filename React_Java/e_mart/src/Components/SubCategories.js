import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import './SubCategories.css'
import Card from "react-bootstrap/Card";

export function SubCategories(props) {
    const [Category, setCategory] = useState([]);
    const { subcatid } = useParams();
    useEffect(() => {
        fetch("http://localhost:8080/api/category/" + subcatid)
            .then(res => res.json())
            .then((result) => { setCategory(result); }
            );
    }, []);

    return (
        <>
            <div className='catcontainer'>
                {Category.map(cat => (

                    <Link to={'/Product/' + cat.catmaster_Id}>
                        <Card className="subcard">
                            <Card.Body>
                                <Card.Img className="subimg" src={cat.catImgPath}></Card.Img>
                                <br /><br />
                                <label className="title">{cat.categoryName}</label>
                            </Card.Body>

                        </Card>

                    </Link>

                ))}


            </div>
        </>
    );
}