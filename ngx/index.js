import { __decorate, __extends } from "tslib";
import { Injectable } from '@angular/core';
import { IonicNativePlugin, cordova } from '@ionic-native/core';
var Crop = /** @class */ (function (_super) {
    __extends(Crop, _super);
    function Crop() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Crop.prototype.crop = function (pathToImage, options) { return cordova(this, "crop", { "callbackOrder": "reverse" }, arguments); };
    Crop.pluginName = "Crop";
    Crop.plugin = "cordova-plugin-crop";
    Crop.pluginRef = "plugins";
    Crop.repo = "https://github.com/jeduan/cordova-plugin-crop";
    Crop.platforms = ["Android", "iOS"];
    Crop = __decorate([
        Injectable()
    ], Crop);
    return Crop;
}(IonicNativePlugin));
export { Crop };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2Nyb3Avbmd4L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sOEJBQXNDLE1BQU0sb0JBQW9CLENBQUM7O0lBb0M5Qyx3QkFBaUI7Ozs7SUFVekMsbUJBQUksYUFBQyxXQUFtQixFQUFFLE9BQXFCOzs7Ozs7SUFWcEMsSUFBSTtRQURoQixVQUFVLEVBQUU7T0FDQSxJQUFJO2VBckNqQjtFQXFDMEIsaUJBQWlCO1NBQTlCLElBQUkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb3Jkb3ZhLCBJb25pY05hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBDcm9wT3B0aW9ucyB7XG4gIHF1YWxpdHk/OiBudW1iZXI7XG4gIHRhcmdldEhlaWdodD86IG51bWJlcjtcbiAgdGFyZ2V0V2lkdGg/OiBudW1iZXI7XG59XG5cbi8qKlxuICogQG5hbWUgQ3JvcFxuICogQGRlc2NyaXB0aW9uIENyb3BzIGltYWdlc1xuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBDcm9wIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jcm9wL25neCc7XG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSBjcm9wOiBDcm9wKSB7IH1cbiAqXG4gKiAuLi5cbiAqXG4gKiB0aGlzLmNyb3AuY3JvcCgncGF0aC90by9pbWFnZS5qcGcnLCB7cXVhbGl0eTogNzV9KVxuICogICAudGhlbihcbiAqICAgICBuZXdJbWFnZSA9PiBjb25zb2xlLmxvZygnbmV3IGltYWdlIHBhdGggaXM6ICcgKyBuZXdJbWFnZSksXG4gKiAgICAgZXJyb3IgPT4gY29uc29sZS5lcnJvcignRXJyb3IgY3JvcHBpbmcgaW1hZ2UnLCBlcnJvcilcbiAqICAgKTtcbiAqIGBgYFxuICogQGludGVyZmFjZXNcbiAqIENyb3BPcHRpb25zXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnQ3JvcCcsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWNyb3AnLFxuICBwbHVnaW5SZWY6ICdwbHVnaW5zJyxcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9qZWR1YW4vY29yZG92YS1wbHVnaW4tY3JvcCcsXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUyddLFxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDcm9wIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xuICAvKipcbiAgICogQ3JvcHMgYW4gaW1hZ2VcbiAgICogQHBhcmFtIHtzdHJpbmd9IHBhdGhUb0ltYWdlXG4gICAqIEBwYXJhbSB7Q3JvcE9wdGlvbnN9IFtvcHRpb25zXVxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxzdHJpbmc+fSBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdpdGggdGhlIG5ldyBpbWFnZSBwYXRoLCBvciByZWplY3RzIGlmIGZhaWxlZCB0byBjcm9wLlxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIGNhbGxiYWNrT3JkZXI6ICdyZXZlcnNlJyxcbiAgfSlcbiAgY3JvcChwYXRoVG9JbWFnZTogc3RyaW5nLCBvcHRpb25zPzogQ3JvcE9wdGlvbnMpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgIHJldHVybjtcbiAgfVxufVxuIl19