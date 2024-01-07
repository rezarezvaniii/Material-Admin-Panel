"use client"
import * as React from 'react';
import Header from "@/components/Header";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { useState } from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Snackbar from '@mui/material/Snackbar';
import Slide, { SlideProps } from '@mui/material/Slide';




interface Project {
  name: string;
  project: string;
  price: string;
}

const Payroll = () => {

  

    const [data , setData] = useState([
      {name:"Cosmetica" , project : "cosmetics business" , price : "25000"  },
      {name:"Print House" , project : "Printing business" , price : "10000"  },
      {name:"Agriculture" , project : "Printing business" , price : "46000"  },
      {name:"Crypto" , project : "Money business" , price : "12000"},

    ])

    const [successdelete , setSuccessdelete] = useState(false);
    const [errordelete , setErrordelete] = useState(false);



  const handleSuccessCloses = () => {
    setSuccessdelete(false);
  };


  const handleErrorCloses = () => {
    setErrordelete(false);
  };




    const [requiredform , setRequiredform] = useState(false)





    const createProject = () => {
      const projectName = (document.getElementById('name') as HTMLInputElement).value;
  const projectArea = (document.getElementById('area') as HTMLInputElement).value;
  const projectPrice = (document.getElementById('price') as HTMLInputElement).value;

  if (projectName && projectArea && projectPrice) {
    const newProject: Project = {
      name: projectName,
      project: projectArea,
      price: projectPrice,
    };

    setData(prevData => [...prevData, newProject]);
    setOpen(false);
  } else {
    setRequiredform(true)
  }
     
    };

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
    setRequiredform(false)
  };

  const handleClose = () => {
    setOpen(false);
    
  };

  const [deletepost, setDeletepost] = React.useState(false);

  const [deleteIndex, setDeleteIndex] = React.useState(-1);

  const handleClickOpenDelete = (index: number) => {
    setDeletepost(true);
    setDeleteIndex(index);
  };
  
  const handleCloseDelete = () => {
    setDeletepost(false);
  };


  const handleDelete = (index: number) => {
    const newData = [...data];
    newData.splice(index, 1);
    setData(newData);
    setSuccessdelete(true)
  };



    return ( 
        <>

        <div className="w-full px-4 mt-6">
          <p className="font-normal text-xl text-[#878787]">Balances</p>

          <div className="mt-4 w-full flex flex-wrap gap-6 ">
            {
              data.map((item , index) =>(
                <div className="w-[31.5%] max-[1150px]:w-[47%] max-[650px]:w-full mt-6 bg-white rounded-lg flex flex-col p-5 relative shadow-[0_35px_60px_-15px_rgba(76,103,100,0.1)]">
                <Tooltip placement="bottom-start" title="Delete">
                  <IconButton onClick={() => handleClickOpenDelete(index)} className="text-[#FF698D] absolute end-4 bottom-4">
                    <DeleteIcon />
                  </IconButton>
                </Tooltip>
                
              <p className="text-[#878787] font-bold text-base text-center">{item.name}</p>

              <p className="font-semibold mt-4 text-xl text-[#191919] ">{item.project}</p>

              <p className="font-normal text-[#9F9F9F] text-sm ">type</p>
              <p className="font-semibold text-xl text-[#191919] mt-4">${item.price.toLocaleString()}</p>
              <p className="font-normal text-[#9F9F9F] text-sm ">Total amount</p>
              <div className="w-full flex justify-evenly mt-6 ">
              <button className="text-white text-sm items-center rounded-lg justify-center px-4 py-2 font-medium bg-[#FF698D] flex p-2 ">
                Details
                <KeyboardArrowRightIcon/>
                
              </button>

              </div>
            </div>
              ))
            }
            
            <div className="w-[31.5%] max-[1150px]:w-[47%] max-[650px]:w-full mt-6 bg-white rounded-lg flex justify-center flex-col p-5 shadow-[0_35px_60px_-15px_rgba(76,103,100,0.1)]">
              
              <div className="w-full  flex justify-center flex-col items-center mt-6 ">
              <button onClick={handleClickOpen} className="text-white text-sm items-center rounded-md justify-center px-4 py-3 w-8/12 font-medium bg-[#FF698D] flex p-2 ">
                Add Project   
              </button>
              <button className="text-[#9F9F9F] text-sm items-center justify-center py-3 px-4 w-8/12 font-medium flex p-2 ">
                Details
                <KeyboardArrowRightIcon/>
                
              </button>
              </div>
            </div>


          </div>
        </div>





        <Dialog open={open} onClose={handleClose}>
        <DialogTitle>new project</DialogTitle>
        <DialogContent>
          <DialogContentText>
          Please complete the following form to create your new project:
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="project name"
            type="text"
            fullWidth
            variant="standard"
            required 
          />
          <TextField
            autoFocus
            margin="dense"
            id="area"
            label="Project area"
            type="text"
            fullWidth
            variant="standard"
            required 
          />
          <TextField
            autoFocus
            margin="dense"
            id="price"
            label="price project"
            type="number"
            fullWidth
            variant="standard"
            required 
          />
          {requiredform?
          <DialogContentText className='text-red-400'>
          required field
          </DialogContentText>
          :
          null
          }
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={createProject}>create</Button>
        </DialogActions>
      </Dialog>


      <Dialog
        open={deletepost}
        onClose={handleCloseDelete}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Use Google's location service?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            are you sure for delete this post?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={ ()=>{ handleCloseDelete() ;  setErrordelete(true)  }}>No</Button>
          <Button onClick={() => { handleDelete(deleteIndex); handleCloseDelete() }} autoFocus>
            Yes
          </Button>
        </DialogActions>
      </Dialog>'
      
      
      
      <Snackbar
                      open={successdelete}
                      onClose={handleSuccessCloses}
                     
                      message="Success: delete was successful"
                      
                      autoHideDuration={2000}
                      anchorOrigin={{
                        vertical: "top",
                        horizontal: "center"
                     }}
                      ContentProps={{
                        sx: {
                          height:"100%",
                          background: "green"
                        }
                      }}
                    />
                    
                    <Snackbar
                      open={errordelete}
                      onClose={handleErrorCloses}
                      
                      message="Errore: Delete was Failed"
                      
                      autoHideDuration={2000}
                      anchorOrigin={{
                        vertical: "top",
                        horizontal: "center"
                     }}
                      ContentProps={{
                        sx: {
                          height:"100%",
                          background: "red"
                        }
                      }}
                    />

          
            
        </>
     );
}
 
export default Payroll;