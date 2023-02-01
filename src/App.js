import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import { store } from "./Redux/store/store";
import { router } from "./Routes/router";

function App() {
  return (
    <div>
      <Provider store={store}>
        <RouterProvider router={router}></RouterProvider>
      </Provider>
    </div>
  );
}

export default App;
