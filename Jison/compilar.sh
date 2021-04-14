#!/bin/zsh

echo compilando archivo jison...
jison analyzer.jison
echo ----------------------------------------

echo moviendo archivo
cp analyzer.js ../src/analizador/
echo ----------------------------------------
