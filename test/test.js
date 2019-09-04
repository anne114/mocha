import { add } from '../src/common/js/utils.js';
const expect = require('chai').expect;
describe('加法函数测试', () => {
  it('add方法应该返回2', () => {
    expect(add(1, 1)).to.be.equal(2);
  });
  it('add方法应该返回3', () => {
    expect(add(1, 2)).to.be.equal(4);
  });
});
