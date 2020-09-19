(function (get) {
  'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  var get__default = /*#__PURE__*/_interopDefaultLegacy(get);

  var object = { 'a': [{ 'b': { 'c': 3 } }] };


  const abc = () => {
    console.log(get__default['default'](object, 'a[0].b.c'));
  };

  function App(){
    abc();
    
    return console.log("123");
  }

  App();

}(get));
