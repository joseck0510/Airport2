// As an air traffic controller
// To get passengers to a destination
// I want to instruct a plan to land at
//   an airport and confirm that it has landed

// As an air traffic controller
// To get passengers to a destination
// I want to instruct a plan to take off from
//   an airport and confirm that it is no longer in the airport

'use strict';

describe('Feature Test:', function(){
  var plane;
  var airport;

  beforeEach(function(){
    plane = new Plane();
    airport = new Airport();
  });

  it('planes can be instructed to land at an airport', function() {
    plane.land(airport);
    expect(airport.planes()).toContain(plane);
  });

  it('planes can be instructed to take off',function() {
    plane.land(airport)
    plane.takeoff();
    expect(airport.planes()).not.toContain(plane);
  });

});
