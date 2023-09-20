import React from 'react'
import image from './organ-donation.jpg';
export default function Body() {
  return (
   <>
    <img class = "center" src={image} alt="organ donation" ></img>
    <br></br>
    <div class='textbox'>
    <p>
    <i>Organ donation is the selfless act of giving one's organs or tissues to save the lives of others who are in need.
      Organ donation can make a huge difference in someone's life and can even be the difference between life and death.
      There is a critical shortage of organ donors worldwide, and every person who donates their organs can help save up to 8 lives.
      Donating organs is a personal decision, but it can be one of the most meaningful and impactful things you ever do.
      If you are interested in becoming an organ donor, it's important to discuss your wishes with your family and loved ones, so they can honor your decision.
      Organ donation is a gift that keeps on giving, and it has the power to transform lives and bring hope to those in need.
      You don't have to be a doctor or a medical professional to save a life through organ donation. Anyone can become a donor and make a difference.
      Becoming an organ donor is a simple process that can be done online or through your local DMV. It only takes a few minutes to sign up and potentially save a life.
      </i></p>
      </div>

      <br></br>
      {/*embedded Youtube video*/}
      <iframe class="centervideo" src="https://www.youtube.com/embed/62jr1Ra6uP8" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>

      <br></br>
      {/*Qoute*/}
      <div class='textbox'>
      <p 
      style={{color:'darkgreen', fontSize:'17px'}}>
      <i>“You are a piece of the puzzle of someone else’s life. You may never know where you fit, but others will fill the holes in their lives with pieces of you.”</i></p>
      <p
      style={{color:'darkgreen', fontSize:'18px', textAlign:"right", marginLeft:'30%', fontStyle:'normal', fontWeight:'bold'}}>
      ~ Bonnie Arbon</p>
      </div>
      <br></br>
</>
    )
}