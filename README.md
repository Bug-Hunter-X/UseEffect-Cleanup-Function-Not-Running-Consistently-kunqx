# React useEffect Cleanup Function Issue

This repository demonstrates a problem with the cleanup function in React's `useEffect` hook. The cleanup function, intended to run before the next effect, exhibits inconsistent behavior.

## Problem Description

The `MyComponent` component uses `useEffect` to log messages to the console. The effect includes a cleanup function that should log a message before the next render. However, the cleanup function's execution is not always consistent, leading to unexpected behavior. 

## Steps to Reproduce

1. Clone this repository.
2. Run `npm install` to install dependencies.
3. Run `npm start` to start the development server.
4. Observe the console output as you click the button.

## Solution

The solution addresses the issue by ensuring the cleanup function executes correctly before the next effect. See `bugSolution.js` for the corrected code.