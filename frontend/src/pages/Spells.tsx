import React, { useEffect, useState } from 'react';
import { spellsApi } from '../services/api';
import { Spell } from '../types';

const Spells: React.FC = () => {
  const [spells, setSpells] = useState<Spell[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchSpells();
  }, []);

  const fetchSpells = async () => {
    try {
      setLoading(true);
      const response = await spellsApi.getAll();
      setSpells(response.data);
    } catch (err: any) {
      setError('Erro ao carregar feitiços');
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

  const getTypeEmoji = (type: string) => {
    switch (type.toLowerCase()) {
      case 'charm': return '✨';
      case 'curse': return '💀';
      case 'hex': return '🔥';
      case 'jinx': return '⚡';
      case 'spell': return '🌟';
      default: return '🪄';
    }
  };

  if (loading) return <div className="loading">⚡ Carregando feitiços...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <div>
      <h2 className="magical-title" style={{ textAlign: 'center', marginBottom: '30px' }}>
        ⚡ Livro de Feitiços
      </h2>
      
      <div className="card" style={{ textAlign: 'center', marginBottom: '30px' }}>
        <h3>🎓 Academia de Magia</h3>
        <p>
          Aprenda os feitiços mais poderosos do mundo mágico. Desde encantamentos básicos 
          até as temidas Maldições Imperdoáveis, cada feitiço tem sua história e propósito.
        </p>
        <p style={{ marginTop: '15px', fontStyle: 'italic' }}>
          "São nossas escolhas, Harry, que revelam o que realmente somos, 
          muito mais do que nossas habilidades." - Albus Dumbledore
        </p>
      </div>

      <div className="grid">
        {spells.map((spell) => (
          <div key={spell.id} className="spell-card">
            <h3 style={{ color: '#FFD700', marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '10px' }}>
              {getTypeEmoji(spell.type)} {spell.name}
            </h3>
            
            {spell.incantation && (
              <div style={{ marginBottom: '15px', textAlign: 'center' }}>
                <p style={{ 
                  fontSize: '1.2rem', 
                  fontStyle: 'italic', 
                  color: '#FFD700',
                  textShadow: '1px 1px 2px rgba(0,0,0,0.5)'
                }}>
                  "{spell.incantation}"
                </p>
              </div>
            )}
            
            <div style={{ marginBottom: '10px' }}>
              <strong>Tipo:</strong> {spell.type}
            </div>
            
            <div style={{ marginBottom: '10px' }}>
              <strong>Efeito:</strong> {spell.effect}
            </div>
            
            <div style={{ marginBottom: '15px' }}>
              <strong>Dificuldade:</strong> 
              <span style={{ 
                color: getDifficultyColor(spell.difficulty), 
                marginLeft: '5px',
                fontWeight: 'bold'
              }}>
                {spell.difficulty}
              </span>
            </div>
            
            {spell.description && (
              <p style={{ 
                marginTop: '15px',
                borderTop: '1px solid rgba(255,255,255,0.2)',
                paddingTop: '15px',
                fontStyle: 'italic'
              }}>
                {spell.description}
              </p>
            )}
          </div>
        ))}
      </div>
      
      <div className="card" style={{ marginTop: '40px' }}>
        <h3>⚠️ Avisos Importantes</h3>
        <ul style={{ marginTop: '15px', lineHeight: '1.6' }}>
          <li>Nunca pratique feitiços sem supervisão adequada</li>
          <li>As Maldições Imperdoáveis são ilegais e podem resultar em prisão perpétua em Azkaban</li>
          <li>Sempre tenha cuidado com feitiços de dificuldade Advanced ou Expert</li>
          <li>Lembre-se: com grande poder vem grande responsabilidade</li>
        </ul>
      </div>
    </div>
  );
};

export default Spells;
