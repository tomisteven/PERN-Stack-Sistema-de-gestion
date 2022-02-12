import {BrowserRouter, Routes, Route} from "react-router-dom"
import {Container} from "@mui/material"

import TaskForm from './components/Task.component/TaskForm';
import TaskList from './components/Task.component/TaskList';
import EditTask from "./components/Task.component/EditTask";

import Navbar from "./components/Static.component/Navbar";
import NavVertical from "./components/Static.component/NavVertical";

import TurnsForm from "./components/Turn.component/TurnsForm";
import TurnList from "./components/Turn.component/TurnList";
import EditTurn from "./components/Turn.component/EditTurn";

import OrderForm from "./components/Order.component/OrderForm";
import OrderList from "./components/Order.component/OrderList";
import EditOrder from "./components/Order.component/EditOrder";
import ProveedorList from "./components/Proveedores.component/ProveedorList";
import ProveedorEdit from "./components/Proveedores.component/ProveedorEdit";
import ProveedorForm from "./components/Proveedores.component/ProveedorForm";




function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <NavVertical/>
      <Container>
        <Routes>
          <Route path="/" element={<TaskList /> } />
          <Route path="/task/new" element={<TaskForm /> } />
          <Route path="/turn/new" element={<TurnsForm /> } />
          <Route path="/turns" element={<TurnList /> } />
          <Route path="/turns/:id" element={<EditTurn />} />
          <Route path="/tasks/:id" element={<EditTask />} />
          <Route path="/complete/:id" element={<TaskList />} />
          <Route path="/order/new" element={<OrderForm />} />
          <Route path="/orders" element={<OrderList /> } />
          <Route path="/orders/:id" element={<EditOrder />} />
          <Route path="/providers" element={ <ProveedorList /> } />
          <Route path="/providers/:id" element={<ProveedorEdit />} />
          <Route path="/providers/new" element={<ProveedorForm />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
