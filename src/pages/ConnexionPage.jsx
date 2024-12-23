import { useState } from "react";
import axios from "axios";
import "./Connexion.css";
import Logo from "../assets/img/Logo.png";
import { useNavigate } from "react-router-dom";

const ConnexionPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Requête vers le backend
            const response = await axios.post("http://localhost:8080/api/User/connexion", {
                email: email,
                password: password,
            });

            // Vérification de la réponse
            const user = response.data;

            if (user.role === "PROF") {
                navigate("/AccueilPageProf");
            } else if (user.role === "ETUDIANT") {
                navigate("/AccueilPageEtudiant");
            } else {
                alert("Rôle non reconnu. Contactez l'administrateur.");
            }
        } catch (error) {
            if (error.response) {
                console.error("Erreur lors de la connexion :", error.response.data);
                alert(`Erreur : ${error.response.data.message || "Connexion échouée."}`);
            } else if (error.request) {
                console.error("Erreur réseau :", error.request);
                alert("Erreur réseau. Veuillez vérifier votre connexion.");
            } else {
                console.error("Erreur :", error.message);
                alert("Une erreur inconnue s'est produite.");
            }
        }
    };

    return (
        <div className="login-container">
            <form onSubmit={handleSubmit}>
                <img className="logo" src={Logo} alt="Logo" />
                <h1>Connexion</h1>

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

                <button type="submit" className="login-button">
                    Se connecter
                </button>

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
