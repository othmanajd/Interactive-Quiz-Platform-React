import { useState } from "react";
import "./Inscription.css";
import Logo from "../assets/img/Logo.png";

const Inscription = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        // Logique pour gérer la soumission
        console.log("Nom :", name);
        console.log("Email :", email);
        console.log("Mot de passe :", password);
        console.log("Rôle :", role);
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
