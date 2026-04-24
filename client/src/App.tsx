import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch, useLocation } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import Navigation from "./components/Navigation";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Lectures from "./pages/Lectures";
import Habits from "./pages/Habits";
import Sleep from "./pages/Sleep";
import BrainDump from "./pages/BrainDump";
import Chat from "./pages/Chat";
import StudySchedule from "./pages/StudySchedule";

function Router() {
  const [location] = useLocation();
  const isHomePage = location === "/";

  return (
    <div className="flex">
      {!isHomePage && <Navigation />}
      <main className={!isHomePage ? "md:mr-64 w-full" : "w-full"}>
        <Switch>
          <Route path={"/"} component={Home} />
          <Route path={"/dashboard"} component={Dashboard} />
          <Route path={"/lectures"} component={Lectures} />
          <Route path={"/habits"} component={Habits} />
          <Route path={"/sleep"} component={Sleep} />
          <Route path={"/brain-dump"} component={BrainDump} />
          <Route path={"/chat"} component={Chat} />
          <Route path={"/study-schedule"} component={StudySchedule} />
          <Route path={"/404"} component={NotFound} />
          {/* Final fallback route */}
          <Route component={NotFound} />
        </Switch>
      </main>
    </div>
  );
}



function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="light"
      >
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
