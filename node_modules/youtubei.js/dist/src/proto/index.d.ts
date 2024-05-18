import type { UpdateVideoMetadataOptions } from '../types/index.js';
import * as VisitorData from './generated/messages/youtube/VisitorData.js';
export declare function encodeVisitorData(id: string, timestamp: number): string;
export declare function decodeVisitorData(visitor_data: string): VisitorData.Type;
export declare function encodeChannelAnalyticsParams(channel_id: string): string;
export declare function encodeSearchFilters(filters: {
    upload_date?: 'all' | 'hour' | 'today' | 'week' | 'month' | 'year';
    type?: 'all' | 'video' | 'channel' | 'playlist' | 'movie';
    duration?: 'all' | 'short' | 'medium' | 'long';
    sort_by?: 'relevance' | 'rating' | 'upload_date' | 'view_count';
    features?: ('hd' | 'subtitles' | 'creative_commons' | '3d' | 'live' | 'purchased' | '4k' | '360' | 'location' | 'hdr' | 'vr180')[];
}): string;
export declare function encodeMusicSearchFilters(filters: {
    type?: 'all' | 'song' | 'video' | 'album' | 'playlist' | 'artist';
}): string;
export declare function encodeMessageParams(channel_id: string, video_id: string): string;
export declare function encodeCommentsSectionParams(video_id: string, options?: {
    type?: number;
    sort_by?: 'TOP_COMMENTS' | 'NEWEST_FIRST';
}): string;
export declare function encodeCommentParams(video_id: string): string;
export declare function encodeCommentActionParams(type: number, args?: {
    comment_id?: string;
    video_id?: string;
    text?: string;
    target_language?: string;
}): string;
export declare function encodeNotificationPref(channel_id: string, index: number): string;
export declare function encodeVideoMetadataPayload(video_id: string, metadata: UpdateVideoMetadataOptions): Uint8Array;
export declare function encodeCustomThumbnailPayload(video_id: string, bytes: Uint8Array): Uint8Array;
export declare function encodeHashtag(hashtag: string): string;
