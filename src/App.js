import { Route } from "react-router";
import DashboardApp from "./pages/DashboardApp";
import PrivateRoute from "./PrivateRouter";
import Router from "./routes";
import { AuthProvider } from "./store/AuthContext";
import ThemeProvider from "./theme";

export default function App() {
  return (
    <AuthProvider>
      <ThemeProvider>
    
          <Route path="/auth" component={Auth} />

          <Route path="/" exact>
            <Redirect to="/login" />
          </Route>

          <PrivateRoute path="/home">
            <div className="app" id="app">
              <>
                <DashboardApp />
              </>
            </div>
          </PrivateRoute>
       
      </ThemeProvider>
      </AuthProvider>

      )
}
