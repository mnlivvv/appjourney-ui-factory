#!/usr/bin/env node

import { execSync } from 'child_process';

console.log('Testing TypeScript imports...');

try {
  // Run TypeScript compiler in noEmit mode to check for errors
  execSync('npx tsc --noEmit', { stdio: 'inherit' });
  console.log('✅ TypeScript import checks passed!');
} catch (error) {
  console.error('❌ TypeScript import checks failed!');
  process.exit(1);
}