import {describe, expect, it, vi} from 'vitest';
import {checkRoutine} from '../src/';

describe('checkRoutine should', () => {

  it('display "Do Exercise"', () => {
    const routine = checkRoutine();

    expect(routine).toEqual("Do Exercise");
  });

  it('display "Read and study" between 07:00 and 07:59', () => {
    vi.setSystemTime('2024-10-10T02:29:59Z');
    
    const routine = checkRoutine();

    expect(routine).toEqual("Read and study");
  })

});