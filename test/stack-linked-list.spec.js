/* global describe, it, before */

import chai from 'chai';
import { dataStructures } from '../lib/algo.js';

chai.expect();

const expect = chai.expect;

let lib;

/**
 * StackLinkedList
 * @type {StackLinkedList}
 */
describe('Given an instance of StackLinkedList', () => {
  before(() => {
    const { StackLinkedList } = dataStructures.stacks;
    lib = new StackLinkedList();
  });
  /**
   * isEmpty
   */
  describe('when running StackLinkedList.isEmpty', () => {
    it('isEmpty() returns true.', () => {
      expect(lib.isEmpty()).to.be.equal(true);
    });
  });
  /**
   * push
   */
  describe('when running StackLinkedList.push()', () => {
    it('push() to store all elements in [10, 6, 14, 3, 22, 4, 3, 8, 11, 12].', () => {
      [10, 6, 14, 3, 22, 4, 3, 8, 11, 12].forEach(n => lib.push(n));
      expect(lib.toArray()).to.be.an('array').to.include.members([10, 6, 14, 3, 22, 4, 3, 8, 11, 12]);
    });
  });
  /**
   * pop
   */
  describe('when running StackLinkedList.pop()', () => {
    it('pop() returns value of 12.', () => {
      expect(lib.pop()).to.be.equal(12);
    });
  });
  /**
   * top
   */
  describe('when running StackLinkedList.top()', () => {
    it('top() returns node with value of 11.', () => {
      expect(lib.top()).to.be.equal(11);
    });
  });
  /**
   * isEmpty
   */
  describe('when running StackLinkedList.isEmpty', () => {
    it('isEmpty() returns false.', () => {
      expect(lib.isEmpty()).to.be.equal(false);
    });
  });
});
