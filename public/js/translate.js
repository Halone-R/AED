$(function() {
    $(".pt").click(function() {
        $(".nav-item").children().eq(0).text("Registar");
        $(".nav-item").children().eq(1).text("Conecte-se");
        $(".nav-item").children().eq(2).text("Sair");
        $(".nav-item").children().eq(3).text("Clique aqui para obter a lista de disciplinas");
        $(".nav-item").children().eq(4).text("Ano ou texto a procurar:");
        $(".nav-item").children().eq(5).text("Registo de novo utilizador");
        $(".nav-item").children().eq(6).text("Senha");
        $(".nav-item").children().eq(7).text("Cancelar");
        $(".nav-item").children().eq(8).text("Submeter");
        $(".nav-item").children().eq(9).text("Insira suas credenciais");
        $(".nav-item").children().eq(10).text("Lembrar-me");
        $(".nav-item").children().eq(11).text("Sem conta ainda?");
        $(".nav-item").children().eq(12).text("Registe-se");
        $(".language-selected").text("pt-PT");
        $(".language-selected").text(".change-pt");
        $(".language-selected").removeClass("change-en");
        $(".language-selected").addClass("change-pt");
    })
})

$(function() {
    $(".en").click(function() {
        $(".nav-item").children().eq(0).text("Sign in");
        $(".nav-item").children().eq(1).text("Login");
        $(".nav-item").children().eq(2).text("Log out");
        $(".nav-item").children().eq(3).text("Click here for the list of courses");
        $(".nav-item").children().eq(4).text("Year or text to search for:");
        $(".nav-item").children().eq(5).text("New user registration");
        $(".nav-item").children().eq(6).text("Password");
        $(".nav-item").children().eq(7).text("Cancel");
        $(".nav-item").children().eq(8).text("Submit");
        $(".nav-item").children().eq(9).text("Enter your credentials");
        $(".nav-item").children().eq(10).text("Remind me");
        $(".nav-item").children().eq(11).text("No account yet?");
        $(".nav-item").children().eq(12).text("Sign up");
        $(".language-selected").text("en-US");
        $(".language-selected").removeClass("change-pt");
        $(".language-selected").addClass("change-en");
    })
})