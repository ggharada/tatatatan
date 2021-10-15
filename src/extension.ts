import * as vscode from 'vscode';
import * as child_process from 'child_process';
const {exec} = require('child_process');
import * as path from 'path';
var player = require('play-sound')();
const _basePath: string = path.join(__dirname, '..');

const _keyboard00: string = path.join(_basePath, 'sound', 'keyboard00.mp3');
const _keyboard07: string = path.join(_basePath, 'sound', 'keyboard07.mp3');

export function activate(context: vscode.ExtensionContext) {
	let activeEditor = vscode.window.activeTextEditor;
	vscode.workspace.onDidChangeTextDocument(event => {
		//変化検知
		if (activeEditor && event.document === activeEditor.document) {
			for (const change of event.contentChanges){
				let pressedkey = change.text;
				//改行が押されたら大きい音
				switch (pressedkey) {
					case '\n':
						player.play(_keyboard07);
						break;

					default:
						player.play(_keyboard00);
						break;
				}
			}	
		
	}
	}, null, context.subscriptions);
}

export function deactivate() {}