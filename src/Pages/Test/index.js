import React from "react";
import Photo from "../../assets/Image.svg";
import Cart from "../../assets/cart-basket.svg";
import User from "../../assets/user.svg";
import Location from "../../assets/location.svg";
import First from "../../assets/first-card-image.svg";
import Second from "../../assets/second-card-image.svg";
import Third from "../../assets/third-card-image.svg";

const TestCode = () => {
  const myArray = ["I", "love", "chocolate", "frogs"];
  // const result = myArray.join();
  // console.log(myArray.join(" "));
  const myText = "I am a string";
  // const newString = myText.replace("string", "total energy")
  const age = 20;
  const num = 30

  if(age >= 10 && num <= 10){
    console.log("I am young")
  } if (age >= 10 && num >= 10){
    console.log("That is my age")
  }
  return (
    <>
      <div className="container">
        <div className="container-logo">
          <img src={Photo} alt="logo" />
        </div>
        <div className="container-text">
          <h3>
            Everything your store <br />
            needs to stand out
          </h3>
          <p>
            With ShopTop's integrated management system,
            <br />
            you can take your business to another level
          </p>
          <button>Get Started</button>
        </div>
      </div>
      <div>
        <div className="second-hero">
          <div>
            <h3>More than a system</h3>
            <p>
              With ShopTop, you will be able to access the <br /> performance of
              all your stores, from the number of daily <br />
              sales to knowing the amount of expenses and their <br />
              salaries. You will be able to control your business <br />
              from wherever you are and also understand what is <br />
              missing for your store to be a great success.
            </p>
          </div>
          <div className="image-wrap">
            <img src={Cart} alt="logo" />
          </div>
        </div>
        <div className="card-container">
          <div className="card-text-wraper">
            <div className="image">
              <img src={User} alt="logo" />
            </div>
            <div>
              <h4>800+</h4>
              <p>Users</p>
            </div>
          </div>
          <div className="card-text-wraper">
            <div className="image">
              <img src={Location} alt="logo" />
            </div>
            <div>
              <h4>340+</h4>
              <p>Locations</p>
            </div>
          </div>
          <div className="card-text-wraper">
            <div className="image">
              <img src={User} alt="logo" />
            </div>

            <div>
              <h4>5000+</h4>
              <p>Servers</p>
            </div>
          </div>
        </div>
      </div>
      <div className="third-hero">
        <div className="text">
          <p>Do More with the shoptop</p>
          <h3>Features</h3>
        </div>
        <div className="card-container">
          <div className="card">
            <img src={First} alt="" />
            <div className="card-text">
            <h3>Level Up</h3>
            <p>
              Using all our services, you will increase the quality of your
              store, attracting more and more customers
            </p>
            </div>
          </div>
          <div>
            <img src={Second} alt="" />
            <div className="card-text">
            <h3>Monitor performance</h3>
            <p>
              Using all our services, you will increase the quality of your
              store, attracting more and more customers
            </p>
            </div>
          </div>
          <div>
            <img src={Third} alt="" />
            <div className="card-text">
            <h3>From wherever you are</h3>
            <p>
              Using all our services, you will increase the quality of your
              store, attracting more and more customers
            </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TestCode;
