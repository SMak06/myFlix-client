import {useState} from "react";

export const LoginView = ({ onLoggedIn })=> {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const handleSubmit = (event)=> {
        event.preventDefault();

        const data = {
            access: username,
            secret: password
        };
        
        fetch("https://myflixappjm.herokuapp.com/login", {
            method: "POST",
            headers: {
                "conent-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
        .then((response) => response.json())
        .then((data)=> {
            console.log("Login response: ", data);
            if(data.user){
                localStorage.setItem("user", JSON.stringify(data.user));
                localStorage.setItem("token",data.token);
                onLoggedIn(data.user,data.token);
            }else{
                alert("no such user");
            }
        })
        .catch((e) => {
            alert("something is wrong");
        });
        
    }
    return (
        <form onSubmit={handleSubmit}>
          <label>
            Username:
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              minLength="3"
            />
          </label>
          <label>
            Password:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </label>
          <button type="submit">submit</button>
        </form>
      );
}