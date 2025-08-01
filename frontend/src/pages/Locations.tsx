import React, { useEffect, useState } from 'react';
import { locationsApi } from '../services/api';
import { Location } from '../types';

const Locations: React.FC = () => {
  const [locations, setLocations] = useState<Location[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchLocations();
  }, []);

  const fetchLocations = async () => {
    try {
      setLoading(true);
      const response = await locationsApi.getAll();
      setLocations(response.data);
    } catch (err: any) {
      setError('Erro ao carregar localizações');
      console.error('Erro:', err);
    } finally {
      setLoading(false);
    }
  };

  const getLocationEmoji = (type: string) => {
    switch (type.toLowerCase()) {
      case 'school': return '🏫';
      case 'shopping district': return '🛍️';
      case 'government': return '🏛️';
      case 'prison': return '⛓️';
      case 'forest': return '🌲';
      case 'station': return '🚂';
      case 'castle': return '🏰';
      case 'shop': return '🏪';
      default: return '📍';
    }
  };

  if (loading) return <div className="loading">📍 Mapeando localizações...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <div>
      <h2 className="magical-title" style={{ textAlign: 'center', marginBottom: '30px' }}>
        📍 Mapa do Mundo Mágico
      </h2>
      
      <div className="card" style={{ textAlign: 'center', marginBottom: '30px' }}>
        <h3>🗺️ Guia de Viagem Mágica</h3>
        <p>
          Explore os lugares mais fascinantes do mundo bruxo, desde a majestosa Hogwarts 
          até as ruas movimentadas do Beco Diagonal. Cada local tem sua própria magia e história.
        </p>
        <p style={{ marginTop: '15px', fontStyle: 'italic' }}>
          "Nem todos os que vagam estão perdidos." - J.R.R. Tolkien 
          (Uma citação que Hermione certamente aprovaria)
        </p>
      </div>

      <div className="grid">
        {locations.map((location) => (
          <div key={location.id} className="card">
            <h3 style={{ color: '#FFD700', marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '10px' }}>
              {getLocationEmoji(location.type)} {location.name}
            </h3>
            
            <div style={{ marginBottom: '15px' }}>
              <strong>Tipo:</strong> {location.type}
            </div>
            
            {location.description && (
              <p style={{ 
                lineHeight: '1.6',
                marginTop: '15px',
                borderTop: '1px solid rgba(255,255,255,0.2)',
                paddingTop: '15px'
              }}>
                {location.description}
              </p>
            )}
          </div>
        ))}
      </div>
      
      <div className="card" style={{ marginTop: '40px' }}>
        <h3>🚗 Dicas de Viagem</h3>
        <div className="grid" style={{ marginTop: '20px' }}>
          <div>
            <h4>🚂 Como chegar a Hogwarts:</h4>
            <ul style={{ marginTop: '10px', lineHeight: '1.6' }}>
              <li>Expresso de Hogwarts - Plataforma 9¾</li>
              <li>Aparatação (apenas bruxos experientes)</li>
              <li>Pó de Flu (com permissão especial)</li>
              <li>Vassoura (não recomendado para longas distâncias)</li>
            </ul>
          </div>
          
          <div>
            <h4>🛍️ Compras no Beco Diagonal:</h4>
            <ul style={{ marginTop: '10px', lineHeight: '1.6' }}>
              <li>Olivaras - Varinhas mágicas</li>
              <li>Floreios & Borrões - Livros</li>
              <li>Caldeirões de Qualidade - Caldeirões</li>
              <li>Sereias & Dragões - Poções</li>
            </ul>
          </div>
        </div>
        
        <div style={{ marginTop: '20px', padding: '15px', background: 'rgba(255,215,0,0.1)', borderRadius: '8px' }}>
          <strong>💡 Dica do Professor:</strong> Sempre carregue uma varinha, galeões suficientes 
          e nunca visite o Beco Diagonal à noite sem companhia!
        </div>
      </div>
    </div>
  );
};

export default Locations;
