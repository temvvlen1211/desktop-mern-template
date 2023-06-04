import { useCurrentUser } from "./hooks/useCurrentUser";
import { Routes, Route } from "react-router";
import { NotFoundScreen } from "./screens/NotFoundScreen";
import { RegisterScreen } from "./screens/RegisterScreen";
import { OrdersScreen } from "./screens/OrdersScreen";
import { LoginScreen } from "./screens/LoginScreen";

function App() {
  const { currentUser } = useCurrentUser();
  console.log("currentUser", currentUser);
  if (!currentUser) {
    return (
      <Routes>
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/register" element={<RegisterScreen />} />
        <Route path="/orders" element={<OrdersScreen />} />
        <Route path="*" element={<NotFoundScreen />} />
      </Routes>
    );
  }
  return <NotFoundScreen />;
}

export default App;
