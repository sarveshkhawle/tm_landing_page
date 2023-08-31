import { useState } from "react"
import { toast } from "react-toastify"
import Swal from 'sweetalert2'

const Form = ()=>{
   const [firstName, setfirstName] = useState("") 
   const [lastName, setLastName] = useState("")
   const [phoneNo, setphoneNo] = useState("")
   const [email, setemail] = useState("")
   const [collegeName, setcollegeName] = useState("")
   const [courseInterested1, setcourseInterested1] = useState("")
   const [courseInterested2, setcourseInterested2] = useState("")
   const [courseInterested3, setcourseInterested3] = useState("")   
   const [term_condition, setterms_condition] = useState(false) 
const handleClick = (e)=>{
    e.preventDefault()
    let data = {firstName, lastName, phoneNo, email, collegeName, courseInterested1, courseInterested2, courseInterested3}
    console.log(data)



    fetch("http://localhost:8080/enquiry/add", {
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(data)
    }).then(()=>{
        if(!firstName || !lastName  ||!email || !phoneNo || !collegeName )
        {

            toast.error("Please fill up all the fields")
        }
        else if( !courseInterested1 && !courseInterested2 && !courseInterested3){
            toast.error("Please select atleast one course")
        }
        else if(!term_condition){
            toast.error("Please Agree Terms And conditions")
        }
       else{
        Swal.fire(
            
            'Congratulations!' ,
            "You're enrolled! Workshop details coming via email soon."
          )
          setLastName("")
          setfirstName("")
          setphoneNo("")
          setemail("")
          setcollegeName("")

          setcourseInterested2("")
          setcourseInterested3("")
          setcourseInterested1("")
          setterms_condition("")


          
       }

    })
}
return(

<div id="main-div">
<div className="form-div-main">
       <div className="heading-div">
        <div id="workshop-name">
        <h2>Our Workshop is about cutting-edge Technologies & Innovations. <br /> Let's learn and embrace your future  with us.......</h2>

        </div>
       
       </div>
        <div className="form-div">
<form id="form" noValidate autoComplete="off">
    <div id="form-heading">
    <h4> Registration Form</h4>

    </div>
    <fieldset>
    <input type="text" placeholder="First Name" value={firstName} onChange={(e)=>setfirstName(e.target.value)}/>  
    </fieldset>
    <fieldset>
    <input type="text" placeholder="Last Name" value={lastName} onChange={(e)=>setLastName(e.target.value)}/>  
    </fieldset>
    <fieldset>
    <input type="text" placeholder="Phone No" value={phoneNo} onChange={(e)=>setphoneNo(e.target.value)} />  
    </fieldset>
    <fieldset>
    <input type="email" placeholder="Email" value={email} onChange={(e)=>setemail(e.target.value)}/>  
    </fieldset>
    <div>
    <fieldset>
    <input type="text" placeholder="College Name" value={collegeName} onChange={(e)=>setcollegeName(e.target.value)}/>  

</fieldset>

   <h6 className="heading"> Workshop Interested</h6>

    </div>
    <div id="check-input">


    <fieldset>
<h6 className="course-inter"> Course Interested 2</h6>

<input type="checkbox" id="mern" value="full-stack-with-mern" checked={courseInterested2} onChange={(e) => setcourseInterested2(e.target.value)} />
<label htmlFor="mern">MERN Stack</label>


</fieldset>

<fieldset>
<h6 className="course-inter"> Course Interested 1</h6>
<input type="checkbox" id="dataScience" value="data-science" checked={courseInterested1} onChange={(e) => setcourseInterested1(e.target.value)} />
<label htmlFor="dataScience">Data Science</label>

</fieldset>
<fieldset>
<h6 className="course-inter"> Course Interested 3</h6> 
<input type="checkbox" id="java" value="full-stack-with-java" checked={courseInterested3} onChange={(e) => setcourseInterested3(e.target.value)} />
<label htmlFor="java">Java Full Stack</label>
</fieldset>
    </div>
<fieldset id="terms-condition-field">
    <span id="checkbox-span">
    <input type="checkbox" name="terms-condition" className="terms-condition"  checked={term_condition} onChange={()=>{setterms_condition(!term_condition)}} />

    </span>
    <span id="terms-span">
    I agree to receive information regarding my submitted Registration by signing up on TechMomentum 
</span>
</fieldset>
    
    <input type="submit" value="submit" onClick={(e)=>{handleClick(e)}} className="text-white" />
</form>
        </div>
    </div>
        <div id="benifit-div">
            <h1 id="benifit-heading">

        Benefits of Workshop
            </h1>
            <ul >
                <li> Hands on Project </li>
                <li> Technology Fundamentals</li>
                <li> Best-in-class industry experts </li>
                <li> Certificate of Participation to Students </li>
         
     </ul>
            <div id="registerd-now">
        <h3>Register Now.....</h3>

        </div>
        </div>

</div>
    
)
}
export default Form