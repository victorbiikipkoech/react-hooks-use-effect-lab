import React from 'react';
import { render, screen, act } from '@testing-library/react';
import Question from '../components/Question';

const testQuestion = {
  id: 1,
  prompt: 'lorem testum',
  answers: ['choice 1', 'choice 2', 'choice 3', 'choice 4'],
  correctIndex: 0,
};

const noop = () => {};

test('clears the timeout after unmount', () => {
  jest.spyOn(global, 'clearTimeout');
  const { unmount } = render(
    <Question question={testQuestion} onAnswered={noop} />
  );
  unmount();

  expect(clearTimeout).toHaveBeenCalled();
});


