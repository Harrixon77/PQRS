import bcrypt from "bcrypt";


const SaltRounds = 10;

export const hashPassword = async (passwordPlaintext: string): Promise<string> => {
    return bcrypt.hash(passwordPlaintext, SaltRounds);

}

export const comparePassword = async (password: string, hash: string): Promise<boolean> => {
    return bcrypt.compare(password, hash);
}