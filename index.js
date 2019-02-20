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
            this.prmMap(['x_value', 'y_value', 'z_value']);
            
            this.x_value([0, 0]);
            this.y_value([0, 0]);
            this.z_value([0, 0]);
            
            this.prmOpt(po, p2, p3);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    contents (eid, cmp) {
        try {
            cmp.adom().style({
                '-webkit-transform'  : 'scale3d('+ this.x_value()[eid] + ',' + this.y_value()[eid] + ',' + this.z_value()[eid] + ')',
                '-moz-transition'    : 'scale3d('+ this.x_value()[eid] + ',' + this.y_value()[eid] + ',' + this.z_value()[eid] + ')',
                '-o-transition'      : 'scale3d('+ this.x_value()[eid] + ',' + this.y_value()[eid] + ',' + this.z_value()[eid] + ')',
                'transform'          : 'scale3d('+ this.x_value()[eid] + ',' + this.y_value()[eid] + ',' + this.z_value()[eid] + ')'
            });
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    x_value (prm) {
        try { return this.execConfig('x_value', 'number', prm); } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    y_value (prm) {
        try { return this.execConfig('y_value', 'number', prm); } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    z_value (prm) {
        try { return this.execConfig('z_value', 'number', prm); } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
module.exports = mofron.effect.Scale;
/* end of file */
