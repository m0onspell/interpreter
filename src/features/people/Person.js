import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectPersonAge } from './peopleSlice';

const Person = ({ firstName, lastName, avatar, ageReference, onClick }) => {
  const age = useSelector(selectPersonAge(ageReference));
  const dispatch = useDispatch();
  return (
    <div style={{ textAlign: 'center' }}>
      <img src={avatar} alt="Avatar" />
      <p>
        {firstName} {lastName}
      </p>
      <p>Score: {age}</p>
      <div style={{ textAlign: 'center' }}>
        <button onClick={() => dispatch(onClick())}>Increment</button>
      </div>
    </div>
  );
};

export { Person };
