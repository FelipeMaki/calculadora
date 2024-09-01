let display = document.getElementById('display');
        let input = '';
        let operador = '';

        function adicionar(numero) {
            if (input === '0' && numero === 0) return;
            input += numero;
            display.innerText = input;
        }

        function op(op) {
            if (input === '') return;
            operador = op;
            input += ' ' + operador + ' ';
            display.innerText = input;
        }

        function calc() {
            try {
                input = eval(input).toString();
                display.innerText = input;
            } catch (error) {
                display.innerText = 'Erro';
                input = '';
            }
        }