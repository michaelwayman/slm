import React from 'react'


const ProductDetailHeading = ({productImage, productName, productDescription}) => (
    <div className="productDetailSection padTop-32">
        <div className="productImage">
            <img src="./images/docker-thumb.png"/>
        </div>
        <div className="productDescription ">
            <h3 className="padBottom-8">Name of Product</h3>
            <h4 className="padBottom-8">Subheading</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur lacinia, ipsum sit amet dictum euismod, nisi felis tincidunt mauris, et eleifend enim nunc a velit. Aliquam varius tellus enim, ac dictum velit consectetur quis. Sed a quam ac nisi lacinia hendrerit. Nunc egestas elit a sem ultricies egestas eu sit amet mauris. Aliquam auctor nisi nisi, vel convallis nisi consectetur eget. Etiam nisi ipsum, fringilla ut volutpat ac, ultricies sed orci. Integer aliquam, ante vitae fermentum vehicula, augue diam ullamcorper lacus, sit amet porttitor sem dolor quis dui. Maecenas rutrum velit ut ipsum eleifend, et faucibus leo tincidunt. Etiam sit amet odio vestibulum, condimentum nibh eget, suscipit odio.</p>
        </div>
    </div>
);

export {ProductDetailHeading}