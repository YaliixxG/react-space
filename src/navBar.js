import React, { Component } from 'react';
import axios from 'axios';

// const id= 51815657
const host = 'https://api.douban.com/v2/'

class Navbar extends Component{

    constructor(props){
      super(props)
      this.readData = []
      this.movieData = []
      this.cityData = []
      this.newsData = []
      this.musicData = []
    }

    componentDidMount (){
 axios.get(host+'book/user/Yalii1006/collections').then(res=>{
     this.setState({
        readData: this.readData = res.data.collections
      })     
 })

 axios.get(host+'movie/top250').then(res=>{
  this.setState({
    movieData: this.movieData = res.data.subjects
   })     
}) 

axios.get(host+'event/list?loc=118267').then(res=>{
 this.setState({
  cityData: this.cityData = res.data.events
  })     
})

axios.get('https://news-at.zhihu.com/api/4/themes').then(res=>{
 this.setState({
  newsData: this.newsData = res.data.others
  })     
})

axios.get('https://c.y.qq.com/v8/fcg-bin/fcg_v8_toplist_cp.fcg?g_tk=5381&uin=0&format=json&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1&tpl=3&page=detail&type=top&topid=27&_=1519963122923').then(res=>{
this.setState({
  musicData: this.musicData = res.data.songlist
  })     
})
}

go = (x) =>{
  window.location.href = x
 }
             
 render(){
     let readArr = [],
         movieArr = [],
         cityArr = [],
         newsArr = [],
         musicArr = []
     this.readData.map(item=> {       
        return  readArr.push(<div className="artical-read" key={item.id} onClick={()=>this.go(item.book.alt)}>
              <img src={item.book.images.small} alt="读书" />
              <p className="cont">{item.book.origin_title}</p>
              <p className="cont">{item.book.title}</p>
              <p className="cont">{item.book.author[0]}</p>
              <p className="cont">{item.book.publisher}</p> 
        </div>)        
      })
      this.movieData.map(item=> {       
        return  movieArr.push(<div className="artical-movie" key={item.id} onClick={()=>this.go(item.alt)}>
              <img src={item.images.small} alt="电影" />
              <p className="cont">{item.original_title}</p>
              <p className="cont">{item.title}</p>
              <p className="cont">{item.directors[0].name}</p>
              <p className="cont">{item.year}</p> 
        </div>)        
      })
      this.cityData.map(item=> {       
        return  cityArr.push(<div className="artical-city" key={item.id} onClick={()=>this.go(item.alt)}>
              <img src={item.image} alt="同城" />
              <p className="cont">{item.title}</p>
              <p className="cont">{item.begin_time}</p>
              <p className="cont">{item.end_time}</p>
              <p className="cont">{item.address}</p> 
        </div>)        
      })

      this.newsData.map(item=> {       
        return  newsArr.push(<div className="artical-news" key={item.id}>
              <h3 className="cont">"{item.name}"</h3>
              <span>{item.description}</span>
        </div>)        
      })

      this.musicData.map(item=> {       
        return musicArr.push(<div className="artical-music">
              <span className="cont">TOP:{item.cur_count}</span>
              <span className="cont">{item.data.songname}</span>
              <span className="cont">{item.data.singer[0].name}</span>
              <span className="cont">专辑：《{item.data.albumname}》</span>              
        </div>)        
      })


    return(
       <div className="navBar-wrapper">
         <nav className="navBar-wrap">
         <a>音乐</a>
         <a>读书</a>
         <a>电影</a>
         <a>同城</a>
         <a>知乎</a>
        </nav>
        <ul>
            <li className="navBar-music">{musicArr}</li>
             <li className="navBar-read">{readArr}</li>
             <li className="navBar-movie">{movieArr}</li>             
             <li className="navBar-city">{cityArr}</li>
             <li className="navBar-team">{newsArr}</li>
         </ul>
       </div>
        
    )
 }  
}

export default Navbar