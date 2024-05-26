import { useState } from "react";
import { BsGoogle } from "react-icons/bs";
import { useCreateUserWithEmailAndPassword, useSignInWithEmailAndPassword, useSignInWithGoogle,useUpdateProfile} from "react-firebase-hooks/auth"
import {  auth } from "../../firebase/firebase.config";
import { useNavigate } from "react-router-dom";
const Login = () => {
    const [login,setLogin] = useState(true);

    const [userForm,setUserForm] = useState({name:"",photo_url:'',email:'',password:'',confirm_pass:''})
    const navigate = useNavigate()
    const [signInWithGoogle, user] = useSignInWithGoogle(auth);
    const [updateProfile] = useUpdateProfile(auth);
    const [  createUserWithEmailAndPassword ] = useCreateUserWithEmailAndPassword(auth);
    const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth);

    const googleLogin = async () =>{
        try {
            await signInWithGoogle()
            if(user){
               return  navigate("/dashboard")
            }
        } catch (error) {
            console.log(error);
        }
    }

    const handelUserRegister = async () =>{
      
        const {name,email,password,photo_url,confirm_pass} = userForm
        try {
            if(name && email && password){
                if(password !== confirm_pass) return alert("password do not match");

                await createUserWithEmailAndPassword(email,password);
               const success =  await updateProfile({ displayName:name, photoURL:photo_url });
               if(success){
                navigate("/dashboard",{replace:true})
               }
            }
            
            
        } catch (error) {
                console.log(error);
        }   
        
    }
    
    const handelSignIn = async () =>{
        try {
            const {email,password}=userForm
            const result = await signInWithEmailAndPassword(email,password);
            if(result){
                return navigate("/dashboard",{replace:true})
            }
        } catch (error) {
            console.log(error);
        }
    }



    const handel_form_change = (e) =>{
        
        setUserForm(state => {
            const newItem = {...state};
            newItem[e.target.name] = e.target.value;
            return newItem;
        })
    }
    return (
        <div className="hero min-h-screen bg-base-200 p-8">
  <div className="hero-content grid grid-cols-2">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">{login ? "Login now!" : "Register Now!"}</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form className="card-body">
        {
            (!login) && <><div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input onChange={(e)=>handel_form_change(e)} value={userForm.name} type="text" name="name" className="input input-bordered" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo Url</span>
            </label>
            <input onChange={(e)=>handel_form_change(e)} value={userForm.photo_url} type="text" name="photo_url" className="input input-bordered" required />
          </div>

          </>
        }
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input onChange={(e)=>handel_form_change(e)} value={userForm.email} type="email" name='email'  className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input onChange={(e)=>handel_form_change(e)} value={userForm.password} type="password" name='password'  className="input input-bordered" required />
          <label className="label">
           {login &&  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>}
          </label>
        </div>
        {
            (!login) && <div className="form-control">
            <label className="label">
              <span className="label-text">confirm Password</span>
            </label>
            <input onChange={(e)=>handel_form_change(e)} value={userForm.confirm_pass} type="password" name='confirm_pass'  className="input input-bordered" required />
            
          </div>
        }
        <div className="form-control mt-6">
          {login ? <button type="button" onClick={handelSignIn} className="btn btn-primary">Login</button> : <button type="button" onClick={handelUserRegister} className="btn btn-primary">Register</button>}
        </div>
        <div className=" mt-6 flex justify-center">
          <button type="button" onClick={googleLogin} className="btn btn-error text-white btn-circle"><BsGoogle /></button>
          
        </div>
        <p onClick={()=> setLogin(!login)} className="label-text-alt link link-hover">{login ? "register Now!" : "alrady have an account ?"}</p>
      </form>
    </div>
  </div>
</div>
    );
};

export default Login;