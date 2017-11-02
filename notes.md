# Notes from Lance's slides

interpolation --

vue binding
element binding
v- prefixing
v-bind
v-model

can put logic/functions right into the attribute interpolation
less code in js side, more code in the view, so when y ou read through the view you know what is happening

vue is a compeonent framework

for instance - cards within a list of cards

when you buildl, th ink about encapsulated components you can build

you can nest components (components made out of other components, for instance a row might be made up of multiple components within the row itself)

declaring a component --->

Vue.component('component-name', {
    stuff
})

<component-name>


## ONE WAY DATA FLOW
vue components have a parent-child relationship. data flows down fand events are emited to trigger actions



# Stuff Caree learned about and doesn't want to forget

typeof before a variable returns the type (duh?)
<a href="https://chrome.google.com/webstore/detail/jsonview/chklaanhfefbnpoihckbnefhakgolnmc?hl=en">john's nifty json plugin</a>

fetch api

arrow functions verus traditional functions, and the way that they handle 'this' - Lancelot can you talk to me more? Caree can you research this please