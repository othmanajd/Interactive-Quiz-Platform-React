import Logo from "../assets/img/Logo.png";
import "./AccueilPageProf.css";
import { FaBook } from "react-icons/fa";
import { useState } from "react";

const AccueilPageProf = () => {
    const [titre, setTitre] = useState("");
    const cours = [
        { id: 1, nom: "Mathématiques avancées" },
        { id: 2, nom: "Introduction à la programmation" },
        { id: 3, nom: "Analyse des données" },
        { id: 4, nom: "Algorithmes et structures de données" },
      ];
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
            <div className="main-content-div">
            <main className="main-content-l">
                <h3>Liste des cours : </h3>
                <ul className="liste-cours">
        {cours.map((cours) => (
          <li key={cours.id} className="cours-item">
            <p>
            <FaBook className="cours-icon" /><span> </span>
            {cours.nom}
            </p>
            <a href="./AjouterQuiz"> Ajouter Question</a>
          </li>
        ))}
      </ul>
            </main>
            <main className="main-content-a">
                <h3>Ajouter un cours : </h3>
                <div className="form-group">
                    <label htmlFor="Cours">Titre de Cours :</label>
                    <input
                        type="text"
                        id="cours"
                        value={titre}
                        onChange={(e) => setTitre(e.target.value)}
                        required
                        placeholder="Entrez le titre de cours"
                        aria-label="Titre de cours"
                    />
                </div>

                {/* Bouton de connexion */}
                <button type="submit" className="login-button">
                    Ajouter le cours
                </button>
            </main>
            </div>
        </>
    );
};

export default AccueilPageProf;
