const {CustomError} = require("../utils/error");


class ServiceError extends CustomError {
    constructor(code,msg,service) {
        super(code,`${service} Service:${msg}`);
        this.service=service;
    }
}

class UserServiceError extends ServiceError {
    constructor(event) {
        super(event.code,event.msg,"User");
    }
}

class ContractServiceError extends ServiceError {
    constructor(event) {
        super(event.code,event.msg,"Contract");
    }
}

class ContractManagerServiceError extends ServiceError {
    constructor(event) {
        super(event.code,event.msg,"Contract");
    }
}

class ItemServiceError extends ServiceError {
    constructor(event) {
        super(event.code,event.msg,"Item");
    }
}

class CreationServiceError extends ServiceError {
    constructor(event) {
        super(event.code,event.msg,"Creation");
    }
}

class ERC721ServiceError extends ServiceError {
    constructor(event) {
        super(event.code,event.msg,"Creation");
    }
}

class OrderServiceError extends ServiceError {
    constructor(event) {
        super(event.code,event.msg,"Order");
    }
}

class Event {
    constructor(code, msg) {
        this.code=code;
        this.msg=msg;
    }
}

serviceEvent={
    USER_NOT_FOUND:new Event(101,"user not found"),
    CONTRACT_EXISTED:new Event(201,"contract has already existed"),
    CONTRACT_NOT_FOUND:new Event(202,"contract not found"),
    ITEM_EXISTED:new Event(301,"item has already existed"),
    ITEM_NOT_FOUND:new Event(302,"item not found"),
    ORDER_NOT_FOUND:new Event(401,"order not found"),
}

module.exports={
    UserServiceError,
    CreationServiceError,
    ItemServiceError,
    ContractServiceError,
    ContractManagerServiceError,
    ERC721ServiceError,
    OrderServiceError: OrderServiceError,
    serviceEvent,
}
