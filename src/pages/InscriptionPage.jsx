import { useState } from "react";
import axios from "axios";
import "./Inscription.css";
import Logo from "../assets/img/Logo.png";
import { useNavigate } from "react-router-dom";

const Inscription = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const userData = {
            name: name,
            email: email,
            password: password,
            role: role,
        };

        try {
            const response = await axios.post("http://localhost:8080/api/User/Ajouter", userData, {
                headers: {
                    "Content-Type": "application/json",
                },
            });

            console.log("Utilisateur ajouté avec succès :", response.data);
            alert("Inscription réussie !");
            navigate("/");
        } catch (error) {
            if (error.response) {
                // Réponse reçue avec un statut d'erreur
                console.error("Erreur lors de l'inscription :", error.response.data);
                alert(`Erreur : ${error.response.data.message || "Inscription échouée."}`);
            } else if (error.request) {
                // Pas de réponse du serveur
                console.error("Erreur réseau :", error.request);
                alert("Erreur réseau. Veuillez vérifier votre connexion.");
            } else {
                // Erreur inconnue
                console.error("Erreur :", error.message);
                alert("Une erreur inconnue s'est produite.");
            }
        }
    };

    return (
        <div className="login-container">
            <form onSubmit={handleSubmit}>
                <img className="logo" src={Logo} alt="Logo" />
                <h1>Inscription</h1>
                
                <div className="form-group">
                    <label htmlFor="name">Nom :</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        placeholder="Entrez votre nom"
                    />
                </div>
                
                <div className="form-group">
                    <label htmlFor="email">Adresse email :</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        placeholder="Entrez votre email"
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
                    />
                </div>
                
                <div className="form-group">
                    <label htmlFor="role">Je suis :</label>
                    <select
                        id="role"
                        value={role}
                        onChange={(e) => setRole(e.target.value)}
                        required
                    >
                        <option value="">-- Choisissez --</option>
                        <option value="PROF">Professeur</option>
                        <option value="ETUDIANT">Étudiant</option>
                    </select>
                </div>
                
                <button type="submit" className="login-button">S´inscrire</button>
                
                <div className="auth-options">
                    <p>Déjà un compte ? <a href="/" className="forgot-password-link">Connectez-vous ici</a></p>
                </div>
            </form>
        </div>
    );
};

export default Inscription;
