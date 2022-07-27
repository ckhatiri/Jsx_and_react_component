import "./App.css";
import Address from "./Components/Address";
import FullName from "./Components/FullName";
import ProfilePhoto from "./Components/ProfilePhoto";

function App() {
  return (
    <div className="grid place-content-center">
      <h1 className="text-rose-700 text-3xl font-bold">Hello!</h1>
      <ProfilePhoto />
      <FullName />
      <Address />
    </div>
  );
}

export default App;
