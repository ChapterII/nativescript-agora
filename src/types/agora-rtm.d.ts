/// <reference path="android-declarations.d.ts"/>

declare module io {
	export module agora {
		export module common {
			export class AgoraServiceJNI {
				public static class: java.lang.Class<io.agora.common.AgoraServiceJNI>;
				public static deleteRtmService(param0: number): void;
				public static nativeGetSdkVersion(): string;
				public static newPointerArray(param0: number): number;
				public static deleteLongLongPointer(param0: number): void;
				public static getPointerArrayElement(param0: number, param1: number): number;
				public static deletePointerArray(param0: number): void;
				public static getLocalHost(): string;
				public static newCharArray(param0: number): number;
				public static newLongLongPointer(): number;
				public constructor();
				public static getCharArrayElement(param0: number, param1: number): java.lang.Byte;
				public static dereferenceLongLongPointer(param0: number): number;
				public static getRandomUUID(): string;
				public static nativeLog(param0: number, param1: string): number;
				public static getLocalHostList(): native.Array<string>;
				public static ensureNativeInitialized(): boolean;
				public static createRtmService(param0: string, param1: string, param2: string, param3: string, param4: string, param5: string, param6: string): number;
				public static utf8ToString(param0: native.Array<number>): string;
				public static deleteCharArray(param0: number): void;
				public static setPointerArrayElement(param0: number, param1: number, param2: number): void;
				public static setCharArrayElement(param0: number, param1: number, param2: number): void;
				public static stringToUtf8(param0: string): native.Array<number>;
			}
		}
	}
}

declare module io {
	export module agora {
		export module common {
			export class Logging {
				public static class: java.lang.Class<io.agora.common.Logging>;
				public static e(param0: string, param1: string, param2: java.lang.Throwable): void;
				public static w(param0: string): void;
				public static e(param0: string, param1: string): void;
				public static i(param0: string, param1: string): void;
				public static i(param0: string): void;
				public static desensetize(param0: string): string;
				public static w(param0: string, param1: string): void;
				public static d(param0: string): void;
				public static d(param0: string, param1: string): void;
				public static e(param0: string): void;
				public constructor();
				public static log(param0: number, param1: string, param2: string): void;
			}
		}
	}
}

declare module io {
	export module agora {
		export module common {
			export class LruCache<K, V>  extends java.util.LinkedHashMap<any,any> {
				public static class: java.lang.Class<io.agora.common.LruCache<any,any>>;
				public constructor(param0: number);
				public removeEldestEntry(param0: java.util.Map.Entry<any,any>): boolean;
			}
		}
	}
}

declare module io {
	export module agora {
		export module common {
			export module annotation {
				export class IntDef {
					public static class: java.lang.Class<io.agora.common.annotation.IntDef>;
					/**
					 * Constructs a new instance of the io.agora.common.annotation.IntDef interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						value(): native.Array<number>;
						flag(): boolean;
					});
					public constructor();
					public value(): native.Array<number>;
					public flag(): boolean;
				}
			}
		}
	}
}

declare module io {
	export module agora {
		export module common {
			export module annotation {
				export class NonNull {
					public static class: java.lang.Class<io.agora.common.annotation.NonNull>;
					/**
					 * Constructs a new instance of the io.agora.common.annotation.NonNull interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
					});
					public constructor();
				}
			}
		}
	}
}

declare module io {
	export module agora {
		export module common {
			export module annotation {
				export class Nullable {
					public static class: java.lang.Class<io.agora.common.annotation.Nullable>;
					/**
					 * Constructs a new instance of the io.agora.common.annotation.Nullable interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
					});
					public constructor();
				}
			}
		}
	}
}

declare module io {
	export module agora {
		export module rtm {
			export class ChannelAttributeOptions {
				public static class: java.lang.Class<io.agora.rtm.ChannelAttributeOptions>;
				public getEnableNotificationToChannelMembers(): boolean;
				public setEnableNotificationToChannelMembers(param0: boolean): void;
				public constructor(param0: boolean);
				public toString(): string;
				public constructor();
			}
		}
	}
}

declare module io {
	export module agora {
		export module rtm {
			export class ErrorInfo {
				public static class: java.lang.Class<io.agora.rtm.ErrorInfo>;
				public constructor(param0: number, param1: string);
				public getErrorDescription(): string;
				public constructor(param0: number);
				public getErrorCode(): number;
				public toString(): string;
			}
		}
	}
}

declare module io {
	export module agora {
		export module rtm {
			export class LocalInvitation {
				public static class: java.lang.Class<io.agora.rtm.LocalInvitation>;
				/**
				 * Constructs a new instance of the io.agora.rtm.LocalInvitation interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					getCalleeId(): string;
					setContent(param0: string): void;
					getContent(): string;
					setChannelId(param0: string): void;
					getChannelId(): string;
					getResponse(): string;
					getState(): number;
				});
				public constructor();
				public setContent(param0: string): void;
				public getResponse(): string;
				public getContent(): string;
				public getState(): number;
				public getChannelId(): string;
				public getCalleeId(): string;
				public setChannelId(param0: string): void;
			}
		}
	}
}

declare module io {
	export module agora {
		export module rtm {
			export class PeerOnlineState {
				public static class: java.lang.Class<io.agora.rtm.PeerOnlineState>;
				public static ONLINE: number;
				public static UNREACHABLE: number;
				public static OFFLINE: number;
				public constructor();
			}
		}
	}
}

declare module io {
	export module agora {
		export module rtm {
			export class PeerSubscriptionOption {
				public static class: java.lang.Class<io.agora.rtm.PeerSubscriptionOption>;
				public static ONLINE: number;
				public constructor();
			}
		}
	}
}

declare module io {
	export module agora {
		export module rtm {
			export class RemoteInvitation {
				public static class: java.lang.Class<io.agora.rtm.RemoteInvitation>;
				/**
				 * Constructs a new instance of the io.agora.rtm.RemoteInvitation interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					getCallerId(): string;
					getContent(): string;
					getChannelId(): string;
					setResponse(param0: string): void;
					getResponse(): string;
					getState(): number;
				});
				public constructor();
				public setResponse(param0: string): void;
				public getResponse(): string;
				public getCallerId(): string;
				public getContent(): string;
				public getState(): number;
				public getChannelId(): string;
			}
		}
	}
}

declare module io {
	export module agora {
		export module rtm {
			export class ResultCallback<T>  extends java.lang.Object {
				public static class: java.lang.Class<io.agora.rtm.ResultCallback<any>>;
				/**
				 * Constructs a new instance of the io.agora.rtm.ResultCallback<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onSuccess(param0: T): void;
					onFailure(param0: io.agora.rtm.ErrorInfo): void;
				});
				public constructor();
				public onFailure(param0: io.agora.rtm.ErrorInfo): void;
				public onSuccess(param0: T): void;
			}
		}
	}
}

declare module io {
	export module agora {
		export module rtm {
			export class RtmAttribute {
				public static class: java.lang.Class<io.agora.rtm.RtmAttribute>;
				public setValue(param0: string): void;
				public getValue(): string;
				public toString(): string;
				public setKey(param0: string): void;
				public constructor(param0: string, param1: string);
				public getKey(): string;
				public constructor();
			}
		}
	}
}

declare module io {
	export module agora {
		export module rtm {
			export class RtmCallEventListener {
				public static class: java.lang.Class<io.agora.rtm.RtmCallEventListener>;
				/**
				 * Constructs a new instance of the io.agora.rtm.RtmCallEventListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onLocalInvitationReceivedByPeer(param0: io.agora.rtm.LocalInvitation): void;
					onLocalInvitationAccepted(param0: io.agora.rtm.LocalInvitation, param1: string): void;
					onLocalInvitationRefused(param0: io.agora.rtm.LocalInvitation, param1: string): void;
					onLocalInvitationCanceled(param0: io.agora.rtm.LocalInvitation): void;
					onLocalInvitationFailure(param0: io.agora.rtm.LocalInvitation, param1: number): void;
					onRemoteInvitationReceived(param0: io.agora.rtm.RemoteInvitation): void;
					onRemoteInvitationAccepted(param0: io.agora.rtm.RemoteInvitation): void;
					onRemoteInvitationRefused(param0: io.agora.rtm.RemoteInvitation): void;
					onRemoteInvitationCanceled(param0: io.agora.rtm.RemoteInvitation): void;
					onRemoteInvitationFailure(param0: io.agora.rtm.RemoteInvitation, param1: number): void;
				});
				public constructor();
				public onLocalInvitationReceivedByPeer(param0: io.agora.rtm.LocalInvitation): void;
				public onLocalInvitationAccepted(param0: io.agora.rtm.LocalInvitation, param1: string): void;
				public onLocalInvitationFailure(param0: io.agora.rtm.LocalInvitation, param1: number): void;
				public onLocalInvitationRefused(param0: io.agora.rtm.LocalInvitation, param1: string): void;
				public onRemoteInvitationCanceled(param0: io.agora.rtm.RemoteInvitation): void;
				public onLocalInvitationCanceled(param0: io.agora.rtm.LocalInvitation): void;
				public onRemoteInvitationAccepted(param0: io.agora.rtm.RemoteInvitation): void;
				public onRemoteInvitationFailure(param0: io.agora.rtm.RemoteInvitation, param1: number): void;
				public onRemoteInvitationReceived(param0: io.agora.rtm.RemoteInvitation): void;
				public onRemoteInvitationRefused(param0: io.agora.rtm.RemoteInvitation): void;
			}
		}
	}
}

declare module io {
	export module agora {
		export module rtm {
			export abstract class RtmCallManager {
				public static class: java.lang.Class<io.agora.rtm.RtmCallManager>;
				public setEventListener(param0: io.agora.rtm.RtmCallEventListener): void;
				public refuseRemoteInvitation(param0: io.agora.rtm.RemoteInvitation, param1: io.agora.rtm.ResultCallback<java.lang.Void>): void;
				public sendLocalInvitation(param0: io.agora.rtm.LocalInvitation, param1: io.agora.rtm.ResultCallback<java.lang.Void>): void;
				public createLocalInvitation(param0: string): io.agora.rtm.LocalInvitation;
				public acceptRemoteInvitation(param0: io.agora.rtm.RemoteInvitation, param1: io.agora.rtm.ResultCallback<java.lang.Void>): void;
				public cancelLocalInvitation(param0: io.agora.rtm.LocalInvitation, param1: io.agora.rtm.ResultCallback<java.lang.Void>): void;
				public constructor();
			}
		}
	}
}

declare module io {
	export module agora {
		export module rtm {
			export abstract class RtmChannel {
				public static class: java.lang.Class<io.agora.rtm.RtmChannel>;
				public getMembers(param0: io.agora.rtm.ResultCallback<java.util.List<io.agora.rtm.RtmChannelMember>>): void;
				public getId(): string;
				public release(): void;
				public sendMessage(param0: io.agora.rtm.RtmMessage, param1: io.agora.rtm.SendMessageOptions, param2: io.agora.rtm.ResultCallback<java.lang.Void>): void;
				public sendMessage(param0: io.agora.rtm.RtmMessage, param1: io.agora.rtm.ResultCallback<java.lang.Void>): void;
				public join(param0: io.agora.rtm.ResultCallback<java.lang.Void>): void;
				public leave(param0: io.agora.rtm.ResultCallback<java.lang.Void>): void;
				public constructor();
			}
		}
	}
}

declare module io {
	export module agora {
		export module rtm {
			export class RtmChannelAttribute {
				public static class: java.lang.Class<io.agora.rtm.RtmChannelAttribute>;
				public setValue(param0: string): void;
				public constructor(param0: string, param1: string, param2: string, param3: number);
				public getValue(): string;
				public getLastUpdateTs(): number;
				public toString(): string;
				public setKey(param0: string): void;
				public getLastUpdateUserId(): string;
				public constructor(param0: string, param1: string);
				public getKey(): string;
				public constructor();
			}
		}
	}
}

declare module io {
	export module agora {
		export module rtm {
			export class RtmChannelListener {
				public static class: java.lang.Class<io.agora.rtm.RtmChannelListener>;
				/**
				 * Constructs a new instance of the io.agora.rtm.RtmChannelListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onMemberCountUpdated(param0: number): void;
					onAttributesUpdated(param0: java.util.List<io.agora.rtm.RtmChannelAttribute>): void;
					onMessageReceived(param0: io.agora.rtm.RtmMessage, param1: io.agora.rtm.RtmChannelMember): void;
					onImageMessageReceived(param0: io.agora.rtm.RtmImageMessage, param1: io.agora.rtm.RtmChannelMember): void;
					onFileMessageReceived(param0: io.agora.rtm.RtmFileMessage, param1: io.agora.rtm.RtmChannelMember): void;
					onMemberJoined(param0: io.agora.rtm.RtmChannelMember): void;
					onMemberLeft(param0: io.agora.rtm.RtmChannelMember): void;
				});
				public constructor();
				public onImageMessageReceived(param0: io.agora.rtm.RtmImageMessage, param1: io.agora.rtm.RtmChannelMember): void;
				public onMessageReceived(param0: io.agora.rtm.RtmMessage, param1: io.agora.rtm.RtmChannelMember): void;
				public onMemberLeft(param0: io.agora.rtm.RtmChannelMember): void;
				public onFileMessageReceived(param0: io.agora.rtm.RtmFileMessage, param1: io.agora.rtm.RtmChannelMember): void;
				public onMemberJoined(param0: io.agora.rtm.RtmChannelMember): void;
				public onMemberCountUpdated(param0: number): void;
				public onAttributesUpdated(param0: java.util.List<io.agora.rtm.RtmChannelAttribute>): void;
			}
		}
	}
}

declare module io {
	export module agora {
		export module rtm {
			export abstract class RtmChannelMember {
				public static class: java.lang.Class<io.agora.rtm.RtmChannelMember>;
				public getUserId(): string;
				public getChannelId(): string;
				public constructor();
			}
		}
	}
}

declare module io {
	export module agora {
		export module rtm {
			export class RtmChannelMemberCount {
				public static class: java.lang.Class<io.agora.rtm.RtmChannelMemberCount>;
				public setChannelID(param0: string): void;
				public getMemberCount(): number;
				public setMemberCount(param0: number): void;
				public constructor(param0: string, param1: number);
				public getChannelID(): string;
				public toString(): string;
				public constructor();
			}
		}
	}
}

declare module io {
	export module agora {
		export module rtm {
			export abstract class RtmClient {
				public static class: java.lang.Class<io.agora.rtm.RtmClient>;
				public static LOG_FILTER_OFF: number;
				public static LOG_FILTER_INFO: number;
				public static LOG_FILTER_WARNING: number;
				public static LOG_FILTER_ERROR: number;
				public static LOG_FILTER_CRITICAL: number;
				public static AGORA_RTM_END_CALL_PREFIX: string;
				public subscribePeersOnlineStatus(param0: java.util.Set<string>, param1: io.agora.rtm.ResultCallback<java.lang.Void>): void;
				public logout(param0: io.agora.rtm.ResultCallback<java.lang.Void>): void;
				public getRtmCallManager(): io.agora.rtm.RtmCallManager;
				public getChannelAttributesByKeys(param0: string, param1: java.util.List<string>, param2: io.agora.rtm.ResultCallback<java.util.List<io.agora.rtm.RtmChannelAttribute>>): void;
				public getChannelMemberCount(param0: java.util.List<string>, param1: io.agora.rtm.ResultCallback<java.util.List<io.agora.rtm.RtmChannelMemberCount>>): void;
				public createFileMessageByUploading(param0: string, param1: io.agora.rtm.RtmRequestId, param2: io.agora.rtm.ResultCallback<io.agora.rtm.RtmFileMessage>): void;
				public constructor();
				public createMessage(param0: native.Array<number>): io.agora.rtm.RtmMessage;
				public deleteChannelAttributesByKeys(param0: string, param1: java.util.List<string>, param2: io.agora.rtm.ChannelAttributeOptions, param3: io.agora.rtm.ResultCallback<java.lang.Void>): void;
				public getChannelAttributes(param0: string, param1: io.agora.rtm.ResultCallback<java.util.List<io.agora.rtm.RtmChannelAttribute>>): void;
				public unsubscribePeersOnlineStatus(param0: java.util.Set<string>, param1: io.agora.rtm.ResultCallback<java.lang.Void>): void;
				public createMessage(param0: string): io.agora.rtm.RtmMessage;
				public createImageMessageByUploading(param0: string, param1: io.agora.rtm.RtmRequestId, param2: io.agora.rtm.ResultCallback<io.agora.rtm.RtmImageMessage>): void;
				public static getSdkVersion(): string;
				public queryPeersOnlineStatus(param0: java.util.Set<string>, param1: io.agora.rtm.ResultCallback<java.util.Map<string,java.lang.Boolean>>): void;
				public deleteLocalUserAttributesByKeys(param0: java.util.List<string>, param1: io.agora.rtm.ResultCallback<java.lang.Void>): void;
				public createMessage(): io.agora.rtm.RtmMessage;
				public cancelMediaUpload(param0: io.agora.rtm.RtmRequestId, param1: io.agora.rtm.ResultCallback<java.lang.Void>): void;
				public setLogFilter(param0: number): number;
				public release(): void;
				public downloadMediaToFile(param0: string, param1: string, param2: io.agora.rtm.RtmRequestId, param3: io.agora.rtm.ResultCallback<java.lang.Void>): void;
				public renewToken(param0: string, param1: io.agora.rtm.ResultCallback<java.lang.Void>): void;
				public sendMessageToPeer(param0: string, param1: io.agora.rtm.RtmMessage, param2: io.agora.rtm.SendMessageOptions, param3: io.agora.rtm.ResultCallback<java.lang.Void>): void;
				public setParameters(param0: string): number;
				/** @deprecated */
				public sendMessageToPeer(param0: string, param1: io.agora.rtm.RtmMessage, param2: io.agora.rtm.ResultCallback<java.lang.Void>): void;
				public queryPeersBySubscriptionOption(param0: java.lang.Integer, param1: io.agora.rtm.ResultCallback<java.util.Set<string>>): void;
				public setChannelAttributes(param0: string, param1: java.util.List<io.agora.rtm.RtmChannelAttribute>, param2: io.agora.rtm.ChannelAttributeOptions, param3: io.agora.rtm.ResultCallback<java.lang.Void>): void;
				public createMessage(param0: native.Array<number>, param1: string): io.agora.rtm.RtmMessage;
				public addOrUpdateLocalUserAttributes(param0: java.util.List<io.agora.rtm.RtmAttribute>, param1: io.agora.rtm.ResultCallback<java.lang.Void>): void;
				public setLogFileSize(param0: number): number;
				public cancelMediaDownload(param0: io.agora.rtm.RtmRequestId, param1: io.agora.rtm.ResultCallback<java.lang.Void>): void;
				public clearChannelAttributes(param0: string, param1: io.agora.rtm.ChannelAttributeOptions, param2: io.agora.rtm.ResultCallback<java.lang.Void>): void;
				public createFileMessageByMediaId(param0: string): io.agora.rtm.RtmFileMessage;
				public createChannel(param0: string, param1: io.agora.rtm.RtmChannelListener): io.agora.rtm.RtmChannel;
				public clearLocalUserAttributes(param0: io.agora.rtm.ResultCallback<java.lang.Void>): void;
				public setLocalUserAttributes(param0: java.util.List<io.agora.rtm.RtmAttribute>, param1: io.agora.rtm.ResultCallback<java.lang.Void>): void;
				public getUserAttributesByKeys(param0: string, param1: java.util.List<string>, param2: io.agora.rtm.ResultCallback<java.util.List<io.agora.rtm.RtmAttribute>>): void;
				public createImageMessageByMediaId(param0: string): io.agora.rtm.RtmImageMessage;
				public static createInstance(param0: globalAndroid.content.Context, param1: string, param2: io.agora.rtm.RtmClientListener): io.agora.rtm.RtmClient;
				public login(param0: string, param1: string, param2: io.agora.rtm.ResultCallback<java.lang.Void>): void;
				public addOrUpdateChannelAttributes(param0: string, param1: java.util.List<io.agora.rtm.RtmChannelAttribute>, param2: io.agora.rtm.ChannelAttributeOptions, param3: io.agora.rtm.ResultCallback<java.lang.Void>): void;
				public downloadMediaToMemory(param0: string, param1: io.agora.rtm.RtmRequestId, param2: io.agora.rtm.ResultCallback<native.Array<number>>): void;
				public getUserAttributes(param0: string, param1: io.agora.rtm.ResultCallback<java.util.List<io.agora.rtm.RtmAttribute>>): void;
				public setLogFile(param0: string): number;
				public static setRtmServiceContext(param0: io.agora.rtm.RtmServiceContext): io.agora.rtm.jni.SET_RTM_SERVICE_CONTEXT_ERR_CODE;
			}
		}
	}
}

declare module io {
	export module agora {
		export module rtm {
			export class RtmClientListener {
				public static class: java.lang.Class<io.agora.rtm.RtmClientListener>;
				/**
				 * Constructs a new instance of the io.agora.rtm.RtmClientListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onConnectionStateChanged(param0: number, param1: number): void;
					onMessageReceived(param0: io.agora.rtm.RtmMessage, param1: string): void;
					onImageMessageReceivedFromPeer(param0: io.agora.rtm.RtmImageMessage, param1: string): void;
					onFileMessageReceivedFromPeer(param0: io.agora.rtm.RtmFileMessage, param1: string): void;
					onMediaUploadingProgress(param0: io.agora.rtm.RtmMediaOperationProgress, param1: number): void;
					onMediaDownloadingProgress(param0: io.agora.rtm.RtmMediaOperationProgress, param1: number): void;
					onTokenExpired(): void;
					onPeersOnlineStatusChanged(param0: java.util.Map<string,java.lang.Integer>): void;
				});
				public constructor();
				public onMediaUploadingProgress(param0: io.agora.rtm.RtmMediaOperationProgress, param1: number): void;
				public onFileMessageReceivedFromPeer(param0: io.agora.rtm.RtmFileMessage, param1: string): void;
				public onConnectionStateChanged(param0: number, param1: number): void;
				public onMessageReceived(param0: io.agora.rtm.RtmMessage, param1: string): void;
				public onTokenExpired(): void;
				public onPeersOnlineStatusChanged(param0: java.util.Map<string,java.lang.Integer>): void;
				public onMediaDownloadingProgress(param0: io.agora.rtm.RtmMediaOperationProgress, param1: number): void;
				public onImageMessageReceivedFromPeer(param0: io.agora.rtm.RtmImageMessage, param1: string): void;
			}
		}
	}
}

declare module io {
	export module agora {
		export module rtm {
			export abstract class RtmFileMessage extends io.agora.rtm.RtmMessage {
				public static class: java.lang.Class<io.agora.rtm.RtmFileMessage>;
				public setFileName(param0: string): void;
				public getThumbnail(): native.Array<number>;
				public getFileName(): string;
				public getSize(): number;
				public setThumbnail(param0: native.Array<number>): void;
				public constructor();
				public getMediaId(): string;
			}
		}
	}
}

declare module io {
	export module agora {
		export module rtm {
			export abstract class RtmImageMessage extends io.agora.rtm.RtmMessage {
				public static class: java.lang.Class<io.agora.rtm.RtmImageMessage>;
				public setHeight(param0: number): void;
				public getHeight(): number;
				public getFileName(): string;
				public setThumbnailWidth(param0: number): void;
				public setThumbnailHeight(param0: number): void;
				public setThumbnail(param0: native.Array<number>): void;
				public constructor();
				public setWidth(param0: number): void;
				public getWidth(): number;
				public setFileName(param0: string): void;
				public getThumbnail(): native.Array<number>;
				public getThumbnailHeight(): number;
				public getSize(): number;
				public getThumbnailWidth(): number;
				public getMediaId(): string;
			}
		}
	}
}

declare module io {
	export module agora {
		export module rtm {
			export class RtmMediaOperationProgress {
				public static class: java.lang.Class<io.agora.rtm.RtmMediaOperationProgress>;
				public totalSize: number;
				public currentSize: number;
				public toString(): string;
				public constructor();
			}
		}
	}
}

declare module io {
	export module agora {
		export module rtm {
			export abstract class RtmMessage {
				public static class: java.lang.Class<io.agora.rtm.RtmMessage>;
				public setRawMessage(param0: native.Array<number>): void;
				public setRawMessage(param0: native.Array<number>, param1: string): void;
				public isOfflineMessage(): boolean;
				public getRawMessage(): native.Array<number>;
				public getMessageType(): number;
				public getServerReceivedTs(): number;
				public setText(param0: string): void;
				public constructor();
				public getText(): string;
			}
		}
	}
}

declare module io {
	export module agora {
		export module rtm {
			export class RtmMessageType {
				public static class: java.lang.Class<io.agora.rtm.RtmMessageType>;
				public static UNDEFINED: number;
				public static TEXT: number;
				public static RAW: number;
				public static FILE: number;
				public static IMAGE: number;
				public constructor();
			}
		}
	}
}

declare module io {
	export module agora {
		export module rtm {
			export class RtmRequestId {
				public static class: java.lang.Class<io.agora.rtm.RtmRequestId>;
				public getRequestId(): number;
				public constructor(param0: number);
				public toString(): string;
				public setRequestId(param0: number): void;
				public constructor();
			}
		}
	}
}

declare module io {
	export module agora {
		export module rtm {
			export class RtmServiceContext {
				public static class: java.lang.Class<io.agora.rtm.RtmServiceContext>;
				public areaCode: number;
				public toString(): string;
				public constructor();
			}
			export module RtmServiceContext {
				export class RtmAreaCode {
					public static class: java.lang.Class<io.agora.rtm.RtmServiceContext.RtmAreaCode>;
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
		export module rtm {
			export class RtmStatusCode {
				public static class: java.lang.Class<io.agora.rtm.RtmStatusCode>;
				/**
				 * Constructs a new instance of the io.agora.rtm.RtmStatusCode interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
				});
				public constructor();
			}
			export module RtmStatusCode {
				export class AttributeOperationError {
					public static class: java.lang.Class<io.agora.rtm.RtmStatusCode.AttributeOperationError>;
					/**
					 * Constructs a new instance of the io.agora.rtm.RtmStatusCode$AttributeOperationError interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
					});
					public constructor();
					public static ATTRIBUTE_OPERATION_ERR_TOO_OFTEN: number;
					public static ATTRIBUTE_OPERATION_ERR_TIMEOUT: number;
					public static ATTRIBUTE_OPERATION_ERR_USER_NOT_LOGGED_IN: number;
					public static ATTRIBUTE_OPERATION_ERR_INVALID_ARGUMENT: number;
					public static ATTRIBUTE_OPERATION_ERR_OK: number;
					public static ATTRIBUTE_OPERATION_ERR_USER_NOT_FOUND: number;
					public static ATTRIBUTE_OPERATION_ERR_NOT_READY: number;
					public static ATTRIBUTE_OPERATION_ERR_SIZE_OVERFLOW: number;
					public static ATTRIBUTE_OPERATION_ERR_FAILURE: number;
					public static ATTRIBUTE_OPERATION_ERR_NOT_INITIALIZED: number;
				}
				export class CancelMediaError {
					public static class: java.lang.Class<io.agora.rtm.RtmStatusCode.CancelMediaError>;
					/**
					 * Constructs a new instance of the io.agora.rtm.RtmStatusCode$CancelMediaError interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
					});
					public constructor();
					public static CANCEL_MEDIA_ERR_FAILURE: number;
					public static CANCEL_MEDIA_ERR_NOT_LOGGED_IN: number;
					public static CANCEL_MEDIA_ERR_OK: number;
					public static CANCEL_MEDIA_ERR_NOT_INITIALIZED: number;
					public static CANCEL_MEDIA_ERR_NOT_EXIST: number;
				}
				export class ChannelMessageError {
					public static class: java.lang.Class<io.agora.rtm.RtmStatusCode.ChannelMessageError>;
					/**
					 * Constructs a new instance of the io.agora.rtm.RtmStatusCode$ChannelMessageError interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
					});
					public constructor();
					public static CHANNEL_MESSAGE_ERR_FAILURE: number;
					public static CHANNEL_MESSAGE_ERR_INVALID_MESSAGE: number;
					public static CHANNEL_MESSAGE_ERR_USER_NOT_LOGGED_IN: number;
					public static CHANNEL_MESSAGE_ERR_TIMEOUT: number;
					public static CHANNEL_MESSAGE_ERR_NOT_INITIALIZED: number;
					public static CHANNEL_MESSAGE_ERR_OK: number;
					public static CHANNEL_MESSAGE_ERR_TOO_OFTEN: number;
				}
				export class ConnectionChangeReason {
					public static class: java.lang.Class<io.agora.rtm.RtmStatusCode.ConnectionChangeReason>;
					/**
					 * Constructs a new instance of the io.agora.rtm.RtmStatusCode$ConnectionChangeReason interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
					});
					public constructor();
					public static CONNECTION_CHANGE_REASON_BANNED_BY_SERVER: number;
					public static CONNECTION_CHANGE_REASON_LOGIN_FAILURE: number;
					public static CONNECTION_CHANGE_REASON_LOGIN: number;
					public static CONNECTION_CHANGE_REASON_LOGOUT: number;
					public static CONNECTION_CHANGE_REASON_LOGIN_TIMEOUT: number;
					public static CONNECTION_CHANGE_REASON_REMOTE_LOGIN: number;
					public static CONNECTION_CHANGE_REASON_INTERRUPTED: number;
					public static CONNECTION_CHANGE_REASON_LOGIN_SUCCESS: number;
				}
				export class ConnectionState {
					public static class: java.lang.Class<io.agora.rtm.RtmStatusCode.ConnectionState>;
					/**
					 * Constructs a new instance of the io.agora.rtm.RtmStatusCode$ConnectionState interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
					});
					public constructor();
					public static CONNECTION_STATE_CONNECTING: number;
					public static CONNECTION_STATE_CONNECTED: number;
					public static CONNECTION_STATE_RECONNECTING: number;
					public static CONNECTION_STATE_DISCONNECTED: number;
					public static CONNECTION_STATE_ABORTED: number;
				}
				export class DownloadMediaError {
					public static class: java.lang.Class<io.agora.rtm.RtmStatusCode.DownloadMediaError>;
					/**
					 * Constructs a new instance of the io.agora.rtm.RtmStatusCode$DownloadMediaError interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
					});
					public constructor();
					public static DOWNLOAD_MEDIA_ERR_FAILURE: number;
					public static DOWNLOAD_MEDIA_ERR_INTERRUPTED: number;
					public static DOWNLOAD_MEDIA_ERR_NOT_LOGGED_IN: number;
					public static DOWNLOAD_MEDIA_ERR_NOT_INITIALIZED: number;
					public static DOWNLOAD_MEDIA_ERR_TIMEOUT: number;
					public static DOWNLOAD_MEDIA_ERR_CONCURRENCY_LIMIT_EXCEEDED: number;
					public static DOWNLOAD_MEDIA_ERR_NOT_EXIST: number;
					public static DOWNLOAD_MEDIA_ERR_OK: number;
					public static DOWNLOAD_MEDIA_ERR_INVALID_ARGUMENT: number;
				}
				export class GetChannelMemberCountErrCode {
					public static class: java.lang.Class<io.agora.rtm.RtmStatusCode.GetChannelMemberCountErrCode>;
					/**
					 * Constructs a new instance of the io.agora.rtm.RtmStatusCode$GetChannelMemberCountErrCode interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
					});
					public constructor();
					public static GET_CHANNEL_MEMBER_COUNT_ERR_USER_NOT_LOGGED_IN: number;
					public static GET_CHANNEL_MEMBER_COUNT_ERR_INVALID_ARGUMENT: number;
					public static GET_CHANNEL_MEMBER_COUNT_ERR_EXCEED_LIMIT: number;
					public static GET_CHANNEL_MEMBER_COUNT_ERR_TIMEOUT: number;
					public static GET_CHANNEL_MEMBER_COUNT_ERR_TOO_OFTEN: number;
					public static GET_CHANNEL_MEMBER_COUNT_ERR_FAILURE: number;
					public static GET_CHANNEL_MEMBER_COUNT_ERR_OK: number;
					public static GET_CHANNEL_MEMBER_COUNT_ERR_NOT_INITIALIZED: number;
				}
				export class GetMembersError {
					public static class: java.lang.Class<io.agora.rtm.RtmStatusCode.GetMembersError>;
					/**
					 * Constructs a new instance of the io.agora.rtm.RtmStatusCode$GetMembersError interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
					});
					public constructor();
					public static GET_MEMBERS_ERR_NOT_IN_CHANNEL: number;
					public static GET_MEMBERS_ERR_TIMEOUT: number;
					public static GET_MEMBERS_ERR_OK: number;
					public static GET_MEMBERS_ERR_USER_NOT_LOGGED_IN: number;
					public static GET_MEMBERS_ERR_REJECTED: number;
					public static GET_MEMBERS_ERR_FAILURE: number;
					public static GET_MEMBERS_ERR_TOO_OFTEN: number;
					public static GET_MEMBERS_ERR_NOT_INITIALIZED: number;
				}
				export class InvitationApiCallError {
					public static class: java.lang.Class<io.agora.rtm.RtmStatusCode.InvitationApiCallError>;
					/**
					 * Constructs a new instance of the io.agora.rtm.RtmStatusCode$InvitationApiCallError interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
					});
					public constructor();
					public static INVITATION_API_CALL_ERR_ALREADY_ACCEPT: number;
					public static INVITATION_API_CALL_ERR_ALREADY_SENT: number;
					public static INVITATION_API_CALL_ERR_OK: number;
					public static INVITATION_API_CALL_ERR_INVALID_ARGUMENT: number;
					public static INVITATION_API_CALL_ERR_NOT_STARTED: number;
					public static INVITATION_API_CALL_ERR_ALREADY_END: number;
				}
				export class JoinChannelError {
					public static class: java.lang.Class<io.agora.rtm.RtmStatusCode.JoinChannelError>;
					/**
					 * Constructs a new instance of the io.agora.rtm.RtmStatusCode$JoinChannelError interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
					});
					public constructor();
					public static JOIN_CHANNEL_ERR_USER_NOT_LOGGED_IN: number;
					public static JOIN_CHANNEL_ERR_INVALID_ARGUMENT: number;
					public static JOIN_CHANNEL_ERR_ALREADY_JOINED: number;
					public static JOIN_CHANNEL_ERR_TOO_OFTEN: number;
					public static JOIN_CHANNEL_ERR_FAILURE: number;
					public static JOIN_CHANNEL_ERR_REJECTED: number;
					public static JOIN_CHANNEL_ERR_JOIN_SAME_CHANNEL_TOO_OFTEN: number;
					public static JOIN_CHANNEL_ERR_OK: number;
					public static JOIN_CHANNEL_TIMEOUT: number;
					public static JOIN_CHANNEL_ERR_EXCEED_LIMIT: number;
					public static JOIN_CHANNEL_ERR_NOT_INITIALIZED: number;
				}
				export class LeaveChannelError {
					public static class: java.lang.Class<io.agora.rtm.RtmStatusCode.LeaveChannelError>;
					/**
					 * Constructs a new instance of the io.agora.rtm.RtmStatusCode$LeaveChannelError interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
					});
					public constructor();
					public static LEAVE_CHANNEL_ERR_OK: number;
					public static LEAVE_CHANNEL_ERR_REJECTED: number;
					public static LEAVE_CHANNEL_ERR_FAILURE: number;
					public static LEAVE_CHANNEL_ERR_NOT_IN_CHANNEL: number;
					public static LEAVE_CHANNEL_ERR_USER_NOT_LOGGED_IN: number;
					public static LEAVE_CHANNEL_ERR_NOT_INITIALIZED: number;
				}
				export class LocalInvitationError {
					public static class: java.lang.Class<io.agora.rtm.RtmStatusCode.LocalInvitationError>;
					/**
					 * Constructs a new instance of the io.agora.rtm.RtmStatusCode$LocalInvitationError interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
					});
					public constructor();
					public static LOCAL_INVITATION_ERR_OK: number;
					public static LOCAL_INVITATION_ERR_PEER_OFFLINE: number;
					public static LOCAL_INVITATION_ERR_PEER_NO_RESPONSE: number;
					public static LOCAL_INVITATION_ERR_INVITATION_EXPIRE: number;
					public static LOCAL_INVITATION_ERR_NOT_LOGGEDIN: number;
				}
				export class LocalInvitationState {
					public static class: java.lang.Class<io.agora.rtm.RtmStatusCode.LocalInvitationState>;
					/**
					 * Constructs a new instance of the io.agora.rtm.RtmStatusCode$LocalInvitationState interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
					});
					public constructor();
					public static LOCAL_INVITATION_STATE_CANCELED: number;
					public static LOCAL_INVITATION_STATE_SENT_TO_REMOTE: number;
					public static LOCAL_INVITATION_STATE_ACCEPTED_BY_REMOTE: number;
					public static LOCAL_INVITATION_STATE_RECEIVED_BY_REMOTE: number;
					public static LOCAL_INVITATION_STATE_REFUSED_BY_REMOTE: number;
					public static LOCAL_INVITATION_STATE_FAILURE: number;
					public static LOCAL_INVITATION_STATE_IDLE: number;
				}
				export class LoginError {
					public static class: java.lang.Class<io.agora.rtm.RtmStatusCode.LoginError>;
					/**
					 * Constructs a new instance of the io.agora.rtm.RtmStatusCode$LoginError interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
					});
					public constructor();
					public static LOGIN_ERR_OK: number;
					public static LOGIN_ERR_INVALID_TOKEN: number;
					public static LOGIN_ERR_REJECTED: number;
					public static LOGIN_ERR_ALREADY_LOGIN: number;
					public static LOGIN_ERR_NOT_INITIALIZED: number;
					public static LOGIN_ERR_TOO_OFTEN: number;
					public static LOGIN_ERR_UNKNOWN: number;
					public static LOGIN_ERR_TOKEN_EXPIRED: number;
					public static LOGIN_ERR_NOT_AUTHORIZED: number;
					public static LOGIN_ERR_TIMEOUT: number;
					public static LOGIN_ERR_INVALID_ARGUMENT: number;
					public static LOGIN_ERR_INVALID_APP_ID: number;
				}
				export class LogoutError {
					public static class: java.lang.Class<io.agora.rtm.RtmStatusCode.LogoutError>;
					/**
					 * Constructs a new instance of the io.agora.rtm.RtmStatusCode$LogoutError interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
					});
					public constructor();
					public static LOGOUT_ERR_OK: number;
					public static LOGOUT_ERR_NOT_INITIALIZED: number;
					public static LOGOUT_ERR_REJECTED: number;
					public static LOGOUT_ERR_USER_NOT_LOGGED_IN: number;
				}
				export class PeerMessageError {
					public static class: java.lang.Class<io.agora.rtm.RtmStatusCode.PeerMessageError>;
					/**
					 * Constructs a new instance of the io.agora.rtm.RtmStatusCode$PeerMessageError interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
					});
					public constructor();
					public static PEER_MESSAGE_ERR_TIMEOUT: number;
					public static PEER_MESSAGE_ERR_INVALID_USERID: number;
					public static PEER_MESSAGE_ERR_INVALID_MESSAGE: number;
					public static PEER_MESSAGE_ERR_FAILURE: number;
					public static PEER_MESSAGE_ERR_NOT_INITIALIZED: number;
					public static PEER_MESSAGE_ERR_TOO_OFTEN: number;
					public static PEER_MESSAGE_ERR_USER_NOT_LOGGED_IN: number;
					public static PEER_MESSAGE_ERR_IMCOMPATIBLE_MESSAGE: number;
					public static PEER_MESSAGE_ERR_CACHED_BY_SERVER: number;
					public static PEER_MESSAGE_ERR_OK: number;
					public static PEER_MESSAGE_ERR_PEER_UNREACHABLE: number;
				}
				export class PeerSubscriptionStatusError {
					public static class: java.lang.Class<io.agora.rtm.RtmStatusCode.PeerSubscriptionStatusError>;
					/**
					 * Constructs a new instance of the io.agora.rtm.RtmStatusCode$PeerSubscriptionStatusError interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
					});
					public constructor();
					public static PEER_SUBSCRIPTION_STATUS_ERR_FAILURE: number;
					public static PEER_SUBSCRIPTION_STATUS_ERR_OK: number;
					public static PEER_SUBSCRIPTION_STATUS_ERR_INVALID_ARGUMENT: number;
					public static PEER_SUBSCRIPTION_STATUS_ERR_TIMEOUT: number;
					public static PEER_SUBSCRIPTION_STATUS_ERR_REJECTED: number;
					public static PEER_SUBSCRIPTION_STATUS_ERR_USER_NOT_LOGGED_IN: number;
					public static PEER_SUBSCRIPTION_STATUS_ERR_TOO_OFTEN: number;
					public static PEER_SUBSCRIPTION_STATUS_ERR_NOT_INITIALIZED: number;
					public static PEER_SUBSCRIPTION_STATUS_ERR_OVERFLOW: number;
				}
				export class QueryPeersBySubscriptionOptionError {
					public static class: java.lang.Class<io.agora.rtm.RtmStatusCode.QueryPeersBySubscriptionOptionError>;
					/**
					 * Constructs a new instance of the io.agora.rtm.RtmStatusCode$QueryPeersBySubscriptionOptionError interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
					});
					public constructor();
					public static QUERY_PEERS_BY_SUBSCRIPTION_OPTION_ERR_TIMEOUT: number;
					public static QUERY_PEERS_BY_SUBSCRIPTION_OPTION_ERR_OK: number;
					public static QUERY_PEERS_BY_SUBSCRIPTION_OPTION_ERR_TOO_OFTEN: number;
					public static QUERY_PEERS_BY_SUBSCRIPTION_OPTION_ERR_FAILURE: number;
					public static QUERY_PEERS_BY_SUBSCRIPTION_OPTION_ERR_USER_NOT_LOGGED_IN: number;
					public static QUERY_PEERS_BY_SUBSCRIPTION_OPTION_ERR_NOT_INITIALIZED: number;
				}
				export class QueryPeersOnlineStatusError {
					public static class: java.lang.Class<io.agora.rtm.RtmStatusCode.QueryPeersOnlineStatusError>;
					/**
					 * Constructs a new instance of the io.agora.rtm.RtmStatusCode$QueryPeersOnlineStatusError interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
					});
					public constructor();
					public static QUERY_PEERS_ONLINE_STATUS_ERR_TOO_OFTEN: number;
					public static QUERY_PEERS_ONLINE_STATUS_ERR_TIMEOUT: number;
					public static QUERY_PEERS_ONLINE_STATUS_ERR_FAILURE: number;
					public static QUERY_PEERS_ONLINE_STATUS_ERR_REJECTED: number;
					public static QUERY_PEERS_ONLINE_STATUS_ERR_USER_NOT_LOGGED_IN: number;
					public static QUERY_PEERS_ONLINE_STATUS_ERR_INVALID_ARGUMENT: number;
					public static QUERY_PEERS_ONLINE_STATUS_ERR_NOT_INITIALIZED: number;
					public static QUERY_PEERS_ONLINE_STATUS_ERR_OK: number;
				}
				export class RemoteInvitationError {
					public static class: java.lang.Class<io.agora.rtm.RtmStatusCode.RemoteInvitationError>;
					/**
					 * Constructs a new instance of the io.agora.rtm.RtmStatusCode$RemoteInvitationError interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
					});
					public constructor();
					public static REMOTE_INVITATION_ERR_ACCEPT_FAILURE: number;
					public static REMOTE_INVITATION_ERR_OK: number;
					public static REMOTE_INVITATION_ERR_PEER_OFFLINE: number;
					public static REMOTE_INVITATION_ERR_INVITATION_EXPIRE: number;
				}
				export class RemoteInvitationState {
					public static class: java.lang.Class<io.agora.rtm.RtmStatusCode.RemoteInvitationState>;
					/**
					 * Constructs a new instance of the io.agora.rtm.RtmStatusCode$RemoteInvitationState interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
					});
					public constructor();
					public static REMOTE_INVITATION_STATE_FAILURE: number;
					public static REMOTE_INVITATION_STATE_REFUSED: number;
					public static REMOTE_INVITATION_STATE_ACCEPTED: number;
					public static REMOTE_INVITATION_STATE_CANCELED: number;
					public static REMOTE_INVITATION_STATE_IDLE: number;
					public static REMOTE_INVITATION_STATE_INVITATION_RECEIVED: number;
					public static REMOTE_INVITATION_STATE_ACCEPT_SENT_TO_LOCAL: number;
				}
				export class RenewTokenError {
					public static class: java.lang.Class<io.agora.rtm.RtmStatusCode.RenewTokenError>;
					/**
					 * Constructs a new instance of the io.agora.rtm.RtmStatusCode$RenewTokenError interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
					});
					public constructor();
					public static RENEW_TOKEN_ERR_INVALID_TOKEN: number;
					public static RENEW_TOKEN_ERR_USER_NOT_LOGGED_IN: number;
					public static RENEW_TOKEN_ERR_REJECTED: number;
					public static RENEW_TOKEN_ERR_FAILURE: number;
					public static RENEW_TOKEN_ERR_OK: number;
					public static RENEW_TOKEN_ERR_NOT_INITIALIZED: number;
					public static RENEW_TOKEN_ERR_TOKEN_EXPIRED: number;
					public static RENEW_TOKEN_ERR_TOO_OFTEN: number;
					public static RENEW_TOKEN_ERR_INVALID_ARGUMENT: number;
				}
				export class SetRtmServiceContextError {
					public static class: java.lang.Class<io.agora.rtm.RtmStatusCode.SetRtmServiceContextError>;
					/**
					 * Constructs a new instance of the io.agora.rtm.RtmStatusCode$SetRtmServiceContextError interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
					});
					public constructor();
					public static SET_RTM_SERVICE_CONTEXT_ERR_OK: number;
					public static SET_RTM_SERVICE_CONTEXT_ERR_FAILURE: number;
				}
				export class UploadMediaError {
					public static class: java.lang.Class<io.agora.rtm.RtmStatusCode.UploadMediaError>;
					/**
					 * Constructs a new instance of the io.agora.rtm.RtmStatusCode$UploadMediaError interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
					});
					public constructor();
					public static UPLOAD_MEDIA_ERR_OK: number;
					public static UPLOAD_MEDIA_ERR_CONCURRENCY_LIMIT_EXCEEDED: number;
					public static UPLOAD_MEDIA_ERR_NOT_INITIALIZED: number;
					public static UPLOAD_MEDIA_ERR_SIZE_OVERFLOW: number;
					public static UPLOAD_MEDIA_ERR_INVALID_ARGUMENT: number;
					public static UPLOAD_MEDIA_ERR_FAILURE: number;
					public static UPLOAD_MEDIA_ERR_NOT_LOGGED_IN: number;
					public static UPLOAD_MEDIA_ERR_TIMEOUT: number;
					public static UPLOAD_MEDIA_ERR_INTERRUPTED: number;
				}
			}
		}
	}
}

declare module io {
	export module agora {
		export module rtm {
			export class SendMessageOptions {
				public static class: java.lang.Class<io.agora.rtm.SendMessageOptions>;
				public enableOfflineMessaging: boolean;
				public enableHistoricalMessaging: boolean;
				public toString(): string;
				public constructor();
			}
		}
	}
}

declare module io {
	export module agora {
		export module rtm {
			export module internal {
				export class AgoraSysUtils {
					public static class: java.lang.Class<io.agora.rtm.internal.AgoraSysUtils>;
					public static getAppStorageDir(param0: globalAndroid.content.Context): string;
					public constructor();
					public static getDeviceInfo(): string;
					public static getNativeLibraryDir(param0: globalAndroid.content.Context): string;
					public static getCacheDir(param0: globalAndroid.content.Context): string;
					public static getDeviceId(): string;
					public static getSystemInfo(): string;
				}
			}
		}
	}
}

declare module io {
	export module agora {
		export module rtm {
			export module internal {
				export class LocalInvitationWrapper extends io.agora.rtm.LocalInvitation {
					public static class: java.lang.Class<io.agora.rtm.internal.LocalInvitationWrapper>;
					public getContent(): string;
					public toString(): string;
					public setContent(param0: string): void;
					public setChannelId(param0: string): void;
					public finalize(): void;
					public getCalleeId(): string;
					public getResponse(): string;
					public getChannelId(): string;
					public getState(): number;
				}
			}
		}
	}
}

declare module io {
	export module agora {
		export module rtm {
			export module internal {
				export class RemoteInvitationWrapper extends io.agora.rtm.RemoteInvitation {
					public static class: java.lang.Class<io.agora.rtm.internal.RemoteInvitationWrapper>;
					public getContent(): string;
					public getCallerId(): string;
					public toString(): string;
					public finalize(): void;
					public getResponse(): string;
					public getChannelId(): string;
					public setResponse(param0: string): void;
					public getState(): number;
				}
			}
		}
	}
}

declare module io {
	export module agora {
		export module rtm {
			export module internal {
				export class RtmCallManagerImpl extends io.agora.rtm.RtmCallManager {
					public static class: java.lang.Class<io.agora.rtm.internal.RtmCallManagerImpl>;
					public createLocalInvitation(param0: string): io.agora.rtm.LocalInvitation;
					public refuseRemoteInvitation(param0: io.agora.rtm.RemoteInvitation, param1: io.agora.rtm.ResultCallback<java.lang.Void>): void;
					public acceptRemoteInvitation(param0: io.agora.rtm.RemoteInvitation, param1: io.agora.rtm.ResultCallback<java.lang.Void>): void;
					public setEventListener(param0: io.agora.rtm.RtmCallEventListener): void;
					public sendLocalInvitation(param0: io.agora.rtm.LocalInvitation, param1: io.agora.rtm.ResultCallback<java.lang.Void>): void;
					public cancelLocalInvitation(param0: io.agora.rtm.LocalInvitation, param1: io.agora.rtm.ResultCallback<java.lang.Void>): void;
				}
				export module RtmCallManagerImpl {
					export class CallEventHandlerNative extends io.agora.rtm.jni.IRtmCallEventHandler {
						public static class: java.lang.Class<io.agora.rtm.internal.RtmCallManagerImpl.CallEventHandlerNative>;
						public onLocalInvitationRefused(param0: io.agora.rtm.jni.ILocalCallInvitation, param1: string): void;
						public onRemoteInvitationCanceled(param0: io.agora.rtm.jni.IRemoteCallInvitation): void;
						public onRemoteInvitationReceived(param0: io.agora.rtm.jni.IRemoteCallInvitation): void;
						public onRemoteInvitationRefused(param0: io.agora.rtm.jni.IRemoteCallInvitation): void;
						public onLocalInvitationReceivedByPeer(param0: io.agora.rtm.jni.ILocalCallInvitation): void;
						public onLocalInvitationCanceled(param0: io.agora.rtm.jni.ILocalCallInvitation): void;
						public onLocalInvitationAccepted(param0: io.agora.rtm.jni.ILocalCallInvitation, param1: string): void;
						public onRemoteInvitationFailure(param0: io.agora.rtm.jni.IRemoteCallInvitation, param1: io.agora.rtm.jni.REMOTE_INVITATION_ERR_CODE): void;
						public onLocalInvitationFailure(param0: io.agora.rtm.jni.ILocalCallInvitation, param1: io.agora.rtm.jni.LOCAL_INVITATION_ERR_CODE): void;
						public onRemoteInvitationAccepted(param0: io.agora.rtm.jni.IRemoteCallInvitation): void;
					}
				}
			}
		}
	}
}

declare module io {
	export module agora {
		export module rtm {
			export module internal {
				export class RtmChannelImpl extends io.agora.rtm.RtmChannel {
					public static class: java.lang.Class<io.agora.rtm.internal.RtmChannelImpl>;
					public leave(param0: io.agora.rtm.ResultCallback<java.lang.Void>): void;
					public sendMessage(param0: io.agora.rtm.RtmMessage, param1: io.agora.rtm.ResultCallback<java.lang.Void>): void;
					public getId(): string;
					public join(param0: io.agora.rtm.ResultCallback<java.lang.Void>): void;
					public finalize(): void;
					public sendMessage(param0: io.agora.rtm.RtmMessage, param1: io.agora.rtm.SendMessageOptions, param2: io.agora.rtm.ResultCallback<java.lang.Void>): void;
					public getMembers(param0: io.agora.rtm.ResultCallback<java.util.List<io.agora.rtm.RtmChannelMember>>): void;
					public release(): void;
				}
				export module RtmChannelImpl {
					export class ChannelEventHandlerNative extends io.agora.rtm.jni.IChannelEventHandler {
						public static class: java.lang.Class<io.agora.rtm.internal.RtmChannelImpl.ChannelEventHandlerNative>;
						public onMemberJoined(param0: io.agora.rtm.jni.IChannelMember): void;
						public onFileMessageReceived(param0: string, param1: io.agora.rtm.jni.IFileMessage): void;
						public onMemberLeft(param0: io.agora.rtm.jni.IChannelMember): void;
						public onJoinFailure(param0: io.agora.rtm.jni.JOIN_CHANNEL_ERR): void;
						public onLeave(param0: io.agora.rtm.jni.LEAVE_CHANNEL_ERR): void;
						public onGetMembers(param0: java.util.List<io.agora.rtm.jni.IChannelMember>, param1: io.agora.rtm.jni.GET_MEMBERS_ERR): void;
						public onImageMessageReceived(param0: string, param1: io.agora.rtm.jni.IImageMessage): void;
						public onMessageReceived(param0: string, param1: io.agora.rtm.jni.IMessage): void;
						public onMemberCountUpdated(param0: number): void;
						public onJoinSuccess(): void;
						public onAttributesUpdated(param0: java.util.List<io.agora.rtm.jni.IRtmChannelAttribute>): void;
						public onSendMessageResult(param0: number, param1: io.agora.rtm.jni.CHANNEL_MESSAGE_ERR_CODE): void;
					}
				}
			}
		}
	}
}

declare module io {
	export module agora {
		export module rtm {
			export module internal {
				export class RtmChannelMemberImpl extends io.agora.rtm.RtmChannelMember {
					public static class: java.lang.Class<io.agora.rtm.internal.RtmChannelMemberImpl>;
					public getChannelId(): string;
					public getUserId(): string;
				}
			}
		}
	}
}

declare module io {
	export module agora {
		export module rtm {
			export module internal {
				export class RtmClientImpl extends io.agora.rtm.RtmClient {
					public static class: java.lang.Class<io.agora.rtm.internal.RtmClientImpl>;
					public createMessage(param0: native.Array<number>): io.agora.rtm.RtmMessage;
					public sendMessageToPeer(param0: string, param1: io.agora.rtm.RtmMessage, param2: io.agora.rtm.SendMessageOptions, param3: io.agora.rtm.ResultCallback<java.lang.Void>): void;
					public unsubscribePeersOnlineStatus(param0: java.util.Set<string>, param1: io.agora.rtm.ResultCallback<java.lang.Void>): void;
					public getChannelMemberCount(param0: java.util.List<string>, param1: io.agora.rtm.ResultCallback<java.util.List<io.agora.rtm.RtmChannelMemberCount>>): void;
					public createImageMessageByMediaId(param0: string): io.agora.rtm.RtmImageMessage;
					public finalize(): void;
					public renewToken(param0: string, param1: io.agora.rtm.ResultCallback<java.lang.Void>): void;
					public setParameters(param0: string): number;
					public createFileMessageByUploading(param0: string, param1: io.agora.rtm.RtmRequestId, param2: io.agora.rtm.ResultCallback<io.agora.rtm.RtmFileMessage>): void;
					public createChannel(param0: string, param1: io.agora.rtm.RtmChannelListener): io.agora.rtm.RtmChannel;
					public setLogFileSize(param0: number): number;
					public createImageMessageByUploading(param0: string, param1: io.agora.rtm.RtmRequestId, param2: io.agora.rtm.ResultCallback<io.agora.rtm.RtmImageMessage>): void;
					public clearLocalUserAttributes(param0: io.agora.rtm.ResultCallback<java.lang.Void>): void;
					public addOrUpdateChannelAttributes(param0: string, param1: java.util.List<io.agora.rtm.RtmChannelAttribute>, param2: io.agora.rtm.ChannelAttributeOptions, param3: io.agora.rtm.ResultCallback<java.lang.Void>): void;
					public setLogFilter(param0: number): number;
					public logout(param0: io.agora.rtm.ResultCallback<java.lang.Void>): void;
					public cancelMediaUpload(param0: io.agora.rtm.RtmRequestId, param1: io.agora.rtm.ResultCallback<java.lang.Void>): void;
					public addOrUpdateLocalUserAttributes(param0: java.util.List<io.agora.rtm.RtmAttribute>, param1: io.agora.rtm.ResultCallback<java.lang.Void>): void;
					public queryPeersOnlineStatus(param0: java.util.Set<string>, param1: io.agora.rtm.ResultCallback<java.util.Map<string,java.lang.Boolean>>): void;
					public createMessage(param0: native.Array<number>, param1: string): io.agora.rtm.RtmMessage;
					/** @deprecated */
					public sendMessageToPeer(param0: string, param1: io.agora.rtm.RtmMessage, param2: io.agora.rtm.ResultCallback<java.lang.Void>): void;
					public getUserAttributesByKeys(param0: string, param1: java.util.List<string>, param2: io.agora.rtm.ResultCallback<java.util.List<io.agora.rtm.RtmAttribute>>): void;
					public getMediaDownloadingPercentage(param0: io.agora.rtm.RtmRequestId): number;
					public subscribePeersOnlineStatus(param0: java.util.Set<string>, param1: io.agora.rtm.ResultCallback<java.lang.Void>): void;
					public setLocalUserAttributes(param0: java.util.List<io.agora.rtm.RtmAttribute>, param1: io.agora.rtm.ResultCallback<java.lang.Void>): void;
					public removeChannel(param0: io.agora.rtm.internal.RtmChannelImpl): void;
					public getChannelAttributesByKeys(param0: string, param1: java.util.List<string>, param2: io.agora.rtm.ResultCallback<java.util.List<io.agora.rtm.RtmChannelAttribute>>): void;
					public setLogFile(param0: string): number;
					public getRtmCallManager(): io.agora.rtm.RtmCallManager;
					public getChannelAttributes(param0: string, param1: io.agora.rtm.ResultCallback<java.util.List<io.agora.rtm.RtmChannelAttribute>>): void;
					public cancelMediaDownload(param0: io.agora.rtm.RtmRequestId, param1: io.agora.rtm.ResultCallback<java.lang.Void>): void;
					public setChannelAttributes(param0: string, param1: java.util.List<io.agora.rtm.RtmChannelAttribute>, param2: io.agora.rtm.ChannelAttributeOptions, param3: io.agora.rtm.ResultCallback<java.lang.Void>): void;
					public createMessage(): io.agora.rtm.RtmMessage;
					public getUserAttributes(param0: string, param1: io.agora.rtm.ResultCallback<java.util.List<io.agora.rtm.RtmAttribute>>): void;
					public release(): void;
					public getMediaUploadingPercentage(param0: io.agora.rtm.RtmRequestId): number;
					public clearChannelAttributes(param0: string, param1: io.agora.rtm.ChannelAttributeOptions, param2: io.agora.rtm.ResultCallback<java.lang.Void>): void;
					public createFileMessageByMediaId(param0: string): io.agora.rtm.RtmFileMessage;
					public deleteLocalUserAttributesByKeys(param0: java.util.List<string>, param1: io.agora.rtm.ResultCallback<java.lang.Void>): void;
					public sendMessageToPeer(param0: string, param1: io.agora.rtm.RtmMessage, param2: io.agora.rtm.ResultCallback<java.lang.Void>): void;
					public downloadMediaToMemory(param0: string, param1: io.agora.rtm.RtmRequestId, param2: io.agora.rtm.ResultCallback<native.Array<number>>): void;
					public login(param0: string, param1: string, param2: io.agora.rtm.ResultCallback<java.lang.Void>): void;
					public downloadMediaToFile(param0: string, param1: string, param2: io.agora.rtm.RtmRequestId, param3: io.agora.rtm.ResultCallback<java.lang.Void>): void;
					public createMessage(param0: string): io.agora.rtm.RtmMessage;
					public queryPeersBySubscriptionOption(param0: java.lang.Integer, param1: io.agora.rtm.ResultCallback<java.util.Set<string>>): void;
					public deleteChannelAttributesByKeys(param0: string, param1: java.util.List<string>, param2: io.agora.rtm.ChannelAttributeOptions, param3: io.agora.rtm.ResultCallback<java.lang.Void>): void;
				}
				export module RtmClientImpl {
					export class RtmServiceEventHandlerNative extends io.agora.rtm.jni.IRtmServiceEventHandler {
						public static class: java.lang.Class<io.agora.rtm.internal.RtmClientImpl.RtmServiceEventHandlerNative>;
						public onSendMessageResult(param0: number, param1: io.agora.rtm.jni.PEER_MESSAGE_ERR_CODE): void;
						public onMediaUploadingProgress(param0: number, param1: io.agora.rtm.jni.MediaOperationProgress): void;
						public onTokenExpired(): void;
						public onConnectionStateChanged(param0: io.agora.rtm.jni.CONNECTION_STATE, param1: io.agora.rtm.jni.CONNECTION_CHANGE_REASON): void;
						public onGetChannelMemberCountResult(param0: number, param1: native.Array<io.agora.rtm.jni.IRtmChannelMemberCount>, param2: number, param3: io.agora.rtm.jni.GET_CHANNEL_MEMBER_COUNT_ERR): void;
						public onLoginFailure(param0: io.agora.rtm.jni.LOGIN_ERR_CODE): void;
						public onRenewTokenResult(param0: string, param1: io.agora.rtm.jni.RENEW_TOKEN_ERR_CODE): void;
						public onFileMediaUploadResult(param0: number, param1: io.agora.rtm.jni.IFileMessage, param2: io.agora.rtm.jni.UPLOAD_MEDIA_ERR_CODE): void;
						public onGetUserAttributesResult(param0: number, param1: string, param2: native.Array<io.agora.rtm.jni.IRtmAttribute>, param3: number, param4: io.agora.rtm.jni.ATTRIBUTE_OPERATION_ERR): void;
						public onSetChannelAttributesResult(param0: number, param1: io.agora.rtm.jni.ATTRIBUTE_OPERATION_ERR): void;
						public onQueryPeersOnlineStatusResult(param0: number, param1: native.Array<io.agora.rtm.jni.PeerOnlineStatus>, param2: number, param3: io.agora.rtm.jni.QUERY_PEERS_ONLINE_STATUS_ERR): void;
						public onAddOrUpdateLocalUserAttributesResult(param0: number, param1: io.agora.rtm.jni.ATTRIBUTE_OPERATION_ERR): void;
						public onClearLocalUserAttributesResult(param0: number, param1: io.agora.rtm.jni.ATTRIBUTE_OPERATION_ERR): void;
						public onAddOrUpdateChannelAttributesResult(param0: number, param1: io.agora.rtm.jni.ATTRIBUTE_OPERATION_ERR): void;
						public onFileMessageReceivedFromPeer(param0: string, param1: io.agora.rtm.jni.IFileMessage): void;
						public onQueryPeersBySubscriptionOptionResult(param0: number, param1: native.Array<string>, param2: number, param3: io.agora.rtm.jni.QUERY_PEERS_BY_SUBSCRIPTION_OPTION_ERR): void;
						public onMediaDownloadToMemoryResult(param0: number, param1: native.Array<number>, param2: io.agora.rtm.jni.DOWNLOAD_MEDIA_ERR_CODE): void;
						public onDeleteLocalUserAttributesResult(param0: number, param1: io.agora.rtm.jni.ATTRIBUTE_OPERATION_ERR): void;
						public onLogout(param0: io.agora.rtm.jni.LOGOUT_ERR_CODE): void;
						public onSetLocalUserAttributesResult(param0: number, param1: io.agora.rtm.jni.ATTRIBUTE_OPERATION_ERR): void;
						public onGetChannelAttributesResult(param0: number, param1: native.Array<io.agora.rtm.jni.IRtmChannelAttribute>, param2: number, param3: io.agora.rtm.jni.ATTRIBUTE_OPERATION_ERR): void;
						public onPeersOnlineStatusChanged(param0: native.Array<io.agora.rtm.jni.PeerOnlineStatus>, param1: number): void;
						public onImageMessageReceivedFromPeer(param0: string, param1: io.agora.rtm.jni.IImageMessage): void;
						public onClearChannelAttributesResult(param0: number, param1: io.agora.rtm.jni.ATTRIBUTE_OPERATION_ERR): void;
						public onMediaDownloadToFileResult(param0: number, param1: io.agora.rtm.jni.DOWNLOAD_MEDIA_ERR_CODE): void;
						public onSubscriptionRequestResult(param0: number, param1: io.agora.rtm.jni.PEER_SUBSCRIPTION_STATUS_ERR): void;
						public onMessageReceivedFromPeer(param0: string, param1: io.agora.rtm.jni.IMessage): void;
						public onMediaCancelResult(param0: number, param1: io.agora.rtm.jni.CANCEL_MEDIA_ERR_CODE): void;
						public onDeleteChannelAttributesResult(param0: number, param1: io.agora.rtm.jni.ATTRIBUTE_OPERATION_ERR): void;
						public onMediaDownloadingProgress(param0: number, param1: io.agora.rtm.jni.MediaOperationProgress): void;
						public onImageMediaUploadResult(param0: number, param1: io.agora.rtm.jni.IImageMessage, param2: io.agora.rtm.jni.UPLOAD_MEDIA_ERR_CODE): void;
						public onLoginSuccess(): void;
					}
				}
			}
		}
	}
}

declare module io {
	export module agora {
		export module rtm {
			export module internal {
				export class RtmFileMessageImpl extends io.agora.rtm.RtmFileMessage {
					public static class: java.lang.Class<io.agora.rtm.internal.RtmFileMessageImpl>;
					public getFileName(): string;
					public setThumbnail(param0: native.Array<number>): void;
					public getText(): string;
					public setRawMessage(param0: native.Array<number>, param1: string): void;
					public setSize(param0: number): void;
					public getServerReceivedTs(): number;
					public setRawMessage(param0: native.Array<number>): void;
					public getRawMessage(): native.Array<number>;
					public getSize(): number;
					public setFileName(param0: string): void;
					public setServerReceivedTs(param0: number): void;
					public setText(param0: string): void;
					public getMessageType(): number;
					public setMediaId(param0: string): void;
					public getThumbnail(): native.Array<number>;
					public isOfflineMessage(): boolean;
					public getMediaId(): string;
					public setIsOfflineMessage(param0: boolean): void;
				}
			}
		}
	}
}

declare module io {
	export module agora {
		export module rtm {
			export module internal {
				export class RtmImageMessageImpl extends io.agora.rtm.RtmImageMessage {
					public static class: java.lang.Class<io.agora.rtm.internal.RtmImageMessageImpl>;
					public setThumbnailHeight(param0: number): void;
					public setThumbnail(param0: native.Array<number>): void;
					public setSize(param0: number): void;
					public getThumbnailHeight(): number;
					public setThumbnailWidth(param0: number): void;
					public setHeight(param0: number): void;
					public getServerReceivedTs(): number;
					public setRawMessage(param0: native.Array<number>): void;
					public getRawMessage(): native.Array<number>;
					public getSize(): number;
					public setServerReceivedTs(param0: number): void;
					public setText(param0: string): void;
					public setMediaId(param0: string): void;
					public getThumbnailWidth(): number;
					public getFileName(): string;
					public getText(): string;
					public setRawMessage(param0: native.Array<number>, param1: string): void;
					public getHeight(): number;
					public setWidth(param0: number): void;
					public getWidth(): number;
					public setFileName(param0: string): void;
					public getMessageType(): number;
					public getThumbnail(): native.Array<number>;
					public isOfflineMessage(): boolean;
					public getMediaId(): string;
					public setIsOfflineMessage(param0: boolean): void;
				}
			}
		}
	}
}

declare module io {
	export module agora {
		export module rtm {
			export module internal {
				export class RtmManager {
					public static class: java.lang.Class<io.agora.rtm.internal.RtmManager>;
					public constructor();
					public static createRtmInstance(param0: globalAndroid.content.Context, param1: string, param2: io.agora.rtm.RtmClientListener): io.agora.rtm.RtmClient;
				}
			}
		}
	}
}

declare module io {
	export module agora {
		export module rtm {
			export module internal {
				export class RtmMessageImpl extends io.agora.rtm.RtmMessage {
					public static class: java.lang.Class<io.agora.rtm.internal.RtmMessageImpl>;
					public setText(param0: string): void;
					public getText(): string;
					public setRawMessage(param0: native.Array<number>, param1: string): void;
					public getMessageType(): number;
					public getServerReceivedTs(): number;
					public setRawMessage(param0: native.Array<number>): void;
					public getRawMessage(): native.Array<number>;
					public isOfflineMessage(): boolean;
				}
			}
		}
	}
}

declare module io {
	export module agora {
		export module rtm {
			export module internal {
				export abstract class RtmSdkContext {
					public static class: java.lang.Class<io.agora.rtm.internal.RtmSdkContext>;
					public static setLibraryName(param0: string): void;
					public constructor();
					public getPluginDir(): string;
					public getDeviceId(): string;
					public static getLibraryName(): string;
					public getConfigDir(): string;
					public static swigValueToEnumSafe(param0: number, param1: java.lang.Class): any;
					public getDeviceInfo(): string;
					public static swigValueToStringSafe(param0: number, param1: java.lang.Class<any>): string;
					public getDataDir(): string;
					public getSystemInfo(): string;
				}
			}
		}
	}
}

declare module io {
	export module agora {
		export module rtm {
			export module jni {
				export class ATTRIBUTE_OPERATION_ERR {
					public static class: java.lang.Class<io.agora.rtm.jni.ATTRIBUTE_OPERATION_ERR>;
					public static ATTRIBUTE_OPERATION_ERR_OK: io.agora.rtm.jni.ATTRIBUTE_OPERATION_ERR;
					public static ATTRIBUTE_OPERATION_ERR_NOT_READY: io.agora.rtm.jni.ATTRIBUTE_OPERATION_ERR;
					public static ATTRIBUTE_OPERATION_ERR_FAILURE: io.agora.rtm.jni.ATTRIBUTE_OPERATION_ERR;
					public static ATTRIBUTE_OPERATION_ERR_INVALID_ARGUMENT: io.agora.rtm.jni.ATTRIBUTE_OPERATION_ERR;
					public static ATTRIBUTE_OPERATION_ERR_SIZE_OVERFLOW: io.agora.rtm.jni.ATTRIBUTE_OPERATION_ERR;
					public static ATTRIBUTE_OPERATION_ERR_TOO_OFTEN: io.agora.rtm.jni.ATTRIBUTE_OPERATION_ERR;
					public static ATTRIBUTE_OPERATION_ERR_USER_NOT_FOUND: io.agora.rtm.jni.ATTRIBUTE_OPERATION_ERR;
					public static ATTRIBUTE_OPERATION_ERR_TIMEOUT: io.agora.rtm.jni.ATTRIBUTE_OPERATION_ERR;
					public static ATTRIBUTE_OPERATION_ERR_NOT_INITIALIZED: io.agora.rtm.jni.ATTRIBUTE_OPERATION_ERR;
					public static ATTRIBUTE_OPERATION_ERR_USER_NOT_LOGGED_IN: io.agora.rtm.jni.ATTRIBUTE_OPERATION_ERR;
					public static swigToEnum(param0: number): io.agora.rtm.jni.ATTRIBUTE_OPERATION_ERR;
					public toString(): string;
					public swigValue(): number;
				}
			}
		}
	}
}

declare module io {
	export module agora {
		export module rtm {
			export module jni {
				export class AgoraRtmServiceJNI {
					public static class: java.lang.Class<io.agora.rtm.jni.AgoraRtmServiceJNI>;
					public static new_RtmChannelAttribute(param0: number): number;
					public static IRtmCallManager_createLocalCallInvitation(param0: number, param1: io.agora.rtm.jni.IRtmCallManager, param2: string): number;
					public static delete_MediaOperationProgress(param0: number): void;
					public static IRtmService_clearChannelAttributes(param0: number, param1: io.agora.rtm.jni.IRtmService, param2: string, param3: number, param4: number): number;
					public static IImageMessage_getThumbnailHeight(param0: number, param1: io.agora.rtm.jni.IImageMessage): number;
					public static IImageMessage_getThumbnailLength(param0: number, param1: io.agora.rtm.jni.IImageMessage): number;
					public constructor();
					public static new_IRtmCallEventHandler(): number;
					public static IImageMessage_getMediaId(param0: number, param1: io.agora.rtm.jni.IImageMessage): string;
					public static IRtmService_setLogFileSize(param0: number, param1: io.agora.rtm.jni.IRtmService, param2: number): number;
					public static SwigDirector_IRtmCallEventHandler_onRemoteInvitationAccepted(param0: io.agora.rtm.jni.IRtmCallEventHandler, param1: number): void;
					public static IRtmServiceEventHandler_director_connect(param0: io.agora.rtm.jni.IRtmServiceEventHandler, param1: number, param2: boolean, param3: boolean): void;
					public static IRtmService_deleteLocalUserAttributesByKeys(param0: number, param1: io.agora.rtm.jni.IRtmService, param2: native.Array<string>, param3: number, param4: number): number;
					public static new_IRtmServiceEventHandler(): number;
					public static SwigDirector_IRtmCallEventHandler_onRemoteInvitationFailure(param0: io.agora.rtm.jni.IRtmCallEventHandler, param1: number, param2: number): void;
					public static IRtmService_createImageMessageByMediaId(param0: number, param1: io.agora.rtm.jni.IRtmService, param2: string): number;
					public static SwigDirector_IRtmServiceEventHandler_onLoginFailure(param0: io.agora.rtm.jni.IRtmServiceEventHandler, param1: number): void;
					public static MediaOperationProgress_totalSize_set(param0: number, param1: io.agora.rtm.jni.MediaOperationProgress, param2: number): void;
					public static SwigDirector_IRtmServiceEventHandler_onLoginSuccess(param0: io.agora.rtm.jni.IRtmServiceEventHandler): void;
					public static SwigDirector_IChannelEventHandler_onAttributesUpdated(param0: io.agora.rtm.jni.IChannelEventHandler, param1: number, param2: number): void;
					public static IChannel_sendMessage__SWIG_1(param0: number, param1: io.agora.rtm.jni.IChannel, param2: number, param3: io.agora.rtm.jni.IMessage, param4: number, param5: io.agora.rtm.jni.ISendMessageOptions): number;
					public static IRtmService_sendMessageToPeer__SWIG_1(param0: number, param1: io.agora.rtm.jni.IRtmService, param2: string, param3: number, param4: io.agora.rtm.jni.IMessage, param5: number, param6: io.agora.rtm.jni.ISendMessageOptions): number;
					public static IRemoteCallInvitation_getChannelId(param0: number, param1: io.agora.rtm.jni.IRemoteCallInvitation): string;
					public static delete_IRtmCallEventHandler(param0: number): void;
					public static IRemoteCallInvitation_getContent(param0: number, param1: io.agora.rtm.jni.IRemoteCallInvitation): string;
					public static IRtmService_getUserAttributes(param0: number, param1: io.agora.rtm.jni.IRtmService, param2: string, param3: number): number;
					public static SwigDirector_IRtmServiceEventHandler_onSendMessageResult(param0: io.agora.rtm.jni.IRtmServiceEventHandler, param1: number, param2: number): void;
					public static IRtmService_createFileMessageByMediaId(param0: number, param1: io.agora.rtm.jni.IRtmService, param2: string): number;
					public static ILocalCallInvitation_getResponse(param0: number, param1: io.agora.rtm.jni.ILocalCallInvitation): string;
					public static IRtmService_logout(param0: number, param1: io.agora.rtm.jni.IRtmService): number;
					public static MediaOperationProgress_currentSize_set(param0: number, param1: io.agora.rtm.jni.MediaOperationProgress, param2: number): void;
					public static SwigDirector_IRtmCallEventHandler_onLocalInvitationCanceled(param0: io.agora.rtm.jni.IRtmCallEventHandler, param1: number): void;
					public static SwigDirector_IChannelEventHandler_onMemberCountUpdated(param0: io.agora.rtm.jni.IChannelEventHandler, param1: number): void;
					public static SwigDirector_IRtmServiceEventHandler_onGetUserAttributesResult(param0: io.agora.rtm.jni.IRtmServiceEventHandler, param1: number, param2: string, param3: native.Array<number>, param4: number, param5: number): void;
					public static IRtmCallManager_release(param0: number, param1: io.agora.rtm.jni.IRtmCallManager): void;
					public static IImageMessage_setHeight(param0: number, param1: io.agora.rtm.jni.IImageMessage, param2: number): void;
					public static SwigDirector_IRtmServiceEventHandler_onMessageReceivedFromPeer(param0: io.agora.rtm.jni.IRtmServiceEventHandler, param1: string, param2: number): void;
					public static SwigDirector_IRtmServiceEventHandler_onPeersOnlineStatusChanged(param0: io.agora.rtm.jni.IRtmServiceEventHandler, param1: native.Array<number>, param2: number): void;
					public static swigToEnumOnError(param0: number, param1: any): any;
					public static ILocalCallInvitation_getContent(param0: number, param1: io.agora.rtm.jni.ILocalCallInvitation): string;
					public static SwigDirector_IRtmServiceEventHandler_onLogout(param0: io.agora.rtm.jni.IRtmServiceEventHandler, param1: number): void;
					public static IChannel_leave(param0: number, param1: io.agora.rtm.jni.IChannel): number;
					public static SwigDirector_IRtmServiceEventHandler_onDeleteChannelAttributesResult(param0: io.agora.rtm.jni.IRtmServiceEventHandler, param1: number, param2: number): void;
					public static SwigDirector_IRtmServiceEventHandler_onMediaDownloadToFileResult(param0: io.agora.rtm.jni.IRtmServiceEventHandler, param1: number, param2: number): void;
					public static IRtmService_setChannelAttributes(param0: number, param1: io.agora.rtm.jni.IRtmService, param2: string, param3: number, param4: number, param5: number, param6: number): number;
					public static IRtmService_subscribePeersOnlineStatus(param0: number, param1: io.agora.rtm.jni.IRtmService, param2: native.Array<string>, param3: number, param4: number): number;
					public static IRtmService_setLogFilter(param0: number, param1: io.agora.rtm.jni.IRtmService, param2: number): number;
					public static RtmChannelAttribute_LastUpdateTs_get(param0: number, param1: io.agora.rtm.jni.IRtmChannelAttribute): number;
					public static SendMessageOptions_enableHistoricalMessaging_set(param0: number, param1: io.agora.rtm.jni.ISendMessageOptions, param2: boolean): void;
					public static ILocalCallInvitation_setChannelId(param0: number, param1: io.agora.rtm.jni.ILocalCallInvitation, param2: string): void;
					public static MediaOperationProgress_totalSize_get(param0: number, param1: io.agora.rtm.jni.MediaOperationProgress): number;
					public static IImageMessage_getWidth(param0: number, param1: io.agora.rtm.jni.IImageMessage): number;
					public static ILocalCallInvitation_release(param0: number, param1: io.agora.rtm.jni.ILocalCallInvitation): void;
					public static IRtmCallManager_refuseRemoteInvitation(param0: number, param1: io.agora.rtm.jni.IRtmCallManager, param2: number, param3: io.agora.rtm.jni.IRemoteCallInvitation): number;
					public static IRtmService_addOrUpdateChannelAttributes(param0: number, param1: io.agora.rtm.jni.IRtmService, param2: string, param3: number, param4: number, param5: number, param6: number): number;
					public static IRtmService_getChannelAttributesByKeys(param0: number, param1: io.agora.rtm.jni.IRtmService, param2: string, param3: native.Array<string>, param4: number, param5: number): number;
					public static SwigDirector_IRtmServiceEventHandler_onDeleteLocalUserAttributesResult(param0: io.agora.rtm.jni.IRtmServiceEventHandler, param1: number, param2: number): void;
					public static new_IChannelEventHandler(): number;
					public static IChannelEventHandler_director_connect(param0: io.agora.rtm.jni.IChannelEventHandler, param1: number, param2: boolean, param3: boolean): void;
					public static IRemoteCallInvitation_getState(param0: number, param1: io.agora.rtm.jni.IRemoteCallInvitation): number;
					public static IRtmService_release__SWIG_0(param0: number, param1: io.agora.rtm.jni.IRtmService, param2: boolean): void;
					public static IMessage_isOfflineMessage(param0: number, param1: io.agora.rtm.jni.IMessage): boolean;
					public static IFileMessage_SWIGUpcast(param0: number): number;
					public static SwigDirector_IRtmServiceEventHandler_onSetChannelAttributesResult(param0: io.agora.rtm.jni.IRtmServiceEventHandler, param1: number, param2: number): void;
					public static IRtmCallManager_acceptRemoteInvitation(param0: number, param1: io.agora.rtm.jni.IRtmCallManager, param2: number, param3: io.agora.rtm.jni.IRemoteCallInvitation): number;
					public static RtmChannelMemberCount_memberCount_get(param0: number, param1: io.agora.rtm.jni.IRtmChannelMemberCount): number;
					public static IImageMessage_setThumbnailWidth(param0: number, param1: io.agora.rtm.jni.IImageMessage, param2: number): void;
					public static delete_PeerOnlineStatus(param0: number): void;
					public static SwigDirector_IChannelEventHandler_onJoinSuccess(param0: io.agora.rtm.jni.IChannelEventHandler): void;
					public static SwigDirector_IRtmCallEventHandler_onRemoteInvitationCanceled(param0: io.agora.rtm.jni.IRtmCallEventHandler, param1: number): void;
					public static SwigDirector_IRtmServiceEventHandler_onMediaUploadingProgress(param0: io.agora.rtm.jni.IRtmServiceEventHandler, param1: number, param2: number): void;
					public static IRtmService_setLocalUserAttributes(param0: number, param1: io.agora.rtm.jni.IRtmService, param2: number, param3: number, param4: number): number;
					public static SwigDirector_IRtmCallEventHandler_onLocalInvitationReceivedByPeer(param0: io.agora.rtm.jni.IRtmCallEventHandler, param1: number): void;
					public static IChannelMember_getUserId(param0: number, param1: io.agora.rtm.jni.IChannelMember): string;
					public static new_RtmChannelMemberCount(): number;
					public static delete_SendMessageOptions(param0: number): void;
					public static SwigDirector_IRtmServiceEventHandler_onFileMessageReceivedFromPeer(param0: io.agora.rtm.jni.IRtmServiceEventHandler, param1: string, param2: number): void;
					public static delete_IRtmServiceEventHandler(param0: number): void;
					public static IRemoteCallInvitation_release(param0: number, param1: io.agora.rtm.jni.IRemoteCallInvitation): void;
					public static SwigDirector_IRtmServiceEventHandler_onQueryPeersBySubscriptionOptionResult(param0: io.agora.rtm.jni.IRtmServiceEventHandler, param1: number, param2: native.Array<any>, param3: number, param4: number): void;
					public static IRtmService_createMessage__SWIG_3(param0: number, param1: io.agora.rtm.jni.IRtmService, param2: native.Array<number>, param3: number, param4: string): number;
					public static IRtmService_createMessage__SWIG_0(param0: number, param1: io.agora.rtm.jni.IRtmService): number;
					public static IChannelMember_getChannelId(param0: number, param1: io.agora.rtm.jni.IChannelMember): string;
					public static IRtmService_createImageMessageByUploading(param0: number, param1: io.agora.rtm.jni.IRtmService, param2: string, param3: number): number;
					public static SwigDirector_IRtmServiceEventHandler_onGetChannelAttributesResult(param0: io.agora.rtm.jni.IRtmServiceEventHandler, param1: number, param2: native.Array<number>, param3: number, param4: number): void;
					public static IImageMessage_SWIGUpcast(param0: number): number;
					public static RtmChannelAttribute_value_set(param0: number, param1: io.agora.rtm.jni.IRtmChannelAttribute, param2: string): void;
					public static IImageMessage_getSize(param0: number, param1: io.agora.rtm.jni.IImageMessage): number;
					public static IRtmService_unsubscribePeersOnlineStatus(param0: number, param1: io.agora.rtm.jni.IRtmService, param2: native.Array<string>, param3: number, param4: number): number;
					public static SwigDirector_IRtmServiceEventHandler_onImageMediaUploadResult(param0: io.agora.rtm.jni.IRtmServiceEventHandler, param1: number, param2: number, param3: number): void;
					public static IRtmService_initialize(param0: number, param1: io.agora.rtm.jni.IRtmService, param2: string, param3: number, param4: io.agora.rtm.jni.IRtmServiceEventHandler): number;
					public static IMessage_getServerReceivedTs(param0: number, param1: io.agora.rtm.jni.IMessage): number;
					public static IRtmServiceEventHandler_change_ownership(param0: io.agora.rtm.jni.IRtmServiceEventHandler, param1: number, param2: boolean): void;
					public static IFileMessage_getThumbnailLength(param0: number, param1: io.agora.rtm.jni.IFileMessage): number;
					public static delete_RtmAttribute(param0: number): void;
					public static IRtmService_createChannel(param0: number, param1: io.agora.rtm.jni.IRtmService, param2: string, param3: number, param4: io.agora.rtm.jni.IChannelEventHandler): number;
					public static RtmAttribute_key_get(param0: number, param1: io.agora.rtm.jni.IRtmAttribute): string;
					public static RtmChannelMemberCount_memberCount_set(param0: number, param1: io.agora.rtm.jni.IRtmChannelMemberCount, param2: number): void;
					public static new_RtmAttribute(): number;
					public static IRtmService_addEventHandler(param0: number, param1: io.agora.rtm.jni.IRtmService, param2: number, param3: io.agora.rtm.jni.IRtmServiceEventHandler): void;
					public static SwigDirector_IChannelEventHandler_onMemberJoined(param0: io.agora.rtm.jni.IChannelEventHandler, param1: number): void;
					public static RtmChannelMemberCount_channelID_set(param0: number, param1: io.agora.rtm.jni.IRtmChannelMemberCount, param2: string): void;
					public static delete_IFileMessage(param0: number): void;
					public static SwigDirector_IRtmServiceEventHandler_onSubscriptionRequestResult(param0: io.agora.rtm.jni.IRtmServiceEventHandler, param1: number, param2: number): void;
					public static IRtmService_sendMessageToPeer__SWIG_0(param0: number, param1: io.agora.rtm.jni.IRtmService, param2: string, param3: number, param4: io.agora.rtm.jni.IMessage): number;
					public static RtmChannelAttribute_value_get(param0: number, param1: io.agora.rtm.jni.IRtmChannelAttribute): string;
					public static SwigDirector_IRtmCallEventHandler_onLocalInvitationRefused(param0: io.agora.rtm.jni.IRtmCallEventHandler, param1: number, param2: string): void;
					public static ILocalCallInvitation_getState(param0: number, param1: io.agora.rtm.jni.ILocalCallInvitation): number;
					public static SwigDirector_IRtmServiceEventHandler_onAddOrUpdateChannelAttributesResult(param0: io.agora.rtm.jni.IRtmServiceEventHandler, param1: number, param2: number): void;
					public static IRtmCallEventHandler_change_ownership(param0: io.agora.rtm.jni.IRtmCallEventHandler, param1: number, param2: boolean): void;
					public static SwigDirector_IRtmServiceEventHandler_onConnectionStateChanged(param0: io.agora.rtm.jni.IRtmServiceEventHandler, param1: number, param2: number): void;
					public static getRemoteInvitationKey(param0: io.agora.rtm.jni.IRemoteCallInvitation): number;
					public static SwigDirector_IRtmCallEventHandler_onRemoteInvitationReceived(param0: io.agora.rtm.jni.IRtmCallEventHandler, param1: number): void;
					public static IRtmService_downloadMediaToMemory(param0: number, param1: io.agora.rtm.jni.IRtmService, param2: string, param3: number): number;
					public static PeerOnlineStatus_peerId_set(param0: number, param1: io.agora.rtm.jni.PeerOnlineStatus, param2: string): void;
					public static SwigDirector_IRtmServiceEventHandler_onClearLocalUserAttributesResult(param0: io.agora.rtm.jni.IRtmServiceEventHandler, param1: number, param2: number): void;
					public static SwigDirector_IRtmCallEventHandler_onRemoteInvitationRefused(param0: io.agora.rtm.jni.IRtmCallEventHandler, param1: number): void;
					public static SwigDirector_IChannelEventHandler_onImageMessageReceived(param0: io.agora.rtm.jni.IChannelEventHandler, param1: string, param2: number): void;
					public static PeerOnlineStatus_isOnline_set(param0: number, param1: io.agora.rtm.jni.PeerOnlineStatus, param2: boolean): void;
					public static ChannelAttributeOptions_enableNotificationToChannelMembers_set(param0: number, param1: io.agora.rtm.jni.IChannelAttributeOptions, param2: boolean): void;
					public static SwigDirector_IRtmServiceEventHandler_onClearChannelAttributesResult(param0: io.agora.rtm.jni.IRtmServiceEventHandler, param1: number, param2: number): void;
					public static IMessage_getRawMessageLength(param0: number, param1: io.agora.rtm.jni.IMessage): number;
					public static SwigDirector_IRtmServiceEventHandler_onImageMessageReceivedFromPeer(param0: io.agora.rtm.jni.IRtmServiceEventHandler, param1: string, param2: number): void;
					public static RtmAttribute_value_get(param0: number, param1: io.agora.rtm.jni.IRtmAttribute): string;
					public static IImageMessage_getFileName(param0: number, param1: io.agora.rtm.jni.IImageMessage): string;
					public static IRtmCallEventHandler_director_connect(param0: io.agora.rtm.jni.IRtmCallEventHandler, param1: number, param2: boolean, param3: boolean): void;
					public static SwigDirector_IChannelEventHandler_onMessageReceived(param0: io.agora.rtm.jni.IChannelEventHandler, param1: string, param2: number): void;
					public static IRtmService_deleteChannelAttributesByKeys(param0: number, param1: io.agora.rtm.jni.IRtmService, param2: string, param3: native.Array<string>, param4: number, param5: number, param6: number): number;
					public static IRtmService_getChannelMemberCount(param0: number, param1: io.agora.rtm.jni.IRtmService, param2: native.Array<string>, param3: number, param4: number): number;
					public static setRtmServiceContext(param0: number, param1: io.agora.rtm.jni.RtmServiceContext): number;
					public static SendMessageOptions_enableOfflineMessaging_set(param0: number, param1: io.agora.rtm.jni.ISendMessageOptions, param2: boolean): void;
					public static IImageMessage_setThumbnailHeight(param0: number, param1: io.agora.rtm.jni.IImageMessage, param2: number): void;
					public static IImageMessage_setSize(param0: number, param1: io.agora.rtm.jni.IImageMessage, param2: number): void;
					public static RtmChannelAttribute_key_set(param0: number, param1: io.agora.rtm.jni.IRtmChannelAttribute, param2: string): void;
					public static delete_RtmChannelMemberCount(param0: number): void;
					public static new_RtmServiceContext(): number;
					public static IImageMessage_getHeight(param0: number, param1: io.agora.rtm.jni.IImageMessage): number;
					public static SwigDirector_IRtmServiceEventHandler_onGetChannelMemberCountResult(param0: io.agora.rtm.jni.IRtmServiceEventHandler, param1: number, param2: native.Array<number>, param3: number, param4: number): void;
					public static IImageMessage_setWidth(param0: number, param1: io.agora.rtm.jni.IImageMessage, param2: number): void;
					public static delete_IImageMessage(param0: number): void;
					public static IRtmService_renewToken(param0: number, param1: io.agora.rtm.jni.IRtmService, param2: string): number;
					public static ILocalCallInvitation_getCalleeId(param0: number, param1: io.agora.rtm.jni.ILocalCallInvitation): string;
					public static IRtmService_setLogFile(param0: number, param1: io.agora.rtm.jni.IRtmService, param2: string): number;
					public static SwigDirector_IRtmServiceEventHandler_onRenewTokenResult(param0: io.agora.rtm.jni.IRtmServiceEventHandler, param1: string, param2: number): void;
					public static IFileMessage_setSize(param0: number, param1: io.agora.rtm.jni.IFileMessage, param2: number): void;
					public static IFileMessage_getMediaId(param0: number, param1: io.agora.rtm.jni.IFileMessage): string;
					public static IChannel_getMembers(param0: number, param1: io.agora.rtm.jni.IChannel): number;
					public static RtmServiceContext_areaCode_get(param0: number, param1: io.agora.rtm.jni.RtmServiceContext): number;
					public static IRtmService_getRtmCallManager(param0: number, param1: io.agora.rtm.jni.IRtmService, param2: number, param3: io.agora.rtm.jni.IRtmCallEventHandler): number;
					public static PeerOnlineStatus_isOnline_get(param0: number, param1: io.agora.rtm.jni.PeerOnlineStatus): boolean;
					public static IRtmService_addOrUpdateLocalUserAttributes(param0: number, param1: io.agora.rtm.jni.IRtmService, param2: number, param3: number, param4: number): number;
					public static SwigDirector_IRtmServiceEventHandler_onFileMediaUploadResult(param0: io.agora.rtm.jni.IRtmServiceEventHandler, param1: number, param2: number, param3: number): void;
					public static IChannel_getId(param0: number, param1: io.agora.rtm.jni.IChannel): string;
					public static IRemoteCallInvitation_setResponse(param0: number, param1: io.agora.rtm.jni.IRemoteCallInvitation, param2: string): void;
					public static IRtmService_cancelMediaUpload(param0: number, param1: io.agora.rtm.jni.IRtmService, param2: number): number;
					public static SwigDirector_IRtmServiceEventHandler_onSetLocalUserAttributesResult(param0: io.agora.rtm.jni.IRtmServiceEventHandler, param1: number, param2: number): void;
					public static IChannelMember_release(param0: number, param1: io.agora.rtm.jni.IChannelMember): void;
					public static IChannel_join(param0: number, param1: io.agora.rtm.jni.IChannel): number;
					public static IFileMessage_getSize(param0: number, param1: io.agora.rtm.jni.IFileMessage): number;
					public static IImageMessage_setFileName(param0: number, param1: io.agora.rtm.jni.IImageMessage, param2: string): void;
					public static ChannelAttributeOptions_enableNotificationToChannelMembers_get(param0: number, param1: io.agora.rtm.jni.IChannelAttributeOptions): boolean;
					public static SwigDirector_IChannelEventHandler_onJoinFailure(param0: io.agora.rtm.jni.IChannelEventHandler, param1: number): void;
					public static getLocalInvitationKey(param0: io.agora.rtm.jni.ILocalCallInvitation): number;
					public static SwigDirector_IChannelEventHandler_onMemberLeft(param0: io.agora.rtm.jni.IChannelEventHandler, param1: number): void;
					public static SwigDirector_IChannelEventHandler_onFileMessageReceived(param0: io.agora.rtm.jni.IChannelEventHandler, param1: string, param2: number): void;
					public static SwigDirector_IChannelEventHandler_onGetMembers(param0: io.agora.rtm.jni.IChannelEventHandler, param1: number, param2: number, param3: number): void;
					public static IRtmService_cancelMediaDownload(param0: number, param1: io.agora.rtm.jni.IRtmService, param2: number): number;
					public static IChannel_release(param0: number, param1: io.agora.rtm.jni.IChannel): void;
					public static SwigDirector_IRtmServiceEventHandler_onMediaDownloadToMemoryResult(param0: io.agora.rtm.jni.IRtmServiceEventHandler, param1: number, param2: native.Array<number>, param3: number): void;
					public static SwigDirector_IRtmServiceEventHandler_onMediaDownloadingProgress(param0: io.agora.rtm.jni.IRtmServiceEventHandler, param1: number, param2: number): void;
					public static RtmChannelMemberCount_channelID_get(param0: number, param1: io.agora.rtm.jni.IRtmChannelMemberCount): string;
					public static IMessage_setText(param0: number, param1: io.agora.rtm.jni.IMessage, param2: string): void;
					public static SwigDirector_IRtmServiceEventHandler_onMediaCancelResult(param0: io.agora.rtm.jni.IRtmServiceEventHandler, param1: number, param2: number): void;
					public static IFileMessage_getFileName(param0: number, param1: io.agora.rtm.jni.IFileMessage): string;
					public static IRtmService_removeEventHandler(param0: number, param1: io.agora.rtm.jni.IRtmService, param2: number, param3: io.agora.rtm.jni.IRtmServiceEventHandler): void;
					public static IRtmService_clearLocalUserAttributes(param0: number, param1: io.agora.rtm.jni.IRtmService, param2: number): number;
					public static new_ChannelAttributeOptions(): number;
					public static RtmChannelAttribute_key_get(param0: number, param1: io.agora.rtm.jni.IRtmChannelAttribute): string;
					public static delete_RtmServiceContext(param0: number): void;
					public static new_PeerOnlineStatus(): number;
					public static IRtmService_downloadMediaToFile(param0: number, param1: io.agora.rtm.jni.IRtmService, param2: string, param3: string, param4: number): number;
					public static RtmServiceContext_areaCode_set(param0: number, param1: io.agora.rtm.jni.RtmServiceContext, param2: number): void;
					public static IImageMessage_getThumbnailData(param0: number, param1: io.agora.rtm.jni.IImageMessage): native.Array<number>;
					public static IChannelEventHandler_change_ownership(param0: io.agora.rtm.jni.IChannelEventHandler, param1: number, param2: boolean): void;
					public static IRtmService_getChannelAttributes(param0: number, param1: io.agora.rtm.jni.IRtmService, param2: string, param3: number): number;
					public static IMessage_getRawMessageData(param0: number, param1: io.agora.rtm.jni.IMessage): native.Array<number>;
					public static IRtmService_login(param0: number, param1: io.agora.rtm.jni.IRtmService, param2: string, param3: string): number;
					public static SendMessageOptions_enableOfflineMessaging_get(param0: number, param1: io.agora.rtm.jni.ISendMessageOptions): boolean;
					public static IMessage_getMessageId(param0: number, param1: io.agora.rtm.jni.IMessage): number;
					public static PeerOnlineStatus_onlineState_get(param0: number, param1: io.agora.rtm.jni.PeerOnlineStatus): number;
					public static MediaOperationProgress_currentSize_get(param0: number, param1: io.agora.rtm.jni.MediaOperationProgress): number;
					public static delete_IChannelEventHandler(param0: number): void;
					public static ILocalCallInvitation_setContent(param0: number, param1: io.agora.rtm.jni.ILocalCallInvitation, param2: string): void;
					public static SwigDirector_IRtmServiceEventHandler_onAddOrUpdateLocalUserAttributesResult(param0: io.agora.rtm.jni.IRtmServiceEventHandler, param1: number, param2: number): void;
					public static IRtmCallManager_cancelLocalInvitation(param0: number, param1: io.agora.rtm.jni.IRtmCallManager, param2: number, param3: io.agora.rtm.jni.ILocalCallInvitation): number;
					public static SendMessageOptions_enableHistoricalMessaging_get(param0: number, param1: io.agora.rtm.jni.ISendMessageOptions): boolean;
					public static RtmChannelAttribute_LastUpdateUserId_get(param0: number, param1: io.agora.rtm.jni.IRtmChannelAttribute): string;
					public static PeerOnlineStatus_peerId_get(param0: number, param1: io.agora.rtm.jni.PeerOnlineStatus): string;
					public static SwigDirector_IChannelEventHandler_onSendMessageResult(param0: io.agora.rtm.jni.IChannelEventHandler, param1: number, param2: number): void;
					public static IMessage_release(param0: number, param1: io.agora.rtm.jni.IMessage): void;
					public static SwigDirector_IRtmServiceEventHandler_onQueryPeersOnlineStatusResult(param0: io.agora.rtm.jni.IRtmServiceEventHandler, param1: number, param2: native.Array<number>, param3: number, param4: number): void;
					public static IFileMessage_setThumbnail(param0: number, param1: io.agora.rtm.jni.IFileMessage, param2: native.Array<number>, param3: number): void;
					public static ILocalCallInvitation_getChannelId(param0: number, param1: io.agora.rtm.jni.ILocalCallInvitation): string;
					public static IMessage_getText(param0: number, param1: io.agora.rtm.jni.IMessage): string;
					public static IRtmService_queryPeersBySubscriptionOption(param0: number, param1: io.agora.rtm.jni.IRtmService, param2: number, param3: number): number;
					public static IRtmService_queryPeersOnlineStatus(param0: number, param1: io.agora.rtm.jni.IRtmService, param2: native.Array<string>, param3: number, param4: number): number;
					public static IRtmService_createMessage__SWIG_1(param0: number, param1: io.agora.rtm.jni.IRtmService, param2: string): number;
					public static SwigDirector_IRtmServiceEventHandler_onTokenExpired(param0: io.agora.rtm.jni.IRtmServiceEventHandler): void;
					public static IRemoteCallInvitation_getCallerId(param0: number, param1: io.agora.rtm.jni.IRemoteCallInvitation): string;
					public static IFileMessage_setFileName(param0: number, param1: io.agora.rtm.jni.IFileMessage, param2: string): void;
					public static IRtmService_setParameters(param0: number, param1: io.agora.rtm.jni.IRtmService, param2: string): number;
					public static new_SendMessageOptions(): number;
					public static SwigDirector_IRtmCallEventHandler_onLocalInvitationAccepted(param0: io.agora.rtm.jni.IRtmCallEventHandler, param1: number, param2: string): void;
					public static IRtmCallManager_sendLocalInvitation(param0: number, param1: io.agora.rtm.jni.IRtmCallManager, param2: number, param3: io.agora.rtm.jni.ILocalCallInvitation): number;
					public static SwigDirector_IChannelEventHandler_onLeave(param0: io.agora.rtm.jni.IChannelEventHandler, param1: number): void;
					public static SwigDirector_IRtmCallEventHandler_onLocalInvitationFailure(param0: io.agora.rtm.jni.IRtmCallEventHandler, param1: number, param2: number): void;
					public static PeerOnlineStatus_onlineState_set(param0: number, param1: io.agora.rtm.jni.PeerOnlineStatus, param2: number): void;
					public static IFileMessage_getThumbnailData(param0: number, param1: io.agora.rtm.jni.IFileMessage): native.Array<number>;
					public static IRtmService_createFileMessageByUploading(param0: number, param1: io.agora.rtm.jni.IRtmService, param2: string, param3: number): number;
					public static delete_RtmChannelAttribute(param0: number): void;
					public static IMessage_getMessageType(param0: number, param1: io.agora.rtm.jni.IMessage): number;
					public static IRtmService_release__SWIG_1(param0: number, param1: io.agora.rtm.jni.IRtmService): void;
					public static IRtmService_getUserAttributesByKeys(param0: number, param1: io.agora.rtm.jni.IRtmService, param2: string, param3: native.Array<string>, param4: number, param5: number): number;
					public static IRemoteCallInvitation_getResponse(param0: number, param1: io.agora.rtm.jni.IRemoteCallInvitation): string;
					public static IChannel_sendMessage__SWIG_0(param0: number, param1: io.agora.rtm.jni.IChannel, param2: number, param3: io.agora.rtm.jni.IMessage): number;
					public static IImageMessage_getThumbnailWidth(param0: number, param1: io.agora.rtm.jni.IImageMessage): number;
					public static delete_ChannelAttributeOptions(param0: number): void;
					public static IImageMessage_setThumbnail(param0: number, param1: io.agora.rtm.jni.IImageMessage, param2: native.Array<number>, param3: number): void;
					public static RtmAttribute_key_set(param0: number, param1: io.agora.rtm.jni.IRtmAttribute, param2: string): void;
					public static new_MediaOperationProgress(): number;
					public static RtmAttribute_value_set(param0: number, param1: io.agora.rtm.jni.IRtmAttribute, param2: string): void;
					public static IRtmService_createMessage__SWIG_2(param0: number, param1: io.agora.rtm.jni.IRtmService, param2: native.Array<number>, param3: number): number;
				}
			}
		}
	}
}

declare module io {
	export module agora {
		export module rtm {
			export module jni {
				export class CANCEL_MEDIA_ERR_CODE {
					public static class: java.lang.Class<io.agora.rtm.jni.CANCEL_MEDIA_ERR_CODE>;
					public static CANCEL_MEDIA_ERR_OK: io.agora.rtm.jni.CANCEL_MEDIA_ERR_CODE;
					public static CANCEL_MEDIA_ERR_FAILURE: io.agora.rtm.jni.CANCEL_MEDIA_ERR_CODE;
					public static CANCEL_MEDIA_ERR_NOT_EXIST: io.agora.rtm.jni.CANCEL_MEDIA_ERR_CODE;
					public static CANCEL_MEDIA_ERR_NOT_INITIALIZED: io.agora.rtm.jni.CANCEL_MEDIA_ERR_CODE;
					public static CANCEL_MEDIA_ERR_NOT_LOGGED_IN: io.agora.rtm.jni.CANCEL_MEDIA_ERR_CODE;
					public static swigToEnum(param0: number): io.agora.rtm.jni.CANCEL_MEDIA_ERR_CODE;
					public toString(): string;
					public swigValue(): number;
				}
			}
		}
	}
}

declare module io {
	export module agora {
		export module rtm {
			export module jni {
				export class CHANNEL_MESSAGE_ERR_CODE {
					public static class: java.lang.Class<io.agora.rtm.jni.CHANNEL_MESSAGE_ERR_CODE>;
					public static CHANNEL_MESSAGE_ERR_OK: io.agora.rtm.jni.CHANNEL_MESSAGE_ERR_CODE;
					public static CHANNEL_MESSAGE_ERR_FAILURE: io.agora.rtm.jni.CHANNEL_MESSAGE_ERR_CODE;
					public static CHANNEL_MESSAGE_ERR_SENT_TIMEOUT: io.agora.rtm.jni.CHANNEL_MESSAGE_ERR_CODE;
					public static CHANNEL_MESSAGE_ERR_TOO_OFTEN: io.agora.rtm.jni.CHANNEL_MESSAGE_ERR_CODE;
					public static CHANNEL_MESSAGE_ERR_INVALID_MESSAGE: io.agora.rtm.jni.CHANNEL_MESSAGE_ERR_CODE;
					public static CHANNEL_MESSAGE_ERR_NOT_INITIALIZED: io.agora.rtm.jni.CHANNEL_MESSAGE_ERR_CODE;
					public static CHANNEL_MESSAGE_ERR_USER_NOT_LOGGED_IN: io.agora.rtm.jni.CHANNEL_MESSAGE_ERR_CODE;
					public static swigToEnum(param0: number): io.agora.rtm.jni.CHANNEL_MESSAGE_ERR_CODE;
					public toString(): string;
					public swigValue(): number;
				}
			}
		}
	}
}

declare module io {
	export module agora {
		export module rtm {
			export module jni {
				export class CONNECTION_CHANGE_REASON {
					public static class: java.lang.Class<io.agora.rtm.jni.CONNECTION_CHANGE_REASON>;
					public static CONNECTION_CHANGE_REASON_LOGIN: io.agora.rtm.jni.CONNECTION_CHANGE_REASON;
					public static CONNECTION_CHANGE_REASON_LOGIN_SUCCESS: io.agora.rtm.jni.CONNECTION_CHANGE_REASON;
					public static CONNECTION_CHANGE_REASON_LOGIN_FAILURE: io.agora.rtm.jni.CONNECTION_CHANGE_REASON;
					public static CONNECTION_CHANGE_REASON_LOGIN_TIMEOUT: io.agora.rtm.jni.CONNECTION_CHANGE_REASON;
					public static CONNECTION_CHANGE_REASON_INTERRUPTED: io.agora.rtm.jni.CONNECTION_CHANGE_REASON;
					public static CONNECTION_CHANGE_REASON_LOGOUT: io.agora.rtm.jni.CONNECTION_CHANGE_REASON;
					public static CONNECTION_CHANGE_REASON_BANNED_BY_SERVER: io.agora.rtm.jni.CONNECTION_CHANGE_REASON;
					public static CONNECTION_CHANGE_REASON_REMOTE_LOGIN: io.agora.rtm.jni.CONNECTION_CHANGE_REASON;
					public toString(): string;
					public swigValue(): number;
					public static swigToEnum(param0: number): io.agora.rtm.jni.CONNECTION_CHANGE_REASON;
				}
			}
		}
	}
}

declare module io {
	export module agora {
		export module rtm {
			export module jni {
				export class CONNECTION_STATE {
					public static class: java.lang.Class<io.agora.rtm.jni.CONNECTION_STATE>;
					public static CONNECTION_STATE_DISCONNECTED: io.agora.rtm.jni.CONNECTION_STATE;
					public static CONNECTION_STATE_CONNECTING: io.agora.rtm.jni.CONNECTION_STATE;
					public static CONNECTION_STATE_CONNECTED: io.agora.rtm.jni.CONNECTION_STATE;
					public static CONNECTION_STATE_RECONNECTING: io.agora.rtm.jni.CONNECTION_STATE;
					public static CONNECTION_STATE_ABORTED: io.agora.rtm.jni.CONNECTION_STATE;
					public toString(): string;
					public static swigToEnum(param0: number): io.agora.rtm.jni.CONNECTION_STATE;
					public swigValue(): number;
				}
			}
		}
	}
}

declare module io {
	export module agora {
		export module rtm {
			export module jni {
				export class DOWNLOAD_MEDIA_ERR_CODE {
					public static class: java.lang.Class<io.agora.rtm.jni.DOWNLOAD_MEDIA_ERR_CODE>;
					public static DOWNLOAD_MEDIA_ERR_OK: io.agora.rtm.jni.DOWNLOAD_MEDIA_ERR_CODE;
					public static DOWNLOAD_MEDIA_ERR_FAILURE: io.agora.rtm.jni.DOWNLOAD_MEDIA_ERR_CODE;
					public static DOWNLOAD_MEDIA_ERR_INVALID_ARGUMENT: io.agora.rtm.jni.DOWNLOAD_MEDIA_ERR_CODE;
					public static DOWNLOAD_MEDIA_ERR_TIMEOUT: io.agora.rtm.jni.DOWNLOAD_MEDIA_ERR_CODE;
					public static DOWNLOAD_MEDIA_ERR_NOT_EXIST: io.agora.rtm.jni.DOWNLOAD_MEDIA_ERR_CODE;
					public static DOWNLOAD_MEDIA_ERR_CONCURRENCY_LIMIT_EXCEEDED: io.agora.rtm.jni.DOWNLOAD_MEDIA_ERR_CODE;
					public static DOWNLOAD_MEDIA_ERR_INTERRUPTED: io.agora.rtm.jni.DOWNLOAD_MEDIA_ERR_CODE;
					public static DOWNLOAD_MEDIA_ERR_NOT_INITIALIZED: io.agora.rtm.jni.DOWNLOAD_MEDIA_ERR_CODE;
					public static DOWNLOAD_MEDIA_ERR_NOT_LOGGED_IN: io.agora.rtm.jni.DOWNLOAD_MEDIA_ERR_CODE;
					public static swigToEnum(param0: number): io.agora.rtm.jni.DOWNLOAD_MEDIA_ERR_CODE;
					public toString(): string;
					public swigValue(): number;
				}
			}
		}
	}
}

declare module io {
	export module agora {
		export module rtm {
			export module jni {
				export class GET_CHANNEL_MEMBER_COUNT_ERR {
					public static class: java.lang.Class<io.agora.rtm.jni.GET_CHANNEL_MEMBER_COUNT_ERR>;
					public static GET_CHANNEL_MEMBER_COUNT_ERR_OK: io.agora.rtm.jni.GET_CHANNEL_MEMBER_COUNT_ERR;
					public static GET_CHANNEL_MEMBER_COUNT_ERR_FAILURE: io.agora.rtm.jni.GET_CHANNEL_MEMBER_COUNT_ERR;
					public static GET_CHANNEL_MEMBER_COUNT_ERR_INVALID_ARGUMENT: io.agora.rtm.jni.GET_CHANNEL_MEMBER_COUNT_ERR;
					public static GET_CHANNEL_MEMBER_COUNT_ERR_TOO_OFTEN: io.agora.rtm.jni.GET_CHANNEL_MEMBER_COUNT_ERR;
					public static GET_CHANNEL_MEMBER_COUNT_ERR_TIMEOUT: io.agora.rtm.jni.GET_CHANNEL_MEMBER_COUNT_ERR;
					public static GET_CHANNEL_MEMBER_COUNT_ERR_EXCEED_LIMIT: io.agora.rtm.jni.GET_CHANNEL_MEMBER_COUNT_ERR;
					public static GET_CHANNEL_MEMBER_COUNT_ERR_NOT_INITIALIZED: io.agora.rtm.jni.GET_CHANNEL_MEMBER_COUNT_ERR;
					public static GET_CHANNEL_MEMBER_COUNT_ERR_USER_NOT_LOGGED_IN: io.agora.rtm.jni.GET_CHANNEL_MEMBER_COUNT_ERR;
					public toString(): string;
					public static swigToEnum(param0: number): io.agora.rtm.jni.GET_CHANNEL_MEMBER_COUNT_ERR;
					public swigValue(): number;
				}
			}
		}
	}
}

declare module io {
	export module agora {
		export module rtm {
			export module jni {
				export class GET_MEMBERS_ERR {
					public static class: java.lang.Class<io.agora.rtm.jni.GET_MEMBERS_ERR>;
					public static GET_MEMBERS_ERR_OK: io.agora.rtm.jni.GET_MEMBERS_ERR;
					public static GET_MEMBERS_ERR_FAILURE: io.agora.rtm.jni.GET_MEMBERS_ERR;
					public static GET_MEMBERS_ERR_REJECTED: io.agora.rtm.jni.GET_MEMBERS_ERR;
					public static GET_MEMBERS_ERR_TIMEOUT: io.agora.rtm.jni.GET_MEMBERS_ERR;
					public static GET_MEMBERS_ERR_TOO_OFTEN: io.agora.rtm.jni.GET_MEMBERS_ERR;
					public static GET_MEMBERS_ERR_NOT_IN_CHANNEL: io.agora.rtm.jni.GET_MEMBERS_ERR;
					public static GET_MEMBERS_ERR_NOT_INITIALIZED: io.agora.rtm.jni.GET_MEMBERS_ERR;
					public static GET_MEMBERS_ERR_USER_NOT_LOGGED_IN: io.agora.rtm.jni.GET_MEMBERS_ERR;
					public toString(): string;
					public swigValue(): number;
					public static swigToEnum(param0: number): io.agora.rtm.jni.GET_MEMBERS_ERR;
				}
			}
		}
	}
}

declare module io {
	export module agora {
		export module rtm {
			export module jni {
				export class IChannel {
					public static class: java.lang.Class<io.agora.rtm.jni.IChannel>;
					public swigCMemOwn: boolean;
					public static getCPtr(param0: io.agora.rtm.jni.IChannel): number;
					public getMembers(): number;
					public delete(): void;
					public getId(): string;
					public sendMessage(param0: io.agora.rtm.jni.IMessage, param1: io.agora.rtm.jni.ISendMessageOptions): number;
					public sendMessage(param0: io.agora.rtm.jni.IMessage): number;
					public release(): void;
					public constructor(param0: number, param1: boolean);
					public join(): number;
					public leave(): number;
				}
			}
		}
	}
}

declare module io {
	export module agora {
		export module rtm {
			export module jni {
				export class IChannelAttributeOptions {
					public static class: java.lang.Class<io.agora.rtm.jni.IChannelAttributeOptions>;
					public swigCMemOwn: boolean;
					public delete(): void;
					public constructor();
					public finalize(): void;
					public static getCPtr(param0: io.agora.rtm.jni.IChannelAttributeOptions): number;
					public setEnableNotificationToChannelMembers(param0: boolean): void;
					public getEnableNotificationToChannelMembers(): boolean;
					public constructor(param0: number, param1: boolean);
				}
			}
		}
	}
}

declare module io {
	export module agora {
		export module rtm {
			export module jni {
				export abstract class IChannelEventHandler {
					public static class: java.lang.Class<io.agora.rtm.jni.IChannelEventHandler>;
					public swigCMemOwn: boolean;
					public onJoinSuccess(): void;
					public onMessageReceived(param0: string, param1: io.agora.rtm.jni.IMessage): void;
					public swigDirectorDisconnect(): void;
					public delete(): void;
					public onSendMessageResult(param0: number, param1: io.agora.rtm.jni.CHANNEL_MESSAGE_ERR_CODE): void;
					public finalize(): void;
					public onMemberJoined(param0: io.agora.rtm.jni.IChannelMember): void;
					public onLeave(param0: io.agora.rtm.jni.LEAVE_CHANNEL_ERR): void;
					public onMemberCountUpdated(param0: number): void;
					public constructor(param0: number, param1: boolean);
					public static getCPtr(param0: io.agora.rtm.jni.IChannelEventHandler): number;
					public constructor();
					public onAttributesUpdated(param0: java.util.List<io.agora.rtm.jni.IRtmChannelAttribute>): void;
					public swigReleaseOwnership(): void;
					public onGetMembers(param0: java.util.List<io.agora.rtm.jni.IChannelMember>, param1: io.agora.rtm.jni.GET_MEMBERS_ERR): void;
					public swigTakeOwnership(): void;
					public onImageMessageReceived(param0: string, param1: io.agora.rtm.jni.IImageMessage): void;
					public onMemberLeft(param0: io.agora.rtm.jni.IChannelMember): void;
					public onFileMessageReceived(param0: string, param1: io.agora.rtm.jni.IFileMessage): void;
					public onJoinFailure(param0: io.agora.rtm.jni.JOIN_CHANNEL_ERR): void;
				}
			}
		}
	}
}

declare module io {
	export module agora {
		export module rtm {
			export module jni {
				export class IChannelMember {
					public static class: java.lang.Class<io.agora.rtm.jni.IChannelMember>;
					public swigCMemOwn: boolean;
					public delete(): void;
					public static getCPtr(param0: io.agora.rtm.jni.IChannelMember): number;
					public getChannelId(): string;
					public release(): void;
					public getUserId(): string;
					public constructor(param0: number, param1: boolean);
				}
			}
		}
	}
}

declare module io {
	export module agora {
		export module rtm {
			export module jni {
				export class IFileMessage extends io.agora.rtm.jni.IMessage {
					public static class: java.lang.Class<io.agora.rtm.jni.IFileMessage>;
					public setFileName(param0: string): void;
					public getFileName(): string;
					public delete(): void;
					public finalize(): void;
					public getThumbnailLength(): number;
					public static getCPtr(param0: io.agora.rtm.jni.IFileMessage): number;
					public getThumbnailData(): native.Array<number>;
					public static getCPtr(param0: io.agora.rtm.jni.IMessage): number;
					public getSize(): number;
					public constructor(param0: number, param1: boolean);
					public getMediaId(): string;
					public setThumbnail(param0: native.Array<number>, param1: number): void;
				}
			}
		}
	}
}

declare module io {
	export module agora {
		export module rtm {
			export module jni {
				export class IImageMessage extends io.agora.rtm.jni.IMessage {
					public static class: java.lang.Class<io.agora.rtm.jni.IImageMessage>;
					public setThumbnailHeight(param0: number): void;
					public getFileName(): string;
					public delete(): void;
					public setSize(param0: number): void;
					public setWidth(param0: number): void;
					public getHeight(): number;
					public getThumbnailHeight(): number;
					public finalize(): void;
					public setThumbnailWidth(param0: number): void;
					public getThumbnailLength(): number;
					public setHeight(param0: number): void;
					public getWidth(): number;
					public static getCPtr(param0: io.agora.rtm.jni.IMessage): number;
					public getSize(): number;
					public constructor(param0: number, param1: boolean);
					public setThumbnail(param0: native.Array<number>, param1: number): void;
					public setFileName(param0: string): void;
					public static getCPtr(param0: io.agora.rtm.jni.IImageMessage): number;
					public getThumbnailData(): native.Array<number>;
					public getMediaId(): string;
					public getThumbnailWidth(): number;
				}
			}
		}
	}
}

declare module io {
	export module agora {
		export module rtm {
			export module jni {
				export class ILocalCallInvitation {
					public static class: java.lang.Class<io.agora.rtm.jni.ILocalCallInvitation>;
					public swigCMemOwn: boolean;
					public getContent(): string;
					public delete(): void;
					public setContent(param0: string): void;
					public setChannelId(param0: string): void;
					public getCalleeId(): string;
					public static getCPtr(param0: io.agora.rtm.jni.ILocalCallInvitation): number;
					public getResponse(): string;
					public getChannelId(): string;
					public getState(): io.agora.rtm.jni.LOCAL_INVITATION_STATE;
					public release(): void;
					public constructor(param0: number, param1: boolean);
				}
			}
		}
	}
}

declare module io {
	export module agora {
		export module rtm {
			export module jni {
				export class IMessage {
					public static class: java.lang.Class<io.agora.rtm.jni.IMessage>;
					public swigCMemOwn: boolean;
					public delete(): void;
					public setText(param0: string): void;
					public getText(): string;
					public getMessageId(): number;
					public static getCPtr(param0: io.agora.rtm.jni.IMessage): number;
					public getRawMessageLength(): number;
					public getMessageType(): io.agora.rtm.jni.MESSAGE_TYPE;
					public getServerReceivedTs(): number;
					public release(): void;
					public getRawMessageData(): native.Array<number>;
					public isOfflineMessage(): boolean;
					public constructor(param0: number, param1: boolean);
				}
			}
		}
	}
}

declare module io {
	export module agora {
		export module rtm {
			export module jni {
				export class INVITATION_API_CALL_ERR_CODE {
					public static class: java.lang.Class<io.agora.rtm.jni.INVITATION_API_CALL_ERR_CODE>;
					public static INVITATION_API_CALL_ERR_OK: io.agora.rtm.jni.INVITATION_API_CALL_ERR_CODE;
					public static INVITATION_API_CALL_ERR_INVALID_ARGUMENT: io.agora.rtm.jni.INVITATION_API_CALL_ERR_CODE;
					public static INVITATION_API_CALL_ERR_NOT_STARTED: io.agora.rtm.jni.INVITATION_API_CALL_ERR_CODE;
					public static INVITATION_API_CALL_ERR_ALREADY_END: io.agora.rtm.jni.INVITATION_API_CALL_ERR_CODE;
					public static INVITATION_API_CALL_ERR_ALREADY_ACCEPT: io.agora.rtm.jni.INVITATION_API_CALL_ERR_CODE;
					public static INVITATION_API_CALL_ERR_ALREADY_SENT: io.agora.rtm.jni.INVITATION_API_CALL_ERR_CODE;
					public toString(): string;
					public swigValue(): number;
					public static swigToEnum(param0: number): io.agora.rtm.jni.INVITATION_API_CALL_ERR_CODE;
				}
			}
		}
	}
}

declare module io {
	export module agora {
		export module rtm {
			export module jni {
				export class IRemoteCallInvitation {
					public static class: java.lang.Class<io.agora.rtm.jni.IRemoteCallInvitation>;
					public swigCMemOwn: boolean;
					public static getCPtr(param0: io.agora.rtm.jni.IRemoteCallInvitation): number;
					public getContent(): string;
					public getCallerId(): string;
					public delete(): void;
					public getState(): io.agora.rtm.jni.REMOTE_INVITATION_STATE;
					public getResponse(): string;
					public setResponse(param0: string): void;
					public getChannelId(): string;
					public release(): void;
					public constructor(param0: number, param1: boolean);
				}
			}
		}
	}
}

declare module io {
	export module agora {
		export module rtm {
			export module jni {
				export class IRtmAttribute {
					public static class: java.lang.Class<io.agora.rtm.jni.IRtmAttribute>;
					public swigCMemOwn: boolean;
					public getKey(): string;
					public getValue(): string;
					public delete(): void;
					public setKey(param0: string): void;
					public constructor();
					public finalize(): void;
					public static getCPtr(param0: io.agora.rtm.jni.IRtmAttribute): number;
					public setValue(param0: string): void;
					public constructor(param0: number, param1: boolean);
				}
			}
		}
	}
}

declare module io {
	export module agora {
		export module rtm {
			export module jni {
				export abstract class IRtmCallEventHandler {
					public static class: java.lang.Class<io.agora.rtm.jni.IRtmCallEventHandler>;
					public swigCMemOwn: boolean;
					public swigDirectorDisconnect(): void;
					public onRemoteInvitationReceived(param0: io.agora.rtm.jni.IRemoteCallInvitation): void;
					public delete(): void;
					public onLocalInvitationAccepted(param0: io.agora.rtm.jni.ILocalCallInvitation, param1: string): void;
					public onRemoteInvitationCanceled(param0: io.agora.rtm.jni.IRemoteCallInvitation): void;
					public finalize(): void;
					public onRemoteInvitationAccepted(param0: io.agora.rtm.jni.IRemoteCallInvitation): void;
					public onLocalInvitationReceivedByPeer(param0: io.agora.rtm.jni.ILocalCallInvitation): void;
					public onLocalInvitationRefused(param0: io.agora.rtm.jni.ILocalCallInvitation, param1: string): void;
					public constructor(param0: number, param1: boolean);
					public onLocalInvitationCanceled(param0: io.agora.rtm.jni.ILocalCallInvitation): void;
					public onRemoteInvitationRefused(param0: io.agora.rtm.jni.IRemoteCallInvitation): void;
					public constructor();
					public onRemoteInvitationFailure(param0: io.agora.rtm.jni.IRemoteCallInvitation, param1: io.agora.rtm.jni.REMOTE_INVITATION_ERR_CODE): void;
					public swigReleaseOwnership(): void;
					public swigTakeOwnership(): void;
					public static getCPtr(param0: io.agora.rtm.jni.IRtmCallEventHandler): number;
					public onLocalInvitationFailure(param0: io.agora.rtm.jni.ILocalCallInvitation, param1: io.agora.rtm.jni.LOCAL_INVITATION_ERR_CODE): void;
				}
			}
		}
	}
}

declare module io {
	export module agora {
		export module rtm {
			export module jni {
				export class IRtmCallManager {
					public static class: java.lang.Class<io.agora.rtm.jni.IRtmCallManager>;
					public swigCMemOwn: boolean;
					public delete(): void;
					public createLocalCallInvitation(param0: string): io.agora.rtm.jni.ILocalCallInvitation;
					public refuseRemoteInvitation(param0: io.agora.rtm.jni.IRemoteCallInvitation): number;
					public cancelLocalInvitation(param0: io.agora.rtm.jni.ILocalCallInvitation): number;
					public sendLocalInvitation(param0: io.agora.rtm.jni.ILocalCallInvitation): number;
					public release(): void;
					public static getCPtr(param0: io.agora.rtm.jni.IRtmCallManager): number;
					public acceptRemoteInvitation(param0: io.agora.rtm.jni.IRemoteCallInvitation): number;
					public constructor(param0: number, param1: boolean);
				}
			}
		}
	}
}

declare module io {
	export module agora {
		export module rtm {
			export module jni {
				export class IRtmChannelAttribute {
					public static class: java.lang.Class<io.agora.rtm.jni.IRtmChannelAttribute>;
					public swigCMemOwn: boolean;
					public getKey(): string;
					public getValue(): string;
					public delete(): void;
					public setKey(param0: string): void;
					public finalize(): void;
					public getLastUpdateUserId(): string;
					public getLastUpdateTs(): number;
					public static getCPtr(param0: io.agora.rtm.jni.IRtmChannelAttribute): number;
					public setValue(param0: string): void;
					public constructor(param0: number, param1: boolean);
					public constructor(param0: number);
				}
			}
		}
	}
}

declare module io {
	export module agora {
		export module rtm {
			export module jni {
				export class IRtmChannelMemberCount {
					public static class: java.lang.Class<io.agora.rtm.jni.IRtmChannelMemberCount>;
					public swigCMemOwn: boolean;
					public setChannelID(param0: string): void;
					public delete(): void;
					public getMemberCount(): number;
					public setMemberCount(param0: number): void;
					public constructor();
					public static getCPtr(param0: io.agora.rtm.jni.IRtmChannelMemberCount): number;
					public finalize(): void;
					public constructor(param0: number, param1: boolean);
					public getChannelID(): string;
				}
			}
		}
	}
}

declare module io {
	export module agora {
		export module rtm {
			export module jni {
				export class IRtmService {
					public static class: java.lang.Class<io.agora.rtm.jni.IRtmService>;
					public swigCMemOwn: boolean;
					public removeEventHandler(param0: io.agora.rtm.jni.IRtmServiceEventHandler): void;
					public setParameters(param0: string): number;
					public createMessage(param0: native.Array<number>, param1: number): io.agora.rtm.jni.IMessage;
					public cancelMediaDownload(param0: number): number;
					public unsubscribePeersOnlineStatus(param0: native.Array<string>, param1: number, param2: io.agora.rtm.jni.SWIGTYPE_p_long_long): number;
					public sendMessageToPeer(param0: string, param1: io.agora.rtm.jni.IMessage): number;
					public getUserAttributesByKeys(param0: string, param1: native.Array<string>, param2: io.agora.rtm.jni.SWIGTYPE_p_long_long): number;
					public addOrUpdateLocalUserAttributes(param0: native.Array<io.agora.rtm.jni.IRtmAttribute>, param1: io.agora.rtm.jni.SWIGTYPE_p_long_long): number;
					public clearLocalUserAttributes(param0: io.agora.rtm.jni.SWIGTYPE_p_long_long): number;
					public login(param0: string, param1: string): number;
					public static getCPtr(param0: io.agora.rtm.jni.IRtmService): number;
					public addEventHandler(param0: io.agora.rtm.jni.IRtmServiceEventHandler): void;
					public getRtmCallManager(param0: io.agora.rtm.jni.IRtmCallEventHandler): io.agora.rtm.jni.IRtmCallManager;
					public getUserAttributes(param0: string, param1: io.agora.rtm.jni.SWIGTYPE_p_long_long): number;
					public addOrUpdateChannelAttributes(param0: string, param1: native.Array<io.agora.rtm.jni.IRtmChannelAttribute>, param2: io.agora.rtm.jni.IChannelAttributeOptions, param3: io.agora.rtm.jni.SWIGTYPE_p_long_long): number;
					public setLocalUserAttributes(param0: native.Array<io.agora.rtm.jni.IRtmAttribute>, param1: io.agora.rtm.jni.SWIGTYPE_p_long_long): number;
					public release(): void;
					public constructor(param0: number, param1: boolean);
					public downloadMediaToMemory(param0: string, param1: io.agora.rtm.jni.SWIGTYPE_p_long_long): number;
					public getChannelMemberCount(param0: native.Array<string>, param1: io.agora.rtm.jni.SWIGTYPE_p_long_long): number;
					public createFileMessageByMediaId(param0: string): io.agora.rtm.jni.IFileMessage;
					public getMediaUploadingPercentage(param0: number): number;
					public getChannelAttributes(param0: string, param1: io.agora.rtm.jni.SWIGTYPE_p_long_long): number;
					public deleteChannelAttributesByKeys(param0: string, param1: native.Array<string>, param2: io.agora.rtm.jni.IChannelAttributeOptions, param3: io.agora.rtm.jni.SWIGTYPE_p_long_long): number;
					public clearChannelAttributes(param0: string, param1: io.agora.rtm.jni.IChannelAttributeOptions, param2: io.agora.rtm.jni.SWIGTYPE_p_long_long): number;
					public createMessage(param0: native.Array<number>, param1: number, param2: string): io.agora.rtm.jni.IMessage;
					public delete(): void;
					public logout(): number;
					public createImageMessageByUploading(param0: string, param1: io.agora.rtm.jni.SWIGTYPE_p_long_long): number;
					public setChannelAttributes(param0: string, param1: native.Array<io.agora.rtm.jni.IRtmChannelAttribute>, param2: io.agora.rtm.jni.IChannelAttributeOptions, param3: io.agora.rtm.jni.SWIGTYPE_p_long_long): number;
					public static setRtmServiceContext(param0: io.agora.rtm.RtmServiceContext): number;
					public setLogFileSize(param0: number): number;
					public setLogFilter(param0: number): number;
					public createMessage(): io.agora.rtm.jni.IMessage;
					public renewToken(param0: string): number;
					public setLogFile(param0: string): number;
					public downloadMediaToFile(param0: string, param1: string, param2: io.agora.rtm.jni.SWIGTYPE_p_long_long): number;
					public createFileMessageByUploading(param0: string, param1: io.agora.rtm.jni.SWIGTYPE_p_long_long): number;
					public createImageMessageByMediaId(param0: string): io.agora.rtm.jni.IImageMessage;
					public createMessage(param0: string): io.agora.rtm.jni.IMessage;
					public getMediaDownloadingPercentage(param0: number): number;
					public createChannel(param0: string, param1: io.agora.rtm.jni.IChannelEventHandler): io.agora.rtm.jni.IChannel;
					public subscribePeersOnlineStatus(param0: native.Array<string>, param1: number, param2: io.agora.rtm.jni.SWIGTYPE_p_long_long): number;
					public queryPeersBySubscriptionOption(param0: io.agora.rtm.jni.PEER_SUBSCRIPTION_OPTION, param1: io.agora.rtm.jni.SWIGTYPE_p_long_long): number;
					public initialize(param0: string, param1: io.agora.rtm.jni.IRtmServiceEventHandler): number;
					public deleteLocalUserAttributesByKeys(param0: native.Array<string>, param1: io.agora.rtm.jni.SWIGTYPE_p_long_long): number;
					public cancelMediaUpload(param0: number): number;
					public sendMessageToPeer(param0: string, param1: io.agora.rtm.jni.IMessage, param2: io.agora.rtm.jni.ISendMessageOptions): number;
					public getChannelAttributesByKeys(param0: string, param1: native.Array<string>, param2: io.agora.rtm.jni.SWIGTYPE_p_long_long): number;
					public release(param0: boolean): void;
					public queryPeersOnlineStatus(param0: native.Array<string>, param1: number, param2: io.agora.rtm.jni.SWIGTYPE_p_long_long): number;
				}
			}
		}
	}
}

declare module io {
	export module agora {
		export module rtm {
			export module jni {
				export abstract class IRtmServiceEventHandler {
					public static class: java.lang.Class<io.agora.rtm.jni.IRtmServiceEventHandler>;
					public swigCMemOwn: boolean;
					public onMediaDownloadingProgress(param0: number, param1: io.agora.rtm.jni.MediaOperationProgress): void;
					public swigDirectorDisconnect(): void;
					public delete(): void;
					public onAddOrUpdateLocalUserAttributesResult(param0: number, param1: io.agora.rtm.jni.ATTRIBUTE_OPERATION_ERR): void;
					public finalize(): void;
					public onConnectionStateChanged(param0: io.agora.rtm.jni.CONNECTION_STATE, param1: io.agora.rtm.jni.CONNECTION_CHANGE_REASON): void;
					public onSubscriptionRequestResult(param0: number, param1: io.agora.rtm.jni.PEER_SUBSCRIPTION_STATUS_ERR): void;
					public onSetLocalUserAttributesResult(param0: number, param1: io.agora.rtm.jni.ATTRIBUTE_OPERATION_ERR): void;
					public onLoginSuccess(): void;
					public onPeersOnlineStatusChanged(param0: native.Array<io.agora.rtm.jni.PeerOnlineStatus>, param1: number): void;
					public onSetChannelAttributesResult(param0: number, param1: io.agora.rtm.jni.ATTRIBUTE_OPERATION_ERR): void;
					public onSendMessageResult(param0: number, param1: io.agora.rtm.jni.PEER_MESSAGE_ERR_CODE): void;
					public onMessageReceivedFromPeer(param0: string, param1: io.agora.rtm.jni.IMessage): void;
					public onDeleteChannelAttributesResult(param0: number, param1: io.agora.rtm.jni.ATTRIBUTE_OPERATION_ERR): void;
					public onLogout(param0: io.agora.rtm.jni.LOGOUT_ERR_CODE): void;
					public onFileMediaUploadResult(param0: number, param1: io.agora.rtm.jni.IFileMessage, param2: io.agora.rtm.jni.UPLOAD_MEDIA_ERR_CODE): void;
					public onGetChannelAttributesResult(param0: number, param1: native.Array<io.agora.rtm.jni.IRtmChannelAttribute>, param2: number, param3: io.agora.rtm.jni.ATTRIBUTE_OPERATION_ERR): void;
					public constructor();
					public onLoginFailure(param0: io.agora.rtm.jni.LOGIN_ERR_CODE): void;
					public onImageMediaUploadResult(param0: number, param1: io.agora.rtm.jni.IImageMessage, param2: io.agora.rtm.jni.UPLOAD_MEDIA_ERR_CODE): void;
					public onQueryPeersOnlineStatusResult(param0: number, param1: native.Array<io.agora.rtm.jni.PeerOnlineStatus>, param2: number, param3: io.agora.rtm.jni.QUERY_PEERS_ONLINE_STATUS_ERR): void;
					public onQueryPeersBySubscriptionOptionResult(param0: number, param1: native.Array<string>, param2: number, param3: io.agora.rtm.jni.QUERY_PEERS_BY_SUBSCRIPTION_OPTION_ERR): void;
					public onImageMessageReceivedFromPeer(param0: string, param1: io.agora.rtm.jni.IImageMessage): void;
					public onFileMessageReceivedFromPeer(param0: string, param1: io.agora.rtm.jni.IFileMessage): void;
					public onMediaDownloadToMemoryResult(param0: number, param1: native.Array<number>, param2: io.agora.rtm.jni.DOWNLOAD_MEDIA_ERR_CODE): void;
					public onRenewTokenResult(param0: string, param1: io.agora.rtm.jni.RENEW_TOKEN_ERR_CODE): void;
					public static getCPtr(param0: io.agora.rtm.jni.IRtmServiceEventHandler): number;
					public onClearChannelAttributesResult(param0: number, param1: io.agora.rtm.jni.ATTRIBUTE_OPERATION_ERR): void;
					public onTokenExpired(): void;
					public onGetUserAttributesResult(param0: number, param1: string, param2: native.Array<io.agora.rtm.jni.IRtmAttribute>, param3: number, param4: io.agora.rtm.jni.ATTRIBUTE_OPERATION_ERR): void;
					public onMediaCancelResult(param0: number, param1: io.agora.rtm.jni.CANCEL_MEDIA_ERR_CODE): void;
					public onMediaDownloadToFileResult(param0: number, param1: io.agora.rtm.jni.DOWNLOAD_MEDIA_ERR_CODE): void;
					public constructor(param0: number, param1: boolean);
					public onDeleteLocalUserAttributesResult(param0: number, param1: io.agora.rtm.jni.ATTRIBUTE_OPERATION_ERR): void;
					public onClearLocalUserAttributesResult(param0: number, param1: io.agora.rtm.jni.ATTRIBUTE_OPERATION_ERR): void;
					public swigReleaseOwnership(): void;
					public swigTakeOwnership(): void;
					public onGetChannelMemberCountResult(param0: number, param1: native.Array<io.agora.rtm.jni.IRtmChannelMemberCount>, param2: number, param3: io.agora.rtm.jni.GET_CHANNEL_MEMBER_COUNT_ERR): void;
					public onMediaUploadingProgress(param0: number, param1: io.agora.rtm.jni.MediaOperationProgress): void;
					public onAddOrUpdateChannelAttributesResult(param0: number, param1: io.agora.rtm.jni.ATTRIBUTE_OPERATION_ERR): void;
				}
			}
		}
	}
}

declare module io {
	export module agora {
		export module rtm {
			export module jni {
				export class ISendMessageOptions {
					public static class: java.lang.Class<io.agora.rtm.jni.ISendMessageOptions>;
					public swigCMemOwn: boolean;
					public getEnableHistoricalMessaging(): boolean;
					public delete(): void;
					public setEnableOfflineMessaging(param0: boolean): void;
					public constructor();
					public finalize(): void;
					public getEnableOfflineMessaging(): boolean;
					public static getCPtr(param0: io.agora.rtm.jni.ISendMessageOptions): number;
					public setEnableHistoricalMessaging(param0: boolean): void;
					public constructor(param0: number, param1: boolean);
				}
			}
		}
	}
}

declare module io {
	export module agora {
		export module rtm {
			export module jni {
				export class JOIN_CHANNEL_ERR {
					public static class: java.lang.Class<io.agora.rtm.jni.JOIN_CHANNEL_ERR>;
					public static JOIN_CHANNEL_ERR_OK: io.agora.rtm.jni.JOIN_CHANNEL_ERR;
					public static JOIN_CHANNEL_ERR_FAILURE: io.agora.rtm.jni.JOIN_CHANNEL_ERR;
					public static JOIN_CHANNEL_ERR_REJECTED: io.agora.rtm.jni.JOIN_CHANNEL_ERR;
					public static JOIN_CHANNEL_ERR_INVALID_ARGUMENT: io.agora.rtm.jni.JOIN_CHANNEL_ERR;
					public static JOIN_CHANNEL_TIMEOUT: io.agora.rtm.jni.JOIN_CHANNEL_ERR;
					public static JOIN_CHANNEL_ERR_EXCEED_LIMIT: io.agora.rtm.jni.JOIN_CHANNEL_ERR;
					public static JOIN_CHANNEL_ERR_ALREADY_JOINED: io.agora.rtm.jni.JOIN_CHANNEL_ERR;
					public static JOIN_CHANNEL_ERR_TOO_OFTEN: io.agora.rtm.jni.JOIN_CHANNEL_ERR;
					public static JOIN_CHANNEL_ERR_JOIN_SAME_CHANNEL_TOO_OFTEN: io.agora.rtm.jni.JOIN_CHANNEL_ERR;
					public static JOIN_CHANNEL_ERR_NOT_INITIALIZED: io.agora.rtm.jni.JOIN_CHANNEL_ERR;
					public static JOIN_CHANNEL_ERR_USER_NOT_LOGGED_IN: io.agora.rtm.jni.JOIN_CHANNEL_ERR;
					public toString(): string;
					public static swigToEnum(param0: number): io.agora.rtm.jni.JOIN_CHANNEL_ERR;
					public swigValue(): number;
				}
			}
		}
	}
}

declare module io {
	export module agora {
		export module rtm {
			export module jni {
				export class LEAVE_CHANNEL_ERR {
					public static class: java.lang.Class<io.agora.rtm.jni.LEAVE_CHANNEL_ERR>;
					public static LEAVE_CHANNEL_ERR_OK: io.agora.rtm.jni.LEAVE_CHANNEL_ERR;
					public static LEAVE_CHANNEL_ERR_FAILURE: io.agora.rtm.jni.LEAVE_CHANNEL_ERR;
					public static LEAVE_CHANNEL_ERR_REJECTED: io.agora.rtm.jni.LEAVE_CHANNEL_ERR;
					public static LEAVE_CHANNEL_ERR_NOT_IN_CHANNEL: io.agora.rtm.jni.LEAVE_CHANNEL_ERR;
					public static LEAVE_CHANNEL_ERR_NOT_INITIALIZED: io.agora.rtm.jni.LEAVE_CHANNEL_ERR;
					public static LEAVE_CHANNEL_ERR_USER_NOT_LOGGED_IN: io.agora.rtm.jni.LEAVE_CHANNEL_ERR;
					public toString(): string;
					public swigValue(): number;
					public static swigToEnum(param0: number): io.agora.rtm.jni.LEAVE_CHANNEL_ERR;
				}
			}
		}
	}
}

declare module io {
	export module agora {
		export module rtm {
			export module jni {
				export class LOCAL_INVITATION_ERR_CODE {
					public static class: java.lang.Class<io.agora.rtm.jni.LOCAL_INVITATION_ERR_CODE>;
					public static LOCAL_INVITATION_ERR_OK: io.agora.rtm.jni.LOCAL_INVITATION_ERR_CODE;
					public static LOCAL_INVITATION_ERR_PEER_OFFLINE: io.agora.rtm.jni.LOCAL_INVITATION_ERR_CODE;
					public static LOCAL_INVITATION_ERR_PEER_NO_RESPONSE: io.agora.rtm.jni.LOCAL_INVITATION_ERR_CODE;
					public static LOCAL_INVITATION_ERR_INVITATION_EXPIRE: io.agora.rtm.jni.LOCAL_INVITATION_ERR_CODE;
					public static LOCAL_INVITATION_ERR_NOT_LOGGEDIN: io.agora.rtm.jni.LOCAL_INVITATION_ERR_CODE;
					public toString(): string;
					public static swigToEnum(param0: number): io.agora.rtm.jni.LOCAL_INVITATION_ERR_CODE;
					public swigValue(): number;
				}
			}
		}
	}
}

declare module io {
	export module agora {
		export module rtm {
			export module jni {
				export class LOCAL_INVITATION_STATE {
					public static class: java.lang.Class<io.agora.rtm.jni.LOCAL_INVITATION_STATE>;
					public static LOCAL_INVITATION_STATE_IDLE: io.agora.rtm.jni.LOCAL_INVITATION_STATE;
					public static LOCAL_INVITATION_STATE_SENT_TO_REMOTE: io.agora.rtm.jni.LOCAL_INVITATION_STATE;
					public static LOCAL_INVITATION_STATE_RECEIVED_BY_REMOTE: io.agora.rtm.jni.LOCAL_INVITATION_STATE;
					public static LOCAL_INVITATION_STATE_ACCEPTED_BY_REMOTE: io.agora.rtm.jni.LOCAL_INVITATION_STATE;
					public static LOCAL_INVITATION_STATE_REFUSED_BY_REMOTE: io.agora.rtm.jni.LOCAL_INVITATION_STATE;
					public static LOCAL_INVITATION_STATE_CANCELED: io.agora.rtm.jni.LOCAL_INVITATION_STATE;
					public static LOCAL_INVITATION_STATE_FAILURE: io.agora.rtm.jni.LOCAL_INVITATION_STATE;
					public toString(): string;
					public static swigToEnum(param0: number): io.agora.rtm.jni.LOCAL_INVITATION_STATE;
					public swigValue(): number;
				}
			}
		}
	}
}

declare module io {
	export module agora {
		export module rtm {
			export module jni {
				export class LOGIN_ERR_CODE {
					public static class: java.lang.Class<io.agora.rtm.jni.LOGIN_ERR_CODE>;
					public static LOGIN_ERR_OK: io.agora.rtm.jni.LOGIN_ERR_CODE;
					public static LOGIN_ERR_UNKNOWN: io.agora.rtm.jni.LOGIN_ERR_CODE;
					public static LOGIN_ERR_REJECTED: io.agora.rtm.jni.LOGIN_ERR_CODE;
					public static LOGIN_ERR_INVALID_ARGUMENT: io.agora.rtm.jni.LOGIN_ERR_CODE;
					public static LOGIN_ERR_INVALID_APP_ID: io.agora.rtm.jni.LOGIN_ERR_CODE;
					public static LOGIN_ERR_INVALID_TOKEN: io.agora.rtm.jni.LOGIN_ERR_CODE;
					public static LOGIN_ERR_TOKEN_EXPIRED: io.agora.rtm.jni.LOGIN_ERR_CODE;
					public static LOGIN_ERR_NOT_AUTHORIZED: io.agora.rtm.jni.LOGIN_ERR_CODE;
					public static LOGIN_ERR_ALREADY_LOGGED_IN: io.agora.rtm.jni.LOGIN_ERR_CODE;
					public static LOGIN_ERR_TIMEOUT: io.agora.rtm.jni.LOGIN_ERR_CODE;
					public static LOGIN_ERR_TOO_OFTEN: io.agora.rtm.jni.LOGIN_ERR_CODE;
					public static LOGIN_ERR_NOT_INITIALIZED: io.agora.rtm.jni.LOGIN_ERR_CODE;
					public toString(): string;
					public static swigToEnum(param0: number): io.agora.rtm.jni.LOGIN_ERR_CODE;
					public swigValue(): number;
				}
			}
		}
	}
}

declare module io {
	export module agora {
		export module rtm {
			export module jni {
				export class LOGOUT_ERR_CODE {
					public static class: java.lang.Class<io.agora.rtm.jni.LOGOUT_ERR_CODE>;
					public static LOGOUT_ERR_OK: io.agora.rtm.jni.LOGOUT_ERR_CODE;
					public static LOGOUT_ERR_REJECTED: io.agora.rtm.jni.LOGOUT_ERR_CODE;
					public static LOGOUT_ERR_NOT_INITIALIZED: io.agora.rtm.jni.LOGOUT_ERR_CODE;
					public static LOGOUT_ERR_USER_NOT_LOGGED_IN: io.agora.rtm.jni.LOGOUT_ERR_CODE;
					public toString(): string;
					public swigValue(): number;
					public static swigToEnum(param0: number): io.agora.rtm.jni.LOGOUT_ERR_CODE;
				}
			}
		}
	}
}

declare module io {
	export module agora {
		export module rtm {
			export module jni {
				export class MESSAGE_TYPE {
					public static class: java.lang.Class<io.agora.rtm.jni.MESSAGE_TYPE>;
					public static MESSAGE_TYPE_UNDEFINED: io.agora.rtm.jni.MESSAGE_TYPE;
					public static MESSAGE_TYPE_TEXT: io.agora.rtm.jni.MESSAGE_TYPE;
					public static MESSAGE_TYPE_RAW: io.agora.rtm.jni.MESSAGE_TYPE;
					public static MESSAGE_TYPE_FILE: io.agora.rtm.jni.MESSAGE_TYPE;
					public static MESSAGE_TYPE_IMAGE: io.agora.rtm.jni.MESSAGE_TYPE;
					public toString(): string;
					public static swigToEnum(param0: number): io.agora.rtm.jni.MESSAGE_TYPE;
					public swigValue(): number;
				}
			}
		}
	}
}

declare module io {
	export module agora {
		export module rtm {
			export module jni {
				export class MediaOperationProgress {
					public static class: java.lang.Class<io.agora.rtm.jni.MediaOperationProgress>;
					public swigCMemOwn: boolean;
					public delete(): void;
					public static getCPtr(param0: io.agora.rtm.jni.MediaOperationProgress): number;
					public getCurrentSize(): number;
					public constructor();
					public finalize(): void;
					public getTotalSize(): number;
					public setTotalSize(param0: number): void;
					public setCurrentSize(param0: number): void;
					public constructor(param0: number, param1: boolean);
				}
			}
		}
	}
}

declare module io {
	export module agora {
		export module rtm {
			export module jni {
				export class PEER_MESSAGE_ERR_CODE {
					public static class: java.lang.Class<io.agora.rtm.jni.PEER_MESSAGE_ERR_CODE>;
					public static PEER_MESSAGE_ERR_OK: io.agora.rtm.jni.PEER_MESSAGE_ERR_CODE;
					public static PEER_MESSAGE_ERR_FAILURE: io.agora.rtm.jni.PEER_MESSAGE_ERR_CODE;
					public static PEER_MESSAGE_ERR_SENT_TIMEOUT: io.agora.rtm.jni.PEER_MESSAGE_ERR_CODE;
					public static PEER_MESSAGE_ERR_PEER_UNREACHABLE: io.agora.rtm.jni.PEER_MESSAGE_ERR_CODE;
					public static PEER_MESSAGE_ERR_CACHED_BY_SERVER: io.agora.rtm.jni.PEER_MESSAGE_ERR_CODE;
					public static PEER_MESSAGE_ERR_TOO_OFTEN: io.agora.rtm.jni.PEER_MESSAGE_ERR_CODE;
					public static PEER_MESSAGE_ERR_INVALID_USERID: io.agora.rtm.jni.PEER_MESSAGE_ERR_CODE;
					public static PEER_MESSAGE_ERR_INVALID_MESSAGE: io.agora.rtm.jni.PEER_MESSAGE_ERR_CODE;
					public static PEER_MESSAGE_ERR_IMCOMPATIBLE_MESSAGE: io.agora.rtm.jni.PEER_MESSAGE_ERR_CODE;
					public static PEER_MESSAGE_ERR_NOT_INITIALIZED: io.agora.rtm.jni.PEER_MESSAGE_ERR_CODE;
					public static PEER_MESSAGE_ERR_USER_NOT_LOGGED_IN: io.agora.rtm.jni.PEER_MESSAGE_ERR_CODE;
					public toString(): string;
					public static swigToEnum(param0: number): io.agora.rtm.jni.PEER_MESSAGE_ERR_CODE;
					public swigValue(): number;
				}
			}
		}
	}
}

declare module io {
	export module agora {
		export module rtm {
			export module jni {
				export class PEER_ONLINE_STATE {
					public static class: java.lang.Class<io.agora.rtm.jni.PEER_ONLINE_STATE>;
					public static PEER_ONLINE_STATE_ONLINE: io.agora.rtm.jni.PEER_ONLINE_STATE;
					public static PEER_ONLINE_STATE_UNREACHABLE: io.agora.rtm.jni.PEER_ONLINE_STATE;
					public static PEER_ONLINE_STATE_OFFLINE: io.agora.rtm.jni.PEER_ONLINE_STATE;
					public toString(): string;
					public swigValue(): number;
					public static swigToEnum(param0: number): io.agora.rtm.jni.PEER_ONLINE_STATE;
				}
			}
		}
	}
}

declare module io {
	export module agora {
		export module rtm {
			export module jni {
				export class PEER_SUBSCRIPTION_OPTION {
					public static class: java.lang.Class<io.agora.rtm.jni.PEER_SUBSCRIPTION_OPTION>;
					public static PEER_SUBSCRIPTION_OPTION_ONLINE_STATUS: io.agora.rtm.jni.PEER_SUBSCRIPTION_OPTION;
					public toString(): string;
					public static swigToEnum(param0: number): io.agora.rtm.jni.PEER_SUBSCRIPTION_OPTION;
					public swigValue(): number;
				}
			}
		}
	}
}

declare module io {
	export module agora {
		export module rtm {
			export module jni {
				export class PEER_SUBSCRIPTION_STATUS_ERR {
					public static class: java.lang.Class<io.agora.rtm.jni.PEER_SUBSCRIPTION_STATUS_ERR>;
					public static PEER_SUBSCRIPTION_STATUS_ERR_OK: io.agora.rtm.jni.PEER_SUBSCRIPTION_STATUS_ERR;
					public static PEER_SUBSCRIPTION_STATUS_ERR_FAILURE: io.agora.rtm.jni.PEER_SUBSCRIPTION_STATUS_ERR;
					public static PEER_SUBSCRIPTION_STATUS_ERR_INVALID_ARGUMENT: io.agora.rtm.jni.PEER_SUBSCRIPTION_STATUS_ERR;
					public static PEER_SUBSCRIPTION_STATUS_ERR_REJECTED: io.agora.rtm.jni.PEER_SUBSCRIPTION_STATUS_ERR;
					public static PEER_SUBSCRIPTION_STATUS_ERR_TIMEOUT: io.agora.rtm.jni.PEER_SUBSCRIPTION_STATUS_ERR;
					public static PEER_SUBSCRIPTION_STATUS_ERR_TOO_OFTEN: io.agora.rtm.jni.PEER_SUBSCRIPTION_STATUS_ERR;
					public static PEER_SUBSCRIPTION_STATUS_ERR_OVERFLOW: io.agora.rtm.jni.PEER_SUBSCRIPTION_STATUS_ERR;
					public static PEER_SUBSCRIPTION_STATUS_ERR_NOT_INITIALIZED: io.agora.rtm.jni.PEER_SUBSCRIPTION_STATUS_ERR;
					public static PEER_SUBSCRIPTION_STATUS_ERR_USER_NOT_LOGGED_IN: io.agora.rtm.jni.PEER_SUBSCRIPTION_STATUS_ERR;
					public toString(): string;
					public static swigToEnum(param0: number): io.agora.rtm.jni.PEER_SUBSCRIPTION_STATUS_ERR;
					public swigValue(): number;
				}
			}
		}
	}
}

declare module io {
	export module agora {
		export module rtm {
			export module jni {
				export class PeerOnlineStatus {
					public static class: java.lang.Class<io.agora.rtm.jni.PeerOnlineStatus>;
					public swigCMemOwn: boolean;
					public getPeerId(): string;
					public delete(): void;
					public finalize(): void;
					public static cArrayUnwrap(param0: native.Array<io.agora.rtm.jni.PeerOnlineStatus>): native.Array<number>;
					public constructor(param0: number, param1: boolean);
					public static getCPtr(param0: io.agora.rtm.jni.PeerOnlineStatus): number;
					public getOnlineState(): io.agora.rtm.jni.PEER_ONLINE_STATE;
					public constructor();
					public setPeerId(param0: string): void;
					public setIsOnline(param0: boolean): void;
					public setOnlineState(param0: io.agora.rtm.jni.PEER_ONLINE_STATE): void;
					public static cArrayWrap(param0: native.Array<number>, param1: boolean): native.Array<io.agora.rtm.jni.PeerOnlineStatus>;
					public getIsOnline(): boolean;
				}
			}
		}
	}
}

declare module io {
	export module agora {
		export module rtm {
			export module jni {
				export class QUERY_PEERS_BY_SUBSCRIPTION_OPTION_ERR {
					public static class: java.lang.Class<io.agora.rtm.jni.QUERY_PEERS_BY_SUBSCRIPTION_OPTION_ERR>;
					public static QUERY_PEERS_BY_SUBSCRIPTION_OPTION_ERR_OK: io.agora.rtm.jni.QUERY_PEERS_BY_SUBSCRIPTION_OPTION_ERR;
					public static QUERY_PEERS_BY_SUBSCRIPTION_OPTION_ERR_FAILURE: io.agora.rtm.jni.QUERY_PEERS_BY_SUBSCRIPTION_OPTION_ERR;
					public static QUERY_PEERS_BY_SUBSCRIPTION_OPTION_ERR_TIMEOUT: io.agora.rtm.jni.QUERY_PEERS_BY_SUBSCRIPTION_OPTION_ERR;
					public static QUERY_PEERS_BY_SUBSCRIPTION_OPTION_ERR_TOO_OFTEN: io.agora.rtm.jni.QUERY_PEERS_BY_SUBSCRIPTION_OPTION_ERR;
					public static QUERY_PEERS_BY_SUBSCRIPTION_OPTION_ERR_NOT_INITIALIZED: io.agora.rtm.jni.QUERY_PEERS_BY_SUBSCRIPTION_OPTION_ERR;
					public static QUERY_PEERS_BY_SUBSCRIPTION_OPTION_ERR_USER_NOT_LOGGED_IN: io.agora.rtm.jni.QUERY_PEERS_BY_SUBSCRIPTION_OPTION_ERR;
					public toString(): string;
					public static swigToEnum(param0: number): io.agora.rtm.jni.QUERY_PEERS_BY_SUBSCRIPTION_OPTION_ERR;
					public swigValue(): number;
				}
			}
		}
	}
}

declare module io {
	export module agora {
		export module rtm {
			export module jni {
				export class QUERY_PEERS_ONLINE_STATUS_ERR {
					public static class: java.lang.Class<io.agora.rtm.jni.QUERY_PEERS_ONLINE_STATUS_ERR>;
					public static QUERY_PEERS_ONLINE_STATUS_ERR_OK: io.agora.rtm.jni.QUERY_PEERS_ONLINE_STATUS_ERR;
					public static QUERY_PEERS_ONLINE_STATUS_ERR_FAILURE: io.agora.rtm.jni.QUERY_PEERS_ONLINE_STATUS_ERR;
					public static QUERY_PEERS_ONLINE_STATUS_ERR_INVALID_ARGUMENT: io.agora.rtm.jni.QUERY_PEERS_ONLINE_STATUS_ERR;
					public static QUERY_PEERS_ONLINE_STATUS_ERR_REJECTED: io.agora.rtm.jni.QUERY_PEERS_ONLINE_STATUS_ERR;
					public static QUERY_PEERS_ONLINE_STATUS_ERR_TIMEOUT: io.agora.rtm.jni.QUERY_PEERS_ONLINE_STATUS_ERR;
					public static QUERY_PEERS_ONLINE_STATUS_ERR_TOO_OFTEN: io.agora.rtm.jni.QUERY_PEERS_ONLINE_STATUS_ERR;
					public static QUERY_PEERS_ONLINE_STATUS_ERR_NOT_INITIALIZED: io.agora.rtm.jni.QUERY_PEERS_ONLINE_STATUS_ERR;
					public static QUERY_PEERS_ONLINE_STATUS_ERR_USER_NOT_LOGGED_IN: io.agora.rtm.jni.QUERY_PEERS_ONLINE_STATUS_ERR;
					public toString(): string;
					public swigValue(): number;
					public static swigToEnum(param0: number): io.agora.rtm.jni.QUERY_PEERS_ONLINE_STATUS_ERR;
				}
			}
		}
	}
}

declare module io {
	export module agora {
		export module rtm {
			export module jni {
				export class REMOTE_INVITATION_ERR_CODE {
					public static class: java.lang.Class<io.agora.rtm.jni.REMOTE_INVITATION_ERR_CODE>;
					public static REMOTE_INVITATION_ERR_OK: io.agora.rtm.jni.REMOTE_INVITATION_ERR_CODE;
					public static REMOTE_INVITATION_ERR_PEER_OFFLINE: io.agora.rtm.jni.REMOTE_INVITATION_ERR_CODE;
					public static REMOTE_INVITATION_ERR_ACCEPT_FAILURE: io.agora.rtm.jni.REMOTE_INVITATION_ERR_CODE;
					public static REMOTE_INVITATION_ERR_INVITATION_EXPIRE: io.agora.rtm.jni.REMOTE_INVITATION_ERR_CODE;
					public toString(): string;
					public static swigToEnum(param0: number): io.agora.rtm.jni.REMOTE_INVITATION_ERR_CODE;
					public swigValue(): number;
				}
			}
		}
	}
}

declare module io {
	export module agora {
		export module rtm {
			export module jni {
				export class REMOTE_INVITATION_STATE {
					public static class: java.lang.Class<io.agora.rtm.jni.REMOTE_INVITATION_STATE>;
					public static REMOTE_INVITATION_STATE_IDLE: io.agora.rtm.jni.REMOTE_INVITATION_STATE;
					public static REMOTE_INVITATION_STATE_INVITATION_RECEIVED: io.agora.rtm.jni.REMOTE_INVITATION_STATE;
					public static REMOTE_INVITATION_STATE_ACCEPT_SENT_TO_LOCAL: io.agora.rtm.jni.REMOTE_INVITATION_STATE;
					public static REMOTE_INVITATION_STATE_REFUSED: io.agora.rtm.jni.REMOTE_INVITATION_STATE;
					public static REMOTE_INVITATION_STATE_ACCEPTED: io.agora.rtm.jni.REMOTE_INVITATION_STATE;
					public static REMOTE_INVITATION_STATE_CANCELED: io.agora.rtm.jni.REMOTE_INVITATION_STATE;
					public static REMOTE_INVITATION_STATE_FAILURE: io.agora.rtm.jni.REMOTE_INVITATION_STATE;
					public toString(): string;
					public static swigToEnum(param0: number): io.agora.rtm.jni.REMOTE_INVITATION_STATE;
					public swigValue(): number;
				}
			}
		}
	}
}

declare module io {
	export module agora {
		export module rtm {
			export module jni {
				export class RENEW_TOKEN_ERR_CODE {
					public static class: java.lang.Class<io.agora.rtm.jni.RENEW_TOKEN_ERR_CODE>;
					public static RENEW_TOKEN_ERR_OK: io.agora.rtm.jni.RENEW_TOKEN_ERR_CODE;
					public static RENEW_TOKEN_ERR_FAILURE: io.agora.rtm.jni.RENEW_TOKEN_ERR_CODE;
					public static RENEW_TOKEN_ERR_INVALID_ARGUMENT: io.agora.rtm.jni.RENEW_TOKEN_ERR_CODE;
					public static RENEW_TOKEN_ERR_REJECTED: io.agora.rtm.jni.RENEW_TOKEN_ERR_CODE;
					public static RENEW_TOKEN_ERR_TOO_OFTEN: io.agora.rtm.jni.RENEW_TOKEN_ERR_CODE;
					public static RENEW_TOKEN_ERR_TOKEN_EXPIRED: io.agora.rtm.jni.RENEW_TOKEN_ERR_CODE;
					public static RENEW_TOKEN_ERR_INVALID_TOKEN: io.agora.rtm.jni.RENEW_TOKEN_ERR_CODE;
					public static RENEW_TOKEN_ERR_NOT_INITIALIZED: io.agora.rtm.jni.RENEW_TOKEN_ERR_CODE;
					public static RENEW_TOKEN_ERR_USER_NOT_LOGGED_IN: io.agora.rtm.jni.RENEW_TOKEN_ERR_CODE;
					public toString(): string;
					public static swigToEnum(param0: number): io.agora.rtm.jni.RENEW_TOKEN_ERR_CODE;
					public swigValue(): number;
				}
			}
		}
	}
}

declare module io {
	export module agora {
		export module rtm {
			export module jni {
				export class RTM_AREA_CODE {
					public static class: java.lang.Class<io.agora.rtm.jni.RTM_AREA_CODE>;
					public static AREA_CODE_CN: io.agora.rtm.jni.RTM_AREA_CODE;
					public static AREA_CODE_NA: io.agora.rtm.jni.RTM_AREA_CODE;
					public static AREA_CODE_EUR: io.agora.rtm.jni.RTM_AREA_CODE;
					public static AREA_CODE_AS: io.agora.rtm.jni.RTM_AREA_CODE;
					public static AREA_CODE_JAPAN: io.agora.rtm.jni.RTM_AREA_CODE;
					public static AREA_CODE_INDIAN: io.agora.rtm.jni.RTM_AREA_CODE;
					public static AREA_CODE_GLOBAL: io.agora.rtm.jni.RTM_AREA_CODE;
					public toString(): string;
					public swigValue(): number;
					public static swigToEnum(param0: number): io.agora.rtm.jni.RTM_AREA_CODE;
				}
			}
		}
	}
}

declare module io {
	export module agora {
		export module rtm {
			export module jni {
				export class RtmServiceContext {
					public static class: java.lang.Class<io.agora.rtm.jni.RtmServiceContext>;
					public swigCMemOwn: boolean;
					public delete(): void;
					public setAreaCode(param0: number): void;
					public constructor();
					public finalize(): void;
					public static getCPtr(param0: io.agora.rtm.jni.RtmServiceContext): number;
					public getAreaCode(): io.agora.rtm.jni.RTM_AREA_CODE;
					public constructor(param0: number, param1: boolean);
				}
			}
		}
	}
}

declare module io {
	export module agora {
		export module rtm {
			export module jni {
				export class SET_RTM_SERVICE_CONTEXT_ERR_CODE {
					public static class: java.lang.Class<io.agora.rtm.jni.SET_RTM_SERVICE_CONTEXT_ERR_CODE>;
					public static SET_RTM_SERVICE_CONTEXT_ERR_OK: io.agora.rtm.jni.SET_RTM_SERVICE_CONTEXT_ERR_CODE;
					public static SET_RTM_SERVICE_CONTEXT_ERR_FAILURE: io.agora.rtm.jni.SET_RTM_SERVICE_CONTEXT_ERR_CODE;
					public toString(): string;
					public swigValue(): number;
					public static swigToEnum(param0: number): io.agora.rtm.jni.SET_RTM_SERVICE_CONTEXT_ERR_CODE;
				}
			}
		}
	}
}

declare module io {
	export module agora {
		export module rtm {
			export module jni {
				export class SWIGTYPE_p_long_long {
					public static class: java.lang.Class<io.agora.rtm.jni.SWIGTYPE_p_long_long>;
					public swigCMemOwn: boolean;
					public delete(): void;
					public constructor();
					public finalize(): void;
					public static getCPtr(param0: io.agora.rtm.jni.SWIGTYPE_p_long_long): number;
					public static dereference(param0: io.agora.rtm.jni.SWIGTYPE_p_long_long): number;
					public constructor(param0: number, param1: boolean);
				}
			}
		}
	}
}

declare module io {
	export module agora {
		export module rtm {
			export module jni {
				export class SWIGTYPE_p_unsigned_char {
					public static class: java.lang.Class<io.agora.rtm.jni.SWIGTYPE_p_unsigned_char>;
					public static getCPtr(param0: io.agora.rtm.jni.SWIGTYPE_p_unsigned_char): number;
					public constructor();
					public constructor(param0: number, param1: boolean);
					public constructor(param0: number);
				}
			}
		}
	}
}

declare module io {
	export module agora {
		export module rtm {
			export module jni {
				export class UPLOAD_MEDIA_ERR_CODE {
					public static class: java.lang.Class<io.agora.rtm.jni.UPLOAD_MEDIA_ERR_CODE>;
					public static UPLOAD_MEDIA_ERR_OK: io.agora.rtm.jni.UPLOAD_MEDIA_ERR_CODE;
					public static UPLOAD_MEDIA_ERR_FAILURE: io.agora.rtm.jni.UPLOAD_MEDIA_ERR_CODE;
					public static UPLOAD_MEDIA_ERR_INVALID_ARGUMENT: io.agora.rtm.jni.UPLOAD_MEDIA_ERR_CODE;
					public static UPLOAD_MEDIA_ERR_TIMEOUT: io.agora.rtm.jni.UPLOAD_MEDIA_ERR_CODE;
					public static UPLOAD_MEDIA_ERR_SIZE_OVERFLOW: io.agora.rtm.jni.UPLOAD_MEDIA_ERR_CODE;
					public static UPLOAD_MEDIA_ERR_CONCURRENCY_LIMIT_EXCEEDED: io.agora.rtm.jni.UPLOAD_MEDIA_ERR_CODE;
					public static UPLOAD_MEDIA_ERR_INTERRUPTED: io.agora.rtm.jni.UPLOAD_MEDIA_ERR_CODE;
					public static UPLOAD_MEDIA_ERR_NOT_INITIALIZED: io.agora.rtm.jni.UPLOAD_MEDIA_ERR_CODE;
					public static UPLOAD_MEDIA_ERR_NOT_LOGGED_IN: io.agora.rtm.jni.UPLOAD_MEDIA_ERR_CODE;
					public toString(): string;
					public static swigToEnum(param0: number): io.agora.rtm.jni.UPLOAD_MEDIA_ERR_CODE;
					public swigValue(): number;
				}
			}
		}
	}
}

//Generics information:
//io.agora.common.LruCache:2
//io.agora.rtm.ResultCallback:1

