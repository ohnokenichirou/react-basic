import "./App.css";
import { BadCounter } from "./components/BadCounter ";
import { Counter } from "./components/Counter";
import { EffectFetch } from "./components/EffectFetch";
import { TextInput } from "./components/TextInput";
import { ToggleButton } from "./components/ToggleButton";

function App() {
  return (
    <div>
      <TextInput />
      <Counter />
      <BadCounter />
      <ToggleButton />
      <EffectFetch />
    </div>
  );
}

export default App;
