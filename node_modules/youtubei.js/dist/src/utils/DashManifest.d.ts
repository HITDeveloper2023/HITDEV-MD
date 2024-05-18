/** @jsxFactory DashUtils.createElement */
/** @jsxFragmentFactory DashUtils.Fragment */
import type Actions from '../core/Actions.js';
import type Player from '../core/Player.js';
import type { IStreamingData } from '../parser/index.js';
import type { PlayerStoryboardSpec } from '../parser/nodes.js';
import type { FormatFilter, URLTransformer } from '../types/FormatUtils.js';
export declare function toDash(streaming_data?: IStreamingData, url_transformer?: URLTransformer, format_filter?: FormatFilter, cpn?: string, player?: Player, actions?: Actions, storyboards?: PlayerStoryboardSpec): Promise<string>;
