const checkInput = (fullName,email,Username,dateOfBirth,website,streetAddress) = {
    let fullNamePattern = / \D+ [a - z]\s$/gi

    let emailPattern = / \w{3,}.@\D.+\D $/gi

    let Username =  / ^ [a - z]([0 - 9][0 - 9] +| [a - z] +\d *)$/ i 

    let dateOfBirth = / \d{2}-\d{2}-\d{4} $/

    let website = / (https:)?(www).\w{2,}.\D{3} $/g

    let streetAddress = 
}