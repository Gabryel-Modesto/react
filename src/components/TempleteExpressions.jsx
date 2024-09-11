const TemplateExpressions = () => {
    let name = "Meu nome"
    let aluno = {
        nome:"Gabryel",
        turma:"A",
        ano:"2"
    }
    
    return (
        <div>
            <h1>Olá {name}</h1>
            <h2>o aluno {aluno.nome} está no {aluno.ano}° na turma {aluno.turma}</h2>
        </div>
    )
}

export default TemplateExpressions