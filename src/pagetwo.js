import React from 'react'
import './pages.css';
import one from './one.png';
import closebtn from './closebtn.png';
import iconone from './iconone.png';
import icontwo from './icontwo.png';
import iconthree from './iconthree.png';
import iconfour from './iconfour.png';
import propic from './propic.png';
import arwone from './arwone.png';
import arwtwo from './arwtwo.png';
import categ from './categ.png';
import fourarws from './fourarws.png';



const task = {

  "tasks": [
    {
      "task_id": 18882,
      "task_title": "Explore the world of management",
      "task_description": "As a project manager, you play an important role in leading a project through initiation, planning, execution, monitoring, controlling and completion. How? Do you want to manage each and every step of your life?",
      "status": "notworkyet",
      "assets": [
        {
          "asset_id": 18883,
          "asset_title": "Technical Project Management",
          "asset_description": "Story of Alignment\r\nScope of Agility\r\nSpecific Accountable \r\nStaggering Approach\r\n\r\n",
          "asset_content": " https://www.youtube.com/embed/TiMRwri1xJ8",
          "asset_type": "display_asset",
          "asset_content_type": "video"
        },
        {
          "asset_id": 18884,
          "asset_title": "Threadbuild",
          "asset_description": "Watch the video and thread build, and jot out key threads while watching that video.",
          "asset_content": " ",
          "asset_type": "input_asset",
          "asset_content_type": "threadbuilder"
        },
        {
          "asset_id": 18885,
          "asset_title": "Structure you pointers ",
          "asset_description": "Write a 400-500 word article, from your thread. Publish your understanding, and showcase your learning to the entire world.",
          "asset_content": " ",
          "asset_type": "input_asset",
          "asset_content_type": "article"
        },
        {
          "asset_id": 18886,
          "asset_title": "4SA Method",
          "asset_description": "To explore more read more",
          "asset_content": " https://dtthon.deepthought.education/sharer?id=01aa3cff-db8e-8d9d-afc0-1671715937878",
          "asset_type": "display_asset",
          "asset_content_type": "article"
        }
      ]
    }
  ],
  "tid": 2085,
  "timestamp": 1672891849700,
  "title": "Technical Project Management",
  "type": "project",
  "uid": 100,
  "viewcount": 0,
  "publishedAt": 1672893847792
}




const pagetwo = () => {


  const taskTitle = task.tasks[0].task_title;
  const taskDescription = task.tasks[0].task_description;
  const assetTitle = task.tasks[0].assets[0].asset_title;
  const assetDescription = task.tasks[0].assets[0].asset_description;
  const assetContent = task.tasks[0].assets[0].asset_content;



  return (
    <div>
    <div>
      <div className="row">
        <div className="col-6">
          <p className="main-heading">Techinical Project Managment</p>
        </div>
        <div className="col-6">
          <button className="btn btn-primary btn-sm  task-submit">Submit Task</button>
        </div>
      </div>
    </div>

    
    <div className="halfcard">
      <h6 className="card-header bg-dark p-2" style={{ color: "white",height:"50px" , borderRadius: "0px 20px 0px 0px"}}>Jounrney board</h6>

      <div className="card-body fs-7" style={{fontSize:"small"}}>
        <div className="ratio ratio-16x9">
          <ul>
            <li><h6 className="mt-2">{taskTitle}</h6></li>
        
            <li>
                Techinical Project Managment
            </li>

            
            <li>
                Thread build
            </li>
            
            <li>
                Structure your pointers
            </li>
            <li>
             4SA Method
            </li>
        </ul>

        </div>
      </div>
    </div>
    <div className="card one">
      <div className="card-header bg-dark" style={{ height: "50px", borderRadius: "0px 30px 0px 0px" }}>

      </div>
      <div className="card-body">
        <div className="box-one"><img src={one} className="mt-3"></img></div>
      </div>
    </div>

    <div className="explore">
      <h5 style={{ textAlign: "left" }}><b>{taskTitle}</b></h5>
      <p className="e-text">As a project manager, you play an important reole in leading a project through initiation, planning, execution, monitoring, controlling and completion. How? Do you want to manage each and every step of your life?</p>
    </div>


    <div className="card two">
      <div className="card-header bg-dark" style={{ height: "50px", borderRadius: "30px 30px 0px 0px", color: "white" }}>
        <p className="card-text" style={{ lineHeight: "34px", letterSpacing: "0.03em" }}>Notice Board</p>
        <img className="closebtn" src={closebtn}></img>


      </div>
      <div className="card-body">

      </div>
    </div>


   


    <div className="card three">
      <h6 className="card-header bg-dark" style={{ color: "white" }}>{task.tasks[0].assets[0].asset_title}</h6>
      <p className="card-text mt-3"><b>Description:</b><small style={{ color: "black", textAlign: "left" }}>{task.tasks[0].assets[0].asset_description}</small></p>

      <div className="card-body">
        <div className="ratio ratio-16x9">
          <iframe width="853" height="480" src="https://www.youtube.com/embed/3mc9q4cFtPc" title="Tech for NonTech Folks" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
      </div>
    </div>

    <div className="card four">
      <h6 className="card-header bg-dark" style={{ color: "white" }}>{task.tasks[0].assets[1].asset_title} <i className="fa-solid fa-circle-exclamation fontone"></i></h6>
      <p className="card-text mt-3"><b>Description:</b><small style={{ color: "black", textAlign: "left" }}> {task.tasks[0].assets[1].asset_description}</small> <hr></hr></p>

      <div className="card-text">
        <div className="row">
          <div className="col-3">
            <img src={propic}></img>
          </div>
          <div className="col-4">
            <p><b>Thread A</b></p>
          </div>



          <div className="accordion subthreadone" id="accordionExample" style={{ height: "30px" }}>
            <div className="accordion-item">
              <div className="card-header">
                <p style={{ fontSize: "small" }}>Sub thread 1</p>

              </div>

              <div className="accordion-body">
                <textarea className="form-control fm-one p-2" placeholder="Enter text here" style={{ fontSize: "small" }}></textarea>
              </div>

            </div>

          </div>



          <div className="accordion subthreadtwo" id="accordionExample" style={{ height: "30px" }}>
            <div className="accordion-item">
              <div className="card-header">
                <p style={{ fontSize: "small" }}>Sub Interpretation 1</p>

              </div>

              <div className="accordion-body">
                <textarea className="form-control fm-one p-2" style={{ fontSize: "small" }} placeholder="Enter text here" ></textarea>
              </div>

            </div>

          </div>

          <div className="row icons">
            <div className="col-3">
            </div>
            <div className="col-1">
              <img src={iconone}></img>
            </div>
            <div className="col-1">
              <img src={icontwo}></img>
            </div>
            <div className="col-1">
              <img src={iconthree}></img>
            </div>
            <div className="col-1">
              <img src={iconfour}></img>
            </div>
            <div className="col-3">
              <img src=""></img>
            </div>
            <div className="col-3">
              <img src=""></img>
            </div>

          </div>

          <div className="dropdown catlogone">
            <a className="btn btn-secondary dropdown-toggle" style={{ fontSize: "xx-small" }} href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
              Select categ
            </a>

            <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
  <li><a className="dropdown-item" href="#">Action</a></li>
  <li><a className="dropdown-item" href="#">Another action</a></li>
  <li><a className="dropdown-item" href="#">Something else here</a></li>
</ul>
          </div>


          <div className="dropdown catlogtwo">
            <a className="btn btn-secondary dropdown-toggle" style={{ fontSize: "xx-small" }} href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
              Select Process
            </a>

            <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
  <li><a className="dropdown-item" href="#">Action</a></li>
  <li><a className="dropdown-item" href="#">Another action</a></li>
  <li><a className="dropdown-item" href="#">Something else here</a></li>
</ul>
          </div>


          <div className="btn-group subthread">
            <button style={{ fontSize: "xx-small" }} type="button" className="btn btn-primary" aria-expanded="false">
              Subthread
            </button>

          </div>

          <div className="accordion lastone" id="accordionExample" style={{ height: "30px" }}>
              <div className="accordion-item">
                <div className="card-header">
                  <p style={{ fontSize: "small" }}>Summary for thread A</p>
                </div>
                <div className="accordion-body">
                  <textarea className="form-control fm-one p-2 lt" placeholder="Enter text here" style={{ fontSize: "small", position: 'absolute', top: "148%", width: "420px", left: "14px", boxShadow:"399px" ,height:"65px" }}></textarea>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>



    <div className="card second-set" style={{ height: "540px" }}>
      <h6 className="card-header bg-dark" style={{ color: "white" }}>{task.tasks[0].assets[2].asset_title}<i className="fa-solid fa-circle-exclamation fontone"></i></h6>
  
      <p className="card-text mt-3"><b>Description:</b><small style={{ color: "black", textAlign: "left" }}>{task.tasks[0].assets[2].asset_description}</small></p>
      <hr></hr>
      <div className="card-body">
        <h6 style={{ textAlign: "left" }}>Title</h6>


        <div className="accordion" id="accordionExample" style={{ height: "30px" }}>
          <div className="accordion-item">
            <div className="card-header">
              <p style={{ fontSize: "small" }}></p>

            </div>
          </div>
        </div>
        <br></br>
        <h6 style={{ textAlign: "left" }} className="pt-3">Content</h6>

        <div className="accordion" id="accordionExample" style={{ height: "30px" }}>
          <div className="accordion-item">
            <div className="card-header">
              <p className="text-muted" style={{ fontSize: "small" , textAlign:"left" }}>

                <span className='p-2 content'>File</span>
                <span className='p-2 content'>View</span>
                <span className='p-2 content'>Insert</span>
                <span className='p-2 content'>Format</span>
                <span className='p-2 content'>Tools</span>
                <span className='p-2 content'>Table</span>
                <span className='p-2 content'>Help</span>

              </p>
              <div>
                <img src={arwone} className="arw p-2 " style={{position:"absolute",left:"35px"}}></img>
                <img src={arwtwo} className="arw p-2 " style={{position:"absolute",left:"65px"}}></img>
                <img src={fourarws} className="arw p-2 " style={{position:"absolute",left:"95px"}}></img>
          <div className="paragraph">
            Paragraph
          </div>

            <b>...</b>
                
              </div>

            </div>



          </div>

        </div>
  

      </div>

      <div className="accordion categorydiv" id="accordionExample" style={{position:"absolute", top:"390px"}}>
          <div className="accordion-item">
            <div className="card-header" style={{height:"150px"}}>
              <p style={{ fontSize: "small" }}></p>

            </div>
          </div>
        </div>
    </div>

{/* 
fourth card */}

    <div className="card third-set" style={{ height: "540px" }}>
      <h6 className="card-header bg-dark" style={{ color: "white" }}>{task.tasks[0].assets[3].asset_title} <i className="fa-solid fa-circle-exclamation fontone"></i></h6>
  
      <p className="card-text mt-3"><b>Description:</b><small style={{ color: "black", textAlign: "left"}}>{task.tasks[0].assets[2].asset_description} </small></p>
      <hr></hr>
      <div className="card-body">
      
        <div className="accordion" id="accordionExample" style={{ height: "30px" }}>
          <div className="accordion-item">
            <div className="card-header">
              <p style={{ fontSize:"small" ,textAlign:"left"}}><img className="p-1"src={categ}></img> Introduction</p>

            </div>

          </div>

          <br></br>
            <p style={{fontSize:"small", textAlign:"left"}}>The 4SA Method, How to bring a idea into progress? </p>
<p className="seemore text-muted">See More</p>
        </div>
        <br></br>

        <div className="accordion" id="accordionExample" style={{ height: "30px" ,position:"absolute", top:"320px",width:"420px"}}>
          <div className="accordion-item">
            <div className="card-header">
             
            <p style={{ fontSize:"11px" ,textAlign:"left"}}><img className="p-1"src={categ}></img> Thread A</p>
           
            </div>
            
          </div>
          <p  style= {{fontSize:"11px", textAlign:"left" }}className="mt-2">How are you going to develop your stratergy ? Which method are you going to use to develop a stratergy ? What if the project is lengthy?</p>
          <p className="seemore text-muted">See More</p>
        </div>
       
        <div className="accordion" id="accordionExample" style={{ position:"absolute", top:"470px",width:"420px"}}>
          <div className="accordion-item">
            
          <p style={{textAlign:"left",fontSize:"small"}}><b>Example 1</b></p>    
            
            
          </div>
         
          <p style={{fontSize:"small"}}>You have concept, How will you put into progress?</p>
        </div>
 
      </div>

    </div>



  </div>

  )
}

export default pagetwo;




