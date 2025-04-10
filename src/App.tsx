import "./App.css";
import { Badge } from "./shared/ui/Badge";
import MenuTop from "./shared/layout/MenuTop";
import MenuLeft from "./shared/layout/MenuLeft";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <MenuTop />
      <MenuLeft />
      <Badge type="success">Phuoc check</Badge>
    </>
  );
}

export default App;
