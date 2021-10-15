"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deactivate = exports.activate = void 0;
const vscode = require("vscode");
const { exec } = require('child_process');
const path = require("path");
var player = require('play-sound')();
const _basePath = path.join(__dirname, '..');
const _keyboard00 = path.join(__dirname, 'sound', 'keyboard00.mp3');
const _keyboard07 = path.join(__dirname, 'sound', 'keyboard07.mp3');
function activate(context) {
    let activeEditor = vscode.window.activeTextEditor;
    vscode.workspace.onDidChangeTextDocument(event => {
        //変化検知
        if (activeEditor && event.document === activeEditor.document) {
            for (const change of event.contentChanges) {
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
exports.activate = activate;
function deactivate() { }
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map