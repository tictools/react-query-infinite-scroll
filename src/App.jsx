import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import "./App.module.css";
import { Header, Subheader } from "./components/";
import { MainContent } from "./components/MainContent";

function App() {
  const queryClient = new QueryClient();

  const defaultDevtoolsOptions = {
    buttonPosition: "bottom-left",
    position: "right",
  };

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Header />
        <Subheader />
        <MainContent />
        <ReactQueryDevtools {...defaultDevtoolsOptions} />
      </QueryClientProvider>
    </>
  );
}

export default App;
