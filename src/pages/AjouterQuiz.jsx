import Logo from "../assets/img/Logo.png";
import { useState } from "react";
import "./AjouterQuiz.css";
const AjouterQuiz = () => {
    const [question, setQuestion] = useState("");
        const [reponse1, setReponse1] = useState("");
        const [reponse2, setReponse2] = useState("");
        const [reponse3, setReponse3] = useState("");
        const [correct, setCorrect] = useState("");
    
        const handleSubmit = (e) => {
            e.preventDefault();
            // Logique pour gérer la soumission
            console.log("question :", question);
            console.log("reponse1 :", reponse1);
            console.log("reponse2 :", reponse2);
            console.log("reponse3 :", reponse3);
            console.log("correct :", correct);
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

            {/* Contenu principal en dessous de la barre */}
            <main className="main-content-l">
            <form onSubmit={handleSubmit}>
                <h2>Ajouter Question</h2>
                <div className="form-group">
                    <label htmlFor="question">Question :</label>
                    <input
                        type="text"
                        id="question"
                        value={question}
                        onChange={(e) => setQuestion(e.target.value)}
                        required
                        placeholder="Entrez la question"
                    />
                </div>
                
                <div className="form-group">
                    <label htmlFor="reponse1">Reponse 1 :</label>
                    <input
                        type="text"
                        id="reponse1"
                        value={reponse1}
                        onChange={(e) => setReponse1(e.target.value)}
                        required
                        placeholder="Entrez la reponse 1"
                    />
                </div>
                
                <div className="form-group">
                    <label htmlFor="reponse2">Reponse 2 :</label>
                    <input
                        type="text"
                        id="reponse2"
                        value={reponse2}
                        onChange={(e) => setReponse2(e.target.value)}
                        required
                        placeholder="Entrez la reponse 2"
                    />
                </div>
                
                <div className="form-group">
                    <label htmlFor="reponse3">Reponse 3 :</label>
                    <input
                        type="text"
                        id="reponse3"
                        value={reponse3}
                        onChange={(e) => setReponse3(e.target.value)}
                        required
                        placeholder="Entrez la reponse 3"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="correct">La bonne reponse :</label>
                    <select
                        id="correct"
                        value={correct}
                        onChange={(e) => setCorrect(e.target.value)}
                        required
                    >
                        <option value="">-- Choisissez --</option>
                        <option value=" 1">Reponse 1</option>
                        <option value="2">Reponse 2</option>
                        <option value="3">Reponse 3</option>
                    </select>
                </div>
                
                <button type="submit" className="login-button">Ajouter</button>
            </form>
            </main>
        </>
    );
};

export default AjouterQuiz;
