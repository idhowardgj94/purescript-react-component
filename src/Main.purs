module Main where

import Prelude

import Container (toggleButtonContainer)
import Data.Maybe (Maybe(..))
import Effect (Effect)
import Effect.Console (log)
import Effect.Exception(throw)
import React.Basic.DOM (render)
import Web.DOM.NonElementParentNode (getElementById)
-- root node ^
import Web.HTML (window)
import Web.HTML.HTMLDocument (toNonElementParentNode)
import Web.HTML.Window (document)

main :: Effect Unit
main = do
  log "hello, world"
  container <- getElementById "container" =<< (map toNonElementParentNode $ document =<< window)
  case container of
    Nothing -> throw "Container element not found"
    Just c ->
      let app = toggleButtonContainer
        in render app c