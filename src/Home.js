import React from 'react';
import './Home.css';
import Product from './Product';

const Home = () => {
    return (
        <div className="home">
            <div className="home_container">
                <img className="home_image" src="http://socialmarketingwriting.com/wp-content/uploads/2012/07/amazon-facebook-cover.jpg" alt=""/>
                <div className="home_row">
                    <Product id="123" title="The lean startUp" price={29.99} image='http://1.bp.blogspot.com/-T-d3JPMr-Uk/UPshLuidy6I/AAAAAAAAFbU/vOiHd0qgnC4/s1600/lean-startup_book-cover.jpeg' rating={5}></Product>
                     <Product id="124" title="The lean startUp" price={29.99} image='http://1.bp.blogspot.com/-T-d3JPMr-Uk/UPshLuidy6I/AAAAAAAAFbU/vOiHd0qgnC4/s1600/lean-startup_book-cover.jpeg' rating={5}></Product>
                </div>
                <div className="home_row">
                    <Product id="125" title="The lean startUp" price={29.99} image='http://1.bp.blogspot.com/-T-d3JPMr-Uk/UPshLuidy6I/AAAAAAAAFbU/vOiHd0qgnC4/s1600/lean-startup_book-cover.jpeg' rating={5}></Product>
                    <Product id="126" title="The lean startUp" price={29.99} image='http://1.bp.blogspot.com/-T-d3JPMr-Uk/UPshLuidy6I/AAAAAAAAFbU/vOiHd0qgnC4/s1600/lean-startup_book-cover.jpeg' rating={5}></Product>
                     <Product id="127" title="The lean startUp" price={29.99} image='http://1.bp.blogspot.com/-T-d3JPMr-Uk/UPshLuidy6I/AAAAAAAAFbU/vOiHd0qgnC4/s1600/lean-startup_book-cover.jpeg' rating={5}></Product>
                </div>

                <div className="home_row">
                     <Product id="128" title="The lean startUp" price={29.99} image='http://1.bp.blogspot.com/-T-d3JPMr-Uk/UPshLuidy6I/AAAAAAAAFbU/vOiHd0qgnC4/s1600/lean-startup_book-cover.jpeg' rating={5}></Product>    
                </div>
            </div>
        </div>
    );
};

export default Home;