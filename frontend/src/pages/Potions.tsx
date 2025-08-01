import React, { useEffect, useState } from 'react';
import { potionsApi } from '../services/api';
import { Potion } from '../types';

const Potions: React.FC = () => {
  const [potions, setPotions] = useState<Potion[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchPotions();
  }, []);

  const fetchPotions = async () => {
    try {
      setLoading(true);
      const response = await potionsApi.getAll();
      setPotions(response.data);
    } catch (err: any) {
      setError('Erro ao carregar poções');
      console.error('Erro:', err);
    } finally {
      setLoading(false);
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return '#4CAF50';
      case 'Intermediate': return '#FF9800';
      case 'Advanced': return '#FF5722';
      case 'Expert': return '#9C27B0';
      default: return '#ffffff';
    }
  };

  if (loading) return <div className="loading">🧪 Preparando poções...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <div>
      <h2 className="magical-title" style={{ textAlign: 'center', marginBottom: '30px' }}>
        🧪 Livro de Poções Avançadas
      </h2>
      
      <div className="card" style={{ textAlign: 'center', marginBottom: '30px' }}>
        <h3>⚗️ Professor Slughorn's Masterclass</h3>
        <p>
          As poções são uma arte delicada e precisa. Cada ingrediente deve ser adicionado 
          no momento exato, com a temperatura correta e seguindo rigorosamente as instruções.
        </p>
        <p style={{ marginTop: '15px', fontStyle: 'italic' }}>
          "Não espero que realmente entendam a beleza do caldeirão fervendo suavemente 
          com seus vapores cintilantes..." - Severus Snape
        </p>
      </div>

      <div className="grid">
        {potions.map((potion) => (
          <div key={potion.id} className="potion-card">
            <h3 style={{ color: '#FFD700', marginBottom: '15px' }}>
              🧪 {potion.name}
            </h3>
            
            <div style={{ marginBottom: '15px' }}>
              <strong>Efeito:</strong> {potion.effect}
            </div>
            
            <div style={{ marginBottom: '15px' }}>
              <strong>Dificuldade:</strong> 
              <span style={{ 
                color: getDifficultyColor(potion.difficulty), 
                marginLeft: '5px',
                fontWeight: 'bold'
              }}>
                {potion.difficulty}
              </span>
            </div>
            
            {potion.brewing && (
              <div style={{ marginBottom: '15px' }}>
                <strong>Tempo de Preparo:</strong> {potion.brewing}
              </div>
            )}
            
            <div style={{ marginBottom: '15px' }}>
              <strong>Ingredientes:</strong>
              <ul style={{ marginTop: '10px', marginLeft: '20px' }}>
                {JSON.parse(potion.ingredients).map((ingredient: string, index: number) => (
                  <li key={index} style={{ marginBottom: '5px' }}>
                    {ingredient}
                  </li>
                ))}
              </ul>
            </div>
            
            {potion.description && (
              <p style={{ 
                marginTop: '15px',
                borderTop: '1px solid rgba(255,255,255,0.2)',
                paddingTop: '15px',
                fontStyle: 'italic'
              }}>
                {potion.description}
              </p>
            )}
          </div>
        ))}
      </div>
      
      <div className="card" style={{ marginTop: '40px' }}>
        <h3>🚨 Regras de Segurança para Poções</h3>
        <ul style={{ marginTop: '15px', lineHeight: '1.6' }}>
          <li>Sempre use equipamentos de proteção adequados</li>
          <li>Nunca misture ingredientes desconhecidos</li>
          <li>Mantenha antídotos básicos sempre à mão</li>
          <li>Algumas poções são regulamentadas pelo Ministério da Magia</li>
          <li>Em caso de acidente, procure imediatamente a ala hospitalar</li>
        </ul>
        
        <div style={{ marginTop: '20px', padding: '15px', background: 'rgba(255,0,0,0.1)', borderRadius: '8px' }}>
          <strong>⚠️ ATENÇÃO:</strong> Poções como Veritaserum e Poção do Amor são consideradas 
          controladas e seu uso inadequado pode resultar em sérias consequências legais.
        </div>
      </div>
    </div>
  );
};

export default Potions;
