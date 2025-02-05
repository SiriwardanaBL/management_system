import "./App.css";
import Alert from "./Components/alert";
// import Message from './mssage'
import ListGroup from "./Components/ListGroup";
import "bootstrap/dist/css/bootstrap.css";
function App() {
  const cities = ["New York", "California"];
  const handleSelectItem = (item: string) => {
    console.log(item);
  };
  return (
    <div>
      <Alert>
        hello world !
      </Alert>
      <ListGroup
        items={cities}
        heading="Citis in USA"
        onSelectItem={handleSelectItem}
      />
    </div>
  );
}

export default App;
