import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ConnexionPage from "./pages/ConnexionPage";
import Inscription from "./pages/InscriptionPage";
import AccueilPageProf from "./pages/AccueilPageProf";
import AccueilPageEtudiant from "./pages/AccueilPageEtudiant";
import AjouterQuiz from "./pages/AjouterQuiz";
import QuizPage from "./pages/QuizPage";

function App() {
  return ( 
    <Router>
        <Routes>
          <Route path="/" element={<ConnexionPage />} />
          <Route path="/inscription" element={<Inscription />} />
          <Route path="/AccueilPageProf" element={<AccueilPageProf />} />
          <Route path="/AccueilPageEtudiant" element={<AccueilPageEtudiant />} />
          <Route path="/AjouterQuiz" element={<AjouterQuiz />} />
          <Route path="/QuizPage" element={<QuizPage />} />
          
         </Routes>
    </Router>
  )
}

export default App
