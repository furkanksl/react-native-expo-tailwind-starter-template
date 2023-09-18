export interface RouteT {
    key: string;
    name: string;
    params:
        | {
              initial: boolean;
              params: string | undefined;
              path: string;
              screen: string;
              state: string | undefined;
          }
        | undefined;
    path: string | undefined;
}
