import React, { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = ({ mydata }) => {
const [personIndex, setPersonIndex] = useState(0)  
  const { id, name, job, image, text } = people[personIndex];

  const checkNumber = (number) =>{
    if(number > people.length -1){
      return 0;
    }
    if(number < 0){
      return people.length - 1
    }
    return number;
  };





  const randomPerson = ()=>{
    let randomNumber = Math.floor(Math.random * people.length ) ;
    if (randomPerson === person){
      randomNumber = personIndex + 1
    }
    console.log(randomNumber);
  }

  return (
   <article>
    <div className="img-container">
      <img src={image} alt="" />
      
    </div>
   </article>
  );
};

export default Review;
