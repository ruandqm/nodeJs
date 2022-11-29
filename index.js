const validator = require('validator')
const readXlsxFile = require('read-excel-file/node')

readXlsxFile('./Alunos.xlsx').then((rows) => {
    console.log('-----------------------')
    console.log('         Alunos        ')
    console.log('-----------------------')
    for (let i = 1; i < rows.length; i++) {
        let validarNome = validator.isEmpty(rows[i][0])
        let validarEmail = validator.isEmail(rows[i][1])
        let validarIdade
        if (rows[i][2] > 0) {
            validarIdade = true
        }
        else {
            validarIdade = false
        }
        let validarMatricula = validator.isAlphanumeric(rows[i][3])

        if (validarNome === false && validarEmail === true && validarIdade === true && validarMatricula === true) {
            console.log('Nome: ' + rows[i][0])
            console.log('E-mail: ' + rows[i][1])
            console.log('Idade: ' + rows[i][2])
            console.log('Matrícula: ' + rows[i][3])
            console.log('-----------------------')
        }
    }
})