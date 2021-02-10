import React, { Component } from 'react';
import images from './backgroundimg.png'


function Card(){
return(
<div className="col-sm-9 col-xs-4 col-md-4 col-lg-3
col-10 space1">
<div className="card" >

<img src={images} className="img-fluid" alt="Responsive"/>
<div className="card-body">
<h5 className="card-title">WhatsApp Clone</h5>
<p className="card-text">Replica of WhatsApp</p>
<div className="mybuttons">
    <a href="https://github.com/shivam-pandey99/portfolio">See Code</a>
    <a href="https://github.com/shivam-pandey99/RThospital">Live</a>
</div>
</div>
</div>
</div>
)
}
const Sdata = [
    {
        imgsrc  : images,
        title : 'Web Development',
        projectname :"Socail SIte"

    },
    {
        imgsrc :images,
        title : 'App Development',
        projectname :"Socail SIte"
    },
    {
        imgsrc  : images,
        title : 'Web Development',
        projectname :"Socail SIte"

    },
    {
        imgsrc : images,
        title : 'App Development',
        projectname :"Socail SIte"
    }
]
class Project extends Component {
render() { 
return ( 
    <>
    <div className ="my-5" id="project">
    <h1 className="heading text-center">Projects</h1>
</div>

<div className="container-fluid mb-5">
    <div className="row">
    
        <div className="col-lg-9 col-md-10 col-sm-9 col-10 mx-auto">
        <div className="row gy-5 align-items-center justify-content-center">
       
        {Sdata.map((val,inde) =>{
                               return(
                               <Card shot={val.imgsrc}
                                    title ={val.title}
                                    project = {val.projectname}/>
                               )
                           })}
        </div>
        </div>
        </div>
    </div>
    </>
)
}
}
 
export default Project;