import { MainRouter } from "./router";
import { BasketProvider } from "./context/BasketContext";

function App() {
  return (
    <>
      <BasketProvider>
        <MainRouter />
      </BasketProvider>
    </>
  );
}

export default App;
