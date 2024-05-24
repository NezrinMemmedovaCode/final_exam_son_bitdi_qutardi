import { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async"
import "./Home.scss"
import { MainContext } from "../../context/MainProvider";
import { Link } from "react-router-dom";

function Home() {
    const [product, setproduct] = useState([]);
    const { addbasket, addwish } = useContext(MainContext)
    // const [search, setsearch] = useState("");
    useEffect(() => {
        fetch("http://localhost:3000/product")
            .then(res => res.json())
            .then(data => setproduct(data))


    }, []);
    // function az(params) {
    //     product.sort((a, b) => (a[params] > b[params]) ? 1 : ((b[params] > a[params]) ? -1 : 0))

    // }



    return (
        <div>
            <>
                <Helmet>
                    <title> home</title>

                </Helmet>
            </>


            <div className="home1">
                <h1>Welcome to</h1>
                <h2>PATO PLACE</h2>

            </div>
            <div className="home2">
                <div className="box">

                    <h2>Italian Restaurant</h2>
                    <h1>WELCOME</h1>
                    <p>Donec quis lorem nulla. Nunc eu odio mi. Morbi nec lobortis est. Sed fringilla, nunc sed imperdiet lacinia, nisl ante egestas mi, ac facilisis ligula sem id neque.</p>
                </div>

                <img src="https://preview.colorlib.com/theme/pato/images/our-story-01.jpg" alt="" />


            </div>




            {/* <button onClick={() => az("name")}>button</button> */}
            {/* <input className="filter" placeholder="search by name" value={search} onChange={(e) => setsearch(e.target.value)} type="text" /> */}
            <div className="cards">
                {product
                    // .filter((x) => x.name.toLowerCase().includes((search.toLowerCase())))
                    .map((x) => <div className="card" key={x.id}>

                        <img src={x.img} alt="" />
                        <h1>{x.name}</h1>
                        <p>
                            {x.title}
                        </p>
                        <button className="basket" onClick={() => addbasket(x)}><i className="fa-solid fa-cart-shopping"></i></button>
                        <button className="wish" onClick={() => addwish(x)}><i className="fa-solid fa-heart"></i></button>
                        <Link to={`/Detail/${x._id}`}>
                            <button className="detail">LearnMore <i className="fa-solid fa-arrow-right"></i></button>
                        </Link>
                    </div>)}
            </div>

            <div className="home4">
                <div className="text">

                    <h2>Customers Say</h2>
                    <h1>REVIEW</h1>
                </div>
                <img src="https://preview.colorlib.com/theme/pato/images/avatar-05.jpg" alt="" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt perspiciatis sunt ut accusantium. Fugiat, minima. Lorem ipsum dolor sit amet, consectetur adipisicing elit. ?</p>
                <div className="icon">
                    <i className="fa-solid fa-star"></i>

                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>

                </div>
                <p>Marie Simmons-New york</p>




            </div>
            <div className="home5">
                <h2>Latest News</h2>
                <h1>THE BLOG</h1>

                <div className="cards">
                    <div className="card">
                        <img src="https://preview.colorlib.com/theme/pato/images/blog-01.jpg" alt="" />
                        <h1>BEST PLACES FOR WINE</h1>
                        <p>Phasellus lorem enim, luctus ut velit eget, con-vallis egestas eros.</p>
                    </div>
                    <div className="card">
                        <img src="https://preview.colorlib.com/theme/pato/images/blog-02.jpg" alt="" />
                        <h1>EGGS AND CHEESE</h1>
                        <p>Duis elementum, risus sit amet lobortis nunc justo condimentum ligula, vitae feugiat</p>
                    </div>
                    <div className="card">
                        <img src="https://preview.colorlib.com/theme/pato/images/blog-03.jpg" alt="" />
                        <h1>STYLE THE WEDDING PARTY</h1>
                        <p>Sed ornare ligula eget tortor tempor, quis porta tellus dictum.</p>
                    </div>
                </div>

            </div>
            <div className="home6">
                <div className="boxx">

                    <h1>SPECIALS SIGN UP</h1>
                    <input className="email" placeholder="Email Address" type="text" />
                    <button className="sign">Sign-Up</button>
                </div>


            </div>
            <div className="footer">
                <div className="footer1">
                    <div className="footer11">

                        <h1>CONTACT US</h1>
                        <p> 8th floor, 379 Hudson St, New York, NY 10018</p>
                        <p> (+1) 96 716 6879</p>
                        <p>contact@site.com</p>
                    </div>
                    <div className="footer12">
                        <h1>OPENING TIMES</h1>
                        <p>09:30 AM – 11:00 PM Every Day</p>

                    </div>


                </div>

                <div className="footer2">
                    <div className="footer21">
                        <h1>LATEST TWITTER</h1>
                        <span >@colorlib</span>
                        <p>Activello is a good option. It has a slider built into that displays the featured image in the slider.</p>
                        <span>https://buff.ly/2zaSfAQ</span>

                    </div>
                    <div className="footer22">

                        <p>Activello is a good option. It has a slider built into that displays the featured image in the slider.</p>
                        <span>https://buff.ly/2zaSfAQ</span>

                    </div>

                </div>
                <div className="footer3">
                    <h1>GALLERY</h1>
                    <div className="images">
                        <img src="https://preview.colorlib.com/theme/pato/images/our-menu-08.jpg" alt="" />
                        <img src="https://preview.colorlib.com/theme/pato/images/our-story-01.jpg" alt="" />
                        <img src="https://preview.colorlib.com/theme/pato/images/our-menu-01.jpg" alt="" />
                        <img src="https://preview.colorlib.com/theme/pato/images/our-menu-05.jpg" alt="" />
                        <img src="https://preview.colorlib.com/theme/pato/images/our-menu-10.jpg" alt="" />
                        <img src="https://preview.colorlib.com/theme/pato/images/our-menu-16.jpg" alt="" />
                        <img src="https://preview.colorlib.com/theme/pato/images/event-02.jpg" alt="" />
                        <img src="https://preview.colorlib.com/theme/pato/images/photo-gallery-thumb-04.jpg" alt="" />
                        <img src="https://preview.colorlib.com/theme/pato/images/photo-gallery-08.jpg" alt="" />
                        <img src="https://preview.colorlib.com/theme/pato/images/blog-03.jpg" alt="" />
                        <img src="https://preview.colorlib.com/theme/pato/images/blog-02.jpg" alt="" />
                        <img src="https://preview.colorlib.com/theme/pato/images/our-menu-10.jpg" alt="" />


                    </div>

                </div>

            </div>

            <div className="finaly">
                <div className="iconsss">
                    <i className="fa-brands fa-facebook-f"></i>
                    <i className="fa-brands fa-twitter"></i>
                    <i className="fa-brands fa-x-twitter"></i>

                </div>

                <p>@ 2017 Colorlib. Get The Theme</p>

            </div>
        </div>
    )
}

export default Home