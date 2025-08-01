import axios from 'axios';
import React, { useEffect, useState } from 'react';

const ApiTest: React.FC = () => {
  const [status, setStatus] = useState<string>('Testando...');
  const [characters, setCharacters] = useState<any[]>([]);

  useEffect(() => {
    testConnection();
  }, []);

  const testConnection = async () => {
    try {
      // Teste 1: Health check
      const healthResponse = await axios.get('http://localhost:3001/api');
      console.log('Health check:', healthResponse.data);
      
      // Teste 2: Buscar personagens
      const charactersResponse = await axios.get('http://localhost:3001/api/characters');
      console.log('Characters response:', charactersResponse.data);
      
      setCharacters(charactersResponse.data);
      setStatus(`✅ Conectado! Encontrados ${charactersResponse.data.length} personagens`);
      
    } catch (error: any) {
      console.error('Erro de conexão:', error);
      if (error.code === 'ECONNREFUSED') {
        setStatus('❌ Backend não está rodando na porta 3001');
      } else {
        setStatus(`❌ Erro: ${error.message}`);
      }
    }
  };

  return (
    <div style={{ padding: '20px', background: '#f0f0f0', margin: '20px', borderRadius: '8px' }}>
      <h3>🔍 Teste de Conectividade da API</h3>
      <p><strong>Status:</strong> {status}</p>
      
      {characters.length > 0 && (
        <div>
          <h4>Personagens encontrados:</h4>
          <ul>
            {characters.slice(0, 5).map((character, index) => (
              <li key={index}>
                {character.name} {character.house ? `(${character.house.name})` : '(Sem casa)'}
              </li>
            ))}
          </ul>
          {characters.length > 5 && <p>... e mais {characters.length - 5} personagens</p>}
        </div>
      )}
      
      <button onClick={testConnection} style={{ marginTop: '10px', padding: '5px 10px' }}>
        🔄 Testar Novamente
      </button>
    </div>
  );
};

export default ApiTest;
