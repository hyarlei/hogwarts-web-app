import React, { useEffect, useState } from 'react';
import { housesApi } from '../services/api';
import { House } from '../types';

const Houses: React.FC = () => {
  const [houses, setHouses] = useState<House[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchHouses();
  }, []);

  const fetchHouses = async () => {
    try {
      setLoading(true);
      const response = await housesApi.getAll();
      setHouses(response.data);
    } catch (err: any) {
      setError('Erro ao carregar as casas de Hogwarts');
      console.error('Erro:', err);
    } finally {
      setLoading(false);
    }
  };

  const addPoints = async (houseId: number, points: number) => {
    try {
      await housesApi.addPoints(houseId, points);
      fetchHouses(); // Recarrega a lista
    } catch (err) {
      console.error('Erro ao adicionar pontos:', err);
    }
  };

  const getHouseClass = (houseName: string) => {
    return houseName.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  };

  if (loading) return <div className="loading">🔮 Carregando casas de Hogwarts...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <div>
      <h2 className="magical-title" style={{ textAlign: 'center', marginBottom: '30px' }}>
        🏰 Casas de Hogwarts
      </h2>
      
      <div className="grid">
        {houses.map((house) => (
          <div key={house.id} className={`card house-card ${getHouseClass(house.name)}`}>
            <h3 className="magical-title" style={{ fontSize: '2rem', marginBottom: '15px' }}>
              {house.name}
            </h3>
            
            <div className="points-display">
              {house.points} pontos
            </div>
            
            <div style={{ marginTop: '20px', textAlign: 'left' }}>
              <p><strong>Fundador:</strong> {house.founder}</p>
              <p><strong>Cores:</strong> {house.colors}</p>
              <p><strong>Animal:</strong> {house.animal}</p>
              <p><strong>Elemento:</strong> {house.element}</p>
              <p><strong>Características:</strong> {house.traits}</p>
              {house.characters && (
                <p><strong>Membros:</strong> {house.characters.length} personagens</p>
              )}
            </div>
            
            <div style={{ marginTop: '20px', display: 'flex', gap: '10px', justifyContent: 'center' }}>
              <button 
                className="btn" 
                onClick={() => addPoints(house.id, 10)}
                style={{ background: 'rgba(255,255,255,0.2)', color: 'white' }}
              >
                +10 pontos
              </button>
              <button 
                className="btn" 
                onClick={() => addPoints(house.id, 50)}
                style={{ background: 'rgba(255,255,255,0.2)', color: 'white' }}
              >
                +50 pontos
              </button>
            </div>
          </div>
        ))}
      </div>
      
      <div className="card" style={{ textAlign: 'center', marginTop: '40px' }}>
        <h3>🏆 Copa das Casas</h3>
        <p>
          O sistema de pontos das casas é uma tradição em Hogwarts. Os alunos podem ganhar ou perder pontos 
          para suas casas com base em seu comportamento, realizações acadêmicas e ações heroicas.
        </p>
        <p style={{ marginTop: '15px', fontStyle: 'italic' }}>
          "Ou talvez em Slytherin, você fará seus verdadeiros amigos. 
          Essas pessoas astutas usam qualquer meio para atingir seus fins." - Chapéu Seletor
        </p>
      </div>
    </div>
  );
};

export default Houses;
