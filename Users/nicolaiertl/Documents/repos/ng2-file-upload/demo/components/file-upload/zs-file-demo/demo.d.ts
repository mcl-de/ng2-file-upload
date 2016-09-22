import { ElementRef, Renderer, OnInit } from '@angular/core';
import { FileUploader } from '../../../../ng2-file-upload';
export declare class DemoFileUploadComponent implements OnInit {
    url: string;
    queueLimit: number;
    maxFileSize: number;
    autoUpload: boolean;
    allowedMimeType: Array<string>;
    allowedFileType: Array<string>;
    headers: Array<any>;
    private isHover;
    private inputs;
    private uploaderOptions;
    private multiple;
    private element;
    private fileUploadService;
    private renderer;
    constructor(element: ElementRef, fileUploadService: FileUploader, renderer: Renderer);
    ngOnInit(): any;
    onDrop(event: any): void;
    onDragOver(event: any): void;
    onDragLeave(event: any): void;
    onChange($event: any): void;
    private _getTransfer(event);
    private _preventAndStop(event);
    private _haveFiles(types);
}
