export type App = {
    status: AppStatus;
};

export enum AppStatus {
    INIT = 'INIT',
    ON_SERVER = 'ON_SERVER',
    ON_CLIENT = 'ON_CLIENT',
}
