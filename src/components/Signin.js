import React,{useState} from "react";
import { Link,useNavigate } from "react-router-dom";
import axios from "axios";
// import "./Signin.css";
import "./Login.css";

const Signin = () => {
  const [data,setData]= useState({
    Name:'',
    phoneNumber:'',
    email:'',
    password:''

});
  const [error, setError] = useState("");

const navigate = useNavigate(); 
const handleChange=(e)=>{

setData({...data, [e.target.name]: e.target.value})

}


const handleSubmit=async (e)=>{

e.preventDefault(); 
try{

const url= 'http://localhost:8000/api/users';

const {data:result}= await axios.post(url, data);

console.log(result.message); 
navigate('/login');

}catch(error){

setError('dev error' +error);
}
}
  return (
    <div className="logBody">
      <div className="loG ">
        
        <div className="l1">
          <img src="https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-83.jpg?size=626&ext=jpg" alt="no img" className="img-fluid" />
        </div>


        <div className="formBody">
          <h1>Sign Up</h1>    
          <form  action="" onSubmit={handleSubmit} >

            <label htmlFor="" style={{paddingRight:"250px"}} >Name:</label>
            <input style={{width:"320px"}}
              className="form-control"
              type="text"
              name="Name"
              id=""
              value={data.Name}
              onChange={handleChange}
              placeholder="FirstName"
              required
            />

            {/* <label htmlFor="" style={{paddingRight:"230px"}}>LastName:</label>
            <input
              className="form-control"
              type="text"
              name=""
              id=""
              placeholder="LastName"
              required
            /> */}

            <label htmlFor="" style={{paddingRight:"175px"}}>Phone number:</label>
            <input
              className="form-control "
              type="number"
              name="phoneNumber"
              id=""
              placeholder="Phone number"
              value={data.phoneNumber}
              onChange={handleChange}
              required
            />

            <label htmlFor="" style={{paddingRight:"245px"}}>E-mail:</label>
            <input
              className="form-control"
              type="email"
              name="email"
              id=""
              placeholder="abc@gmail.com"
              value={data.email}
              onChange={handleChange}
              required
            />

            <label htmlFor="" style={{paddingRight:"210px"}}>password:</label>
            <input
              className="form-control mb-2"
              type="password"
              name="password"
              id=""
              placeholder="Create a Strong Password"
              value={data.password}
              onChange={handleChange}
              required
            />
            <input type="checkbox" name="" id="" /> <b>I agree terms & Conditions</b>

            <Link to='/Login' ><button className="btn btn-warning p-2 mt-3 mb-3 w-50" type="submit">Register</button></Link>
            <h5>Or Continue With</h5>
            <div className="gf">
            <a href="https://accounts.google.com/v3/signin/identifier?dsh=S-1710777005%3A1687169558675177&continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&ifkv=Af_xneF9RpVAZ37mMEaxZmbqtNFYp_3U76DhPVpoaJHLEK4qA2VXlcVOVWcxSQ2Uw5op35Ec1-3ygw&rip=1&sacu=1&service=mail&flowName=GlifWebSignIn&flowEntry=ServiceLogin"><button className="btn btn-outline-danger mt-2"> <i class="bi bi-google px-1"></i> Google </button></a>
            <a href="https://www.facebook.com/"> <button className="btn btn-outline-primary mt-2"> <i class="bi bi-facebook fb px-1"></i> Facebook </button></a>
            </div>
          {error && <div>{error}</div>}
          </form>
              
              <Link to='/Login'><button>Home</button></Link>
        </div>
        
      </div>
    </div>
  );
          
};

export default Signin;
