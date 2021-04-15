#!/bin/zsh

echo compilando archivo jison...
jison Analyzer.jison
echo ----------------------------------------

echo moviendo archivo
mv Analyzer.js ../src/analizador/
echo ----------------------------------------
