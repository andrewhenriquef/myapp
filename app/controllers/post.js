import Ember from 'ember';

export default Ember.Controller.extend({
    tittle: 'Posts',
    body: 'This is the body of my blog',
    authors: ['William','Robert','Michelle'],
    created: new Date(),

    comments: [
        {
            name: 'Mike Smith',
            comment: 'Thanks for the great post'
        },{
            name: 'John Doe',
            comment: 'Nice Post'
        },{
            name: 'Jeff William',
            comment: 'Good Job!'
        }
    ],
    actions: {
        sayHello: function(){
            alert('Hello!');
        },
        toggleBody: function(){
            this.toggleProperty('isShowingBody');
        },
        submitAction: function(){
            alert(this.get('name'));
            alert(this.get('comment'));
        }
    }


});
