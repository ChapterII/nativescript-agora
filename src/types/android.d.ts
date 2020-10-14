/// <reference path="android-declarations.d.ts"/>

declare module com {
	export module coloros {
		export module ocs {
			export module base {
				export class IAuthenticationListener {
					public static class: java.lang.Class<com.coloros.ocs.base.IAuthenticationListener>;
					/**
					 * Constructs a new instance of the com.coloros.ocs.base.IAuthenticationListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onSuccess(param0: com.coloros.ocs.base.common.CapabilityInfo): void;
						onFail(param0: number): void;
					});
					public constructor();
					public onSuccess(param0: com.coloros.ocs.base.common.CapabilityInfo): void;
					public onFail(param0: number): void;
				}
				export module IAuthenticationListener {
					export class Default extends com.coloros.ocs.base.IAuthenticationListener {
						public static class: java.lang.Class<com.coloros.ocs.base.IAuthenticationListener.Default>;
						public onFail(param0: number): void;
						public constructor();
						public asBinder(): globalAndroid.os.IBinder;
						public onSuccess(param0: com.coloros.ocs.base.common.CapabilityInfo): void;
					}
					export abstract class Stub implements com.coloros.ocs.base.IAuthenticationListener {
						public static class: java.lang.Class<com.coloros.ocs.base.IAuthenticationListener.Stub>;
						public onFail(param0: number): void;
						public constructor();
						public static asInterface(param0: globalAndroid.os.IBinder): com.coloros.ocs.base.IAuthenticationListener;
						public static setDefaultImpl(param0: com.coloros.ocs.base.IAuthenticationListener): boolean;
						public static getDefaultImpl(): com.coloros.ocs.base.IAuthenticationListener;
						public onTransact(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
						public asBinder(): globalAndroid.os.IBinder;
						public onSuccess(param0: com.coloros.ocs.base.common.CapabilityInfo): void;
					}
					export module Stub {
						export class Proxy extends com.coloros.ocs.base.IAuthenticationListener {
							public static class: java.lang.Class<com.coloros.ocs.base.IAuthenticationListener.Stub.Proxy>;
							public static sDefaultImpl: com.coloros.ocs.base.IAuthenticationListener;
							public getInterfaceDescriptor(): string;
							public asBinder(): globalAndroid.os.IBinder;
							public onSuccess(param0: com.coloros.ocs.base.common.CapabilityInfo): void;
							public onFail(param0: number): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module coloros {
		export module ocs {
			export module base {
				export class IServiceBroker {
					public static class: java.lang.Class<com.coloros.ocs.base.IServiceBroker>;
					/**
					 * Constructs a new instance of the com.coloros.ocs.base.IServiceBroker interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						handleAuthentication(param0: string, param1: string, param2: com.coloros.ocs.base.IAuthenticationListener): void;
						getBinder(param0: string, param1: string): globalAndroid.os.IBinder;
					});
					public constructor();
					public getBinder(param0: string, param1: string): globalAndroid.os.IBinder;
					public handleAuthentication(param0: string, param1: string, param2: com.coloros.ocs.base.IAuthenticationListener): void;
				}
				export module IServiceBroker {
					export class Default extends com.coloros.ocs.base.IServiceBroker {
						public static class: java.lang.Class<com.coloros.ocs.base.IServiceBroker.Default>;
						public constructor();
						public getBinder(param0: string, param1: string): globalAndroid.os.IBinder;
						public handleAuthentication(param0: string, param1: string, param2: com.coloros.ocs.base.IAuthenticationListener): void;
						public asBinder(): globalAndroid.os.IBinder;
					}
					export abstract class Stub implements com.coloros.ocs.base.IServiceBroker {
						public static class: java.lang.Class<com.coloros.ocs.base.IServiceBroker.Stub>;
						public constructor();
						public static setDefaultImpl(param0: com.coloros.ocs.base.IServiceBroker): boolean;
						public getBinder(param0: string, param1: string): globalAndroid.os.IBinder;
						public handleAuthentication(param0: string, param1: string, param2: com.coloros.ocs.base.IAuthenticationListener): void;
						public static asInterface(param0: globalAndroid.os.IBinder): com.coloros.ocs.base.IServiceBroker;
						public onTransact(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
						public asBinder(): globalAndroid.os.IBinder;
						public static getDefaultImpl(): com.coloros.ocs.base.IServiceBroker;
					}
					export module Stub {
						export class Proxy extends com.coloros.ocs.base.IServiceBroker {
							public static class: java.lang.Class<com.coloros.ocs.base.IServiceBroker.Stub.Proxy>;
							public static sDefaultImpl: com.coloros.ocs.base.IServiceBroker;
							public getInterfaceDescriptor(): string;
							public asBinder(): globalAndroid.os.IBinder;
							public handleAuthentication(param0: string, param1: string, param2: com.coloros.ocs.base.IAuthenticationListener): void;
							public getBinder(param0: string, param1: string): globalAndroid.os.IBinder;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module coloros {
		export module ocs {
			export module base {
				export module a {
					export class a {
						public static class: java.lang.Class<com.coloros.ocs.base.a.a>;
						public static a(): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module coloros {
		export module ocs {
			export module base {
				export module a {
					export class b {
						public static class: java.lang.Class<com.coloros.ocs.base.a.b>;
						public static a(param0: string): void;
						public static d(param0: string, param1: string): void;
						public static c(param0: string, param1: string): void;
						public static a(param0: string, param1: string): void;
						public static b(param0: string, param1: string): void;
						public static a(param0: globalAndroid.content.Context): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module coloros {
		export module ocs {
			export module base {
				export module a {
					export class c {
						public static class: java.lang.Class<com.coloros.ocs.base.a.c>;
						public static b(param0: string): void;
						public static a(param0: string): string;
						public static a(param0: any, param1: any): any;
						public static a(param0: boolean, param1: any): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module coloros {
		export module ocs {
			export module base {
				export module a {
					export class d {
						public static class: java.lang.Class<com.coloros.ocs.base.a.d>;
						public constructor();
						public static a(param0: globalAndroid.content.Context, param1: string): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module coloros {
		export module ocs {
			export module base {
				export module a {
					export class e {
						public static class: java.lang.Class<com.coloros.ocs.base.a.e>;
						public static a(param0: any, param1: any): boolean;
						public static a(param0: any): com.coloros.ocs.base.a.e.a;
					}
					export module e {
						export class a {
							public static class: java.lang.Class<com.coloros.ocs.base.a.e.a>;
							public a(param0: string, param1: any): com.coloros.ocs.base.a.e.a;
							public toString(): string;
							public constructor(param0: any);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module coloros {
		export module ocs {
			export module base {
				export module common {
					export class AuthResult {
						public static class: java.lang.Class<com.coloros.ocs.base.common.AuthResult>;
						public static CREATOR: globalAndroid.os.Parcelable.Creator<com.coloros.ocs.base.common.AuthResult>;
						public describeContents(): number;
						public getErrrorCode(): number;
						public constructor(param0: string, param1: number, param2: number, param3: number, param4: native.Array<number>);
						public getUid(): number;
						public setUid(param0: number): void;
						public setPermitBits(param0: native.Array<number>): void;
						public setPackageName(param0: string): void;
						public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
						public constructor(param0: globalAndroid.os.Parcel);
						public setErrrorCode(param0: number): void;
						public getPackageName(): string;
						public getPermitBits(): native.Array<number>;
						public getPid(): number;
						public setPid(param0: number): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module coloros {
		export module ocs {
			export module base {
				export module common {
					export class CapabilityInfo {
						public static class: java.lang.Class<com.coloros.ocs.base.common.CapabilityInfo>;
						public static CREATOR: globalAndroid.os.Parcelable.Creator<com.coloros.ocs.base.common.CapabilityInfo>;
						public constructor(param0: globalAndroid.os.Parcel);
						public setBinder(param0: globalAndroid.os.IBinder): void;
						public constructor(param0: java.util.List<com.coloros.ocs.base.common.Feature>, param1: number, param2: com.coloros.ocs.base.common.AuthResult, param3: globalAndroid.os.IBinder);
						public getFeatures(): java.util.List<com.coloros.ocs.base.common.Feature>;
						public describeContents(): number;
						public getBinder(): globalAndroid.os.IBinder;
						public getAuthResult(): com.coloros.ocs.base.common.AuthResult;
						public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
						public constructor(param0: java.util.List<com.coloros.ocs.base.common.Feature>, param1: number, param2: com.coloros.ocs.base.common.AuthResult);
						public getVersion(): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module coloros {
		export module ocs {
			export module base {
				export module common {
					export class ConnectionResult {
						public static class: java.lang.Class<com.coloros.ocs.base.common.ConnectionResult>;
						public getErrorMessage(): string;
						public hasResolution(): boolean;
						public constructor(param0: number, param1: globalAndroid.app.PendingIntent);
						public getErrorCode(): number;
						public getResolution(): globalAndroid.app.PendingIntent;
						public constructor(param0: number);
						public startResolutionForResult(param0: globalAndroid.app.Activity, param1: number): void;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module coloros {
		export module ocs {
			export module base {
				export module common {
					export class Feature {
						public static class: java.lang.Class<com.coloros.ocs.base.common.Feature>;
						public static CREATOR: globalAndroid.os.Parcelable.Creator<com.coloros.ocs.base.common.Feature>;
						public constructor(param0: globalAndroid.os.Parcel);
						public describeContents(): number;
						public constructor(param0: string, param1: number);
						public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
						public getVersion(): number;
						public getName(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module coloros {
		export module ocs {
			export module base {
				export module common {
					export class Status extends com.coloros.ocs.base.internal.safeparcel.AbstractSafeParcelable {
						public static class: java.lang.Class<com.coloros.ocs.base.common.Status>;
						public static CREATOR: globalAndroid.os.Parcelable.Creator<com.coloros.ocs.base.common.Status>;
						public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module coloros {
		export module ocs {
			export module base {
				export module common {
					export class a {
						public static class: java.lang.Class<com.coloros.ocs.base.common.a>;
						public constructor(param0: globalAndroid.os.Looper, param1: globalAndroid.os.Handler.Callback);
						public dispatchMessage(param0: globalAndroid.os.Message): void;
						public constructor(param0: globalAndroid.os.Looper);
					}
				}
			}
		}
	}
}

declare module com {
	export module coloros {
		export module ocs {
			export module base {
				export module common {
					export module api {
						export class Api<O>  extends java.lang.Object {
							public static class: java.lang.Class<com.coloros.ocs.base.common.api.Api<any>>;
							public constructor(param0: string, param1: com.coloros.ocs.base.common.api.Api.AbstractClientBuilder<any,any>, param2: com.coloros.ocs.base.common.api.Api.ClientKey<any>);
							public getClientBuilder(): com.coloros.ocs.base.common.api.Api.AbstractClientBuilder<any,O>;
							public getName(): string;
							public getBaseClientBuilder(): com.coloros.ocs.base.common.api.Api.BaseClientBuilder<any,O>;
							public getClientKey(): com.coloros.ocs.base.common.api.Api.ClientKey<any>;
						}
						export module Api {
							export abstract class AbstractClientBuilder<T, O>  extends com.coloros.ocs.base.common.api.Api.BaseClientBuilder<any,any> {
								public static class: java.lang.Class<com.coloros.ocs.base.common.api.Api.AbstractClientBuilder<any,any>>;
								public buildClient(param0: globalAndroid.content.Context, param1: globalAndroid.os.Looper, param2: com.coloros.ocs.base.internal.ClientSettings, param3: any): any;
								public constructor();
							}
							export class AnyClient {
								public static class: java.lang.Class<com.coloros.ocs.base.common.api.Api.AnyClient>;
								/**
								 * Constructs a new instance of the com.coloros.ocs.base.common.api.Api$AnyClient interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
								});
								public constructor();
							}
							export class AnyClientKey<C>  extends java.lang.Object {
								public static class: java.lang.Class<com.coloros.ocs.base.common.api.Api.AnyClientKey<any>>;
								public constructor();
							}
							export class ApiOptions {
								public static class: java.lang.Class<com.coloros.ocs.base.common.api.Api.ApiOptions>;
								/**
								 * Constructs a new instance of the com.coloros.ocs.base.common.api.Api$ApiOptions interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
								});
								public constructor();
							}
							export module ApiOptions {
								export class HasOptions extends com.coloros.ocs.base.common.api.Api.ApiOptions {
									public static class: java.lang.Class<com.coloros.ocs.base.common.api.Api.ApiOptions.HasOptions>;
									/**
									 * Constructs a new instance of the com.coloros.ocs.base.common.api.Api$ApiOptions$HasOptions interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
									 */
									public constructor(implementation: {
									});
									public constructor();
								}
								export class NoOptions extends com.coloros.ocs.base.common.api.Api.ApiOptions.NotRequiredOptions {
									public static class: java.lang.Class<com.coloros.ocs.base.common.api.Api.ApiOptions.NoOptions>;
								}
								export class NotRequiredOptions extends com.coloros.ocs.base.common.api.Api.ApiOptions {
									public static class: java.lang.Class<com.coloros.ocs.base.common.api.Api.ApiOptions.NotRequiredOptions>;
									/**
									 * Constructs a new instance of the com.coloros.ocs.base.common.api.Api$ApiOptions$NotRequiredOptions interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
									 */
									public constructor(implementation: {
									});
									public constructor();
								}
								export class Optional implements com.coloros.ocs.base.common.api.Api.ApiOptions.HasOptions, com.coloros.ocs.base.common.api.Api.ApiOptions.NotRequiredOptions {
									public static class: java.lang.Class<com.coloros.ocs.base.common.api.Api.ApiOptions.Optional>;
									/**
									 * Constructs a new instance of the com.coloros.ocs.base.common.api.Api$ApiOptions$Optional interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
									 */
									public constructor(implementation: {
									});
									public constructor();
								}
							}
							export abstract class BaseClientBuilder<T, O>  extends java.lang.Object {
								public static class: java.lang.Class<com.coloros.ocs.base.common.api.Api.BaseClientBuilder<any,any>>;
								public static API_PRIORITY_GAMES: number;
								public static API_PRIORITY_PLUS: number;
								public static API_PRIORITY_OTHER: number;
								public getPriority(): number;
								public constructor();
							}
							export class Client extends com.coloros.ocs.base.common.api.Api.AnyClient {
								public static class: java.lang.Class<com.coloros.ocs.base.common.api.Api.Client>;
								/**
								 * Constructs a new instance of the com.coloros.ocs.base.common.api.Api$Client interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									connect(): void;
									disconnect(): void;
									isConnected(): boolean;
									getLooper(): globalAndroid.os.Looper;
									isConnecting(): boolean;
									requiresColorService(): boolean;
									getTargetPackageName(): string;
									getMinApkVersion(): number;
									getRemoteService(): globalAndroid.os.IBinder;
									addQueue(param0: com.coloros.ocs.base.common.api.TaskListenerHolder<any>): void;
									getAuthResult(): com.coloros.ocs.base.common.AuthResult;
									setOnConnectionSucceedListener(param0: com.coloros.ocs.base.common.api.OnConnectionSucceedListener, param1: globalAndroid.os.Handler): void;
									setOnConnectionFailedListener(param0: com.coloros.ocs.base.common.api.OnConnectionFailedListener, param1: globalAndroid.os.Handler): void;
									setOnClearListener(param0: com.coloros.ocs.base.common.api.e): void;
								});
								public constructor();
								public getAuthResult(): com.coloros.ocs.base.common.AuthResult;
								public requiresColorService(): boolean;
								public getTargetPackageName(): string;
								public setOnConnectionSucceedListener(param0: com.coloros.ocs.base.common.api.OnConnectionSucceedListener, param1: globalAndroid.os.Handler): void;
								public getRemoteService(): globalAndroid.os.IBinder;
								public setOnClearListener(param0: com.coloros.ocs.base.common.api.e): void;
								public connect(): void;
								public isConnected(): boolean;
								public setOnConnectionFailedListener(param0: com.coloros.ocs.base.common.api.OnConnectionFailedListener, param1: globalAndroid.os.Handler): void;
								public addQueue(param0: com.coloros.ocs.base.common.api.TaskListenerHolder<any>): void;
								public getMinApkVersion(): number;
								public disconnect(): void;
								public isConnecting(): boolean;
								public getLooper(): globalAndroid.os.Looper;
							}
							export class ClientKey<C>  extends com.coloros.ocs.base.common.api.Api.AnyClientKey<any> {
								public static class: java.lang.Class<com.coloros.ocs.base.common.api.Api.ClientKey<any>>;
								public constructor();
							}
							export class SimpleClient<T>  extends com.coloros.ocs.base.common.api.Api.AnyClient {
								public static class: java.lang.Class<com.coloros.ocs.base.common.api.Api.SimpleClient<any>>;
								/**
								 * Constructs a new instance of the com.coloros.ocs.base.common.api.Api$SimpleClient interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									getStartServiceAction(): string;
									getServiceDescriptor(): string;
									createServiceInterface(param0: globalAndroid.os.IBinder): any;
									getContext(): globalAndroid.content.Context;
									setState(param0: number, param1: any): void;
								});
								public constructor();
								public getStartServiceAction(): string;
								public createServiceInterface(param0: globalAndroid.os.IBinder): any;
								public getContext(): globalAndroid.content.Context;
								public getServiceDescriptor(): string;
								public setState(param0: number, param1: any): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module coloros {
		export module ocs {
			export module base {
				export module common {
					export module api {
						export abstract class BaseClient<T>  extends com.coloros.ocs.base.common.api.Api.Client {
							public static class: java.lang.Class<com.coloros.ocs.base.common.api.BaseClient<any>>;
							public getAuthResult(): com.coloros.ocs.base.common.AuthResult;
							public setOnConnectionFailedListener(param0: com.coloros.ocs.base.common.api.OnConnectionFailedListener, param1: globalAndroid.os.Handler): void;
							public requiresColorService(): boolean;
							public getClientName(): string;
							public disconnect(): void;
							public isConnected(): boolean;
							public addQueue(param0: com.coloros.ocs.base.common.api.TaskListenerHolder<any>): void;
							public getLooper(): globalAndroid.os.Looper;
							public getRemoteService(): globalAndroid.os.IBinder;
							public setOnClearListener(param0: com.coloros.ocs.base.common.api.e): void;
							public isConnecting(): boolean;
							public connect(): void;
							public getMinApkVersion(): number;
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.os.Looper);
							public getTargetPackageName(): string;
							public setOnConnectionSucceedListener(param0: com.coloros.ocs.base.common.api.OnConnectionSucceedListener, param1: globalAndroid.os.Handler): void;
							public getRemoteService(): any;
						}
						export module BaseClient {
							export class a {
								public static class: java.lang.Class<com.coloros.ocs.base.common.api.BaseClient.a>;
								public onServiceDisconnected(param0: globalAndroid.content.ComponentName): void;
								public onServiceConnected(param0: globalAndroid.content.ComponentName, param1: globalAndroid.os.IBinder): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module coloros {
		export module ocs {
			export module base {
				export module common {
					export module api {
						export abstract class ColorApi<O, R>  extends java.lang.Object {
							public static class: java.lang.Class<com.coloros.ocs.base.common.api.ColorApi<any,any>>;
							public getAuthResult(): com.coloros.ocs.base.common.AuthResult;
							public getVersion(): number;
							public hasFeature(param0: string): boolean;
							public disconnect(): void;
							public isConnected(): boolean;
							public init(): void;
							public getApi(): com.coloros.ocs.base.common.api.Api<O>;
							public addOnConnectionFailedListener(param0: com.coloros.ocs.base.common.api.OnConnectionFailedListener, param1: globalAndroid.os.Handler): R;
							public getRemoteService(): globalAndroid.os.IBinder;
							public doRegisterListener(param0: globalAndroid.os.Looper, param1: com.coloros.ocs.base.common.api.TaskListenerHolder.SuccessNotifier<any>, param2: com.coloros.ocs.base.common.api.TaskListenerHolder.FailureNotifier<any>): com.coloros.ocs.base.task.Task<any>;
							public constructor(param0: globalAndroid.content.Context, param1: com.coloros.ocs.base.common.api.Api<O>, param2: com.coloros.ocs.base.internal.ClientSettings);
							public getRemoteVersion(): number;
							public addOnConnectionSucceedListener(param0: com.coloros.ocs.base.common.api.OnConnectionSucceedListener, param1: globalAndroid.os.Handler): R;
							public addThis2Cache(): void;
							public checkExist(): boolean;
							public doRegisterListener(param0: com.coloros.ocs.base.common.api.TaskListenerHolder.SuccessNotifier<any>, param1: com.coloros.ocs.base.common.api.TaskListenerHolder.FailureNotifier<any>): com.coloros.ocs.base.task.Task<any>;
							public constructor(param0: globalAndroid.app.Activity, param1: com.coloros.ocs.base.common.api.Api<O>, param2: O, param3: com.coloros.ocs.base.internal.ClientSettings);
							public releaseClientKey(): void;
							public constructor(param0: globalAndroid.content.Context, param1: com.coloros.ocs.base.common.api.Api<O>, param2: O, param3: com.coloros.ocs.base.internal.ClientSettings);
							public addOnConnectionFailedListener(param0: com.coloros.ocs.base.common.api.OnConnectionFailedListener): R;
							public addOnConnectionSucceedListener(param0: com.coloros.ocs.base.common.api.OnConnectionSucceedListener): R;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module coloros {
		export module ocs {
			export module base {
				export module common {
					export module api {
						export class ColorApiClient {
							public static class: java.lang.Class<com.coloros.ocs.base.common.api.ColorApiClient>;
							/**
							 * Constructs a new instance of the com.coloros.ocs.base.common.api.ColorApiClient interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								getApi(): com.coloros.ocs.base.common.api.Api<any>;
								connect(): void;
								disconnect(): void;
								getLooper(): globalAndroid.os.Looper;
								isConnected(): boolean;
								isConnecting(): boolean;
								getRemoteService(): globalAndroid.os.IBinder;
								addQueue(param0: com.coloros.ocs.base.common.api.TaskListenerHolder<any>): void;
								getRemoteVersion(): number;
								getAuthResult(): com.coloros.ocs.base.common.AuthResult;
								setOnConnectionSucceedListener(param0: com.coloros.ocs.base.common.api.OnConnectionSucceedListener, param1: globalAndroid.os.Handler): void;
								setOnConnectionFailedListener(param0: com.coloros.ocs.base.common.api.OnConnectionFailedListener, param1: globalAndroid.os.Handler): void;
								setOnClearListener(param0: com.coloros.ocs.base.common.api.e): void;
							});
							public constructor();
							public getAuthResult(): com.coloros.ocs.base.common.AuthResult;
							public setOnConnectionFailedListener(param0: com.coloros.ocs.base.common.api.OnConnectionFailedListener, param1: globalAndroid.os.Handler): void;
							public disconnect(): void;
							public isConnected(): boolean;
							public addQueue(param0: com.coloros.ocs.base.common.api.TaskListenerHolder<any>): void;
							public getLooper(): globalAndroid.os.Looper;
							public getRemoteService(): globalAndroid.os.IBinder;
							public setOnClearListener(param0: com.coloros.ocs.base.common.api.e): void;
							public getApi(): com.coloros.ocs.base.common.api.Api<any>;
							public isConnecting(): boolean;
							public getRemoteVersion(): number;
							public connect(): void;
							public setOnConnectionSucceedListener(param0: com.coloros.ocs.base.common.api.OnConnectionSucceedListener, param1: globalAndroid.os.Handler): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module coloros {
		export module ocs {
			export module base {
				export module common {
					export module api {
						export class ConnectionClient {
							public static class: java.lang.Class<com.coloros.ocs.base.common.api.ConnectionClient>;
							public constructor();
							public unBind(): void;
							public bind(param0: globalAndroid.content.Context, param1: string, param2: com.coloros.ocs.base.IAuthenticationListener): void;
						}
						export module ConnectionClient {
							export class a {
								public static class: java.lang.Class<com.coloros.ocs.base.common.api.ConnectionClient.a>;
								public onServiceDisconnected(param0: globalAndroid.content.ComponentName): void;
								public onServiceConnected(param0: globalAndroid.content.ComponentName, param1: globalAndroid.os.IBinder): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module coloros {
		export module ocs {
			export module base {
				export module common {
					export module api {
						export class OnConnectionFailedListener {
							public static class: java.lang.Class<com.coloros.ocs.base.common.api.OnConnectionFailedListener>;
							/**
							 * Constructs a new instance of the com.coloros.ocs.base.common.api.OnConnectionFailedListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onConnectionFailed(param0: com.coloros.ocs.base.common.ConnectionResult): void;
							});
							public constructor();
							public onConnectionFailed(param0: com.coloros.ocs.base.common.ConnectionResult): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module coloros {
		export module ocs {
			export module base {
				export module common {
					export module api {
						export class OnConnectionSucceedListener {
							public static class: java.lang.Class<com.coloros.ocs.base.common.api.OnConnectionSucceedListener>;
							/**
							 * Constructs a new instance of the com.coloros.ocs.base.common.api.OnConnectionSucceedListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onConnectionSucceed(): void;
							});
							public constructor();
							public onConnectionSucceed(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module coloros {
		export module ocs {
			export module base {
				export module common {
					export module api {
						export class TaskListenerHolder<T>  extends java.lang.Object {
							public static class: java.lang.Class<com.coloros.ocs.base.common.api.TaskListenerHolder<any>>;
							public setErrorCode(param0: number): void;
							public getTask(): com.coloros.ocs.base.task.TaskImpl<T>;
							public getLooper(): globalAndroid.os.Looper;
							public getOnTaskSuccessListener(): com.coloros.ocs.base.common.api.TaskListenerHolder.SuccessNotifier<any>;
							public getFailureNotifier(): com.coloros.ocs.base.common.api.TaskListenerHolder.FailureNotifier<T>;
							public constructor(param0: globalAndroid.os.Looper, param1: com.coloros.ocs.base.task.TaskImpl<T>, param2: com.coloros.ocs.base.common.api.TaskListenerHolder.SuccessNotifier<T>, param3: com.coloros.ocs.base.common.api.TaskListenerHolder.FailureNotifier<T>);
						}
						export module TaskListenerHolder {
							export class FailureNotifier<T>  extends java.lang.Object {
								public static class: java.lang.Class<com.coloros.ocs.base.common.api.TaskListenerHolder.FailureNotifier<any>>;
								/**
								 * Constructs a new instance of the com.coloros.ocs.base.common.api.TaskListenerHolder$FailureNotifier interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									onNotifyListenerFailed(param0: com.coloros.ocs.base.task.TaskImpl<T>, param1: number, param2: string): void;
								});
								public constructor();
								public onNotifyListenerFailed(param0: com.coloros.ocs.base.task.TaskImpl<T>, param1: number, param2: string): void;
							}
							export class SuccessNotifier<T>  extends java.lang.Object {
								public static class: java.lang.Class<com.coloros.ocs.base.common.api.TaskListenerHolder.SuccessNotifier<any>>;
								/**
								 * Constructs a new instance of the com.coloros.ocs.base.common.api.TaskListenerHolder$SuccessNotifier interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									notifyListener(param0: com.coloros.ocs.base.task.TaskImpl<T>): void;
								});
								public constructor();
								public notifyListener(param0: com.coloros.ocs.base.task.TaskImpl<T>): void;
							}
							export class TaskListenerHandler extends com.coloros.ocs.base.common.a {
								public static class: java.lang.Class<com.coloros.ocs.base.common.api.TaskListenerHolder.TaskListenerHandler>;
								public constructor(param0: globalAndroid.os.Looper, param1: globalAndroid.os.Handler.Callback);
								public handleMessage(param0: globalAndroid.os.Message): void;
								public constructor(param0: globalAndroid.os.Looper);
								public constructor(param0: com.coloros.ocs.base.common.api.TaskListenerHolder<any>, param1: globalAndroid.os.Looper);
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module coloros {
		export module ocs {
			export module base {
				export module common {
					export module api {
						export class a extends com.coloros.ocs.base.common.a {
							public static class: java.lang.Class<com.coloros.ocs.base.common.api.a>;
							public handleMessage(param0: globalAndroid.os.Message): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module coloros {
		export module ocs {
			export module base {
				export module common {
					export module api {
						export class b extends com.coloros.ocs.base.common.a {
							public static class: java.lang.Class<com.coloros.ocs.base.common.api.b>;
							public handleMessage(param0: globalAndroid.os.Message): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module coloros {
		export module ocs {
			export module base {
				export module common {
					export module api {
						export class c<O>  extends globalAndroid.os.Handler.Callback {
							public static class: java.lang.Class<com.coloros.ocs.base.common.api.c<any>>;
							public static a(param0: globalAndroid.content.Context): com.coloros.ocs.base.common.api.c<any>;
							public handleMessage(param0: globalAndroid.os.Message): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module coloros {
		export module ocs {
			export module base {
				export module common {
					export module api {
						export class d extends com.coloros.ocs.base.common.api.ColorApiClient {
							public static class: java.lang.Class<com.coloros.ocs.base.common.api.d>;
							public getAuthResult(): com.coloros.ocs.base.common.AuthResult;
							public setOnConnectionFailedListener(param0: com.coloros.ocs.base.common.api.OnConnectionFailedListener, param1: globalAndroid.os.Handler): void;
							public disconnect(): void;
							public isConnected(): boolean;
							public constructor(param0: globalAndroid.content.Context, param1: com.coloros.ocs.base.common.api.Api<any>, param2: com.coloros.ocs.base.common.api.Api.ApiOptions, param3: com.coloros.ocs.base.internal.ClientSettings);
							public addQueue(param0: com.coloros.ocs.base.common.api.TaskListenerHolder<any>): void;
							public getLooper(): globalAndroid.os.Looper;
							public getRemoteService(): globalAndroid.os.IBinder;
							public setOnClearListener(param0: com.coloros.ocs.base.common.api.e): void;
							public getApi(): com.coloros.ocs.base.common.api.Api<any>;
							public isConnecting(): boolean;
							public getRemoteVersion(): number;
							public connect(): void;
							public setOnConnectionSucceedListener(param0: com.coloros.ocs.base.common.api.OnConnectionSucceedListener, param1: globalAndroid.os.Handler): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module coloros {
		export module ocs {
			export module base {
				export module common {
					export module api {
						export class e {
							public static class: java.lang.Class<com.coloros.ocs.base.common.api.e>;
							/**
							 * Constructs a new instance of the com.coloros.ocs.base.common.api.e interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								a(): void;
							});
							public constructor();
							public a(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module coloros {
		export module ocs {
			export module base {
				export module common {
					export class b extends globalAndroid.os.Parcelable.Creator<com.coloros.ocs.base.common.Status> {
						public static class: java.lang.Class<com.coloros.ocs.base.common.b>;
						public constructor();
					}
				}
			}
		}
	}
}

declare module com {
	export module coloros {
		export module ocs {
			export module base {
				export module common {
					export module constant {
						export class CapabilityConstants {
							public static class: java.lang.Class<com.coloros.ocs.base.common.constant.CapabilityConstants>;
							public static CAMERA_CLIENT: string;
							public static MEDIA_CLIENT: string;
							public static LINK_BOOST_CLIENT: string;
							public static HYPER_BOOST_CLIENT: string;
							public static AR_CLIENT: string;
							public static OAF_CLIENT: string;
							public static AIRVIEW_CLIENT: string;
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module coloros {
		export module ocs {
			export module base {
				export module common {
					export module constant {
						export class CommonStatusCodes {
							public static class: java.lang.Class<com.coloros.ocs.base.common.constant.CommonStatusCodes>;
							public static SUCCESS_CACHE: number;
							public static SUCCESS: number;
							public static CONNECTED: number;
							public static CONNECTING: number;
							public static CONNECT_FAILED: number;
							public static DISCONNECT: number;
							public static CONNECTED_SUCCESS_UNBIND: number;
							public static CANCELED: number;
							public static INTERNAL_ERROR: number;
							public static TASK_NULL: number;
							public static INTERRUPTED: number;
							public static TIMEOUT: number;
							public static API_NOT_CONNECTED: number;
							public static CLIENT_UNKNOWN: number;
							public static SERVICE_ABNORMAL_EXIT: number;
							public static RECONNECTING: number;
							public static AUTHENTICATE_SUCCESS: number;
							public static AUTHENTICATE_FAIL: number;
							public static TIME_EXPIRED: number;
							public static AUTHCODE_EXPECTED: number;
							public static VERSION_INCOMPATIBLE: number;
							public static AUTHCODE_RECYCLE: number;
							public static AUTHCODE_INVALID: number;
							public static CAPABILITY_EXCEPTION: number;
							public constructor();
							public static getStatusCodeString(param0: number): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module coloros {
		export module ocs {
			export module base {
				export module internal {
					export class ClientSettings {
						public static class: java.lang.Class<com.coloros.ocs.base.internal.ClientSettings>;
						public constructor(param0: string, param1: number, param2: java.util.List<com.coloros.ocs.base.common.Feature>);
						public getPackageName(): string;
						public getVersionCode(): number;
						public getList(): java.util.List<com.coloros.ocs.base.common.Feature>;
					}
				}
			}
		}
	}
}

declare module com {
	export module coloros {
		export module ocs {
			export module base {
				export module internal {
					export module safeparcel {
						export abstract class AbstractSafeParcelable extends com.coloros.ocs.base.internal.safeparcel.SafeParcelable {
							public static class: java.lang.Class<com.coloros.ocs.base.internal.safeparcel.AbstractSafeParcelable>;
							public constructor();
							public describeContents(): number;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module coloros {
		export module ocs {
			export module base {
				export module internal {
					export module safeparcel {
						export class SafeParcelable {
							public static class: java.lang.Class<com.coloros.ocs.base.internal.safeparcel.SafeParcelable>;
							/**
							 * Constructs a new instance of the com.coloros.ocs.base.internal.safeparcel.SafeParcelable interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
							});
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module coloros {
		export module ocs {
			export module base {
				export module internal {
					export module safeparcel {
						export class a {
							public static class: java.lang.Class<com.coloros.ocs.base.internal.safeparcel.a>;
							public static b(param0: globalAndroid.os.Parcel, param1: number): number;
							public static a(param0: globalAndroid.os.Parcel, param1: number): number;
						}
						export module a {
							export class a {
								public static class: java.lang.Class<com.coloros.ocs.base.internal.safeparcel.a.a>;
								public constructor(param0: string);
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module coloros {
		export module ocs {
			export module base {
				export module internal {
					export module safeparcel {
						export class b {
							public static class: java.lang.Class<com.coloros.ocs.base.internal.safeparcel.b>;
							public static b(param0: globalAndroid.os.Parcel, param1: number): number;
							public static a(param0: globalAndroid.os.Parcel, param1: number, param2: number): void;
							public static a(param0: globalAndroid.os.Parcel, param1: number): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module coloros {
		export module ocs {
			export module base {
				export module task {
					export class Continuation<TResult, TContinuationResult>  extends java.lang.Object {
						public static class: java.lang.Class<com.coloros.ocs.base.task.Continuation<any,any>>;
						/**
						 * Constructs a new instance of the com.coloros.ocs.base.task.Continuation<any,any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							then(param0: com.coloros.ocs.base.task.Task<TResult>): TContinuationResult;
						});
						public constructor();
						public then(param0: com.coloros.ocs.base.task.Task<TResult>): TContinuationResult;
					}
				}
			}
		}
	}
}

declare module com {
	export module coloros {
		export module ocs {
			export module base {
				export module task {
					export class OnCanceledListener {
						public static class: java.lang.Class<com.coloros.ocs.base.task.OnCanceledListener>;
						/**
						 * Constructs a new instance of the com.coloros.ocs.base.task.OnCanceledListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onCanceled(): void;
						});
						public constructor();
						public onCanceled(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module coloros {
		export module ocs {
			export module base {
				export module task {
					export class OnCompleteListener<TResult>  extends java.lang.Object {
						public static class: java.lang.Class<com.coloros.ocs.base.task.OnCompleteListener<any>>;
						/**
						 * Constructs a new instance of the com.coloros.ocs.base.task.OnCompleteListener<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onComplete(param0: com.coloros.ocs.base.task.Task<TResult>): void;
						});
						public constructor();
						public onComplete(param0: com.coloros.ocs.base.task.Task<TResult>): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module coloros {
		export module ocs {
			export module base {
				export module task {
					export class OnFailureListener {
						public static class: java.lang.Class<com.coloros.ocs.base.task.OnFailureListener>;
						/**
						 * Constructs a new instance of the com.coloros.ocs.base.task.OnFailureListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onFailure(param0: java.lang.Exception): void;
						});
						public constructor();
						public onFailure(param0: java.lang.Exception): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module coloros {
		export module ocs {
			export module base {
				export module task {
					export class OnSuccessListener<TResult>  extends java.lang.Object {
						public static class: java.lang.Class<com.coloros.ocs.base.task.OnSuccessListener<any>>;
						/**
						 * Constructs a new instance of the com.coloros.ocs.base.task.OnSuccessListener<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onSuccess(param0: TResult): void;
						});
						public constructor();
						public onSuccess(param0: TResult): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module coloros {
		export module ocs {
			export module base {
				export module task {
					export class SuccessContinuation<TResult, TContinuationResult>  extends java.lang.Object {
						public static class: java.lang.Class<com.coloros.ocs.base.task.SuccessContinuation<any,any>>;
						/**
						 * Constructs a new instance of the com.coloros.ocs.base.task.SuccessContinuation<any,any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							then(param0: TResult): com.coloros.ocs.base.task.Task<TContinuationResult>;
						});
						public constructor();
						public then(param0: TResult): com.coloros.ocs.base.task.Task<TContinuationResult>;
					}
				}
			}
		}
	}
}

declare module com {
	export module coloros {
		export module ocs {
			export module base {
				export module task {
					export abstract class Task<TResult>  extends java.lang.Object {
						public static class: java.lang.Class<com.coloros.ocs.base.task.Task<any>>;
						public onSuccessTask(param0: com.coloros.ocs.base.task.SuccessContinuation<any,any>): com.coloros.ocs.base.task.Task<any>;
						public constructor();
						public addOnCompleteListener(param0: java.util.concurrent.Executor, param1: com.coloros.ocs.base.task.OnCompleteListener<TResult>): com.coloros.ocs.base.task.Task<TResult>;
						public onSuccessTask(param0: java.util.concurrent.Executor, param1: com.coloros.ocs.base.task.SuccessContinuation<any,any>): com.coloros.ocs.base.task.Task<any>;
						public continueWithTask(param0: com.coloros.ocs.base.task.Continuation<any,any>): com.coloros.ocs.base.task.Task<any>;
						public addOnCanceledListener(param0: java.util.concurrent.Executor, param1: com.coloros.ocs.base.task.OnCanceledListener): com.coloros.ocs.base.task.Task<TResult>;
						public continueWithTask(param0: java.util.concurrent.Executor, param1: com.coloros.ocs.base.task.Continuation<any,any>): com.coloros.ocs.base.task.Task<any>;
						public addOnSuccessListener(param0: java.util.concurrent.Executor, param1: com.coloros.ocs.base.task.OnSuccessListener<any>): com.coloros.ocs.base.task.Task<TResult>;
						public getResult(): TResult;
						public addOnFailureListener(param0: com.coloros.ocs.base.task.OnFailureListener): com.coloros.ocs.base.task.Task<TResult>;
						public continueWith(param0: java.util.concurrent.Executor, param1: com.coloros.ocs.base.task.Continuation<any,any>): com.coloros.ocs.base.task.Task<any>;
						public isSuccessful(): boolean;
						public isComplete(): boolean;
						public isCanceled(): boolean;
						public getResult(param0: java.lang.Class): any;
						public addOnCompleteListener(param0: com.coloros.ocs.base.task.OnCompleteListener<TResult>): com.coloros.ocs.base.task.Task<TResult>;
						public getException(): java.lang.Exception;
						public addOnSuccessListener(param0: com.coloros.ocs.base.task.OnSuccessListener<any>): com.coloros.ocs.base.task.Task<TResult>;
						public addOnCanceledListener(param0: com.coloros.ocs.base.task.OnCanceledListener): com.coloros.ocs.base.task.Task<TResult>;
						public addOnFailureListener(param0: java.util.concurrent.Executor, param1: com.coloros.ocs.base.task.OnFailureListener): com.coloros.ocs.base.task.Task<TResult>;
						public continueWith(param0: com.coloros.ocs.base.task.Continuation<any,any>): com.coloros.ocs.base.task.Task<any>;
					}
				}
			}
		}
	}
}

declare module com {
	export module coloros {
		export module ocs {
			export module base {
				export module task {
					export class TaskCompletionSource<TResult>  extends java.lang.Object {
						public static class: java.lang.Class<com.coloros.ocs.base.task.TaskCompletionSource<any>>;
						public trySetResult(param0: TResult): boolean;
						public constructor();
						public trySetException(param0: java.lang.Exception): boolean;
						public getTask(): com.coloros.ocs.base.task.Task<TResult>;
						public setException(param0: java.lang.Exception): void;
						public setResult(param0: TResult): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module coloros {
		export module ocs {
			export module base {
				export module task {
					export class TaskExecutors {
						public static class: java.lang.Class<com.coloros.ocs.base.task.TaskExecutors>;
						public static MAIN_THREAD: java.util.concurrent.Executor;
						public static CURRENT_THREAD: java.util.concurrent.Executor;
					}
					export module TaskExecutors {
						export class MainExecutor {
							public static class: java.lang.Class<com.coloros.ocs.base.task.TaskExecutors.MainExecutor>;
							public constructor();
							public execute(param0: java.lang.Runnable): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module coloros {
		export module ocs {
			export module base {
				export module task {
					export class TaskImpl<TResult>  extends com.coloros.ocs.base.task.Task<any> {
						public static class: java.lang.Class<com.coloros.ocs.base.task.TaskImpl<any>>;
						public addOnSuccessListener(param0: com.coloros.ocs.base.task.OnSuccessListener<any>): com.coloros.ocs.base.task.Task<any>;
						public setResult(param0: any): void;
						public tryCancel(): boolean;
						public continueWithTask(param0: java.util.concurrent.Executor, param1: com.coloros.ocs.base.task.Continuation<any,any>): com.coloros.ocs.base.task.Task<any>;
						public addOnCompleteListener(param0: java.util.concurrent.Executor, param1: com.coloros.ocs.base.task.OnCompleteListener<any>): com.coloros.ocs.base.task.Task<any>;
						public addOnSuccessListener(param0: java.util.concurrent.Executor, param1: com.coloros.ocs.base.task.OnSuccessListener<any>): com.coloros.ocs.base.task.Task<any>;
						public addOnFailureListener(param0: java.util.concurrent.Executor, param1: com.coloros.ocs.base.task.OnFailureListener): com.coloros.ocs.base.task.Task<any>;
						public continueWith(param0: java.util.concurrent.Executor, param1: com.coloros.ocs.base.task.Continuation<any,any>): com.coloros.ocs.base.task.Task<any>;
						public isSuccessful(): boolean;
						public trySetResult(param0: any): boolean;
						public setException(param0: java.lang.Exception): void;
						public continueWith(param0: com.coloros.ocs.base.task.Continuation<any,any>): com.coloros.ocs.base.task.Task<any>;
						public onSuccessTask(param0: com.coloros.ocs.base.task.SuccessContinuation<any,any>): com.coloros.ocs.base.task.Task<any>;
						public constructor();
						public addOnCompleteListener(param0: com.coloros.ocs.base.task.OnCompleteListener<any>): com.coloros.ocs.base.task.Task<any>;
						public onSuccessTask(param0: java.util.concurrent.Executor, param1: com.coloros.ocs.base.task.SuccessContinuation<any,any>): com.coloros.ocs.base.task.Task<any>;
						public continueWithTask(param0: com.coloros.ocs.base.task.Continuation<any,any>): com.coloros.ocs.base.task.Task<any>;
						public trySetException(param0: java.lang.Exception): boolean;
						public getResult(): any;
						public addOnCanceledListener(param0: com.coloros.ocs.base.task.OnCanceledListener): com.coloros.ocs.base.task.Task<any>;
						public isComplete(): boolean;
						public isCanceled(): boolean;
						public getResult(param0: java.lang.Class): any;
						public addOnFailureListener(param0: com.coloros.ocs.base.task.OnFailureListener): com.coloros.ocs.base.task.Task<any>;
						public getException(): java.lang.Exception;
						public addOnCanceledListener(param0: java.util.concurrent.Executor, param1: com.coloros.ocs.base.task.OnCanceledListener): com.coloros.ocs.base.task.Task<any>;
					}
				}
			}
		}
	}
}

declare module com {
	export module coloros {
		export module ocs {
			export module base {
				export module task {
					export class Tasks {
						public static class: java.lang.Class<com.coloros.ocs.base.task.Tasks>;
						public static whenAll(param0: java.util.Collection<any>): com.coloros.ocs.base.task.Task<java.lang.Void>;
						public static whenAllSuccess(param0: native.Array<com.coloros.ocs.base.task.Task<any>>): com.coloros.ocs.base.task.Task<any>;
						public static whenAllSuccess(param0: java.util.Collection): com.coloros.ocs.base.task.Task<any>;
						public static forException(param0: java.lang.Exception): com.coloros.ocs.base.task.Task<any>;
						public static whenAllComplete(param0: java.util.Collection<any>): com.coloros.ocs.base.task.Task<java.util.List<com.coloros.ocs.base.task.Task<any>>>;
						public static call(param0: java.util.concurrent.Callable): com.coloros.ocs.base.task.Task<any>;
						public static call(param0: java.util.concurrent.Executor, param1: java.util.concurrent.Callable): com.coloros.ocs.base.task.Task<any>;
						public static await(param0: com.coloros.ocs.base.task.Task<any>, param1: number, param2: java.util.concurrent.TimeUnit): any;
						public static forResult(param0: any): com.coloros.ocs.base.task.Task<any>;
						public static forCanceled(): com.coloros.ocs.base.task.Task<any>;
						public static whenAll(param0: native.Array<com.coloros.ocs.base.task.Task<any>>): com.coloros.ocs.base.task.Task<java.lang.Void>;
						public static await(param0: com.coloros.ocs.base.task.Task<any>): any;
						public static whenAllComplete(param0: native.Array<com.coloros.ocs.base.task.Task<any>>): com.coloros.ocs.base.task.Task<java.util.List<com.coloros.ocs.base.task.Task<any>>>;
					}
					export module Tasks {
						export class a extends com.coloros.ocs.base.task.Tasks.c {
							public static class: java.lang.Class<com.coloros.ocs.base.task.Tasks.a>;
							public constructor(param0: number, param1: com.coloros.ocs.base.task.TaskImpl<java.lang.Void>);
							public onSuccess(param0: any): void;
							public onFailure(param0: java.lang.Exception): void;
							public onCanceled(): void;
						}
						export class b extends com.coloros.ocs.base.task.Tasks.c {
							public static class: java.lang.Class<com.coloros.ocs.base.task.Tasks.b>;
							public onSuccess(param0: any): void;
							public onFailure(param0: java.lang.Exception): void;
							public onCanceled(): void;
						}
						export class c extends java.lang.Object {
							public static class: java.lang.Class<com.coloros.ocs.base.task.Tasks.c>;
							/**
							 * Constructs a new instance of the com.coloros.ocs.base.task.Tasks$c interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onCanceled(): void;
								onFailure(param0: java.lang.Exception): void;
								onSuccess(param0: any): void;
							});
							public constructor();
							public onSuccess(param0: any): void;
							public onFailure(param0: java.lang.Exception): void;
							public onCanceled(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module coloros {
		export module ocs {
			export module base {
				export module task {
					export class a {
						public static class: java.lang.Class<com.coloros.ocs.base.task.a>;
						public run(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module coloros {
		export module ocs {
			export module base {
				export module task {
					export class b<TResult>  extends java.lang.Object {
						public static class: java.lang.Class<com.coloros.ocs.base.task.b<any>>;
						/**
						 * Constructs a new instance of the com.coloros.ocs.base.task.b<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							a(param0: com.coloros.ocs.base.task.Task<TResult>): void;
						});
						public constructor();
						public a(param0: com.coloros.ocs.base.task.Task<TResult>): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module coloros {
		export module ocs {
			export module base {
				export module task {
					export class c<TResult, TContinuationResult>  extends com.coloros.ocs.base.task.b<any> {
						public static class: java.lang.Class<com.coloros.ocs.base.task.c<any,any>>;
						public constructor(param0: java.util.concurrent.Executor, param1: com.coloros.ocs.base.task.Continuation<any,any>, param2: com.coloros.ocs.base.task.TaskImpl<any>);
						public a(param0: com.coloros.ocs.base.task.Task<any>): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module coloros {
		export module ocs {
			export module base {
				export module task {
					export class d<TResult>  extends com.coloros.ocs.base.task.b<any> {
						public static class: java.lang.Class<com.coloros.ocs.base.task.d<any>>;
						public a(): com.coloros.ocs.base.task.OnCanceledListener;
						public a(param0: com.coloros.ocs.base.task.Task<any>): void;
						public constructor(param0: java.util.concurrent.Executor, param1: com.coloros.ocs.base.task.OnCanceledListener);
						public a(param0: com.coloros.ocs.base.task.Task<any>): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module coloros {
		export module ocs {
			export module base {
				export module task {
					export class e {
						public static class: java.lang.Class<com.coloros.ocs.base.task.e>;
						public constructor(param0: com.coloros.ocs.base.task.d<any>);
						public run(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module coloros {
		export module ocs {
			export module base {
				export module task {
					export class f<TResult>  extends com.coloros.ocs.base.task.b<any> {
						public static class: java.lang.Class<com.coloros.ocs.base.task.f<any>>;
						public constructor(param0: java.util.concurrent.Executor, param1: com.coloros.ocs.base.task.OnCompleteListener<any>);
						public a(param0: com.coloros.ocs.base.task.Task<any>): void;
						public a(): com.coloros.ocs.base.task.OnCompleteListener<any>;
					}
				}
			}
		}
	}
}

declare module com {
	export module coloros {
		export module ocs {
			export module base {
				export module task {
					export class g {
						public static class: java.lang.Class<com.coloros.ocs.base.task.g>;
						public run(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module coloros {
		export module ocs {
			export module base {
				export module task {
					export class h<TResult>  extends com.coloros.ocs.base.task.b<any> {
						public static class: java.lang.Class<com.coloros.ocs.base.task.h<any>>;
						public a(): com.coloros.ocs.base.task.OnFailureListener;
						public constructor(param0: java.util.concurrent.Executor, param1: com.coloros.ocs.base.task.OnFailureListener);
						public a(param0: com.coloros.ocs.base.task.Task<any>): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module coloros {
		export module ocs {
			export module base {
				export module task {
					export class i {
						public static class: java.lang.Class<com.coloros.ocs.base.task.i>;
						public run(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module coloros {
		export module ocs {
			export module base {
				export module task {
					export class j<TResult>  extends com.coloros.ocs.base.task.b<any> {
						public static class: java.lang.Class<com.coloros.ocs.base.task.j<any>>;
						public constructor(param0: java.util.concurrent.Executor, param1: com.coloros.ocs.base.task.OnSuccessListener<any>);
						public a(param0: com.coloros.ocs.base.task.Task<any>): void;
						public a(): com.coloros.ocs.base.task.OnSuccessListener<any>;
					}
				}
			}
		}
	}
}

declare module com {
	export module coloros {
		export module ocs {
			export module base {
				export module task {
					export class k {
						public static class: java.lang.Class<com.coloros.ocs.base.task.k>;
						public run(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module coloros {
		export module ocs {
			export module base {
				export module task {
					export class l {
						public static class: java.lang.Class<com.coloros.ocs.base.task.l>;
						public run(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module coloros {
		export module ocs {
			export module base {
				export module task {
					export class m<TResult, TContinuationResult>  extends java.lang.Object {
						public static class: java.lang.Class<com.coloros.ocs.base.task.m<any,any>>;
						public onFailure(param0: java.lang.Exception): void;
						public onSuccess(param0: TContinuationResult): void;
						public onCanceled(): void;
						public onSuccess(param0: TResult): void;
						public constructor(param0: java.util.concurrent.Executor, param1: com.coloros.ocs.base.task.SuccessContinuation<TResult,TContinuationResult>, param2: com.coloros.ocs.base.task.TaskImpl<TContinuationResult>);
						public a(param0: com.coloros.ocs.base.task.Task<TResult>): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module coloros {
		export module ocs {
			export module base {
				export module task {
					export class n {
						public static class: java.lang.Class<com.coloros.ocs.base.task.n>;
						public run(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module coloros {
		export module ocs {
			export module base {
				export module task {
					export class o extends com.coloros.ocs.base.task.Continuation<java.lang.Void,com.coloros.ocs.base.task.Task<java.util.List<com.coloros.ocs.base.task.Task<any>>>> {
						public static class: java.lang.Class<com.coloros.ocs.base.task.o>;
						public then(param0: com.coloros.ocs.base.task.Task<any>): any;
					}
				}
			}
		}
	}
}

declare module com {
	export module coloros {
		export module ocs {
			export module base {
				export module task {
					export class p<TResult>  extends com.coloros.ocs.base.task.Continuation<java.lang.Void,java.util.List<any>> {
						public static class: java.lang.Class<com.coloros.ocs.base.task.p<any>>;
						public then(param0: com.coloros.ocs.base.task.Task<any>): any;
						public constructor(param0: java.util.Collection<any>);
					}
				}
			}
		}
	}
}

declare module com {
	export module coloros {
		export module ocs {
			export module base {
				export module task {
					export class q<TResult>  extends java.lang.Object {
						public static class: java.lang.Class<com.coloros.ocs.base.task.q<any>>;
						public a(param0: com.coloros.ocs.base.task.b<TResult>): void;
						public constructor();
						public a(param0: com.coloros.ocs.base.task.Task<TResult>): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module coloros {
		export module ocs {
			export module base {
				export module task {
					export class r {
						public static class: java.lang.Class<com.coloros.ocs.base.task.r>;
						public execute(param0: java.lang.Runnable): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module coloros {
		export module ocs {
			export module mediaunit {
				export class BuildConfig {
					public static class: java.lang.Class<com.coloros.ocs.mediaunit.BuildConfig>;
					public static DEBUG: boolean;
					public static APPLICATION_ID: string;
					public static BUILD_TYPE: string;
					public static FLAVOR: string;
					public static VERSION_CODE: number;
					public static VERSION_NAME: string;
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module coloros {
		export module ocs {
			export module mediaunit {
				export class IKaraokeService {
					public static class: java.lang.Class<com.coloros.ocs.mediaunit.IKaraokeService>;
					/**
					 * Constructs a new instance of the com.coloros.ocs.mediaunit.IKaraokeService interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						requestAudioLoopback(param0: globalAndroid.os.IBinder, param1: string): number;
						abandonAudioLoopback(param0: string): number;
					});
					public constructor();
					public requestAudioLoopback(param0: globalAndroid.os.IBinder, param1: string): number;
					public abandonAudioLoopback(param0: string): number;
				}
				export module IKaraokeService {
					export class Default extends com.coloros.ocs.mediaunit.IKaraokeService {
						public static class: java.lang.Class<com.coloros.ocs.mediaunit.IKaraokeService.Default>;
						public requestAudioLoopback(param0: globalAndroid.os.IBinder, param1: string): number;
						public constructor();
						public abandonAudioLoopback(param0: string): number;
						public asBinder(): globalAndroid.os.IBinder;
					}
					export abstract class Stub implements com.coloros.ocs.mediaunit.IKaraokeService {
						public static class: java.lang.Class<com.coloros.ocs.mediaunit.IKaraokeService.Stub>;
						public static asInterface(param0: globalAndroid.os.IBinder): com.coloros.ocs.mediaunit.IKaraokeService;
						public requestAudioLoopback(param0: globalAndroid.os.IBinder, param1: string): number;
						public constructor();
						public abandonAudioLoopback(param0: string): number;
						public static setDefaultImpl(param0: com.coloros.ocs.mediaunit.IKaraokeService): boolean;
						public onTransact(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
						public asBinder(): globalAndroid.os.IBinder;
						public static getDefaultImpl(): com.coloros.ocs.mediaunit.IKaraokeService;
					}
					export module Stub {
						export class Proxy extends com.coloros.ocs.mediaunit.IKaraokeService {
							public static class: java.lang.Class<com.coloros.ocs.mediaunit.IKaraokeService.Stub.Proxy>;
							public static sDefaultImpl: com.coloros.ocs.mediaunit.IKaraokeService;
							public getInterfaceDescriptor(): string;
							public asBinder(): globalAndroid.os.IBinder;
							public abandonAudioLoopback(param0: string): number;
							public requestAudioLoopback(param0: globalAndroid.os.IBinder, param1: string): number;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module coloros {
		export module ocs {
			export module mediaunit {
				export class MediaClient extends com.coloros.ocs.base.common.api.BaseClient<any> {
					public static class: java.lang.Class<com.coloros.ocs.mediaunit.MediaClient>;
					public isConnected(): boolean;
					public getRemoteService(): any;
					public getMinApkVersion(): number;
					public addQueue(param0: com.coloros.ocs.base.common.api.TaskListenerHolder<any>): void;
					public setOnConnectionSucceedListener(param0: com.coloros.ocs.base.common.api.OnConnectionSucceedListener, param1: globalAndroid.os.Handler): void;
					public requiresColorService(): boolean;
					public setOnConnectionFailedListener(param0: com.coloros.ocs.base.common.api.OnConnectionFailedListener, param1: globalAndroid.os.Handler): void;
					public getAuthResult(): com.coloros.ocs.base.common.AuthResult;
					public getLooper(): globalAndroid.os.Looper;
					public getTargetPackageName(): string;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.os.Looper);
					public setOnClearListener(param0: com.coloros.ocs.base.common.api.e): void;
					public connect(): void;
					public getRemoteService(): globalAndroid.os.IBinder;
					public disconnect(): void;
					public getClientName(): string;
					public isConnecting(): boolean;
				}
			}
		}
	}
}

declare module com {
	export module coloros {
		export module ocs {
			export module mediaunit {
				export class MediaClientBuilder extends com.coloros.ocs.base.common.api.Api.AbstractClientBuilder<any,any> {
					public static class: java.lang.Class<com.coloros.ocs.mediaunit.MediaClientBuilder>;
					public constructor();
					public buildClient(param0: globalAndroid.content.Context, param1: globalAndroid.os.Looper, param2: com.coloros.ocs.base.internal.ClientSettings, param3: any): any;
					public buildClient(param0: globalAndroid.content.Context, param1: globalAndroid.os.Looper, param2: com.coloros.ocs.base.internal.ClientSettings, param3: any): com.coloros.ocs.base.common.api.Api.Client;
				}
			}
		}
	}
}

declare module com {
	export module coloros {
		export module ocs {
			export module mediaunit {
				export class MediaUnit {
					public static class: java.lang.Class<com.coloros.ocs.mediaunit.MediaUnit>;
					public static getMediaClient(param0: globalAndroid.content.Context): com.coloros.ocs.mediaunit.MediaUnitClient;
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module coloros {
		export module ocs {
			export module mediaunit {
				export class MediaUnitClient extends com.coloros.ocs.base.common.api.ColorApi<com.coloros.ocs.base.common.api.Api.ApiOptions.NoOptions,com.coloros.ocs.mediaunit.MediaUnitClient> {
					public static class: java.lang.Class<com.coloros.ocs.mediaunit.MediaUnitClient>;
					public hasFeature(param0: string): boolean;
					public getVersion(): number;
					public abandonAudioLoopback(): number;
					public requestAudioLoopback(): number;
					public init(): void;
					public static release(): void;
					public static initialize(param0: globalAndroid.content.Context): com.coloros.ocs.mediaunit.MediaUnitClient;
				}
			}
		}
	}
}

declare module com {
	export module huawei {
		export module multimedia {
			export module audioengine {
				export class IHwAudioEngine {
					public static class: java.lang.Class<com.huawei.multimedia.audioengine.IHwAudioEngine>;
					/**
					 * Constructs a new instance of the com.huawei.multimedia.audioengine.IHwAudioEngine interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getSupportedFeatures(): java.util.List;
						isFeatureSupported(param0: number): boolean;
						init(param0: string, param1: string): void;
					});
					public constructor();
					public isFeatureSupported(param0: number): boolean;
					public getSupportedFeatures(): java.util.List;
					public init(param0: string, param1: string): void;
				}
				export module IHwAudioEngine {
					export abstract class Stub implements com.huawei.multimedia.audioengine.IHwAudioEngine {
						public static class: java.lang.Class<com.huawei.multimedia.audioengine.IHwAudioEngine.Stub>;
						public constructor();
						public isFeatureSupported(param0: number): boolean;
						public getSupportedFeatures(): java.util.List;
						public onTransact(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
						public asBinder(): globalAndroid.os.IBinder;
						public init(param0: string, param1: string): void;
						public static asInterface(param0: globalAndroid.os.IBinder): com.huawei.multimedia.audioengine.IHwAudioEngine;
					}
					export module Stub {
						export class Proxy extends com.huawei.multimedia.audioengine.IHwAudioEngine {
							public static class: java.lang.Class<com.huawei.multimedia.audioengine.IHwAudioEngine.Stub.Proxy>;
							public getInterfaceDescriptor(): string;
							public asBinder(): globalAndroid.os.IBinder;
							public isFeatureSupported(param0: number): boolean;
							public init(param0: string, param1: string): void;
							public getSupportedFeatures(): java.util.List;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module huawei {
		export module multimedia {
			export module audioengine {
				export class IHwAudioKaraokeFeature {
					public static class: java.lang.Class<com.huawei.multimedia.audioengine.IHwAudioKaraokeFeature>;
					/**
					 * Constructs a new instance of the com.huawei.multimedia.audioengine.IHwAudioKaraokeFeature interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						isKaraokeFeatureSupport(): boolean;
						enableKaraokeFeature(param0: boolean): number;
						getKaraokeLatency(): number;
						setParameter(param0: string, param1: number): number;
						init(param0: string): void;
					});
					public constructor();
					public init(param0: string): void;
					public enableKaraokeFeature(param0: boolean): number;
					public getKaraokeLatency(): number;
					public isKaraokeFeatureSupport(): boolean;
					public setParameter(param0: string, param1: number): number;
				}
				export module IHwAudioKaraokeFeature {
					export abstract class Stub implements com.huawei.multimedia.audioengine.IHwAudioKaraokeFeature {
						public static class: java.lang.Class<com.huawei.multimedia.audioengine.IHwAudioKaraokeFeature.Stub>;
						public constructor();
						public getKaraokeLatency(): number;
						public static asInterface(param0: globalAndroid.os.IBinder): com.huawei.multimedia.audioengine.IHwAudioKaraokeFeature;
						public isKaraokeFeatureSupport(): boolean;
						public init(param0: string): void;
						public enableKaraokeFeature(param0: boolean): number;
						public onTransact(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
						public setParameter(param0: string, param1: number): number;
						public asBinder(): globalAndroid.os.IBinder;
					}
					export module Stub {
						export class Proxy extends com.huawei.multimedia.audioengine.IHwAudioKaraokeFeature {
							public static class: java.lang.Class<com.huawei.multimedia.audioengine.IHwAudioKaraokeFeature.Stub.Proxy>;
							public getInterfaceDescriptor(): string;
							public asBinder(): globalAndroid.os.IBinder;
							public getKaraokeLatency(): number;
							public setParameter(param0: string, param1: number): number;
							public isKaraokeFeatureSupport(): boolean;
							public init(param0: string): void;
							public enableKaraokeFeature(param0: boolean): number;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module huawei {
		export module multimedia {
			export module audiokit {
				export class BuildConfig {
					public static class: java.lang.Class<com.huawei.multimedia.audiokit.BuildConfig>;
					public static DEBUG: boolean;
					public static APPLICATION_ID: string;
					public static BUILD_TYPE: string;
					public static FLAVOR: string;
					public static VERSION_CODE: number;
					public static VERSION_NAME: string;
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module huawei {
		export module multimedia {
			export module audiokit {
				export module config {
					export class ResultCode {
						public static class: java.lang.Class<com.huawei.multimedia.audiokit.config.ResultCode>;
						public static AUDIO_KIT_SUCCESS: number;
						public static GET_LATENCY_FAIL: number;
						public static SERVICE_BIND_ERROR: number;
						public static VENDOR_NOT_SUPPORTED: number;
						public static AUDIO_KIT_SERVICE_DISCONNECTED: number;
						public static AUDIO_KIT_SERVICE_LINKFAILED: number;
						public static AUDIO_KIT_SERVICE_DIED: number;
						public static APP_CONTEXT_NULL: number;
						public static KARAOKE_SUCCESS: number;
						public static KARAOKE_SERVICE_DISCONNECTED: number;
						public static KARAOKE_SERVICE_LINKFAIL: number;
						public static KARAOKE_SERVICE_DIED: number;
						public static KARAOKE_WIRED_HEADSET_NOT_PLUG_IN: number;
						public static PLATEFORM_NOT_SUPPORT: number;
						public static PARAME_VALUE_ERROR: number;
					}
				}
			}
		}
	}
}

declare module com {
	export module huawei {
		export module multimedia {
			export module audiokit {
				export module config {
					export class Version {
						public static class: java.lang.Class<com.huawei.multimedia.audiokit.config.Version>;
						public static SDK_VERSION_NAME: string;
					}
				}
			}
		}
	}
}

declare module com {
	export module huawei {
		export module multimedia {
			export module audiokit {
				export module interfaces {
					export class AudioFeaturesKit {
						public static class: java.lang.Class<com.huawei.multimedia.audiokit.interfaces.AudioFeaturesKit>;
						public constructor();
					}
				}
			}
		}
	}
}

declare module com {
	export module huawei {
		export module multimedia {
			export module audiokit {
				export module interfaces {
					export class FeatureKitManager {
						public static class: java.lang.Class<com.huawei.multimedia.audiokit.interfaces.FeatureKitManager>;
						public setCallBack(param0: com.huawei.multimedia.audiokit.interfaces.IAudioKitCallback): void;
						public static getInstance(): com.huawei.multimedia.audiokit.interfaces.FeatureKitManager;
						public unbindService(param0: globalAndroid.content.Context, param1: globalAndroid.content.ServiceConnection): void;
						public onCallBack(param0: number): void;
						public getCallBack(): com.huawei.multimedia.audiokit.interfaces.IAudioKitCallback;
						public createFeatureKit(param0: number, param1: globalAndroid.content.Context): com.huawei.multimedia.audiokit.interfaces.AudioFeaturesKit;
						public bindService(param0: globalAndroid.content.Context, param1: globalAndroid.content.ServiceConnection, param2: string): void;
						public isMediaKitSupport(param0: globalAndroid.content.Context): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module huawei {
		export module multimedia {
			export module audiokit {
				export module interfaces {
					export class HwAudioKaraokeFeatureKit extends com.huawei.multimedia.audiokit.interfaces.AudioFeaturesKit {
						public static class: java.lang.Class<com.huawei.multimedia.audiokit.interfaces.HwAudioKaraokeFeatureKit>;
						public constructor();
						public getKaraokeLatency(): number;
						public constructor(param0: globalAndroid.content.Context);
						public isKaraokeFeatureSupport(): boolean;
						public setParameter(param0: com.huawei.multimedia.audiokit.interfaces.HwAudioKaraokeFeatureKit.ParameName, param1: number): number;
						public destroy(): void;
						public enableKaraokeFeature(param0: boolean): number;
						public initialize(param0: globalAndroid.content.Context): void;
					}
					export module HwAudioKaraokeFeatureKit {
						export class ParameName {
							public static class: java.lang.Class<com.huawei.multimedia.audiokit.interfaces.HwAudioKaraokeFeatureKit.ParameName>;
							public static CMD_SET_AUDIO_EFFECT_MODE_BASE: com.huawei.multimedia.audiokit.interfaces.HwAudioKaraokeFeatureKit.ParameName;
							public static CMD_SET_VOCAL_VOLUME_BASE: com.huawei.multimedia.audiokit.interfaces.HwAudioKaraokeFeatureKit.ParameName;
							public static CMD_SET_VOCAL_EQUALIZER_MODE: com.huawei.multimedia.audiokit.interfaces.HwAudioKaraokeFeatureKit.ParameName;
							public static valueOf(param0: string): com.huawei.multimedia.audiokit.interfaces.HwAudioKaraokeFeatureKit.ParameName;
							public static values(): native.Array<com.huawei.multimedia.audiokit.interfaces.HwAudioKaraokeFeatureKit.ParameName>;
							public getParameName(): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module huawei {
		export module multimedia {
			export module audiokit {
				export module interfaces {
					export class HwAudioKit {
						public static class: java.lang.Class<com.huawei.multimedia.audiokit.interfaces.HwAudioKit>;
						public constructor(param0: globalAndroid.content.Context, param1: com.huawei.multimedia.audiokit.interfaces.IAudioKitCallback);
						public initialize(): void;
						public getSupportedFeatures(): java.util.List<java.lang.Integer>;
						public destroy(): void;
						public createFeature(param0: com.huawei.multimedia.audiokit.interfaces.HwAudioKit.FeatureType): com.huawei.multimedia.audiokit.interfaces.AudioFeaturesKit;
						public isFeatureSupported(param0: com.huawei.multimedia.audiokit.interfaces.HwAudioKit.FeatureType): boolean;
					}
					export module HwAudioKit {
						export class FeatureType {
							public static class: java.lang.Class<com.huawei.multimedia.audiokit.interfaces.HwAudioKit.FeatureType>;
							public static HWAUDIO_FEATURE_KARAOKE: com.huawei.multimedia.audiokit.interfaces.HwAudioKit.FeatureType;
							public static values(): native.Array<com.huawei.multimedia.audiokit.interfaces.HwAudioKit.FeatureType>;
							public getFeatureType(): number;
							public static valueOf(param0: string): com.huawei.multimedia.audiokit.interfaces.HwAudioKit.FeatureType;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module huawei {
		export module multimedia {
			export module audiokit {
				export module interfaces {
					export class IAudioKitCallback {
						public static class: java.lang.Class<com.huawei.multimedia.audiokit.interfaces.IAudioKitCallback>;
						/**
						 * Constructs a new instance of the com.huawei.multimedia.audiokit.interfaces.IAudioKitCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onResult(param0: number): void;
						});
						public constructor();
						public onResult(param0: number): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module huawei {
		export module multimedia {
			export module audiokit {
				export module utils {
					export class Constant {
						public static class: java.lang.Class<com.huawei.multimedia.audiokit.utils.Constant>;
						public static HWAUDIO_FEATURE_KARAOKE: number;
						public static REVERB_EFFECT_MODE_ORIGINAL: number;
						public static REVERB_EFFECT_MODE_KTV: number;
						public static REVERB_EFFECT_MODE_THEATRE: number;
						public static REVERB_EFFECT_MODE_CONCERT: number;
						public static EQUALIZER_MODE_DEFAULT: number;
						public static EQUALIZER_MODE_FULL: number;
						public static EQUALIZER_MODE_BRIGHT: number;
					}
				}
			}
		}
	}
}

declare module com {
	export module huawei {
		export module multimedia {
			export module audiokit {
				export module utils {
					export class LogUtils {
						public static class: java.lang.Class<com.huawei.multimedia.audiokit.utils.LogUtils>;
						public static LOG_LEVEL: number;
						public static ERROR: number;
						public static WARN: number;
						public static INFO: number;
						public static DEBUG: number;
						public static VERBOSE: number;
						public static error(param0: string, param1: string): void;
						public static warn(param0: string, param1: string): void;
						public static info(param0: string, param1: string): void;
						public static info(param0: string, param1: string, param2: native.Array<any>): void;
						public static debug(param0: string, param1: string, param2: native.Array<any>): void;
						public static error(param0: string, param1: string, param2: native.Array<any>): void;
						public static debug(param0: string, param1: string): void;
						public static verbose(param0: string, param1: string): void;
					}
				}
			}
		}
	}
}

declare module io {
	export module agora {
		export module rtc {
			export class Constants {
				public static class: java.lang.Class<io.agora.rtc.Constants>;
				public static ADAPT_NONE: number;
				public static ADAPT_UP_BANDWIDTH: number;
				public static ADAPT_DOWN_BANDWIDTH: number;
				public static LASTMILE_PROBE_RESULT_COMPLETE: number;
				public static LASTMILE_PROBE_RESULT_INCOMPLETE_NO_BWE: number;
				public static LASTMILE_PROBE_RESULT_UNAVAILABLE: number;
				public static QUALITY_UNKNOWN: number;
				public static QUALITY_EXCELLENT: number;
				public static QUALITY_GOOD: number;
				public static QUALITY_POOR: number;
				public static QUALITY_BAD: number;
				public static QUALITY_VBAD: number;
				public static QUALITY_DOWN: number;
				public static QUALITY_UNSUPPORTED: number;
				public static QUALITY_DETECTING: number;
				public static WARN_INVALID_VIEW: number;
				public static WARN_INIT_VIDEO: number;
				public static WARN_PENDING: number;
				public static WARN_NO_AVAILABLE_CHANNEL: number;
				public static WARN_LOOKUP_CHANNEL_TIMEOUT: number;
				public static WARN_LOOKUP_CHANNEL_REJECTED: number;
				public static WARN_OPEN_CHANNEL_TIMEOUT: number;
				public static WARN_OPEN_CHANNEL_REJECTED: number;
				public static WARN_SWITCH_LIVE_VIDEO_TIMEOUT: number;
				public static WARN_SET_CLIENT_ROLE_TIMEOUT: number;
				public static WARN_SET_CLIENT_ROLE_NOT_AUTHORIZED: number;
				public static WARN_OPEN_CHANNEL_INVALID_TICKET: number;
				public static WARN_OPEN_CHANNEL_TRY_NEXT_VOS: number;
				public static WARN_AUDIO_MIXING_OPEN_ERROR: number;
				public static WARN_ADM_RUNTIME_PLAYOUT_WARNING: number;
				public static WARN_ADM_RUNTIME_RECORDING_WARNING: number;
				public static WARN_ADM_RECORD_AUDIO_SILENCE: number;
				public static WARN_ADM_PLAYOUT_ABNORMAL_FREQUENCY: number;
				public static WARN_ADM_RECORD_ABNORMAL_FREQUENCY: number;
				public static WARN_ADM_CALL_INTERRUPTION: number;
				public static WARN_ADM_RECORD_AUDIO_LOWLEVEL: number;
				public static WARN_ADM_PLAYOUT_AUDIO_LOWLEVEL: number;
				public static WARN_ADM_RECORD_IS_OCCUPIED: number;
				public static WARN_APM_HOWLING: number;
				public static WARN_ADM_GLITCH_STATE: number;
				public static WARN_APM_RESIDUAL_ECHO: number;
				public static ERR_OK: number;
				public static ERR_FAILED: number;
				public static ERR_INVALID_ARGUMENT: number;
				public static ERR_NOT_READY: number;
				public static ERR_NOT_SUPPORTED: number;
				public static ERR_REFUSED: number;
				public static ERR_BUFFER_TOO_SMALL: number;
				public static ERR_NOT_INITIALIZED: number;
				public static ERR_NO_PERMISSION: number;
				public static ERR_TIMEDOUT: number;
				public static ERR_CANCELED: number;
				public static ERR_TOO_OFTEN: number;
				public static ERR_BIND_SOCKET: number;
				public static ERR_NET_DOWN: number;
				public static ERR_NET_NOBUFS: number;
				public static ERR_JOIN_CHANNEL_REJECTED: number;
				public static ERR_LEAVE_CHANNEL_REJECTED: number;
				public static ERR_ALREADY_IN_USE: number;
				public static ERR_INVALID_APP_ID: number;
				public static ERR_INVALID_CHANNEL_NAME: number;
				public static ERR_NO_SERVER_RESOURCES: number;
				public static ERR_TOKEN_EXPIRED: number;
				public static ERR_INVALID_TOKEN: number;
				public static ERR_CONNECTION_INTERRUPTED: number;
				public static ERR_CONNECTION_LOST: number;
				public static ERR_NOT_IN_CHANNEL: number;
				public static ERR_SIZE_TOO_LARGE: number;
				public static ERR_BITRATE_LIMIT: number;
				public static ERR_TOO_MANY_DATA_STREAMS: number;
				public static ERR_DECRYPTION_FAILED: number;
				public static ERR_CLIENT_IS_BANNED_BY_SERVER: number;
				public static ERR_WATERMARK_PARAM: number;
				public static ERR_WATERMARK_PATH: number;
				public static ERR_WATERMARK_PNG: number;
				public static ERR_WATERMARKR_INFO: number;
				public static ERR_WATERMARK_ARGB: number;
				public static ERR_WATERMARK_READ: number;
				public static ERR_ENCRYPTED_STREAM_NOT_ALLOWED_PUBLISHED: number;
				public static ERR_INVALID_USER_ACCOUNT: number;
				public static ERR_PUBLISH_STREAM_CDN_ERROR: number;
				public static ERR_PUBLISH_STREAM_NUM_REACH_LIMIT: number;
				public static ERR_PUBLISH_STREAM_NOT_AUTHORIZED: number;
				public static ERR_PUBLISH_STREAM_INTERNAL_SERVER_ERROR: number;
				public static ERR_PUBLISH_STREAM_NOT_FOUND: number;
				public static ERR_PUBLISH_STREAM_FORMAT_NOT_SUPPORTED: number;
				public static RTMP_STREAMING_EVENT_FAILED_LOAD_IMAGE: number;
				public static ERR_LOAD_MEDIA_ENGINE: number;
				public static ERR_START_CALL: number;
				public static ERR_START_CAMERA: number;
				public static ERR_START_VIDEO_RENDER: number;
				public static ERR_ADM_GENERAL_ERROR: number;
				public static ERR_ADM_JAVA_RESOURCE: number;
				public static ERR_ADM_SAMPLE_RATE: number;
				public static ERR_ADM_INIT_PLAYOUT: number;
				public static ERR_ADM_START_PLAYOUT: number;
				public static ERR_ADM_STOP_PLAYOUT: number;
				public static ERR_ADM_INIT_RECORDING: number;
				public static ERR_ADM_START_RECORDING: number;
				public static ERR_ADM_STOP_RECORDING: number;
				public static ERR_ADM_RUNTIME_PLAYOUT_ERROR: number;
				public static ERR_ADM_RUNTIME_RECORDING_ERROR: number;
				public static ERR_ADM_RECORD_AUDIO_FAILED: number;
				public static ERR_ADM_INIT_LOOPBACK: number;
				public static ERR_ADM_START_LOOPBACK: number;
				public static ERR_AUDIO_BT_SCO_FAILED: number;
				public static ERR_ADM_NO_RECORDING_DEVICE: number;
				public static ERR_ADM_NO_PLAYOUT_DEVICE: number;
				public static ERR_VDM_CAMERA_NOT_AUTHORIZED: number;
				public static ERR_VCM_UNKNOWN_ERROR: number;
				public static ERR_VCM_ENCODER_INIT_ERROR: number;
				public static ERR_VCM_ENCODER_ENCODE_ERROR: number;
				public static ERR_VCM_ENCODER_SET_ERROR: number;
				public static VIDEO_PROFILE_120P: number;
				public static VIDEO_PROFILE_120P_3: number;
				public static VIDEO_PROFILE_180P: number;
				public static VIDEO_PROFILE_180P_3: number;
				public static VIDEO_PROFILE_180P_4: number;
				public static VIDEO_PROFILE_240P: number;
				public static VIDEO_PROFILE_240P_3: number;
				public static VIDEO_PROFILE_240P_4: number;
				public static VIDEO_PROFILE_360P: number;
				public static VIDEO_PROFILE_360P_3: number;
				public static VIDEO_PROFILE_360P_4: number;
				public static VIDEO_PROFILE_360P_6: number;
				public static VIDEO_PROFILE_360P_7: number;
				public static VIDEO_PROFILE_360P_8: number;
				public static VIDEO_PROFILE_360P_9: number;
				public static VIDEO_PROFILE_360P_10: number;
				public static VIDEO_PROFILE_360P_11: number;
				public static VIDEO_PROFILE_480P: number;
				public static VIDEO_PROFILE_480P_3: number;
				public static VIDEO_PROFILE_480P_4: number;
				public static VIDEO_PROFILE_480P_6: number;
				public static VIDEO_PROFILE_480P_8: number;
				public static VIDEO_PROFILE_480P_9: number;
				public static VIDEO_PROFILE_480P_10: number;
				public static VIDEO_PROFILE_720P: number;
				public static VIDEO_PROFILE_720P_3: number;
				public static VIDEO_PROFILE_720P_5: number;
				public static VIDEO_PROFILE_720P_6: number;
				public static VIDEO_PROFILE_DEFAULT: number;
				public static AUDIO_PROFILE_DEFAULT: number;
				public static AUDIO_PROFILE_SPEECH_STANDARD: number;
				public static AUDIO_PROFILE_MUSIC_STANDARD: number;
				public static AUDIO_PROFILE_MUSIC_STANDARD_STEREO: number;
				public static AUDIO_PROFILE_MUSIC_HIGH_QUALITY: number;
				public static AUDIO_PROFILE_MUSIC_HIGH_QUALITY_STEREO: number;
				public static AUDIO_SCENARIO_DEFAULT: number;
				public static AUDIO_SCENARIO_CHATROOM_ENTERTAINMENT: number;
				public static AUDIO_SCENARIO_EDUCATION: number;
				public static AUDIO_SCENARIO_GAME_STREAMING: number;
				public static AUDIO_SCENARIO_SHOWROOM: number;
				public static AUDIO_SCENARIO_CHATROOM_GAMING: number;
				public static AUDIO_SCENARIO_NUM: number;
				public static AUDIO_EQUALIZATION_BAND_31: number;
				public static AUDIO_EQUALIZATION_BAND_62: number;
				public static AUDIO_EQUALIZATION_BAND_125: number;
				public static AUDIO_EQUALIZATION_BAND_250: number;
				public static AUDIO_EQUALIZATION_BAND_500: number;
				public static AUDIO_EQUALIZATION_BAND_1K: number;
				public static AUDIO_EQUALIZATION_BAND_2K: number;
				public static AUDIO_EQUALIZATION_BAND_4K: number;
				public static AUDIO_EQUALIZATION_BAND_8K: number;
				public static AUDIO_EQUALIZATION_BAND_16K: number;
				public static AUDIO_REVERB_DRY_LEVEL: number;
				public static AUDIO_REVERB_WET_LEVEL: number;
				public static AUDIO_REVERB_ROOM_SIZE: number;
				public static AUDIO_REVERB_WET_DELAY: number;
				public static AUDIO_REVERB_STRENGTH: number;
				public static VOICE_CHANGER_OFF: number;
				public static VOICE_CHANGER_OLDMAN: number;
				public static VOICE_CHANGER_BABYBOY: number;
				public static VOICE_CHANGER_BABYGIRL: number;
				public static VOICE_CHANGER_ZHUBAJIE: number;
				public static VOICE_CHANGER_ETHEREAL: number;
				public static VOICE_CHANGER_HULK: number;
				public static VOICE_BEAUTY_VIGOROUS: number;
				public static VOICE_BEAUTY_DEEP: number;
				public static VOICE_BEAUTY_MELLOW: number;
				public static VOICE_BEAUTY_FALSETTO: number;
				public static VOICE_BEAUTY_FULL: number;
				public static VOICE_BEAUTY_CLEAR: number;
				public static VOICE_BEAUTY_RESOUNDING: number;
				public static VOICE_BEAUTY_RINGING: number;
				public static VOICE_BEAUTY_SPACIAL: number;
				public static GENERAL_BEAUTY_VOICE_MALE_MAGNETIC: number;
				public static GENERAL_BEAUTY_VOICE_FEMALE_FRESH: number;
				public static GENERAL_BEAUTY_VOICE_FEMALE_VITALITY: number;
				public static AUDIO_REVERB_OFF: number;
				public static AUDIO_REVERB_FX_KTV: number;
				public static AUDIO_REVERB_FX_VOCAL_CONCERT: number;
				public static AUDIO_REVERB_FX_UNCLE: number;
				public static AUDIO_REVERB_FX_SISTER: number;
				public static AUDIO_REVERB_FX_STUDIO: number;
				public static AUDIO_REVERB_FX_POPULAR: number;
				public static AUDIO_REVERB_FX_RNB: number;
				public static AUDIO_REVERB_FX_PHONOGRAPH: number;
				public static AUDIO_REVERB_POPULAR: number;
				public static AUDIO_REVERB_RNB: number;
				public static AUDIO_REVERB_ROCK: number;
				public static AUDIO_REVERB_HIPHOP: number;
				public static AUDIO_REVERB_VOCAL_CONCERT: number;
				public static AUDIO_REVERB_KTV: number;
				public static AUDIO_REVERB_STUDIO: number;
				public static AUDIO_VIRTUAL_STEREO: number;
				public static CHANNEL_PROFILE_COMMUNICATION: number;
				public static CHANNEL_PROFILE_LIVE_BROADCASTING: number;
				public static CHANNEL_PROFILE_GAME: number;
				public static CLIENT_ROLE_BROADCASTER: number;
				public static CLIENT_ROLE_AUDIENCE: number;
				public static VIDEO_CODEC_VP8: number;
				public static VIDEO_CODEC_H264: number;
				public static VIDEO_CODEC_EVP: number;
				public static VIDEO_CODEC_E264: number;
				public static USER_OFFLINE_QUIT: number;
				public static USER_OFFLINE_DROPPED: number;
				public static USER_OFFLINE_BECOME_AUDIENCE: number;
				public static INJECT_STREAM_STATUS_START_SUCCESS: number;
				public static INJECT_STREAM_STATUS_START_ALREADY_EXISTS: number;
				public static INJECT_STREAM_STATUS_START_UNAUTHORIZED: number;
				public static INJECT_STREAM_STATUS_START_TIMEDOUT: number;
				public static INJECT_STREAM_STATUS_START_FAILED: number;
				public static INJECT_STREAM_STATUS_STOP_SUCCESS: number;
				public static INJECT_STREAM_STATUS_STOP_NOT_FOUND: number;
				public static INJECT_STREAM_STATUS_STOP_UNAUTHORIZED: number;
				public static INJECT_STREAM_STATUS_STOP_TIMEDOUT: number;
				public static INJECT_STREAM_STATUS_STOP_FAILED: number;
				public static INJECT_STREAM_STATUS_BROKEN: number;
				public static QUALITY_REPORT_FORMAT_JSON: number;
				public static QUALITY_REPORT_FORMAT_HTML: number;
				public static RENDER_MODE_HIDDEN: number;
				public static RENDER_MODE_FIT: number;
				public static RENDER_MODE_ADAPTIVE: number;
				public static VIDEO_MIRROR_MODE_AUTO: number;
				public static VIDEO_MIRROR_MODE_ENABLED: number;
				public static VIDEO_MIRROR_MODE_DISABLED: number;
				public static SCREEN_CAPTURE_CONTENT_HINT_NONE: number;
				public static SCREEN_CAPTURE_CONTENT_HINT_MOTION: number;
				public static SCREEN_CAPTURE_CONTENT_HINT_DETAILS: number;
				public static LOG_FILTER_OFF: number;
				public static LOG_FILTER_DEBUG: number;
				public static LOG_FILTER_INFO: number;
				public static LOG_FILTER_WARNING: number;
				public static LOG_FILTER_ERROR: number;
				public static LOG_FILTER_CRITICAL: number;
				public static AUDIO_ROUTE_DEFAULT: number;
				public static AUDIO_ROUTE_HEADSET: number;
				public static AUDIO_ROUTE_EARPIECE: number;
				public static AUDIO_ROUTE_HEADSETNOMIC: number;
				public static AUDIO_ROUTE_SPEAKERPHONE: number;
				public static AUDIO_ROUTE_LOUDSPEAKER: number;
				public static AUDIO_ROUTE_HEADSETBLUETOOTH: number;
				public static VIDEO_STREAM_HIGH: number;
				public static VIDEO_STREAM_LOW: number;
				public static USER_PRIORITY_HIGH: number;
				public static USER_PRIORITY_NORANL: number;
				public static HARDWARE_ENCODER: number;
				public static SOFTWARE_ENCODER: number;
				public static RAW_AUDIO_FRAME_OP_MODE_READ_ONLY: number;
				public static RAW_AUDIO_FRAME_OP_MODE_WRITE_ONLY: number;
				public static RAW_AUDIO_FRAME_OP_MODE_READ_WRITE: number;
				public static MEDIA_ENGINE_RECORDING_ERROR: number;
				public static MEDIA_ENGINE_PLAYOUT_ERROR: number;
				public static MEDIA_ENGINE_RECORDING_WARNING: number;
				public static MEDIA_ENGINE_PLAYOUT_WARNING: number;
				public static MEDIA_ENGINE_AUDIO_FILE_MIX_FINISH: number;
				public static MEDIA_ENGINE_LOCAL_AUDIO_RECORD_ENABLED: number;
				public static MEDIA_ENGINE_LOCAL_AUDIO_RECORD_DISABLED: number;
				public static MEDIA_ENGINE_ROLE_BROADCASTER_SOLO: number;
				public static MEDIA_ENGINE_ROLE_BROADCASTER_INTERACTIVE: number;
				public static MEDIA_ENGINE_ROLE_AUDIENCE: number;
				public static MEDIA_ENGINE_ROLE_COMM_PEER: number;
				public static MEDIA_ENGINE_AUDIO_ERROR_MIXING_OPEN: number;
				public static MEDIA_ENGINE_AUDIO_EVENT_MIXING_BASE: number;
				public static MEDIA_ENGINE_AUDIO_ERROR_MIXING_TOO_FREQUENT: number;
				public static MEDIA_ENGINE_AUDIO_EVENT_MIXING_INTERRUPTED_EOF: number;
				public static MEDIA_ENGINE_AUDIO_EVENT_MIXING_PLAY: number;
				public static MEDIA_ENGINE_AUDIO_EVENT_MIXING_PAUSED: number;
				public static MEDIA_ENGINE_AUDIO_EVENT_MIXING_RESTART: number;
				public static MEDIA_ENGINE_AUDIO_EVENT_MIXING_STOPPED: number;
				public static MEDIA_ENGINE_AUDIO_EVENT_MIXING_MAX: number;
				public static MEDIA_ENGINE_AUDIO_EVENT_MIXING_ERROR: number;
				public static CONNECTION_STATE_DISCONNECTED: number;
				public static CONNECTION_STATE_CONNECTING: number;
				public static CONNECTION_STATE_CONNECTED: number;
				public static CONNECTION_STATE_RECONNECTING: number;
				public static CONNECTION_STATE_FAILED: number;
				public static CONNECTION_CHANGED_CONNECTING: number;
				public static CONNECTION_CHANGED_JOIN_SUCCESS: number;
				public static CONNECTION_CHANGED_INTERRUPTED: number;
				public static CONNECTION_CHANGED_BANNED_BY_SERVER: number;
				public static CONNECTION_CHANGED_JOIN_FAILED: number;
				public static CONNECTION_CHANGED_LEAVE_CHANNEL: number;
				public static CONNECTION_CHANGED_INVALID_APP_ID: number;
				public static CONNECTION_CHANGED_INVALID_CHANNEL_NAME: number;
				public static CONNECTION_CHANGED_INVALID_TOKEN: number;
				public static CONNECTION_CHANGED_TOKEN_EXPIRED: number;
				public static CONNECTION_CHANGED_REJECTED_BY_SERVER: number;
				public static CONNECTION_CHANGED_SETTING_PROXY_SERVER: number;
				public static CONNECTION_CHANGED_RENEW_TOKEN: number;
				public static CONNECTION_CHANGED_CLIENT_IP_ADDRESS_CHANGED: number;
				public static CONNECTION_CHANGED_KEEP_ALIVE_TIMEOUT: number;
				public static NETWORK_TYPE_UNKNOWN: number;
				public static NETWORK_TYPE_DISCONNECTED: number;
				public static NETWORK_TYPE_LAN: number;
				public static NETWORK_TYPE_WIFI: number;
				public static NETWORK_TYPE_MOBILE_2G: number;
				public static NETWORK_TYPE_MOBILE_3G: number;
				public static NETWORK_TYPE_MOBILE_4G: number;
				public static STREAM_LIFE_CYCLE_BIND2CHANNEL: number;
				public static STREAM_LIFE_CYCLE_BIND2OWNER: number;
				public static AUDIO_RECORDING_QUALITY_LOW: number;
				public static AUDIO_RECORDING_QUALITY_MEDIUM: number;
				public static AUDIO_RECORDING_QUALITY_HIGH: number;
				public static MEDIA_TYPE_NONE: number;
				public static MEDIA_TYPE_AUDIO_ONLY: number;
				public static MEDIA_TYPE_VIDEO_ONLY: number;
				public static MEDIA_TYPE_AUDIO_AND_VIDEO: number;
				public static MAX_CROSS_DEST_CHANNEL_SIZE: number;
				public static STREAM_FALLBACK_OPTION_DISABLED: number;
				public static STREAM_FALLBACK_OPTION_VIDEO_STREAM_LOW: number;
				public static STREAM_FALLBACK_OPTION_AUDIO_ONLY: number;
				public static LOCAL_VIDEO_STREAM_STATE_STOPPED: number;
				public static LOCAL_VIDEO_STREAM_STATE_CAPTURING: number;
				public static LOCAL_VIDEO_STREAM_STATE_ENCODING: number;
				public static LOCAL_VIDEO_STREAM_STATE_FAILED: number;
				public static LOCAL_VIDEO_STREAM_ERROR_OK: number;
				public static LOCAL_VIDEO_STREAM_ERROR_FAILURE: number;
				public static LOCAL_VIDEO_STREAM_ERROR_DEVICE_NO_PERMISSION: number;
				public static LOCAL_VIDEO_STREAM_ERROR_DEVICE_BUSY: number;
				public static LOCAL_VIDEO_STREAM_ERROR_CAPTURE_FAILURE: number;
				public static LOCAL_VIDEO_STREAM_ERROR_ENCODE_FAILURE: number;
				public static LOCAL_AUDIO_STREAM_STATE_STOPPED: number;
				public static LOCAL_AUDIO_STREAM_STATE_CAPTURING: number;
				public static LOCAL_AUDIO_STREAM_STATE_ENCODING: number;
				public static LOCAL_AUDIO_STREAM_STATE_FAILED: number;
				public static LOCAL_AUDIO_STREAM_ERROR_OK: number;
				public static LOCAL_AUDIO_STREAM_ERROR_FAILURE: number;
				public static LOCAL_AUDIO_STREAM_ERROR_DEVICE_NO_PERMISSION: number;
				public static LOCAL_AUDIO_STREAM_ERROR_DEVICE_BUSY: number;
				public static LOCAL_AUDIO_STREAM_ERROR_CAPTURE_FAILURE: number;
				public static LOCAL_AUDIO_STREAM_ERROR_ENCODE_FAILURE: number;
				public static REMOTE_AUDIO_STATE_STOPPED: number;
				public static REMOTE_AUDIO_STATE_STARTING: number;
				public static REMOTE_AUDIO_STATE_DECODING: number;
				public static REMOTE_AUDIO_STATE_FROZEN: number;
				public static REMOTE_AUDIO_STATE_FAILED: number;
				public static REMOTE_AUDIO_REASON_INTERNAL: number;
				public static REMOTE_AUDIO_REASON_NETWORK_CONGESTION: number;
				public static REMOTE_AUDIO_REASON_NETWORK_RECOVERY: number;
				public static REMOTE_AUDIO_REASON_LOCAL_MUTED: number;
				public static REMOTE_AUDIO_REASON_LOCAL_UNMUTED: number;
				public static REMOTE_AUDIO_REASON_REMOTE_MUTED: number;
				public static REMOTE_AUDIO_REASON_REMOTE_UNMUTED: number;
				public static REMOTE_AUDIO_REASON_REMOTE_OFFLINE: number;
				public static REMOTE_VIDEO_STATE_STOPPED: number;
				public static REMOTE_VIDEO_STATE_STARTING: number;
				public static REMOTE_VIDEO_STATE_DECODING: number;
				public static REMOTE_VIDEO_STATE_FROZEN: number;
				public static REMOTE_VIDEO_STATE_FAILED: number;
				public static REMOTE_VIDEO_STATE_REASON_INTERNAL: number;
				public static REMOTE_VIDEO_STATE_REASON_NETWORK_CONGESTION: number;
				public static REMOTE_VIDEO_STATE_REASON_NETWORK_RECOVERY: number;
				public static REMOTE_VIDEO_STATE_REASON_LOCAL_MUTED: number;
				public static REMOTE_VIDEO_STATE_REASON_LOCAL_UNMUTED: number;
				public static REMOTE_VIDEO_STATE_REASON_REMOTE_MUTED: number;
				public static REMOTE_VIDEO_STATE_REASON_REMOTE_UNMUTED: number;
				public static REMOTE_VIDEO_STATE_REASON_REMOTE_OFFLINE: number;
				public static REMOTE_VIDEO_STATE_REASON_AUDIO_FALLBACK: number;
				public static REMOTE_VIDEO_STATE_REASON_AUDIO_FALLBACK_RECOVERY: number;
				public static PUB_STATE_IDLE: number;
				public static PUB_STATE_NO_PUBLISHED: number;
				public static PUB_STATE_PUBLISHING: number;
				public static PUB_STATE_PUBLISHED: number;
				public static SUB_STATE_IDLE: number;
				public static SUB_STATE_NO_SUBSCRIBED: number;
				public static SUB_STATE_SUBSCRIBING: number;
				public static SUB_STATE_SUBSCRIBED: number;
				public static RTMP_STREAM_PUBLISH_STATE_IDLE: number;
				public static RTMP_STREAM_PUBLISH_STATE_CONNECTING: number;
				public static RTMP_STREAM_PUBLISH_STATE_RUNNING: number;
				public static RTMP_STREAM_PUBLISH_STATE_RECOVERING: number;
				public static RTMP_STREAM_PUBLISH_STATE_FAILURE: number;
				public static RTMP_STREAM_PUBLISH_ERROR_OK: number;
				public static RTMP_STREAM_PUBLISH_ERROR_INVALID_ARGUMENT: number;
				public static RTMP_STREAM_PUBLISH_ERROR_ENCRYPTED_STREAM_NOT_ALLOWED: number;
				public static RTMP_STREAM_PUBLISH_ERROR_CONNECTION_TIMEOUT: number;
				public static RTMP_STREAM_PUBLISH_ERROR_INTERNAL_SERVER_ERROR: number;
				public static RTMP_STREAM_PUBLISH_ERROR_RTMP_SERVER_ERROR: number;
				public static RTMP_STREAM_PUBLISH_ERROR_TOO_OFTEN: number;
				public static RTMP_STREAM_PUBLISH_ERROR_REACH_LIMIT: number;
				public static RTMP_STREAM_PUBLISH_ERROR_NOT_AUTHORIZED: number;
				public static RTMP_STREAM_PUBLISH_ERROR_STREAM_NOT_FOUND: number;
				public static RTMP_STREAM_PUBLISH_ERROR_FORMAT_NOT_SUPPORTED: number;
				public static RELAY_OK: number;
				public static RELAY_ERROR_SERVER_ERROR_RESPONSE: number;
				public static RELAY_ERROR_SERVER_NO_RESPONSE: number;
				public static RELAY_ERROR_NO_RESOURCE_AVAILABLE: number;
				public static RELAY_ERROR_FAILED_JOIN_SRC: number;
				public static RELAY_ERROR_FAILED_JOIN_DEST: number;
				public static RELAY_ERROR_FAILED_PACKET_RECEIVED_FROM_SRC: number;
				public static RELAY_ERROR_FAILED_PACKET_SENT_TO_DEST: number;
				public static RELAY_ERROR_SERVER_CONNECTION_LOST: number;
				public static RELAY_ERROR_INTERNAL_ERROR: number;
				public static RELAY_ERROR_SRC_TOKEN_EXPIRED: number;
				public static RELAY_ERROR_DEST_TOKEN_EXPIRED: number;
				public static RELAY_EVENT_NETWORK_DISCONNECTED: number;
				public static RELAY_EVENT_NETWORK_CONNECTED: number;
				public static RELAY_EVENT_PACKET_JOINED_SRC_CHANNEL: number;
				public static RELAY_EVENT_PACKET_JOINED_DEST_CHANNEL: number;
				public static RELAY_EVENT_PACKET_SENT_TO_DEST_CHANNEL: number;
				public static RELAY_EVENT_PACKET_RECEIVED_VIDEO_FROM_SRC: number;
				public static RELAY_EVENT_PACKET_RECEIVED_AUDIO_FROM_SRC: number;
				public static RELAY_EVENT_PACKET_UPDATE_DEST_CHANNEL: number;
				public static RELAY_EVENT_PACKET_UPDATE_DEST_CHANNEL_REFUSED: number;
				public static RELAY_EVENT_PACKET_UPDATE_DEST_CHANNEL_NOT_CHANGE: number;
				public static RELAY_EVENT_PACKET_UPDATE_DEST_CHANNEL_IS_NULL: number;
				public static RELAY_EVENT_VIDEO_PROFILE_UPDATE: number;
				public static RELAY_STATE_IDLE: number;
				public static RELAY_STATE_CONNECTING: number;
				public static RELAY_STATE_RUNNING: number;
				public static RELAY_STATE_FAILURE: number;
				public static RTC_APP_TYPE_NATIVE: number;
				public static RTC_APP_TYPE_COCOS: number;
				public static RTC_APP_TYPE_UNITY: number;
				public static RTC_APP_TYPE_ELECTRON: number;
				public static RTC_APP_TYPE_FLUTTER: number;
				public static RTC_APP_TYPE_UNREAL: number;
				public static RTC_APP_TYPE_XAMARIN: number;
				public static RTC_APP_TYPE_APICLOUD: number;
				public constructor();
			}
			export module Constants {
				export class AudioProfile {
					public static class: java.lang.Class<io.agora.rtc.Constants.AudioProfile>;
					public static DEFAULT: io.agora.rtc.Constants.AudioProfile;
					public static SPEECH_STANDARD: io.agora.rtc.Constants.AudioProfile;
					public static MUSIC_STANDARD: io.agora.rtc.Constants.AudioProfile;
					public static MUSIC_STANDARD_STEREO: io.agora.rtc.Constants.AudioProfile;
					public static MUSIC_HIGH_QUALITY: io.agora.rtc.Constants.AudioProfile;
					public static MUSIC_HIGH_QUALITY_STEREO: io.agora.rtc.Constants.AudioProfile;
					public static valueOf(param0: string): io.agora.rtc.Constants.AudioProfile;
					public static getValue(param0: io.agora.rtc.Constants.AudioProfile): number;
					public static values(): native.Array<io.agora.rtc.Constants.AudioProfile>;
				}
				export class AudioScenario {
					public static class: java.lang.Class<io.agora.rtc.Constants.AudioScenario>;
					public static DEFAULT: io.agora.rtc.Constants.AudioScenario;
					public static CHATROOM_ENTERTAINMENT: io.agora.rtc.Constants.AudioScenario;
					public static EDUCATION: io.agora.rtc.Constants.AudioScenario;
					public static GAME_STREAMING: io.agora.rtc.Constants.AudioScenario;
					public static SHOWROOM: io.agora.rtc.Constants.AudioScenario;
					public static CHATROOM_GAMING: io.agora.rtc.Constants.AudioScenario;
					public static values(): native.Array<io.agora.rtc.Constants.AudioScenario>;
					public static valueOf(param0: string): io.agora.rtc.Constants.AudioScenario;
					public static getValue(param0: io.agora.rtc.Constants.AudioScenario): number;
				}
				export class MediaType {
					public static class: java.lang.Class<io.agora.rtc.Constants.MediaType>;
					public static NONE: io.agora.rtc.Constants.MediaType;
					public static AUDIO_ONLY: io.agora.rtc.Constants.MediaType;
					public static VIDEO_ONLY: io.agora.rtc.Constants.MediaType;
					public static AUDIO_AND_VIDEO: io.agora.rtc.Constants.MediaType;
					public static values(): native.Array<io.agora.rtc.Constants.MediaType>;
					public static getValue(param0: io.agora.rtc.Constants.MediaType): number;
					public static valueOf(param0: string): io.agora.rtc.Constants.MediaType;
				}
			}
		}
	}
}

declare module io {
	export module agora {
		export module rtc {
			export class IAudioEffectManager {
				public static class: java.lang.Class<io.agora.rtc.IAudioEffectManager>;
				/**
				 * Constructs a new instance of the io.agora.rtc.IAudioEffectManager interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					getEffectsVolume(): number;
					setEffectsVolume(param0: number): number;
					setVolumeOfEffect(param0: number, param1: number): number;
					playEffect(param0: number, param1: string, param2: number, param3: number, param4: number, param5: number): number;
					playEffect(param0: number, param1: string, param2: number, param3: number, param4: number, param5: number, param6: boolean): number;
					stopEffect(param0: number): number;
					stopAllEffects(): number;
					preloadEffect(param0: number, param1: string): number;
					unloadEffect(param0: number): number;
					pauseEffect(param0: number): number;
					pauseAllEffects(): number;
					resumeEffect(param0: number): number;
					resumeAllEffects(): number;
				});
				public constructor();
				public setEffectsVolume(param0: number): number;
				public setVolumeOfEffect(param0: number, param1: number): number;
				public pauseAllEffects(): number;
				public playEffect(param0: number, param1: string, param2: number, param3: number, param4: number, param5: number, param6: boolean): number;
				/** @deprecated */
				public playEffect(param0: number, param1: string, param2: number, param3: number, param4: number, param5: number): number;
				public resumeAllEffects(): number;
				public stopEffect(param0: number): number;
				public pauseEffect(param0: number): number;
				public unloadEffect(param0: number): number;
				public stopAllEffects(): number;
				public preloadEffect(param0: number, param1: string): number;
				public getEffectsVolume(): number;
				public resumeEffect(param0: number): number;
			}
		}
	}
}

declare module io {
	export module agora {
		export module rtc {
			export class IAudioFrameObserver {
				public static class: java.lang.Class<io.agora.rtc.IAudioFrameObserver>;
				/**
				 * Constructs a new instance of the io.agora.rtc.IAudioFrameObserver interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onRecordFrame(param0: native.Array<number>, param1: number, param2: number, param3: number, param4: number): boolean;
					onPlaybackFrame(param0: native.Array<number>, param1: number, param2: number, param3: number, param4: number): boolean;
				});
				public constructor();
				public onPlaybackFrame(param0: native.Array<number>, param1: number, param2: number, param3: number, param4: number): boolean;
				public onRecordFrame(param0: native.Array<number>, param1: number, param2: number, param3: number, param4: number): boolean;
			}
		}
	}
}

declare module io {
	export module agora {
		export module rtc {
			export class IMetadataObserver {
				public static class: java.lang.Class<io.agora.rtc.IMetadataObserver>;
				/**
				 * Constructs a new instance of the io.agora.rtc.IMetadataObserver interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					getMaxMetadataSize(): number;
					onReadyToSendMetadata(param0: number): native.Array<number>;
					onMetadataReceived(param0: native.Array<number>, param1: number, param2: number): void;
				});
				public constructor();
				public static UNKNOWN_METADATA: number;
				public static VIDEO_METADATA: number;
				public onReadyToSendMetadata(param0: number): native.Array<number>;
				public onMetadataReceived(param0: native.Array<number>, param1: number, param2: number): void;
				public getMaxMetadataSize(): number;
			}
		}
	}
}

declare module io {
	export module agora {
		export module rtc {
			export abstract class IRtcChannelEventHandler {
				public static class: java.lang.Class<io.agora.rtc.IRtcChannelEventHandler>;
				public onRemoteSubscribeFallbackToAudioOnly(param0: io.agora.rtc.RtcChannel, param1: number, param2: boolean): void;
				public onRemoteAudioStateChanged(param0: io.agora.rtc.RtcChannel, param1: number, param2: number, param3: number, param4: number): void;
				public onRemoteVideoStateChanged(param0: io.agora.rtc.RtcChannel, param1: number, param2: number, param3: number, param4: number): void;
				public onChannelError(param0: io.agora.rtc.RtcChannel, param1: number): void;
				public onRejoinChannelSuccess(param0: io.agora.rtc.RtcChannel, param1: number, param2: number): void;
				public constructor();
				public onConnectionStateChanged(param0: io.agora.rtc.RtcChannel, param1: number, param2: number): void;
				public onNetworkQuality(param0: io.agora.rtc.RtcChannel, param1: number, param2: number, param3: number): void;
				public onRtmpStreamingStateChanged(param0: io.agora.rtc.RtcChannel, param1: string, param2: number, param3: number): void;
				public onTranscodingUpdated(param0: io.agora.rtc.RtcChannel): void;
				public onAudioPublishStateChanged(param0: io.agora.rtc.RtcChannel, param1: number, param2: number, param3: number): void;
				public onUserOffline(param0: io.agora.rtc.RtcChannel, param1: number, param2: number): void;
				public onChannelMediaRelayEvent(param0: io.agora.rtc.RtcChannel, param1: number): void;
				public onJoinChannelSuccess(param0: io.agora.rtc.RtcChannel, param1: number, param2: number): void;
				public onVideoSizeChanged(param0: io.agora.rtc.RtcChannel, param1: number, param2: number, param3: number, param4: number): void;
				public onVideoPublishStateChanged(param0: io.agora.rtc.RtcChannel, param1: number, param2: number, param3: number): void;
				public onChannelMediaRelayStateChanged(param0: io.agora.rtc.RtcChannel, param1: number, param2: number): void;
				public onRtmpStreamingEvent(param0: io.agora.rtc.RtcChannel, param1: string, param2: number): void;
				public onRequestToken(param0: io.agora.rtc.RtcChannel): void;
				public onStreamMessage(param0: io.agora.rtc.RtcChannel, param1: number, param2: number, param3: native.Array<number>): void;
				public onAudioSubscribeStateChanged(param0: io.agora.rtc.RtcChannel, param1: number, param2: number, param3: number, param4: number): void;
				public onUserJoined(param0: io.agora.rtc.RtcChannel, param1: number, param2: number): void;
				public onActiveSpeaker(param0: io.agora.rtc.RtcChannel, param1: number): void;
				public onLeaveChannel(param0: io.agora.rtc.RtcChannel, param1: io.agora.rtc.IRtcEngineEventHandler.RtcStats): void;
				public onStreamInjectedStatus(param0: io.agora.rtc.RtcChannel, param1: string, param2: number, param3: number): void;
				public onConnectionLost(param0: io.agora.rtc.RtcChannel): void;
				public onTokenPrivilegeWillExpire(param0: io.agora.rtc.RtcChannel, param1: string): void;
				public onClientRoleChanged(param0: io.agora.rtc.RtcChannel, param1: number, param2: number): void;
				public onRemoteVideoStats(param0: io.agora.rtc.RtcChannel, param1: io.agora.rtc.IRtcEngineEventHandler.RemoteVideoStats): void;
				public onVideoSubscribeStateChanged(param0: io.agora.rtc.RtcChannel, param1: number, param2: number, param3: number, param4: number): void;
				public onLocalPublishFallbackToAudioOnly(param0: io.agora.rtc.RtcChannel, param1: boolean): void;
				public onStreamMessageError(param0: io.agora.rtc.RtcChannel, param1: number, param2: number, param3: number, param4: number, param5: number): void;
				public onChannelWarning(param0: io.agora.rtc.RtcChannel, param1: number): void;
				public onRemoteAudioStats(param0: io.agora.rtc.RtcChannel, param1: io.agora.rtc.IRtcEngineEventHandler.RemoteAudioStats): void;
				public onRtcStats(param0: io.agora.rtc.RtcChannel, param1: io.agora.rtc.IRtcEngineEventHandler.RtcStats): void;
			}
		}
	}
}

declare module io {
	export module agora {
		export module rtc {
			export abstract class IRtcEngineEventHandler {
				public static class: java.lang.Class<io.agora.rtc.IRtcEngineEventHandler>;
				/** @deprecated */
				public onMicrophoneEnabled(param0: boolean): void;
				public onRejoinChannelSuccess(param0: string, param1: number, param2: number): void;
				public onRemoteVideoStats(param0: io.agora.rtc.IRtcEngineEventHandler.RemoteVideoStats): void;
				/** @deprecated */
				public onUserMuteVideo(param0: number, param1: boolean): void;
				public onTokenPrivilegeWillExpire(param0: string): void;
				public onAudioSubscribeStateChanged(param0: string, param1: number, param2: number, param3: number, param4: number): void;
				public onAudioMixingStateChanged(param0: number, param1: number): void;
				public onUserJoined(param0: number, param1: number): void;
				public constructor();
				public onStreamMessage(param0: number, param1: number, param2: native.Array<number>): void;
				/** @deprecated */
				public onFirstRemoteAudioFrame(param0: number, param1: number): void;
				public onFirstLocalVideoFrame(param0: number, param1: number, param2: number): void;
				/** @deprecated */
				public onRemoteVideoTransportStats(param0: number, param1: number, param2: number, param3: number): void;
				public onLeaveChannel(param0: io.agora.rtc.IRtcEngineEventHandler.RtcStats): void;
				public onMediaEngineLoadSuccess(): void;
				public onConnectionStateChanged(param0: number, param1: number): void;
				/** @deprecated */
				public onAudioMixingFinished(): void;
				public onError(param0: number): void;
				public onMediaEngineStartCallSuccess(): void;
				public onRemoteVideoStateChanged(param0: number, param1: number, param2: number, param3: number): void;
				/** @deprecated */
				public onConnectionInterrupted(): void;
				public onRemoteAudioStats(param0: io.agora.rtc.IRtcEngineEventHandler.RemoteAudioStats): void;
				public onLocalPublishFallbackToAudioOnly(param0: boolean): void;
				/** @deprecated */
				public onAudioQuality(param0: number, param1: number, param2: number, param3: number): void;
				public onStreamMessageError(param0: number, param1: number, param2: number, param3: number, param4: number): void;
				public onAudioRouteChanged(param0: number): void;
				public onLastmileQuality(param0: number): void;
				public onNetworkTypeChanged(param0: number): void;
				/** @deprecated */
				public onUserMuteAudio(param0: number, param1: boolean): void;
				public onTranscodingUpdated(): void;
				public onLocalAudioStateChanged(param0: number, param1: number): void;
				/** @deprecated */
				public onConnectionBanned(): void;
				public onFirstLocalVideoFramePublished(param0: number): void;
				public onLocalAudioStats(param0: io.agora.rtc.IRtcEngineEventHandler.LocalAudioStats): void;
				/** @deprecated */
				public onVideoStopped(): void;
				public onWarning(param0: number): void;
				public onAudioVolumeIndication(param0: native.Array<io.agora.rtc.IRtcEngineEventHandler.AudioVolumeInfo>, param1: number): void;
				/** @deprecated */
				public onUserEnableLocalVideo(param0: number, param1: boolean): void;
				public onChannelMediaRelayStateChanged(param0: number, param1: number): void;
				/** @deprecated */
				public onFirstRemoteVideoDecoded(param0: number, param1: number, param2: number, param3: number): void;
				public onApiCallExecuted(param0: number, param1: string, param2: string): void;
				public onNetworkQuality(param0: number, param1: number, param2: number): void;
				public onAudioEffectFinished(param0: number): void;
				public onLocalVideoStateChanged(param0: number, param1: number): void;
				public onLocalVideoStats(param0: io.agora.rtc.IRtcEngineEventHandler.LocalVideoStats): void;
				/** @deprecated */
				public onRemoteAudioTransportStats(param0: number, param1: number, param2: number, param3: number): void;
				public onRemoteSubscribeFallbackToAudioOnly(param0: number, param1: boolean): void;
				public onUserInfoUpdated(param0: number, param1: io.agora.rtc.models.UserInfo): void;
				public onRtcStats(param0: io.agora.rtc.IRtcEngineEventHandler.RtcStats): void;
				public onVideoSubscribeStateChanged(param0: string, param1: number, param2: number, param3: number, param4: number): void;
				public onCameraExposureAreaChanged(param0: globalAndroid.graphics.Rect): void;
				public onConnectionLost(): void;
				public onCameraFocusAreaChanged(param0: globalAndroid.graphics.Rect): void;
				/** @deprecated */
				public onFirstRemoteAudioDecoded(param0: number, param1: number): void;
				/** @deprecated */
				public onStreamUnpublished(param0: string): void;
				/** @deprecated */
				public onFirstLocalAudioFrame(param0: number): void;
				/** @deprecated */
				public onLocalVideoStat(param0: number, param1: number): void;
				public onJoinChannelSuccess(param0: string, param1: number, param2: number): void;
				public onClientRoleChanged(param0: number, param1: number): void;
				public onLocalUserRegistered(param0: number, param1: string): void;
				/** @deprecated */
				public onRemoteVideoStat(param0: number, param1: number, param2: number, param3: number): void;
				public onFirstRemoteVideoFrame(param0: number, param1: number, param2: number, param3: number): void;
				/** @deprecated */
				public onCameraReady(): void;
				public onLastmileProbeResult(param0: io.agora.rtc.IRtcEngineEventHandler.LastmileProbeResult): void;
				/** @deprecated */
				public onUserEnableVideo(param0: number, param1: boolean): void;
				public onFirstLocalAudioFramePublished(param0: number): void;
				public onRemoteAudioStateChanged(param0: number, param1: number, param2: number, param3: number): void;
				/** @deprecated */
				public onStreamPublished(param0: string, param1: number): void;
				public onVideoSizeChanged(param0: number, param1: number, param2: number, param3: number): void;
				public onAudioPublishStateChanged(param0: string, param1: number, param2: number, param3: number): void;
				public onVideoPublishStateChanged(param0: string, param1: number, param2: number, param3: number): void;
				public onFacePositionChanged(param0: number, param1: number, param2: native.Array<io.agora.rtc.IRtcEngineEventHandler.AgoraFacePositionInfo>): void;
				public onStreamInjectedStatus(param0: string, param1: number, param2: number): void;
				public onChannelMediaRelayEvent(param0: number): void;
				public onActiveSpeaker(param0: number): void;
				public onRtmpStreamingEvent(param0: string, param1: number): void;
				public onRtmpStreamingStateChanged(param0: string, param1: number, param2: number): void;
				public onUserOffline(param0: number, param1: number): void;
				public onRequestToken(): void;
			}
			export module IRtcEngineEventHandler {
				export class AgoraFacePositionInfo {
					public static class: java.lang.Class<io.agora.rtc.IRtcEngineEventHandler.AgoraFacePositionInfo>;
					public x: number;
					public y: number;
					public width: number;
					public height: number;
					public distance: number;
					public constructor();
				}
				export class AudioVolumeInfo {
					public static class: java.lang.Class<io.agora.rtc.IRtcEngineEventHandler.AudioVolumeInfo>;
					public uid: number;
					public volume: number;
					public vad: number;
					public channelId: string;
					public constructor();
				}
				export class ClientRole {
					public static class: java.lang.Class<io.agora.rtc.IRtcEngineEventHandler.ClientRole>;
					public static CLIENT_ROLE_BROADCASTER: number;
					public static CLIENT_ROLE_AUDIENCE: number;
					public constructor();
				}
				export class ErrorCode {
					public static class: java.lang.Class<io.agora.rtc.IRtcEngineEventHandler.ErrorCode>;
					public static ERR_OK: number;
					public static ERR_FAILED: number;
					public static ERR_INVALID_ARGUMENT: number;
					public static ERR_NOT_READY: number;
					public static ERR_NOT_SUPPORTED: number;
					public static ERR_REFUSED: number;
					public static ERR_BUFFER_TOO_SMALL: number;
					public static ERR_NOT_INITIALIZED: number;
					public static ERR_NO_PERMISSION: number;
					public static ERR_TIMEDOUT: number;
					public static ERR_CANCELED: number;
					public static ERR_TOO_OFTEN: number;
					public static ERR_BIND_SOCKET: number;
					public static ERR_NET_DOWN: number;
					public static ERR_NET_NOBUFS: number;
					public static ERR_JOIN_CHANNEL_REJECTED: number;
					public static ERR_LEAVE_CHANNEL_REJECTED: number;
					public static ERR_ALREADY_IN_USE: number;
					public static ERR_INVALID_APP_ID: number;
					public static ERR_INVALID_CHANNEL_NAME: number;
					public static ERR_NO_SERVER_RESOURCES: number;
					public static ERR_TOKEN_EXPIRED: number;
					public static ERR_INVALID_TOKEN: number;
					public static ERR_CONNECTION_INTERRUPTED: number;
					public static ERR_CONNECTION_LOST: number;
					public static ERR_NOT_IN_CHANNEL: number;
					public static ERR_SIZE_TOO_LARGE: number;
					public static ERR_BITRATE_LIMIT: number;
					public static ERR_TOO_MANY_DATA_STREAMS: number;
					public static ERR_DECRYPTION_FAILED: number;
					public static ERR_CLIENT_IS_BANNED_BY_SERVER: number;
					public static ERR_WATERMARK_PATH: number;
					public static ERR_INVALID_USER_ACCOUNT: number;
					public static ERR_LOAD_MEDIA_ENGINE: number;
					public static ERR_START_CALL: number;
					public static ERR_START_CAMERA: number;
					public static ERR_START_VIDEO_RENDER: number;
					public static ERR_ADM_GENERAL_ERROR: number;
					public static ERR_ADM_JAVA_RESOURCE: number;
					public static ERR_ADM_SAMPLE_RATE: number;
					public static ERR_ADM_INIT_PLAYOUT: number;
					public static ERR_ADM_START_PLAYOUT: number;
					public static ERR_ADM_STOP_PLAYOUT: number;
					public static ERR_ADM_INIT_RECORDING: number;
					public static ERR_ADM_START_RECORDING: number;
					public static ERR_ADM_STOP_RECORDING: number;
					public static ERR_ADM_RUNTIME_PLAYOUT_ERROR: number;
					public static ERR_ADM_RUNTIME_RECORDING_ERROR: number;
					public static ERR_ADM_RECORD_AUDIO_FAILED: number;
					public static ERR_ADM_INIT_LOOPBACK: number;
					public static ERR_ADM_START_LOOPBACK: number;
					public static ERR_AUDIO_BT_SCO_FAILED: number;
					public static ERR_ADM_NO_RECORDING_DEVICE: number;
					public static ERR_VDM_CAMERA_NOT_AUTHORIZED: number;
					public static ERR_VCM_UNKNOWN_ERROR: number;
					public static ERR_VCM_ENCODER_INIT_ERROR: number;
					public static ERR_VCM_ENCODER_ENCODE_ERROR: number;
					public static ERR_VCM_ENCODER_SET_ERROR: number;
					public constructor();
				}
				export class LastmileProbeResult {
					public static class: java.lang.Class<io.agora.rtc.IRtcEngineEventHandler.LastmileProbeResult>;
					public state: number;
					public rtt: number;
					public uplinkReport: io.agora.rtc.IRtcEngineEventHandler.LastmileProbeResult.LastmileProbeOneWayResult;
					public downlinkReport: io.agora.rtc.IRtcEngineEventHandler.LastmileProbeResult.LastmileProbeOneWayResult;
					public constructor();
				}
				export module LastmileProbeResult {
					export class LastmileProbeOneWayResult {
						public static class: java.lang.Class<io.agora.rtc.IRtcEngineEventHandler.LastmileProbeResult.LastmileProbeOneWayResult>;
						public packetLossRate: number;
						public jitter: number;
						public availableBandwidth: number;
						public constructor();
					}
				}
				export class LocalAudioStats {
					public static class: java.lang.Class<io.agora.rtc.IRtcEngineEventHandler.LocalAudioStats>;
					public numChannels: number;
					public sentSampleRate: number;
					public sentBitrate: number;
					public txPacketLossRate: number;
					public constructor();
				}
				export class LocalVideoStats {
					public static class: java.lang.Class<io.agora.rtc.IRtcEngineEventHandler.LocalVideoStats>;
					public sentBitrate: number;
					public sentFrameRate: number;
					public encoderOutputFrameRate: number;
					public rendererOutputFrameRate: number;
					public targetBitrate: number;
					public targetFrameRate: number;
					public qualityAdaptIndication: number;
					public encodedBitrate: number;
					public encodedFrameWidth: number;
					public encodedFrameHeight: number;
					public encodedFrameCount: number;
					public codecType: number;
					public txPacketLossRate: number;
					public captureFrameRate: number;
					public constructor();
				}
				export class Quality {
					public static class: java.lang.Class<io.agora.rtc.IRtcEngineEventHandler.Quality>;
					public static UNKNOWN: number;
					public static EXCELLENT: number;
					public static GOOD: number;
					public static POOR: number;
					public static BAD: number;
					public static VBAD: number;
					public static DOWN: number;
					public constructor();
				}
				export class RemoteAudioStats {
					public static class: java.lang.Class<io.agora.rtc.IRtcEngineEventHandler.RemoteAudioStats>;
					public uid: number;
					public quality: number;
					public networkTransportDelay: number;
					public jitterBufferDelay: number;
					public audioLossRate: number;
					public numChannels: number;
					public receivedSampleRate: number;
					public receivedBitrate: number;
					public totalFrozenTime: number;
					public frozenRate: number;
					public totalActiveTime: number;
					public publishDuration: number;
					public constructor();
				}
				export class RemoteVideoStats {
					public static class: java.lang.Class<io.agora.rtc.IRtcEngineEventHandler.RemoteVideoStats>;
					public uid: number;
					public delay: number;
					public width: number;
					public height: number;
					public receivedBitrate: number;
					public decoderOutputFrameRate: number;
					public rendererOutputFrameRate: number;
					public packetLossRate: number;
					public rxStreamType: number;
					public totalFrozenTime: number;
					public frozenRate: number;
					public totalActiveTime: number;
					public publishDuration: number;
					public constructor();
				}
				export class RtcStats {
					public static class: java.lang.Class<io.agora.rtc.IRtcEngineEventHandler.RtcStats>;
					public totalDuration: number;
					public txBytes: number;
					public rxBytes: number;
					public txAudioBytes: number;
					public txVideoBytes: number;
					public rxAudioBytes: number;
					public rxVideoBytes: number;
					public txKBitRate: number;
					public rxKBitRate: number;
					public txAudioKBitRate: number;
					public rxAudioKBitRate: number;
					public txVideoKBitRate: number;
					public rxVideoKBitRate: number;
					public users: number;
					public lastmileDelay: number;
					public txPacketLossRate: number;
					public rxPacketLossRate: number;
					public cpuTotalUsage: number;
					public cpuAppUsage: number;
					public gatewayRtt: number;
					public memoryAppUsageRatio: number;
					public memoryTotalUsageRatio: number;
					public memoryAppUsageInKbytes: number;
					public constructor();
				}
				export class UserOfflineReason {
					public static class: java.lang.Class<io.agora.rtc.IRtcEngineEventHandler.UserOfflineReason>;
					public static USER_OFFLINE_QUIT: number;
					public static USER_OFFLINE_DROPPED: number;
					public constructor();
				}
				export class VideoProfile {
					public static class: java.lang.Class<io.agora.rtc.IRtcEngineEventHandler.VideoProfile>;
					public static VIDEO_PROFILE_120P: number;
					public static VIDEO_PROFILE_120P_3: number;
					public static VIDEO_PROFILE_180P: number;
					public static VIDEO_PROFILE_180P_3: number;
					public static VIDEO_PROFILE_180P_4: number;
					public static VIDEO_PROFILE_240P: number;
					public static VIDEO_PROFILE_240P_3: number;
					public static VIDEO_PROFILE_240P_4: number;
					public static VIDEO_PROFILE_360P: number;
					public static VIDEO_PROFILE_360P_3: number;
					public static VIDEO_PROFILE_360P_4: number;
					public static VIDEO_PROFILE_360P_6: number;
					public static VIDEO_PROFILE_360P_7: number;
					public static VIDEO_PROFILE_360P_8: number;
					public static VIDEO_PROFILE_480P: number;
					public static VIDEO_PROFILE_480P_3: number;
					public static VIDEO_PROFILE_480P_4: number;
					public static VIDEO_PROFILE_480P_6: number;
					public static VIDEO_PROFILE_480P_8: number;
					public static VIDEO_PROFILE_480P_9: number;
					public static VIDEO_PROFILE_720P: number;
					public static VIDEO_PROFILE_720P_3: number;
					public static VIDEO_PROFILE_720P_5: number;
					public static VIDEO_PROFILE_720P_6: number;
					public static VIDEO_PROFILE_DEFAULT: number;
					public constructor();
				}
				export class WarnCode {
					public static class: java.lang.Class<io.agora.rtc.IRtcEngineEventHandler.WarnCode>;
					public static WARN_PENDING: number;
					public static WARN_INIT_VIDEO: number;
					public static WARN_INVALID_VIEW: number;
					public static WARN_NO_AVAILABLE_CHANNEL: number;
					public static WARN_LOOKUP_CHANNEL_TIMEOUT: number;
					public static WARN_LOOKUP_CHANNEL_REJECTED: number;
					public static WARN_OPEN_CHANNEL_TIMEOUT: number;
					public static WARN_OPEN_CHANNEL_REJECTED: number;
					public static WARN_OPEN_CHANNEL_INVALID_TICKET: number;
					public static WARN_OPEN_CHANNEL_TRY_NEXT_VOS: number;
					public static WARN_AUDIO_MIXING_OPEN_ERROR: number;
					public static WARN_ADM_RUNTIME_PLAYOUT_WARNING: number;
					public static WARN_ADM_RUNTIME_RECORDING_WARNING: number;
					public static WARN_ADM_RECORD_AUDIO_SILENCE: number;
					public static WARN_ADM_CALL_INTERRUPTION: number;
					public static WARN_ADM_RECORD_IS_OCCUPIED: number;
					public static WARN_APM_HOWLING: number;
					public constructor();
				}
			}
		}
	}
}

declare module io {
	export module agora {
		export module rtc {
			export abstract class IRtcEngineEventHandlerEx extends io.agora.rtc.IRtcEngineEventHandler {
				public static class: java.lang.Class<io.agora.rtc.IRtcEngineEventHandlerEx>;
				public onVideoTransportQuality(param0: number, param1: number, param2: number, param3: number): void;
				public onAudioTransportQuality(param0: number, param1: number, param2: number, param3: number): void;
				public onRecap(param0: native.Array<number>): void;
				public constructor();
			}
		}
	}
}

declare module io {
	export module agora {
		export module rtc {
			export class PublisherParameters {
				public static class: java.lang.Class<io.agora.rtc.PublisherParameters>;
				public width: number;
				public height: number;
				public framerate: number;
				public bitrate: number;
				public defaultLayout: number;
				public audiosamplerate: number;
				public audiobitrate: number;
				public audiochannels: number;
				public owner: boolean;
				public lifecycle: number;
				public publishUrl: string;
				public rawStreamUrl: string;
				public extraInfo: string;
				public injectStreamUrl: string;
				public injectStreamWidth: number;
				public injectStreamHeight: number;
				public constructor();
			}
		}
	}
}

declare module io {
	export module agora {
		export module rtc {
			export abstract class RtcChannel {
				public static class: java.lang.Class<io.agora.rtc.RtcChannel>;
				public destroy(): number;
				public setDefaultMuteAllRemoteAudioStreams(param0: boolean): number;
				public setRtcChannelEventHandler(param0: io.agora.rtc.IRtcChannelEventHandler): void;
				public sendStreamMessage(param0: number, param1: native.Array<number>): number;
				public getConnectionState(): number;
				public setLiveTranscoding(param0: io.agora.rtc.live.LiveTranscoding): number;
				public setClientRole(param0: number): number;
				public adjustUserPlaybackSignalVolume(param0: number, param1: number): number;
				public setRemoteVideoRenderer(param0: number, param1: io.agora.rtc.mediaio.IVideoSink): number;
				public renewToken(param0: string): number;
				public constructor();
				/** @deprecated */
				public setEncryptionMode(param0: string): number;
				public updateChannelMediaRelay(param0: io.agora.rtc.video.ChannelMediaRelayConfiguration): number;
				public removeInjectStreamUrl(param0: string): number;
				public getEventHandler(): io.agora.rtc.IRtcChannelEventHandler;
				public joinChannel(param0: string, param1: string, param2: number, param3: io.agora.rtc.models.ChannelMediaOptions): number;
				public setRemoteVoicePosition(param0: number, param1: number, param2: number): number;
				public setDefaultMuteAllRemoteVideoStreams(param0: boolean): number;
				public setRemoteRenderMode(param0: number, param1: number, param2: number): number;
				public createDataStream(param0: boolean, param1: boolean): number;
				public setRemoteUserPriority(param0: number, param1: number): number;
				public leaveChannel(): number;
				public setRemoteDefaultVideoStreamType(param0: number): number;
				public muteAllRemoteVideoStreams(param0: boolean): number;
				public startChannelMediaRelay(param0: io.agora.rtc.video.ChannelMediaRelayConfiguration): number;
				public muteAllRemoteAudioStreams(param0: boolean): number;
				public removePublishStreamUrl(param0: string): number;
				public addPublishStreamUrl(param0: string, param1: boolean): number;
				public muteRemoteAudioStream(param0: number, param1: boolean): number;
				public stopChannelMediaRelay(): number;
				public unpublish(): number;
				/** @deprecated */
				public setEncryptionSecret(param0: string): number;
				public setRemoteVideoStreamType(param0: number, param1: number): number;
				public registerMediaMetadataObserver(param0: io.agora.rtc.IMetadataObserver, param1: number): number;
				public muteRemoteVideoStream(param0: number, param1: boolean): number;
				public channelId(): string;
				public getCallId(): string;
				public publish(): number;
				public enableEncryption(param0: boolean, param1: io.agora.rtc.internal.EncryptionConfig): number;
				public addInjectStreamUrl(param0: string, param1: io.agora.rtc.live.LiveInjectStreamConfig): number;
				public joinChannelWithUserAccount(param0: string, param1: string, param2: io.agora.rtc.models.ChannelMediaOptions): number;
			}
		}
	}
}

declare module io {
	export module agora {
		export module rtc {
			export abstract class RtcEngine {
				public static class: java.lang.Class<io.agora.rtc.RtcEngine>;
				public setDefaultMuteAllRemoteAudioStreams(param0: boolean): number;
				public pushExternalVideoFrame(param0: io.agora.rtc.video.AgoraVideoFrame): boolean;
				public sendStreamMessage(param0: number, param1: native.Array<number>): number;
				public getConnectionState(): number;
				public startPreview(): number;
				/** @deprecated */
				public setEncryptionMode(param0: string): number;
				public updateChannelMediaRelay(param0: io.agora.rtc.video.ChannelMediaRelayConfiguration): number;
				public pushExternalAudioFrame(param0: native.Array<number>, param1: number): number;
				/** @deprecated */
				public enableHighPerfWifiMode(param0: boolean): boolean;
				public stopDumpVideoReceiveTrack(): number;
				public setDefaultAudioRoutetoSpeakerphone(param0: boolean): number;
				/** @deprecated */
				public setVideoQualityParameters(param0: boolean): number;
				public setupLocalVideo(param0: io.agora.rtc.video.VideoCanvas): number;
				public setRemoteVoicePosition(param0: number, param1: number, param2: number): number;
				public setRemoteRenderMode(param0: number, param1: number, param2: number): number;
				/** @deprecated */
				public setRemoteRenderMode(param0: number, param1: number): number;
				public static getSdkVersion(): string;
				/** @deprecated */
				public setPreferHeadset(param0: boolean): void;
				/** @deprecated */
				public enableWebSdkInteroperability(param0: boolean): number;
				public enableLastmileTest(): number;
				public adjustPlaybackSignalVolume(param0: number): number;
				/** @deprecated */
				public setLocalRenderMode(param0: number): number;
				public enableSoundPositionIndication(param0: boolean): number;
				public setVideoSource(param0: io.agora.rtc.mediaio.IVideoSource): number;
				public removePublishStreamUrl(param0: string): number;
				public createRtcChannel(param0: string): io.agora.rtc.RtcChannel;
				public getAudioMixingPublishVolume(): number;
				public enableDualStreamMode(param0: boolean): number;
				public addHandler(param0: io.agora.rtc.IRtcEngineEventHandler): void;
				public setVideoEncoderConfiguration(param0: io.agora.rtc.video.VideoEncoderConfiguration): number;
				public enableInEarMonitoring(param0: boolean): number;
				public setLocalRenderMode(param0: number, param1: number): number;
				public setEnableSpeakerphone(param0: boolean): number;
				public setMixedAudioFrameParameters(param0: number, param1: number): number;
				public isSpeakerphoneEnabled(): boolean;
				/** @deprecated */
				public setEncryptionSecret(param0: string): number;
				public isCameraTorchSupported(): boolean;
				public setLocalVoiceReverbPreset(param0: number): number;
				public registerMediaMetadataObserver(param0: io.agora.rtc.IMetadataObserver, param1: number): number;
				public static CreateTextureView(param0: globalAndroid.content.Context): globalAndroid.view.TextureView;
				public addInjectStreamUrl(param0: string, param1: io.agora.rtc.live.LiveInjectStreamConfig): number;
				public enableAudio(): number;
				public getUserInfoByUid(param0: number, param1: io.agora.rtc.models.UserInfo): number;
				public setCameraCapturerConfiguration(param0: io.agora.rtc.video.CameraCapturerConfiguration): number;
				public setLocalVoicePitch(param0: number): number;
				public stopAudioMixing(): number;
				public clearVideoWatermarks(): number;
				public setExternalAudioSink(param0: boolean, param1: number, param2: number): number;
				public enableAudioVolumeIndication(param0: number, param1: number, param2: boolean): number;
				public adjustAudioMixingPlayoutVolume(param0: number): number;
				public getAudioMixingCurrentPosition(): number;
				public setChannelProfile(param0: number): number;
				/** @deprecated */
				public setVideoProfile(param0: number, param1: number, param2: number, param3: number): number;
				/** @deprecated */
				public useExternalAudioDevice(): number;
				public static create(param0: globalAndroid.content.Context, param1: string, param2: io.agora.rtc.IRtcEngineEventHandler): io.agora.rtc.RtcEngine;
				/** @deprecated */
				public monitorHeadsetEvent(param0: boolean): void;
				public startLastmileProbeTest(param0: io.agora.rtc.internal.LastmileProbeConfig): number;
				/** @deprecated */
				public setHighQualityAudioParameters(param0: boolean, param1: boolean, param2: boolean): number;
				/** @deprecated */
				public enableAudioQualityIndication(param0: boolean): number;
				public startAudioRecording(param0: string, param1: number, param2: number): number;
				public muteAllRemoteVideoStreams(param0: boolean): number;
				public removeHandler(param0: io.agora.rtc.IRtcEngineEventHandler): void;
				public setLocalPublishFallbackOption(param0: number): number;
				public complain(param0: string, param1: string): number;
				public addPublishStreamUrl(param0: string, param1: boolean): number;
				public stopAudioRecording(): number;
				public startDumpVideoReceiveTrack(param0: number, param1: string): number;
				public setLogFileSize(param0: number): number;
				public stopLastmileProbeTest(): number;
				public rate(param0: string, param1: number, param2: string): number;
				public enableFaceDetection(param0: boolean): number;
				public muteRemoteVideoStream(param0: number, param1: boolean): number;
				public registerAudioFrameObserver(param0: io.agora.rtc.IAudioFrameObserver): number;
				public enableEncryption(param0: boolean, param1: io.agora.rtc.internal.EncryptionConfig): number;
				public switchCamera(): number;
				public setLogFile(param0: string): number;
				public isCameraZoomSupported(): boolean;
				/** @deprecated */
				public setLocalVideoMirrorMode(param0: number): number;
				public stopEchoTest(): number;
				public sendCustomReportMessage(param0: string, param1: string, param2: string, param3: string, param4: number): number;
				public setLiveTranscoding(param0: io.agora.rtc.live.LiveTranscoding): number;
				public setClientRole(param0: number): number;
				public adjustUserPlaybackSignalVolume(param0: number, param1: number): number;
				public setRemoteVideoRenderer(param0: number, param1: io.agora.rtc.mediaio.IVideoSink): number;
				public constructor();
				public getUserInfoByUserAccount(param0: string, param1: io.agora.rtc.models.UserInfo): number;
				public getCameraMaxZoomFactor(): number;
				public removeInjectStreamUrl(param0: string): number;
				public setLocalVoiceReverb(param0: number, param1: number): number;
				/** @deprecated */
				public static getRecommendedEncoderType(): number;
				public getNativeHandle(): number;
				public static create(param0: io.agora.rtc.RtcEngineConfig): io.agora.rtc.RtcEngine;
				public setDefaultMuteAllRemoteVideoStreams(param0: boolean): number;
				public pauseAudioMixing(): number;
				public setRemoteSubscribeFallbackOption(param0: number): number;
				public createDataStream(param0: boolean, param1: boolean): number;
				public setCameraExposurePosition(param0: number, param1: number): number;
				public isCameraFocusSupported(): boolean;
				public adjustAudioMixingVolume(param0: number): number;
				public addVideoWatermark(param0: string, param1: io.agora.rtc.video.WatermarkOptions): number;
				public setLogFilter(param0: number): number;
				public setLocalVoiceEqualization(param0: number, param1: number): number;
				public getParameter(param0: string, param1: string): string;
				public enableLocalVideo(param0: boolean): number;
				public startAudioMixing(param0: string, param1: boolean, param2: boolean, param3: number): number;
				/** @deprecated */
				public startEchoTest(): number;
				public setPlaybackAudioFrameParameters(param0: number, param1: number, param2: number, param3: number): number;
				public setCameraTorchOn(param0: boolean): number;
				public disableVideo(): number;
				public muteRemoteAudioStream(param0: number, param1: boolean): number;
				/** @deprecated */
				public setVideoProfile(param0: number, param1: boolean): number;
				public static destroy(): void;
				public stopChannelMediaRelay(): number;
				/** @deprecated */
				public resumeAudio(): number;
				public setExternalAudioSource(param0: boolean, param1: number, param2: number): number;
				public static getErrorDescription(param0: number): string;
				/** @deprecated */
				public startAudioRecording(param0: string, param1: number): number;
				public registerLocalUserAccount(param0: string, param1: string): number;
				public setRecordingAudioFrameParameters(param0: number, param1: number, param2: number, param3: number): number;
				public getCallId(): string;
				public startEchoTest(param0: number): number;
				public setLocalVoiceChanger(param0: number): number;
				public disableLastmileTest(): number;
				public setCameraZoomFactor(param0: number): number;
				public setInEarMonitoringVolume(param0: number): number;
				public isCameraAutoFocusFaceModeSupported(): boolean;
				public setCameraAutoFocusFaceModeEnabled(param0: boolean): number;
				public resumeAudioMixing(): number;
				public adjustRecordingSignalVolume(param0: number): number;
				public renewToken(param0: string): number;
				public disableAudio(): number;
				public adjustAudioMixingPublishVolume(param0: number): number;
				/** @deprecated */
				public monitorBluetoothHeadsetEvent(param0: boolean): void;
				public getAudioEffectManager(): io.agora.rtc.IAudioEffectManager;
				public joinChannelWithUserAccount(param0: string, param1: string, param2: string): number;
				/** @deprecated */
				public pauseAudio(): number;
				public muteLocalAudioStream(param0: boolean): number;
				public static CreateRendererView(param0: globalAndroid.content.Context): globalAndroid.view.SurfaceView;
				public isCameraExposurePositionSupported(): boolean;
				public enableVideo(): number;
				public setAudioMixingPosition(param0: number): number;
				public setLocalVideoRenderer(param0: io.agora.rtc.mediaio.IVideoSink): number;
				public setAudioMixingPitch(param0: number): number;
				public getAudioMixingPlayoutVolume(): number;
				public pullPlaybackAudioFrame(param0: native.Array<number>, param1: number): number;
				public setRemoteUserPriority(param0: number, param1: number): number;
				public leaveChannel(): number;
				public setAudioProfile(param0: number, param1: number): number;
				public setRemoteDefaultVideoStreamType(param0: number): number;
				public startChannelMediaRelay(param0: io.agora.rtc.video.ChannelMediaRelayConfiguration): number;
				public switchChannel(param0: string, param1: string): number;
				public joinChannel(param0: string, param1: string, param2: string, param3: number): number;
				public muteAllRemoteAudioStreams(param0: boolean): number;
				public setParameters(param0: string): number;
				public setCameraFocusPositionInPreview(param0: number, param1: number): number;
				public muteLocalVideoStream(param0: boolean): number;
				/** @deprecated */
				public static getMediaEngineVersion(): string;
				public setExternalVideoSource(param0: boolean, param1: boolean, param2: boolean): void;
				/** @deprecated */
				public addVideoWatermark(param0: io.agora.rtc.video.AgoraImage): number;
				public getAudioMixingDuration(): number;
				public setRemoteVideoStreamType(param0: number, param1: number): number;
				public enableLocalAudio(param0: boolean): number;
				public isTextureEncodeSupported(): boolean;
				public setBeautyEffectOptions(param0: boolean, param1: io.agora.rtc.video.BeautyOptions): number;
				public setupRemoteVideo(param0: io.agora.rtc.video.VideoCanvas): number;
				public stopPreview(): number;
			}
		}
	}
}

declare module io {
	export module agora {
		export module rtc {
			export class RtcEngineConfig {
				public static class: java.lang.Class<io.agora.rtc.RtcEngineConfig>;
				public mContext: globalAndroid.content.Context;
				public mAppId: string;
				public mAreaCode: number;
				public mEventHandler: io.agora.rtc.IRtcEngineEventHandler;
				public constructor();
			}
			export module RtcEngineConfig {
				export class AreaCode {
					public static class: java.lang.Class<io.agora.rtc.RtcEngineConfig.AreaCode>;
					public static AREA_CODE_CN: number;
					public static AREA_CODE_NA: number;
					public static AREA_CODE_EU: number;
					public static AREA_CODE_AS: number;
					public static AREA_CODE_JP: number;
					public static AREA_CODE_IN: number;
					public static AREA_CODE_GLOB: number;
					public constructor();
				}
			}
		}
	}
}

declare module io {
	export module agora {
		export module rtc {
			export abstract class RtcEngineEx extends io.agora.rtc.RtcEngine {
				public static class: java.lang.Class<io.agora.rtc.RtcEngineEx>;
				public setProfile(param0: string, param1: boolean): number;
				public playRecap(): number;
				public setTextureId(param0: number, param1: globalAndroid.opengl.EGLContext, param2: number, param3: number, param4: number): number;
				public constructor();
				public updateSharedContext(param0: javax.microedition.khronos.egl.EGLContext): number;
				public enableRecap(param0: number): number;
				public makeQualityReportUrl(param0: string, param1: number, param2: number, param3: number): string;
				public setTextureId(param0: number, param1: javax.microedition.khronos.egl.EGLContext, param2: number, param3: number, param4: number): number;
				public setAppType(param0: number): number;
				public enableTransportQualityIndication(param0: boolean): number;
				public updateSharedContext(param0: globalAndroid.opengl.EGLContext): number;
				public monitorAudioRouteChange(param0: boolean): number;
				public getParameters(param0: string): string;
				public setApiCallMode(param0: number): number;
			}
		}
	}
}

declare module io {
	export module agora {
		export module rtc {
			export module audio {
				export class AgoraAudioFrame {
					public static class: java.lang.Class<io.agora.rtc.audio.AgoraAudioFrame>;
					public type: number;
					public pcm: native.Array<number>;
					public channels: number;
					public frequency: number;
					public constructor();
				}
			}
		}
	}
}

declare module io {
	export module agora {
		export module rtc {
			export module audio {
				export class AudioDevice {
					public static class: java.lang.Class<io.agora.rtc.audio.AudioDevice>;
				}
			}
		}
	}
}

declare module io {
	export module agora {
		export module rtc {
			export module audio {
				export class AudioManagerAndroid {
					public static class: java.lang.Class<io.agora.rtc.audio.AudioManagerAndroid>;
				}
			}
		}
	}
}

declare module io {
	export module agora {
		export module rtc {
			export module audio {
				export class HardwareEarbackController {
					public static class: java.lang.Class<io.agora.rtc.audio.HardwareEarbackController>;
					public static getInstance(param0: globalAndroid.content.Context): io.agora.rtc.audio.HardwareEarbackController;
					public enableHardwareEarback(param0: boolean): number;
					public setHardwareEarbackVolume(param0: number): number;
					public isHardwareEarbackSupported(): boolean;
				}
			}
		}
	}
}

declare module io {
	export module agora {
		export module rtc {
			export module audio {
				export class HuaweiHardwareEarback extends io.agora.rtc.audio.IHardwareEarback {
					public static class: java.lang.Class<io.agora.rtc.audio.HuaweiHardwareEarback>;
					public constructor(param0: globalAndroid.content.Context);
					public destroy(): void;
					public setHardwareEarbackVolume(param0: number): number;
					public enableEarbackFeature(param0: boolean): number;
					public finalize(): void;
					public isHardwareEarbackSupported(): boolean;
					public initialize(): void;
				}
			}
		}
	}
}

declare module io {
	export module agora {
		export module rtc {
			export module audio {
				export class IHardwareEarback {
					public static class: java.lang.Class<io.agora.rtc.audio.IHardwareEarback>;
					/**
					 * Constructs a new instance of the io.agora.rtc.audio.IHardwareEarback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						initialize(): void;
						isHardwareEarbackSupported(): boolean;
						enableEarbackFeature(param0: boolean): number;
						setHardwareEarbackVolume(param0: number): number;
						destroy(): void;
					});
					public constructor();
					public destroy(): void;
					public setHardwareEarbackVolume(param0: number): number;
					public enableEarbackFeature(param0: boolean): number;
					public isHardwareEarbackSupported(): boolean;
					public initialize(): void;
				}
			}
		}
	}
}

declare module io {
	export module agora {
		export module rtc {
			export module audio {
				export class MediaCodecAudioDecoder {
					public static class: java.lang.Class<io.agora.rtc.audio.MediaCodecAudioDecoder>;
					public getChannelCount(): number;
					public checkAACSupported(): boolean;
					public releaseStreaming(): void;
					public createStreaming(param0: string): boolean;
					public getDecodeDataReadyFlag(): boolean;
					public getSampleRate(): number;
					public createAACStreaming(param0: number): boolean;
					public decodeFrame(): boolean;
					public constructor();
					public releaseAACStreaming(): void;
					public getFileLength(): number;
					public setCurrentFilePosition(param0: number): void;
					public rewindStreaming(): void;
					public getCurrentFilePosition(): number;
					public decodeAACFrame(param0: native.Array<number>): number;
				}
			}
		}
	}
}

declare module io {
	export module agora {
		export module rtc {
			export module audio {
				export class MediaCodecAudioEncoder {
					public static class: java.lang.Class<io.agora.rtc.audio.MediaCodecAudioEncoder>;
					public setChannelCount(param0: number): void;
					public releaseStreaming(): void;
					public constructor();
					public createAACStreaming(param0: number, param1: number, param2: number): boolean;
					public setAACEncodeBitrate(param0: number): boolean;
					public releaseAACStreaming(): void;
					public encodeFrame(param0: native.Array<number>): void;
					public createStreaming(param0: string, param1: number, param2: number, param3: number): boolean;
					public setSampleRate(param0: number): void;
					public encodeAACFrame(param0: native.Array<number>): number;
				}
			}
		}
	}
}

declare module io {
	export module agora {
		export module rtc {
			export module audio {
				export class OppoHardwareEarback extends io.agora.rtc.audio.IHardwareEarback {
					public static class: java.lang.Class<io.agora.rtc.audio.OppoHardwareEarback>;
					public constructor(param0: globalAndroid.content.Context);
					public destroy(): void;
					public setHardwareEarbackVolume(param0: number): number;
					public enableEarbackFeature(param0: boolean): number;
					public isHardwareEarbackSupported(): boolean;
					public initialize(): void;
				}
			}
		}
	}
}

declare module io {
	export module agora {
		export module rtc {
			export module audio {
				export class VivoHardwareEarback extends io.agora.rtc.audio.IHardwareEarback {
					public static class: java.lang.Class<io.agora.rtc.audio.VivoHardwareEarback>;
					public constructor(param0: globalAndroid.content.Context);
					public destroy(): void;
					public setHardwareEarbackVolume(param0: number): number;
					public enableEarbackFeature(param0: boolean): number;
					public finalize(): void;
					public isHardwareEarbackSupported(): boolean;
					public initialize(): void;
				}
			}
		}
	}
}

declare module io {
	export module agora {
		export module rtc {
			export module gl {
				export abstract class EglBase {
					public static class: java.lang.Class<io.agora.rtc.gl.EglBase>;
					public static lock: any;
					public static EGL_OPENGL_ES2_BIT: number;
					public static EGL_RECORDABLE_ANDROID: number;
					public static CONFIG_PLAIN: native.Array<number>;
					public static CONFIG_RGBA: native.Array<number>;
					public static CONFIG_PIXEL_BUFFER: native.Array<number>;
					public static CONFIG_PIXEL_RGBA_BUFFER: native.Array<number>;
					public static CONFIG_RECORDABLE: native.Array<number>;
					public detachCurrent(): void;
					public static create(): io.agora.rtc.gl.EglBase;
					public createSurface(param0: globalAndroid.view.Surface): void;
					public static createEgl10(param0: native.Array<number>): io.agora.rtc.gl.EglBase;
					public createDummyPbufferSurface(): void;
					public getEglBaseContext(): io.agora.rtc.gl.EglBase.Context;
					public release(): void;
					public surfaceHeight(): number;
					public static createEgl14(param0: globalAndroid.opengl.EGLContext, param1: native.Array<number>): io.agora.rtc.gl.EglBase;
					public static create(param0: io.agora.rtc.gl.EglBase.Context, param1: native.Array<number>): io.agora.rtc.gl.EglBase;
					public createSurface(param0: globalAndroid.graphics.SurfaceTexture): void;
					public static create(param0: io.agora.rtc.gl.EglBase.Context): io.agora.rtc.gl.EglBase;
					public constructor();
					public createPbufferSurface(param0: number, param1: number): void;
					public makeCurrent(): void;
					public static createEgl10(param0: javax.microedition.khronos.egl.EGLContext, param1: native.Array<number>): io.agora.rtc.gl.EglBase;
					public hasSurface(): boolean;
					public surfaceWidth(): number;
					public static createEgl14(param0: native.Array<number>): io.agora.rtc.gl.EglBase;
					public swapBuffers(): void;
					public releaseSurface(): void;
					public swapBuffers(param0: number): void;
				}
				export module EglBase {
					export class Context {
						public static class: java.lang.Class<io.agora.rtc.gl.EglBase.Context>;
						/**
						 * Constructs a new instance of the io.agora.rtc.gl.EglBase$Context interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							getNativeEglContext(): number;
						});
						public constructor();
						public getNativeEglContext(): number;
					}
				}
			}
		}
	}
}

declare module io {
	export module agora {
		export module rtc {
			export module gl {
				export class EglBase10 extends io.agora.rtc.gl.EglBase {
					public static class: java.lang.Class<io.agora.rtc.gl.EglBase10>;
					public detachCurrent(): void;
					public createSurface(param0: globalAndroid.view.Surface): void;
					public createDummyPbufferSurface(): void;
					public getEglBaseContext(): io.agora.rtc.gl.EglBase.Context;
					public release(): void;
					public surfaceHeight(): number;
					public createSurface(param0: globalAndroid.graphics.SurfaceTexture): void;
					public constructor(param0: io.agora.rtc.gl.EglBase10.Context, param1: native.Array<number>);
					public constructor();
					public createPbufferSurface(param0: number, param1: number): void;
					public makeCurrent(): void;
					public hasSurface(): boolean;
					public surfaceWidth(): number;
					public swapBuffers(): void;
					public releaseSurface(): void;
					public swapBuffers(param0: number): void;
				}
				export module EglBase10 {
					export class Context extends io.agora.rtc.gl.EglBase.Context {
						public static class: java.lang.Class<io.agora.rtc.gl.EglBase10.Context>;
						public constructor(param0: javax.microedition.khronos.egl.EGLContext);
						public getNativeEglContext(): number;
					}
				}
			}
		}
	}
}

declare module io {
	export module agora {
		export module rtc {
			export module gl {
				export class EglBase14 extends io.agora.rtc.gl.EglBase {
					public static class: java.lang.Class<io.agora.rtc.gl.EglBase14>;
					public detachCurrent(): void;
					public static isEGL14Supported(): boolean;
					public createSurface(param0: globalAndroid.view.Surface): void;
					public getEglBaseContext(): io.agora.rtc.gl.EglBase14.Context;
					public createDummyPbufferSurface(): void;
					public getEglBaseContext(): io.agora.rtc.gl.EglBase.Context;
					public release(): void;
					public surfaceHeight(): number;
					public createSurface(param0: globalAndroid.graphics.SurfaceTexture): void;
					public constructor();
					public createPbufferSurface(param0: number, param1: number): void;
					public makeCurrent(): void;
					public hasSurface(): boolean;
					public surfaceWidth(): number;
					public swapBuffers(): void;
					public releaseSurface(): void;
					public constructor(param0: io.agora.rtc.gl.EglBase14.Context, param1: native.Array<number>);
					public swapBuffers(param0: number): void;
				}
				export module EglBase14 {
					export class Context extends io.agora.rtc.gl.EglBase.Context {
						public static class: java.lang.Class<io.agora.rtc.gl.EglBase14.Context>;
						public constructor(param0: globalAndroid.opengl.EGLContext);
						public getNativeEglContext(): number;
					}
				}
			}
		}
	}
}

declare module io {
	export module agora {
		export module rtc {
			export module gl {
				export class EglRenderer {
					public static class: java.lang.Class<io.agora.rtc.gl.EglRenderer>;
					public clearImage(param0: number, param1: number, param2: number, param3: number): void;
					public disableFpsReduction(): void;
					public addFrameListener(param0: io.agora.rtc.gl.EglRenderer.FrameListener, param1: number): void;
					public clearImage(): void;
					public constructor(param0: string);
					public getEglContext(): io.agora.rtc.gl.EglBase.Context;
					public createEglSurface(param0: globalAndroid.view.Surface): void;
					public setFpsReduction(param0: number): void;
					public addFrameListener(param0: io.agora.rtc.gl.EglRenderer.FrameListener, param1: number, param2: io.agora.rtc.gl.RendererCommon.GlDrawer, param3: boolean): void;
					public setMirror(param0: boolean): void;
					public setLayoutAspectRatio(param0: number): void;
					public renderFrame(param0: io.agora.rtc.gl.VideoFrame): void;
					public init(param0: io.agora.rtc.gl.EglBase.Context, param1: native.Array<number>, param2: io.agora.rtc.gl.RendererCommon.GlDrawer): void;
					public release(): void;
					public pauseVideo(): void;
					public addFrameListener(param0: io.agora.rtc.gl.EglRenderer.FrameListener, param1: number, param2: io.agora.rtc.gl.RendererCommon.GlDrawer): void;
					public printStackTrace(): void;
					public releaseEglSurface(param0: java.lang.Runnable): void;
					public createEglSurface(param0: globalAndroid.graphics.SurfaceTexture): void;
					public onFrame(param0: io.agora.rtc.gl.VideoFrame): void;
					public removeFrameListener(param0: io.agora.rtc.gl.EglRenderer.FrameListener): void;
				}
				export module EglRenderer {
					export class EglSurfaceCreation {
						public static class: java.lang.Class<io.agora.rtc.gl.EglRenderer.EglSurfaceCreation>;
						public run(): void;
						public setSurface(param0: any): void;
					}
					export class FrameListener {
						public static class: java.lang.Class<io.agora.rtc.gl.EglRenderer.FrameListener>;
						/**
						 * Constructs a new instance of the io.agora.rtc.gl.EglRenderer$FrameListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onFrame(param0: globalAndroid.graphics.Bitmap): void;
						});
						public constructor();
						public onFrame(param0: globalAndroid.graphics.Bitmap): void;
					}
					export class FrameListenerAndParams {
						public static class: java.lang.Class<io.agora.rtc.gl.EglRenderer.FrameListenerAndParams>;
						public listener: io.agora.rtc.gl.EglRenderer.FrameListener;
						public scale: number;
						public drawer: io.agora.rtc.gl.RendererCommon.GlDrawer;
						public applyFpsReduction: boolean;
						public constructor(param0: io.agora.rtc.gl.EglRenderer.FrameListener, param1: number, param2: io.agora.rtc.gl.RendererCommon.GlDrawer, param3: boolean);
					}
				}
			}
		}
	}
}

declare module io {
	export module agora {
		export module rtc {
			export module gl {
				export class GlRectDrawer extends io.agora.rtc.gl.RendererCommon.GlDrawer {
					public static class: java.lang.Class<io.agora.rtc.gl.GlRectDrawer>;
					public drawRgb(param0: number, param1: native.Array<number>, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number, param8: number, param9: number): void;
					public drawOes(param0: number, param1: native.Array<number>, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number, param8: number, param9: number): void;
					public constructor();
					public drawOes(param0: number, param1: native.Array<number>, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number): void;
					public drawYuv(param0: native.Array<number>, param1: native.Array<number>, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number): void;
					public drawRgb(param0: number, param1: native.Array<number>, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number): void;
					public release(): void;
				}
				export module GlRectDrawer {
					export class Shader {
						public static class: java.lang.Class<io.agora.rtc.gl.GlRectDrawer.Shader>;
						public glShader: io.agora.rtc.gl.GlShader;
						public texMatrixLocation: number;
						public constructor(param0: string);
					}
				}
			}
		}
	}
}

declare module io {
	export module agora {
		export module rtc {
			export module gl {
				export class GlShader {
					public static class: java.lang.Class<io.agora.rtc.gl.GlShader>;
					public constructor(param0: string, param1: string);
					public setVertexAttribArray(param0: string, param1: number, param2: java.nio.FloatBuffer): void;
					public getUniformLocation(param0: string): number;
					public useProgram(): void;
					public getAttribLocation(param0: string): number;
					public setVertexAttribArray(param0: string, param1: number, param2: number, param3: java.nio.FloatBuffer): void;
					public release(): void;
				}
			}
		}
	}
}

declare module io {
	export module agora {
		export module rtc {
			export module gl {
				export class GlTextureFrameBuffer {
					public static class: java.lang.Class<io.agora.rtc.gl.GlTextureFrameBuffer>;
					public getFrameBufferId(): number;
					public getHeight(): number;
					public getTextureId(): number;
					public getWidth(): number;
					public setSize(param0: number, param1: number): void;
					public release(): void;
					public constructor(param0: number);
				}
			}
		}
	}
}

declare module io {
	export module agora {
		export module rtc {
			export module gl {
				export class GlUtil {
					public static class: java.lang.Class<io.agora.rtc.gl.GlUtil>;
					public static createFloatBuffer(param0: native.Array<number>): java.nio.FloatBuffer;
					public static generateTexture(param0: number): number;
					public static checkNoGLES2Error(param0: string): void;
				}
			}
		}
	}
}

declare module io {
	export module agora {
		export module rtc {
			export module gl {
				export class JavaI420Buffer extends io.agora.rtc.gl.VideoFrame.I420Buffer {
					public static class: java.lang.Class<io.agora.rtc.gl.JavaI420Buffer>;
					public getHeight(): number;
					public getDataU(): java.nio.ByteBuffer;
					public getWidth(): number;
					public getDataY(): java.nio.ByteBuffer;
					public static wrap(param0: number, param1: number, param2: java.nio.ByteBuffer, param3: number, param4: java.nio.ByteBuffer, param5: number, param6: java.nio.ByteBuffer, param7: number, param8: java.lang.Runnable): io.agora.rtc.gl.JavaI420Buffer;
					public getStrideU(): number;
					public release(): void;
					public static createYUV(param0: native.Array<number>, param1: number, param2: number): io.agora.rtc.gl.JavaI420Buffer;
					public getStrideY(): number;
					public static allocate(param0: number, param1: number): io.agora.rtc.gl.JavaI420Buffer;
					public getDataV(): java.nio.ByteBuffer;
					public getStrideV(): number;
					public retain(): void;
					public toI420(): io.agora.rtc.gl.VideoFrame.I420Buffer;
					public cropAndScale(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number): io.agora.rtc.gl.VideoFrame.Buffer;
				}
			}
		}
	}
}

declare module io {
	export module agora {
		export module rtc {
			export module gl {
				export class RendererCommon {
					public static class: java.lang.Class<io.agora.rtc.gl.RendererCommon>;
					public static convertMatrixToAndroidGraphicsMatrix(param0: native.Array<number>): globalAndroid.graphics.Matrix;
					public static verticalFlipMatrix(): native.Array<number>;
					public static rotateTextureMatrix(param0: native.Array<number>, param1: number): native.Array<number>;
					public static multiplyMatrices(param0: native.Array<number>, param1: native.Array<number>): native.Array<number>;
					public static identityMatrix(): native.Array<number>;
					public static horizontalFlipMatrix(): native.Array<number>;
					public static convertMatrixFromAndroidGraphicsMatrix(param0: globalAndroid.graphics.Matrix): native.Array<number>;
					public constructor();
					public static getLayoutMatrix(param0: boolean, param1: number, param2: number): native.Array<number>;
					public static getDisplaySize(param0: io.agora.rtc.gl.RendererCommon.ScalingType, param1: number, param2: number, param3: number): globalAndroid.graphics.Point;
				}
				export module RendererCommon {
					export class GlDrawer {
						public static class: java.lang.Class<io.agora.rtc.gl.RendererCommon.GlDrawer>;
						/**
						 * Constructs a new instance of the io.agora.rtc.gl.RendererCommon$GlDrawer interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							drawOes(param0: number, param1: native.Array<number>, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number): void;
							drawRgb(param0: number, param1: native.Array<number>, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number): void;
							drawYuv(param0: native.Array<number>, param1: native.Array<number>, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number): void;
							release(): void;
						});
						public constructor();
						public drawYuv(param0: native.Array<number>, param1: native.Array<number>, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number): void;
						public drawRgb(param0: number, param1: native.Array<number>, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number): void;
						public drawOes(param0: number, param1: native.Array<number>, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number): void;
						public release(): void;
					}
					export class RendererEvents {
						public static class: java.lang.Class<io.agora.rtc.gl.RendererCommon.RendererEvents>;
						/**
						 * Constructs a new instance of the io.agora.rtc.gl.RendererCommon$RendererEvents interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onFirstFrameRendered(): void;
							onFrameResolutionChanged(param0: number, param1: number, param2: number): void;
						});
						public constructor();
						public onFirstFrameRendered(): void;
						public onFrameResolutionChanged(param0: number, param1: number, param2: number): void;
					}
					export class ScalingType {
						public static class: java.lang.Class<io.agora.rtc.gl.RendererCommon.ScalingType>;
						public static SCALE_ASPECT_FIT: io.agora.rtc.gl.RendererCommon.ScalingType;
						public static SCALE_ASPECT_FILL: io.agora.rtc.gl.RendererCommon.ScalingType;
						public static SCALE_ASPECT_BALANCED: io.agora.rtc.gl.RendererCommon.ScalingType;
						public static values(): native.Array<io.agora.rtc.gl.RendererCommon.ScalingType>;
						public static valueOf(param0: string): io.agora.rtc.gl.RendererCommon.ScalingType;
					}
					export class VideoLayoutMeasure {
						public static class: java.lang.Class<io.agora.rtc.gl.RendererCommon.VideoLayoutMeasure>;
						public measure(param0: number, param1: number, param2: number, param3: number): globalAndroid.graphics.Point;
						public constructor();
						public setScalingType(param0: io.agora.rtc.gl.RendererCommon.ScalingType, param1: io.agora.rtc.gl.RendererCommon.ScalingType): void;
						public setScalingType(param0: io.agora.rtc.gl.RendererCommon.ScalingType): void;
					}
				}
			}
		}
	}
}

declare module io {
	export module agora {
		export module rtc {
			export module gl {
				export class RgbaBuffer extends io.agora.rtc.gl.VideoFrame.Buffer {
					public static class: java.lang.Class<io.agora.rtc.gl.RgbaBuffer>;
					public getBuffer(): java.nio.ByteBuffer;
					public getHeight(): number;
					public getWidth(): number;
					public retain(): void;
					public toI420(): io.agora.rtc.gl.VideoFrame.I420Buffer;
					public release(): void;
					public constructor(param0: java.nio.ByteBuffer, param1: number, param2: number, param3: java.lang.Runnable);
					public cropAndScale(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number): io.agora.rtc.gl.VideoFrame.Buffer;
				}
			}
		}
	}
}

declare module io {
	export module agora {
		export module rtc {
			export module gl {
				export class TextureBufferImpl extends io.agora.rtc.gl.VideoFrame.TextureBuffer {
					public static class: java.lang.Class<io.agora.rtc.gl.TextureBufferImpl>;
					public getTransformMatrix(): globalAndroid.graphics.Matrix;
					public constructor(param0: number, param1: number, param2: io.agora.rtc.gl.VideoFrame.TextureBuffer.Type, param3: number, param4: globalAndroid.graphics.Matrix, param5: io.agora.rtc.mediaio.SurfaceTextureHelper, param6: java.lang.Runnable);
					public getHeight(): number;
					public getTextureId(): number;
					public getWidth(): number;
					public retain(): void;
					public getType(): io.agora.rtc.gl.VideoFrame.TextureBuffer.Type;
					public toI420(): io.agora.rtc.gl.VideoFrame.I420Buffer;
					public release(): void;
					public cropAndScale(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number): io.agora.rtc.gl.VideoFrame.Buffer;
				}
			}
		}
	}
}

declare module io {
	export module agora {
		export module rtc {
			export module gl {
				export class VideoFrame {
					public static class: java.lang.Class<io.agora.rtc.gl.VideoFrame>;
					public getRotation(): number;
					public constructor(param0: io.agora.rtc.gl.VideoFrame.Buffer, param1: number, param2: number);
					public getTimestampNs(): number;
					public getRotatedWidth(): number;
					public getRotatedHeight(): number;
					public retain(): void;
					public getBuffer(): io.agora.rtc.gl.VideoFrame.Buffer;
					public release(): void;
					public static cropAndScaleI420(param0: io.agora.rtc.gl.VideoFrame.I420Buffer, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number): io.agora.rtc.gl.VideoFrame.Buffer;
				}
				export module VideoFrame {
					export class Buffer {
						public static class: java.lang.Class<io.agora.rtc.gl.VideoFrame.Buffer>;
						/**
						 * Constructs a new instance of the io.agora.rtc.gl.VideoFrame$Buffer interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							getWidth(): number;
							getHeight(): number;
							toI420(): io.agora.rtc.gl.VideoFrame.I420Buffer;
							retain(): void;
							release(): void;
							cropAndScale(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number): io.agora.rtc.gl.VideoFrame.Buffer;
						});
						public constructor();
						public getWidth(): number;
						public retain(): void;
						public cropAndScale(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number): io.agora.rtc.gl.VideoFrame.Buffer;
						public getHeight(): number;
						public release(): void;
						public toI420(): io.agora.rtc.gl.VideoFrame.I420Buffer;
					}
					export class I420Buffer extends io.agora.rtc.gl.VideoFrame.Buffer {
						public static class: java.lang.Class<io.agora.rtc.gl.VideoFrame.I420Buffer>;
						/**
						 * Constructs a new instance of the io.agora.rtc.gl.VideoFrame$I420Buffer interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							getDataY(): java.nio.ByteBuffer;
							getDataU(): java.nio.ByteBuffer;
							getDataV(): java.nio.ByteBuffer;
							getStrideY(): number;
							getStrideU(): number;
							getStrideV(): number;
							getWidth(): number;
							getHeight(): number;
							toI420(): io.agora.rtc.gl.VideoFrame.I420Buffer;
							retain(): void;
							release(): void;
							cropAndScale(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number): io.agora.rtc.gl.VideoFrame.Buffer;
						});
						public constructor();
						public getStrideV(): number;
						public getWidth(): number;
						public getStrideU(): number;
						public retain(): void;
						public getDataV(): java.nio.ByteBuffer;
						public cropAndScale(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number): io.agora.rtc.gl.VideoFrame.Buffer;
						public getDataU(): java.nio.ByteBuffer;
						public getStrideY(): number;
						public getHeight(): number;
						public release(): void;
						public getDataY(): java.nio.ByteBuffer;
						public toI420(): io.agora.rtc.gl.VideoFrame.I420Buffer;
					}
					export class TextureBuffer extends io.agora.rtc.gl.VideoFrame.Buffer {
						public static class: java.lang.Class<io.agora.rtc.gl.VideoFrame.TextureBuffer>;
						/**
						 * Constructs a new instance of the io.agora.rtc.gl.VideoFrame$TextureBuffer interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							getType(): io.agora.rtc.gl.VideoFrame.TextureBuffer.Type;
							getTextureId(): number;
							getTransformMatrix(): globalAndroid.graphics.Matrix;
							getWidth(): number;
							getHeight(): number;
							toI420(): io.agora.rtc.gl.VideoFrame.I420Buffer;
							retain(): void;
							release(): void;
							cropAndScale(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number): io.agora.rtc.gl.VideoFrame.Buffer;
						});
						public constructor();
						public getWidth(): number;
						public retain(): void;
						public getType(): io.agora.rtc.gl.VideoFrame.TextureBuffer.Type;
						public cropAndScale(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number): io.agora.rtc.gl.VideoFrame.Buffer;
						public getTextureId(): number;
						public getHeight(): number;
						public release(): void;
						public toI420(): io.agora.rtc.gl.VideoFrame.I420Buffer;
						public getTransformMatrix(): globalAndroid.graphics.Matrix;
					}
					export module TextureBuffer {
						export class Type {
							public static class: java.lang.Class<io.agora.rtc.gl.VideoFrame.TextureBuffer.Type>;
							public static OES: io.agora.rtc.gl.VideoFrame.TextureBuffer.Type;
							public static RGB: io.agora.rtc.gl.VideoFrame.TextureBuffer.Type;
							public static values(): native.Array<io.agora.rtc.gl.VideoFrame.TextureBuffer.Type>;
							public getGlTarget(): number;
							public static valueOf(param0: string): io.agora.rtc.gl.VideoFrame.TextureBuffer.Type;
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module agora {
		export module rtc {
			export module gl {
				export class VideoFrameDrawer {
					public static class: java.lang.Class<io.agora.rtc.gl.VideoFrameDrawer>;
					public constructor();
					public drawFrame(param0: io.agora.rtc.gl.VideoFrame, param1: io.agora.rtc.gl.RendererCommon.GlDrawer, param2: globalAndroid.graphics.Matrix, param3: number, param4: number, param5: number, param6: number): void;
					public drawFrame(param0: io.agora.rtc.gl.VideoFrame, param1: io.agora.rtc.gl.RendererCommon.GlDrawer): void;
					public drawFrame(param0: io.agora.rtc.gl.VideoFrame, param1: io.agora.rtc.gl.RendererCommon.GlDrawer, param2: globalAndroid.graphics.Matrix): void;
					public release(): void;
				}
				export module VideoFrameDrawer {
					export class RGBAUploader {
						public static class: java.lang.Class<io.agora.rtc.gl.VideoFrameDrawer.RGBAUploader>;
						public uploadData(param0: java.nio.ByteBuffer, param1: number, param2: number): number;
						public getTextureId(): number;
						public release(): void;
					}
					export class YuvUploader {
						public static class: java.lang.Class<io.agora.rtc.gl.VideoFrameDrawer.YuvUploader>;
						public uploadFromBuffer(param0: io.agora.rtc.gl.VideoFrame.I420Buffer): native.Array<number>;
						public uploadYuvData(param0: number, param1: number, param2: native.Array<number>, param3: native.Array<java.nio.ByteBuffer>): native.Array<number>;
						public getYuvTextures(): native.Array<number>;
						public release(): void;
					}
				}
			}
		}
	}
}

declare module io {
	export module agora {
		export module rtc {
			export module gl {
				export class YuvConverter {
					public static class: java.lang.Class<io.agora.rtc.gl.YuvConverter>;
					public constructor();
					public convert(param0: io.agora.rtc.gl.VideoFrame.TextureBuffer): io.agora.rtc.gl.VideoFrame.I420Buffer;
					public release(): void;
				}
			}
		}
	}
}

declare module io {
	export module agora {
		export module rtc {
			export module internal {
				export class AudioRoutingController {
					public static class: java.lang.Class<io.agora.rtc.internal.AudioRoutingController>;
					public static UNSET: number;
					public static OFF: number;
					public static ON: number;
					public static CMD_SET_DEFAULT_ROUTING: number;
					public static CMD_FORCE_TO_SPEAKER: number;
					public static CMD_MUTE_VIDEO_LOCAL: number;
					public static CMD_MUTE_VIDEO_REMOTES: number;
					public static CMD_MUTE_VIDEO_ALL: number;
					public static CMD_START_BT_SCO: number;
					public static CMD_FORCE_BT_SCO_OFF: number;
					public static EVT_CHANNEL_PROFILE: number;
					public static EVT_ENGINE_ROLE_CHANGED: number;
					public static EVT_PHONE_STATE_CHANGED: number;
					public static EVT_USING_COMM_PARAMETERS: number;
					public static EVT_USING_NORM_PARAMETERS: number;
					public constructor(param0: globalAndroid.content.Context, param1: io.agora.rtc.internal.AudioRoutingListener);
					public clearListenerNativeHandle(): void;
					public sendEvent(param0: number, param1: number): void;
					public startMonitoring(param0: number, param1: number): void;
					public hasPermission(param0: globalAndroid.content.Context, param1: string): boolean;
					public initialize(): number;
					public stopMonitoring(): void;
					public uninitialize(): void;
				}
				export module AudioRoutingController {
					export class BTHeadsetBroadcastReceiver {
						public static class: java.lang.Class<io.agora.rtc.internal.AudioRoutingController.BTHeadsetBroadcastReceiver>;
						public onReceive(param0: globalAndroid.content.Context, param1: globalAndroid.content.Intent): void;
						public getRegistered(): boolean;
						public setRegistered(param0: boolean): void;
					}
					export abstract class ControllerBaseState extends io.agora.rtc.internal.AudioRoutingController.ControllerState {
						public static class: java.lang.Class<io.agora.rtc.internal.AudioRoutingController.ControllerBaseState>;
						public setState(param0: number): void;
						public getState(): number;
						public onEvent(param0: number, param1: number): void;
						public reset(): void;
					}
					export class ControllerErrorState extends io.agora.rtc.internal.AudioRoutingController.ControllerBaseState {
						public static class: java.lang.Class<io.agora.rtc.internal.AudioRoutingController.ControllerErrorState>;
						public setState(param0: number): void;
						public getState(): number;
						public onEvent(param0: number, param1: number): void;
						public reset(): void;
					}
					export class ControllerStartState extends io.agora.rtc.internal.AudioRoutingController.ControllerBaseState {
						public static class: java.lang.Class<io.agora.rtc.internal.AudioRoutingController.ControllerStartState>;
						public setState(param0: number): void;
						public getState(): number;
						public onEvent(param0: number, param1: number): void;
						public constructor(param0: io.agora.rtc.internal.AudioRoutingController);
						public reset(): void;
					}
					export class ControllerState {
						public static class: java.lang.Class<io.agora.rtc.internal.AudioRoutingController.ControllerState>;
						/**
						 * Constructs a new instance of the io.agora.rtc.internal.AudioRoutingController$ControllerState interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							setState(param0: number): void;
							getState(): number;
							onEvent(param0: number, param1: number): void;
							reset(): void;
						});
						public constructor();
						public setState(param0: number): void;
						public getState(): number;
						public onEvent(param0: number, param1: number): void;
						public reset(): void;
					}
					export class ControllerStopState extends io.agora.rtc.internal.AudioRoutingController.ControllerBaseState {
						public static class: java.lang.Class<io.agora.rtc.internal.AudioRoutingController.ControllerStopState>;
						public setState(param0: number): void;
						public getState(): number;
						public onEvent(param0: number, param1: number): void;
						public constructor(param0: io.agora.rtc.internal.AudioRoutingController);
						public reset(): void;
					}
					export class EventHandler {
						public static class: java.lang.Class<io.agora.rtc.internal.AudioRoutingController.EventHandler>;
						public constructor(param0: io.agora.rtc.internal.AudioRoutingController, param1: globalAndroid.os.Looper);
						public handleMessage(param0: globalAndroid.os.Message): void;
					}
					export class HeadsetBroadcastReceiver {
						public static class: java.lang.Class<io.agora.rtc.internal.AudioRoutingController.HeadsetBroadcastReceiver>;
						public onReceive(param0: globalAndroid.content.Context, param1: globalAndroid.content.Intent): void;
						public getRegistered(): boolean;
						public setRegistered(param0: boolean): void;
					}
				}
			}
		}
	}
}

declare module io {
	export module agora {
		export module rtc {
			export module internal {
				export class AudioRoutingListener {
					public static class: java.lang.Class<io.agora.rtc.internal.AudioRoutingListener>;
					/**
					 * Constructs a new instance of the io.agora.rtc.internal.AudioRoutingListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onAudioRoutingChanged(param0: number): void;
						onAudioRoutingError(param0: number): void;
						onAudioRoutingDestroyed(): void;
					});
					public constructor();
					public onAudioRoutingChanged(param0: number): void;
					public onAudioRoutingError(param0: number): void;
					public onAudioRoutingDestroyed(): void;
				}
			}
		}
	}
}

declare module io {
	export module agora {
		export module rtc {
			export module internal {
				export class AudioRoutingListenerImpl extends io.agora.rtc.internal.AudioRoutingListener {
					public static class: java.lang.Class<io.agora.rtc.internal.AudioRoutingListenerImpl>;
					public onAudioRoutingChanged(param0: number): void;
					public onAudioRoutingError(param0: number): void;
					public onAudioRoutingDestroyed(): void;
				}
			}
		}
	}
}

declare module io {
	export module agora {
		export module rtc {
			export module internal {
				export class CommonUtility {
					public static class: java.lang.Class<io.agora.rtc.internal.CommonUtility>;
					public getNetworkInfo(): native.Array<number>;
					public constructor(param0: globalAndroid.content.Context, param1: number);
					public getNumberOfCameras(): number;
					public onPowerChange(param0: number): void;
					public getBatteryLifePercent(): number;
					public monitorPowerChange(param0: boolean): void;
					public onPhoneStateChanged(param0: boolean, param1: number, param2: number): void;
					public getNetworkType(): number;
					public static getLocalHost(): string;
					public destroy(): void;
					public notifyNetworkChange(): void;
					public isSpeakerphoneEnabled(param0: globalAndroid.content.Context): number;
					public static getRandomUUID(): string;
					public static canGetDefaultContext(): boolean;
					public static getLocalHostList(): native.Array<string>;
					public getFrontCameraIndex(): number;
					public updateVideoSourceType(param0: number): void;
					public monitorConnectionEvent(param0: boolean): void;
					public getAndroidVersion(): number;
					public static getContextInfo(param0: globalAndroid.content.Context): native.Array<number>;
					public isSimulator(): number;
					public updateLocalVideoEnableState(param0: boolean): void;
				}
				export module CommonUtility {
					export class AgoraPhoneStateListener {
						public static class: java.lang.Class<io.agora.rtc.internal.CommonUtility.AgoraPhoneStateListener>;
						public getLevel(): number;
						public onCallStateChanged(param0: number, param1: string): void;
						public onSignalStrengthsChanged(param0: globalAndroid.telephony.SignalStrength): void;
						public getRssi(): number;
						public constructor(param0: io.agora.rtc.internal.CommonUtility);
						public getAsuLevel(): number;
					}
					export class MobileType {
						public static class: java.lang.Class<io.agora.rtc.internal.CommonUtility.MobileType>;
						public static Unknown: number;
						public static Gsm: number;
						public static Cdma: number;
						public static Wcdma: number;
						public static Lte: number;
						public constructor();
					}
				}
			}
		}
	}
}

declare module io {
	export module agora {
		export module rtc {
			export module internal {
				export class ConnectionChangeBroadcastReceiver {
					public static class: java.lang.Class<io.agora.rtc.internal.ConnectionChangeBroadcastReceiver>;
					public constructor(param0: io.agora.rtc.internal.CommonUtility);
					public onReceive(param0: globalAndroid.content.Context, param1: globalAndroid.content.Intent): void;
				}
			}
		}
	}
}

declare module io {
	export module agora {
		export module rtc {
			export module internal {
				export class Connectivity {
					public static class: java.lang.Class<io.agora.rtc.internal.Connectivity>;
					public static Network_UNKNOWN: number;
					public static Network_DISCONNECTED: number;
					public static Network_LAN: number;
					public static Network_WIFI: number;
					public static Network_2G: number;
					public static Network_3G: number;
					public static Network_4G: number;
					public static Network_SubType_WIFI_2P4G: number;
					public static Network_SubType_WIFI_5G: number;
					public static isConnectedFast(param0: globalAndroid.content.Context): boolean;
					public static isConnectionFast(param0: number, param1: number): boolean;
					public static getNetworkType(param0: globalAndroid.content.Context): number;
					public static isConnected(param0: globalAndroid.content.Context): boolean;
					public static getNetworkType(param0: globalAndroid.net.NetworkInfo): number;
					public static isConnectedMobile(param0: globalAndroid.content.Context): boolean;
					public static getDnsList(): java.util.ArrayList<string>;
					public static isConnectedWifi(param0: globalAndroid.content.Context): boolean;
					public static getNetworkInfo(param0: globalAndroid.content.Context): globalAndroid.net.NetworkInfo;
				}
			}
		}
	}
}

declare module io {
	export module agora {
		export module rtc {
			export module internal {
				export class DeviceUtils {
					public static class: java.lang.Class<io.agora.rtc.internal.DeviceUtils>;
					public static DEVICE_INFO_UNKNOWN: number;
					public static selectFrontCamera(): number;
					public static getRecommendedEncoderType(): number;
					public static getNumberOfCPUCores(): number;
					public static getCpuABI(): string;
					public static getNumberOfCameras(): number;
					public static getCPUMaxFreqKHz(): number;
					public constructor();
					public static getDeviceInfo(): string;
					public static getDeviceId(): string;
					public static getSystemInfo(): string;
					public static getCpuName(): string;
				}
			}
		}
	}
}

declare module io {
	export module agora {
		export module rtc {
			export module internal {
				export class EncryptionConfig {
					public static class: java.lang.Class<io.agora.rtc.internal.EncryptionConfig>;
					public encryptionMode: io.agora.rtc.internal.EncryptionConfig.EncryptionMode;
					public encryptionKey: string;
					public constructor();
				}
				export module EncryptionConfig {
					export class EncryptionMode {
						public static class: java.lang.Class<io.agora.rtc.internal.EncryptionConfig.EncryptionMode>;
						public static AES_128_XTS: io.agora.rtc.internal.EncryptionConfig.EncryptionMode;
						public static AES_128_ECB: io.agora.rtc.internal.EncryptionConfig.EncryptionMode;
						public static AES_256_XTS: io.agora.rtc.internal.EncryptionConfig.EncryptionMode;
						public static SM4_128_ECB: io.agora.rtc.internal.EncryptionConfig.EncryptionMode;
						public static MODE_END: io.agora.rtc.internal.EncryptionConfig.EncryptionMode;
						public static values(): native.Array<io.agora.rtc.internal.EncryptionConfig.EncryptionMode>;
						public static valueOf(param0: string): io.agora.rtc.internal.EncryptionConfig.EncryptionMode;
						public getValue(): number;
					}
				}
			}
		}
	}
}

declare module io {
	export module agora {
		export module rtc {
			export module internal {
				export class IMarshallable {
					public static class: java.lang.Class<io.agora.rtc.internal.IMarshallable>;
					/**
					 * Constructs a new instance of the io.agora.rtc.internal.IMarshallable interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						marshall(): native.Array<number>;
						marshall(param0: java.nio.ByteBuffer): void;
						unmarshall(param0: native.Array<number>): void;
						unmarshall(param0: java.nio.ByteBuffer): void;
					});
					public constructor();
					public marshall(param0: java.nio.ByteBuffer): void;
					public unmarshall(param0: native.Array<number>): void;
					public unmarshall(param0: java.nio.ByteBuffer): void;
					public marshall(): native.Array<number>;
				}
			}
		}
	}
}

declare module io {
	export module agora {
		export module rtc {
			export module internal {
				export class LastmileProbeConfig {
					public static class: java.lang.Class<io.agora.rtc.internal.LastmileProbeConfig>;
					public probeUplink: boolean;
					public probeDownlink: boolean;
					public expectedUplinkBitrate: number;
					public expectedDownlinkBitrate: number;
					public constructor();
				}
			}
		}
	}
}

declare module io {
	export module agora {
		export module rtc {
			export module internal {
				export class Logging {
					public static class: java.lang.Class<io.agora.rtc.internal.Logging>;
					public static d(param0: string): void;
					public static w(param0: string): void;
					public static e(param0: string): void;
					public static i(param0: string, param1: string): void;
					public static i(param0: string): void;
					public static e(param0: string, param1: string, param2: java.lang.Throwable): void;
					public constructor();
					public static e(param0: string, param1: string): void;
					public static log(param0: number, param1: string, param2: string): void;
					public static d(param0: string, param1: string): void;
					public static w(param0: string, param1: string): void;
				}
			}
		}
	}
}

declare module io {
	export module agora {
		export module rtc {
			export module internal {
				export class Marshallable {
					public static class: java.lang.Class<io.agora.rtc.internal.Marshallable>;
					public static PROTO_PACKET_SIZE: number;
					public popByte(): number;
					public popIntArray(): native.Array<number>;
					public pushBool(param0: java.lang.Boolean): void;
					public pushInt64(param0: number): void;
					public unmarshall(param0: java.nio.ByteBuffer): void;
					public popInt64(): number;
					public popBytes32(): native.Array<number>;
					public pushBytes32(param0: native.Array<number>): void;
					public popBool(): java.lang.Boolean;
					public popInt(): number;
					public pushBytes(param0: native.Array<number>): void;
					public marshall(param0: java.nio.ByteBuffer): void;
					public constructor();
					public clear(): void;
					public pushShort(param0: number): void;
					public pushShortArray(param0: native.Array<number>): void;
					public popString16(): string;
					public pushStringArray(param0: java.util.ArrayList<string>): void;
					public popAll(): native.Array<number>;
					public getBuffer(): java.nio.ByteBuffer;
					public pushIntArray(param0: native.Array<number>): void;
					public popShortArray(): native.Array<number>;
					public pushString16(param0: string): void;
					public popBytes(): native.Array<number>;
					public popShort(): number;
					public unmarshall(param0: native.Array<number>): void;
					public pushIntArray(param0: native.Array<java.lang.Integer>): void;
					public popString16UTF8(): string;
					public marshall(): native.Array<number>;
					public pushDouble(param0: number): void;
					public pushInt(param0: number): void;
					public pushByte(param0: number): void;
				}
			}
		}
	}
}

declare module io {
	export module agora {
		export module rtc {
			export module internal {
				export class PowerConnectionReceiver {
					public static class: java.lang.Class<io.agora.rtc.internal.PowerConnectionReceiver>;
					public constructor(param0: io.agora.rtc.internal.CommonUtility);
					public onReceive(param0: globalAndroid.content.Context, param1: globalAndroid.content.Intent): void;
				}
			}
		}
	}
}

declare module io {
	export module agora {
		export module rtc {
			export module internal {
				export class RtcChannelImpl extends io.agora.rtc.RtcChannel {
					public static class: java.lang.Class<io.agora.rtc.internal.RtcChannelImpl>;
					public getCallId(): string;
					public muteRemoteAudioStream(param0: number, param1: boolean): number;
					public destroy(): number;
					public setRemoteUserPriority(param0: number, param1: number): number;
					public unpublish(): number;
					public publish(): number;
					public getConnectionState(): number;
					public setRemoteRenderMode(param0: number, param1: number, param2: number): number;
					public setRemoteVoicePosition(param0: number, param1: number, param2: number): number;
					public constructor();
					public removePublishStreamUrl(param0: string): number;
					public leaveChannel(): number;
					/** @deprecated */
					public setEncryptionMode(param0: string): number;
					public setRemoteVideoRenderer(param0: number, param1: io.agora.rtc.mediaio.IVideoSink): number;
					public renewToken(param0: string): number;
					public enableEncryption(param0: boolean, param1: io.agora.rtc.internal.EncryptionConfig): number;
					public stopChannelMediaRelay(): number;
					/** @deprecated */
					public setEncryptionSecret(param0: string): number;
					public setDefaultMuteAllRemoteAudioStreams(param0: boolean): number;
					public updateChannelMediaRelay(param0: io.agora.rtc.video.ChannelMediaRelayConfiguration): number;
					public muteRemoteVideoStream(param0: number, param1: boolean): number;
					public setLiveTranscoding(param0: io.agora.rtc.live.LiveTranscoding): number;
					public joinChannel(param0: string, param1: string, param2: number, param3: io.agora.rtc.models.ChannelMediaOptions): number;
					public muteAllRemoteAudioStreams(param0: boolean): number;
					public adjustUserPlaybackSignalVolume(param0: number, param1: number): number;
					public getNativeHandle(): number;
					public setClientRole(param0: number): number;
					public muteAllRemoteVideoStreams(param0: boolean): number;
					public channelId(): string;
					public isInitialized(): boolean;
					public createDataStream(param0: boolean, param1: boolean): number;
					public setDefaultMuteAllRemoteVideoStreams(param0: boolean): number;
					public sendStreamMessage(param0: number, param1: native.Array<number>): number;
					public registerMediaMetadataObserver(param0: io.agora.rtc.IMetadataObserver, param1: number): number;
					public setRemoteVideoStreamType(param0: number, param1: number): number;
					public addInjectStreamUrl(param0: string, param1: io.agora.rtc.live.LiveInjectStreamConfig): number;
					public setRemoteDefaultVideoStreamType(param0: number): number;
					public removeInjectStreamUrl(param0: string): number;
					public hasJoined(): boolean;
					public addPublishStreamUrl(param0: string, param1: boolean): number;
					public joinChannelWithUserAccount(param0: string, param1: string, param2: io.agora.rtc.models.ChannelMediaOptions): number;
					public setEncryptionMode(param0: string): number;
					public setEncryptionSecret(param0: string): number;
					public initialize(param0: io.agora.rtc.internal.RtcEngineImpl, param1: number): number;
					public startChannelMediaRelay(param0: io.agora.rtc.video.ChannelMediaRelayConfiguration): number;
				}
			}
		}
	}
}

declare module io {
	export module agora {
		export module rtc {
			export module internal {
				export class RtcEngineEvent {
					public static class: java.lang.Class<io.agora.rtc.internal.RtcEngineEvent>;
					public constructor();
				}
				export module RtcEngineEvent {
					export class EvtType {
						public static class: java.lang.Class<io.agora.rtc.internal.RtcEngineEvent.EvtType>;
						public static EVT_NATIVE_LOG: number;
						public static EVT_ERROR: number;
						public static EVT_WARNING: number;
						public static EVT_MEDIA_ENGINE_LOAD_SUCCESS: number;
						public static EVT_MEDIA_ENGINE_START_CAMERA_SUCCESS: number;
						public static EVT_MEDIA_ENGINE_START_CALL_SUCCESS: number;
						public static EVT_VIDEO_STOPPED: number;
						public static EVT_TRANSPORT_QUALITY: number;
						public static EVT_AUDIO_QUALITY: number;
						public static EVT_MEDIA_ENGINE_EVENT: number;
						public static EVT_AUDIO_DEVICE_STATE_CHANGED: number;
						public static EVT_API_CALL_EXECUTED: number;
						public static EVT_VIDEO_DEVICE_STATE_CHANGED: number;
						public static EVT_REQUEST_TOKEN: number;
						public static EVT_CLIENT_ROLE_CHANGED: number;
						public static EVT_PUBLISH_URL: number;
						public static EVT_UNPUBLISH_URL: number;
						public static EVT_LIVE_TRANSCODING: number;
						public static EVT_JOIN_PUBLISHER: number;
						public static EVT_JOIN_PUBILSHER_RESPONSE: number;
						public static EVT_STOP_PUBLISHER: number;
						public static EVT_STREAM_INJECTED_STATUS: number;
						public static EVT_PRIVILEGE_WILL_EXPIRE: number;
						public static EVT_LOCAL_VIDEO_STATE_CHANGED: number;
						public static EVT_RTMP_STREAMING_STATE: number;
						public static EVT_STREAM_EVENT: number;
						public static EVT_LOOKUP_CHANNEL_SUCCESS: number;
						public static EVT_OPEN_CHANNEL_SUCCESS: number;
						public static EVT_LEAVE_CHANNEL: number;
						public static EVT_NETWORK_QUALITY: number;
						public static EVT_USER_OFFLINE: number;
						public static EVT_RTC_STATS: number;
						public static EVT_USER_JOINED: number;
						public static EVT_USER_MUTE_AUDIO: number;
						public static EVT_USER_MUTE_VIDEO: number;
						public static EVT_USER_ENABLE_VIDEO: number;
						public static EVT_LASTMILE_QUALITY: number;
						public static AUDIO_EFFECT_FINISHED: number;
						public static EVT_USER_ENABLE_LOCAL_VIDEO: number;
						public static EVT_LASTMILE_PROBE_RESULT: number;
						public static EVT_RECAP_INDICATION: number;
						public static EVT_AUDIO_VOLUME_INDICATION: number;
						public static EVT_FIRST_REMOTE_VIDEO_FRAME: number;
						public static EVT_LOCAL_VIDEO_STAT: number;
						public static EVT_REMOTE_VIDEO_STAT: number;
						public static EVT_FIRST_LOCAL_VIDEO_FRAME: number;
						public static EVT_FIRST_LOCAL_VIDEO_FRAME_PUBLISH: number;
						public static EVT_FIRST_REMOTE_VIDEO_DECODED: number;
						public static EVT_CONNECTION_LOST: number;
						public static EVT_STREAM_MESSAGE: number;
						public static EVT_CONNECTION_INTERRUPTED: number;
						public static QUERY_RECORDING_SERVICE_STATUS: number;
						public static EVT_STREAM_MESSAGE_ERROR: number;
						public static EVT_VIDEO_SIZE_CHANGED: number;
						public static FIRST_LOCAL_AUDIO_FRAME: number;
						public static FIRST_REMOTE_AUDIO_FRAME: number;
						public static EVT_ACTIVE_SPEAKER: number;
						public static EVT_CONNECTION_BANNED: number;
						public static EVT_CAMERA_FOCUS_AREA_CHANGED: number;
						public static EVT_LOCAL_PUBLISH_FALLBACK_TO_AUDIO_ONLY: number;
						public static EVT_REMOTE_SUBSCRIBE_FALLBACK_TO_AUDIO_ONLY: number;
						public static EVT_USER_TRANSPORT_STAT: number;
						public static EVT_CONNECTION_STATE_CHANGED: number;
						public static EVT_CAMERA_EXPOSURE_AREA_CHANGED: number;
						public static EVT_REMOTE_AUDIO_STAT: number;
						public static EVT_NETWORK_TYPE_CHANGED: number;
						public static EVT_AUDIO_ROUTING_CHANGED: number;
						public static EVT_FIRST_REMOTE_AUDIO_DECODED: number;
						public static EVT_LOCAL_USER_REGISTERED: number;
						public static EVT_USER_INFO_UPDATED: number;
						public static EVT_REMOTE_VIDEO_STATE_CHANGED_EXT: number;
						public static EVT_CROSS_CHANNEL_STATE: number;
						public static EVT_CROSS_CHANNEL_EVENT: number;
						public static EVT_REMOTE_AUDIO_STATE_CHANGED: number;
						public static EVT_LOCAL_AUDIO_STAT: number;
						public static EVT_LOCAL_AUDIO_STATE_CHANGED: number;
						public static EVT_FACE_DETECT_VALUE: number;
						public static FIRST_LOCAL_AUDIO_FRAME_PUBLISHED: number;
						public static EVT_PUBLISH_AUDIO_STATE_CHANGED: number;
						public static EVT_PUBLISH_VIDEO_STATE_CHANGED: number;
						public static EVT_SUBSCRIBE_AUDIO_STATE_CHANGED: number;
						public static EVT_SUBSCRIBE_VIDEO_STATE_CHANGED: number;
						public constructor();
					}
				}
			}
		}
	}
}

declare module io {
	export module agora {
		export module rtc {
			export module internal {
				export class RtcEngineImpl extends io.agora.rtc.RtcEngineEx implements io.agora.rtc.IAudioEffectManager {
					public static class: java.lang.Class<io.agora.rtc.internal.RtcEngineImpl>;
					public static VIDEO_SOURCE_TYPE_NULL: number;
					public static VIDEO_SOURCE_TYPE_DEFAULT: number;
					public static VIDEO_SOURCE_TYPE_CUSTOMIZED: number;
					public muteRemoteAudioStream(param0: number, param1: boolean): number;
					public setRecordingAudioFrameParameters(param0: number, param1: number, param2: number, param3: number): number;
					public enableRecap(param0: number): number;
					public isCameraFocusSupported(): boolean;
					public constructor();
					/** @deprecated */
					public setEncryptionMode(param0: string): number;
					public setBeautyEffectOptions(param0: boolean, param1: io.agora.rtc.video.BeautyOptions): number;
					/** @deprecated */
					public setPreferHeadset(param0: boolean): void;
					public getAudioMixingPublishVolume(): number;
					public enableTransportQualityIndication(param0: boolean): number;
					/** @deprecated */
					public pauseAudio(): number;
					public setLocalVoicePitch(param0: number): number;
					public reinitialize(param0: globalAndroid.content.Context, param1: string, param2: io.agora.rtc.IRtcEngineEventHandler): void;
					public muteAllRemoteAudioStreams(param0: boolean): number;
					public disableAudio(): number;
					public removeRemoteVideoTrack(param0: number): number;
					public startAudioMixing(param0: string, param1: boolean, param2: boolean, param3: number): number;
					public setDefaultMuteAllRemoteVideoStreams(param0: boolean): number;
					public stopLastmileProbeTest(): number;
					public makeQualityReportUrl(param0: string, param1: number, param2: number, param3: number): string;
					public setExternalVideoSource(param0: boolean, param1: boolean, param2: boolean): void;
					public stopPreview(): number;
					public stopAudioMixing(): number;
					public setLocalVideoRenderer(param0: io.agora.rtc.mediaio.IVideoSink): number;
					public setCameraTorchOn(param0: boolean): number;
					public unloadEffect(param0: number): number;
					public stopAudioRecording(): number;
					/** @deprecated */
					public enableHighPerfWifiMode(param0: boolean): boolean;
					public enableDualStreamMode(param0: boolean): number;
					public setCameraExposurePosition(param0: number, param1: number): number;
					public isCameraZoomSupported(): boolean;
					public getCallId(): string;
					public setRemoteRenderMode(param0: number, param1: number): number;
					public setLocalPublishFallbackOption(param0: number): number;
					public clearVideoWatermarks(): number;
					/** @deprecated */
					public setHighQualityAudioParameters(param0: boolean, param1: boolean, param2: boolean): number;
					public stopEffect(param0: number): number;
					public enableVideo(): number;
					public pushExternalAudioFrame(param0: native.Array<number>, param1: number): number;
					public updateRtcStats(param0: io.agora.rtc.internal.RtcEngineMessage.PMediaResRtcStats): void;
					public getUserInfoByUserAccount(param0: string, param1: io.agora.rtc.models.UserInfo): number;
					public enableWebSdkInteroperability(param0: boolean): number;
					public renewToken(param0: string): number;
					public static nativeGetChatEngineVersion(): string;
					public setDefaultAudioRoutetoSpeakerphone(param0: boolean): number;
					public enableEncryption(param0: boolean, param1: io.agora.rtc.internal.EncryptionConfig): number;
					/** @deprecated */
					public resumeAudio(): number;
					public muteRemoteVideoStream(param0: number, param1: boolean): number;
					public enableAudio(): number;
					public addVideoWatermark(param0: string, param1: io.agora.rtc.video.WatermarkOptions): number;
					public static getLocalHost(): string;
					public startAudioRecording(param0: string, param1: number): number;
					public enableInEarMonitoring(param0: boolean): number;
					/** @deprecated */
					public playEffect(param0: number, param1: string, param2: number, param3: number, param4: number, param5: number): number;
					public muteLocalVideoStream(param0: boolean): number;
					public setEncryptionSecret(param0: string): number;
					public startEchoTest(): number;
					public isCameraAutoFocusFaceModeSupported(): boolean;
					public startPreview(): number;
					/** @deprecated */
					public addVideoWatermark(param0: io.agora.rtc.video.AgoraImage): number;
					public disableVideo(): number;
					public preloadEffect(param0: number, param1: string): number;
					public joinChannelWithUserAccount(param0: string, param1: string, param2: string): number;
					public setVideoEncoderConfiguration(param0: io.agora.rtc.video.VideoEncoderConfiguration): number;
					public setCameraCapturerConfiguration(param0: io.agora.rtc.video.CameraCapturerConfiguration): number;
					public onRtcChannelLeaveChannel(): void;
					public registerAudioFrameObserver(param0: io.agora.rtc.IAudioFrameObserver): number;
					public getRtcStats(): io.agora.rtc.IRtcEngineEventHandler.RtcStats;
					public resumeAudioMixing(): number;
					/** @deprecated */
					public useExternalAudioDevice(): number;
					public stopAllRemoteVideo(): number;
					public getConnectionState(): number;
					public setAppType(param0: number): number;
					public updateSharedContext(param0: javax.microedition.khronos.egl.EGLContext): number;
					public getUserInfoByUid(param0: number, param1: io.agora.rtc.models.UserInfo): number;
					public setHighQualityAudioParameters(param0: boolean, param1: boolean, param2: boolean): number;
					public getAudioEffectManager(): io.agora.rtc.IAudioEffectManager;
					public pauseAudio(): number;
					public playRecap(): number;
					public updateChannelMediaRelay(param0: io.agora.rtc.video.ChannelMediaRelayConfiguration): number;
					public setLocalVoiceReverb(param0: number, param1: number): number;
					public enableAudioVolumeIndication(param0: number, param1: number, param2: boolean): number;
					public adjustPlaybackSignalVolume(param0: number): number;
					public getAudioMixingPlayoutVolume(): number;
					public adjustAudioMixingVolume(param0: number): number;
					public setRemoteDefaultVideoStreamType(param0: number): number;
					public getAudioMixingDuration(): number;
					public setChannelProfile(param0: number): number;
					public removeHandler(param0: io.agora.rtc.IRtcEngineEventHandler): void;
					public setExternalAudioSink(param0: boolean, param1: number, param2: number): number;
					public setEncryptionMode(param0: string): number;
					/** @deprecated */
					public setLocalRenderMode(param0: number): number;
					public resumeAudio(): number;
					public setupRemoteVideo(param0: io.agora.rtc.video.VideoCanvas): number;
					public getProfile(): string;
					/** @deprecated */
					public setVideoProfile(param0: number, param1: number, param2: number, param3: number): number;
					public setLogFileSize(param0: number): number;
					public stopDumpVideoReceiveTrack(): number;
					public handleChannelEvent(param0: number, param1: native.Array<number>, param2: io.agora.rtc.IRtcChannelEventHandler, param3: io.agora.rtc.internal.RtcChannelImpl): void;
					/** @deprecated */
					public setVideoProfile(param0: number, param1: boolean): number;
					public rate(param0: string, param1: number, param2: string): number;
					public onEvent(param0: number, param1: native.Array<number>): void;
					public setAudioProfile(param0: number, param1: number): number;
					public setAudioMixingPitch(param0: number): number;
					public getNativeHandle(): number;
					public enableRemoteVideo(param0: boolean, param1: number): number;
					public setLocalVoiceReverbPreset(param0: number): number;
					public addInjectStreamUrl(param0: string, param1: io.agora.rtc.live.LiveInjectStreamConfig): number;
					public startLastmileProbeTest(param0: io.agora.rtc.internal.LastmileProbeConfig): number;
					public isCameraTorchSupported(): boolean;
					public registerLocalUserAccount(param0: string, param1: string): number;
					/** @deprecated */
					public startAudioRecording(param0: string, param1: number): number;
					public static nativeGetErrorDescription(param0: number): string;
					/** @deprecated */
					public setRemoteRenderMode(param0: number, param1: number): number;
					public finalize(): void;
					public setPlaybackAudioFrameParameters(param0: number, param1: number, param2: number, param3: number): number;
					public getParameters(param0: string): string;
					public enableHighPerfWifiMode(param0: boolean): boolean;
					public getParameter(param0: string, param1: string): string;
					public setRemoteVideoRenderer(param0: number, param1: io.agora.rtc.mediaio.IVideoSink): number;
					public setVideoProfile(param0: number, param1: number, param2: number, param3: number): number;
					public addHandler(param0: io.agora.rtc.IRtcEngineEventHandler): void;
					public setCameraFocusPositionInPreview(param0: number, param1: number): number;
					/** @deprecated */
					public enableWebSdkInteroperability(param0: boolean): number;
					public setCameraAutoFocusFaceModeEnabled(param0: boolean): number;
					public enableSoundPositionIndication(param0: boolean): number;
					public setRemoteSubscribeFallbackOption(param0: number): number;
					public setVideoProfile(param0: number, param1: boolean): number;
					public adjustUserPlaybackSignalVolume(param0: number, param1: number): number;
					public setLocalVoiceEqualization(param0: number, param1: number): number;
					public onRtcChannelJoinChannel(): void;
					public pauseAllEffects(): number;
					public sendCustomReportMessage(param0: string, param1: string, param2: string, param3: string, param4: number): number;
					public addVideoWatermark(param0: io.agora.rtc.video.AgoraImage): number;
					public setAudioMixingPosition(param0: number): number;
					/** @deprecated */
					public setVideoQualityParameters(param0: boolean): number;
					public getAudioMixingCurrentPosition(): number;
					/** @deprecated */
					public enableAudioQualityIndication(param0: boolean): number;
					public getActivityManager(param0: globalAndroid.content.Context): globalAndroid.app.ActivityManager;
					public createRtcChannel(param0: string): io.agora.rtc.RtcChannel;
					/** @deprecated */
					public monitorHeadsetEvent(param0: boolean): void;
					public doDestroy(): void;
					public enableLocalVideo(param0: boolean): number;
					public adjustAudioMixingPublishVolume(param0: number): number;
					public startAudioRecording(param0: string, param1: number, param2: number): number;
					public static loadNativeLibrary(): void;
					public useExternalAudioDevice(): number;
					public pauseAudioMixing(): number;
					public leaveChannel(): number;
					public handleEvent(param0: number, param1: native.Array<number>, param2: io.agora.rtc.IRtcEngineEventHandler): void;
					public disableLastmileTest(): number;
					public stopEchoTest(): number;
					public pauseEffect(param0: number): number;
					public setVolumeOfEffect(param0: number, param1: number): number;
					public resumeEffect(param0: number): number;
					public adjustRecordingSignalVolume(param0: number): number;
					public setLiveTranscoding(param0: io.agora.rtc.live.LiveTranscoding): number;
					public enableLocalAudio(param0: boolean): number;
					public setEnableSpeakerphone(param0: boolean): number;
					public setInEarMonitoringVolume(param0: number): number;
					public setEffectsVolume(param0: number): number;
					public sendStreamMessage(param0: number, param1: native.Array<number>): number;
					public pushExternalVideoFrame(param0: io.agora.rtc.video.AgoraVideoFrame): boolean;
					public isSpeakerphoneEnabled(): boolean;
					public setTextureId(param0: number, param1: globalAndroid.opengl.EGLContext, param2: number, param3: number, param4: number): number;
					public constructor(param0: io.agora.rtc.RtcEngineConfig);
					public muteLocalAudioStream(param0: boolean): number;
					public removeInjectStreamUrl(param0: string): number;
					public setMixedAudioFrameParameters(param0: number, param1: number): number;
					public setVideoSource(param0: io.agora.rtc.mediaio.IVideoSource): number;
					public setRemoteUserPriority(param0: number, param1: number): number;
					public setParameters(param0: string): number;
					public stopAllEffects(): number;
					public setTextureIdWithMatrix(param0: number, param1: javax.microedition.khronos.egl.EGLContext, param2: number, param3: number, param4: number, param5: number, param6: native.Array<number>): number;
					public setApiCallMode(param0: number): number;
					public joinChannel(param0: string, param1: string, param2: string, param3: number): number;
					public setRemoteRenderMode(param0: number, param1: number, param2: number): number;
					public monitorAudioRouteChange(param0: boolean): number;
					public removePublishStreamUrl(param0: string): number;
					public setLocalVoiceChanger(param0: number): number;
					public setLocalRenderMode(param0: number, param1: number): number;
					public setTextureIdWithMatrix(param0: number, param1: globalAndroid.opengl.EGLContext, param2: number, param3: number, param4: number, param5: number, param6: native.Array<number>): number;
					public getContext(): globalAndroid.content.Context;
					public setTextureId(param0: number, param1: javax.microedition.khronos.egl.EGLContext, param2: number, param3: number, param4: number): number;
					public stopChannelMediaRelay(): number;
					public setDefaultMuteAllRemoteAudioStreams(param0: boolean): number;
					public setLocalVideoMirrorMode(param0: number): number;
					/** @deprecated */
					public monitorBluetoothHeadsetEvent(param0: boolean): void;
					public setClientRole(param0: number): number;
					public startEchoTest(param0: number): number;
					public constructor(param0: globalAndroid.content.Context, param1: string, param2: io.agora.rtc.IRtcEngineEventHandler);
					public muteAllRemoteVideoStreams(param0: boolean): number;
					public createDataStream(param0: boolean, param1: boolean): number;
					public playEffect(param0: number, param1: string, param2: number, param3: number, param4: number, param5: number, param6: boolean): number;
					public setLocalRenderMode(param0: number): number;
					public registerMediaMetadataObserver(param0: io.agora.rtc.IMetadataObserver, param1: number): number;
					public setRemoteVideoStreamType(param0: number, param1: number): number;
					public stopRemoteVideo(param0: number): number;
					public setVideoQualityParameters(param0: boolean): number;
					public setProfile(param0: string, param1: boolean): number;
					public enableFaceDetection(param0: boolean): number;
					public adjustAudioMixingPlayoutVolume(param0: number): number;
					/** @deprecated */
					public setLocalVideoMirrorMode(param0: number): number;
					public setupLocalVideo(param0: io.agora.rtc.video.VideoCanvas): number;
					public static nativeGetSdkVersion(): string;
					public pullPlaybackAudioFrame(param0: native.Array<number>, param1: number): number;
					public complain(param0: string, param1: string): number;
					public static checkIfInUIThread(param0: string): boolean;
					public startDumpVideoReceiveTrack(param0: number, param1: string): number;
					public setExternalAudioSource(param0: boolean, param1: number, param2: number): number;
					public onChannelEvent(param0: string, param1: number, param2: native.Array<number>): void;
					public enableLastmileTest(): number;
					public updateSharedContext(param0: globalAndroid.opengl.EGLContext): number;
					public getEffectsVolume(): number;
					public getCameraMaxZoomFactor(): number;
					public setLogFilter(param0: number): number;
					public setRemoteVoicePosition(param0: number, param1: number, param2: number): number;
					public switchChannel(param0: string, param1: string): number;
					public setCameraZoomFactor(param0: number): number;
					public destroyRtcChannel(param0: string): number;
					public switchCamera(): number;
					public static initializeNativeLibs(): boolean;
					public setLogFile(param0: string): number;
					/** @deprecated */
					public setEncryptionSecret(param0: string): number;
					/** @deprecated */
					public startEchoTest(): number;
					public isCameraExposurePositionSupported(): boolean;
					public isTextureEncodeSupported(): boolean;
					public resumeAllEffects(): number;
					public addPublishStreamUrl(param0: string, param1: boolean): number;
					public getAudioManager(param0: globalAndroid.content.Context): globalAndroid.media.AudioManager;
					public startChannelMediaRelay(param0: io.agora.rtc.video.ChannelMediaRelayConfiguration): number;
				}
			}
		}
	}
}

declare module io {
	export module agora {
		export module rtc {
			export module internal {
				export class RtcEngineMessage {
					public static class: java.lang.Class<io.agora.rtc.internal.RtcEngineMessage>;
					public static AGORA_UI_SERVER: number;
					public constructor();
				}
				export module RtcEngineMessage {
					export class MediaAppContext extends io.agora.rtc.internal.Marshallable {
						public static class: java.lang.Class<io.agora.rtc.internal.RtcEngineMessage.MediaAppContext>;
						public constructor();
						public unmarshall(param0: java.nio.ByteBuffer): void;
						public marshall(param0: java.nio.ByteBuffer): void;
						public marshall(): native.Array<number>;
						public unmarshall(param0: native.Array<number>): void;
					}
					export class MediaNetworkInfo extends io.agora.rtc.internal.Marshallable {
						public static class: java.lang.Class<io.agora.rtc.internal.RtcEngineMessage.MediaNetworkInfo>;
						public constructor();
						public unmarshall(param0: java.nio.ByteBuffer): void;
						public marshall(param0: java.nio.ByteBuffer): void;
						public marshall(param0: io.agora.rtc.internal.Marshallable): void;
						public marshall(): native.Array<number>;
						public unmarshall(param0: native.Array<number>): void;
					}
					export class MediaResSetupTime extends io.agora.rtc.internal.Marshallable {
						public static class: java.lang.Class<io.agora.rtc.internal.RtcEngineMessage.MediaResSetupTime>;
						public constructor();
						public unmarshall(param0: java.nio.ByteBuffer): void;
						public marshall(param0: java.nio.ByteBuffer): void;
						public marshall(): native.Array<number>;
						public unmarshall(param0: native.Array<number>): void;
					}
					export class PActiveSpeaker extends io.agora.rtc.internal.Marshallable {
						public static class: java.lang.Class<io.agora.rtc.internal.RtcEngineMessage.PActiveSpeaker>;
						public uid: number;
						public constructor();
						public unmarshall(param0: java.nio.ByteBuffer): void;
						public marshall(param0: java.nio.ByteBuffer): void;
						public marshall(): native.Array<number>;
						public unmarshall(param0: native.Array<number>): void;
					}
					export class PAndroidContextInfo extends io.agora.rtc.internal.Marshallable {
						public static class: java.lang.Class<io.agora.rtc.internal.RtcEngineMessage.PAndroidContextInfo>;
						public device: string;
						public deviceInfo: string;
						public systemInfo: string;
						public configDir: string;
						public dataDir: string;
						public pluginDir: string;
						public androidID: string;
						public constructor();
						public unmarshall(param0: java.nio.ByteBuffer): void;
						public marshall(param0: java.nio.ByteBuffer): void;
						public marshall(): native.Array<number>;
						public unmarshall(param0: native.Array<number>): void;
					}
					export class PApiCallExecuted extends io.agora.rtc.internal.Marshallable {
						public static class: java.lang.Class<io.agora.rtc.internal.RtcEngineMessage.PApiCallExecuted>;
						public error: number;
						public api: string;
						public result: string;
						public constructor();
						public unmarshall(param0: java.nio.ByteBuffer): void;
						public marshall(param0: java.nio.ByteBuffer): void;
						public marshall(): native.Array<number>;
						public unmarshall(param0: native.Array<number>): void;
					}
					export class PAudioRoutingChanged extends io.agora.rtc.internal.Marshallable {
						public static class: java.lang.Class<io.agora.rtc.internal.RtcEngineMessage.PAudioRoutingChanged>;
						public unmarshall(param0: java.nio.ByteBuffer): void;
						public marshall(param0: java.nio.ByteBuffer): void;
						public marshall(): native.Array<number>;
						public unmarshall(param0: native.Array<number>): void;
					}
					export class PCameraExposureAreaChanged extends io.agora.rtc.internal.Marshallable {
						public static class: java.lang.Class<io.agora.rtc.internal.RtcEngineMessage.PCameraExposureAreaChanged>;
						public x: number;
						public y: number;
						public width: number;
						public height: number;
						public constructor();
						public unmarshall(param0: java.nio.ByteBuffer): void;
						public marshall(param0: java.nio.ByteBuffer): void;
						public marshall(): native.Array<number>;
						public unmarshall(param0: native.Array<number>): void;
					}
					export class PCameraFocusAreaChanged extends io.agora.rtc.internal.Marshallable {
						public static class: java.lang.Class<io.agora.rtc.internal.RtcEngineMessage.PCameraFocusAreaChanged>;
						public x: number;
						public y: number;
						public width: number;
						public height: number;
						public constructor();
						public unmarshall(param0: java.nio.ByteBuffer): void;
						public marshall(param0: java.nio.ByteBuffer): void;
						public marshall(): native.Array<number>;
						public unmarshall(param0: native.Array<number>): void;
					}
					export class PChannelMediaRelayConfiguration extends io.agora.rtc.internal.Marshallable {
						public static class: java.lang.Class<io.agora.rtc.internal.RtcEngineMessage.PChannelMediaRelayConfiguration>;
						public marshall(param0: io.agora.rtc.video.ChannelMediaRelayConfiguration): native.Array<number>;
						public constructor();
						public marshall(param0: java.nio.ByteBuffer): void;
						public marshall(): native.Array<number>;
					}
					export class PClientRoleChanged extends io.agora.rtc.internal.Marshallable {
						public static class: java.lang.Class<io.agora.rtc.internal.RtcEngineMessage.PClientRoleChanged>;
						public constructor();
						public unmarshall(param0: java.nio.ByteBuffer): void;
						public marshall(param0: java.nio.ByteBuffer): void;
						public marshall(): native.Array<number>;
						public unmarshall(param0: native.Array<number>): void;
					}
					export class PConnectionState extends io.agora.rtc.internal.Marshallable {
						public static class: java.lang.Class<io.agora.rtc.internal.RtcEngineMessage.PConnectionState>;
						public state: number;
						public reason: number;
						public constructor();
						public unmarshall(param0: java.nio.ByteBuffer): void;
						public marshall(param0: java.nio.ByteBuffer): void;
						public marshall(): native.Array<number>;
						public unmarshall(param0: native.Array<number>): void;
					}
					export class PCrossChannelEvent extends io.agora.rtc.internal.Marshallable {
						public static class: java.lang.Class<io.agora.rtc.internal.RtcEngineMessage.PCrossChannelEvent>;
						public code: number;
						public constructor();
						public unmarshall(param0: java.nio.ByteBuffer): void;
						public marshall(param0: java.nio.ByteBuffer): void;
						public marshall(): native.Array<number>;
						public unmarshall(param0: native.Array<number>): void;
					}
					export class PCrossChannelState extends io.agora.rtc.internal.Marshallable {
						public static class: java.lang.Class<io.agora.rtc.internal.RtcEngineMessage.PCrossChannelState>;
						public state: number;
						public code: number;
						public constructor();
						public unmarshall(param0: java.nio.ByteBuffer): void;
						public marshall(param0: java.nio.ByteBuffer): void;
						public marshall(): native.Array<number>;
						public unmarshall(param0: native.Array<number>): void;
					}
					export class PError extends io.agora.rtc.internal.Marshallable {
						public static class: java.lang.Class<io.agora.rtc.internal.RtcEngineMessage.PError>;
						public err: number;
						public constructor();
						public unmarshall(param0: java.nio.ByteBuffer): void;
						public marshall(param0: java.nio.ByteBuffer): void;
						public marshall(): native.Array<number>;
						public unmarshall(param0: native.Array<number>): void;
					}
					export class PFaceDetectValue extends io.agora.rtc.internal.Marshallable {
						public static class: java.lang.Class<io.agora.rtc.internal.RtcEngineMessage.PFaceDetectValue>;
						public imageWidth: number;
						public imageHeight: number;
						public num: number;
						public constructor();
						public unmarshall(param0: java.nio.ByteBuffer): void;
						public marshall(param0: java.nio.ByteBuffer): void;
						public marshall(): native.Array<number>;
						public unmarshall(param0: native.Array<number>): void;
					}
					export module PFaceDetectValue {
						export class FaceRect {
							public static class: java.lang.Class<io.agora.rtc.internal.RtcEngineMessage.PFaceDetectValue.FaceRect>;
							public x: number;
							public y: number;
							public width: number;
							public height: number;
							public constructor();
						}
					}
					export class PFirstLocalAudioFrame extends io.agora.rtc.internal.Marshallable {
						public static class: java.lang.Class<io.agora.rtc.internal.RtcEngineMessage.PFirstLocalAudioFrame>;
						public elapsed: number;
						public constructor();
						public unmarshall(param0: java.nio.ByteBuffer): void;
						public marshall(param0: java.nio.ByteBuffer): void;
						public marshall(): native.Array<number>;
						public unmarshall(param0: native.Array<number>): void;
					}
					export class PFirstLocalAudioFramePublished extends io.agora.rtc.internal.Marshallable {
						public static class: java.lang.Class<io.agora.rtc.internal.RtcEngineMessage.PFirstLocalAudioFramePublished>;
						public elapsed: number;
						public constructor();
						public unmarshall(param0: java.nio.ByteBuffer): void;
						public marshall(param0: java.nio.ByteBuffer): void;
						public marshall(): native.Array<number>;
						public unmarshall(param0: native.Array<number>): void;
					}
					export class PFirstLocalVideoFrame extends io.agora.rtc.internal.Marshallable {
						public static class: java.lang.Class<io.agora.rtc.internal.RtcEngineMessage.PFirstLocalVideoFrame>;
						public width: number;
						public height: number;
						public elapsed: number;
						public constructor();
						public unmarshall(param0: java.nio.ByteBuffer): void;
						public marshall(param0: java.nio.ByteBuffer): void;
						public marshall(): native.Array<number>;
						public unmarshall(param0: native.Array<number>): void;
					}
					export class PFirstLocalVideoFramePublished extends io.agora.rtc.internal.Marshallable {
						public static class: java.lang.Class<io.agora.rtc.internal.RtcEngineMessage.PFirstLocalVideoFramePublished>;
						public elapsed: number;
						public constructor();
						public unmarshall(param0: java.nio.ByteBuffer): void;
						public marshall(param0: java.nio.ByteBuffer): void;
						public marshall(): native.Array<number>;
						public unmarshall(param0: native.Array<number>): void;
					}
					export class PFirstRemoteAudioFrame extends io.agora.rtc.internal.Marshallable {
						public static class: java.lang.Class<io.agora.rtc.internal.RtcEngineMessage.PFirstRemoteAudioFrame>;
						public uid: number;
						public elapsed: number;
						public constructor();
						public unmarshall(param0: java.nio.ByteBuffer): void;
						public marshall(param0: java.nio.ByteBuffer): void;
						public marshall(): native.Array<number>;
						public unmarshall(param0: native.Array<number>): void;
					}
					export class PFirstRemoteVideoDecoded extends io.agora.rtc.internal.Marshallable {
						public static class: java.lang.Class<io.agora.rtc.internal.RtcEngineMessage.PFirstRemoteVideoDecoded>;
						public uid: number;
						public width: number;
						public height: number;
						public elapsed: number;
						public constructor();
						public unmarshall(param0: java.nio.ByteBuffer): void;
						public marshall(param0: java.nio.ByteBuffer): void;
						public marshall(): native.Array<number>;
						public unmarshall(param0: native.Array<number>): void;
					}
					export class PFirstRemoteVideoFrame extends io.agora.rtc.internal.Marshallable {
						public static class: java.lang.Class<io.agora.rtc.internal.RtcEngineMessage.PFirstRemoteVideoFrame>;
						public uid: number;
						public width: number;
						public height: number;
						public elapsed: number;
						public constructor();
						public unmarshall(param0: java.nio.ByteBuffer): void;
						public marshall(param0: java.nio.ByteBuffer): void;
						public marshall(): native.Array<number>;
						public unmarshall(param0: native.Array<number>): void;
					}
					export class PHostInRequest extends io.agora.rtc.internal.Marshallable {
						public static class: java.lang.Class<io.agora.rtc.internal.RtcEngineMessage.PHostInRequest>;
						public uid: number;
						public constructor();
						public unmarshall(param0: java.nio.ByteBuffer): void;
						public marshall(param0: java.nio.ByteBuffer): void;
						public marshall(): native.Array<number>;
						public unmarshall(param0: native.Array<number>): void;
					}
					export class PHostInResponse extends io.agora.rtc.internal.Marshallable {
						public static class: java.lang.Class<io.agora.rtc.internal.RtcEngineMessage.PHostInResponse>;
						public ownerUid: number;
						public accepted: boolean;
						public error: number;
						public constructor();
						public unmarshall(param0: java.nio.ByteBuffer): void;
						public marshall(param0: java.nio.ByteBuffer): void;
						public marshall(): native.Array<number>;
						public unmarshall(param0: native.Array<number>): void;
					}
					export class PHostInStopped extends io.agora.rtc.internal.Marshallable {
						public static class: java.lang.Class<io.agora.rtc.internal.RtcEngineMessage.PHostInStopped>;
						public uid: number;
						public constructor();
						public unmarshall(param0: java.nio.ByteBuffer): void;
						public marshall(param0: java.nio.ByteBuffer): void;
						public marshall(): native.Array<number>;
						public unmarshall(param0: native.Array<number>): void;
					}
					export class PInjectStreamConfig extends io.agora.rtc.internal.Marshallable {
						public static class: java.lang.Class<io.agora.rtc.internal.RtcEngineMessage.PInjectStreamConfig>;
						public constructor();
						public marshall(param0: java.nio.ByteBuffer): void;
						public marshall(param0: io.agora.rtc.live.LiveInjectStreamConfig): native.Array<number>;
						public marshall(): native.Array<number>;
					}
					export class PLiveTranscoding extends io.agora.rtc.internal.Marshallable {
						public static class: java.lang.Class<io.agora.rtc.internal.RtcEngineMessage.PLiveTranscoding>;
						public constructor();
						public marshall(param0: java.nio.ByteBuffer): void;
						public marshall(): native.Array<number>;
						public marshall(param0: io.agora.rtc.live.LiveTranscoding): native.Array<number>;
					}
					export class PLocalAudioEnabled extends io.agora.rtc.internal.Marshallable {
						public static class: java.lang.Class<io.agora.rtc.internal.RtcEngineMessage.PLocalAudioEnabled>;
						public constructor();
						public unmarshall(param0: java.nio.ByteBuffer): void;
						public marshall(param0: java.nio.ByteBuffer): void;
						public marshall(): native.Array<number>;
						public unmarshall(param0: native.Array<number>): void;
					}
					export class PLocalAudioStat extends io.agora.rtc.internal.Marshallable {
						public static class: java.lang.Class<io.agora.rtc.internal.RtcEngineMessage.PLocalAudioStat>;
						public stats: io.agora.rtc.IRtcEngineEventHandler.LocalAudioStats;
						public constructor();
						public unmarshall(param0: java.nio.ByteBuffer): void;
						public marshall(param0: java.nio.ByteBuffer): void;
						public marshall(): native.Array<number>;
						public unmarshall(param0: native.Array<number>): void;
					}
					export class PLocalFallbackStatus extends io.agora.rtc.internal.Marshallable {
						public static class: java.lang.Class<io.agora.rtc.internal.RtcEngineMessage.PLocalFallbackStatus>;
						public constructor();
						public unmarshall(param0: java.nio.ByteBuffer): void;
						public marshall(param0: java.nio.ByteBuffer): void;
						public marshall(): native.Array<number>;
						public unmarshall(param0: native.Array<number>): void;
					}
					export class PLocalVideoStat extends io.agora.rtc.internal.Marshallable {
						public static class: java.lang.Class<io.agora.rtc.internal.RtcEngineMessage.PLocalVideoStat>;
						public stats: io.agora.rtc.IRtcEngineEventHandler.LocalVideoStats;
						public constructor();
						public unmarshall(param0: java.nio.ByteBuffer): void;
						public marshall(param0: java.nio.ByteBuffer): void;
						public marshall(): native.Array<number>;
						public unmarshall(param0: native.Array<number>): void;
					}
					export class PMediaEngineEvent extends io.agora.rtc.internal.Marshallable {
						public static class: java.lang.Class<io.agora.rtc.internal.RtcEngineMessage.PMediaEngineEvent>;
						public constructor();
						public unmarshall(param0: java.nio.ByteBuffer): void;
						public marshall(param0: java.nio.ByteBuffer): void;
						public marshall(): native.Array<number>;
						public unmarshall(param0: native.Array<number>): void;
					}
					export class PMediaReqConnectMedia2 extends io.agora.rtc.internal.Marshallable {
						public static class: java.lang.Class<io.agora.rtc.internal.RtcEngineMessage.PMediaReqConnectMedia2>;
						public static uri: number;
						public constructor();
						public unmarshall(param0: java.nio.ByteBuffer): void;
						public marshall(param0: java.nio.ByteBuffer): void;
						public marshall(): native.Array<number>;
						public unmarshall(param0: native.Array<number>): void;
					}
					export class PMediaReqCreateChannel extends io.agora.rtc.internal.Marshallable {
						public static class: java.lang.Class<io.agora.rtc.internal.RtcEngineMessage.PMediaReqCreateChannel>;
						public static uri: number;
						public constructor();
						public unmarshall(param0: java.nio.ByteBuffer): void;
						public marshall(param0: java.nio.ByteBuffer): void;
						public marshall(): native.Array<number>;
						public unmarshall(param0: native.Array<number>): void;
					}
					export class PMediaReqJoinMeida extends io.agora.rtc.internal.Marshallable {
						public static class: java.lang.Class<io.agora.rtc.internal.RtcEngineMessage.PMediaReqJoinMeida>;
						public static uri: number;
						public constructor();
						public unmarshall(param0: java.nio.ByteBuffer): void;
						public marshall(param0: java.nio.ByteBuffer): void;
						public marshall(): native.Array<number>;
						public unmarshall(param0: native.Array<number>): void;
					}
					export class PMediaReqLeaveChannel extends io.agora.rtc.internal.Marshallable {
						public static class: java.lang.Class<io.agora.rtc.internal.RtcEngineMessage.PMediaReqLeaveChannel>;
						public static uri: number;
						public constructor();
						public unmarshall(param0: java.nio.ByteBuffer): void;
						public marshall(param0: java.nio.ByteBuffer): void;
						public marshall(): native.Array<number>;
						public unmarshall(param0: native.Array<number>): void;
					}
					export class PMediaReqLeaveLinkd extends io.agora.rtc.internal.Marshallable {
						public static class: java.lang.Class<io.agora.rtc.internal.RtcEngineMessage.PMediaReqLeaveLinkd>;
						public static uri: number;
						public constructor();
						public unmarshall(param0: java.nio.ByteBuffer): void;
						public marshall(param0: java.nio.ByteBuffer): void;
						public marshall(): native.Array<number>;
						public unmarshall(param0: native.Array<number>): void;
					}
					export class PMediaReqUserData extends io.agora.rtc.internal.Marshallable {
						public static class: java.lang.Class<io.agora.rtc.internal.RtcEngineMessage.PMediaReqUserData>;
						public static uri: number;
						public constructor();
						public unmarshall(param0: java.nio.ByteBuffer): void;
						public marshall(param0: java.nio.ByteBuffer): void;
						public marshall(): native.Array<number>;
						public unmarshall(param0: native.Array<number>): void;
					}
					export class PMediaResAudioEffectFinished extends io.agora.rtc.internal.Marshallable {
						public static class: java.lang.Class<io.agora.rtc.internal.RtcEngineMessage.PMediaResAudioEffectFinished>;
						public constructor();
						public unmarshall(param0: java.nio.ByteBuffer): void;
						public marshall(param0: java.nio.ByteBuffer): void;
						public marshall(): native.Array<number>;
						public unmarshall(param0: native.Array<number>): void;
					}
					export class PMediaResAudioQuality extends io.agora.rtc.internal.Marshallable {
						public static class: java.lang.Class<io.agora.rtc.internal.RtcEngineMessage.PMediaResAudioQuality>;
						public constructor();
						public unmarshall(param0: java.nio.ByteBuffer): void;
						public marshall(param0: java.nio.ByteBuffer): void;
						public marshall(): native.Array<number>;
						public unmarshall(param0: native.Array<number>): void;
					}
					export class PMediaResFirstRemoteAudioDecoded extends io.agora.rtc.internal.Marshallable {
						public static class: java.lang.Class<io.agora.rtc.internal.RtcEngineMessage.PMediaResFirstRemoteAudioDecoded>;
						public uid: number;
						public elapsed: number;
						public constructor();
						public unmarshall(param0: java.nio.ByteBuffer): void;
						public marshall(param0: java.nio.ByteBuffer): void;
						public marshall(): native.Array<number>;
						public unmarshall(param0: native.Array<number>): void;
					}
					export class PMediaResJoinMedia extends io.agora.rtc.internal.Marshallable {
						public static class: java.lang.Class<io.agora.rtc.internal.RtcEngineMessage.PMediaResJoinMedia>;
						public channel: string;
						public uid: number;
						public elapsed: number;
						public firstSuccess: boolean;
						public constructor();
						public unmarshall(param0: java.nio.ByteBuffer): void;
						public marshall(param0: java.nio.ByteBuffer): void;
						public marshall(): native.Array<number>;
						public unmarshall(param0: native.Array<number>): void;
					}
					export class PMediaResLastmileProbeResult extends io.agora.rtc.internal.Marshallable {
						public static class: java.lang.Class<io.agora.rtc.internal.RtcEngineMessage.PMediaResLastmileProbeResult>;
						public constructor();
						public unmarshall(param0: java.nio.ByteBuffer): void;
						public marshall(param0: java.nio.ByteBuffer): void;
						public marshall(): native.Array<number>;
						public unmarshall(param0: native.Array<number>): void;
					}
					export module PMediaResLastmileProbeResult {
						export class LastmileProbeOneWayResult {
							public static class: java.lang.Class<io.agora.rtc.internal.RtcEngineMessage.PMediaResLastmileProbeResult.LastmileProbeOneWayResult>;
							public packetLossRate: number;
							public jitter: number;
							public availableBandwidth: number;
							public constructor();
						}
					}
					export class PMediaResLastmileQuality extends io.agora.rtc.internal.Marshallable {
						public static class: java.lang.Class<io.agora.rtc.internal.RtcEngineMessage.PMediaResLastmileQuality>;
						public constructor();
						public unmarshall(param0: java.nio.ByteBuffer): void;
						public marshall(param0: java.nio.ByteBuffer): void;
						public marshall(): native.Array<number>;
						public unmarshall(param0: native.Array<number>): void;
					}
					export class PMediaResLocalAudioStateChanged extends io.agora.rtc.internal.Marshallable {
						public static class: java.lang.Class<io.agora.rtc.internal.RtcEngineMessage.PMediaResLocalAudioStateChanged>;
						public constructor();
						public unmarshall(param0: java.nio.ByteBuffer): void;
						public marshall(param0: java.nio.ByteBuffer): void;
						public marshall(): native.Array<number>;
						public unmarshall(param0: native.Array<number>): void;
					}
					export class PMediaResLocalVideoStateChanged extends io.agora.rtc.internal.Marshallable {
						public static class: java.lang.Class<io.agora.rtc.internal.RtcEngineMessage.PMediaResLocalVideoStateChanged>;
						public constructor();
						public unmarshall(param0: java.nio.ByteBuffer): void;
						public marshall(param0: java.nio.ByteBuffer): void;
						public marshall(): native.Array<number>;
						public unmarshall(param0: native.Array<number>): void;
					}
					export class PMediaResNetworkQuality extends io.agora.rtc.internal.Marshallable {
						public static class: java.lang.Class<io.agora.rtc.internal.RtcEngineMessage.PMediaResNetworkQuality>;
						public constructor();
						public unmarshall(param0: java.nio.ByteBuffer): void;
						public marshall(param0: java.nio.ByteBuffer): void;
						public marshall(): native.Array<number>;
						public unmarshall(param0: native.Array<number>): void;
					}
					export class PMediaResRtcStats extends io.agora.rtc.internal.Marshallable {
						public static class: java.lang.Class<io.agora.rtc.internal.RtcEngineMessage.PMediaResRtcStats>;
						public constructor();
						public unmarshall(param0: java.nio.ByteBuffer): void;
						public marshall(param0: java.nio.ByteBuffer): void;
						public marshall(): native.Array<number>;
						public unmarshall(param0: native.Array<number>): void;
					}
					export class PMediaResSpeakersReport extends io.agora.rtc.internal.Marshallable {
						public static class: java.lang.Class<io.agora.rtc.internal.RtcEngineMessage.PMediaResSpeakersReport>;
						public constructor();
						public unmarshall(param0: java.nio.ByteBuffer): void;
						public marshall(param0: java.nio.ByteBuffer): void;
						public marshall(): native.Array<number>;
						public unmarshall(param0: native.Array<number>): void;
					}
					export module PMediaResSpeakersReport {
						export class Speaker {
							public static class: java.lang.Class<io.agora.rtc.internal.RtcEngineMessage.PMediaResSpeakersReport.Speaker>;
							public uid: number;
							public volume: number;
							public vad: number;
							public channelId: string;
							public constructor();
						}
					}
					export class PMediaResTransportQuality extends io.agora.rtc.internal.Marshallable {
						public static class: java.lang.Class<io.agora.rtc.internal.RtcEngineMessage.PMediaResTransportQuality>;
						public isAudio: boolean;
						public peer_uid: number;
						public bitrate: number;
						public delay: number;
						public lost: number;
						public constructor();
						public unmarshall(param0: java.nio.ByteBuffer): void;
						public marshall(param0: java.nio.ByteBuffer): void;
						public marshall(): native.Array<number>;
						public unmarshall(param0: native.Array<number>): void;
					}
					export class PMediaResUserJoinedEvent extends io.agora.rtc.internal.Marshallable {
						public static class: java.lang.Class<io.agora.rtc.internal.RtcEngineMessage.PMediaResUserJoinedEvent>;
						public constructor();
						public unmarshall(param0: java.nio.ByteBuffer): void;
						public marshall(param0: java.nio.ByteBuffer): void;
						public marshall(): native.Array<number>;
						public unmarshall(param0: native.Array<number>): void;
					}
					export class PMediaResUserOfflineEvent extends io.agora.rtc.internal.Marshallable {
						public static class: java.lang.Class<io.agora.rtc.internal.RtcEngineMessage.PMediaResUserOfflineEvent>;
						public constructor();
						public unmarshall(param0: java.nio.ByteBuffer): void;
						public marshall(param0: java.nio.ByteBuffer): void;
						public marshall(): native.Array<number>;
						public unmarshall(param0: native.Array<number>): void;
					}
					export class PMediaResUserState extends io.agora.rtc.internal.Marshallable {
						public static class: java.lang.Class<io.agora.rtc.internal.RtcEngineMessage.PMediaResUserState>;
						public constructor();
						public unmarshall(param0: java.nio.ByteBuffer): void;
						public marshall(param0: java.nio.ByteBuffer): void;
						public marshall(): native.Array<number>;
						public unmarshall(param0: native.Array<number>): void;
					}
					export class PNetworkTypeChanged extends io.agora.rtc.internal.Marshallable {
						public static class: java.lang.Class<io.agora.rtc.internal.RtcEngineMessage.PNetworkTypeChanged>;
						public type: number;
						public constructor();
						public unmarshall(param0: java.nio.ByteBuffer): void;
						public marshall(param0: java.nio.ByteBuffer): void;
						public marshall(): native.Array<number>;
						public unmarshall(param0: native.Array<number>): void;
					}
					export class PPrivilegeWillExpire extends io.agora.rtc.internal.Marshallable {
						public static class: java.lang.Class<io.agora.rtc.internal.RtcEngineMessage.PPrivilegeWillExpire>;
						public token: string;
						public constructor();
						public unmarshall(param0: java.nio.ByteBuffer): void;
						public marshall(param0: java.nio.ByteBuffer): void;
						public marshall(): native.Array<number>;
						public unmarshall(param0: native.Array<number>): void;
					}
					export class PPublishAudioState extends io.agora.rtc.internal.Marshallable {
						public static class: java.lang.Class<io.agora.rtc.internal.RtcEngineMessage.PPublishAudioState>;
						public channel: string;
						public oldstate: number;
						public newstate: number;
						public elapsed: number;
						public constructor();
						public unmarshall(param0: java.nio.ByteBuffer): void;
						public marshall(param0: java.nio.ByteBuffer): void;
						public marshall(): native.Array<number>;
						public unmarshall(param0: native.Array<number>): void;
					}
					export class PPublishVideoState extends io.agora.rtc.internal.Marshallable {
						public static class: java.lang.Class<io.agora.rtc.internal.RtcEngineMessage.PPublishVideoState>;
						public channel: string;
						public oldstate: number;
						public newstate: number;
						public elapsed: number;
						public constructor();
						public unmarshall(param0: java.nio.ByteBuffer): void;
						public marshall(param0: java.nio.ByteBuffer): void;
						public marshall(): native.Array<number>;
						public unmarshall(param0: native.Array<number>): void;
					}
					export class PRemoteAudioStat extends io.agora.rtc.internal.Marshallable {
						public static class: java.lang.Class<io.agora.rtc.internal.RtcEngineMessage.PRemoteAudioStat>;
						public stats: io.agora.rtc.IRtcEngineEventHandler.RemoteAudioStats;
						public constructor();
						public unmarshall(param0: java.nio.ByteBuffer): void;
						public marshall(param0: java.nio.ByteBuffer): void;
						public marshall(): native.Array<number>;
						public unmarshall(param0: native.Array<number>): void;
					}
					export class PRemoteAudioState extends io.agora.rtc.internal.Marshallable {
						public static class: java.lang.Class<io.agora.rtc.internal.RtcEngineMessage.PRemoteAudioState>;
						public uid: number;
						public state: number;
						public reason: number;
						public elapsed: number;
						public constructor();
						public unmarshall(param0: java.nio.ByteBuffer): void;
						public marshall(param0: java.nio.ByteBuffer): void;
						public marshall(): native.Array<number>;
						public unmarshall(param0: native.Array<number>): void;
					}
					export class PRemoteVideoStat extends io.agora.rtc.internal.Marshallable {
						public static class: java.lang.Class<io.agora.rtc.internal.RtcEngineMessage.PRemoteVideoStat>;
						public stats: io.agora.rtc.IRtcEngineEventHandler.RemoteVideoStats;
						public constructor();
						public unmarshall(param0: java.nio.ByteBuffer): void;
						public marshall(param0: java.nio.ByteBuffer): void;
						public marshall(): native.Array<number>;
						public unmarshall(param0: native.Array<number>): void;
					}
					export class PRemoteVideoStateExt extends io.agora.rtc.internal.Marshallable {
						public static class: java.lang.Class<io.agora.rtc.internal.RtcEngineMessage.PRemoteVideoStateExt>;
						public uid: number;
						public state: number;
						public reason: number;
						public elapsed: number;
						public constructor();
						public unmarshall(param0: java.nio.ByteBuffer): void;
						public marshall(param0: java.nio.ByteBuffer): void;
						public marshall(): native.Array<number>;
						public unmarshall(param0: native.Array<number>): void;
					}
					export class PRtmpStreamingState extends io.agora.rtc.internal.Marshallable {
						public static class: java.lang.Class<io.agora.rtc.internal.RtcEngineMessage.PRtmpStreamingState>;
						public url: string;
						public state: number;
						public error: number;
						public constructor();
						public unmarshall(param0: java.nio.ByteBuffer): void;
						public marshall(param0: java.nio.ByteBuffer): void;
						public marshall(): native.Array<number>;
						public unmarshall(param0: native.Array<number>): void;
					}
					export class PStreamEvent extends io.agora.rtc.internal.Marshallable {
						public static class: java.lang.Class<io.agora.rtc.internal.RtcEngineMessage.PStreamEvent>;
						public url: string;
						public error: number;
						public constructor();
						public unmarshall(param0: java.nio.ByteBuffer): void;
						public marshall(param0: java.nio.ByteBuffer): void;
						public marshall(): native.Array<number>;
						public unmarshall(param0: native.Array<number>): void;
					}
					export class PStreamInjectedStatus extends io.agora.rtc.internal.Marshallable {
						public static class: java.lang.Class<io.agora.rtc.internal.RtcEngineMessage.PStreamInjectedStatus>;
						public url: string;
						public uid: number;
						public status: number;
						public constructor();
						public unmarshall(param0: java.nio.ByteBuffer): void;
						public marshall(param0: java.nio.ByteBuffer): void;
						public marshall(): native.Array<number>;
						public unmarshall(param0: native.Array<number>): void;
					}
					export class PStreamMessage extends io.agora.rtc.internal.Marshallable {
						public static class: java.lang.Class<io.agora.rtc.internal.RtcEngineMessage.PStreamMessage>;
						public constructor();
						public unmarshall(param0: java.nio.ByteBuffer): void;
						public marshall(param0: java.nio.ByteBuffer): void;
						public marshall(): native.Array<number>;
						public unmarshall(param0: native.Array<number>): void;
					}
					export class PStreamMessageError extends io.agora.rtc.internal.Marshallable {
						public static class: java.lang.Class<io.agora.rtc.internal.RtcEngineMessage.PStreamMessageError>;
						public constructor();
						public unmarshall(param0: java.nio.ByteBuffer): void;
						public marshall(param0: java.nio.ByteBuffer): void;
						public marshall(): native.Array<number>;
						public unmarshall(param0: native.Array<number>): void;
					}
					export class PStreamPublished extends io.agora.rtc.internal.Marshallable {
						public static class: java.lang.Class<io.agora.rtc.internal.RtcEngineMessage.PStreamPublished>;
						public url: string;
						public error: number;
						public constructor();
						public unmarshall(param0: java.nio.ByteBuffer): void;
						public marshall(param0: java.nio.ByteBuffer): void;
						public marshall(): native.Array<number>;
						public unmarshall(param0: native.Array<number>): void;
					}
					export class PStreamUnPublished extends io.agora.rtc.internal.Marshallable {
						public static class: java.lang.Class<io.agora.rtc.internal.RtcEngineMessage.PStreamUnPublished>;
						public url: string;
						public constructor();
						public unmarshall(param0: java.nio.ByteBuffer): void;
						public marshall(param0: java.nio.ByteBuffer): void;
						public marshall(): native.Array<number>;
						public unmarshall(param0: native.Array<number>): void;
					}
					export class PSubscribeAudioState extends io.agora.rtc.internal.Marshallable {
						public static class: java.lang.Class<io.agora.rtc.internal.RtcEngineMessage.PSubscribeAudioState>;
						public channel: string;
						public uid: number;
						public oldstate: number;
						public newstate: number;
						public elapsed: number;
						public constructor();
						public unmarshall(param0: java.nio.ByteBuffer): void;
						public marshall(param0: java.nio.ByteBuffer): void;
						public marshall(): native.Array<number>;
						public unmarshall(param0: native.Array<number>): void;
					}
					export class PSubscribeVideoState extends io.agora.rtc.internal.Marshallable {
						public static class: java.lang.Class<io.agora.rtc.internal.RtcEngineMessage.PSubscribeVideoState>;
						public channel: string;
						public uid: number;
						public oldstate: number;
						public newstate: number;
						public elapsed: number;
						public constructor();
						public unmarshall(param0: java.nio.ByteBuffer): void;
						public marshall(param0: java.nio.ByteBuffer): void;
						public marshall(): native.Array<number>;
						public unmarshall(param0: native.Array<number>): void;
					}
					export class PUserAccountInfo extends io.agora.rtc.internal.Marshallable {
						public static class: java.lang.Class<io.agora.rtc.internal.RtcEngineMessage.PUserAccountInfo>;
						public uid: number;
						public userAccount: string;
						public constructor();
						public unmarshall(param0: java.nio.ByteBuffer): void;
						public marshall(param0: java.nio.ByteBuffer): void;
						public marshall(): native.Array<number>;
						public unmarshall(param0: native.Array<number>): void;
					}
					export class PUserTransportStat extends io.agora.rtc.internal.Marshallable {
						public static class: java.lang.Class<io.agora.rtc.internal.RtcEngineMessage.PUserTransportStat>;
						public isAudio: boolean;
						public peer_uid: number;
						public delay: number;
						public lost: number;
						public rxKBitRate: number;
						public constructor();
						public unmarshall(param0: java.nio.ByteBuffer): void;
						public marshall(param0: java.nio.ByteBuffer): void;
						public marshall(): native.Array<number>;
						public unmarshall(param0: native.Array<number>): void;
					}
					export class PVideoNetOptions extends io.agora.rtc.internal.Marshallable {
						public static class: java.lang.Class<io.agora.rtc.internal.RtcEngineMessage.PVideoNetOptions>;
						public constructor();
						public unmarshall(param0: java.nio.ByteBuffer): void;
						public marshall(param0: java.nio.ByteBuffer): void;
						public marshall(param0: io.agora.rtc.internal.Marshallable): void;
						public marshall(): native.Array<number>;
						public unmarshall(param0: native.Array<number>): void;
					}
					export class PVideoSizeChanged extends io.agora.rtc.internal.Marshallable {
						public static class: java.lang.Class<io.agora.rtc.internal.RtcEngineMessage.PVideoSizeChanged>;
						public uid: number;
						public width: number;
						public height: number;
						public rotation: number;
						public constructor();
						public unmarshall(param0: java.nio.ByteBuffer): void;
						public marshall(param0: java.nio.ByteBuffer): void;
						public marshall(): native.Array<number>;
						public unmarshall(param0: native.Array<number>): void;
					}
				}
			}
		}
	}
}

declare module io {
	export module agora {
		export module rtc {
			export module live {
				export class LiveInjectStreamConfig {
					public static class: java.lang.Class<io.agora.rtc.live.LiveInjectStreamConfig>;
					public width: number;
					public height: number;
					public videoGop: number;
					public videoFramerate: number;
					public videoBitrate: number;
					public audioSampleRate: io.agora.rtc.live.LiveInjectStreamConfig.AudioSampleRateType;
					public audioBitrate: number;
					public audioChannels: number;
					public constructor();
				}
				export module LiveInjectStreamConfig {
					export class AudioSampleRateType {
						public static class: java.lang.Class<io.agora.rtc.live.LiveInjectStreamConfig.AudioSampleRateType>;
						public static TYPE_32000: io.agora.rtc.live.LiveInjectStreamConfig.AudioSampleRateType;
						public static TYPE_44100: io.agora.rtc.live.LiveInjectStreamConfig.AudioSampleRateType;
						public static TYPE_48000: io.agora.rtc.live.LiveInjectStreamConfig.AudioSampleRateType;
						public static getValue(param0: io.agora.rtc.live.LiveInjectStreamConfig.AudioSampleRateType): number;
						public static valueOf(param0: string): io.agora.rtc.live.LiveInjectStreamConfig.AudioSampleRateType;
						public static values(): native.Array<io.agora.rtc.live.LiveInjectStreamConfig.AudioSampleRateType>;
					}
				}
			}
		}
	}
}

declare module io {
	export module agora {
		export module rtc {
			export module live {
				export class LiveTranscoding {
					public static class: java.lang.Class<io.agora.rtc.live.LiveTranscoding>;
					public width: number;
					public height: number;
					public videoBitrate: number;
					public videoFramerate: number;
					public lowLatency: boolean;
					public videoGop: number;
					public watermark: io.agora.rtc.video.AgoraImage;
					public backgroundImage: io.agora.rtc.video.AgoraImage;
					public audioSampleRate: io.agora.rtc.live.LiveTranscoding.AudioSampleRateType;
					public audioBitrate: number;
					public audioChannels: number;
					public audioCodecProfile: io.agora.rtc.live.LiveTranscoding.AudioCodecProfileType;
					public videoCodecProfile: io.agora.rtc.live.LiveTranscoding.VideoCodecProfileType;
					public userCount: number;
					public backgroundColor: number;
					public userConfigExtraInfo: string;
					public metadata: string;
					public static LBHQ: string;
					public static VEO: string;
					public getUsers(): java.util.ArrayList<io.agora.rtc.live.LiveTranscoding.TranscodingUser>;
					/** @deprecated */
					public setGreen(param0: number): void;
					public setAdvancedFeatures(param0: string, param1: java.lang.Boolean): void;
					/** @deprecated */
					public setRed(param0: number): void;
					public setBackgroundColor(param0: number, param1: number, param2: number): void;
					/** @deprecated */
					public setBlue(param0: number): void;
					public getAdvancedFeatures(): java.util.Map<string,java.lang.Boolean>;
					public setBackgroundColor(param0: number): void;
					public removeUser(param0: number): number;
					public addUser(param0: io.agora.rtc.live.LiveTranscoding.TranscodingUser): number;
					/** @deprecated */
					public getGreen(): number;
					public setUsers(param0: java.util.ArrayList<io.agora.rtc.live.LiveTranscoding.TranscodingUser>): void;
					public getUserCount(): number;
					public constructor();
					/** @deprecated */
					public getRed(): number;
					/** @deprecated */
					public getBlue(): number;
					public getBackgroundColor(): number;
					public setUsers(param0: java.util.Map<java.lang.Integer,io.agora.rtc.live.LiveTranscoding.TranscodingUser>): void;
				}
				export module LiveTranscoding {
					export class AudioCodecProfileType {
						public static class: java.lang.Class<io.agora.rtc.live.LiveTranscoding.AudioCodecProfileType>;
						public static LC_AAC: io.agora.rtc.live.LiveTranscoding.AudioCodecProfileType;
						public static HE_AAC: io.agora.rtc.live.LiveTranscoding.AudioCodecProfileType;
						public static values(): native.Array<io.agora.rtc.live.LiveTranscoding.AudioCodecProfileType>;
						public static getValue(param0: io.agora.rtc.live.LiveTranscoding.AudioCodecProfileType): number;
						public static valueOf(param0: string): io.agora.rtc.live.LiveTranscoding.AudioCodecProfileType;
					}
					export class AudioSampleRateType {
						public static class: java.lang.Class<io.agora.rtc.live.LiveTranscoding.AudioSampleRateType>;
						public static TYPE_32000: io.agora.rtc.live.LiveTranscoding.AudioSampleRateType;
						public static TYPE_44100: io.agora.rtc.live.LiveTranscoding.AudioSampleRateType;
						public static TYPE_48000: io.agora.rtc.live.LiveTranscoding.AudioSampleRateType;
						public static getValue(param0: io.agora.rtc.live.LiveTranscoding.AudioSampleRateType): number;
						public static values(): native.Array<io.agora.rtc.live.LiveTranscoding.AudioSampleRateType>;
						public static valueOf(param0: string): io.agora.rtc.live.LiveTranscoding.AudioSampleRateType;
					}
					export class TranscodingUser {
						public static class: java.lang.Class<io.agora.rtc.live.LiveTranscoding.TranscodingUser>;
						public uid: number;
						public x: number;
						public y: number;
						public width: number;
						public height: number;
						public zOrder: number;
						public alpha: number;
						public audioChannel: number;
						public constructor();
					}
					export class VideoCodecProfileType {
						public static class: java.lang.Class<io.agora.rtc.live.LiveTranscoding.VideoCodecProfileType>;
						public static BASELINE: io.agora.rtc.live.LiveTranscoding.VideoCodecProfileType;
						public static MAIN: io.agora.rtc.live.LiveTranscoding.VideoCodecProfileType;
						public static HIGH: io.agora.rtc.live.LiveTranscoding.VideoCodecProfileType;
						public static valueOf(param0: string): io.agora.rtc.live.LiveTranscoding.VideoCodecProfileType;
						public static values(): native.Array<io.agora.rtc.live.LiveTranscoding.VideoCodecProfileType>;
						public static getValue(param0: io.agora.rtc.live.LiveTranscoding.VideoCodecProfileType): number;
					}
				}
			}
		}
	}
}

declare module io {
	export module agora {
		export module rtc {
			export module mediaio {
				export class AgoraBufferedCamera2 extends io.agora.rtc.mediaio.CameraSource {
					public static class: java.lang.Class<io.agora.rtc.mediaio.AgoraBufferedCamera2>;
					public constructor(param0: globalAndroid.content.Context);
					public getBufferType(): number;
					public constructor();
					public onDispose(): void;
					public onInitialize(param0: io.agora.rtc.mediaio.IVideoFrameConsumer): boolean;
					public getContentHint(): number;
					public constructor(param0: globalAndroid.content.Context, param1: io.agora.rtc.mediaio.CaptureParameters);
					public onStop(): void;
					public onStart(): boolean;
					public getCaptureType(): number;
					public useFrontCamera(param0: boolean): void;
				}
				export module AgoraBufferedCamera2 {
					export class CompareSizesByArea extends java.util.Comparator<any> {
						public static class: java.lang.Class<io.agora.rtc.mediaio.AgoraBufferedCamera2.CompareSizesByArea>;
						public compare(param0: any, param1: any): number;
					}
				}
			}
		}
	}
}

declare module io {
	export module agora {
		export module rtc {
			export module mediaio {
				export class AgoraDefaultRender extends io.agora.rtc.mediaio.IVideoSink {
					public static class: java.lang.Class<io.agora.rtc.mediaio.AgoraDefaultRender>;
					public consumeByteBufferFrame(param0: java.nio.ByteBuffer, param1: number, param2: number, param3: number, param4: number, param5: number): void;
					public getBufferType(): number;
					public getEGLContextHandle(): number;
					public constructor();
					public onDispose(): void;
					public getPixelFormat(): number;
					public onStop(): void;
					public consumeByteArrayFrame(param0: native.Array<number>, param1: number, param2: number, param3: number, param4: number, param5: number): void;
					public onInitialize(): boolean;
					public onStart(): boolean;
					public consumeTextureFrame(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: native.Array<number>): void;
				}
			}
		}
	}
}

declare module io {
	export module agora {
		export module rtc {
			export module mediaio {
				export class AgoraDefaultSource extends io.agora.rtc.mediaio.IVideoSource {
					public static class: java.lang.Class<io.agora.rtc.mediaio.AgoraDefaultSource>;
					public getBufferType(): number;
					public constructor();
					public onDispose(): void;
					public onInitialize(param0: io.agora.rtc.mediaio.IVideoFrameConsumer): boolean;
					public getContentHint(): number;
					public onStop(): void;
					public onStart(): boolean;
					public getCaptureType(): number;
				}
			}
		}
	}
}

declare module io {
	export module agora {
		export module rtc {
			export module mediaio {
				export class AgoraSurfaceView implements io.agora.rtc.mediaio.IVideoSink {
					public static class: java.lang.Class<io.agora.rtc.mediaio.AgoraSurfaceView>;
					public consumeByteBufferFrame(param0: java.nio.ByteBuffer, param1: number, param2: number, param3: number, param4: number, param5: number): void;
					public getBufferType(): number;
					public setMirror(param0: boolean): void;
					public surfaceCreated(param0: globalAndroid.view.SurfaceHolder): void;
					public init(param0: io.agora.rtc.gl.EglBase.Context, param1: native.Array<number>, param2: io.agora.rtc.gl.RendererCommon.GlDrawer): void;
					public setBufferType(param0: io.agora.rtc.mediaio.MediaIO.BufferType): void;
					public surfaceChanged(param0: globalAndroid.view.SurfaceHolder, param1: number, param2: number, param3: number): void;
					public constructor(param0: globalAndroid.content.Context);
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
					public setPixelFormat(param0: io.agora.rtc.mediaio.MediaIO.PixelFormat): void;
					public getEGLContextHandle(): number;
					public surfaceDestroyed(param0: globalAndroid.view.SurfaceHolder): void;
					public onDispose(): void;
					public onLayout(param0: boolean, param1: number, param2: number, param3: number, param4: number): void;
					public init(param0: io.agora.rtc.gl.EglBase.Context): void;
					public getPixelFormat(): number;
					public onStop(): void;
					public consumeByteArrayFrame(param0: native.Array<number>, param1: number, param2: number, param3: number, param4: number, param5: number): void;
					public onInitialize(): boolean;
					public onStart(): boolean;
					public consumeTextureFrame(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: native.Array<number>): void;
				}
			}
		}
	}
}

declare module io {
	export module agora {
		export module rtc {
			export module mediaio {
				export class AgoraTextureCamera extends io.agora.rtc.mediaio.TextureSource {
					public static class: java.lang.Class<io.agora.rtc.mediaio.AgoraTextureCamera>;
					public getBufferType(): number;
					public getContentHint(): number;
					public constructor(param0: io.agora.rtc.gl.EglBase.Context, param1: number, param2: number);
					public onCapturerClosed(): void;
					public constructor(param0: globalAndroid.content.Context, param1: number, param2: number);
					public getCaptureType(): number;
					public onTextureFrameAvailable(param0: number, param1: native.Array<number>, param2: number): void;
					public onCapturerStopped(): void;
					public onDispose(): void;
					public onInitialize(param0: io.agora.rtc.mediaio.IVideoFrameConsumer): boolean;
					public onCapturerOpened(): boolean;
					public onCapturerStarted(): boolean;
					public onStop(): void;
					public onStart(): boolean;
				}
			}
		}
	}
}

declare module io {
	export module agora {
		export module rtc {
			export module mediaio {
				export class AgoraTextureView implements io.agora.rtc.mediaio.IVideoSink {
					public static class: java.lang.Class<io.agora.rtc.mediaio.AgoraTextureView>;
					public consumeByteBufferFrame(param0: java.nio.ByteBuffer, param1: number, param2: number, param3: number, param4: number, param5: number): void;
					public getBufferType(): number;
					public setMirror(param0: boolean): void;
					public init(param0: io.agora.rtc.gl.EglBase.Context, param1: native.Array<number>, param2: io.agora.rtc.gl.RendererCommon.GlDrawer): void;
					public onSurfaceTextureDestroyed(param0: globalAndroid.graphics.SurfaceTexture): boolean;
					public onSurfaceTextureUpdated(param0: globalAndroid.graphics.SurfaceTexture): void;
					public setBufferType(param0: io.agora.rtc.mediaio.MediaIO.BufferType): void;
					public constructor(param0: globalAndroid.content.Context);
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
					public onSurfaceTextureAvailable(param0: globalAndroid.graphics.SurfaceTexture, param1: number, param2: number): void;
					public setPixelFormat(param0: io.agora.rtc.mediaio.MediaIO.PixelFormat): void;
					public getEGLContextHandle(): number;
					public onDispose(): void;
					public onLayout(param0: boolean, param1: number, param2: number, param3: number, param4: number): void;
					public init(param0: io.agora.rtc.gl.EglBase.Context): void;
					public getPixelFormat(): number;
					public onStop(): void;
					public consumeByteArrayFrame(param0: native.Array<number>, param1: number, param2: number, param3: number, param4: number, param5: number): void;
					public onInitialize(): boolean;
					public onStart(): boolean;
					public consumeTextureFrame(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: native.Array<number>): void;
					public onSurfaceTextureSizeChanged(param0: globalAndroid.graphics.SurfaceTexture, param1: number, param2: number): void;
				}
			}
		}
	}
}

declare module io {
	export module agora {
		export module rtc {
			export module mediaio {
				export class BaseVideoRenderer {
					public static class: java.lang.Class<io.agora.rtc.mediaio.BaseVideoRenderer>;
					public getBufferType(): number;
					public constructor(param0: string);
					public setRenderSurface(param0: globalAndroid.graphics.SurfaceTexture): void;
					public init(param0: io.agora.rtc.gl.EglBase.Context, param1: native.Array<number>, param2: io.agora.rtc.gl.RendererCommon.GlDrawer): void;
					public setBufferType(param0: io.agora.rtc.mediaio.MediaIO.BufferType): void;
					public consume(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: native.Array<number>): void;
					public consume(param0: native.Array<number>, param1: number, param2: number, param3: number, param4: number, param5: number): void;
					public surfaceChanged(param0: globalAndroid.view.SurfaceHolder, param1: number, param2: number, param3: number): void;
					public onSurfaceTextureAvailable(param0: globalAndroid.graphics.SurfaceTexture, param1: number, param2: number): void;
					public start(): boolean;
					public consume(param0: java.nio.ByteBuffer, param1: number, param2: number, param3: number, param4: number, param5: number): void;
					public setPixelFormat(param0: io.agora.rtc.mediaio.MediaIO.PixelFormat): void;
					public getEGLContextHandle(): number;
					public getPixelFormat(): number;
					public getEglRender(): io.agora.rtc.gl.EglRenderer;
					public setRenderSurface(param0: globalAndroid.view.Surface): void;
					public surfaceCreated(param0: globalAndroid.view.SurfaceHolder): void;
					public onSurfaceTextureDestroyed(param0: globalAndroid.graphics.SurfaceTexture): boolean;
					public onSurfaceTextureUpdated(param0: globalAndroid.graphics.SurfaceTexture): void;
					public release(): void;
					public surfaceDestroyed(param0: globalAndroid.view.SurfaceHolder): void;
					public stop(): void;
					public init(param0: io.agora.rtc.gl.EglBase.Context): void;
					public setRenderView(param0: globalAndroid.view.SurfaceView, param1: globalAndroid.view.SurfaceHolder.Callback): void;
					public onSurfaceTextureSizeChanged(param0: globalAndroid.graphics.SurfaceTexture, param1: number, param2: number): void;
					public setRenderView(param0: globalAndroid.view.TextureView, param1: globalAndroid.view.TextureView.SurfaceTextureListener): void;
				}
			}
		}
	}
}

declare module io {
	export module agora {
		export module rtc {
			export module mediaio {
				export abstract class CameraSource extends io.agora.rtc.mediaio.IVideoSource {
					public static class: java.lang.Class<io.agora.rtc.mediaio.CameraSource>;
					public consumer: io.agora.rtc.mediaio.IVideoFrameConsumer;
					public getBufferType(): number;
					public constructor();
					public onDispose(): void;
					public onInitialize(param0: io.agora.rtc.mediaio.IVideoFrameConsumer): boolean;
					public getContentHint(): number;
					public onStop(): void;
					public onStart(): boolean;
					public getCaptureType(): number;
				}
			}
		}
	}
}

declare module io {
	export module agora {
		export module rtc {
			export module mediaio {
				export class CaptureParameters {
					public static class: java.lang.Class<io.agora.rtc.mediaio.CaptureParameters>;
					public width: number;
					public height: number;
					public stride: number;
					public fps: number;
					public rotation: number;
					public pixelFormat: number;
					public bufferType: number;
					public captureType: number;
					public contentHint: number;
					public constructor();
				}
			}
		}
	}
}

declare module io {
	export module agora {
		export module rtc {
			export module mediaio {
				export class IVideoFrameConsumer {
					public static class: java.lang.Class<io.agora.rtc.mediaio.IVideoFrameConsumer>;
					/**
					 * Constructs a new instance of the io.agora.rtc.mediaio.IVideoFrameConsumer interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						consumeByteBufferFrame(param0: java.nio.ByteBuffer, param1: number, param2: number, param3: number, param4: number, param5: number): void;
						consumeByteArrayFrame(param0: native.Array<number>, param1: number, param2: number, param3: number, param4: number, param5: number): void;
						consumeTextureFrame(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: native.Array<number>): void;
					});
					public constructor();
					public consumeByteBufferFrame(param0: java.nio.ByteBuffer, param1: number, param2: number, param3: number, param4: number, param5: number): void;
					public consumeByteArrayFrame(param0: native.Array<number>, param1: number, param2: number, param3: number, param4: number, param5: number): void;
					public consumeTextureFrame(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: native.Array<number>): void;
				}
			}
		}
	}
}

declare module io {
	export module agora {
		export module rtc {
			export module mediaio {
				export class IVideoSink extends io.agora.rtc.mediaio.IVideoFrameConsumer {
					public static class: java.lang.Class<io.agora.rtc.mediaio.IVideoSink>;
					/**
					 * Constructs a new instance of the io.agora.rtc.mediaio.IVideoSink interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onInitialize(): boolean;
						onStart(): boolean;
						onStop(): void;
						onDispose(): void;
						getEGLContextHandle(): number;
						getBufferType(): number;
						getPixelFormat(): number;
						consumeByteBufferFrame(param0: java.nio.ByteBuffer, param1: number, param2: number, param3: number, param4: number, param5: number): void;
						consumeByteArrayFrame(param0: native.Array<number>, param1: number, param2: number, param3: number, param4: number, param5: number): void;
						consumeTextureFrame(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: native.Array<number>): void;
					});
					public constructor();
					public consumeByteBufferFrame(param0: java.nio.ByteBuffer, param1: number, param2: number, param3: number, param4: number, param5: number): void;
					public getEGLContextHandle(): number;
					public getBufferType(): number;
					public onDispose(): void;
					public getPixelFormat(): number;
					public onStop(): void;
					public consumeByteArrayFrame(param0: native.Array<number>, param1: number, param2: number, param3: number, param4: number, param5: number): void;
					public onInitialize(): boolean;
					public onStart(): boolean;
					public consumeTextureFrame(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: native.Array<number>): void;
				}
			}
		}
	}
}

declare module io {
	export module agora {
		export module rtc {
			export module mediaio {
				export class IVideoSource {
					public static class: java.lang.Class<io.agora.rtc.mediaio.IVideoSource>;
					/**
					 * Constructs a new instance of the io.agora.rtc.mediaio.IVideoSource interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onInitialize(param0: io.agora.rtc.mediaio.IVideoFrameConsumer): boolean;
						onStart(): boolean;
						onStop(): void;
						onDispose(): void;
						getBufferType(): number;
						getCaptureType(): number;
						getContentHint(): number;
					});
					public constructor();
					public getBufferType(): number;
					public onDispose(): void;
					public onInitialize(param0: io.agora.rtc.mediaio.IVideoFrameConsumer): boolean;
					public getContentHint(): number;
					public onStop(): void;
					public onStart(): boolean;
					public getCaptureType(): number;
				}
			}
		}
	}
}

declare module io {
	export module agora {
		export module rtc {
			export module mediaio {
				export class MediaIO {
					public static class: java.lang.Class<io.agora.rtc.mediaio.MediaIO>;
					public constructor();
				}
				export module MediaIO {
					export class BufferType {
						public static class: java.lang.Class<io.agora.rtc.mediaio.MediaIO.BufferType>;
						public static BYTE_BUFFER: io.agora.rtc.mediaio.MediaIO.BufferType;
						public static BYTE_ARRAY: io.agora.rtc.mediaio.MediaIO.BufferType;
						public static TEXTURE: io.agora.rtc.mediaio.MediaIO.BufferType;
						public static values(): native.Array<io.agora.rtc.mediaio.MediaIO.BufferType>;
						public static valueOf(param0: string): io.agora.rtc.mediaio.MediaIO.BufferType;
						public intValue(): number;
					}
					export class CaptureType {
						public static class: java.lang.Class<io.agora.rtc.mediaio.MediaIO.CaptureType>;
						public static UNKNOWN: io.agora.rtc.mediaio.MediaIO.CaptureType;
						public static CAMERA: io.agora.rtc.mediaio.MediaIO.CaptureType;
						public static SCREEN: io.agora.rtc.mediaio.MediaIO.CaptureType;
						public static values(): native.Array<io.agora.rtc.mediaio.MediaIO.CaptureType>;
						public static valueOf(param0: string): io.agora.rtc.mediaio.MediaIO.CaptureType;
						public intValue(): number;
					}
					export class ContentHint {
						public static class: java.lang.Class<io.agora.rtc.mediaio.MediaIO.ContentHint>;
						public static NONE: io.agora.rtc.mediaio.MediaIO.ContentHint;
						public static MOTION: io.agora.rtc.mediaio.MediaIO.ContentHint;
						public static DETAIL: io.agora.rtc.mediaio.MediaIO.ContentHint;
						public static values(): native.Array<io.agora.rtc.mediaio.MediaIO.ContentHint>;
						public static valueOf(param0: string): io.agora.rtc.mediaio.MediaIO.ContentHint;
						public intValue(): number;
					}
					export class PixelFormat {
						public static class: java.lang.Class<io.agora.rtc.mediaio.MediaIO.PixelFormat>;
						public static I420: io.agora.rtc.mediaio.MediaIO.PixelFormat;
						public static NV21: io.agora.rtc.mediaio.MediaIO.PixelFormat;
						public static RGBA: io.agora.rtc.mediaio.MediaIO.PixelFormat;
						public static TEXTURE_2D: io.agora.rtc.mediaio.MediaIO.PixelFormat;
						public static TEXTURE_OES: io.agora.rtc.mediaio.MediaIO.PixelFormat;
						public static valueOf(param0: string): io.agora.rtc.mediaio.MediaIO.PixelFormat;
						public intValue(): number;
						public static values(): native.Array<io.agora.rtc.mediaio.MediaIO.PixelFormat>;
					}
				}
			}
		}
	}
}

declare module io {
	export module agora {
		export module rtc {
			export module mediaio {
				export class SurfaceTextureHelper {
					public static class: java.lang.Class<io.agora.rtc.mediaio.SurfaceTextureHelper>;
					public static create(param0: string, param1: io.agora.rtc.gl.EglBase.Context): io.agora.rtc.mediaio.SurfaceTextureHelper;
					public startListening(param0: io.agora.rtc.mediaio.SurfaceTextureHelper.OnTextureFrameAvailableListener): void;
					public getEglContext(): io.agora.rtc.gl.EglBase.Context;
					public stopListening(): void;
					public dispose(): void;
					public getHandler(): globalAndroid.os.Handler;
					public returnTextureFrame(): void;
					public isTextureInUse(): boolean;
					public textureToYuv(param0: io.agora.rtc.gl.VideoFrame.TextureBuffer): io.agora.rtc.gl.VideoFrame.I420Buffer;
					public createTextureBuffer(param0: number, param1: number, param2: globalAndroid.graphics.Matrix): io.agora.rtc.gl.VideoFrame.TextureBuffer;
					public getSurfaceTexture(): globalAndroid.graphics.SurfaceTexture;
				}
				export module SurfaceTextureHelper {
					export class OnTextureFrameAvailableListener {
						public static class: java.lang.Class<io.agora.rtc.mediaio.SurfaceTextureHelper.OnTextureFrameAvailableListener>;
						/**
						 * Constructs a new instance of the io.agora.rtc.mediaio.SurfaceTextureHelper$OnTextureFrameAvailableListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onTextureFrameAvailable(param0: number, param1: native.Array<number>, param2: number): void;
						});
						public constructor();
						public onTextureFrameAvailable(param0: number, param1: native.Array<number>, param2: number): void;
					}
				}
			}
		}
	}
}

declare module io {
	export module agora {
		export module rtc {
			export module mediaio {
				export abstract class TextureSource implements io.agora.rtc.mediaio.IVideoSource, io.agora.rtc.mediaio.SurfaceTextureHelper.OnTextureFrameAvailableListener {
					public static class: java.lang.Class<io.agora.rtc.mediaio.TextureSource>;
					public mConsumer: java.lang.ref.WeakReference<io.agora.rtc.mediaio.IVideoFrameConsumer>;
					public mSurfaceTextureHelper: io.agora.rtc.mediaio.SurfaceTextureHelper;
					public mWidth: number;
					public mHeight: number;
					public mPixelFormat: number;
					public getBufferType(): number;
					public getEglContext(): io.agora.rtc.gl.EglBase.Context;
					public getContentHint(): number;
					public constructor(param0: io.agora.rtc.gl.EglBase.Context, param1: number, param2: number);
					public release(): void;
					public onCapturerClosed(): void;
					public getCaptureType(): number;
					public onTextureFrameAvailable(param0: number, param1: native.Array<number>, param2: number): void;
					public onCapturerStopped(): void;
					public onDispose(): void;
					public onInitialize(param0: io.agora.rtc.mediaio.IVideoFrameConsumer): boolean;
					public onCapturerOpened(): boolean;
					public onStop(): void;
					public onCapturerStarted(): boolean;
					public onStart(): boolean;
					public getSurfaceTexture(): globalAndroid.graphics.SurfaceTexture;
				}
			}
		}
	}
}

declare module io {
	export module agora {
		export module rtc {
			export module mediaio {
				export class VideoFrameConsumerImpl extends io.agora.rtc.mediaio.IVideoFrameConsumer {
					public static class: java.lang.Class<io.agora.rtc.mediaio.VideoFrameConsumerImpl>;
					public consumeByteBufferFrame(param0: java.nio.ByteBuffer, param1: number, param2: number, param3: number, param4: number, param5: number): void;
					public provideByteBufferFrame(param0: number, param1: java.nio.ByteBuffer, param2: number, param3: number, param4: number, param5: number, param6: number): void;
					public provideByteArrayFrame(param0: number, param1: native.Array<number>, param2: number, param3: number, param4: number, param5: number, param6: number): void;
					public provideTextureFrame(param0: number, param1: any, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number, param8: native.Array<number>): void;
					public consumeByteArrayFrame(param0: native.Array<number>, param1: number, param2: number, param3: number, param4: number, param5: number): void;
					public consumeTextureFrame(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: native.Array<number>): void;
					public constructor(param0: number);
				}
			}
		}
	}
}

declare module io {
	export module agora {
		export module rtc {
			export module models {
				export class ChannelMediaOptions {
					public static class: java.lang.Class<io.agora.rtc.models.ChannelMediaOptions>;
					public autoSubscribeAudio: boolean;
					public autoSubscribeVideo: boolean;
					public constructor();
				}
			}
		}
	}
}

declare module io {
	export module agora {
		export module rtc {
			export module models {
				export class UserInfo {
					public static class: java.lang.Class<io.agora.rtc.models.UserInfo>;
					public uid: number;
					public userAccount: string;
					public constructor();
				}
			}
		}
	}
}

declare module io {
	export module agora {
		export module rtc {
			export module utils {
				export class AgoraUtils {
					public static class: java.lang.Class<io.agora.rtc.utils.AgoraUtils>;
					public static getDisplayRotation(param0: globalAndroid.content.Context): number;
					public static getAppStorageDir(param0: globalAndroid.content.Context): string;
					public constructor();
					public static getFrameOrientation(param0: number, param1: number, param2: boolean, param3: boolean): number;
					public static ensureNativeLibsInitialized(): boolean;
				}
			}
		}
	}
}

declare module io {
	export module agora {
		export module rtc {
			export module utils {
				export class ThreadUtils {
					public static class: java.lang.Class<io.agora.rtc.utils.ThreadUtils>;
					public static awaitUninterruptibly(param0: java.util.concurrent.CountDownLatch, param1: number): boolean;
					public static concatStackTraces(param0: native.Array<java.lang.StackTraceElement>, param1: native.Array<java.lang.StackTraceElement>): native.Array<java.lang.StackTraceElement>;
					public static executeUninterruptibly(param0: io.agora.rtc.utils.ThreadUtils.BlockingOperation): void;
					public static awaitUninterruptibly(param0: java.util.concurrent.CountDownLatch): void;
					public constructor();
					public static waitUninterruptibly(param0: any): void;
					public static joinUninterruptibly(param0: java.lang.Thread, param1: number): boolean;
					public static invokeAtFrontUninterruptibly(param0: globalAndroid.os.Handler, param1: java.util.concurrent.Callable): any;
					public static joinUninterruptibly(param0: java.lang.Thread): void;
					public static checkIsOnMainThread(): void;
					public static invokeAtFrontUninterruptibly(param0: globalAndroid.os.Handler, param1: java.lang.Runnable): void;
				}
				export module ThreadUtils {
					export class BlockingOperation {
						public static class: java.lang.Class<io.agora.rtc.utils.ThreadUtils.BlockingOperation>;
						/**
						 * Constructs a new instance of the io.agora.rtc.utils.ThreadUtils$BlockingOperation interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							run(): void;
						});
						public constructor();
						public run(): void;
					}
					export class ThreadChecker {
						public static class: java.lang.Class<io.agora.rtc.utils.ThreadUtils.ThreadChecker>;
						public checkIsOnValidThread(): void;
						public constructor();
						public detachThread(): void;
					}
				}
			}
		}
	}
}

declare module io {
	export module agora {
		export module rtc {
			export module utils {
				export class YuvUtils {
					public static class: java.lang.Class<io.agora.rtc.utils.YuvUtils>;
					public static I420: number;
					public static NV21: number;
					public static writeNV21ToFile(param0: native.Array<number>, param1: number, param2: number, param3: string): boolean;
					public constructor();
					public static supportedImageFormat(param0: globalAndroid.media.Image): boolean;
					public static yuv420toNV21(param0: io.agora.rtc.gl.VideoFrame.I420Buffer, param1: number, param2: number): native.Array<number>;
					public static writeRawData(param0: native.Array<number>, param1: string): void;
					public static getImageData(param0: globalAndroid.media.Image, param1: number): native.Array<number>;
					public static write420ImageToFile(param0: globalAndroid.media.Image, param1: string): void;
					public static writeRgbaToFile(param0: java.nio.Buffer, param1: number, param2: number, param3: string): void;
					public static yuv420toNV21(param0: native.Array<number>, param1: number, param2: number): native.Array<number>;
					public static yuv420toNV21(param0: globalAndroid.media.Image): native.Array<number>;
				}
				export module YuvUtils {
					export class Plane {
						public static class: java.lang.Class<io.agora.rtc.utils.YuvUtils.Plane>;
						public getBuffer(): java.nio.ByteBuffer;
						public getPixelStride(): number;
						public getRowStride(): number;
						public constructor(param0: java.nio.ByteBuffer, param1: number, param2: number);
					}
				}
			}
		}
	}
}

declare module io {
	export module agora {
		export module rtc {
			export module video {
				export class AgoraImage {
					public static class: java.lang.Class<io.agora.rtc.video.AgoraImage>;
					public url: string;
					public x: number;
					public y: number;
					public width: number;
					public height: number;
					public constructor();
				}
			}
		}
	}
}

declare module io {
	export module agora {
		export module rtc {
			export module video {
				export class AgoraVideoFrame {
					public static class: java.lang.Class<io.agora.rtc.video.AgoraVideoFrame>;
					public static FORMAT_NONE: number;
					public static FORMAT_TEXTURE_2D: number;
					public static FORMAT_TEXTURE_OES: number;
					public static FORMAT_I420: number;
					public static FORMAT_BGRA: number;
					public static FORMAT_NV21: number;
					public static FORMAT_RGBA: number;
					public static FORMAT_IMC2: number;
					public static FORMAT_ARGB: number;
					public static FORMAT_NV12: number;
					public static FORMAT_I422: number;
					public static BUFFER_TYPE_NONE: number;
					public static BUFFER_TYPE_BUFFER: number;
					public static BUFFER_TYPE_ARRAY: number;
					public static BUFFER_TYPE_TEXTURE: number;
					public format: number;
					public timeStamp: number;
					public stride: number;
					public height: number;
					public textureID: number;
					public syncMode: boolean;
					public transform: native.Array<number>;
					public eglContext11: javax.microedition.khronos.egl.EGLContext;
					public eglContext14: globalAndroid.opengl.EGLContext;
					public buf: native.Array<number>;
					public cropLeft: number;
					public cropTop: number;
					public cropRight: number;
					public cropBottom: number;
					public rotation: number;
					public constructor();
				}
			}
		}
	}
}

declare module io {
	export module agora {
		export module rtc {
			export module video {
				export class BeautyOptions {
					public static class: java.lang.Class<io.agora.rtc.video.BeautyOptions>;
					public static LIGHTENING_CONTRAST_LOW: number;
					public static LIGHTENING_CONTRAST_NORMAL: number;
					public static LIGHTENING_CONTRAST_HIGH: number;
					public lighteningContrastLevel: number;
					public lighteningLevel: number;
					public smoothnessLevel: number;
					public rednessLevel: number;
					public constructor(param0: number, param1: number, param2: number, param3: number);
					public constructor();
				}
			}
		}
	}
}

declare module io {
	export module agora {
		export module rtc {
			export module video {
				export class CameraCapturerConfiguration {
					public static class: java.lang.Class<io.agora.rtc.video.CameraCapturerConfiguration>;
					public preference: io.agora.rtc.video.CameraCapturerConfiguration.CAPTURER_OUTPUT_PREFERENCE;
					public cameraDirection: io.agora.rtc.video.CameraCapturerConfiguration.CAMERA_DIRECTION;
					public constructor(param0: io.agora.rtc.video.CameraCapturerConfiguration.CAPTURER_OUTPUT_PREFERENCE, param1: io.agora.rtc.video.CameraCapturerConfiguration.CAMERA_DIRECTION);
				}
				export module CameraCapturerConfiguration {
					export class CAMERA_DIRECTION {
						public static class: java.lang.Class<io.agora.rtc.video.CameraCapturerConfiguration.CAMERA_DIRECTION>;
						public static CAMERA_REAR: io.agora.rtc.video.CameraCapturerConfiguration.CAMERA_DIRECTION;
						public static CAMERA_FRONT: io.agora.rtc.video.CameraCapturerConfiguration.CAMERA_DIRECTION;
						public static valueOf(param0: string): io.agora.rtc.video.CameraCapturerConfiguration.CAMERA_DIRECTION;
						public static values(): native.Array<io.agora.rtc.video.CameraCapturerConfiguration.CAMERA_DIRECTION>;
						public getValue(): number;
					}
					export class CAPTURER_OUTPUT_PREFERENCE {
						public static class: java.lang.Class<io.agora.rtc.video.CameraCapturerConfiguration.CAPTURER_OUTPUT_PREFERENCE>;
						public static CAPTURER_OUTPUT_PREFERENCE_AUTO: io.agora.rtc.video.CameraCapturerConfiguration.CAPTURER_OUTPUT_PREFERENCE;
						public static CAPTURER_OUTPUT_PREFERENCE_PERFORMANCE: io.agora.rtc.video.CameraCapturerConfiguration.CAPTURER_OUTPUT_PREFERENCE;
						public static CAPTURER_OUTPUT_PREFERENCE_PREVIEW: io.agora.rtc.video.CameraCapturerConfiguration.CAPTURER_OUTPUT_PREFERENCE;
						public static valueOf(param0: string): io.agora.rtc.video.CameraCapturerConfiguration.CAPTURER_OUTPUT_PREFERENCE;
						public static values(): native.Array<io.agora.rtc.video.CameraCapturerConfiguration.CAPTURER_OUTPUT_PREFERENCE>;
						public getValue(): number;
					}
				}
			}
		}
	}
}

declare module io {
	export module agora {
		export module rtc {
			export module video {
				export class ChannelMediaInfo {
					public static class: java.lang.Class<io.agora.rtc.video.ChannelMediaInfo>;
					public channelName: string;
					public token: string;
					public uid: number;
					public constructor(param0: string, param1: string, param2: number);
				}
			}
		}
	}
}

declare module io {
	export module agora {
		export module rtc {
			export module video {
				export class ChannelMediaRelayConfiguration {
					public static class: java.lang.Class<io.agora.rtc.video.ChannelMediaRelayConfiguration>;
					public setSrcChannelInfo(param0: io.agora.rtc.video.ChannelMediaInfo): void;
					public constructor();
					public removeDestChannelInfo(param0: string): void;
					public getSrcChannelMediaInfo(): io.agora.rtc.video.ChannelMediaInfo;
					public setDestChannelInfo(param0: string, param1: io.agora.rtc.video.ChannelMediaInfo): void;
					public getDestChannelMediaInfos(): java.util.Map<string,io.agora.rtc.video.ChannelMediaInfo>;
				}
			}
		}
	}
}

declare module io {
	export module agora {
		export module rtc {
			export module video {
				export class GLTextureView {
					public static class: java.lang.Class<io.agora.rtc.video.GLTextureView>;
					public static RENDERMODE_WHEN_DIRTY: number;
					public static RENDERMODE_CONTINUOUSLY: number;
					public static DEBUG_CHECK_GL_ERROR: number;
					public static DEBUG_LOG_GL_CALLS: number;
					public setPreserveEGLContextOnPause(param0: boolean): void;
					public finalize(): void;
					public surfaceCreated(param0: globalAndroid.graphics.SurfaceTexture): void;
					public queueEvent(param0: java.lang.Runnable): void;
					public setEGLConfigChooser(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number): void;
					public getDebugFlags(): number;
					public setEGLWindowSurfaceFactory(param0: io.agora.rtc.video.GLTextureView.EGLWindowSurfaceFactory): void;
					public onAttachedToWindow(): void;
					public setDebugFlags(param0: number): void;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
					public setGLWrapper(param0: io.agora.rtc.video.GLTextureView.GLWrapper): void;
					public onSurfaceTextureAvailable(param0: globalAndroid.graphics.SurfaceTexture, param1: number, param2: number): void;
					public onLayoutChange(param0: globalAndroid.view.View, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number, param8: number): void;
					public setEGLContextClientVersion(param0: number): void;
					public getPreserveEGLContextOnPause(): boolean;
					public setEGLContextFactory(param0: io.agora.rtc.video.GLTextureView.EGLContextFactory): void;
					public onDetachedFromWindow(): void;
					public surfaceChanged(param0: globalAndroid.graphics.SurfaceTexture, param1: number, param2: number, param3: number): void;
					public surfaceDestroyed(param0: globalAndroid.graphics.SurfaceTexture): void;
					public setEGLConfigChooser(param0: boolean): void;
					public onSurfaceTextureDestroyed(param0: globalAndroid.graphics.SurfaceTexture): boolean;
					public onSurfaceTextureUpdated(param0: globalAndroid.graphics.SurfaceTexture): void;
					public setRenderer(param0: io.agora.rtc.video.GLTextureView.Renderer): void;
					public requestRender(): void;
					public onResume(): void;
					public constructor(param0: globalAndroid.content.Context);
					public getRenderMode(): number;
					public onPause(): void;
					public setEGLConfigChooser(param0: io.agora.rtc.video.GLTextureView.EGLConfigChooser): void;
					public onSurfaceTextureSizeChanged(param0: globalAndroid.graphics.SurfaceTexture, param1: number, param2: number): void;
					public setRenderMode(param0: number): void;
				}
				export module GLTextureView {
					export abstract class BaseConfigChooser extends io.agora.rtc.video.GLTextureView.EGLConfigChooser {
						public static class: java.lang.Class<io.agora.rtc.video.GLTextureView.BaseConfigChooser>;
						public mConfigSpec: native.Array<number>;
						public constructor(param0: io.agora.rtc.video.GLTextureView, param1: native.Array<number>);
						public chooseConfig(param0: javax.microedition.khronos.egl.EGL10, param1: javax.microedition.khronos.egl.EGLDisplay): javax.microedition.khronos.egl.EGLConfig;
					}
					export class ComponentSizeChooser extends io.agora.rtc.video.GLTextureView.BaseConfigChooser {
						public static class: java.lang.Class<io.agora.rtc.video.GLTextureView.ComponentSizeChooser>;
						public mRedSize: number;
						public mGreenSize: number;
						public mBlueSize: number;
						public mAlphaSize: number;
						public mDepthSize: number;
						public mStencilSize: number;
						public chooseConfig(param0: javax.microedition.khronos.egl.EGL10, param1: javax.microedition.khronos.egl.EGLDisplay, param2: native.Array<javax.microedition.khronos.egl.EGLConfig>): javax.microedition.khronos.egl.EGLConfig;
						public constructor(param0: io.agora.rtc.video.GLTextureView, param1: native.Array<number>);
						public constructor(param0: io.agora.rtc.video.GLTextureView, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number);
						public chooseConfig(param0: javax.microedition.khronos.egl.EGL10, param1: javax.microedition.khronos.egl.EGLDisplay): javax.microedition.khronos.egl.EGLConfig;
					}
					export class DefaultContextFactory extends io.agora.rtc.video.GLTextureView.EGLContextFactory {
						public static class: java.lang.Class<io.agora.rtc.video.GLTextureView.DefaultContextFactory>;
						public createContext(param0: javax.microedition.khronos.egl.EGL10, param1: javax.microedition.khronos.egl.EGLDisplay, param2: javax.microedition.khronos.egl.EGLConfig): javax.microedition.khronos.egl.EGLContext;
						public destroyContext(param0: javax.microedition.khronos.egl.EGL10, param1: javax.microedition.khronos.egl.EGLDisplay, param2: javax.microedition.khronos.egl.EGLContext): void;
					}
					export class DefaultWindowSurfaceFactory extends io.agora.rtc.video.GLTextureView.EGLWindowSurfaceFactory {
						public static class: java.lang.Class<io.agora.rtc.video.GLTextureView.DefaultWindowSurfaceFactory>;
						public createWindowSurface(param0: javax.microedition.khronos.egl.EGL10, param1: javax.microedition.khronos.egl.EGLDisplay, param2: javax.microedition.khronos.egl.EGLConfig, param3: any): javax.microedition.khronos.egl.EGLSurface;
						public destroySurface(param0: javax.microedition.khronos.egl.EGL10, param1: javax.microedition.khronos.egl.EGLDisplay, param2: javax.microedition.khronos.egl.EGLSurface): void;
					}
					export class EGLConfigChooser {
						public static class: java.lang.Class<io.agora.rtc.video.GLTextureView.EGLConfigChooser>;
						/**
						 * Constructs a new instance of the io.agora.rtc.video.GLTextureView$EGLConfigChooser interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							chooseConfig(param0: javax.microedition.khronos.egl.EGL10, param1: javax.microedition.khronos.egl.EGLDisplay): javax.microedition.khronos.egl.EGLConfig;
						});
						public constructor();
						public chooseConfig(param0: javax.microedition.khronos.egl.EGL10, param1: javax.microedition.khronos.egl.EGLDisplay): javax.microedition.khronos.egl.EGLConfig;
					}
					export class EGLContextFactory {
						public static class: java.lang.Class<io.agora.rtc.video.GLTextureView.EGLContextFactory>;
						/**
						 * Constructs a new instance of the io.agora.rtc.video.GLTextureView$EGLContextFactory interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							createContext(param0: javax.microedition.khronos.egl.EGL10, param1: javax.microedition.khronos.egl.EGLDisplay, param2: javax.microedition.khronos.egl.EGLConfig): javax.microedition.khronos.egl.EGLContext;
							destroyContext(param0: javax.microedition.khronos.egl.EGL10, param1: javax.microedition.khronos.egl.EGLDisplay, param2: javax.microedition.khronos.egl.EGLContext): void;
						});
						public constructor();
						public createContext(param0: javax.microedition.khronos.egl.EGL10, param1: javax.microedition.khronos.egl.EGLDisplay, param2: javax.microedition.khronos.egl.EGLConfig): javax.microedition.khronos.egl.EGLContext;
						public destroyContext(param0: javax.microedition.khronos.egl.EGL10, param1: javax.microedition.khronos.egl.EGLDisplay, param2: javax.microedition.khronos.egl.EGLContext): void;
					}
					export class EGLWindowSurfaceFactory {
						public static class: java.lang.Class<io.agora.rtc.video.GLTextureView.EGLWindowSurfaceFactory>;
						/**
						 * Constructs a new instance of the io.agora.rtc.video.GLTextureView$EGLWindowSurfaceFactory interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							createWindowSurface(param0: javax.microedition.khronos.egl.EGL10, param1: javax.microedition.khronos.egl.EGLDisplay, param2: javax.microedition.khronos.egl.EGLConfig, param3: any): javax.microedition.khronos.egl.EGLSurface;
							destroySurface(param0: javax.microedition.khronos.egl.EGL10, param1: javax.microedition.khronos.egl.EGLDisplay, param2: javax.microedition.khronos.egl.EGLSurface): void;
						});
						public constructor();
						public createWindowSurface(param0: javax.microedition.khronos.egl.EGL10, param1: javax.microedition.khronos.egl.EGLDisplay, param2: javax.microedition.khronos.egl.EGLConfig, param3: any): javax.microedition.khronos.egl.EGLSurface;
						public destroySurface(param0: javax.microedition.khronos.egl.EGL10, param1: javax.microedition.khronos.egl.EGLDisplay, param2: javax.microedition.khronos.egl.EGLSurface): void;
					}
					export class EglHelper {
						public static class: java.lang.Class<io.agora.rtc.video.GLTextureView.EglHelper>;
						public static logEglErrorAsWarning(param0: string, param1: string, param2: number): void;
						public constructor(param0: java.lang.ref.WeakReference<io.agora.rtc.video.GLTextureView>);
						public static formatEglError(param0: string, param1: number): string;
						public start(): void;
						public swap(): number;
						public finish(): void;
						public static throwEglException(param0: string, param1: number): void;
						public destroySurface(): void;
						public createSurface(): boolean;
					}
					export class GLThread {
						public static class: java.lang.Class<io.agora.rtc.video.GLTextureView.GLThread>;
						public queueEvent(param0: java.lang.Runnable): void;
						public requestReleaseEglContextLocked(): void;
						public onResume(): void;
						public ableToDraw(): boolean;
						public surfaceDestroyed(): void;
						public onPause(): void;
						public requestRender(): void;
						public surfaceCreated(): void;
						public run(): void;
						public onWindowResize(param0: number, param1: number): void;
						public getRenderMode(): number;
						public requestExitAndWait(): void;
						public setRenderMode(param0: number): void;
					}
					export class GLThreadManager {
						public static class: java.lang.Class<io.agora.rtc.video.GLTextureView.GLThreadManager>;
						public threadExiting(param0: io.agora.rtc.video.GLTextureView.GLThread): void;
						public tryAcquireEglContextLocked(param0: io.agora.rtc.video.GLTextureView.GLThread): boolean;
						public releaseEglContextLocked(param0: io.agora.rtc.video.GLTextureView.GLThread): void;
						public checkGLDriver(param0: javax.microedition.khronos.opengles.GL10): void;
						public shouldTerminateEGLWhenPausing(): boolean;
						public shouldReleaseEGLContextWhenPausing(): boolean;
					}
					export class GLWrapper {
						public static class: java.lang.Class<io.agora.rtc.video.GLTextureView.GLWrapper>;
						/**
						 * Constructs a new instance of the io.agora.rtc.video.GLTextureView$GLWrapper interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							wrap(param0: javax.microedition.khronos.opengles.GL): javax.microedition.khronos.opengles.GL;
						});
						public constructor();
						public wrap(param0: javax.microedition.khronos.opengles.GL): javax.microedition.khronos.opengles.GL;
					}
					export class LogWriter {
						public static class: java.lang.Class<io.agora.rtc.video.GLTextureView.LogWriter>;
						public close(): void;
						public flush(): void;
						public write(param0: native.Array<string>, param1: number, param2: number): void;
					}
					export class Renderer {
						public static class: java.lang.Class<io.agora.rtc.video.GLTextureView.Renderer>;
						/**
						 * Constructs a new instance of the io.agora.rtc.video.GLTextureView$Renderer interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onSurfaceCreated(param0: javax.microedition.khronos.opengles.GL10, param1: javax.microedition.khronos.egl.EGLConfig): void;
							onSurfaceChanged(param0: javax.microedition.khronos.opengles.GL10, param1: number, param2: number): void;
							onDrawFrame(param0: javax.microedition.khronos.opengles.GL10): void;
							onSurfaceDestroyed(param0: javax.microedition.khronos.opengles.GL10): void;
						});
						public constructor();
						public onSurfaceDestroyed(param0: javax.microedition.khronos.opengles.GL10): void;
						public onSurfaceChanged(param0: javax.microedition.khronos.opengles.GL10, param1: number, param2: number): void;
						public onSurfaceCreated(param0: javax.microedition.khronos.opengles.GL10, param1: javax.microedition.khronos.egl.EGLConfig): void;
						public onDrawFrame(param0: javax.microedition.khronos.opengles.GL10): void;
					}
					export class SimpleEGLConfigChooser extends io.agora.rtc.video.GLTextureView.ComponentSizeChooser {
						public static class: java.lang.Class<io.agora.rtc.video.GLTextureView.SimpleEGLConfigChooser>;
						public constructor(param0: io.agora.rtc.video.GLTextureView, param1: boolean);
						public chooseConfig(param0: javax.microedition.khronos.egl.EGL10, param1: javax.microedition.khronos.egl.EGLDisplay, param2: native.Array<javax.microedition.khronos.egl.EGLConfig>): javax.microedition.khronos.egl.EGLConfig;
						public constructor(param0: io.agora.rtc.video.GLTextureView, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number);
						public constructor(param0: io.agora.rtc.video.GLTextureView, param1: native.Array<number>);
						public chooseConfig(param0: javax.microedition.khronos.egl.EGL10, param1: javax.microedition.khronos.egl.EGLDisplay): javax.microedition.khronos.egl.EGLConfig;
					}
				}
			}
		}
	}
}

declare module io {
	export module agora {
		export module rtc {
			export module video {
				export class ViEAndroidGLES20 {
					public static class: java.lang.Class<io.agora.rtc.video.ViEAndroidGLES20>;
					public UpdateOpenGLResource(param0: native.Array<number>): void;
					public releaseOpenGLResource(): void;
					public onSurfaceCreated(param0: javax.microedition.khronos.opengles.GL10, param1: javax.microedition.khronos.egl.EGLConfig): void;
					public onConfigurationChanged(param0: globalAndroid.content.res.Configuration): void;
					public static IsSupported(param0: globalAndroid.content.Context): boolean;
					public ReDraw(): void;
					public constructor(param0: globalAndroid.content.Context);
					public onDrawFrame(param0: javax.microedition.khronos.opengles.GL10): void;
					public RegisterNativeObject(param0: number): void;
					public constructor(param0: globalAndroid.content.Context, param1: boolean, param2: number, param3: number);
					public DeRegisterNativeObject(): void;
					public static UseOpenGL2(param0: any): boolean;
					public onSurfaceChanged(param0: javax.microedition.khronos.opengles.GL10, param1: number, param2: number): void;
				}
				export module ViEAndroidGLES20 {
					export class ConfigChooser {
						public static class: java.lang.Class<io.agora.rtc.video.ViEAndroidGLES20.ConfigChooser>;
						public mRedSize: number;
						public mGreenSize: number;
						public mBlueSize: number;
						public mAlphaSize: number;
						public mDepthSize: number;
						public mStencilSize: number;
						public chooseConfig(param0: javax.microedition.khronos.egl.EGL10, param1: javax.microedition.khronos.egl.EGLDisplay, param2: native.Array<javax.microedition.khronos.egl.EGLConfig>): javax.microedition.khronos.egl.EGLConfig;
						public constructor(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number);
						public chooseConfig(param0: javax.microedition.khronos.egl.EGL10, param1: javax.microedition.khronos.egl.EGLDisplay): javax.microedition.khronos.egl.EGLConfig;
					}
					export class ContextFactory {
						public static class: java.lang.Class<io.agora.rtc.video.ViEAndroidGLES20.ContextFactory>;
						public createContext(param0: javax.microedition.khronos.egl.EGL10, param1: javax.microedition.khronos.egl.EGLDisplay, param2: javax.microedition.khronos.egl.EGLConfig): javax.microedition.khronos.egl.EGLContext;
						public destroyContext(param0: javax.microedition.khronos.egl.EGL10, param1: javax.microedition.khronos.egl.EGLDisplay, param2: javax.microedition.khronos.egl.EGLContext): void;
					}
				}
			}
		}
	}
}

declare module io {
	export module agora {
		export module rtc {
			export module video {
				export class ViETextureView extends io.agora.rtc.video.GLTextureView implements io.agora.rtc.video.GLTextureView.Renderer {
					public static class: java.lang.Class<io.agora.rtc.video.ViETextureView>;
					public onSurfaceDestroyed(param0: javax.microedition.khronos.opengles.GL10): void;
					public UpdateOpenGLResource(param0: native.Array<number>): void;
					public releaseOpenGLResource(): void;
					public onSurfaceCreated(param0: javax.microedition.khronos.opengles.GL10, param1: javax.microedition.khronos.egl.EGLConfig): void;
					public onConfigurationChanged(param0: globalAndroid.content.res.Configuration): void;
					public static IsSupported(param0: globalAndroid.content.Context): boolean;
					public ReDraw(): void;
					public constructor(param0: globalAndroid.content.Context);
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
					public onDrawFrame(param0: javax.microedition.khronos.opengles.GL10): void;
					public RegisterNativeObject(param0: number): void;
					public constructor(param0: globalAndroid.content.Context, param1: boolean, param2: number, param3: number);
					public DeRegisterNativeObject(): void;
					public static UseOpenGL2(param0: any): boolean;
					public onSurfaceChanged(param0: javax.microedition.khronos.opengles.GL10, param1: number, param2: number): void;
				}
				export module ViETextureView {
					export class ConfigChooser extends io.agora.rtc.video.GLTextureView.EGLConfigChooser {
						public static class: java.lang.Class<io.agora.rtc.video.ViETextureView.ConfigChooser>;
						public mRedSize: number;
						public mGreenSize: number;
						public mBlueSize: number;
						public mAlphaSize: number;
						public mDepthSize: number;
						public mStencilSize: number;
						public chooseConfig(param0: javax.microedition.khronos.egl.EGL10, param1: javax.microedition.khronos.egl.EGLDisplay, param2: native.Array<javax.microedition.khronos.egl.EGLConfig>): javax.microedition.khronos.egl.EGLConfig;
						public constructor(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number);
						public chooseConfig(param0: javax.microedition.khronos.egl.EGL10, param1: javax.microedition.khronos.egl.EGLDisplay): javax.microedition.khronos.egl.EGLConfig;
					}
					export class ContextFactory extends io.agora.rtc.video.GLTextureView.EGLContextFactory {
						public static class: java.lang.Class<io.agora.rtc.video.ViETextureView.ContextFactory>;
						public createContext(param0: javax.microedition.khronos.egl.EGL10, param1: javax.microedition.khronos.egl.EGLDisplay, param2: javax.microedition.khronos.egl.EGLConfig): javax.microedition.khronos.egl.EGLContext;
						public destroyContext(param0: javax.microedition.khronos.egl.EGL10, param1: javax.microedition.khronos.egl.EGLDisplay, param2: javax.microedition.khronos.egl.EGLContext): void;
					}
				}
			}
		}
	}
}

declare module io {
	export module agora {
		export module rtc {
			export module video {
				export class VideoCanvas {
					public static class: java.lang.Class<io.agora.rtc.video.VideoCanvas>;
					public static RENDER_MODE_HIDDEN: number;
					public static RENDER_MODE_FIT: number;
					public static RENDER_MODE_ADAPTIVE: number;
					public static RENDER_MODE_FILL: number;
					public view: globalAndroid.view.View;
					public renderMode: number;
					public channelId: string;
					public mirrorMode: number;
					public uid: number;
					public constructor(param0: globalAndroid.view.View, param1: number, param2: string, param3: number);
					public constructor(param0: globalAndroid.view.View, param1: number, param2: number);
					public constructor(param0: globalAndroid.view.View, param1: number, param2: string, param3: number, param4: number);
					public constructor(param0: globalAndroid.view.View, param1: number, param2: number, param3: number);
					public constructor(param0: globalAndroid.view.View);
				}
			}
		}
	}
}

declare module io {
	export module agora {
		export module rtc {
			export module video {
				export class VideoEncoderConfiguration {
					public static class: java.lang.Class<io.agora.rtc.video.VideoEncoderConfiguration>;
					public static VD_120x120: io.agora.rtc.video.VideoEncoderConfiguration.VideoDimensions;
					public static VD_160x120: io.agora.rtc.video.VideoEncoderConfiguration.VideoDimensions;
					public static VD_180x180: io.agora.rtc.video.VideoEncoderConfiguration.VideoDimensions;
					public static VD_240x180: io.agora.rtc.video.VideoEncoderConfiguration.VideoDimensions;
					public static VD_320x180: io.agora.rtc.video.VideoEncoderConfiguration.VideoDimensions;
					public static VD_240x240: io.agora.rtc.video.VideoEncoderConfiguration.VideoDimensions;
					public static VD_320x240: io.agora.rtc.video.VideoEncoderConfiguration.VideoDimensions;
					public static VD_424x240: io.agora.rtc.video.VideoEncoderConfiguration.VideoDimensions;
					public static VD_360x360: io.agora.rtc.video.VideoEncoderConfiguration.VideoDimensions;
					public static VD_480x360: io.agora.rtc.video.VideoEncoderConfiguration.VideoDimensions;
					public static VD_640x360: io.agora.rtc.video.VideoEncoderConfiguration.VideoDimensions;
					public static VD_480x480: io.agora.rtc.video.VideoEncoderConfiguration.VideoDimensions;
					public static VD_640x480: io.agora.rtc.video.VideoEncoderConfiguration.VideoDimensions;
					public static VD_840x480: io.agora.rtc.video.VideoEncoderConfiguration.VideoDimensions;
					public static VD_960x720: io.agora.rtc.video.VideoEncoderConfiguration.VideoDimensions;
					public static VD_1280x720: io.agora.rtc.video.VideoEncoderConfiguration.VideoDimensions;
					public static STANDARD_BITRATE: number;
					public static COMPATIBLE_BITRATE: number;
					public static DEFAULT_MIN_BITRATE: number;
					public static DEFAULT_MIN_FRAMERATE: number;
					public dimensions: io.agora.rtc.video.VideoEncoderConfiguration.VideoDimensions;
					public frameRate: number;
					public minFrameRate: number;
					public bitrate: number;
					public minBitrate: number;
					public orientationMode: io.agora.rtc.video.VideoEncoderConfiguration.ORIENTATION_MODE;
					public degradationPrefer: io.agora.rtc.video.VideoEncoderConfiguration.DEGRADATION_PREFERENCE;
					public mirrorMode: number;
					public constructor(param0: number, param1: number, param2: io.agora.rtc.video.VideoEncoderConfiguration.FRAME_RATE, param3: number, param4: io.agora.rtc.video.VideoEncoderConfiguration.ORIENTATION_MODE);
					public constructor();
					public constructor(param0: io.agora.rtc.video.VideoEncoderConfiguration.VideoDimensions, param1: io.agora.rtc.video.VideoEncoderConfiguration.FRAME_RATE, param2: number, param3: io.agora.rtc.video.VideoEncoderConfiguration.ORIENTATION_MODE);
				}
				export module VideoEncoderConfiguration {
					export class DEGRADATION_PREFERENCE {
						public static class: java.lang.Class<io.agora.rtc.video.VideoEncoderConfiguration.DEGRADATION_PREFERENCE>;
						public static MAINTAIN_QUALITY: io.agora.rtc.video.VideoEncoderConfiguration.DEGRADATION_PREFERENCE;
						public static MAINTAIN_FRAMERATE: io.agora.rtc.video.VideoEncoderConfiguration.DEGRADATION_PREFERENCE;
						public static MAINTAIN_BALANCED: io.agora.rtc.video.VideoEncoderConfiguration.DEGRADATION_PREFERENCE;
						public static values(): native.Array<io.agora.rtc.video.VideoEncoderConfiguration.DEGRADATION_PREFERENCE>;
						public static valueOf(param0: string): io.agora.rtc.video.VideoEncoderConfiguration.DEGRADATION_PREFERENCE;
						public getValue(): number;
					}
					export class FRAME_RATE {
						public static class: java.lang.Class<io.agora.rtc.video.VideoEncoderConfiguration.FRAME_RATE>;
						public static FRAME_RATE_FPS_1: io.agora.rtc.video.VideoEncoderConfiguration.FRAME_RATE;
						public static FRAME_RATE_FPS_7: io.agora.rtc.video.VideoEncoderConfiguration.FRAME_RATE;
						public static FRAME_RATE_FPS_10: io.agora.rtc.video.VideoEncoderConfiguration.FRAME_RATE;
						public static FRAME_RATE_FPS_15: io.agora.rtc.video.VideoEncoderConfiguration.FRAME_RATE;
						public static FRAME_RATE_FPS_24: io.agora.rtc.video.VideoEncoderConfiguration.FRAME_RATE;
						public static FRAME_RATE_FPS_30: io.agora.rtc.video.VideoEncoderConfiguration.FRAME_RATE;
						public static values(): native.Array<io.agora.rtc.video.VideoEncoderConfiguration.FRAME_RATE>;
						public static valueOf(param0: string): io.agora.rtc.video.VideoEncoderConfiguration.FRAME_RATE;
						public getValue(): number;
					}
					export class ORIENTATION_MODE {
						public static class: java.lang.Class<io.agora.rtc.video.VideoEncoderConfiguration.ORIENTATION_MODE>;
						public static ORIENTATION_MODE_ADAPTIVE: io.agora.rtc.video.VideoEncoderConfiguration.ORIENTATION_MODE;
						public static ORIENTATION_MODE_FIXED_LANDSCAPE: io.agora.rtc.video.VideoEncoderConfiguration.ORIENTATION_MODE;
						public static ORIENTATION_MODE_FIXED_PORTRAIT: io.agora.rtc.video.VideoEncoderConfiguration.ORIENTATION_MODE;
						public static valueOf(param0: string): io.agora.rtc.video.VideoEncoderConfiguration.ORIENTATION_MODE;
						public static values(): native.Array<io.agora.rtc.video.VideoEncoderConfiguration.ORIENTATION_MODE>;
						public getValue(): number;
					}
					export class VideoDimensions {
						public static class: java.lang.Class<io.agora.rtc.video.VideoEncoderConfiguration.VideoDimensions>;
						public width: number;
						public height: number;
						public constructor();
						public constructor(param0: number, param1: number);
					}
				}
			}
		}
	}
}

declare module io {
	export module agora {
		export module rtc {
			export module video {
				export class WatermarkOptions {
					public static class: java.lang.Class<io.agora.rtc.video.WatermarkOptions>;
					public visibleInPreview: boolean;
					public positionInLandscapeMode: io.agora.rtc.video.WatermarkOptions.Rectangle;
					public positionInPortraitMode: io.agora.rtc.video.WatermarkOptions.Rectangle;
					public constructor();
				}
				export module WatermarkOptions {
					export class Rectangle {
						public static class: java.lang.Class<io.agora.rtc.video.WatermarkOptions.Rectangle>;
						public x: number;
						public y: number;
						public width: number;
						public height: number;
						public constructor();
						public constructor(param0: number, param1: number, param2: number, param3: number);
					}
				}
			}
		}
	}
}

//Generics information:
//com.coloros.ocs.base.common.api.Api:1
//com.coloros.ocs.base.common.api.Api.AbstractClientBuilder:2
//com.coloros.ocs.base.common.api.Api.AnyClientKey:1
//com.coloros.ocs.base.common.api.Api.BaseClientBuilder:2
//com.coloros.ocs.base.common.api.Api.ClientKey:1
//com.coloros.ocs.base.common.api.Api.SimpleClient:1
//com.coloros.ocs.base.common.api.BaseClient:1
//com.coloros.ocs.base.common.api.ColorApi:2
//com.coloros.ocs.base.common.api.TaskListenerHolder:1
//com.coloros.ocs.base.common.api.TaskListenerHolder.FailureNotifier:1
//com.coloros.ocs.base.common.api.TaskListenerHolder.SuccessNotifier:1
//com.coloros.ocs.base.common.api.c:1
//com.coloros.ocs.base.task.Continuation:2
//com.coloros.ocs.base.task.OnCompleteListener:1
//com.coloros.ocs.base.task.OnSuccessListener:1
//com.coloros.ocs.base.task.SuccessContinuation:2
//com.coloros.ocs.base.task.Task:1
//com.coloros.ocs.base.task.TaskCompletionSource:1
//com.coloros.ocs.base.task.TaskImpl:1
//com.coloros.ocs.base.task.b:1
//com.coloros.ocs.base.task.c:2
//com.coloros.ocs.base.task.d:1
//com.coloros.ocs.base.task.f:1
//com.coloros.ocs.base.task.h:1
//com.coloros.ocs.base.task.j:1
//com.coloros.ocs.base.task.m:2
//com.coloros.ocs.base.task.p:1
//com.coloros.ocs.base.task.q:1

