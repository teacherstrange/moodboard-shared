export interface CreateUserDto {
    readonly id: string;
    readonly email: string;
    readonly firstName?: string;
    readonly lastName?: string;
    readonly password: string;
}
