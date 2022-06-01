class ChessPiece {
    constructor(name, image, desc) {
        this.name = name;
        this.desc = desc;
        this.image = image;
    }
}


const pawn = new ChessPiece('Pawn', 'images/chess_piece_pawn.png', `<p> Each player starts with 8 pawns. The pawn can only move one step forward, except for on it's first move when it has the option of moving 2 steps forward. However, When attacking, it can only attack pieces that are diagonally infront(either left or right), and cannot attack pieces directly infront of it.</p>`);

const rook = new ChessPiece('Rook', 'images/chess_piece_rook.png', `<p>Each player starts with 2 rooks. The rook can move any number of spaces in a horizontal or vertical direction. It also attacks the opponents pieces in the same way.</p>`);

const knight = new ChessPiece('Knight', 'images/chess_piece_knight.png', `<p>The knight moves in what is called the 'L' shape. The spaces it can land on are 2 spaces in a horizontal direction followed by 1 space in the vertical direction, or 2 spaces in the vertical direction, followed by 1 space in the horizontal direction.</p>`);

const bishop = new ChessPiece('Bishop', 'images/chess_piece_bishop.png', `<p>Each player starts with 2 bishops. 1 bishop will start on a white square, and the other will start on a black square. The bishops can move any number of square in any diagonal direction (provided it is not blocked by another piece), and it also attacks opponent pieces in the same way.</p>`);

const queen = new ChessPiece('Queen', 'images/chess_piece_queen.png', `<p>The queen is considered the most powerful piece in chess. It can move any number of spaces in horizontal, vertical or diagonal directions. It also attacks pieces in this way.</p>`);

const king = new ChessPiece('King', 'images/chess_piece_king.png', `<p>Each player is trying to protect their own King while at the same time, trying to attack the opponents King. The King can move 1 space in any direction (horizontal, vertical, or diagonal).</p>`)

const pieces = [pawn, rook, knight, bishop, queen, king];
let currentIndex = 0;

function changePiece(position) {
    let holder = document.getElementById('piece-img-holder');
    let pieceDesc = document.getElementById('piece-desc');
    let pieceName = document.getElementById('piece-name')
    if (currentIndex + position < 0) {
        currentIndex = 5;
    }
    else if (currentIndex + position > 5) {
        currentIndex = 0;
    } else { currentIndex += position; }
    console.log(currentIndex);
    pieceName.innerHTML = pieces[currentIndex].name;
    holder.innerHTML = `<img src =${pieces[currentIndex].image} id ='piece-img'>`;
    pieceDesc.innerHTML = pieces[currentIndex].desc;
}

function changePieceTO(position) {
    let holder = document.getElementById('piece-img-holder');
    let pieceDesc = document.getElementById('piece-desc');
    let pieceName = document.getElementById('piece-name')
    pieceName.innerHTML = pieces[position].name;
    holder.innerHTML = `<img src =${pieces[position].image} id ='piece-img'>`;
    pieceDesc.innerHTML = pieces[position].desc;
}

let leftArrow = document.getElementById('left');
leftArrow.addEventListener('mouseover', () => {
    leftArrow.style.backgroundColor = 'white';
})
leftArrow.addEventListener('mouseout', () => {
    leftArrow.style.backgroundColor = 'transparent';
});
leftArrow.addEventListener('click', () => changePiece(-1));

let rightArrow = document.getElementById('right');
rightArrow.addEventListener('mouseover', () => {
    rightArrow.style.backgroundColor = 'white';
})
rightArrow.addEventListener('mouseout', () => {
    rightArrow.style.backgroundColor = 'transparent';
});
rightArrow.addEventListener('click', () => changePiece(1));