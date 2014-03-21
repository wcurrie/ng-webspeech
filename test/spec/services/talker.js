'use strict';

describe('Service: Talker', function () {

  // load the service's module
  beforeEach(module('talkerApp'));

  // instantiate service
  var Talker;
  beforeEach(inject(function (_Talker_) {
    Talker = _Talker_;
  }));

  it('should do something', function () {
    expect(!!Talker).toBe(true);
  });

});
