let newExample = {

  colorsArray: ['deeppink', 'blueviolet', 'green', 'orange', 'blue', 'saddlebrown', 'gold'],

  create: function (id) {
    let el = document.querySelector('.example' + id)
    let num1 = el.querySelector('.num1');
    let num2 = el.querySelector('.num2');
    let result = el.querySelector('.result');
    let more = el.querySelector('#more');
    let less = el.querySelector('#less');
    let equal = el.querySelector('#equal');

    let a = Math.trunc(Math.random() * 13 + 1);
    let b = Math.trunc(Math.random() * 13 + 1);
    let c = Math.trunc(Math.random() * 25 + 15);
    let d = Math.trunc(Math.random() * 14 + 1);

    num1.innerHTML = a + '+' + b;
    num2.innerHTML = c + '-' + d;
    num1.style.color = this.colorsArray[Math.floor(Math.random() * this.colorsArray.length)];
    num2.style.color = this.colorsArray[Math.floor(Math.random() * this.colorsArray.length)];


    more.addEventListener('click', getResult1);
    less.addEventListener('click', getResult2);
    equal.addEventListener('click', getResult3);

    function getResult1() {
      if ((a + b) > (c - d)) {
        result.innerHTML = '✓';
        result.style.color = 'green';
        less.disabled = true;
        equal.disabled = true;
      } else {
        result.innerHTML = '×';
        result.style.color = 'red';
        less.disabled = true;
        equal.disabled = true;
      }
    }

    function getResult2() {
      if ((a + b) < (c - d)) {
        result.innerHTML = '✓';
        result.style.color = 'green';
        more.disabled = true;
        equal.disabled = true;
      } else {
        result.innerHTML = '×';
        result.style.color = 'red';
        more.disabled = true;
        equal.disabled = true;
      }
    }

    function getResult3() {
      if ((a + b) == (c - d)) {
        result.innerHTML = '✓';
        result.style.color = 'green';
        more.disabled = true;
        less.disabled = true;
      } else {
        result.innerHTML = '×';
        result.style.color = 'red';
        more.disabled = true;
        less.disabled = true;
      }
    }
  }

}

newExample.create('1');
newExample.create('2');
newExample.create('3');
newExample.create('4');
newExample.create('5');
newExample.create('6');
newExample.create('7');
newExample.create('8');
newExample.create('9');
newExample.create('10');