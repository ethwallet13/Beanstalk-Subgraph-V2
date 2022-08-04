import { Address, BigInt } from "@graphprotocol/graph-ts";
import { Season, State } from "../../generated/schema";
import { ONE_BI, ZERO_BD, ZERO_BI } from "./Decimals";

export function getState(): State {
    let state = State.load("0")
    if (state == null) {
      let state = new State("0")
      return state
    }
    return state as State
}

export function loadSeason(diamondAddress: Address, id: BigInt): Season {
    let season = Season.load(id.toString())
    if (season == null) {
        season = new Season(id.toString())
        season.beanstalk = diamondAddress.toHexString()
        season.season = id.toI32()
        season.timestamp = ZERO_BI
        season.twap = ZERO_BD
        season.beans = ZERO_BI
        season.deltaBeans = ZERO_BI
        season.harvestableIndex = ZERO_BI
        season.save()
        if (id > ZERO_BI) {
            let lastSeason = loadSeason(diamondAddress, id.minus(ONE_BI))
            season.beans = lastSeason.beans
            season.harvestableIndex = lastSeason.harvestableIndex
            season.save()
        }
    }
    return season as Season
}

export function loadCurrentSeason(diamondAddress: Address, id: BigInt) : Season {
    let state = State.load("0")
    if (state == null) return loadSeason(diamondAddress, ONE_BI)
    return loadSeason(diamondAddress, state.season)
}