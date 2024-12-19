import { useState } from "react";
import "./Connexion.css";
import Logo from "../assets/img/Logo.png";
import { useNavigate } from "react-router-dom";

const ConnexionPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // Logique pour gérer la soumission (ex. authentification)
        console.log("Email:", email);
        console.log("Mot de passe:", password);
        if (email === "prof@gmail.com" ) {
            navigate("/AccueilPageProf");
        } else if (email === "etudiant@gmail.com" ) {
            navigate("/AccueilPageEtudiant");
        } else {
            alert("Identifiants incorrects. Veuillez réessayer.");
        }
    };

    return (
        <div className="login-container">
            {/* Logo affiché en haut */}
        
            <form onSubmit={handleSubmit}>
                <img className="logo" src={Logo} alt="Logo" />
                <h1>Connexion</h1>
                {/* Champ email */}
                <div className="form-group">
                    <label htmlFor="email">Adresse email :</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        placeholder="Entrez votre email"
                        aria-label="Adresse email"
                    />
                </div>

                {/* Champ mot de passe */}
                <div className="form-group">
                    <label htmlFor="password">Mot de passe :</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        placeholder="Entrez votre mot de passe"
                        aria-label="Mot de passe"
                    />
                </div>

                {/* Bouton de connexion */}
                <button type="submit" className="login-button">
                    Se connecter
                </button>

                {/* Liens supplémentaires */}
                <div className="auth-options">
                    <p>
                        Mot de passe oublié ?{" "}
                        <a href="/forgot-password" className="forgot-password-link">
                            Cliquez ici
                        </a>
                    </p>
                    <p>
                        Pas encore inscrit ?{" "}
                        <a href="/inscription" className="signup-link">
                            ici
                        </a>
                    </p>
                </div>
            </form>
        </div>
    );
};

export default ConnexionPage;
