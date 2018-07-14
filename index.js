const pipelineSync = (str) => {
    let arr = (str.split(" | "));
    let input = 0;
    for(let i = 0; i < arr.length; i++) {
        let arrHolder = arr[i].split(" ");
        let operator = arrHolder[0];
        let num = arrHolder[1];
        input = operations[operator](input, num);
    }



    return input;

}
const operations = {
    set: (input, arg )=> {
      return arg*1;
    },
    add: (input, arg)=> {
      //we need to add to something
      if(typeof input === 'undefined'){
        throw 'input required';
      }
      return input + arg*1;
    },
    mult: (input, arg)=> {
      //we need to multiply by something
      if(typeof input === 'undefined'){
        throw 'input required';
      }
      return input * arg*1;
    }
  };

module.exports = {
    pipelineSync,
    operations
};