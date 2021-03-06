import { QuickPickItem } from 'vscode';

export class CPXItem implements QuickPickItem
{
    location: string;
    version: string;
    
    private _label : string;
    public get label() : string {
        return this._label;
    }
    public set label(v : string) {
        this._label = v;
    }
    

    private _description : string;
    public get description() : string {
        return this._description;
    }
    public set description(v : string) {
        this._description = v;
    }
    

}