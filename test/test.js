const expect = require('chai').expect;
const {pipelineSync} = require('../index');
const {operations} = require('../index');
const {set} = require('../index');

describe('pipeline', () => {
    it('pipeline exists', () => {
        expect(pipelineSync).to.be.ok;
    })
    it('works for 2', () => {
        expect(pipelineSync('set 1 | add 1 | mult 21')).to.eql(42);
    })
    
})
describe('operations', () => {
    it('sets', () => {
        expect(operations.set(0, 2)).to.be.eql(2);
    })
})