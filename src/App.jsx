//Importação de Componentes
import Wrapper from "./components/Wrapper/Wrapper"
import Content from "./components/Content/Content"

function App() {
  return (
    <>
      <div className="flex flex-col min-h-screen min-w-screen overflow-hidden">
        <Wrapper/>
        <Content/>
      </div>
    </>
  )
}
export default App
