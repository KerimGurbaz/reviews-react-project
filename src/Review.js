import React, { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = ({ mydata }) => {
  const [person, setPerson] = useState(people)
  const random = Math.random * mydata.length;
  // const { id, name, job, image, text } = mydata;
  console.log(mydata);
  console.log(people);

  return (
    <div>
      {mydata.filter((item) => {random == item.id 
               const { id, name, job, image, text } = item;
        return(<div>
   
            <img src={text} alt="" />
        </div>) 
      })}

      <h2>review component</h2>
    </div>
  );
};

export default Review;
