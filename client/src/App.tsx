import { Route } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";
import About from "@/pages/about";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <>
      <Route path="/">
        <About />
      </Route>

      <Route path="*">
        <NotFound />
      </Route>
    </>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
