import { TextInput } from "@repo/ui/text-input";

export default function ChatPage() {
  return (
    <>
      <div style={{
        height: "100vh",
        width: "100vw",
        backgroundColor: "black",
        display: "flex",
        justifyContent: "space-between",
        justifyItems: "center",
        flexDirection: "column"
      }}>
        <div>chat-app</div>
        <div>
        <TextInput placeholder="Type here.."></TextInput>
        </div>
        
    </div>
    </>
  );
}
