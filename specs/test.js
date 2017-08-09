'use strict'
var  Febonachie = require("../practices/Febonachie.js");

describe('test',function () {

    var num = 10;
    it("find  N.st Num",function () {
      var result = Febonachie(num);
      expect(result).toEqual(34);
    })
})
