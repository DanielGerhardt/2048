function getBoard() {
    let board = [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]];
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            let id = i.toString() + j.toString();
            board[i][j] = document.getElementById(id).innerHTML;
        }
    }   
    return board;
}

function newPiece() {
    let board = getBoard();
    let options = [];
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            const id = i.toString() + j.toString();
            if (!(board[i][j])) {
                options.push(id);
            }
        }
    }
    
    let randIndex = Math.floor(Math.random() * options.length)
    let newNum;
    if (Math.random() < 0.9) {
        newNum = 2;
    } else {
        newNum = 4;
    }

    document.getElementById(options[randIndex]).innerHTML = newNum;
}

function assignStyle() {
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            let id = i.toString() + j.toString();
            let value = document.getElementById(id).innerHTML;
            switch (value) {
                case '':
                    document.getElementById(id).style.backgroundColor = "beige";
                    break;
                case "2":
                    document.getElementById(id).style.backgroundColor = "#1AFA07";
                    document.getElementById(id).style.fontSize = "64px";
                    break;
                case "4":
                    document.getElementById(id).style.backgroundColor = "#00E63A";
                    document.getElementById(id).style.fontSize = "64px";
                    break;
                case "8":
                    document.getElementById(id).style.backgroundColor = "#00FA8D";
                    document.getElementById(id).style.fontSize = "64px";
                    break;
                case "16":
                    document.getElementById(id).style.backgroundColor = "#00E6CA";
                    document.getElementById(id).style.fontSize = "64px";
                    break;
                case "32":
                    document.getElementById(id).style.backgroundColor = "#00D1FF";
                    document.getElementById(id).style.fontSize = "64px";
                    break;
                case "64":
                    document.getElementById(id).style.backgroundColor = "#00B9FA";
                    document.getElementById(id).style.fontSize = "64px";
                    break;
                case "128":
                    document.getElementById(id).style.backgroundColor = "#0066E6";
                    document.getElementById(id).style.fontSize = "64px";
                    break;
                case "256":
                    document.getElementById(id).style.backgroundColor = "#0026FA";
                    document.getElementById(id).style.fontSize = "64px";
                    break;
                case "512":
                    document.getElementById(id).style.backgroundColor = "#2200E6";
                    document.getElementById(id).style.fontSize = "64px";
                    break;
                case "1024":
                    document.getElementById(id).style.backgroundColor = "#7400FF";
                    document.getElementById(id).style.fontSize = "46px";
                    break;
                case "2048":
                    document.getElementById(id).style.backgroundColor = "#9A00E6";
                    document.getElementById(id).style.fontSize = "46px";
                    break;
                case "4096":
                    document.getElementById(id).style.backgroundColor = "#F900FF";
                    document.getElementById(id).style.fontSize = "46px";
                    break;
                case "8096":
                    document.getElementById(id).style.backgroundColor = "#F900FF";
                    document.getElementById(id).style.fontSize = "46px";
                    break;
                default:
                    document.getElementById(id).style.backgroundColor = "#F900FF";    
                    document.getElementById(id).style.fontSize = "38px";
            }
        }
    } 
}

function updateScore(num) {
    let value = Number(document.getElementById("score").innerHTML) + num;
    value.toString();
    document.getElementById("score").innerHTML = value;
}

function play() {
    newPiece();
    newPiece();
    assignStyle();
}

function canItMove(direction) {
    let board = getBoard();
    switch (direction) {
        case "up":
            for (let i = 1; i < 4; i++) {
                for (let j = 0; j < 4; j++) {
                    if ((board[i][j] && !board[i - 1][j])) {
                        return true;
                    }
                    if ((board[i][j] && board[i - 1][j]) && (board[i][j] === board[i - 1][j])) {
                        return true;
                    }
                }
            }
            break;
        case "left":
            for (let i = 0; i < 4; i++) {
                for (let j = 1; j < 4; j++) {
                    if ((board[i][j] && !board[i][j - 1])) {
                        return true;
                    }
                    if ((board[i][j] && board[i][j - 1]) && (board[i][j] === board[i][j - 1])) {
                        return true;
                    }
                }
            }
            break;
        case "down":
            for (let i = 2; i >= 0; i--) {
                for (let j = 0; j < 4; j++) {
                    if ((board[i][j] && !board[i + 1][j])) {
                        return true;
                    }
                    if ((board[i][j] && board[i + 1][j]) && (board[i][j] === board[i + 1][j])) {
                        return true;
                    }
                }
            }
            break;
        case "right":
            for (let i = 0; i < 4; i++) {
                for (let j = 2; j >= 0; j--) {
                    if ((board[i][j] && !board[i][j + 1])) {
                        return true;
                    }
                    if ((board[i][j] && board[i][j + 1]) && (board[i][j] === board[i][j + 1])) {
                        return true;
                    }
                }
            }
            break;
        default:
            return false;
    }
}

function up() {
    if (canItMove("up")) {

    for(let i = 0; i < 3; i++) {
        for (let j = 1; j < 4; j++) {
            let board = getBoard();
            for (let k = 0; k < 4; k++) {
                if (!(board[j - 1][k])) {
                    let id = j.toString() + k.toString();
                    let newid = (j - 1).toString() + k.toString();
                    let value = document.getElementById(id).innerHTML;
                    document.getElementById(newid).innerHTML = value;
                    document.getElementById(id).innerHTML = '';
                }
            }
        }
    }

    for (let i = 1; i < 4; i++) {
        let board = getBoard();
        for (let j = 0; j < 4; j++) {
            if (board[i][j]) {
                if (board[i][j] === board[i - 1][j]) {
                    let value = board[i][j] * 2;
                    let id = i.toString() + j.toString();
                    let newid = (i - 1).toString() + j.toString();
                    document.getElementById(newid).innerHTML = value;
                    document.getElementById(id).innerHTML = '';
                    updateScore(value);
                }
            }
        }
    }

    for (let i = 0; i < 2; i++) {
        for (let j = 1; j < 4; j++) {
            let board = getBoard();
            for (let k = 0; k < 4; k++) {
            if (!(board[j - 1][k])) {
                let id = j.toString() + k.toString();
                let newid = (j - 1).toString() + k.toString();
                let value = document.getElementById(id).innerHTML;
                document.getElementById(newid).innerHTML = value;
                document.getElementById(id).innerHTML = '';
            }
            }
        }
    }

    newPiece(); 
    assignStyle();
    
    }
}

function left() {
    if (canItMove("left")) {

    for(let i = 0; i < 3; i++) {
        for (let j = 0; j < 4; j++) {
            let board = getBoard();
            for (let k = 1; k < 4; k++) {
                if (!(board[j][k -1 ])) {
                    let id = j.toString() + k.toString();
                    let newid = j.toString() + (k -1).toString();
                    let value = document.getElementById(id).innerHTML;
                    document.getElementById(newid).innerHTML = value;
                    document.getElementById(id).innerHTML = '';
                }
            }
        }
    }
    
    for (let i = 0; i < 4; i++) {
        for (let j = 1; j < 4; j++) {
            let board = getBoard();
            if (board[i][j]) {
                if (board[i][j] === board[i][j - 1]) {
                    let value = board[i][j] * 2;
                    let id = i.toString() + j.toString();
                    let newid = (i).toString() + (j - 1).toString();
                    document.getElementById(id).innerHTML = value;
                    document.getElementById(newid).innerHTML = '';
                    updateScore(value);
                }
            }
        }
    }

    for (let i = 0; i < 2; i++) {
        for (let j = 0; j < 4; j++) {
            let board = getBoard();
            for (let k = 1; k < 4; k++) {
            if (!(board[j][k -1 ])) {
                let id = j.toString() + k.toString();
                let newid = j.toString() + (k -1).toString();
                let value = document.getElementById(id).innerHTML;
                document.getElementById(newid).innerHTML = value;
                document.getElementById(id).innerHTML = '';
            }
            }
        }
    }   

    newPiece(); 
    assignStyle(); 

    }
}

function down() {
    if (canItMove("down")) {

    for(let i = 0; i < 3; i++) {
        for (let j = 2; j >= 0; j--) {
            let board = getBoard();
            for (let k = 0; k < 4; k++) {
                if (!(board[j + 1][k])) {
                    let id = j.toString() + k.toString();
                    let newid = (j + 1).toString() + k.toString();
                    let value = document.getElementById(id).innerHTML;
                    document.getElementById(newid).innerHTML = value;
                    document.getElementById(id).innerHTML = '';
                }
            }
        }
    }  

    for (let i = 2; i >= 0; i--) {
        let board = getBoard();
        for (let j = 0; j < 4; j++) {
            if (board[i][j]) {
                if (board[i][j] === board[i + 1][j]) {
                    let value = board[i][j] * 2;
                    let id = i.toString() + j.toString();
                    let newid = (i + 1).toString() + j.toString();
                    document.getElementById(newid).innerHTML = value;
                    document.getElementById(id).innerHTML = '';
                    updateScore(value);
                }
            }
        }
    }

    for (let i = 0; i < 2; i++) {
        for (let j = 2; j >= 0; j--) {
            let board = getBoard();
            for (let k = 0; k < 4; k++) {
                if (!(board[j + 1][k])) {
                let id = j.toString() + k.toString();
                let newid = (j + 1).toString() + k.toString();
                let value = document.getElementById(id).innerHTML;
                document.getElementById(newid).innerHTML = value;
                document.getElementById(id).innerHTML = '';
                }
            }
        }
    }

    newPiece(); 
    assignStyle();

    }
}

function right() {
    if (canItMove("right")) {

    for(let i = 0; i < 3; i++) {
        for (let j = 0; j < 4; j++) {
            let board = getBoard();
            for (let k = 2; k >= 0; k--) {
                if (!(board[j][k + 1])) {
                    let id = j.toString() + k.toString();
                    let newid = j.toString() + (k + 1).toString();
                    let value = document.getElementById(id).innerHTML;
                    document.getElementById(newid).innerHTML = value;
                    document.getElementById(id).innerHTML = '';
                }
            }
        }
    }  

    for (let i = 0; i < 4; i++) {
        for (let j = 2; j >=0; j--) {
            let board = getBoard();
            if (board[i][j]) {
                if (board[i][j] === board[i][j + 1]) {
                    let value = board[i][j] * 2;
                    let id = i.toString() + j.toString();
                    let newid = (i).toString() + (j + 1).toString();
                    document.getElementById(id).innerHTML = value;
                    document.getElementById(newid).innerHTML = '';
                    updateScore(value);
                }
            }
        }
    }

    for (let i = 0; i < 2; i++) {
        for (let j = 0; j < 4; j++) {
            let board = getBoard();
            for (let k = 2; k >= 0; k--) {
                if (!(board[j][k + 1])) {
                let id = j.toString() + k.toString();
                let newid = j.toString() + (k + 1).toString();
                let value = document.getElementById(id).innerHTML;
                document.getElementById(newid).innerHTML = value;
                document.getElementById(id).innerHTML = '';
                }
            }
        }
    }

    newPiece();
    assignStyle();

    }
}

document.onkeydown = checkKey;
function checkKey(e) {
    if (e.keyCode == '38') {
        up();
    } else if (e.keyCode == '37') {
        left();
    } else if (e.keyCode == '40') {
        down();
    } else if (e.keyCode == '39') {
        right();
    }
}






