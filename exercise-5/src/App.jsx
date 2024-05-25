import Card from "./components/Card";
import Header from "./components/Header";
import { AVAILABLE_ITEMS } from "./data";
function App() {
  return (
    <>
      <Header />
      <div class="cards-view">
        <div class="cards-grid">
          {AVAILABLE_ITEMS.map((item) => {
            return <Card key={item.id} item={item} />;
          })}
        </div>
      </div>
    </>
  );
}

export default App;
