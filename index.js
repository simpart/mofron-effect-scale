/**
 * @file mofron-effect-scale/index.js
 * @param scale effect for mofron
 * @author simpart
 */
const mf = require('mofron');

mf.effect.Scale = class extends mofron.Effect {
    
    constructor (po, p2, p3) {
        try {
            super();
            this.name('Scale');
            this.prmMap('value');
            
            this.prmOpt(po, p2, p3);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    contents (cmp) {
        try {
            let val = this.value();
            cmp.adom().style({
                '-webkit-transform'  : 'scale3d('+ val[0] + ',' + val[1] + ',' + val[2] + ')',
                '-moz-transition'    : 'scale3d('+ val[0] + ',' + val[1] + ',' + val[2] + ')',
                '-o-transition'      : 'scale3d('+ val[0] + ',' + val[1] + ',' + val[2] + ')',
                'transform'          : 'scale3d('+ val[0] + ',' + val[1] + ',' + val[2] + ')'
            });
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    value (x, y, z) {
        try {
            if ( (undefined === x) &&
                 (undefined === y) &&
                 (undefined === z) ) {
                return [this.getMember('x_value'), this.getMember('y_value'), this.getMember('z_value')];
            }
            this.member('x_value', 'number', x, 0);
            this.member('y_value', 'number', y, 0);
            this.member('z_value', 'number', z, 0);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
module.exports = mofron.effect.Scale;
/* end of file */
