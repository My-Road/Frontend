import Providers from "./Providers";
import Snackbar from "./components/Snackbar";
import AppRoutes from "./routes/AppRoutes";
import "./config/i18n";
import ConfirmationDialog from "./components/ConfirmationDialog/ConfirmationDialog";

function App() {
  return (
    <Providers>
      <AppRoutes />
      <Snackbar />
      <ConfirmationDialog />
    </Providers>
  );
}

export default App;
