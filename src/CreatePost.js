import React, { useState} from 'react'
import './App.css'
import Exmaple from './Exmaple';
//import Homepage from './Homepage'
import Amplify, { Storage } from 'aws-amplify'
import ReadmeStr from './README.md';
import { MdSend /* MdList */ } from 'react-icons/md'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

import awsConfig from './aws-exports'
Amplify.configure(awsConfig)

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

const mdStr = ReadmeStr.replace(/([\s\S]*)<!--dividing-->/, '').replace(/^\s+/, '');

const CreateBlog = () => {
  const [name, setName] = useState('')
  const [file, setFile] = useState('')
  const [response, setResponse] = useState('')
  const [blogheader,setBlogHeader] =useState('')
  const classes = useStyles();

  const onPostContent= (e) => {
  alert("data passed" + e);
  if(blogheader==='')
  alert("Title cannot be empty");
  }
  const onChange = (e) => {
    e.preventDefault()
    if (e.target.files[0] !== null) {
      setFile(e.target.files[0])
      setName(e.target.files[0].name)
    }
  }

  const onSubmit = (e) => {
    e.preventDefault()
    if (file) {
      Storage.put(name, file, {
        /* level: 'protected', */
        contentType: file.type,
      })
        .then((result) => {
          console.log("uploaded file"+result)
          setResponse(`Success uploading file: https://s3testf0469907738c4a80a801a945a30d27b9194824-dev.s3.ap-south-1.amazonaws.com/public/${name}!`)
        })
        .then(() => {
          document.getElementById('file-input').value = null
          setFile(null)
        })
        .catch((err) => {
          console.log(err)
          setResponse(`Can't upload file: ${err}`)
        })
    } else {
      setResponse(`Files needed!`)
    }
  }

  return   <div className='video-uploader'>
    <div className='video-uploader'>
        <form onSubmit={(e) => onSubmit(e)}>
        <p>
        <form className={classes.root} noValidate autoComplete="off">
      <TextField 
     id="blog-title"
     label="Blog Title"
     helperText="Meaning full blog header/ title"
     value={blogheader} 
			onChange={e => setBlogHeader(e.target.value)}
     variant="filled"
       />
    </form>
        </p>
        <Exmaple mdStr={mdStr} onPostContent={onPostContent}  />
          <p>
            <label className='select-label'>Select media file: </label>
          </p>
          <p>
            <input
              className='video-input'
              type='file'
              id='file-input'
              accept='image/*,txt/*,md/*,video/*'
              onChange={(e) => onChange(e)}
            />
          </p>
          <button type='submit' className='btn'>
            Upload <MdSend className='btn-icon' />
          </button>
        </form>
      </div>

      {response && (
        <div id='upload-status' className='upload-status'>
          {response}
        </div>
      )}
   
    {mdStr}
      </div>
}


export default CreateBlog