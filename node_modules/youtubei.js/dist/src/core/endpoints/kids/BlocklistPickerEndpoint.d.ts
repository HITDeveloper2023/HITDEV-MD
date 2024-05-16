import type { IBlocklistPickerRequest, BlocklistPickerRequestEndpointOptions } from '../../../types/index.js';
export declare const PATH = "/kids/get_kids_blocklist_picker";
/**
 * Builds a `/kids/get_kids_blocklist_picker` request payload.
 * @param options - The options to use.
 * @returns The payload.
 */
export declare function build(options: BlocklistPickerRequestEndpointOptions): IBlocklistPickerRequest;
