import { useState, useRef } from 'react';
import './App.css';
import { Auth } from './components/Auth';
import Cookies from 'universal-cookie';
import { Chat } from './components/Chat';
const cookies = new Cookies();

function App() {
  const [isAuth, seIsAuth] = useState(cookies.get("auth-token"));
  const [room,setRoom] = useState ("");

  const roomInputRef = useRef(null)



  if(!isAuth) {
    return (
      <div >
        <Auth seIsAuth={seIsAuth}/>
      </div>
    );

  }

  return <div> {room ? 
             ( <Chat/> ) : 

           ( <div className='room'>
            <label>Enter Room  Name:</label>
            <input ref={roomInputRef} />
            <button onClick={ () => setRoom(roomInputRef.current.value)}>Enter Chat</button>
            

            </div> )}
        </div>

}

export default App;
