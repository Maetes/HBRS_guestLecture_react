import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import HEROS from '../../data/heros';
import { Context } from '../../App';

const Success = () => {
  const { username, password } = useContext(Context);
  const history = useHistory();
  if (!username[0].trim() && !password[0].trim()) {
    alert('bitte einloggen');
    history.push('/');
  }
  return (
    <div>
      {HEROS.map(item => {
        return (
          <div key={item.id}>
            <img src={require(`../../assets/${item.pic}`)} />
            <h2>{item.name}</h2>
            <p>{item.description}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Success;
