import Ember from 'ember';

export default Ember.Component.extend({

    name: 'Andrew',
    greetingSet: false,

    actions: {
        greetUser: function(name){

            alert('Hello ' + name);
            this.setProperties({
                greetingSet: true

            });
        }

    },
    classNames: ['well'],
    classNameBindings: ['greetingSet'],

});
