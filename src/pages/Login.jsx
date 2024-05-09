import React, { useState } from 'react';
import { useAuth } from '../provider/authProvider';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const { setToken } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [erreur, setErreur] = useState('');

  

    const handleLogin = async () => {
        
        if(!email || !password) {
            setErreur("Veuillez remplir tous les champs");
            return;
        }

        // il faut faire la fetch
        fetch('http://localhost:8000/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: email,
                password,
            }),
        })
        .then(response => response.json())
        .then(data => {
            if (data.message) {
                setErreur(data.message);
                return;
            }
            
            setToken(data.authorisation.token);
            // il faut change
            // navigate('/dashboard');
            navigate("/", { replace: true });

        }).catch((error) => {
            console.error('Error:', error);
            setErreur("Une erreur s'est produite");
        });

        // setToken(data.jwt);
        // navigate('/dashboard');    
    }

  return (
    <div className="flex flex-col items-center justify-center h-screen">
        <div className="w-full max-w-md">
            <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="mb-4">
                    <h2 className="text-center">Connexion</h2>
                    {erreur && (
                    <div className="bg-red-500 text-white px-3 py-2 rounded relative" role="alert">
                        {erreur}
                    </div>
                    )}
                    <form>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                        E-mail
                        </label>
                        <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="email"
                        type="email"
                        placeholder="Entrez votre e-mail"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                        Mot de passe
                        </label>
                        <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                        id="password"
                        type="password"
                        placeholder="Entrez votre mot de passe"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="flex items-center justify-between">
                        <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="button"
                        onClick={handleLogin}
                        >
                        Se connecter
                        </button>
                    </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Login;
