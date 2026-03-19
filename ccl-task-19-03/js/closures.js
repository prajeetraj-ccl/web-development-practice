    function outer (){
        let count=0;

        function inner (){
            count++;
            console.log(count);
        }
        return inner;
    }
    const counter = outer();
    counter();
     counter();
      counter();

      //A closure is created when a function remembers variables from its outer (parent) scope, 
      // even after the outer function has finished executing.