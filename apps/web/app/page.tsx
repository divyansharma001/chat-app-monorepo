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
          <input type="text"></input>
          <button>Join Room</button>
        </div>
      </div>
    </>
  );
}
