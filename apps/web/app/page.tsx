"use client"

import {TextInput} from "@repo/ui/text-input" //this is how it is imported in the web app 
// from the ui package after exporting it in the package.json file


export default function Home() {
  return (
    <>
      <div
        style={{
          height: "100vh",
          width: "100vw",
          backgroundColor: "black",
          display: "flex",
          justifyContent: "center",
          justifyItems: "center",
        }}
      >
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
           <TextInput placeholder="Enter Room Name" onChange={()=>{
            alert("hii")
           }}></TextInput>
          <button>Join Room</button>
        </div>
      </div>
    </>
  );
}
