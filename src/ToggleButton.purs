module ToggleButton where 

import Prelude

import Effect.Console (log)
import React.Basic (JSX)
import React.Basic.Classic (Component, createComponent, make, readState)
import React.Basic.DOM.Events (capture_)
import React.Basic.DOM as R

-- type 別名
type Props = { 
    label :: String
  }


component :: Component Props
component = createComponent "ToggleButton"

toggleButton :: Props -> JSX
toggleButton = make component
  {
    initialState : {
      on: false
    },

    render: \self ->
      R.button
        { onClick: capture_ $
            self.setStateThen _ { on = not self.state.on } do
              nextState <- readState self
              log $ "next state: " <> show nextState
          , children:
            [
              R.text self.props.label
            , R.text if self.state.on
                        then "on"
                        else "off"
            ]
        }
  }
