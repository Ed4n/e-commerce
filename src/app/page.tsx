
import { AppProvider } from "../context/AppContext";
import Home from "./home";

export default function App() {
  return (
    <main >
      <AppProvider >
        <Home />
      </AppProvider>
    </main>
  );
}
