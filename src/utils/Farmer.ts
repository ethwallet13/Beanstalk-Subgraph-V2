import { Address } from "@graphprotocol/graph-ts";
import { Farmer, FarmerBalanceDailySnapshot, FarmerBalanceHourlySnapshot } from "../../generated/schema";
import { dayFromTimestamp } from "./Dates";

export function loadFarmer(account: Address) : Farmer {
    let farmer = Farmer.load(account.toHex())
      if (farmer == null) {
        let farmer = new Farmer(account.toHex())
        farmer.unripebeans = ZERO_BD
        farmer.circulatingBeans = ZERO_BD
        farmer.depositedBeans = ZERO_BD
        farmer.withdrawnBeans = ZERO_BD
        farmer.earnedBeans = ZERO_BD
        farmer.earnedStalks = ZERO_BD
        farmer.earnedSeeds = ZERO_BD
        farmer.grownStalk = ZERO_BD
        farmer.totalStalks = ZERO_BD
        farmer.totalSeeds = ZERO_BD
        farmer.siloBDV = ZERO_BI
        farmer.siloOwn = ZERO_BD
        farmer.pods = ZERO_BD
        farmer.sown = false
        farmer.save()
        return farmer
      }
    return farmer
  }

export function loadFarmerBalanceHourlySnapshot(account: Address, season: i32, timestamp: BigInt) : Farmer {
    let id = account.toHexString() + '-' + season.toString()
    let snapshot = FarmerBalanceHourlySnapshot.load(id)
    if (snapshot == null) {
        snapshot = new FarmerBalanceHourlySnapshot(id)
        let farmer = loadFarmer(account)
        snapshot.season = season
        snapshot.timestamp = timestamp
        snapshot.farmer = account.toHexString()
        snapshot.unripebeans = farmer.unripebeans
        snapshot.circulatingBeans = farmer.circulatingBeans
        snapshot.depositedBeans = farmer.depositedBeans
        snapshot.withdrawnBeans = farmer.withdrawnBeans
        snapshot.earnedBeans = farmer.earnedBeans
        snapshot.earnedStalks = farmer.earnedStalks
        snapshot.earnedSeeds = farmer.earnedSeeds
        snapshot.grownStalk = farmer.grownStalk
        snapshot.totalStalks = farmer.totalStalks
        snapshot.totalSeeds = farmer.totalSeeds
        snapshot.siloBDV = farmer.siloBDV
        snapshot.siloOwn = farmer.siloOwn
        snapshot.pods = farmer.pods
        snapshot.save()
       return snapshot
     }
    return snapshot
  }

  export function loadFarmerBalanceDailySnapshot(account: Address, season: i32, timestamp: BigInt) : Farmer {
    let day = dayFromTimestamp(timestamp)
    let id = account.toHexString() + '-' + day.toString()
    let snapshot = FarmerBalanceDailySnapshot.load(id)
    if (snapshot == null) {
        snapshot = new FarmerBalanceDailySnapshot(id)
        let farmer = loadFarmer(account)
        snapshot.season = season
        snapshot.timestamp = timestamp
        snapshot.farmer = account.toHexString()
        snapshot.unripebeans = farmer.unripebeans
        snapshot.circulatingBeans = farmer.circulatingBeans
        snapshot.depositedBeans = farmer.depositedBeans
        snapshot.withdrawnBeans = farmer.withdrawnBeans
        snapshot.earnedBeans = farmer.earnedBeans
        snapshot.earnedStalks = farmer.earnedStalks
        snapshot.earnedSeeds = farmer.earnedSeeds
        snapshot.grownStalk = farmer.grownStalk
        snapshot.totalStalks = farmer.totalStalks
        snapshot.totalSeeds = farmer.totalSeeds
        snapshot.siloBDV = farmer.siloBDV
        snapshot.siloOwn = farmer.siloOwn
        snapshot.pods = farmer.pods
        snapshot.save()
       return snapshot
     }
    return snapshot
  }