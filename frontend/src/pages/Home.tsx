import React from 'react';
import { Link } from 'react-router-dom';
import ApiTest from '../components/ApiTest';

const Home: React.FC = () => {
  return (
    <div>
      <ApiTest />
      
      <div className="card">
        <h2 className="magical-title" style={{ textAlign: 'center', marginBottom: '20px' }}>
          Bem-vindo ao Mundo Mágico! 🪄
        </h2>
        <p style={{ textAlign: 'center', fontSize: '1.2rem', lineHeight: '1.6', marginBottom: '30px' }}>
          Explore o universo encantado de Harry Potter, descubra as casas de Hogwarts, 
          conheça os personagens icônicos, aprenda feitiços poderosos e desvende os 
          segredos das poções mágicas.
        </p>
        
        <div className="grid">
          <div className="card">
            <h3>🏰 Casas de Hogwarts</h3>
            <p>Descubra as quatro casas nobres: Grifinória, Sonserina, Corvinal e Lufa-Lufa. 
               Cada uma com suas próprias tradições, valores e história.</p>
            <Link to="/houses" className="btn" style={{ marginTop: '15px' }}>
              Explorar Casas
            </Link>
          </div>
          
          <div className="card">
            <h3>👥 Personagens</h3>
            <p>Conheça os bruxos e bruxas mais famosos do mundo mágico, desde Harry Potter 
               até os professores de Hogwarts.</p>
            <Link to="/characters" className="btn" style={{ marginTop: '15px' }}>
              Ver Personagens
            </Link>
          </div>
          
          <div className="card">
            <h3>⚡ Feitiços</h3>
            <p>Aprenda os encantamentos mais poderosos, desde feitiços básicos como Lumos 
               até as temidas Maldições Imperdoáveis.</p>
            <Link to="/spells" className="btn" style={{ marginTop: '15px' }}>
              Estudar Feitiços
            </Link>
          </div>
          
          <div className="card">
            <h3>🧪 Poções</h3>
            <p>Descubra as receitas das poções mais complexas, como a Poção Polissuco 
               e o Veritaserum.</p>
            <Link to="/potions" className="btn" style={{ marginTop: '15px' }}>
              Preparar Poções
            </Link>
          </div>
          
          <div className="card">
            <h3>📍 Localizações</h3>
            <p>Visite os lugares mais emblemáticos do mundo mágico, de Hogwarts ao 
               Beco Diagonal.</p>
            <Link to="/locations" className="btn" style={{ marginTop: '15px' }}>
              Explorar Locais
            </Link>
          </div>
        </div>
      </div>
      
      <div className="card" style={{ textAlign: 'center', marginTop: '40px' }}>
        <h3 className="magical-title">✨ Magia está no ar! ✨</h3>
        <p style={{ fontSize: '1.1rem', marginTop: '15px' }}>
          "A felicidade pode ser encontrada mesmo nas horas mais sombrias, 
          se você se lembrar de acender a luz." - Albus Dumbledore
        </p>
      </div>
    </div>
  );
};

export default Home;
