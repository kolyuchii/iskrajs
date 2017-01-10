var rotate = require('@amperka/servo').connect(P10, {
    pulseMin: 0.9,
    pulseMax: 2.1
});
var lift = require('@amperka/servo').connect(P11, {
    pulseMin: 0.9,
    pulseMax: 2.1
});
var position = require('@amperka/servo').connect(P12, {
    pulseMin: 0.9,
    pulseMax: 2.1
});
var hand = require('@amperka/servo').connect(P13, {
    pulseMin: 0.9,
    pulseMax: 2.1
});

rotate.write(0);

setWatch(function(e) {
    rotate.write(e.state ? 180 : 0);
}, BTN1, {
    repeat: true,
    debounce: 100
});

setWatch(function(e) {
    console.log('Pulse length:', e, 'seconds');
    position.write(0);
}, A0, {
    repeat: true,
    debounce: 100
});

setWatch(function(e) {
    console.log('Pulse length:', e, 'seconds');
    position.write(90);
}, A1, {
    repeat: true,
    debounce: 100
});
