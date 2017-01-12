"use strict";
var core_1 = require('@angular/core');
var FileSelectDirective = (function () {
    function FileSelectDirective(element) {
        this.element = element;
    }
    FileSelectDirective.prototype.getOptions = function () {
        return this.uploader.options;
    };
    FileSelectDirective.prototype.getFilters = function () {
        return void 0;
    };
    FileSelectDirective.prototype.isEmptyAfterSelection = function () {
        return !!this.element.nativeElement.attributes.multiple;
    };
    FileSelectDirective.prototype.onChange = function () {
        var files = this.element.nativeElement.files;
        var options = this.getOptions();
        var filters = this.getFilters();
        this.uploader.addToQueue(files, options, filters);
        if (this.isEmptyAfterSelection()) {
        }
    };
    FileSelectDirective.decorators = [
        { type: core_1.Directive, args: [{ selector: '[ng2FileSelect]' },] },
    ];
    FileSelectDirective.ctorParameters = function () { return [
        { type: core_1.ElementRef, },
    ]; };
    FileSelectDirective.propDecorators = {
        'uploader': [{ type: core_1.Input },],
        'onChange': [{ type: core_1.HostListener, args: ['change',] },],
    };
    return FileSelectDirective;
}());
exports.FileSelectDirective = FileSelectDirective;
//# sourceMappingURL=file-select.directive.js.map