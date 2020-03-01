export default function calculate(state, name) {
    //Clicked (C)lear
    if (name === 'C') {
        return {
            total: null,
            operand: null,
            operation: null
        };
    }

    //Clicked (C)lear (E)ntry
    if (name === 'CE') {
        return {
            operand: null
        };
    }

    //Clicked +/-
    if (name === '+/-') {
        //If there's an operand, negate it
        if (state.operand) {
            return {
                operand: (parseFloat(state.operand) * -1).toString()
            };
        }
        else {
            if (state.total && !state.operation) {
                return {
                    total: (parseFloat(state.total) * -1).toString()
                };
            }
        }
    }

    //Clicked Bk (Backspace)
    if (name === 'Bk') {
        if (state.operand) {
            //Only one digit, just change to 0
            if (state.operand.length === 1) {
                return {
                    operand: '0'
                };
            }

            //Delete last digit
            return  {
                operand: state.operand.substring(0, state.operand.length - 1)
            };
        }
    }

    //Any of the number keys
    if (/[0-9]+/.test(name)) {
        //If they clicked 0 and the operand is already zero, don't do anything
        if (name === '0' && state.operand === '0') {
            return {};
        }

        //If there's an operation being done, update the operand
        if (state.operation) {
            if (state.operand) {
                return {
                    operand: state.operand + name
                };
            }
            else {
                return {
                    operand: name
                };
            }
        }

        //If no operation is being done, clear the total and update the operand
        if (state.operand) {
            let operand = '';
            if (state.operand === '0') {
                operand = name;
            }
            else {
                operand = state.operand + name;
            }

            return {
                total: null,
                operand: operand
            }
        }
        else {
            return {
                total: null,
                operand: name
            };
        }
    }

    //Decimal point (.)
    if (name === '.') {
        if (state.operand) {
            //If there's already a decimal then do nothing
            if (state.operand.includes('.')) {
                return {};
            }
            return {
                operand: state.operand + '.'
            };
        }
        return {
            operand: '0.'
        };
    }

    //Clicked (=)
    if (name === '=') {
        //As long as we have an operation and an operand
        if (state.operation && state.operand) {
            return {
                total: operate(state.total, state.operand, state.operation),
                operand: null,
                operation: null
            }
        }
        else {
            return {};
        }
    }

    //Everything else is an operation
    //If there's already an operation, perform that operation and queue up this one
    if (state.operation) {
        return {
            total: operate(state.total, state.operand, state.operation),
            operand: null,
            operation: name
        }
    }
    //Otherwise, just queue up the operation
    else {
        if (state.operand) {
            return {
                total: state.operand,
                operand: null,
                operation: name
            };
        }
        else {
            return {
                operation: name
            }
        }
    }
}

function operate(total, operand, operation) {
    let first = total || '0';
    let second = operand || '0';
    let result = '';

    //Don't divide by zero
    if (second === '0' && (operation === '÷' || operation === 'x')) {
        second = '1';
    }

    //Convert to numbers
    first = parseFloat(first);
    second = parseFloat(second);

    switch(operation) {
        case '+':
            result = (first + second).toString();
            break;
        case '-':
            result = (first - second).toString();
            break;
        case '÷':
            result = (first / second).toString();
            break;
        case 'x':
            result = (first * second).toString();
            break;
        default:
            break;
    }

    return result;
}