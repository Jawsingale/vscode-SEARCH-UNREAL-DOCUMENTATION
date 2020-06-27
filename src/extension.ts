
import * as vscode from 'vscode';
import * as open from 'open';

export function activate(context: vscode.ExtensionContext) {
	let disposable = vscode.commands.registerCommand('search-unreal-documentation', () => {
		const editor = vscode.window.activeTextEditor;
		let selection = editor?.document.getText(editor.selection);
		let url = 'https://www.unrealengine.com/en-US/bing-search?x=0&y=0&filter=Documentation&keyword=' + selection;

		open(url);
	});

	context.subscriptions.push(disposable);
}

export function deactivate() {}
