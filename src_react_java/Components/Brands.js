import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

export function Brands(props) {
    const [Product, setProduct] = useState([]);
    const { subcatid } = useParams();
    useEffect(() => {
        fetch("http://localhost:8080/api/category/" + subcatid)
            .then(res => res.json())
            .then((result) => { setProduct(result); }
            );
    }, []);

    return (
        <>
            <div className='catcontainer'>
                {Product.map(pro => (

                    <Link to={'/SubCategories/'+pro.prod_Id}>
                        <div className='citem'>
                            <img className='cimg' src={pro.catImgPath} ></img><br />
                            <label><b>{pro.categoryName}</b></label><br />
                        </div>
                       
                    </Link>

                ))}


            </div>
        </>
    );
}