
export interface HttpBehaviorRequestInterface {
    isSpinner: boolean;
    isEncrypted: boolean;
    preAuth: boolean;
    isIbmApi: boolean;
    apiStub: boolean;
    apiRetry: boolean;
    apiTimeOut: number;
    apiHeader?: object;
}

