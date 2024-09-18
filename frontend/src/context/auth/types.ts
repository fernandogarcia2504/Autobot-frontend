export interface IAuthContext {
    token: string | null;
    setToken: (token: string | null) => void;
    logout: () => void;
}