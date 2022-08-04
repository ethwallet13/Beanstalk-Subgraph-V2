import { Address, BigInt } from "@graphprotocol/graph-ts";
import { Silo, SiloAsset, Token, SiloAssetHourlySnapshot, SiloAssetDailySnapshot } from "../../generated/schema";
import { ZERO_BD, ZERO_BI } from "./Decimals";
import { dayFromTimestamp } from "./Dates";

export function loadSiloAsset(silo: Silo, token: Token): SiloAsset {
    let id = silo.id.toString().concat('-').concat(token.id.toString())
    let asset = SiloAsset.load(id)
    if (asset == null) {
        asset = new SiloAsset(id)
        asset.silo = silo.id
        asset.token = token.id
        asset.totalValueLockedUSD = ZERO_BD
        asset.totalDepositedAmount = ZERO_BI
        asset.totalStalk = ZERO_BI
        asset.totalSeeds = ZERO_BI
        asset.save()
    }
    return asset
}

export function loadSiloAssetHourlySnapshot(silo: Silo, token: Token, season: i32, timestamp: BigInt): SiloAssetHourlySnapshot {
    let id = silo.id.toString().concat('-').concat(token.id.toString()) + '-' + season.toString()
    let snapshot = SiloAssetHourlySnapshot.load(id)
    if (snapshot == null) {
        snapshot = new SiloAssetHourlySnapshot(id)
        let asset = loadSiloAsset(silo, Token)
        snapshot.season = season
        snapshot.siloAsset = asset.id
        snapshot.totalValueLockedUSD = ZERO_BD
        snapshot.totalDepositedAmount = ZERO_BD
        snapshot.totalStalk = ZERO_BI
        snapshot.totalSeeds = ZERO_BI
        snapshot.cumulativeDepositedUSD = ZERO_BD
        snapshot.hourlyDepositedUSD = ZERO_BD
        snapshot.hourlyDepositedAmount = ZERO_BI
        snapshot.hourlyWithdrawnAmount = ZERO_BI
        snapshot.hourlyStalkDelta = ZERO_BI
        snapshot.hourlySeedsDelta = ZERO_BI
        snapshot.blockNumber = ZERO_BI
        snapshot.timestamp = timestamp
        snapshot.save()
    }
    return snapshot
}

export function loadSiloAssetDailySnapshot(silo: Silo, token: Token, season: i32, timestamp: BigInt): SiloAssetDailySnapshot  {
    let day = dayFromTimestamp(timestamp)
    let id = silo.id.toString().concat('-').concat(token.id.toString()) + '-' + day.toString()
    let snapshot = SiloAssetHourlySnapshot.load(id)
    if (snapshot == null) {
        snapshot = new SiloAssetDailySnapshot(id)
        let asset = loadSiloAsset(silo, Token)
        snapshot.season = season
        snapshot.siloAsset = asset.id
        snapshot.totalValueLockedUSD = ZERO_BD
        snapshot.totalDepositedAmount = ZERO_BD
        snapshot.totalStalk = ZERO_BI
        snapshot.totalSeeds = ZERO_BI
        snapshot.cumulativeDepositedUSD = ZERO_BD
        snapshot.dailyDepositedUSD = ZERO_BD
        snapshot.dailyDepositedAmount = ZERO_BI
        snapshot.dailyWithdrawnAmount = ZERO_BI
        snapshot.dailyStalkDelta = ZERO_BI
        snapshot.dailySeedsDelta = ZERO_BI
        snapshot.blockNumber = ZERO_BI
        snapshot.timestamp = timestamp
        snapshot.save()
    }
    return snapshot
}