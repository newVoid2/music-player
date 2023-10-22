import React, {Component} from "react";

class Player extends Component {
    render() {
        return (
            <div className="flex justify-center min-h-screen items-center">
                <div className="bg-slate-100 rounded-3xl shadow-3xl h-128 w-100">
                    <div className="relative -top-12 left-9 w-80 h-80">
                        <img className="w-full h-full object-cover shadow-4xl rounded-3xl" src="https://images.unsplash.com/photo-1682687220305-ce8a9ab237b1?auto=format&fit=crop&q=60&w=900&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHx8" alt="goats"></img>
                    </div>
                    <h2 id="title" className="m-0 font-bold text-5xl">Electric Chill Machine</h2>
                    <h3 id="artist" className="text-3xl">Jacinto</h3>
                    <audio controls></audio>
                </div>
            </div>  
        )
    }
}

export default Player;