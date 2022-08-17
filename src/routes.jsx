import PaginaPadrao from "components/PaginaPadrao";
import Menu from "components/Menu";
import Cardapio from "pages/Cardapio";
import Inicio from "pages/Inicio";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sobre from "pages/Sobre";
import Footer from "components/Footer";
import NotFound from "pages/NotFound";
import Prato from "pages/Prato";

export default function AppRouter() {
  return (
    <main className="container">
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
          <Route path="cardapio/prato/:id" element={<Prato />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </main>
  );
}
