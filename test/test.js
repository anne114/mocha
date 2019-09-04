import { add, asyncFn } from '../src/common/js/utils.js';
const expect = require('chai').expect;
// describe块称为"测试套件"（test suite），表示一组相关的测试。它是一个函数，第一个参数是测试套件的名称（"加法函数的测试"），第二个参数是一个实际执行的函数
describe('加法函数测试', function () {
  it('add方法应该返回2', function () {
    expect(add(1, 1)).to.be.equal(2);
  });
  it('add方法应该返回3', function () {
    expect(add(1, 2)).to.be.equal(3);
  });
});
describe('测试异步', function () {
  it('返回6', async function () {
    let r = await asyncFn();
    expect(r).to.be.equal(6);
  });
});
