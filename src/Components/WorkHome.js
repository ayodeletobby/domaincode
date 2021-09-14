import { react } from '@babel/types'
import { icons } from 'antd/lib/image/PreviewGroup'
import React, {useState} from 'react';
import "./Work.css";
import {MdCancel} from "react-icons/md";
import {ImQuotesLeft, ImQuotesRight} from "react-icons/im";
import img from "../img/1.jpg";
import img1 from "../img/2.jpg";
import img2 from "../img/3.jpg";
import img3 from "../img/4.jpg";
import img4 from "../img/5.jpg";

import moment from 'moment';

const WorkHome = () => {

  const [data, setdata]=useState ([
    {
      id: 1,
      name: "Toba",
      quote: " It is nice finding that place where you can just go and relax. ...",
      time: Date.now(),
      avatar: img,
    },

    {
      id: 2,
      name: "Shola",
      quote: " It is nice to be important, but it's more important to be nice. .... ...",
      time: Date.now(),
      avatar: img1,
    },

    {

      id: 3,
      name: "Bukunmi",
      quote: " Be nice to people on your way up because you'll meet them on your way down. ...",
      time: Date.now(),
      avatar: img2,
    },

    {

      id: 4,
      name: "Damilola",
      quote: " Life is too short not to celebrate nice moments!. ...",
      time: Date.now(),
      avatar: img3,
    },

    {

      id: 5,
      name: "Ibrahim",
      quote: "It's nice to just embrace the natural beauty within you ...",
      time: Date.now(),
      avatar: img4,
    
      
    },
  ]);

    return (
            <div className= "container">
              <div className= "container_wrapper">
                   { data.map((props)=> {
                     return (
                      <div className= "container_card" >
                      <div
                       className= "container_cardRow">
                         <div
                          className="container_cardRowCancel">
                           <MdCancel />
                           </div>
                         <img className="container_cardRowAvatar" alt="img" src={props.avatar} />
                       </div>
                       <div className="container_cardQuote">
                         <div>
                           <ImQuotesRight/>
                         </div>
                         <div> {props.quote} </div>
                         <div>
                           <ImQuotesLeft/>
                         </div>
                        </div>
                       <div className= "container_cardName">{props.name}</div>
                        <div className="container_cardTime">{""}>
                        {moment(props.time).fromNow()}
                        </div>
                    </div>
                    
                     );
                        })
                   }
              </div>
           </div>
    );
};

export default WorkHome
