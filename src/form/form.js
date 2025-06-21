const Login = ()=>{
    return (
         <form>
            <label>userName:</label>
            <input type="text" name="userName" placeholder="Enter username"></input>
            <br/>
            <label>Password:</label>
            <input type="password" name="password" placeholder="Enter password"></input>
            <br/>
            <button type="submit">Login</button>
         </form>
    );
}
 export default Login;