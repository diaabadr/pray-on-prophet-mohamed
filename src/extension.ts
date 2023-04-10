import * as vscode from "vscode";

let prayingInterval: ReturnType<typeof setInterval>;
const prayingIntervalTime = 1000 * 60 * 20;
let intervalRunning = false;
export function activate(context: vscode.ExtensionContext) {
  if (intervalRunning) {
    return;
  }
  prayingInterval = setInterval(() => {
    vscode.window.showInformationMessage("صلي على النبي محمد ﷺ");
    intervalRunning = true;
  }, prayingIntervalTime);
}

// This method is called when your extension is deactivated
export function deactivate() {
  clearInterval(prayingInterval);
  intervalRunning = false;
}
