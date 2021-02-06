import React, { Component } from 'react';
import react from './react.png'
import html  from './html.png';
import css  from './css.png';
import js  from "./js.png";
import bootstrap from "./bootstrap.png";
const CardToll= (props) =>{
    return (
 <div className="col-sm-2 col-10 space " style={{width:"auto"}}>
 
 <div className="colu">
        <div className="myimg">
  <img src={props.shot} className="img-fluid" alt="Responsive"/>
  
  <h1 className="text-center title">{props.title}</h1>
  </div>
</div>
</div>
    )
}

const Tool = [
    {
        imgsrc  : html,
        title : 'HTML',
     

    },
    {
        imgsrc : css,
        title : 'CSS',
        
    },
    {
        imgsrc : js ,
        title : 'JavaScript',
        
    },
    {
        imgsrc  : react,
        title : 'ReactJs',
        

    },
    {
        imgsrc : bootstrap,
        title : 'BootStrap-4/5',
        
    },
    
]
class Skills extends Component {
    render() { 
        return (
<div>
            <div className ="my-5" id="skill">
                <h1 className="text-center font">Skills</h1>
                <p className="text-center h4" >Languages and Technologies that i have learned and applied into my project</p>
           </div>
          
           <div className="container-fluid mb-5">
                <div className="row">
                    <div className="col-lg-7 col-sm-10 col-xs-4 col-md-8 mx-auto text-center">
                    <div className="row gy-2 align-items-center justify-content-center">
                           {Tool.map((val,inde) =>{
                               return(
                               <CardToll shot={val.imgsrc}
                                    title ={val.title}
                                    project = {val.projectname}/>
                               )
                           })}
                        </div>  

                    </div>
                    </div>
                </div>
                </div>
          );
    }
}
 
export default Skills;