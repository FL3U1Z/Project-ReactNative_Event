import { Home } from "./src/screens/home"
import { Money } from "./src/screens/money"
import { StatusBar } from "react-native"

export default function App() {
  return (
    <>
      <StatusBar 
      barStyle="light-content"
      backgroundColor="transparent"
      translucent
      />
      <Home />
    </>
  )
}