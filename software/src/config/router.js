import { BrowserRouter, Link, Route, Router, Routes } from "react-router-dom";
import Home from "../screens/Home";
import About from "../screens/About";
import Posts from "../screens/ApiPost";
import SinglePost from "../screens/Singlepost";
import Comments from "../screens/Comments";
import CommentsForm from "../screens/Commentsform";
import Dashboard from "../screens/Dashboard";
import SignUp from "../screens/Signup";
import Login from "../screens/Login";
import ProtectedRoute from "./protectedroute";
import Admindashboard from "../screens/Admindashboard";
import Institute from "../screens/Admindashboardscreens/Institute";

function AppRouter() {
  return (
    <>
      <BrowserRouter>
        <nav>
          <Link to="/">Home</Link>
          <Link to="about">About</Link>
          <Link to="post">Posts</Link>
          <Link to="signup">SignUp</Link>
          <Link to="login">LogIn</Link>
          <Link to="dashboard">Dashboard</Link>
          <Link to="Admindashboard">Admindashboard</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="dashboard/*" element={<ProtectedRoute Component={Dashboard}/>}/>
          <Route path="dashboard" element={<Dashboard/>}/>
          <Route path="dashboard/*" element={<ProtectedRoute Component={Admindashboard}/>}/>
          <Route path="Admindashboard" element={<Admindashboard/>}/>
          <Route path="../screens/Admindashboardscreens/Institute.js" element={<Institute />} />
          <Route path="about" element={<About />} />
          <Route path="post" element={<Posts />} />
          <Route path="singlepost/:id" element={<SinglePost />} />
          <Route path="comments" element={<Comments />} />
          <Route path="commentform" element={<CommentsForm />} />
          <Route path="signup" element={<SignUp/>} />
          <Route path="login" element={<Login/>} />
          <Route path="commentform/:id" element={<CommentsForm />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default AppRouter;