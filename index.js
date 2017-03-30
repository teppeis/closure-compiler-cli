#!/usr/bin/env node

'use strict';

const spawn = require('child_process').spawn;
const ClosureCompiler = require('google-closure-compiler').compiler;

const args = ['-jar', ClosureCompiler.COMPILER_PATH].concat(process.argv.slice(2));
const child = spawn('java', args, {stdio: 'inherit'});
child.on('close', code => {
  process.exitCode = code;
});
