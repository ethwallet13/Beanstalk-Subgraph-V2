import { Address, BigInt } from "@graphprotocol/graph-ts";
import { SiloWithdraw } from "../../generated/schema";
import { ZERO_BD, ZERO_BI } from "./Decimals";

export function loadSiloWithdraw(account: Address, token: Address, season: BigInt): SiloWithdraw {
    let id = account.toHexString() + '-' + token.toHexString() + '-' + season.toString()
    let withdraw = SiloWithdraw.load(id)
    if (withdraw == null) {
        withdraw = new SiloWithdraw(id)
        withdraw.farmer = account.toHexString()
        withdraw.token = token.toHexString()
        withdraw.season = season.toI32()
        withdraw.tokenAmount = ZERO_BI
        withdraw.bdv = ZERO_BI
        withdraw.stalk = ZERO_BI
        withdraw.seeds = ZERO_BI
        withdraw.hashes = []
        withdraw.createdAt = ZERO_BI
        withdraw.updatedAt = ZERO_BI
        withdraw.save()
    }
    return withdraw
}