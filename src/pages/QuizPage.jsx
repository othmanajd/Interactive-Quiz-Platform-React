import Logo from "../assets/img/Logo.png";
import "./Quiz.css";
import { useState } from "react";
import { FaPaperPlane } from "react-icons/fa";

const QuizPage = () => {
  const [correct, setCorrect] = useState("");

  const handleAddQuestion = () => {
    alert("Question ajoutée !");
  };

  const handleSubmitQuiz = () => {
    alert("Quiz soumis !");
  };

  return (
    <>
      <header className="navbar">
        {/* Logo et nom à gauche */}
        <div className="navbar-left">
          <img src={Logo} alt="Logo" className="navbar-logo" />
          <span className="navbar-title">AJD</span>
        </div>

        {/* Menu à droite */}
        <nav className="navbar-right">
          <ul className="navbar-menu">
            <li><a href="/dashboard">Dashboard</a></li>
            <li><a href="/profile">Profile</a></li>
            <li><a href="/logout">Déconnexion</a></li>
          </ul>
          {/* Icône de profil */}
          <div className="profile-icon">
            <span className="profile-initials">P</span>
          </div>
        </nav>
      </header>

      {/* Contenu principal */}
      <div className="main-content-div">
        <main className="main-content-l">
          <h3>Question ?</h3>
          <fieldset className="quiz-fieldset">
            <legend>Choisissez une réponse :</legend>
            <ul className="liste-cours">
              <li><p><FaPaperPlane /> Reponse 1</p></li>
              <li><p><FaPaperPlane /> Reponse 2</p></li>
              <li><p><FaPaperPlane /> Reponse 3</p></li>
            </ul>
          </fieldset>
          <div className="form-group">
            <label htmlFor="correct">La bonne réponse :</label>
            <select
              id="correct"
              value={correct}
              onChange={(e) => setCorrect(e.target.value)}
              required
              aria-label="Sélectionnez la bonne réponse"
            >
              <option value="">-- Choisissez --</option>
              <option value="1">Reponse 1</option>
              <option value="2">Reponse 2</option>
              <option value="3">Reponse 3</option>
            </select>
          </div>
          <div className="buttons">
            <button
              type="button"
              className="add-question-button"
              onClick={handleAddQuestion}
            >
                Soumettre le Quiz
            </button>
            <button
              type="button"
              className="submit-quiz-button"
              onClick={handleSubmitQuiz}
            >
              la Question suivant
            </button>
          </div>
        </main>
      </div>
    </>
  );
};

export default QuizPage;
