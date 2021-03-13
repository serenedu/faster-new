import { displayName } from '../package.json'

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate() {
  // Use the console to output diagnostic information (console.log) and errors (console.error)
  // This line of code will only be executed once when your extension is activated
  console.log(`Extension "${displayName}" is activated.`)
}

// this method is called when your extension is deactivated
export function deactivate() {
  console.log(`Extension "${displayName}" is deactivated.`)
}
