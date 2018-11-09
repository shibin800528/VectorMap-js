import VectorSource from "./Vector";

class GeoVectorSource extends VectorSource {
    constructor(opt_options) {
        const options = opt_options || {};
        super(options);

        //  Custom xhr function
        if (options.loader !== undefined) {
            this.loader_ = options.loader;
        } else if (this.url_ !== undefined) {
            assert(this.format_, 7); // `format` must be set when `url` is set
            // create a XHR feature loader for "url" and "format"
            this.loader_ = xhr(this.url_, /** @type {import("../format/Feature.js").default} */(this.format_));
        }
    }
}
export default GeoVectorSource;