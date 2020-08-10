const checkInput = (fullName,email,Username,dateOfBirth,website,streetAddress) = {
    let fullNamePattern = / \D+ [a - z]\s$/gi

    let emailPattern = / \w{3,}.@\D.+\D $/gi

    let UsernamePattern =  / ^ [a - z]([0 - 9][0 - 9] +| [a - z] +\d *)$/i

    let dateOfBirthPattern = / \d{2}-\d{2}-\d{4} $/

    let websitePattern = / (https:)?(www).\w{2,}.\D{3} $/g

    let streetAddressPattern = /\w+(\s\w+){2,}$/gi
}