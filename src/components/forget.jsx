import axios from "axios";
import { useEffect,useState } from "react";


function Forget() {
    const [email, setEmail] = useState('');
    const [newpassword,setPassword]=useState('')
    useEffect(() => {
        console.log('email is:',email);
        console.log('password is:',newpassword);
      }, [email, newpassword]);
      const handleSubmit = async () =>{
            const response= await axios.post('http://localhost:2000/forget',{
                email,newpassword
            })
            if(response.data){

            }}
    return(
        <div style={{display:'flex', flexDirection:'column',justifyContent:'center',gap:'10px',alignItems:'center',backgroundImage:'url(/vacation.jpg)',backgroundSize:'100%',backgroundRepeat:'no-repeat',height:'750px',width:'100%'}}>
            <input type="text" name="email" style={{width:'500px',padding:'10px'}}
            placeholder="enter your email" onChange={(e) => setEmail(e.target.value)}/>
            <input type="text" name="newpassword"style={{width:'500px',padding:'10px'}} 
            placeholder="enter your new password" onChange={(e) =>  setPassword(e.target.value)}/>
            <button style={{width:'500px'}}onClick={handleSubmit}>update password</button>
        </div>
    )
}
export default Forget;  