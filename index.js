console.log("Digite o nome do seu jogador");
let nickname = "Clarice";
let exp = 9000;
var rank = "";

var exibirRank = function(nickname, rank) {
    console.log("O herói de nome " + nickname + " está no nível de " + rank);
}

if (exp <= 1000) {
    rank = "ferro";
    exibirRank(nickname, rank);
} else if (exp >= 1001 && exp <= 2000) {
    rank = "bronze";
    exibirRank(nickname, rank);
} else if (exp >= 2001 && exp <= 5000) {
    rank = "prata";
    exibirRank(nickname, rank);
} else if (exp >= 5001 && exp <= 7000) {
    rank = "ouro";
    exibirRank(nickname, rank);
} else if (exp >= 7001 && exp <= 8000) {
    rank = "platina";
    exibirRank(nickname, rank);
} else if (exp >= 8001 && exp <= 9000) {
    rank = "ascendente";
    exibirRank(nickname, rank);
} else if (exp >= 9001 && exp <= 10000) {
    rank = "imortal";
    exibirRank(nickname, rank);
} else if (exp >= 10001) {
    rank = "radiante";
    exibirRank(nickname, rank);
}





