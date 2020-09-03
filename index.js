// Generated by purs bundle 0.13.8
var PS = {};
(function(exports) {
  "use strict";

  exports.unit = {};
})(PS["Data.Unit"] = PS["Data.Unit"] || {});
(function($PS) {
  // Generated by purs version 0.13.8
  "use strict";
  $PS["Data.Unit"] = $PS["Data.Unit"] || {};
  var exports = $PS["Data.Unit"];
  var $foreign = $PS["Data.Unit"];
  exports["unit"] = $foreign.unit;
})(PS);
(function(exports) {
  "use strict";
  var React =require("react"); 

  exports.createComponent = (function () {
    // Begin component prototype functions
    // (`this`-dependent, defined outside `createComponent`
    // for a slight performance boost)
    function toSelf() {
      var instance = this;
      var setStateThen = function (update) {
        return function (effects) {
          return function () {
            instance.setState(function (state) {
              return { $$state: update(state.$$state) };
            }, effects);
          };
        };
      };
      var self = {
        props: instance.props.$$props,
        state: instance.state === null ? null : instance.state.$$state,
        setState: function (update) {
          return setStateThen(update)(undefined);
        },
        setStateThen: setStateThen,
        instance_: instance,
      };
      return self;
    }

    function componentDidMount() {
      var didMount = this.$$spec.didMount;
      if (didMount !== undefined) {
        didMount(this.toSelf())();
      }
    }

    function shouldComponentUpdate(nextProps, nextState) {
      var shouldUpdate = this.$$spec.shouldUpdate;
      return shouldUpdate === undefined
        ? true
        : shouldUpdate(this.toSelf())({
            nextProps: nextProps.$$props,
            nextState: nextState === null ? null : nextState.$$state,
          });
    }

    function componentDidUpdate(prevProps, prevState) {
      var didUpdate = this.$$spec.didUpdate;
      if (didUpdate !== undefined) {
        didUpdate(this.toSelf())({
          prevProps: prevProps.$$props,
          prevState: prevState === null ? null : prevState.$$state,
        })();
      }
    }

    function componentWillUnmount() {
      this.$$mounted = false;
      var willUnmount = this.$$spec.willUnmount;
      if (willUnmount !== undefined) {
        willUnmount(this.toSelf())();
      }
    }

    function render() {
      return this.$$spec.render(this.toSelf());
    }
    // End component prototype functions

    return function (displayName) {
      var Component = function constructor(props) {
        this.$$mounted = true;
        this.$$spec = props.$$spec;
        this.state =
          // React may optimize components with no state,
          // so we leave state null if it was left as
          // the default value.
          this.$$spec.initialState === undefined
            ? null
            : { $$state: this.$$spec.initialState };
        return this;
      };

      Component.displayName = displayName;
      Component.prototype = Object.create(React.Component.prototype);
      Component.prototype.constructor = Component;
      Component.prototype.toSelf = toSelf;
      Component.prototype.shouldComponentUpdate = shouldComponentUpdate;
      Component.prototype.componentDidMount = componentDidMount;
      Component.prototype.componentDidUpdate = componentDidUpdate;
      Component.prototype.componentWillUnmount = componentWillUnmount;
      Component.prototype.render = render;

      return Component;
    };
  })();

  exports.readState = function (self) {
    return function () {
      var state = self.instance_.state;
      return state === null ? null : state.$$state;
    };
  };

  exports.make = function (_unionDict) {
    return function ($$type) {
      return function ($$spec) {
        var $$specPadded = {
          initialState: $$spec.initialState,
          render: $$spec.render,
          didMount: $$spec.didMount,
          shouldUpdate: $$spec.shouldUpdate,
          didUpdate: $$spec.didUpdate,
          willUnmount: $$spec.willUnmount,
        };
        return function ($$props) {
          var props = {
            $$props: $$props,
            $$spec: $$specPadded,
          };
          return React.createElement($$type, props);
        };
      };
    };
  };
})(PS["React.Basic.Classic"] = PS["React.Basic.Classic"] || {});
(function($PS) {
  // Generated by purs version 0.13.8
  "use strict";
  $PS["React.Basic.Classic"] = $PS["React.Basic.Classic"] || {};
  var exports = $PS["React.Basic.Classic"];
  var $foreign = $PS["React.Basic.Classic"];
  var Data_Unit = $PS["Data.Unit"];
  var makeStateless = function (component) {
      return function (render) {
          return $foreign.make()(component)({
              initialState: Data_Unit.unit,
              render: function (self) {
                  return render(self.props);
              }
          });
      };
  };
  exports["makeStateless"] = makeStateless;
  exports["createComponent"] = $foreign.createComponent;
  exports["readState"] = $foreign.readState;
  exports["make"] = $foreign.make;
})(PS);
(function(exports) {
  "use strict";

  exports.unsafePerformEffect = function (f) {
    return f();
  };
})(PS["Effect.Unsafe"] = PS["Effect.Unsafe"] || {});
(function($PS) {
  // Generated by purs version 0.13.8
  "use strict";
  $PS["Effect.Unsafe"] = $PS["Effect.Unsafe"] || {};
  var exports = $PS["Effect.Unsafe"];
  var $foreign = $PS["Effect.Unsafe"];
  exports["unsafePerformEffect"] = $foreign.unsafePerformEffect;
})(PS);
(function(exports) {
  "use strict";

  const React = require("react");
  const createElement = React.createElement;
  const Fragment = React.Fragment;               

  exports.element = (component) => (props) =>
    Array.isArray(props.children)
      ? createElement.apply(null, [component, props].concat(props.children))
      : createElement(component, props);
})(PS["React.Basic"] = PS["React.Basic"] || {});
(function($PS) {
  // Generated by purs version 0.13.8
  "use strict";
  $PS["React.Basic"] = $PS["React.Basic"] || {};
  var exports = $PS["React.Basic"];
  var $foreign = $PS["React.Basic"];
  exports["element"] = $foreign.element;
})(PS);
(function(exports) {
  "use strict";

  const React = require("react");                  

  exports.unsafeCreateDOMComponent_ = (createElement) => (el) => {
    const flattenDataProp = (props, ref) => {
      var data = null;
      if (props._data != null) {
        data = { _data: undefined };
        Object.entries(props._data).forEach(function (entry) {
          data["data-" + entry[0]] = entry[1];
        });
      }
      var aria = null;
      if (props._aria != null) {
        aria = { _aria: undefined };
        Object.entries(props._aria).forEach(function (entry) {
          aria["aria-" + entry[0]] = entry[1];
        });
      }
      return Object.assign({ ref }, props, data, aria);
    };
    return () => {
      const c = React.forwardRef((props, ref) =>
        createElement(el)(flattenDataProp(props, ref))
      );
      c.displayName = el;
      return c;
    };
  };
})(PS["React.Basic.DOM.Internal"] = PS["React.Basic.DOM.Internal"] || {});
(function($PS) {
  // Generated by purs version 0.13.8
  "use strict";
  $PS["React.Basic.DOM.Internal"] = $PS["React.Basic.DOM.Internal"] || {};
  var exports = $PS["React.Basic.DOM.Internal"];
  var $foreign = $PS["React.Basic.DOM.Internal"];
  var React_Basic = $PS["React.Basic"];                    
  var unsafeCreateDOMComponent = $foreign.unsafeCreateDOMComponent_(React_Basic.element);
  exports["unsafeCreateDOMComponent"] = unsafeCreateDOMComponent;
})(PS);
(function($PS) {
  // Generated by purs version 0.13.8
  "use strict";
  $PS["React.Basic.DOM.Generated"] = $PS["React.Basic.DOM.Generated"] || {};
  var exports = $PS["React.Basic.DOM.Generated"];
  var Effect_Unsafe = $PS["Effect.Unsafe"];
  var React_Basic = $PS["React.Basic"];
  var React_Basic_DOM_Internal = $PS["React.Basic.DOM.Internal"];
  var _div$prime = Effect_Unsafe.unsafePerformEffect(React_Basic_DOM_Internal.unsafeCreateDOMComponent("div"));
  var div$prime = function (dictUnion) {
      return _div$prime;
  };
  var div = function (dictUnion) {
      return React_Basic.element(div$prime());
  };
  var _button$prime = Effect_Unsafe.unsafePerformEffect(React_Basic_DOM_Internal.unsafeCreateDOMComponent("button"));
  var button$prime = function (dictUnion) {
      return _button$prime;
  };
  var button = function (dictUnion) {
      return React_Basic.element(button$prime());
  };
  exports["button"] = button;
  exports["div"] = div;
})(PS);
(function(exports) {
  "use strict";

  exports.cons = function (head) {
    return function (tail) {
      return [head].concat(tail);
    };
  };

  exports.join = function (separator) {
    return function (xs) {
      return xs.join(separator);
    };
  };
})(PS["Data.Show"] = PS["Data.Show"] || {});
(function($PS) {
  // Generated by purs version 0.13.8
  "use strict";
  $PS["Data.Symbol"] = $PS["Data.Symbol"] || {};
  var exports = $PS["Data.Symbol"];      
  var SProxy = (function () {
      function SProxy() {

      };
      SProxy.value = new SProxy();
      return SProxy;
  })();
  var IsSymbol = function (reflectSymbol) {
      this.reflectSymbol = reflectSymbol;
  };
  var reflectSymbol = function (dict) {
      return dict.reflectSymbol;
  };
  exports["IsSymbol"] = IsSymbol;
  exports["reflectSymbol"] = reflectSymbol;
  exports["SProxy"] = SProxy;
})(PS);
(function(exports) {
  "use strict";

  exports.unsafeGet = function (label) {
    return function (rec) {
      return rec[label];
    };
  };
})(PS["Record.Unsafe"] = PS["Record.Unsafe"] || {});
(function($PS) {
  // Generated by purs version 0.13.8
  "use strict";
  $PS["Record.Unsafe"] = $PS["Record.Unsafe"] || {};
  var exports = $PS["Record.Unsafe"];
  var $foreign = $PS["Record.Unsafe"];
  exports["unsafeGet"] = $foreign.unsafeGet;
})(PS);
(function($PS) {
  // Generated by purs version 0.13.8
  "use strict";
  $PS["Type.Data.RowList"] = $PS["Type.Data.RowList"] || {};
  var exports = $PS["Type.Data.RowList"];
  var RLProxy = (function () {
      function RLProxy() {

      };
      RLProxy.value = new RLProxy();
      return RLProxy;
  })();
  exports["RLProxy"] = RLProxy;
})(PS);
(function($PS) {
  // Generated by purs version 0.13.8
  "use strict";
  $PS["Data.Show"] = $PS["Data.Show"] || {};
  var exports = $PS["Data.Show"];
  var $foreign = $PS["Data.Show"];
  var Data_Symbol = $PS["Data.Symbol"];
  var Record_Unsafe = $PS["Record.Unsafe"];
  var Type_Data_RowList = $PS["Type.Data.RowList"];                
  var ShowRecordFields = function (showRecordFields) {
      this.showRecordFields = showRecordFields;
  };
  var Show = function (show) {
      this.show = show;
  };                                                 
  var showRecordFieldsNil = new ShowRecordFields(function (v) {
      return function (v1) {
          return [  ];
      };
  });
  var showRecordFields = function (dict) {
      return dict.showRecordFields;
  };
  var showRecord = function (dictRowToList) {
      return function (dictShowRecordFields) {
          return new Show(function (record) {
              var v = showRecordFields(dictShowRecordFields)(Type_Data_RowList.RLProxy.value)(record);
              if (v.length === 0) {
                  return "{}";
              };
              return $foreign.join(" ")([ "{", $foreign.join(", ")(v), "}" ]);
          });
      };
  };                                             
  var showBoolean = new Show(function (v) {
      if (v) {
          return "true";
      };
      if (!v) {
          return "false";
      };
      throw new Error("Failed pattern match at Data.Show (line 20, column 1 - line 22, column 23): " + [ v.constructor.name ]);
  });
  var show = function (dict) {
      return dict.show;
  };
  var showRecordFieldsCons = function (dictIsSymbol) {
      return function (dictShowRecordFields) {
          return function (dictShow) {
              return new ShowRecordFields(function (v) {
                  return function (record) {
                      var tail = showRecordFields(dictShowRecordFields)(Type_Data_RowList.RLProxy.value)(record);
                      var key = Data_Symbol.reflectSymbol(dictIsSymbol)(Data_Symbol.SProxy.value);
                      var focus = Record_Unsafe.unsafeGet(key)(record);
                      return $foreign.cons($foreign.join(": ")([ key, show(dictShow)(focus) ]))(tail);
                  };
              });
          };
      };
  };
  exports["show"] = show;
  exports["showBoolean"] = showBoolean;
  exports["showRecord"] = showRecord;
  exports["showRecordFieldsNil"] = showRecordFieldsNil;
  exports["showRecordFieldsCons"] = showRecordFieldsCons;
})(PS);
(function(exports) {
  "use strict";

  exports.log = function (s) {
    return function () {
      console.log(s);
      return {};
    };
  };
})(PS["Effect.Console"] = PS["Effect.Console"] || {});
(function($PS) {
  // Generated by purs version 0.13.8
  "use strict";
  $PS["Effect.Console"] = $PS["Effect.Console"] || {};
  var exports = $PS["Effect.Console"];
  var $foreign = $PS["Effect.Console"];
  exports["log"] = $foreign.log;
})(PS);
(function(exports) {
  "use strict";

  const ReactDOM = require("react-dom");

  exports["render'"] = (jsx) => (node) => (callback) => () =>
    ReactDOM.render(jsx, node, callback);
})(PS["React.Basic.DOM"] = PS["React.Basic.DOM"] || {});
(function($PS) {
  // Generated by purs version 0.13.8
  "use strict";
  $PS["Control.Apply"] = $PS["Control.Apply"] || {};
  var exports = $PS["Control.Apply"];                    
  var Apply = function (Functor0, apply) {
      this.Functor0 = Functor0;
      this.apply = apply;
  };                      
  var apply = function (dict) {
      return dict.apply;
  };
  exports["Apply"] = Apply;
  exports["apply"] = apply;
})(PS);
(function($PS) {
  // Generated by purs version 0.13.8
  "use strict";
  $PS["Control.Applicative"] = $PS["Control.Applicative"] || {};
  var exports = $PS["Control.Applicative"];
  var Control_Apply = $PS["Control.Apply"];        
  var Applicative = function (Apply0, pure) {
      this.Apply0 = Apply0;
      this.pure = pure;
  };
  var pure = function (dict) {
      return dict.pure;
  };
  var liftA1 = function (dictApplicative) {
      return function (f) {
          return function (a) {
              return Control_Apply.apply(dictApplicative.Apply0())(pure(dictApplicative)(f))(a);
          };
      };
  };
  exports["Applicative"] = Applicative;
  exports["pure"] = pure;
  exports["liftA1"] = liftA1;
})(PS);
(function(exports) {
  "use strict";

  exports.pureE = function (a) {
    return function () {
      return a;
    };
  };

  exports.bindE = function (a) {
    return function (f) {
      return function () {
        return f(a())();
      };
    };
  };
})(PS["Effect"] = PS["Effect"] || {});
(function($PS) {
  // Generated by purs version 0.13.8
  "use strict";
  $PS["Data.Function"] = $PS["Data.Function"] || {};
  var exports = $PS["Data.Function"];
  var flip = function (f) {
      return function (b) {
          return function (a) {
              return f(a)(b);
          };
      };
  };
  exports["flip"] = flip;
})(PS);
(function($PS) {
  // Generated by purs version 0.13.8
  "use strict";
  $PS["Control.Bind"] = $PS["Control.Bind"] || {};
  var exports = $PS["Control.Bind"];
  var Data_Function = $PS["Data.Function"];
  var Bind = function (Apply0, bind) {
      this.Apply0 = Apply0;
      this.bind = bind;
  };                     
  var bind = function (dict) {
      return dict.bind;
  };
  var bindFlipped = function (dictBind) {
      return Data_Function.flip(bind(dictBind));
  };
  exports["Bind"] = Bind;
  exports["bind"] = bind;
  exports["bindFlipped"] = bindFlipped;
})(PS);
(function($PS) {
  // Generated by purs version 0.13.8
  "use strict";
  $PS["Control.Monad"] = $PS["Control.Monad"] || {};
  var exports = $PS["Control.Monad"];
  var Control_Applicative = $PS["Control.Applicative"];
  var Control_Bind = $PS["Control.Bind"];                
  var Monad = function (Applicative0, Bind1) {
      this.Applicative0 = Applicative0;
      this.Bind1 = Bind1;
  };
  var ap = function (dictMonad) {
      return function (f) {
          return function (a) {
              return Control_Bind.bind(dictMonad.Bind1())(f)(function (f$prime) {
                  return Control_Bind.bind(dictMonad.Bind1())(a)(function (a$prime) {
                      return Control_Applicative.pure(dictMonad.Applicative0())(f$prime(a$prime));
                  });
              });
          };
      };
  };
  exports["Monad"] = Monad;
  exports["ap"] = ap;
})(PS);
(function($PS) {
  // Generated by purs version 0.13.8
  "use strict";
  $PS["Data.Functor"] = $PS["Data.Functor"] || {};
  var exports = $PS["Data.Functor"];               
  var Functor = function (map) {
      this.map = map;
  };
  var map = function (dict) {
      return dict.map;
  };
  exports["Functor"] = Functor;
  exports["map"] = map;
})(PS);
(function($PS) {
  // Generated by purs version 0.13.8
  "use strict";
  $PS["Effect"] = $PS["Effect"] || {};
  var exports = $PS["Effect"];
  var $foreign = $PS["Effect"];
  var Control_Applicative = $PS["Control.Applicative"];
  var Control_Apply = $PS["Control.Apply"];
  var Control_Bind = $PS["Control.Bind"];
  var Control_Monad = $PS["Control.Monad"];
  var Data_Functor = $PS["Data.Functor"];                    
  var monadEffect = new Control_Monad.Monad(function () {
      return applicativeEffect;
  }, function () {
      return bindEffect;
  });
  var bindEffect = new Control_Bind.Bind(function () {
      return applyEffect;
  }, $foreign.bindE);
  var applyEffect = new Control_Apply.Apply(function () {
      return functorEffect;
  }, Control_Monad.ap(monadEffect));
  var applicativeEffect = new Control_Applicative.Applicative(function () {
      return applyEffect;
  }, $foreign.pureE);
  var functorEffect = new Data_Functor.Functor(Control_Applicative.liftA1(applicativeEffect));
  exports["functorEffect"] = functorEffect;
  exports["applicativeEffect"] = applicativeEffect;
  exports["bindEffect"] = bindEffect;
})(PS);
(function(exports) {
  "use strict";

  // module Unsafe.Coerce

  exports.unsafeCoerce = function (x) {
    return x;
  };
})(PS["Unsafe.Coerce"] = PS["Unsafe.Coerce"] || {});
(function($PS) {
  // Generated by purs version 0.13.8
  "use strict";
  $PS["Unsafe.Coerce"] = $PS["Unsafe.Coerce"] || {};
  var exports = $PS["Unsafe.Coerce"];
  var $foreign = $PS["Unsafe.Coerce"];
  exports["unsafeCoerce"] = $foreign.unsafeCoerce;
})(PS);
(function($PS) {
  // Generated by purs version 0.13.8
  "use strict";
  $PS["React.Basic.DOM"] = $PS["React.Basic.DOM"] || {};
  var exports = $PS["React.Basic.DOM"];
  var $foreign = $PS["React.Basic.DOM"];
  var Control_Applicative = $PS["Control.Applicative"];
  var Data_Unit = $PS["Data.Unit"];
  var Effect = $PS["Effect"];
  var Unsafe_Coerce = $PS["Unsafe.Coerce"];                
  var text = Unsafe_Coerce.unsafeCoerce;
  var render = function (jsx) {
      return function (node) {
          return $foreign["render'"](jsx)(node)(Control_Applicative.pure(Effect.applicativeEffect)(Data_Unit.unit));
      };
  };
  exports["render"] = render;
  exports["text"] = text;
})(PS);
(function($PS) {
  // Generated by purs version 0.13.8
  "use strict";
  $PS["Control.Semigroupoid"] = $PS["Control.Semigroupoid"] || {};
  var exports = $PS["Control.Semigroupoid"];
  var Semigroupoid = function (compose) {
      this.compose = compose;
  };
  var semigroupoidFn = new Semigroupoid(function (f) {
      return function (g) {
          return function (x) {
              return f(g(x));
          };
      };
  });
  var compose = function (dict) {
      return dict.compose;
  };
  var composeFlipped = function (dictSemigroupoid) {
      return function (f) {
          return function (g) {
              return compose(dictSemigroupoid)(g)(f);
          };
      };
  };
  exports["composeFlipped"] = composeFlipped;
  exports["semigroupoidFn"] = semigroupoidFn;
})(PS);
(function($PS) {
  // Generated by purs version 0.13.8
  "use strict";
  $PS["Control.Category"] = $PS["Control.Category"] || {};
  var exports = $PS["Control.Category"];
  var Control_Semigroupoid = $PS["Control.Semigroupoid"];                
  var Category = function (Semigroupoid0, identity) {
      this.Semigroupoid0 = Semigroupoid0;
      this.identity = identity;
  };
  var identity = function (dict) {
      return dict.identity;
  };
  var categoryFn = new Category(function () {
      return Control_Semigroupoid.semigroupoidFn;
  }, function (x) {
      return x;
  });
  exports["identity"] = identity;
  exports["categoryFn"] = categoryFn;
})(PS);
(function($PS) {
  // Generated by purs version 0.13.8
  "use strict";
  $PS["React.Basic.Events"] = $PS["React.Basic.Events"] || {};
  var exports = $PS["React.Basic.Events"];
  var Control_Category = $PS["Control.Category"];
  var Control_Semigroupoid = $PS["Control.Semigroupoid"];          
  var EventFn = function (x) {
      return x;
  };
  var unsafeEventFn = EventFn;
  var semigroupoidBuilder = Control_Semigroupoid.semigroupoidFn;
  var handler = function (v) {
      return function (cb) {
          return function ($22) {
              return cb(v($22))();
          };
      };
  };
  var categoryBuilder = Control_Category.categoryFn;
  exports["unsafeEventFn"] = unsafeEventFn;
  exports["handler"] = handler;
  exports["semigroupoidBuilder"] = semigroupoidBuilder;
  exports["categoryBuilder"] = categoryBuilder;
})(PS);
(function($PS) {
  // Generated by purs version 0.13.8
  "use strict";
  $PS["React.Basic.DOM.Events"] = $PS["React.Basic.DOM.Events"] || {};
  var exports = $PS["React.Basic.DOM.Events"];
  var Control_Category = $PS["Control.Category"];
  var Control_Semigroupoid = $PS["Control.Semigroupoid"];
  var Effect_Unsafe = $PS["Effect.Unsafe"];
  var React_Basic_Events = $PS["React.Basic.Events"];
  var stopPropagation = React_Basic_Events.unsafeEventFn(function (e) {
      return Effect_Unsafe.unsafePerformEffect(function __do() {
          e.stopPropagation();
          return e;
      });
  });
  var preventDefault = React_Basic_Events.unsafeEventFn(function (e) {
      return Effect_Unsafe.unsafePerformEffect(function __do() {
          e.preventDefault();
          return e;
      });
  });
  var capture = function (eventFn) {
      return React_Basic_Events.handler(Control_Semigroupoid.composeFlipped(React_Basic_Events.semigroupoidBuilder)(preventDefault)(Control_Semigroupoid.composeFlipped(React_Basic_Events.semigroupoidBuilder)(stopPropagation)(eventFn)));
  };
  var capture_ = function (cb) {
      return capture(Control_Category.identity(React_Basic_Events.categoryBuilder))(function (v) {
          return cb;
      });
  };
  exports["capture_"] = capture_;
})(PS);
(function($PS) {
  "use strict";
  $PS["ToggleButton"] = $PS["ToggleButton"] || {};
  var exports = $PS["ToggleButton"];
  var Data_Show = $PS["Data.Show"];
  var Data_Symbol = $PS["Data.Symbol"];
  var Effect_Console = $PS["Effect.Console"];
  var React_Basic_Classic = $PS["React.Basic.Classic"];
  var React_Basic_DOM = $PS["React.Basic.DOM"];
  var React_Basic_DOM_Events = $PS["React.Basic.DOM.Events"];
  var React_Basic_DOM_Generated = $PS["React.Basic.DOM.Generated"];                
  var component = React_Basic_Classic.createComponent("ToggleButton");
  var toggleButton = React_Basic_Classic.make()(component)({
      initialState: {
          on: false
      },
      render: function (self) {
          return React_Basic_DOM_Generated.button()({
              onClick: React_Basic_DOM_Events.capture_(self.setStateThen(function (v) {
                  return {
                      on: !self.state.on
                  };
              })(function __do() {
                  var nextState = React_Basic_Classic.readState(self)();
                  return Effect_Console.log("next state: " + Data_Show.show(Data_Show.showRecord()(Data_Show.showRecordFieldsCons(new Data_Symbol.IsSymbol(function () {
                      return "on";
                  }))(Data_Show.showRecordFieldsNil)(Data_Show.showBoolean)))(nextState))();
              })),
              children: [ React_Basic_DOM.text(self.props.label), React_Basic_DOM.text((function () {
                  if (self.state.on) {
                      return "on";
                  };
                  return "off";
              })()) ]
          });
      }
  });
  exports["toggleButton"] = toggleButton;
})(PS);
(function($PS) {
  "use strict";
  $PS["Container"] = $PS["Container"] || {};
  var exports = $PS["Container"];
  var Data_Unit = $PS["Data.Unit"];
  var React_Basic_Classic = $PS["React.Basic.Classic"];
  var React_Basic_DOM_Generated = $PS["React.Basic.DOM.Generated"];
  var ToggleButton = $PS["ToggleButton"];                
  var component = React_Basic_Classic.createComponent("Container");

  // #infex, left
  var toggleButtonContainer = React_Basic_Classic.makeStateless(component)(function (v) {
      return React_Basic_DOM_Generated.div()({
          children: [ ToggleButton.toggleButton({
              label: "A"
          }), ToggleButton.toggleButton({
              label: "B"
          }) ]
      });
  })(Data_Unit.unit);
  exports["toggleButtonContainer"] = toggleButtonContainer;
})(PS);
(function($PS) {
  // Generated by purs version 0.13.8
  "use strict";
  $PS["Data.Maybe"] = $PS["Data.Maybe"] || {};
  var exports = $PS["Data.Maybe"];                 
  var Nothing = (function () {
      function Nothing() {

      };
      Nothing.value = new Nothing();
      return Nothing;
  })();
  var Just = (function () {
      function Just(value0) {
          this.value0 = value0;
      };
      Just.create = function (value0) {
          return new Just(value0);
      };
      return Just;
  })();
  exports["Nothing"] = Nothing;
  exports["Just"] = Just;
})(PS);
(function(exports) {
  "use strict";          

  exports.nullable = function (a, r, f) {
    return a == null ? r : f(a);
  };
})(PS["Data.Nullable"] = PS["Data.Nullable"] || {});
(function($PS) {
  // Generated by purs version 0.13.8
  "use strict";
  $PS["Data.Nullable"] = $PS["Data.Nullable"] || {};
  var exports = $PS["Data.Nullable"];
  var $foreign = $PS["Data.Nullable"];
  var Data_Maybe = $PS["Data.Maybe"];                                   
  var toMaybe = function (n) {
      return $foreign.nullable(n, Data_Maybe.Nothing.value, Data_Maybe.Just.create);
  };
  exports["toMaybe"] = toMaybe;
})(PS);
(function(exports) {
  "use strict";

  exports.error = function (msg) {
    return new Error(msg);
  };

  exports.throwException = function (e) {
    return function () {
      throw e;
    };
  };
})(PS["Effect.Exception"] = PS["Effect.Exception"] || {});
(function($PS) {
  // Generated by purs version 0.13.8
  "use strict";
  $PS["Effect.Exception"] = $PS["Effect.Exception"] || {};
  var exports = $PS["Effect.Exception"];
  var $foreign = $PS["Effect.Exception"];
  var $$throw = function ($2) {
      return $foreign.throwException($foreign.error($2));
  };
  exports["throw"] = $$throw;
})(PS);
(function(exports) {
  "use strict";

  exports._getElementById = function (id) {
    return function (node) {
      return function () {
        return node.getElementById(id);
      };
    };
  };
})(PS["Web.DOM.NonElementParentNode"] = PS["Web.DOM.NonElementParentNode"] || {});
(function($PS) {
  // Generated by purs version 0.13.8
  "use strict";
  $PS["Web.DOM.NonElementParentNode"] = $PS["Web.DOM.NonElementParentNode"] || {};
  var exports = $PS["Web.DOM.NonElementParentNode"];
  var $foreign = $PS["Web.DOM.NonElementParentNode"];
  var Data_Functor = $PS["Data.Functor"];
  var Data_Nullable = $PS["Data.Nullable"];
  var Effect = $PS["Effect"];                
  var getElementById = function (eid) {
      var $0 = Data_Functor.map(Effect.functorEffect)(Data_Nullable.toMaybe);
      var $1 = $foreign["_getElementById"](eid);
      return function ($2) {
          return $0($1($2));
      };
  };
  exports["getElementById"] = getElementById;
})(PS);
(function(exports) {
  /* global window */
  "use strict";

  exports.window = function () {
    return window;
  };
})(PS["Web.HTML"] = PS["Web.HTML"] || {});
(function($PS) {
  // Generated by purs version 0.13.8
  "use strict";
  $PS["Web.HTML"] = $PS["Web.HTML"] || {};
  var exports = $PS["Web.HTML"];
  var $foreign = $PS["Web.HTML"];
  exports["window"] = $foreign.window;
})(PS);
(function($PS) {
  // Generated by purs version 0.13.8
  "use strict";
  $PS["Web.HTML.HTMLDocument"] = $PS["Web.HTML.HTMLDocument"] || {};
  var exports = $PS["Web.HTML.HTMLDocument"];
  var Unsafe_Coerce = $PS["Unsafe.Coerce"];     
  var toNonElementParentNode = Unsafe_Coerce.unsafeCoerce;
  exports["toNonElementParentNode"] = toNonElementParentNode;
})(PS);
(function(exports) {
  "use strict";

  exports.document = function (window) {
    return function () {
      return window.document;
    };
  };
})(PS["Web.HTML.Window"] = PS["Web.HTML.Window"] || {});
(function($PS) {
  // Generated by purs version 0.13.8
  "use strict";
  $PS["Web.HTML.Window"] = $PS["Web.HTML.Window"] || {};
  var exports = $PS["Web.HTML.Window"];
  var $foreign = $PS["Web.HTML.Window"];
  exports["document"] = $foreign.document;
})(PS);
(function($PS) {
  "use strict";
  $PS["Main"] = $PS["Main"] || {};
  var exports = $PS["Main"];
  var Container = $PS["Container"];
  var Control_Bind = $PS["Control.Bind"];
  var Data_Functor = $PS["Data.Functor"];
  var Data_Maybe = $PS["Data.Maybe"];
  var Effect = $PS["Effect"];
  var Effect_Console = $PS["Effect.Console"];
  var Effect_Exception = $PS["Effect.Exception"];
  var React_Basic_DOM = $PS["React.Basic.DOM"];
  var Web_DOM_NonElementParentNode = $PS["Web.DOM.NonElementParentNode"];
  var Web_HTML = $PS["Web.HTML"];
  var Web_HTML_HTMLDocument = $PS["Web.HTML.HTMLDocument"];
  var Web_HTML_Window = $PS["Web.HTML.Window"];                
  var main = function __do() {
      Effect_Console.log("hello, world")();
      var container = Control_Bind.bindFlipped(Effect.bindEffect)(Web_DOM_NonElementParentNode.getElementById("container"))(Data_Functor.map(Effect.functorEffect)(Web_HTML_HTMLDocument.toNonElementParentNode)(Control_Bind.bindFlipped(Effect.bindEffect)(Web_HTML_Window.document)(Web_HTML.window)))();
      if (container instanceof Data_Maybe.Nothing) {
          return Effect_Exception["throw"]("Container element not found")();
      };
      if (container instanceof Data_Maybe.Just) {
          return React_Basic_DOM.render(Container.toggleButtonContainer)(container.value0)();
      };
      throw new Error("Failed pattern match at Main (line 21, column 3 - line 25, column 24): " + [ container.constructor.name ]);
  };
  exports["main"] = main;
})(PS);
PS["Main"].main();