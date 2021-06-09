import React, { useState } from 'react'
import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
//import Homepage from './Homepage'
import CreateBlog from './CreatePost';
import BlogReviewCard from './ListBlogs';
import Amplify, { Storage } from 'aws-amplify'
import {
  AmplifyAuthenticator,
  AmplifySignOut,
  AmplifySignIn,
  AmplifySignUp,
} from '@aws-amplify/ui-react'
import { MdSend /* MdList */ } from 'react-icons/md'
import BlogHeader from './BlogHeader';

//import awsConfig from './aws-exports.js'
//Amplify.configure(awsConfig)

const App = () => {
  const [name, setName] = useState('')
  const [file, setFile] = useState('')
  const [response, setResponse] = useState('')

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
  
  return (
    <AmplifyAuthenticator>
      <AmplifySignIn
        headerText='Blog Editor, Sign-In with Your E-Mail Address'
        slot='sign-in'
      />
      <AmplifySignUp
        headerText='Blog Editor, Sign-Up with Your Valid E-Mail Address'
        slot='sign-up'
      />
     
      <div className='header'>
      
        <h2>
          <a href='/'>Edit and Manage Your MD Blogs</a>
        </h2>
        <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/manage">Manage</Link>
            </li>
            <li>
              <Link to="/create">Create Post</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/manage">
            <BlogReviewCard />
          </Route>
          <Route path="/create">
            <CreateBlog />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>

      </div>
    
      <div className='sign-out'>
        <AmplifySignOut />
      </div>
    </AmplifyAuthenticator>
  )
}

function Home() {
  return <h2>Home</h2>;
}

function Manage() {
  return <h2>Manage Posts</h2>;
}

export default App