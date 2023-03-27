import * as vscode from "vscode";

let prayingInterval: ReturnType<typeof setInterval>;
const prayingIntervalTime = 1000 * 60 * 20;

export function activate(context: vscode.ExtensionContext) {
  prayingInterval = setInterval(() => {
    vscode.window.showInformationMessage("صلي على النبي محمد ﷺ");
  }, prayingIntervalTime);
}

// This method is called when your extension is deactivated
export function deactivate() {
  clearInterval(prayingInterval);
}
