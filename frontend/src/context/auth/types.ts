export interface IAuthContext {
    token: string | null;
    setToken: React.Dispatch<React.SetStateAction<string | null>>;
    logout: () => void;
}