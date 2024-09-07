"use strict";
(self["webpackChunkethWarsaw2024"] = self["webpackChunkethWarsaw2024"] || []).push([[680],{

/***/ 6354:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   T7: () => (/* binding */ OffchainLookupError),
/* harmony export */   _p: () => (/* binding */ OffchainLookupSenderMismatchError),
/* harmony export */   lV: () => (/* binding */ OffchainLookupResponseMalformedError)
/* harmony export */ });
/* harmony import */ var _utils_stringify_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6798);
/* harmony import */ var _base_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5484);
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7988);



class OffchainLookupError extends _base_js__WEBPACK_IMPORTED_MODULE_0__/* .BaseError */ .C {
    constructor({ callbackSelector, cause, data, extraData, sender, urls, }) {
        super(cause.shortMessage ||
            'An error occurred while fetching for an offchain result.', {
            cause,
            metaMessages: [
                ...(cause.metaMessages || []),
                cause.metaMessages?.length ? '' : [],
                'Offchain Gateway Call:',
                urls && [
                    '  Gateway URL(s):',
                    ...urls.map((url) => `    ${(0,_utils_js__WEBPACK_IMPORTED_MODULE_1__/* .getUrl */ .I)(url)}`),
                ],
                `  Sender: ${sender}`,
                `  Data: ${data}`,
                `  Callback selector: ${callbackSelector}`,
                `  Extra data: ${extraData}`,
            ].flat(),
            name: 'OffchainLookupError',
        });
    }
}
class OffchainLookupResponseMalformedError extends _base_js__WEBPACK_IMPORTED_MODULE_0__/* .BaseError */ .C {
    constructor({ result, url }) {
        super('Offchain gateway response is malformed. Response data must be a hex value.', {
            metaMessages: [
                `Gateway URL: ${(0,_utils_js__WEBPACK_IMPORTED_MODULE_1__/* .getUrl */ .I)(url)}`,
                `Response: ${(0,_utils_stringify_js__WEBPACK_IMPORTED_MODULE_2__/* .stringify */ .A)(result)}`,
            ],
            name: 'OffchainLookupResponseMalformedError',
        });
    }
}
class OffchainLookupSenderMismatchError extends _base_js__WEBPACK_IMPORTED_MODULE_0__/* .BaseError */ .C {
    constructor({ sender, to }) {
        super('Reverted sender address does not match target contract address (`to`).', {
            metaMessages: [
                `Contract address: ${to}`,
                `OffchainLookup sender address: ${sender}`,
            ],
            name: 'OffchainLookupSenderMismatchError',
        });
    }
}
//# sourceMappingURL=ccip.js.map

/***/ }),

/***/ 3680:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   offchainLookup: () => (/* binding */ offchainLookup),
/* harmony export */   offchainLookupSignature: () => (/* binding */ offchainLookupSignature)
/* harmony export */ });
/* unused harmony exports offchainLookupAbiItem, ccipRequest */
/* harmony import */ var _actions_public_call_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9959);
/* harmony import */ var _errors_ccip_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6354);
/* harmony import */ var _errors_request_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1788);
/* harmony import */ var _abi_decodeErrorResult_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5283);
/* harmony import */ var _abi_encodeAbiParameters_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3406);
/* harmony import */ var _address_isAddressEqual_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2382);
/* harmony import */ var _data_concat_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5074);
/* harmony import */ var _data_isHex_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8689);
/* harmony import */ var _stringify_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6798);









const offchainLookupSignature = '0x556f1830';
const offchainLookupAbiItem = {
    name: 'OffchainLookup',
    type: 'error',
    inputs: [
        {
            name: 'sender',
            type: 'address',
        },
        {
            name: 'urls',
            type: 'string[]',
        },
        {
            name: 'callData',
            type: 'bytes',
        },
        {
            name: 'callbackFunction',
            type: 'bytes4',
        },
        {
            name: 'extraData',
            type: 'bytes',
        },
    ],
};
async function offchainLookup(client, { blockNumber, blockTag, data, to, }) {
    const { args } = (0,_abi_decodeErrorResult_js__WEBPACK_IMPORTED_MODULE_0__/* .decodeErrorResult */ .W)({
        data,
        abi: [offchainLookupAbiItem],
    });
    const [sender, urls, callData, callbackSelector, extraData] = args;
    const { ccipRead } = client;
    const ccipRequest_ = ccipRead && typeof ccipRead?.request === 'function'
        ? ccipRead.request
        : ccipRequest;
    try {
        if (!(0,_address_isAddressEqual_js__WEBPACK_IMPORTED_MODULE_1__/* .isAddressEqual */ .h)(to, sender))
            throw new _errors_ccip_js__WEBPACK_IMPORTED_MODULE_2__/* .OffchainLookupSenderMismatchError */ ._p({ sender, to });
        const result = await ccipRequest_({ data: callData, sender, urls });
        const { data: data_ } = await (0,_actions_public_call_js__WEBPACK_IMPORTED_MODULE_3__/* .call */ .T)(client, {
            blockNumber,
            blockTag,
            data: (0,_data_concat_js__WEBPACK_IMPORTED_MODULE_4__/* .concat */ .xW)([
                callbackSelector,
                (0,_abi_encodeAbiParameters_js__WEBPACK_IMPORTED_MODULE_5__/* .encodeAbiParameters */ .h)([{ type: 'bytes' }, { type: 'bytes' }], [result, extraData]),
            ]),
            to,
        });
        return data_;
    }
    catch (err) {
        throw new _errors_ccip_js__WEBPACK_IMPORTED_MODULE_2__/* .OffchainLookupError */ .T7({
            callbackSelector,
            cause: err,
            data,
            extraData,
            sender,
            urls,
        });
    }
}
async function ccipRequest({ data, sender, urls, }) {
    let error = new Error('An unknown error occurred.');
    for (let i = 0; i < urls.length; i++) {
        const url = urls[i];
        const method = url.includes('{data}') ? 'GET' : 'POST';
        const body = method === 'POST' ? { data, sender } : undefined;
        try {
            const response = await fetch(url.replace('{sender}', sender).replace('{data}', data), {
                body: JSON.stringify(body),
                method,
            });
            let result;
            if (response.headers.get('Content-Type')?.startsWith('application/json')) {
                result = (await response.json()).data;
            }
            else {
                result = (await response.text());
            }
            if (!response.ok) {
                error = new _errors_request_js__WEBPACK_IMPORTED_MODULE_6__/* .HttpRequestError */ .Ci({
                    body,
                    details: result?.error
                        ? (0,_stringify_js__WEBPACK_IMPORTED_MODULE_7__/* .stringify */ .A)(result.error)
                        : response.statusText,
                    headers: response.headers,
                    status: response.status,
                    url,
                });
                continue;
            }
            if (!(0,_data_isHex_js__WEBPACK_IMPORTED_MODULE_8__/* .isHex */ .q)(result)) {
                error = new _errors_ccip_js__WEBPACK_IMPORTED_MODULE_2__/* .OffchainLookupResponseMalformedError */ .lV({
                    result,
                    url,
                });
                continue;
            }
            return result;
        }
        catch (err) {
            error = new _errors_request_js__WEBPACK_IMPORTED_MODULE_6__/* .HttpRequestError */ .Ci({
                body,
                details: err.message,
                url,
            });
        }
    }
    throw error;
}
//# sourceMappingURL=ccip.js.map

/***/ })

}]);
//# sourceMappingURL=680.js.map