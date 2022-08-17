import PaginaPadrao from "components/PaginaPadrao";
import Menu from "components/Menu";
import Cardapio from "pages/Cardapio";
import Inicio from "pages/Inicio";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sobre from "pages/Sobre";

export default function AppRouter() {
  return (
    <main>
      <Router>
        {/* Desta forma o component não ser renderizado junto com a pagina */}
        <Menu />
        <Routes>
          {/* Nested Routes */}
          <Route path="/" element={<PaginaPadrao />}>
            <Route index element={<Inicio />} />
            <Route path="cardapio" element={<Cardapio />} />
            <Route path="sobre" element={<Sobre />} />
          </Route>
        </Routes>
      </Router>
    </main>
  );
}
