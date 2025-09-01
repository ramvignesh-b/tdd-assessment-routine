import {describe, expect, it} from 'vitest';
import {checkRoutine} from '../src/';

describe('checkRoutine should', () => {

  it('display "Do Exercise"', () => {
    const routine = checkRoutine();

    expect(routine).toEqual("Do Exercise");
  });

});