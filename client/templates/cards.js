if (Meteor.isClient) {
  
  var a = Math.floor(Math.random()*50);
  var b = Math.floor(Math.random()*25);
  var answer = a+b;
  var scoreNum = 0;
  var answerTxt = " ";

    Session.setDefault('counter', 0);
    Session.set('alpha', a);
    Session.set('beta', b);
    Session.set('score', scoreNum);

    Session.set('answer', answerTxt);

  Template.cards.helpers({
    counter: function () {
      return Session.get('counter');
    },

    alpha: function(){
      return Session.get('alpha');
    },

    beta: function(){
      return Session.get('beta');
    },

    score:function(){
        return Session.get('score');
    },

    answer:function(){
        return Session.get('answer');
    }

  });

  Template.cards.events({
    'submit .ans_submit': function(e){

      var ans= e.target.text.value;
      //answer = c;

      if(ans == answer ){
        scoreNum ++;
        answerTxt = "Correct";

        Session.set('score', scoreNum);
        Session.set('answer', answerTxt);

        a = Math.floor(Math.random()*50);
        b = Math.floor(Math.random()*25);
        answer = a+b;

        Session.set('alpha', a);
        Session.set('beta', b);


       
      }else{
        answerTxt = "Wrong";

        Session.set('answer', answerTxt);

        a = Math.floor(Math.random()*50);
        b = Math.floor(Math.random()*25);
        answer = a+b;

        Session.set('alpha', a);
        Session.set('beta', b);
         
      }

      // Clear form
      e.target.text.value = "";

      return false;

    }

  });


  if (Meteor.isServer) {
      Meteor.startup(function () {
        // code to run on server at startup
      });
  }

}

