import React, { useEffect, useState } from 'react';
import { charactersApi } from '../services/api';
import { Character } from '../types';

const Characters: React.FC = () => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [filter, setFilter] = useState<string>('all');

  useEffect(() => {
    fetchCharacters();
  }, []);

  const fetchCharacters = async () => {
    try {
      setLoading(true);
      const response = await charactersApi.getAll();
      setCharacters(response.data);
    } catch (err: any) {
      setError('Erro ao carregar personagens');
      console.error('Erro:', err);
    } finally {
      setLoading(false);
    }
  };

  const filteredCharacters = characters.filter(character => {
    if (filter === 'all') return true;
    if (filter === 'alive') return character.isAlive;
    if (filter === 'dead') return !character.isAlive;
    return character.house?.name.toLowerCase() === filter.toLowerCase();
  });

  const getBloodStatusColor = (status?: string) => {
    switch (status) {
      case 'Pure-blood': return '#D3A625';
      case 'Half-blood': return '#946B2D';
      case 'Muggle-born': return '#AAAAAA';
      default: return '#ffffff';
    }
  };

  if (loading) return <div className="loading">👥 Carregando personagens...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <div>
      <h2 className="magical-title" style={{ textAlign: 'center', marginBottom: '30px' }}>
        👥 Personagens do Mundo Mágico
      </h2>
      
      <div className="card" style={{ marginBottom: '30px' }}>
        <h3>Filtrar personagens:</h3>
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginTop: '15px' }}>
          <button 
            className={`btn ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
          >
            Todos
          </button>
          <button 
            className={`btn ${filter === 'alive' ? 'active' : ''}`}
            onClick={() => setFilter('alive')}
          >
            Vivos
          </button>
          <button 
            className={`btn ${filter === 'dead' ? 'active' : ''}`}
            onClick={() => setFilter('dead')}
          >
            Falecidos
          </button>
          <button 
            className={`btn ${filter === 'Grifinória' ? 'active' : ''}`}
            onClick={() => setFilter('Grifinória')}
          >
            Grifinória
          </button>
          <button 
            className={`btn ${filter === 'Sonserina' ? 'active' : ''}`}
            onClick={() => setFilter('Sonserina')}
          >
            Sonserina
          </button>
          <button 
            className={`btn ${filter === 'Corvinal' ? 'active' : ''}`}
            onClick={() => setFilter('Corvinal')}
          >
            Corvinal
          </button>
          <button 
            className={`btn ${filter === 'Lufa-Lufa' ? 'active' : ''}`}
            onClick={() => setFilter('Lufa-Lufa')}
          >
            Lufa-Lufa
          </button>
        </div>
      </div>

      <div className="grid">
        {filteredCharacters.map((character) => (
          <div key={character.id} className="character-card">
            <h3 style={{ color: '#FFD700', marginBottom: '10px' }}>
              {character.name} {!character.isAlive && '💀'}
            </h3>
            
            {character.house && (
              <p style={{ marginBottom: '10px' }}>
                <strong>Casa:</strong> {character.house.name}
              </p>
            )}
            
            {character.bloodStatus && (
              <p style={{ marginBottom: '10px' }}>
                <strong>Sangue:</strong> 
                <span style={{ color: getBloodStatusColor(character.bloodStatus), marginLeft: '5px' }}>
                  {character.bloodStatus}
                </span>
              </p>
            )}
            
            {character.occupation && (
              <p style={{ marginBottom: '10px' }}>
                <strong>Ocupação:</strong> {character.occupation}
              </p>
            )}
            
            {character.patronus && (
              <p style={{ marginBottom: '10px' }}>
                <strong>Patrono:</strong> {character.patronus}
              </p>
            )}
            
            {character.wand && (
              <p style={{ marginBottom: '10px' }}>
                <strong>Varinha:</strong> {character.wand}
              </p>
            )}
            
            {character.description && (
              <p style={{ 
                marginTop: '15px', 
                fontStyle: 'italic',
                borderTop: '1px solid rgba(255,255,255,0.2)',
                paddingTop: '10px'
              }}>
                {character.description}
              </p>
            )}
          </div>
        ))}
      </div>
      
      {filteredCharacters.length === 0 && (
        <div className="card" style={{ textAlign: 'center' }}>
          <p>Nenhum personagem encontrado com os filtros selecionados.</p>
        </div>
      )}
    </div>
  );
};

export default Characters;
