import { RouterProvider, createBrowserRouter } from "react-router-dom";

import GratitudePage from "./pages/Gratitude";
import WelcomePage from "./pages/Welcome";
import AffirmationsPage from "./pages/Affirmations";
import GoodFeelingsPage from "./pages/GoodFeelings";
import HabitsPage from "./pages/Habits";
import JournalPage from "./pages/Journal";
import ProfilePage from "./pages/Profile";
import RootLayout from "./pages/Root.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <WelcomePage /> },
      { path: "/gratitude", element: <GratitudePage /> },
      { path: "/affirmations", element: <AffirmationsPage /> },
      { path: "/goodfeelings", element: <GoodFeelingsPage /> },
      { path: "/habits", element: <HabitsPage /> },
      { path: "/journal", element: <JournalPage /> },
      { path: "/profile", element: <ProfilePage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
