import React, { Component } from 'react';
import axios from 'axios';

class Artical extends Component {
    render(){
        readData.map((item) => {
            return (
              <div className="artical-read">
                  <img src={item.book.images.small} />
                  <p>{item.book.origin_title}</p>
                  <p>{item.book.title}</p>
                  <p>{item.book.author[0]}</p>
                  <p>{item.book.publisher}</p> 
              </div> 
            )
          })}
    }


export default Artical