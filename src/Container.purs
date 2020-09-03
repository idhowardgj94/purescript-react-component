module Container where

import Prelude

import React.Basic (JSX)
import React.Basic.Classic (Component, createComponent, makeStateless)
import React.Basic.DOM as R
import ToggleButton (toggleButton)

component :: Component Unit
component = createComponent "Container"

-- #infex, left
toggleButtonContainer :: JSX
toggleButtonContainer = unit # makeStateless component \_ ->
  R.div
    {
      children:
      [
        toggleButton {label: "A"}
      , toggleButton {label: "B"}
      ]
    }