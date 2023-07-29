import React, { useEffect, useRef, useState } from "react";
import { useContext } from "react";
import { store } from "../context/store";
import { FaPhone, FaShop } from "react-icons/fa6";

const SecondCard = () => {
  const { image } = useContext(store);
  
  // +++++++++++++++++++++  useRef hooks
  const icon = useRef(null);
  const imgCard = useRef();
  const size = useRef();
  const left=useRef();
  const right=useRef();
  const top=useRef();
  const bottom=useRef();
  // +++++++++++++++++++++
  // +++++++++++++++++++
  const [selectedIcon, setSelectedIcon] = useState(null);
  let [x,setX]=useState(0);
  let [y,setY]=useState(0);
 

  useEffect(()=>{
    if(selectedIcon){
      selectedIcon.style.left = x - selectedIcon.getBoundingClientRect().width / 2 + "px";
      selectedIcon.style.top =y - selectedIcon.getBoundingClientRect().height / 2 + "px";
    }
  },[x,y])
  // +++++++++++++++++++
  const handleDragStart = (e) => {
    setSelectedIcon(e.target);
    size.current.style.visibility='visible';
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setX(e.clientX);
    setY(e.clientY);
  };
  
  const handleDrop = () => {
    imgCard.current.appendChild(selectedIcon);
    selectedIcon.style.left = x - selectedIcon.getBoundingClientRect().width / 2 + "px";
    selectedIcon.style.top =y - selectedIcon.getBoundingClientRect().height / 2 + "px";
    setSelectedIcon(null)
  };
  const handleLeftDown = () => {
   let interval= setInterval(()=>{
        if(x>974){
          setX(--x)
          console.log(x);
         }
      },100)
      left.current.addEventListener("mouseup",()=>{
       clearInterval(interval)
      })
  };
  
  const handleRightDown = () => {
    let interval= setInterval(()=>{
      if(x<1362){
        setX(++x)
       }
    },100)
    right.current.addEventListener("mouseup",()=>{
     clearInterval(interval)
    })
 };
 const handleTopDown = () => {
  let interval= setInterval(()=>{
    if(y>446){
      setY(--y)
     }
  },100)
  top.current.addEventListener("mouseup",()=>{
   clearInterval(interval)
  })
};
const handleBottomDown = () => {
  let interval= setInterval(()=>{
    if(y<663){
      setY(++y)
     }
  },100)
  bottom.current.addEventListener("mouseup",()=>{
   clearInterval(interval)
  })
};
  return (
    <div className="blog">
      <div ref={size} className="size">
        <button ref={left} onMouseDown={handleLeftDown} className="left">
          left:-
        </button>
        <span className="val">{x}</span>
        <button ref={right} onMouseDown ={handleRightDown} className="right">
          right: +
        </button>
        <button ref={top} onMouseDown={handleTopDown}  className="top">
          top:-
        </button>
        <span className="val">{y}</span>
        <button ref={bottom}  onMouseDown={handleBottomDown}  className="bottom">
          bottom: +
        </button>
      </div>


      <div className="card" onDragOver={handleDragOver} onDrop={handleDrop}>
        <div
          ref={imgCard}
          className="img-card"
          style={{ backgroundImage: "url(" + image[1] + ")" }}
        >
          <div className="list">
            <div style={{ display: "flex" }} className="contact-info">
              <span
                ref={icon}
                draggable={true}
                className="icon"
                onDragStart={handleDragStart}
              >
                <div style={{display:'flex'}} className="qutu">
                <FaShop />
                </div>
              </span>
              <span
                ref={icon}
                draggable={true}
                className="icon"
                onDragStart={handleDragStart}
              >
                <FaPhone />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondCard;
