import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { StackRoutes } from "./src/routes/StackRoutes";
import UserContextProvider from "./src/context/User";

export default function App() {
  return (
      <UserContextProvider>
        <NavigationContainer>
          <StackRoutes />
        </NavigationContainer>
      </UserContextProvider>
  );
}
