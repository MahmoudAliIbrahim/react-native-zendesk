"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.showArticle = exports.showTicketList = exports.showNewTicket = exports.showHelpCenter = exports.identifyAnonymous = exports.identifyJWT = exports.initialize = void 0;
var react_native_1 = require("react-native");
var RNZendesk = react_native_1.NativeModules.RNZendesk;
// MARK: - Initialization
function initialize(config) {
    RNZendesk.initialize(config);
}
exports.initialize = initialize;
// MARK: - Indentification
function identifyJWT(token) {
    RNZendesk.identifyJWT(token);
}
exports.identifyJWT = identifyJWT;
function identifyAnonymous(name, email) {
    RNZendesk.identifyAnonymous(name, email);
}
exports.identifyAnonymous = identifyAnonymous;
function showHelpCenter(options) {
    RNZendesk.showHelpCenter(options);
}
exports.showHelpCenter = showHelpCenter;
function showNewTicket(options) {
    RNZendesk.showNewTicket(options);
}
exports.showNewTicket = showNewTicket;
function showTicketList() {
    RNZendesk.showTicketList();
}
exports.showTicketList = showTicketList;
function showArticle(options) {
    RNZendesk.showArticle(options);
}
exports.showArticle = showArticle;
